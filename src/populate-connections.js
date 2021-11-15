import getRelatedArtists from './get-related-artists.js';
import fs from 'fs';

// writes specified # artists connections to connections.txt
const populateConnections = async (
  processingQueue,
  artistIdSet,
  numArtists
) => {
  let count = 0;

  while (count != numArtists) {
    const qSize = processingQueue.size;
    for (let i = 0; i < qSize; i++) {
      if (count == numArtists) break;

      let currentName, currentId;
      [currentName, currentId] = processingQueue.dequeue();

      if (!artistIdSet.has(currentId)) {
        count++;
        artistIdSet.add(currentId);
        fs.appendFile('artistIdSet.txt', `${currentId},`, (err) => {
          if (err) throw err;
        });

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

export default populateConnections;
