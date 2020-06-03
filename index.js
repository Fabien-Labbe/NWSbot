const Discord = require('discord.js');
const Request = require('./request')

const client = new Discord.Client()



client.on('ready', ()=>{
    console.log('Logged in as ${client.user.tag} !')
})
client.on('message', msg =>{
    if (msg.content === 'ping'){
        msg.reply('Pong')
    }
    let a = [
        [
        msg.content, 
        msg.author.username,
        new Date().now()
        ]
    ]
    Request.Insert(a);
});

client.login(process.env.discord_token);