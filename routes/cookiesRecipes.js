const express = require('express');
const nodemailer = require('nodemailer');
const askForCookiesRecipesRouter = express.Router();

askForCookiesRecipesRouter.post(
    '/askforcookiesrecipe',
    function(req, res) {
        const sender = req.body.from;
        const recipient = req.body.to;
        const subject = req.body.subject;
        const textMessage = req.body.text;
        const htmlMessage = req.body.html;

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'myaccount@gmail.com',
                pass: 'mypassword'
            }
        });
        
        // send mail with defined transport object
        transporter.sendMail({
            from: sender, // sender address
            to: recipient, // list of receivers
            subject: subject, // Subject line
            text: textMessage, // plain text body
            html: htmlMessage // html body
        }, (error, response) => {
            if(error){
                console.log(error);
                res.status(500).json(error.message);
            } else{
                console.log("Message sent:" + response.messageId);
                res.status(200).json(response.response);
            }
        });
})

module.exports = {
    askForCookiesRecipesRouter
}