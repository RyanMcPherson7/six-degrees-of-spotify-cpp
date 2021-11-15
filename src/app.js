import populateConnections from './populate-connections.js';
import Queue from 'yocto-queue';

// initial seeding
let processQ = new Queue();
processQ.enqueue(['Justin Bieber', '1uNFoZAHBGtllmzznpCI3s']);
processQ.enqueue(['Kanye West', '5K4W6rqBFWDnAN6FQUkS6x']);
processQ.enqueue(['The Beatles', '3WrFJ7ztbogyGnTHbHJFl2']);
processQ.enqueue(['Avicci', '1vCWHaC5f2uS3yhpwWbIA6']);
processQ.enqueue(['Empire of the Sun', '67hb7towEyKvt5Z8Bx306c']);

// populating data file
populateConnections(processQ, 13000);
