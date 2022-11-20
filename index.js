
const { Client, GatewayIntentBits, Partials, ActivityType } = require('discord.js');
const { token, kiwi } = require('./config.json');
const activities = [`NOW WITH EXTRA KIWIS!! 🥝`, `🥝🥝🥝🥝🥝`, `WHAT ABOUT KIWI?`, `KIWI 🥝 KIWI 🥝 KIWI 🥝`, `MINECRAFT (WITH KIWI) 🥝😼`, `Aaahh!!! Real Kiwis 🥝👺`];



const client = new Client({
    intents: [
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildBans,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildMessageTyping
    ],
    partials: [Partials.Channel],
  });


client.on('ready', () => {
    
    client.user.setPresence({
        activities: [{ name: `ONAAA`, type: ActivityType.Playing }],
        status: 'idle',
      });
    
    setInterval(() => {
	    const randomIndexAc = Math.floor(Math.random() * (activities.length - 1) + 1);
		const newActivity = activities[randomIndexAc];

		client.user.setPresence({
            activities: [{ name: newActivity, type: ActivityType.Playing }],
            status: 'idle',
          });
	}, 2400000);
	console.log('KIWI!');
    //2400000
});


client.on('messageCreate', async (message) =>{

    //debug 
    //console.log(message);
    if(message.author.bot) return;
    if (message.author.id === kiwi){
        try {
            message.react('🥝');
        } catch (error) {
            console.log('kiwi borro el mensaje' + error)
        }
    }
    //debug
    // else{
    //     console.log('no es kiwi');
    // }
})


client.login(token);
