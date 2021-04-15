const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// Sending Mail
exports.sendEmail = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content Can't Be Empty!" });
    return;
  } else {
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECT_URI = process.env.REDIRECT_URI;
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    async function sendMail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "mailfortestingapp0@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken,
          },
        });

        //   Form Data
          let name = req.body.user_name;
          let email = req.body.user_email;
          let subject = req.body.subject;
          let msg = req.body.user_message;
          
          
        const mailOptions = {
          from: `SENDER: <mailfortestingapp0@gmail.com>`,
          to: "mailforharshdubey@gmail.com",
          subject: subject,
          text: `Name:${name} \n Email: ${email} \n ${msg}`,
          html: `
            <h6>Name:${name} Email: ${email}</h6>
          <h3>${msg}</h3>
          `,
        };

        const result = await transport.sendMail(mailOptions);
        return result;
      } catch (error) {
        return error;
      }
      }
    
      
      sendMail()
          .then((result) => {
              console.log("Message Sent!!!",result);
          res.render("contact", { message: "MESSAGE SENT!!" });
        })
          .catch((error) => {
              console.log("ERROR >>>>>> ",error.message);
              res.render("contact", { message: error.message })
          });

  }
};
