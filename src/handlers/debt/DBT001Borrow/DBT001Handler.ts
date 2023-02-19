import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'

import { RouteHanderResult } from '@/handlers/_shared/defaultResponse'
import { dbUtils } from '@/utils/db'
import { userUtils } from '@/utils/user'

import { DBT001RequestType } from './DBT001Request'
import { DBT001ResponseType, DBT001ResultType } from './DBT001Response'

export const DBT001Handler: RouteHandlerMethod = async function (request, reply): RouteHanderResult<DBT001ResponseType> {
    const body = request.body as DBT001RequestType

    const userInfo = userUtils.getCurrentUser(request)

    // borrow request can only made for himself/herself
    if (body.borrower_user_id !== userInfo.user_id) {
        return this.httpErrors.forbidden()
    }

    const borrowerSearchResult = await this.prisma.user.findUnique({
        where: {
            user_id: body.borrower_user_id,
        },
    })

    if (!borrowerSearchResult) {
        return this.httpErrors.badRequest('Borrower user not found.')
    }

    const lenderSearchResult = await this.prisma.user.findUnique({
        where: {
            user_id: body.lender_user_id,
        },
    })

    if (!lenderSearchResult) {
        return this.httpErrors.badRequest('Lender user not found.')
    }

    const sysDate = await dbUtils.getSysDate(this.prisma)

    // create debt record
    await this.prisma.debt.create({
        data: {
            debt_id: dbUtils.generateId(),
            borrower_user_id: body.borrower_user_id,
            lender_user_id: body.lender_user_id,
            debt_description: body.debt_description,
            debt_amount: body.debt_amount,
            phase1_borrower_accepted_date: sysDate,
        },
    })

    // result
    const result: DBT001ResultType = null

    // response
    const response: DBT001ResponseType = {
        result: result,
        message: 'New debt record is added with WAITING status.',
    }

    // 201 created
    reply.status(StatusCodes.CREATED)

    return response
}
