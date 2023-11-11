import { scrapeDiscordMembers, scrapeDiscordMembersWithFullDetails } from './scripts/scrapeDiscordMembers.js';

const startScrape = async () => {
  await scrapeDiscordMembers();
}

// const startScrape = async () => {
//   await scrapeDiscordMembersWithFullDetails();
// }


startScrape();