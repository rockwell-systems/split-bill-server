/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prisma } from '@prisma/client'
import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'

import { RouteHanderResult } from '@/handlers/_shared/defaultResponse'
import { userUtils } from '@/utils/user'

import { DBT003QueryType } from './DBT003Query'
import { DBT003DebtRecordType, DBT003ResponseType, DBT003ResultType } from './DBT003Response'

export const DBT003Handler: RouteHandlerMethod = async function (request, reply): RouteHanderResult<DBT003ResponseType> {
    const query = request.query as DBT003QueryType

    const userInfo = userUtils.getCurrentUser(request)

    // find debt records
    const debtSearchResult = await this.prisma.debt.findMany({
        where: {
            lender_user_id: {
                in: query.lender_user_ids,
            },
            borrower_user_id: {
                in: query.borrower_user_ids,
            },
            phase1_lender_accepted_date: query.is_phase1_lender_accepted ? undefined : null,
            phase1_borrower_accepted_date: query.is_phase1_borrower_accepted ? undefined : null,
            phase2_lender_accepted_date: query.is_phase2_lender_accepted ? undefined : null,
            phase2_borrower_accepted_date: query.is_phase2_borrower_accepted ? undefined : null,
        },
    })

    // map to result
    const result: DBT003ResultType = debtSearchResult.map((x) => {
        const debtRecord: DBT003DebtRecordType = {
            debt_id: x.debt_id,
            lender_user_id: x.lender_user_id,
            borrower_user_id: x.borrower_user_id,
            debt_description: x.debt_description,
            debt_amount: x.debt_amount,
            phase1_lender_accepted_date: x.phase1_lender_accepted_date,
            phase1_borrower_accepted_date: x.phase1_borrower_accepted_date,
            phase2_lender_accepted_date: x.phase2_lender_accepted_date,
            phase2_borrower_accepted_date: x.phase2_borrower_accepted_date,
        }
        return debtRecord
    })

    // response
    const response: DBT003ResponseType = {
        result: result,
        message: '',
    }

    // 200 OK
    reply.status(StatusCodes.OK)

    return response
}
