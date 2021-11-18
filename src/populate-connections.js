import getRelatedArtists from './get-related-artists.js';
import Queue from 'yocto-queue';
import fs from 'fs';

// writes specified # artists connections to connections.txt
const populateConnections = async (
  source,
  artistIdSet,
  artistIdSetFile,
  connectionsFile,
  numArtists,
  popularityThreshold
) => {
  let count = 0;

  // loading data into queue from source
  let processingQueue = new Queue();
  source.forEach((artist) => {
    processingQueue.enqueue(artist);
  });

  // processing artists
  while (count != numArtists && processingQueue.size != 0) {
    // processing each id in processing queue
    const qSize = processingQueue.size;
    for (let i = 0; i < qSize; i++) {
      if (count === numArtists) break;

      count++;
      let currentName, currentId;
      [currentName, currentId] = processingQueue.dequeue();

      // process id if not already processed
      if (!artistIdSet.has(currentId)) {
        artistIdSet.add(currentId);
        fs.appendFile(artistIdSetFile, `${currentId},`, (err) => {
          if (err) throw err;
        });

        const res = await getRelatedArtists(currentId);
        const data = res.artists;

        // reviewing each related artist
        data.forEach((artist) => {
          // if popular enough, process artist id
          if (artist.popularity >= popularityThreshold) {
            processingQueue.enqueue([artist.name, artist.id]);
            fs.appendFile(
              connectionsFile,
              `${currentName} -> ${artist.name}\n`,
              (err) => {
                if (err) throw err;
              }
            );
          }
        });
      }
      console.log(`# artists processed: ${count}`);
    }
  }

  // exit status
  if (processingQueue.size == 0) {
    console.log('processing queue is empty');
  } else {
    console.log(`${numArtists} found and processed`);
  }
};

export default populateConnections;
