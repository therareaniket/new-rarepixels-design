import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_cBpcAHc1_FrNesxzb57iVM9TDNKwmwGXr');

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
        const selectedServices = services.join('&nbsp;&nbsp;||&nbsp;&nbsp;');

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
            from: 'RarePixelsDesign LLP<contact@rarepixelsdesign.in>',
            to: ['rajvi.rarepixelsdesign@gmail.com', 'aniketbhatti.rarepixelsdesign@gmail.com'],
            replyTo: email,
            subject: `New Inquiry — ${services[0]} | ${name} | RarePixels`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f6; margin: 0; padding: 30px 15px; color: #333333; }
                        .email-card { max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06); border: 1px solid #e5e5e7; }
                        .header-banner { background-color: #ED0180; padding: 24px 30px; display: table; width: 100%; box-sizing: border-box; }
                        .brand-title { color: #ffffff; font-size: 20px; font-weight: 700; margin: 0; display: table-cell; vertical-align: middle; }
                        .badge-wrapper { display: table-cell; text-align: right; vertical-align: middle; }
                        .badge { background-color: #FBF9E9; color: #000000; font-size: 11px; font-weight: 700; letter-spacing: 0.8px; padding: 6px 14px; border-radius: 20px; text-transform: uppercase; }
                        .content-table { width: 100%; border-collapse: collapse; }
                        .section-header {
                            background-color: #ffffff;
                            padding: 16px 30px 8px 30px;
                            font-size: 12px;
                            font-weight: 700;
                            color: #888888;
                            letter-spacing: 0.8px;
                            text-transform: uppercase;
                            border-bottom: 1px solid #f0f0f2;
                        }
                        .data-row td { padding: 14px 30px; font-size: 14px; border-bottom: 1px solid #f0f0f2; }
                        .label-col { width: 32%; color: #666666; font-weight: 500; }
                        .value-col { width: 68%; color: #000000; font-weight: 600; }
                        .value-link { color: #040E36; text-decoration: none; }
                        .brief-section { padding: 20px 30px 30px 30px; }
                        .brief-box {
                            background-color: #fdf5f9;
                            border-left: 3px solid #ED0180;
                            padding: 16px 20px;
                            border-radius: 0 8px 8px 0;
                            color: #333333;
                            font-size: 14px;
                            line-height: 1.6;
                        }
                        .footer-bar {
                            background-color: #f8f8fa;
                            padding: 14px 30px;
                            font-size: 12px;
                            color: #888888;
                            border-top: 1px solid #f0f0f2;
                            display: table;
                            width: 100%;
                            box-sizing: border-box;
                        }
                        .footer-left { display: table-cell; text-align: left; }
                        .footer-right { display: table-cell; text-align: right; }
                        .footer-link { color: #777777; text-decoration: none; }
                    </style>
                </head>
                <body>
                    <div class="email-card">
                        <div class="header-banner">
                            <h1 class="brand-title">RarePixels Design</h1>
                            <div class="badge-wrapper">
                                <span class="badge">NEW INQUIRY</span>
                            </div>
                        </div>

                        <table class="content-table">
                            <tr>
                                <td colspan="2" class="section-header">CONTACT DETAILS</td>
                            </tr>
                            <tr class="data-row">
                                <td class="label-col">Name</td>
                                <td class="value-col">${name}</td>
                            </tr>
                            <tr class="data-row">
                                <td class="label-col">Email</td>
                                <td class="value-col"><a href="mailto:${email}" class="value-link" style="color: #040E36 !important;">${email}</a></td>
                            </tr>
                            <tr class="data-row">
                                <td class="label-col">Phone</td>
                                <td class="value-col"><a href="tel:${phone}" class="value-link" style="color: #040E36 !important;">${phone}</a></td>
                            </tr>

                            <tr>
                                <td colspan="2" class="section-header" style="padding-top: 24px;">SERVICE REQUESTED</td>
                            </tr>
                            <tr class="data-row">
                                <td class="label-col">Services</td>
                                <td class="value-col">${selectedServices}</td>
                            </tr>
                            <tr class="data-row">
                                <td class="label-col">Attachment</td>
                                <td class="value-col">${file && file.size > 0 ? file.name : 'No file attached'}</td>
                            </tr>

                            <tr>
                                <td colspan="2" class="section-header" style="padding-top: 24px;">PROJECT BRIEF</td>
                            </tr>
                        </table>

                        <div class="brief-section">
                            <div class="brief-box">
                                "${message ? message.replace(/\n/g, '<br/>') : 'No additional details provided.'}"
                            </div>
                        </div>

                        <div class="footer-bar">
                            <div class="footer-left">
                                Submitted: ${submissionTime}
                            </div>
                            <div class="footer-right">
                                <a href="https://www.rarepixelsdesign.in/Contact" class="footer-link" style="color: #040E36 !important;">rarepixelsdesign.in/contact</a>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `,
            attachments,
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