export default function (req, res) {
    require('dotenv').config()
    const {message, email, name} = req.body
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "eqtoss2022@gmail.com",
        pass: "nnlurseihiyzkyyr",
      },
      secure: true,
    })
    const mailData = {
      from: "eqtoss2022@gmail.com",
      to: email,
      subject: `whats up mfs`,
      text: "we just wanna rest in peace",
      html: `<div>${message}</div><p>Sent from:
      ${name}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
  }



// export default function (req, res) {
//     require('dotenv').config()
    
//     let nodemailer = require('nodemailer')
//     const transporter = nodemailer.createTransport({
//       port: 465,
//       host: "smtp.gmail.com",
//       auth: {
//         user: 'demo email',
//         pass: process.env.GOOGLE_PASSWORD,
//       },
//       secure: true,
//     })
//     const mailData = {
//       from: 'medelothmani481@gmail.com',
//       to: 'hamzasimiller@gmail.com',
//       subject: `Message From hamza`,
//       text: "we just wanna win and shock them all and catch them by suprise",
//       html: `<div>${req.body.message}</div><p>Sent from:
//       hello mfs </p>`
//     }
//     transporter.sendMail(mailData, function (err, info) {
//       if(err)
//         console.log(err)
//       else
//         console.log(info)
//     })
//     res.status(200)
//   }