import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const message = formData.get('message') as string;
        const services = formData.getAll('services') as string[];
        const file = formData.get('file') as File | null;

        if (!name || !email || !phone || services.length === 0) {
            return NextResponse.json(
                { error: 'All mandatory fields (services, name, email, phone) are required.' },
                { status: 400 }
            );
        }

        const attachments = [];
        if (file && file.size > 0) {
            const buffer = Buffer.from(await file.arrayBuffer());
            attachments.push({
                filename: file.name,
                content: buffer,
            });
        }

        const selectedServices = services.join(' | ');

        const submissionTime = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }) + ' IST';

        const data = await resend.emails.send({
            from: 'RarePixelsDesign LLP <contact@rarepixelsdesign.in>',
            to: ['rajvi.rarepixelsdesign@gmail.com', 'aniketbhatti.rarepixelsdesign@gmail.com'],
            replyTo: email,
            subject: `New Inquiry — From ${name} for ${services[0]}`,
            attachments: attachments.length > 0 ? attachments : undefined,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; background-color: #f4f4f6; font-family: Helvetica, Arial, sans-serif; color: #333333;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f6; padding: 30px 10px;">
                        <tr>
                            <td align="center">                 
                                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e5e7; width: 600px; max-width: 100%;">  
                                    <tr>
                                        <td>
                                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ED0180; padding: 24px 30px;">
                                                <tr>
                                                    <td align="left" style="vertical-align: middle;">
                                                        <h1 style="color: #ffffff; font-size: 20px; font-weight: 700; margin: 0;">RarePixels Design</h1>
                                                    </td>
                                                    <td align="right" style="vertical-align: middle;">
                                                        <span style="background-color: #FBF9E9; color: #000000; font-size: 11px; font-weight: 700; letter-spacing: 0.8px; padding: 6px 14px; border-radius: 20px; text-transform: uppercase; display: inline-block;">NEW INQUIRY</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td colspan="2" style="background-color: #ffffff; padding: 20px 30px 8px 30px; font-size: 12px; font-weight: 700; color: #888888; letter-spacing: 0.8px; text-transform: uppercase; border-bottom: 1px solid #f0f0f2;">CONTACT DETAILS</td>
                                                </tr>

                                                <tr>
                                                    <td style="padding: 14px 30px; font-size: 14px; border-bottom: 1px solid #f0f0f2; width: 32%; color: #666666; font-weight: 500;">Name</td>
                                                    <td style="padding: 14px 30px; font-size: 14px; border-bottom: 1px solid #f0f0f2; width: 68%; color: #000000; font-weight: 600;">${name}</td>
                                                </tr>

                                                <tr>
                                                    <td style="padding: 14px 30px; font-size: 14px; border-bottom: 1px solid #f0f0f2; width: 32%; color: #666666; font-weight: 500;">Email</td>
                                                    <td style="padding: 14px 30px; font-size: 14px; border-bottom: 1px solid #f0f0f2; width: 68%; color: #000000; font-weight: 600;"><a href="mailto:${email}" style="color: #040E36 !important; text-decoration: none;">${email}</a></td>
                                                </tr>

                                                <tr>
                                                    <td style="padding: 14px 30px; font-size: 14px; border-bottom: 1px solid #f0f0f2; width: 32%; color: #666666; font-weight: 500;">Phone</td>
                                                    <td style="padding: 14px 30px; font-size: 14px; border-bottom: 1px solid #f0f0f2; width: 68%; color: #000000; font-weight: 600;"><a href="tel:${phone}" style="color: #040E36 !important; text-decoration: none;">${phone}</a></td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="background-color: #ffffff; padding: 24px 30px 8px 30px; font-size: 12px; font-weight: 700; color: #888888; letter-spacing: 0.8px; text-transform: uppercase; border-bottom: 1px solid #f0f0f2;">SERVICE REQUESTED</td>
                                                </tr>

                                                <tr>
                                                    <td style="padding: 14px 30px; font-size: 14px; border-bottom: 1px solid #f0f0f2; width: 32%; color: #666666; font-weight: 500;">Services</td>
                                                    <td style="padding: 14px 30px; font-size: 14px; border-bottom: 1px solid #f0f0f2; width: 68%; color: #000000; font-weight: 600;">${selectedServices}</td>
                                                </tr>

                                                <tr>
                                                    <td style="padding: 14px 30px; font-size: 14px; border-bottom: 1px solid #f0f0f2; width: 32%; color: #666666; font-weight: 500;">Attachment</td>
                                                    <td style="padding: 14px 30px; font-size: 14px; border-bottom: 1px solid #f0f0f2; width: 68%; color: #000000; font-weight: 600;">${file && file.size > 0 ? file.name : 'No file attached'}</td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2" style="background-color: #ffffff; padding: 24px 30px 8px 30px; font-size: 12px; font-weight: 700; color: #888888; letter-spacing: 0.8px; text-transform: uppercase;">PROJECT BRIEF</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="padding: 10px 30px 20px 30px;">
                                            <div style="background-color: #fdf5f9; border-left: 3px solid #ED0180; padding: 16px 20px; border-radius: 0 8px 8px 0; color: #333333; font-size: 14px; line-height: 1.6;">
                                                "${message ? message.replace(/\n/g, '<br/>') : 'No additional details provided.'}"
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f8fa; padding: 14px 30px; border-top: 1px solid #f0f0f2;">
                                                <tr>
                                                    <td align="left" style="font-size: 12px; color: #888888;">
                                                        Submitted: ${submissionTime}
                                                    </td>
                                                    <td align="right" style="font-size: 12px;">
                                                        <a href="https://www.rarepixelsdesign.in/Contact" style="color: #040E36 !important; text-decoration: none;">rarepixelsdesign.in/contact</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `,
        });

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error('Resend API Error:', error);
        return NextResponse.json(
            { error: 'Failed to send message.' },
            { status: 500 }
        );
    }
}