
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import {
  Client,
  Events,
  IntentsBitField,
  GatewayIntentBits
} from 'discord.js';
import { fileURLToPath } from 'url';

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.GuildMembers,
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const scrapeDiscordMembers = async () => {

  // DATA HOLDER
  let tempData = [];
  let tempStorage = path.join(__dirname, '../../src/Database/temp_storage.json');

  await client.once(Events.ClientReady, async (c) => {

    process.stdout.write(`Ready! Logged in as ${c.user.tag}`);
    process.stdout.write('\n');
    process.stdout.write('Fetching discord members...');
    process.stdout.write('\n');

    const guild = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
    let res = await guild.members.fetch();

    guild.members.cache.forEach((member) => {
      
      let userId = member.user.id;
      tempData.push(userId);
      let jsonData = JSON.stringify(tempData);
      fs.writeFile(tempStorage, jsonData, "utf8", (err) => {});
        
      process.stdout.clearLine();
      process.stdout.cursorTo(0);

    });

    const mainStorage = path.join(__dirname, '../../src/Database/members.json');
    let finalData = JSON.stringify(tempData);
    fs.writeFile(mainStorage, finalData, "utf8", (err) => {});

    process.stdout.write(`Members fetched: ${tempData.length}`);
    process.stdout.write('\n');
    process.stdout.write('\nScraping discord members complete!');

  });

  client.login(process.env.DISCORD_TOKEN);

}

export const scrapeDiscordMembersWithFullDetails = async () => {

  // DATA HOLDER
  let tempData = [];
  let discordServerMemberStorage = path.join(__dirname, '../../src/Database/discordMembersFullDetails.json');

  await client.once(Events.ClientReady, async (c) => {

    const guild = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
    let res = await guild.members.fetch();

    guild.members.cache.forEach((member) => {
      let user = member.user;
      tempData.push(user);

    });
    console.log(tempData);
    let finalData = JSON.stringify(tempData);
    fs.writeFile(discordServerMemberStorage, finalData, "utf8", (err) => {});
  });

  client.login(process.env.DISCORD_TOKEN);

}

