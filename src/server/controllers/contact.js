var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(`smtps://greatscottlove%40gmail.com:${ process.env.NODEMAILER_PASS }@smtp.gmail.com`);


exports.postMessage = (req, res) =>{

  const { email, name, message} = req.body

  let mailOptions = {
    from: ` "${ name + ' - ' + email }" <${ email }>`,
    to: 'phil3903@gmail.com, katherineljames@gmail.com',
    subject: 'Great Scott Wedding',
    text: message,
  }

  transporter.sendMail(mailOptions, (err, info)=>{
    if(err){
      console.log(err)
      return res.status(500).json(err)
    }


    console.log('Message sent: ' + info.response);
    res.json(info.response)
  });
}