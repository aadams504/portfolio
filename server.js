const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "ariannaadams504@gmail.com",
    pass: "ymyqukkzjdnwfmin",
  },
});


router.post("/contact", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message; 
  const mail = {
    from: firstName,
    to: "ariannaadams504@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>First Name: ${firstName}</p>
           <p>Last Name: ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

const http = require('http'); 
const server = http.createServer(app); server.listen(5000);