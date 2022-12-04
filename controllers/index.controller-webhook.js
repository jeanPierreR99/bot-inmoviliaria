const request = require('request');
const { Pool } = require('pg');
const fetch = require('node-fetch');

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

const pool = new Pool({
    user: "tvjohsqnthxeko",
    host: "ec2-3-217-251-77.compute-1.amazonaws.com",
    database: "d16nt5ibvkp7b8",
    password: "3573d1dbb8b0bd0d951e3e74b26e104bdadc1a9f58701de359e0f261a821f624",
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    }
});

const postWebHook = (req, res) => {
    console.log('POST: webhook');
    console.log('post webhook activado');
    const body = req.body;

    if (body.object === 'page') {
        console.log("si es una pagina");
        body.entry.forEach(entry => {
            //mensajes recibidos
            const webhookEvent = entry.messaging[0];
            console.log(webhookEvent);

            const sender_psid = webhookEvent.sender.id;
            console.log(`Sender PSID: ${sender_psid}`);

            //valdiar el mensaje
            if (webhookEvent.message) {
                console.log("validar 1");
                handleMessage(sender_psid, webhookEvent.message);
            } else if (webhookEvent.postback) {
                console.log("valdiar 2");
                handlePostback(sender_psid, webhookEvent.postback);
            }
        });

        res.status(200).send('Evento recibido exitosamente');

    } else {
        res.sendStatus(404);
    }
};

const getWebHook = (req, res) => {
    console.log('GET: webhook');
    console.log('get webhook activado');
    const VERIFY_TOKEN = 'tokenunicodeverificacionchatbot';

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('webhook verificado');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(404);
            console.log("error primario")
        }
    } else {
        res.sendStatus(404);
        console.log("error secundario")
    }

};


function handleMessage(sender_psid, received_message) {

    let response;
    let palabra = received_message.text;
    let palabraSplit = palabra.split(' ');

    
          
                    response = {
                        'text': `mensaje de respuesta`
                    }
                    console.log("respuesta")
                    callSendAPI(sender_psid, response);
        
 
}

function handlePostback(sender_psid, received_postback) {
}

function callSendAPI(sender_psid, response) {

    const requestBody = {
        'recipient': {
            'id': sender_psid
        },
        'message': response
    };

    request({
        'uri': 'https://graph.facebook.com/v2.6/me/messages',
        'qs': { 'access_token': PAGE_ACCESS_TOKEN },
        'method': 'POST',
        'json': requestBody
    }, (err, res, body) => {
        if (!err) {
            console.log('mensaje enviado de vuelta');
        } else {
            console.log('mensaje fallido :(');
        }
    });
}
module.exports = {
    postWebHook,
    getWebHook
}