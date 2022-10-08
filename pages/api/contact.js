export default function (req, res) {
    require('dotenv').config()
    const {message, email, name} = req.body
    let nodemailer = require('nodemailer')
    // var hbs = require('nodemailer-express-handlebars');
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "eqtoss2022@gmail.com",
        pass: "nnlurseihiyzkyyr",
      },
      secure: true,
    })
    // transporter.use('compile', hbs({
    //   viewEngine: 'express-handlebars',
    //   viewPath: './pages/api/views'
    // }))
    const mailData = {
      from: "eqtoss2022@gmail.com",
      to: email,
      subject: `whats up mfs`,
      text: "we just wanna rest in peace",
      // template: 'index',
      html: `<div>${message}</div><p style="color:blue;" >Sent from:
      ${name}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
      
        console.log(info, 'message sent')
    })
    res.status(200)
  }
