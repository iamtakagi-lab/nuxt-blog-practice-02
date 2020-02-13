var receiverEmailAddress = 'contact.manji.fun@gmail.com'
var senderEmailAddress = 'contact.manji.fun@gmail.com'
var senderEmailPassword = 'Reku0919'

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: senderEmailAddress,
    pass: senderEmailPassword
  }
});

var options = {
  from: senderEmailAddress,
  to: receiverEmailAddress,
  subject: 'manji.fun お問い合わせ',
  text: ''
};

exports.send = function(name, email, message) {
  options.text = `名前: ${name}\nメールアドレス: ${email}\n内容: ${message}`
  transporter.sendMail(options, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}

