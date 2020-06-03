const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', ()=>{
    console.log('Bot ready')
})
client.on('message', msg =>{
    if (msg.content === 'ping'){
        msg.reply('Pong')
    }
});

client.login(process.env.discord_token);