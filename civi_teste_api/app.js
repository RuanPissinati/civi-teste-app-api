const express = require('express');
const app = express();
const port = 3000;
const uuid = require('uuid');

app.get('/', (req, res) => {
    res.send();
});

app.get('/get-item-list', (req, res) => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const data = [
        {
            subject: 'Mensagem de Devin',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a sapsubjectn id augue cursus dictum',
            status: false
        },
        {
            subject: 'Mensagem de Dan',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a sapsubjectn id augue cursus dictum',
            status: false
        },
        {
            subject: 'Mensagem de Dominic',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a sapsubjectn id augue cursus dictum',
            status: false
        },
        {
            subject: 'Mensagem de Jackson',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a sapien id augue cursus dictum',
            status: false
        }
    ];
    let rondomNumber = getRandomInt(0, 3);
    let item = data[rondomNumber];
    item.timestamp = new Date().toLocaleString();
    item.id = uuid.v1();
    res.send(item)
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
