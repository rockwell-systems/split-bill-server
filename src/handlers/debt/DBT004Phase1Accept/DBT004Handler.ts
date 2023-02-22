import { Prisma } from '@prisma/client'
import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'

import { RouteHanderResult } from '@/handlers/_shared/defaultResponse'
import { userUtils } from '@/utils/user'

import { DBT004ParamsType } from './DBT004Params'
import { DBT004ResponseType, DBT004ResultType } from './DBT004Response'
import { dbUtils } from '@/utils/db'

export const DBT004Handler: RouteHandlerMethod = async function (request, reply): RouteHanderResult<DBT004ResponseType> {
    const params = request.params as DBT004ParamsType

    const userInfo = userUtils.getCurrentUser(request)

    // find debt record
    const debtSearchResult = await this.prisma.debt.findUnique({
        where: {
            debt_id: params.debt_id,
        },
    })

    // not found error
    if (!debtSearchResult) {
        return this.httpErrors.notFound()
    }

    // debt record that does not belong to current user
    if (userInfo.user_id != debtSearchResult.lender_user_id && userInfo.user_id != debtSearchResult.borrower_user_id) {
        return this.httpErrors.forbidden()
    }

    // already accepted as a lender
    if (userInfo.user_id == debtSearchResult.lender_user_id && debtSearchResult.phase1_lender_accepted_date) {
        return this.httpErrors.conflict('The debt record is already accepted as a lender.')
    }

    // already accepted as a borrower
    if (userInfo.user_id == debtSearchResult.borrower_user_id && debtSearchResult.phase1_borrower_accepted_date) {
        return this.httpErrors.conflict('The debt record is already accepted as a borrower.')
    }

    const systemDate = await dbUtils.getSysDate(this.prisma)

    // update debt record
    await this.prisma.debt.update({
        where: {
            debt_id: params.debt_id,
        },
        data: {
            phase1_lender_accepted_date: userInfo.user_id == debtSearchResult.lender_user_id ? systemDate : undefined,
            phase1_borrower_accepted_date: userInfo.user_id == debtSearchResult.borrower_user_id ? systemDate : undefined,
            updated_at: systemDate,
        },
    })

    // result
    const result: DBT004ResultType = null

    // response
    const response: DBT004ResponseType = {
        result: result,
        message: 'Success.',
    }

    // 201 Created
    reply.status(StatusCodes.CREATED)

    return response
}
