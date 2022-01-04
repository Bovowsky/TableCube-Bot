import DiscordJS, { Intents, Message } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The bot is terminator')

    const guildId = '912716778969374770'
    const guild = client.guilds.cache.get(guildId)
    let commands

  if (guild) {
      commands = guild.commands
  } else {
      commands = client.application?.commands
  }

commands?.create({
    name: 'ping', 
    description: 'risponde con pong.',
  })
})

client.login(process.env.TOKEN)

