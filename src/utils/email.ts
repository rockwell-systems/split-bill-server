import { EMAIL_CONSTANTS } from '@/constants/emailConstants'
import { SendSmtpEmail } from '@sendinblue/client'
import SibApiV3Sdk = require('@sendinblue/client')
import env from '@/utils/env'

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()

apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, env.SENDINBLUE_API_KEY)

export const emailUtils = {
    sendOtpEmail: async (name: string, email: string, otp: string) => {
        const mailInfo: SendSmtpEmail = {
            templateId: EMAIL_CONSTANTS.OTP_TEMPLATE_ID,
            sender: {
                name: EMAIL_CONSTANTS.SENDER_NAME,
                email: EMAIL_CONSTANTS.SENDER_EMAIL,
            },
            to: [
                {
                    name: name,
                    email: email,
                },
            ],
            params: {
                name: name,
                otp: otp,
            },
        }
        await apiInstance.sendTransacEmail(mailInfo)
    },
}
