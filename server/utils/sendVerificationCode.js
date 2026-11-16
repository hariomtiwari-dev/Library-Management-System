// import { generateVerificationOtpEmailTemplate } from "./emailTemplates.js";
// import { sendEmail } from "./sendEmail.js";

// export async function sendVerificationCode(verificationCode, email, res) {
//     try {
//         const message = generateVerificationOtpEmailTemplate(verificationCode);

//         sendEmail({
//             email,
//             subject: "Verification Code (Bookworm Library Management System)",
//             message,
//         });

//         res.status(200).json({
//             success: true,
//             message: "Verification code sent successfully.",
//         });
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: "Verification code failed to send.",
//         });
//     }
// }



import { generateVerificationOtpEmailTemplate } from "./emailTemplates.js";
import { sendEmail } from "./sendEmail.js";

export async function sendVerificationCode(verificationCode, email, res) {
    try {
        const message = generateVerificationOtpEmailTemplate(verificationCode);

        await sendEmail({
            email,
            subject: "Verification Code (Bookworm Library Management System)",
            message,
        });

        return res.status(200).json({
            success: true,
            message: "Verification code sent successfully.",
        });
    } catch (error) {
        console.error("OTP Email Error:", error);

        return res.status(500).json({
            success: false,
            message: "Verification code failed to send.",
        });
    }
}
