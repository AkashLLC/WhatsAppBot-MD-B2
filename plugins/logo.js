let fetch = require('node-fetch')
let handler = async (m, { msgsz, args    }) => {
 try {    response = args.join(' ')
  if (!args[0]) throw 'Enter text\nExample: .logo1 Wizard'
   msgsz.reply(m.chat, '*Wait a minute⏳*\nProcessing ⚙️...')
  let res = `https://caliphapi.com/api/kaneki?text=${response}&apikey=9AmAiNPq`
  msgsz.sendFile(m.chat, res, 'kaneki.jpg', mainfooter, m, false)
}
   

    catch(e){
  msgsz.reply(m.chat, `${e}`) 
msgsz.reply(`${global.owner[0]}`+'@s.whatsapp.net','```ERROR REPORT```\n\n'+
'```COMMAND   :'+`${command}`+'```\n\n'+
'```PREFIX    :'+`${usedPrefix}`+'```\n\n'+
'```VERSION   :'+`${version}`+'```\n\n'+
'```ERROR     :'+`${e}`+'```\n\n'+
'```DETIELD ERROR LOG IN CRASH REPORT GROUP```') 
  msgsz.reply('120363041922413381@g.us', `𝗘𝗿𝗿𝗼𝗿 : ${util.format(e)}\n\n
  𝗖𝗼𝗺𝗺𝗮𝗻𝗱 : ${usedPrefix+command}`, null, {})
} } 

    handler.help1 = ['logo1'].map(v => v + ' <teks>')
handler.help = ['𝙻𝙾𝙶𝙾𝟷'].map(v => v + ' ')
handler.tags = ['maker']
handler.command = /^(logo1)$/i
handler.limit = true
handler.register = false

module.exports = handler
