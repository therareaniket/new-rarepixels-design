import "./contactAPI.css"
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
            subject: `New Inquiry — From ${name} for ${services[0]}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
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