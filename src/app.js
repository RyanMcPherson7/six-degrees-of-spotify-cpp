import populateConnections from './populate-connections.js';
import Queue from 'yocto-queue';

// initial seeding
let processQ = new Queue();
let artistIdSet = new Set();
processQ.enqueue(['Justin Bieber', '1uNFoZAHBGtllmzznpCI3s']);
processQ.enqueue(['Kanye West', '5K4W6rqBFWDnAN6FQUkS6x']);
processQ.enqueue(['The Beatles', '3WrFJ7ztbogyGnTHbHJFl2']);
processQ.enqueue(['Avicci', '1vCWHaC5f2uS3yhpwWbIA6']);
processQ.enqueue(['Empire of the Sun', '67hb7towEyKvt5Z8Bx306c']);
processQ.enqueue(['Michael Jackson', '3fMbdgg4jU18AjLCKBhRSm']);
processQ.enqueue(['Tame Impala', '5INjqkS1o8h1imAzPqGZBb']);
processQ.enqueue(['Bad Bunny', '4q3ewBCX7sLwd24euuV69X']);

// populating data file
const NUM_ARTISTS = 2000;
const ARTIST_PER_REQUEST = 100;

for (let i = 0; i < NUM_ARTISTS / ARTIST_PER_REQUEST; i++) {
  setTimeout(() => {
    populateConnections(processQ, artistIdSet, ARTIST_PER_REQUEST);
  }, 60000 * i);
}
