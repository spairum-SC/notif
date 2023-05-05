const axios = require('axios');
const cron = require('node-cron');

function kirimpesan(telp, massage) {
    let data = JSON.stringify({
        "message": massage,
        "telp": telp
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://192.168.254.250:9300/api/wa/send',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}
// array pesan
let pesan = [
    'Good morning my dear, may your day be enjoyable.',
    'Good morning my love, as the sun rises and the world awakens, my heart fills with joy knowing that I get to start another day with you. May this day bring us even closer together and fill our hearts with more love than ever before. Have a wonderful day, my dear.',
    'Good morning my love, I hope you have a day as amazing as you are.',
    "Good morning, my sweet love. I woke up today with your smile on my mind and your love in my heart. Every day with you feels like a fairytale, and I can't wait to see what magic today holds for us. I love you.",
    "Rise and shine, my beautiful partner. I hope this message brings a smile to your face, just as your presence brings joy to my life. You are the light that brightens up my mornings, and I can't wait to spend the day wrapped up in your warm embrace.",
    "Good morning, my love. I hope you slept well. I just wanted to let you know that I am thinking of you and that you are always in my heart. I love you.",
    "Good morning, my heart and soul. Every day with you feels like a dream come true, and I'm grateful for every moment we get to spend together. I hope today brings you as much happiness and love as you bring into my life.",
];
let greeting = [
   " My love",
    "Sweetheart",
    "Darling",
    "Beloved",
    "Angel",
    "Baby",
    "Honey",
    "Dearest",
    "My heart",
    "My soulmate",
   "My everything",
    "Princess",
    "Prince",
    "My world",
    "My one and only",
    "Treasure",
    "Lover",
    "Gorgeous",
    "Adorable",
    "Beautiful",
];

cron.schedule('34 5 * * *', function () {
    console.log('running a task every jam 6');
    let random = Math.floor(Math.random() * pesan.length);
    kirimpesan('0895704185526', pesan[random])
});

cron.schedule('15 7 * * *', function () {
    console.log('running a task every jam 6');
    let random = Math.floor(Math.random() * greeting.length);
    kirimpesan('0895704185526', greeting[random])
});