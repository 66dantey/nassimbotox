import { Client, GatewayIntentBits } from "discord.js";
import { joinVoiceChannel } from "@discordjs/voice";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const keep_alive = require('./keep_alive.js');
//console.log(process.env.token);
const env = JSON.parse(process.env.TOKEN);
client.on("ready", () => {
  const channel = client.channels.cache.get(env.channel_id);
  if(!channel){
    console.log("channel doesn't exist");
    return;
  }
  const connection = joinVoiceChannel({
    channelId: channel.id,
    guildId: channel.guild.id,
    adapterCreator: channel.guild.voiceAdapterCreator,
  });
  console.log("ready");
});

client.login(env.token);
