var mqtt = require('mqtt');
require('dotenv').config();

const clientMq = mqtt.connect(process.env.mqtt_host, {
    username: process.env.mqtt_username,
    password: process.env.mqtt_password,
    clientId: process.env.mqtt_client_id + Math.random(),
    connectTimeout: 1000,
});

module.exports = {
    clientMq
}
