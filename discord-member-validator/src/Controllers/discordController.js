import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const verifyMember = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({
      message: "Missing parameter :id"
    });
  }

  let is_member = false;
  const filePath = path.join(__dirname, '../Database/members.json');
  
  try {

    const fileData = await fs.promises.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(fileData);

    if (jsonData.includes(id)) {
      is_member = true;
    }

    return res.status(200).json({
      is_member
    });

  } catch (error) {

    console.log(`Error: ${error}`);

    return res.status(400).json({
      message: "Something went wrong. Try again"
    });
    
  }
}

import {
  Client,
  Events,
  IntentsBitField,
  GatewayIntentBits
} from 'discord.js';

export const scrapeDiscordMembers = async (req, res) => {

  let guildMembers = [];
  const client = new Client({
    intents: [
      GatewayIntentBits.GuildMembers,
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ],
  });

  await client.once(Events.ClientReady, async (c) => {
    const guild = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
    let result = await guild.members.fetch();
  
    guild.members.cache.forEach((member) => {
      let userId = member.user.id;
      guildMembers.push(userId);
    });
  
    return res.status(200).json(guildMembers);
  });

  client.login(process.env.DISCORD_TOKEN);

}