// const MC_KEY = process.env.MAIL_CHIMP_KEY // for use later

// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: process.env.GMAIL_USERNAME,
//     pass: process.env.GMAIL_PASSWORD,
//   }
// });

const mailOptions = {
  from: process.env.GMAIL_USERNAME,
  to: process.env.GMAIL_USERNAME,
  subject: "New Form Submission from NextLevelMO.com",
  text: "",
};

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
	console.log("calling the function");
	try {
		const body = await req.json();
		console.log(body);

		mailOptions.text = `
    Form: ${body.formName}
    Name: ${body.firstName} ${body.lastName}
    Email: ${body.email}
    ${body.marketingConsent ? "Consented to marketing: True" : "Consented to marketing: False"}

    ${body.message ? body.message : "No Message."}
    `;

		resend.emails.send({
			from: "onboarding@resend.dev",
			to: "tristancollier777@gmail.com",
			subject: "New Form Submission!",
      text: mailOptions.text
		});
		// const info = await transporter.sendMail(mailOptions);
		// console.log("Message sent:", info.message);

		//return a response
		return new Response("Success!", { status: 200 });
	} catch (error) {
		console.error("Error parsing request body:", error);
		return new Response("Error parsing request body", { status: 400 });
	}
}

export async function GET(req, res) {
	console.log(req);
	return new Response("Success!");
}
