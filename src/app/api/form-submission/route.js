


// const mailOptions = {
// 	from: process.env.GMAIL_USERNAME,
// 	to: process.env.GMAIL_USERNAME,
// 	subject: "New Form Submission from NextLevelMO.com",
// 	text: "",
// };

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request, res) {


// 	try {


// 		const body = await request.json();
// 		console.log(body);

// 		mailOptions.text = `
// 	    Form: ${body.formName}
// 	    Name: ${body.firstName} ${body.lastName}
// 	    Email: ${body.email}
// 	    ${body.marketingConsent ? "Consented to marketing: True" : "Consented to marketing: False"}

// 	    ${body.message ? body.message : "No Message."}
//     `;

// 		resend.emails.send({
// 			from: "onboarding@resend.dev",
// 			to: "tristancollier777@gmail.com",
// 			subject: "New Form Submission!",
// 			text: mailOptions.text,
// 		});

// 		console.log("Email sent successfully");
// 		return new Response("Success!", { status: 200 });
// 	} catch (error) {
// 		console.error("Error parsing request body:", error);
// 		return new Response("Error parsing request body", { status: 400 });
// 	}
// }

// export async function PATCH(request) {
// 	console.log("calling the PATCH function");
// 	try {
// 		const body = await request.json();
// 		console.log(body);

// 		mailOptions.text = `
// 	    Form: ${body.formName}
// 	    Name: ${body.firstName} ${body.lastName}
// 	    Email: ${body.email}
// 	    ${body.marketingConsent ? "Consented to marketing: True" : "Consented to marketing: False"}

// 	    ${body.message ? body.message : "No Message."}
//     `;

// 		transporter.sendMail(mailOptions, (error) => {
// 			console.log(error);
// 		});

// 		console.log("Email sent successfully");
// 		return new Response("Success!", { status: 200 });
// 	} catch (error) {
// 		console.error("Error parsing request body:", error);
// 		return new Response("Error parsing request body", { status: 400 });
// 	}
// }

// export async function GET(req, res) {
// 	console.log("Calling the GET Function!");
// 	return new Response("Success!");
// }
