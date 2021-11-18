import populateConnections from './populate-connections.js';
import setPopulator from './populate-artist-set.js'
import Queue from 'yocto-queue';

// initial seeding
let processQ = new Queue();
// processQ.enqueue(['Justin Bieber', '1uNFoZAHBGtllmzznpCI3s']);
// processQ.enqueue(['Vance Joy', '10exVja0key0uqUkk6LJRT']);
// processQ.enqueue(['Dominic Fike', '6USv9qhCn6zfxlBQIYJ9qs']);
// processQ.enqueue(['Ed Sheeran', '6eUKZXaKkcviH0Ku9w2n3V']);
// processQ.enqueue(['Pitbull', '0TnOYISbd1XYRBk9myaseg']);
// processQ.enqueue(['Tame Impala', '5INjqkS1o8h1imAzPqGZBb']);
// processQ.enqueue(['Avicci', '1vCWHaC5f2uS3yhpwWbIA6']);
// processQ.enqueue(['Kanye West', '5K4W6rqBFWDnAN6FQUkS6x']);
// processQ.enqueue(['Drake', '3TVXtAsR1Inumwj472S9r4']);
// processQ.enqueue(['Anderson .Paak', '3jK9MiCrA42lLAdMGUZpwa']);
// processQ.enqueue(['The Weeknd', '1Xyo4u8uXC1ZmMpatF05PJ']);
// processQ.enqueue(['Coldplay', '4gzpq5DPGxSnKTe4SA8HAU']);
// processQ.enqueue(['Logic', '4xRYI6VqpkE3UwrDrAZL8L']);
// processQ.enqueue(['Dua Lipa', '6M2wZ9GZgrQXHCFfjv46we']);
// processQ.enqueue(['Doja Cat', '5cj0lLjcoR7YOSnhnX0Po5']);
processQ.enqueue(['Lil Nas X', '7jVv8c5Fj3E9VhNjxT4snq']);
// processQ.enqueue(['The Beatles', '3WrFJ7ztbogyGnTHbHJFl2']);
// processQ.enqueue(['Michael Jackson', '3fMbdgg4jU18AjLCKBhRSm']);
processQ.enqueue(['Bad Bunny', '4q3ewBCX7sLwd24euuV69X']);
// processQ.enqueue(['Olivia Rodrigo', '1McMsnEElThX1knmY4oliG']);
// processQ.enqueue(['Calvin Harris', '7CajNmpbOovFoOoasH2HaY']);
// processQ.enqueue(['Billie Eilish', '6qqNVTkY8uBg9cP3Jd7DAH']);
// processQ.enqueue(['Post Malone', '246dkjvS1zLTtiykXe5h60']);
// processQ.enqueue(['Imagine Dragons', '53XhwfbYqKCa1cC15pYq2q']);

// TODO: lady gaga, pink floyd, and artists listed on this page
// https://open.spotify.com/playlist/33Re55lSgkd5XzB6YMhFZA

const ARTIST_SET_ID_FILE = './data/artist-set-id.txt';
const CONNECTIONS_FILE = './data/connections.txt';
const artistIdSet = setPopulator(ARTIST_SET_ID_FILE);
const NUM_ARTISTS = 10000;
const POPULARITY = 50;

setTimeout(() => {
  populateConnections(
    processQ,
    artistIdSet,
    ARTIST_SET_ID_FILE,
    CONNECTIONS_FILE,
    NUM_ARTISTS,
    POPULARITY
  );
}, 5000);