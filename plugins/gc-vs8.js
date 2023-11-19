const handler = async (m, {conn}) => {
  m.reply(global.vs8);
};
handler.command = /^(Vs8|vs8)$/i;
export default handler;
if (stopped === 'close' || !conn || !conn.user) return;
  const status = global.db.data.settings[conn.user.jid] || {};
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
global.vs8 = `
*⚜️ VS OFICIAL MASC - 8 VS 8 ⚜️*

*Nota :* _La Hora Editenlo De Acuerdo El Vs_

*HORA :*
•10 pm 🇵🇪 ${uptime}
•00 am 🇦🇷 🇨🇱

*👑 ESCUADRA 1 👑*

👺 
👺 
👺 
👺 

*👑 ESCUADRA 2 👑*

👺
👺
👺
👺

*⚠️SUPLENTES⚠️*

👺 
👺
👺
👺
`;
