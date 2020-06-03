const Discord = require('discord.js');
const Request = require('./request')

const client = new Discord.Client()
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


client.on('ready', ()=>{
    console.log('Logged in as ${client.user.tag} !')
})
client.on('message', msg =>{
    if (msg.content === 'ping'){
        msg.reply('Pong')
    }
    if (msg.content === 'chat'){
        let catArray = [
            'https://media.giphy.com/media/RhrAmVUHxjTQvEPBWi/giphy.gif',
            'https://gph.is/1fIfMKt',
            'https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif',
            'https://media.giphy.com/media/tBxyh2hbwMiqc/giphy.gif',
            'https://media.giphy.com/media/quO0X65yj6gw0/giphy.gif'

        ]
        msg.reply(catArray[getRandomInt(5)])
    }
    let a = [
        [
        msg.content, 
        msg.author.username,
        new Date()
        ]
    ]
    Request.Insert(a);
});

client.login(env.discord_token);