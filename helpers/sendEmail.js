const sgMail = require("@sendgrid/mail");
require("dotenv").config();
// const nodemailer = require("nodemailer");
// const { META_PASSWORD } = process.env;

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "ell.atroshchenko@gmail.com" };
  // eslint-disable-next-line no-useless-catch
  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

// Вариант с нодемэйлером

// const nodemailerConfig = {
//   host: "mail.devell.fun",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "ell@devell.fun",
//     pass: META_PASSWORD,
//   },
// };
// const email = {
//   to: "ell.atroshchenko@gmail.com",
//   from: "ell@devell.fun",
//   subject: "Test message",
//   html: "Test text",
// };

// const transporter = nodemailer.createTransport(nodemailerConfig);
// transporter
//   .sendEmail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));

module.exports = {
  sendEmail,
};
