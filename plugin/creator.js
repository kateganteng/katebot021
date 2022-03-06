const contacts = [
  ['6288233832771', ' MursidXyz'],
  ['6285954944195', ' Kate (Owner)'],
]
function handler(m) {
  m.reply('Ada perlu apa kak cari owner?, chat *P* tidak akan di balas')
  for (let [nomor, nama] of contacts) this.sendContact(m.chat, nomor + '@s.whatsapp.net', nama || conn.getName(nomor + '@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
