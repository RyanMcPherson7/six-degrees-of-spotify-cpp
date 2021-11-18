import populateConnections from './populate-connections.js';
import setPopulator from './populate-artist-set.js';

// https://open.spotify.com/playlist/33Re55lSgkd5XzB6YMhFZA

const SOURCE = [
  ['Justin Bieber', '1uNFoZAHBGtllmzznpCI3s'],
  ['Vance Joy', '10exVja0key0uqUkk6LJRT'],
  ['Dominic Fike', '6USv9qhCn6zfxlBQIYJ9qs'],
  ['Ed Sheeran', '6eUKZXaKkcviH0Ku9w2n3V'],
  ['Pitbull', '0TnOYISbd1XYRBk9myaseg'],
  ['Tame Impala', '5INjqkS1o8h1imAzPqGZBb'],
  ['Avicci', '1vCWHaC5f2uS3yhpwWbIA6'],
  ['Kanye West', '5K4W6rqBFWDnAN6FQUkS6x'],
  ['Drake', '3TVXtAsR1Inumwj472S9r4'],
  ['Anderson .Paak', '3jK9MiCrA42lLAdMGUZpwa'],
  ['The Weeknd', '1Xyo4u8uXC1ZmMpatF05PJ'],
  ['Coldplay', '4gzpq5DPGxSnKTe4SA8HAU'],
  ['Logic', '4xRYI6VqpkE3UwrDrAZL8L'],
  ['Dua Lipa', '6M2wZ9GZgrQXHCFfjv46we'],
  ['Doja Cat', '5cj0lLjcoR7YOSnhnX0Po5'],
  ['Lil Nas X', '7jVv8c5Fj3E9VhNjxT4snq'],
  ['The Beatles', '3WrFJ7ztbogyGnTHbHJFl2'],
  ['Michael Jackson', '3fMbdgg4jU18AjLCKBhRSm'],
  ['Bad Bunny', '4q3ewBCX7sLwd24euuV69X'],
  ['Olivia Rodrigo', '1McMsnEElThX1knmY4oliG'],
  ['Calvin Harris', '7CajNmpbOovFoOoasH2HaY'],
  ['Billie Eilish', '6qqNVTkY8uBg9cP3Jd7DAH'],
  ['Post Malone', '246dkjvS1zLTtiykXe5h60'],
  ['Imagine Dragons', '53XhwfbYqKCa1cC15pYq2q'],
  ['Pink Floyd', '0k17h0D3J5VfsdmQ1iZtE9'],
  ['Lady Gaga', '1HY2Jd0NmPuamShAr6KMms'],
];

const ARTIST_SET_ID_FILE = './data/artist-set-id.txt';
const CONNECTIONS_FILE = './data/connections.txt';
const ARTIST_ID_SET = setPopulator(ARTIST_SET_ID_FILE);
const NUM_ARTISTS = 10000;
const POPULARITY = 60;

setTimeout(() => {
  populateConnections(
    SOURCE,
    ARTIST_ID_SET,
    ARTIST_SET_ID_FILE,
    CONNECTIONS_FILE,
    NUM_ARTISTS,
    POPULARITY
  );
}, 5000);
