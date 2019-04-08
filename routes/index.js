var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');
require('../models/enquiry');
var mongoose=require('mongoose');
var Enquiry=mongoose.model('enqs'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/courses', function(req, res, next) {
  res.render('courses', { title: 'Express' });
});

router.get('/upcomming language', function(req, res, next) {
  res.render('upcomming language', { title: 'Express' });
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Express' });
});

router.get('/blog-home', function(req, res, next) {
  res.render('blog-home', { title: 'Express' });
});

router.get('/blog-single', function(req, res, next) {
  res.render('blog-single', { title: 'Express' });
});





//database mongodb
router.post('/enq', function(req, res){
  new Enquiry({name : req.body.name,
  email : req.body.email,
subject: req.body.subject,
phone: req.body.phone,
messege: req.body.messege}
)
.save(function(err,Enquiry){
  console.log('enqs');
  res.send('<h1> your messege has been saved<h1>');

});
});
module.exports = router;





//nodemailer
// router.post('/enquiry', (req, res) => {
//   const output = `
//     <p>You have a  New Enquiry</p>
//     <h3>Enquiry Details</h3>
//     <ul>  
//       <li>Name: ${req.body.name}</li>
//       <li>Email: ${req.body.email}</li>
//       <li>Phone: ${req.body.phone}</li>
     
     
     
//     </ul>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>
//   `;
 
//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.zoho.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'sagarkumarsingh58@zoho.com', // generated ethereal user
//         pass: 'Sagar12345*@'  // generated ethereal password
//     },
//     // tls:{
//     //   rejectUnauthorized:false
//     // }
//   });
 
//   // setup email data with unicode symbols
//   let mailOptions = {
//       from: 'sagarkumarsingh58@zoho.com', // sender address
//       to: 'sagarkumarsingh58@gmail.com', // list of receivers
//       subject: 'New Enquiry', // Subject line
//       text: 'From Brandzia Website', // plain text body
//       html: output // html body
//   };
 
//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       console.log('Message sent: %s', info.messageId);  
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
 
//       res.send(`<body style="background-color:gray;"><div style="position:absolute; width : 100%;  height:5rem; text-align:center; font-size:2rem;top:50%;transform:translateY(-50%);">We Saved Your Enquiry. We will get in touch with you soon </div></body>`);
//   });
// });






/* GET home page. */



module.exports = router;
