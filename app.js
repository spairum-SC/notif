const cron = require('node-cron');
const { clientMq } = require('./connection/mqtt');

// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )
cron.schedule('30 * * * *', function() {
    console.log('running a task every minute');
    clientMq.publish('test', 'Hello mqtt');
    let date = new Date();
    let data = {
        "message": "pesan per menit + " + date,
        "number" : "0895321701798"
    }
    clientMq.publish('sendPesan', JSON.stringify(data));
  });
  cron.schedule('* 5 * * *', function() {
    console.log('running a task every jam 6');
    clientMq.publish('test', 'Hello mqtt');
    let data = {
        "message": "Assalamualaikum, Selamat Pagi. ",
        "grup" : "New User Spairum"
    }
    clientMq.publish('sendGrup', JSON.stringify(data));
    setInterval(pesan2, 3500);
  });
  cron.schedule('* 6 * * *', function() {
    console.log('running a task every jam 6');
    clientMq.publish('test', 'Hello mqtt');
    let data = {
        "message": "Udah Jam 6 WIB, Yuk Absen ",
        "grup" : "New User Spairum"
    }
    clientMq.publish('sendGrup', JSON.stringify(data));
    setInterval(pesan2, 3500);
  });
  function pesan2() {
    let data = {
        "message": "Yuk absen yang hari ini bangun Pagi ",
        "grup" : "New User Spairum"
    }
    clientMq.publish('sendGrup', JSON.stringify(data));
  }