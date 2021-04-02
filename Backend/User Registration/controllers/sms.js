require('dotenv').config();

const accountSid ='ACdad7aac5dba84174f30f5a96a82f68b1'; // Your Account SID from www.twilio.com/console
const authToken ='3ea128b799962e6f50a16fd5436ba73c';   // Your Auth Token from www.twilio.com/console


const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

module.exports = client;

