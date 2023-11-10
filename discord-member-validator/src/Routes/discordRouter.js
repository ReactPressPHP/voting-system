import express from 'express';
const router = express();
import * as discordController from '../Controllers/discordController.js';

router.get('/:id?', discordController.verifyMember);

router.get('/scrape/members', discordController.scrapeDiscordMembers);

export default router;