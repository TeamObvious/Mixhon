const handler = async (m, {conn}) => {
  m.reply(global.vs8);
};
handler.command = /^(Vs8|vs8)$/i;
export default handler;

global.vs8 = `
*⚜️ VS OFICIAL - 8 VS 8⚜️*

_HORA :_
• ${uptime} 🇵🇪
• ${uptime} 🇦🇷🇨🇱

*👑 ESCUADRA 1 👑*

📱 
📱 
📱 
📱 

*👑 ESCUADRA 2 👑*

📱
📱
📱
📱

*⚠️SUPLENTES⚠️*

📱 
📱
📱
📱
`;
