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
    // let date = new Date();
    let data = {
      "message": "pesan per 30 menit + " + new Date().getHours() + ":" + new Date().getMinutes(),
        "number" : "0895321701798"
    }
    clientMq.publish('sendPesan', JSON.stringify(data));
  });
  cron.schedule('* 5 * * *', function() {
    console.log('running a task every jam 6');
    clientMq.publish('test', 'Hello mqtt');
    let data = {
      "message": "Assalamualaikum, Selamat Pagi.",
        "grup" : "New User Spairum"
    }
    clientMq.publish('sendGrup', JSON.stringify(data));
    setTimeout(pesan2, 4000);
  });
  cron.schedule('* 6 * * *', function() {
    console.log('running a task every jam 6');
    clientMq.publish('test', 'Hello mqtt');
    let data = {
      "message": "Selamat Pagi, semoga harimu menyenangkan.",
        "grup" : "New User Spairum"
    }
    clientMq.publish('sendGrup', JSON.stringify(data));
    setTimeout(pesan2, 3500);
  });
  function pesan2() {
    let data = {
      "message": "Cuma mau kasi info sekarang jam " + new Date().getHours() + ":" + new Date().getMinutes(),
        "grup" : "New User Spairum"
    }
    clientMq.publish('sendGrup', JSON.stringify(data));
  }