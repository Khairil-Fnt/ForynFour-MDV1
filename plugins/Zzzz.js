// JANGAN TERLALU TOLOL ANAK MUDA

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `Hello kak ${ye} Lagi Nyari Sc Ya? 

💌 CARI AJA DIBAWAH INI

📮 YOU TUBE :
youtube.com/c/Khairil🅥

📮 GITHUB :
github.com/KhairilOFC

📮 JANGAN LUPA MAMPIR :
https://.com`

await conn.sendBut(m.chat, esce, '📮 DONT FORGET TO FOLLOW MY ACCOUNT', 'Thanks', '.menu', m) 
}
handler.help = ['sc', 'source code']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
