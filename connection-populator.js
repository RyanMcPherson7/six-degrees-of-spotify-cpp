import axios from 'axios';
import Queue from 'yocto-queue';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

// returns bearer token from Spotify
const getToken = async () => {
  const res = await axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(
          process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET
        ).toString('base64'),
    },
    data: 'grant_type=client_credentials',
  });

  return res.data.access_token;
};

// returns related artists list for specified artistId
const getRelatedArtists = async (artistId) => {
  const token = await getToken();

  const res = await axios({
    method: 'get',
    url: `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

let artistIdSet = new Set();
let processingQueue = new Queue();

// initial seeding
processingQueue.enqueue(['Justin Bieber', '1uNFoZAHBGtllmzznpCI3s']);
processingQueue.enqueue(['Kanye West', '5K4W6rqBFWDnAN6FQUkS6x']);
processingQueue.enqueue(['The Beatles', '3WrFJ7ztbogyGnTHbHJFl2']);
processingQueue.enqueue(['Avicci', '1vCWHaC5f2uS3yhpwWbIA6']);
processingQueue.enqueue(['Empire of the Sun', '67hb7towEyKvt5Z8Bx306c']);

// writes specified # artists connections to connections.txt
const populateConnections = async (numArtists) => {
  while (artistIdSet.size < numArtists) {
    const qSize = processingQueue.size;

    for (let i = 0; i < qSize; i++) {
      let currentName, currentId;
      [currentName, currentId] = processingQueue.dequeue();
      if (!artistIdSet.has(currentId)) {
        artistIdSet.add(currentId);

        const res = await getRelatedArtists(currentId);
        const data = res.artists;
        data.forEach((artist) => {
          processingQueue.enqueue([artist.name, artist.id]);

          fs.appendFile(
            'connections.txt',
            `${currentName} -> ${artist.name}\n`,
            (err) => {
              if (err) throw err;
            }
          );
        });
      }
      console.log('# artists found: ', artistIdSet.size);
    }
  }
};

populateConnections(100);
