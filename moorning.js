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


cron.schedule('15 6 * * *', function () {
    console.log('running a task every jam 6');
    kirimpesan('0895704185526', 'Selamat Pagi Sayaang, semoga harimu menyenangkan.')
});