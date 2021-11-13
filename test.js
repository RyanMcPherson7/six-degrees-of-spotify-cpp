import axios from 'axios';
import Queue from 'yocto-queue';

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
let artistNameArray = [];
let artistNameIndex = 0;
let artistIdSet = new Set();
let idProcessingQueue = new Queue();

artistNameArray.push('Pitbull');
// idProcessingQueue.enqueue('3sgFRtyBnxXD5ESfmbK4dl');
idProcessingQueue.enqueue('0TnOYISbd1XYRBk9myaseg');

const connectionPopulator =  async () => {
  while (artistIdSet.size < 5) {
    const qSize = idProcessingQueue.size;

    for (let i = 0; i < qSize; i++) {
      const currentId = idProcessingQueue.dequeue();
      if (!artistIdSet.has(currentId)) {
        artistIdSet.add(currentId);

        const res = await getRelatedArtists(currentId)
        const data = res.artists;
        data.forEach((artist) => {
          idProcessingQueue.enqueue(artist.id);
          artistNameArray.push(artist.name);
          artistConnections.push([
            // currentId,
            artistNameArray[artistNameIndex],
            artist.name,
          ]);
        });
      }

      artistNameIndex++;
    }
  }
}

connectionPopulator();

setTimeout(() => {
  console.log(artistConnections);
}, 10000);