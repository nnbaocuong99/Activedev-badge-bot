const { CommandClient } = require('eris')

// create ur bot
async function init(token) {
    const BasicPybot = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // this part is for register the slash command for ur bot i think.
    BasicPybot.on('ready', async () => {
        await BasicPybot.bulkEditCommands([{
            name: 'hithere',
            description: 'well i just wanna say that is hi there not hit here xD',
            type: 1,
        }])
        console.log(`u can now invite your bot with the link!\nhttps://discord.com/oauth2/authorize?client_id=${BasicPybot.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // how the bot interaction (reply to pp who used the slash cmd
    BasicPybot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'hello world') {
            await interaction.createMessage({
                content: 'everyone deserved to be a rEaL pYtH0n dEv with some thailand friends'
            })
            console.log('destructing...')
            process.exit(0)
        }
    })
    BasicPybot.connect();
}

const tokenFromStupidCommand = process.argv[2]
init(tokenFromStupidCommand);
console.log("Hello, World!");