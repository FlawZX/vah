//Credits Jangan Dihapus
//Thanks For KannaChan & Papah-Chan
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl*`
let wibu = `https://api.zacros.my.id/randomimg/waifu` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Tq Ngab!','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/karfuanyogich",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/reel/Ce_bngYBkEA/?igshid=YmMyMTA2M2Y=", 
    title: 'ZennSky MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
