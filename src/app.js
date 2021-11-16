import populateConnections from './populate-connections.js';
import Queue from 'yocto-queue';
import fs from 'fs';

// reading already processed artists
let artistIdSet = new Set();
fs.readFile('artistIdSet.txt', 'utf8', (err, data) => {
  if (err) throw err;

  data = data.split(',');
  data.forEach((id) => {
    artistIdSet.add(id);
  });
});

// initial seeding
let processQ = new Queue();
// processQ.enqueue(['Justin Bieber', '1uNFoZAHBGtllmzznpCI3s']);
// processQ.enqueue(['Vance Joy', '10exVja0key0uqUkk6LJRT']);
// processQ.enqueue(['Ed Sheeran', '6eUKZXaKkcviH0Ku9w2n3V']);
// processQ.enqueue(['Tame Impala', '5INjqkS1o8h1imAzPqGZBb']);
// processQ.enqueue(['Avicci', '1vCWHaC5f2uS3yhpwWbIA6']);
// processQ.enqueue(['Kanye West', '5K4W6rqBFWDnAN6FQUkS6x']);
// processQ.enqueue(['Drake', '3TVXtAsR1Inumwj472S9r4']);
// processQ.enqueue(['Anderson .Paak', '3jK9MiCrA42lLAdMGUZpwa']);
// processQ.enqueue(['The Weeknd', '1Xyo4u8uXC1ZmMpatF05PJ']);
processQ.enqueue(['Coldplay', '4gzpq5DPGxSnKTe4SA8HAU']);
// processQ.enqueue(['The Beatles', '3WrFJ7ztbogyGnTHbHJFl2']);
// processQ.enqueue(['Michael Jackson', '3fMbdgg4jU18AjLCKBhRSm']);
// processQ.enqueue(['Bad Bunny', '4q3ewBCX7sLwd24euuV69X']);

console.log('loading processed artists...');
setTimeout(() => {
  console.log('Initialize scraping');
  populateConnections(processQ, artistIdSet, 10000);
}, 10000);
