import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  }
});

const mailOptions = {
  from: process.env.GMAIL_USERNAME,
  to: process.env.GMAIL_USERNAME,
  subject: "New Form Submission from NextLevelMO.com",
  text: "",
};



const MC_KEY = process.env.MAIL_CHIMP_KEY // for use later



export async function POST(req) {
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

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.message);

    //return a response
    return new Response("Success!", { status: 200 });

  } catch (error) {
    console.error("Error parsing request body:", error);
    return new Response("Error parsing request body", { status: 400 });
  }
}




export async function GET (req, res) {
  console.log(req)
  return new Response('Success!')
}