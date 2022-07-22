let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Indosat [085707042602]
│ • Gopay  [085707042602]
│ • Dana  [085707042602]
│ • Saweria  [Chat Owner]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285707042602
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler