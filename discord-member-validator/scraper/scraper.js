import { scrapeDiscordMembers } from './scripts/scrapeDiscordMembers.js';

const startScrape = async () => {
  await scrapeDiscordMembers();
}

startScrape();