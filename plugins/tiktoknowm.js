const { Tiktok } = require('xfarr-api')
const { tiktok } = require('../lib/scrape')
let handler = async (m, { msgsz, args, usedPrefix, command    }) => {
 try { if (!args[0]) throw `_${nolink}_\n\nExample:\n${usedPrefix + command} https://vm.tiktok.com/ZGJBtcsDq/`
  if (!args[0].match(/tiktok/gi)) throw `_Invalid URL_`
  await msgsz.reply(m.chat, wait)
  try {
  var anu = await Tiktok(args[0])
  var { medias } = anu
  let cap = ` *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${medias[1].url}`)).data}`
  await msgsz.sendMedia(m.chat, medias[1].url, null, {caption: cap, mentions: [m.sender]})
  } catch {
    try {
    var anuu = await tiktok(args[0])
    var { nowm } = anuu
    let cap = ` *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)).data}`
    msgsz.sendMedia(m.chat, nowm, 0, {caption: cap, mentions: [m.sender]})
  } catch {
    throw msgsz.reply(m.chat, eror, m ) 
   }
 }
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

    handler.help1 = ['ᴛɪᴋᴛᴏᴋ'].map(v => v + ' <ᴜʀʟ>')
handler.help = ['𝚃𝙸𝙺𝚃𝙾𝙺'].map(v => v + '')
handler.tags = ['downloader', 'premium']
handler.command = /^(tt|tiktok)?(download(er)?)?$/i

handler.premium = true

module.exports = handler

