export default function (req, res) {
    require('dotenv').config()
    const {message, mail, name} = req.body
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
      to: mail,
      subject: `whats up mfs`,
      text: "we just wanna rest in peace",
      // template: 'index',
      html: `<div><h3 style=" width: 500px;
      font-style: italic;
      padding: 10px ;
      text-align: center;
      border: 1px solid gray;
      margin: auto;" > hello </h3><p >Sent from:
      eQToss</p></div>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
      
        console.log(info, 'message sent')
    })
    res.status(200)
  }
