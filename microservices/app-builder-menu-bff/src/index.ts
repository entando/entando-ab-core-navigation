/* Configure Environment */
import fs from 'fs';
import dotenv from 'dotenv';
 
const filename = `.env.${process.env.NODE_ENV}`;
const envFile = process.env.NODE_ENV && fs.existsSync(filename) ? filename : '.env';
dotenv.config({ path: envFile });
/* Configure Environment */

import app from './server';

process.on('SIGINT', () => {
  console.info("Interrupted");
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.info('Quitting');
  process.exit(0);
});

const port = Number(process.env.PORT || 8080);
app.listen(port, () => {
  console.info('Service started on port: ' + port);
});
