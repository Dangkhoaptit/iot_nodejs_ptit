var mqtt = require('mqtt')

var options = {
    host: 'cb4bd7ef1ffc4ea4a1720c3ff423b0d5.s1.eu.hivemq.cloud', //'862ee56fc3c645f78b0b94e5794bb76c.s1.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'dangkhoaptit',
    password: 'Ledangkhoa9x',
    Idclient: 'mackcest'
}

//initialize the MQTT client
var client = mqtt.connect(options);
var topic1 = "temperature-humidity";
//setup the callbacks
client.on('connect', function() {
    console.log('Connected');
});

client.on('error', function(error) {
    console.log(error);
});


client.on('message', function(topic, message) {
    //Called each time a message is received
    console.log('Received message:', topic, message);
});

// subscribe to topic 'my/test/topic'

// // publish message 'Hello' to topic 'my/test/topic'
client.publish(topic1, { "Temperature": 24, "Humidity": 88, "Light": 35.33333588 }.toString());
client.subscribe(topic1);