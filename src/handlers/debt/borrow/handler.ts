import { RouteHanderResult } from '@/handlers/_shared/defaultResponse'
import { dbUtils } from '@/utils/db'
import { userUtils } from '@/utils/user'
import { DEBT_STATUS, FLAG } from '@prisma/client'
import { RouteHandlerMethod } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import { BorrowDebtRequest } from './request'
import { BorrowDebtResult, BorrowDebtResponse } from './response'

export const borrowDebtHandler: RouteHandlerMethod = async function (request, reply): RouteHanderResult<BorrowDebtResponse> {
    const body = request.body as BorrowDebtRequest

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

    // create debt record
    await this.prisma.debt.create({
        data: {
            debt_id: dbUtils.generateId(),
            borrower_user_id: body.borrower_user_id,
            lender_user_id: body.lender_user_id,
            debt_description: body.debt_description,
            debt_amount: body.debt_amount,
            debt_status: DEBT_STATUS.WAITING,
            is_borrower_accepted: FLAG.YES,
        },
    })

    // result
    const result: BorrowDebtResult = null

    // response
    const response: BorrowDebtResponse = {
        result: result,
        message: 'New debt record is added with WAITING status.',
    }

    // 201 created
    reply.status(StatusCodes.CREATED)

    return response
}
