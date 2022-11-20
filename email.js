let email = [
    "gusti.furkanazmi@student.untan.ac.id",
    "necrobradley@gmail.com",
    "febydr.panjaitan@gmail.com",
    "ilhamghozali14@student.untan.ac.id",
    "kobeazi07@gmail.com",
    "fakhryhiz@student.untan.ac.id",
    "cintyambl1@gmail.com",
    "asharidha2014@gmail.com",
    "sarahpratiwi@student.untan.ac.id",
    "queensharah@gmail.com",
    "aldyrdi@gmail.com",

];
let nama = [
    "Gusti Muhammad Furkan Azmi",
    "Naufal Irdasyah",
    "Feby Dwi Rahmini",
    "Moh Ilham Al Ghozali",
    "Hibatul Azizi",
    "Fakhry Hizballah",
    "Cintya ",
    "Asha Ridha Hijeriya",
    "Sarah Pratiwi",
    "Sarah Aulia",
    "Aldy Muard",

];


var axios = require('axios');

// sendGetRequest
const sendGetRequest = async () => {
    try {
        const resp = await axios.get('https://zenquotes.io/api/quotes');
        // console.log(resp.data);
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};


async function getQuote() {
    let quotes = await sendGetRequest();
    console.log(quotes.length);
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);
    console.log(quotes[random].q);
    let angka = Math.floor(Math.random() * email.length)
    let data = {
        "email": email[angka],
        "fullname": nama[angka],
        "subject": "Quote of the day number " + quotes[random].c,
        "judul": "Quote of the day",
        "pesan": quotes[random].q + " - " + quotes[random].a,
        "status": "umum",
    }
    // clientMq.publish('Email/sendEmailOtp', JSON.stringify(data));
    console.log(data);
    return data;
}

module.exports = { getQuote };
// module.exports = getQuote;



