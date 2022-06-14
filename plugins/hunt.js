let handler = async (m, { msgsz, text    }) => {
 try {    let monsters = [{
            area: 1,
            name: "Goblin"
        },
        {
            area: 1,
            name: "Slime"
        },
        {
            area: 1,
            name: "Wolf"
        },
        {
            area: 2,
            name: "Nymph"
        },
        {
            area: 2,
            name: "Skeleton"
        },
        {
            area: 2,
            name: "Wolf"
        },
        {
            area: 3,
            name: "Baby Demon"
        },
        {
            area: 3,
            name: "Ghost"
        },
        {
            area: 3,
            name: "Zombie"
        },
        {
            area: 4,
            name: "Imp"
        },
        {
            area: 4,
            name: "Witch"
        },
        {
            area: 4,
            name: "Zombie"
        },
        {
            area: 5,
            name: "Ghoul"
        },
        {
            area: 5,
            name: "Giant Scorpion"
        },
        {
            area: 5,
            name: "Unicorn"
        },
        {
            area: 6,
            name: "Baby Robot"
        },
        {
            area: 6,
            name: "Sorcerer"
        },
        {
            area: 6,
            name: "Unicorn"
        },
        {
            area: 7,
            name: "Cecaelia"
        },
        {
            area: 7,
            name: "Giant Piranha"
        },
        {
            area: 7,
            name: "Mermaid"
        },
        {
            area: 8,
            name: "Giant Crocodile"
        },
        {
            area: 8,
            name: "Nereid"
        },
        {
            area: 8,
            name: "Mermaid"
        },
        {
            area: 9,
            name: "Demon"
        },
        {
            area: 9,
            name: "Harpy"
        },
        {
            area: 9,
            name: "Killer Robot"
        },
        {
            area: 10,
            name: "Dullahan"
        },
        {
            area: 10,
            name: "Manticore"
        },
        {
            area: 10,
            name: "Killer Robot"
        },
        {
            area: 11,
            name: "Baby Dragon"
        },
        {
            area: 11,
            name: "Young Dragon"
        },
        {
            area: 11,
            name: "Scaled Baby Dragon"
        },
        {
            area: 12,
            name: "Kid Dragon"
        },
        {
            area: 12,
            name: "Not so young Dragon"
        },
        {
            area: 12,
            name: "Scaled Kid Dragon"
        },
        {
            area: 13,
            name: "Definitely not so young Dragon"
        },
        {
            area: 13,
            name: "Teen Dragon"
        },
        {
            area: 13,
            name: "Scaled Teen Dragon"
        },
    ]
    let player = global.db.data.users[m.sender]
    let pengirim = m.sender.split("@")[0]

    let cdm = `${MeNit(new Date - player.lasthunt)}`
    let cds = `${DeTik(new Date - player.lasthunt)}`
    let cd1 = Math.ceil(01 - cdm)
    let cd2 = Math.ceil(60 - cds)

    let area_monsters = monsters[Math.floor(Math.random() * monsters.length)]
    let monster = area_monsters.name
    area_monsters = area_monsters.area
    let monsterName = monster.toUpperCase()

    if (new Date - global.db.data.users[m.sender].lasthunt > 120000) {
        let coins = parseInt(Math.floor(Math.random() * 401))
        let exp = parseInt(Math.floor(Math.random() * 601))
        let sum = 82 * player.area - 59
        let dmg = (player.sword * 5 + player.armor * 5 - sum)
        dmg = dmg < 0 ? Math.abs(dmg) : 0

        player.healt -= dmg
        player.lasthunt = new Date * 1 // waktu hunt 2menit

        if (player.healt < 0) {
            let msg = `*@${pengirim}* You Killed By ${monsterName}`
            if (player.level > 0) {
                player.level -= 1
                msg += `\nYour Level Drops 1 For Dying While Hunting!`
            }
            player.healt = 100
            msgsz.reply(m.chat, msg)
            return
        }

        player.money += coins * 1
        player.exp += exp * 1

        let pesan = `*@${pengirim}* Find And Kill *${monsterName}*\nGet ${new Intl.NumberFormat('en-US').format(coins)} coins & ${new Intl.NumberFormat('en-US').format(exp)} XP\nReduce -${dmg}Hp, left ${player.healt}/${100}`
        msgsz.reply(m.chat, pesan, m, {
            mentions: [m.sender]
        })
    } else throw `Wait *00:0${cd1}:${cd2}* To Hunt Again`
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

    handler.help1 = ['ʜᴜɴᴛ']

handler.help = ['𝙷𝚄𝙽𝚃']
handler.tags = ['rpg']
handler.command = /^hunt/i

handler.disabled = false

handler.fail = null

module.exports = handler

function MeNit(ms) {
    let m = isNaN(ms) ? '02' : Math.floor(ms / 60000) % 60
    return [m].map(v => v.toString().padStart(2, 0)).join(':')
}

function DeTik(ms) {
    let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
    return [s].map(v => v.toString().padStart(2, 0)).join(':')
}
