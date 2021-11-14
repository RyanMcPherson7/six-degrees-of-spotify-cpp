import axios from 'axios';
import Queue from 'yocto-queue';
import fs from 'fs';

const clientSecret = 'b2ec1fbaf84b4afc92f821dd7cfff4f7';
const clientId = 'ad1ed1cd0b5744fb81f3937fdf5db634';

const getToken = async () => {
  const res = await axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(clientId + ':' + clientSecret).toString('base64'),
    },
    data: 'grant_type=client_credentials',
  });

  return res.data.access_token;
};

const getRelatedArtists = async (artistId) => {
  const token = await getToken();
  // console.log(token);

  const res = await axios({
    method: 'get',
    url: `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

let artistConnections = [];
let artistIdSet = new Set();
let processingQueue = new Queue();

// initial seeding
processingQueue.enqueue(['Justin Bieber', '1uNFoZAHBGtllmzznpCI3s']);
processingQueue.enqueue(['Kanye West', '5K4W6rqBFWDnAN6FQUkS6x']);
processingQueue.enqueue(['The Beatles', '3WrFJ7ztbogyGnTHbHJFl2']);

const connectionPopulator = async (numArtists) => {
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
          artistConnections.push([currentName, artist.name]);
        });
      }
    }
  }
};

connectionPopulator(1000);

setTimeout(() => {
  let data = '';
  artistConnections.forEach((connection) => {
    data += connection[0] + ' -> ' + connection[1] + '\n';
  });

  console.log('writing file');
  fs.writeFileSync('data.txt', data);
}, 1200000);
