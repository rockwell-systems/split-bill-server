import { Prisma } from '@prisma/client'
import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'

import { RouteHanderResult } from '@/handlers/_shared/defaultResponse'
import { dbUtils } from '@/utils/db'
import { userUtils } from '@/utils/user'

import { DBT002RequestType } from './DBT002Request'
import { DBT002ResponseType, DBT002ResultType } from './DBT002Response'

export const DBT002Handler: RouteHandlerMethod = async function (request, reply): RouteHanderResult<DBT002ResponseType> {
    const body = request.body as DBT002RequestType

    const userInfo = userUtils.getCurrentUser(request)

    // lend offer can only initiate from himself/herself
    if (body.lender_user_id !== userInfo.user_id) {
        return this.httpErrors.forbidden()
    }

    // empty borrower list error
    if (body.borrower_user_ids.length <= 0) {
        return this.httpErrors.badRequest('Empty borrower list.')
    }

    // TODO: remove duplicate borrower ids
    // TODO: remove self id from borrower ids

    // search lender user by id
    const lenderSearchResult = await this.prisma.user.findUnique({
        where: {
            user_id: body.lender_user_id,
        },
    })
    // lender user not found error
    if (!lenderSearchResult) {
        return this.httpErrors.badRequest('Lender user not found.')
    }

    // borrower user not found error
    for (let i = 0; i < body.borrower_user_ids.length; i++) {
        // search borrower user by id
        const borrowerUser = await this.prisma.user.findUnique({
            where: {
                user_id: body.borrower_user_ids[i],
            },
        })
        // borrower user not found error
        if (!borrowerUser) {
            return this.httpErrors.badRequest('Borrower user not found.')
        }
    }

    const sysDate = await dbUtils.getSysDate(this.prisma)

    // prepare debt records
    const debtRecords: Prisma.debtCreateManyArgs = {
        data: body.borrower_user_ids.map((borrower_user_id) => {
            return {
                debt_id: dbUtils.generateId(),
                lender_user_id: body.lender_user_id,
                borrower_user_id: borrower_user_id,
                debt_description: body.debt_description,
                debt_amount: body.debt_amount,
                phase1_lender_accepted_date: sysDate,
            }
        }),
    }

    // create debt records
    await this.prisma.debt.createMany(debtRecords)

    // result
    const result: DBT002ResultType = null

    // response
    const response: DBT002ResponseType = {
        result: result,
        message: 'New debt records are added.',
    }

    // 201 created
    reply.status(StatusCodes.CREATED)

    return response
}
