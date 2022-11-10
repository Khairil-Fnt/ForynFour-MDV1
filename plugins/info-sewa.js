let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '10'
let ss = '20'
let sp = '40'
let sv = '60'
//premium
let ph = '5'
let pn = '10'
let pp = '15'
let pv = '20'
let ppm = '30'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat :* _${sh}Ringgit/grup (1 minggu)_
┊⫹⫺ *Normal :* _${sn}Ringgit/grup (1 bulan)_
┊⫹⫺ *Standar :* _${ss}Ringgit/grup (2 bulan)_
┊⫹⫺ *Pro :* _${sp}Ringgit/grup (4 bulan)_                                                      
┊⫹⫺ *Vip :* _${sv}Ringgit/grup (Unlimited)_
╰═══┅═══━

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat :* _${ph}Ringgit (1 minggu)_
┊⫹⫺ *Normal :* _${pn}Ringgit (1 bulan)_
┊⫹⫺ *Pro :* _${pp}Ringgit (4 bulan)_
┊⫹⫺ *Vip :* _${pv}Ringgit (8 bulan)_                                               
┊⫹⫺ *Permanent :* _${ppm}Ringgit (Unlimited)_
╰═══┅═══━

📌 *KEBIJAKAN :*
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL`
const sections = [
   {
	title: ` SEWA ✦-------`,
	rows: [
	    {title: "💰 HEMAT", rowId: '.orsewa *Paket:* HEMAT • Sewa', description: 'PRICE : ' + sh + 'Ringgit (1 minggu)' },
	    {title: "💰 NORMAL", rowId: '.orsewa *Paket:* NORMAL • Sewa', description: 'PRICE : ' + sn + 'Ringgit (1 bulan)' },
	{title: "💰 STANDAR", rowId: '.orsewa *Paket:* STANDAR • Sewa', description: 'PRICE : ' + ss + 'Ringgit (2 bulan)' },
	{title: "💰 PRO", rowId: '.orsewa *Paket:* PRO • Sewa', description: 'PRICE : ' + sp + 'Ringgit (4 bulan)' },
	{title: "💰 VIP", rowId: '.orsewa *Paket:* VIP • Sewa', description: 'PRICE : ' + sv + 'Ringgit (UNLIMITED)' },
	]
    }, {
    title: ` PREMIUM ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.orsewa *Paket:* HEMAT • Premium', description: 'PRICE : ' + ph + 'Ringgit (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.orsewa *Paket:* NORMAL • Premium', description: 'PRICE : ' + pn + 'Ringgit (1 bulan)' },
	{title: "🔖 PRO", rowId: '.orsewa *Paket:* PRO • Premium', description: 'PRICE : ' + pp + 'Ringgit (4 bulan)' },
	{title: "🔖 VIP", rowId: '.orsewa *Paket:* VIP • Premium', description: 'PRICE : ' + pv + 'Ringgit (8 bulan)' },
	{title: "🔖 VVIP", rowId: '.orsewa *Paket:* PERMANENT • Premium', description: 'PRICE : ' + ppm + 'Ringgit (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: 'LIST SEWA OR RENT',
  footer: info,
  title: '',
  buttonText: "Click Here",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa(bot)?)$/i

module.exports = handler
