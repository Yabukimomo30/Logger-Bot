const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>`);
});

server.listen(3000, () => {
  console.log('Server Online because of Axo Coder ✅!!');
});
module.exports = async (client) => {
  const { ActivityType } = require("discord.js");
  const cfg = require("../utils/config.json");

  client.color = "#2b2d31";
  client.channelLogs = {
    channelLog: client.channels.cache.get(cfg.channels.channelLog),
    emojiLog: client.channels.cache.get(cfg.channels.emojiLog),
    banLog: client.channels.cache.get(cfg.channels.banLog),
    unbanLog: client.channels.cache.get(cfg.channels.unbanLog),
    joinLog: client.channels.cache.get(cfg.channels.joinLog),
    leaveLog: client.channels.cache.get(cfg.channels.leaveLog),
    messageLog: client.channels.cache.get(cfg.channels.messageLog),
    voiceLog: client.channels.cache.get(cfg.channels.voiceLog),
  };

  setInterval(() => {
    client.user.setPresence({
      activities: [{ name: `Logs | Made by @deemdev`, type: ActivityType.Watching }],
      status: "online",
    });
  }, 60000);

  client.log.ready(`Logged in as ${client.user.tag}`);
};
