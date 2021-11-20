import populateConnections from './populate-connections.js';
import setPopulator from './populate-artist-set.js';

// https://open.spotify.com/playlist/33Re55lSgkd5XzB6YMhFZA

const SOURCE = [
  // ['Justin Bieber', '1uNFoZAHBGtllmzznpCI3s'],
  // ['Vance Joy', '10exVja0key0uqUkk6LJRT'],
  // ['Dominic Fike', '6USv9qhCn6zfxlBQIYJ9qs'],
  // ['Ed Sheeran', '6eUKZXaKkcviH0Ku9w2n3V'],
  // ['Pitbull', '0TnOYISbd1XYRBk9myaseg'],
  // ['Tame Impala', '5INjqkS1o8h1imAzPqGZBb'],
  // ['Avicii', '1vCWHaC5f2uS3yhpwWbIA6'],
  // ['Kanye West', '5K4W6rqBFWDnAN6FQUkS6x'],
  // ['Drake', '3TVXtAsR1Inumwj472S9r4'],
  // ['Anderson .Paak', '3jK9MiCrA42lLAdMGUZpwa'],
  // ['The Weeknd', '1Xyo4u8uXC1ZmMpatF05PJ'],
  // ['Coldplay', '4gzpq5DPGxSnKTe4SA8HAU'],
  // ['Logic', '4xRYI6VqpkE3UwrDrAZL8L'],
  // ['Dua Lipa', '6M2wZ9GZgrQXHCFfjv46we'],
  // ['Doja Cat', '5cj0lLjcoR7YOSnhnX0Po5'],
  // ['Lil Nas X', '7jVv8c5Fj3E9VhNjxT4snq'],
  // ['The Beatles', '3WrFJ7ztbogyGnTHbHJFl2'],
  // ['Michael Jackson', '3fMbdgg4jU18AjLCKBhRSm'],
  // ['Bad Bunny', '4q3ewBCX7sLwd24euuV69X'],
  // ['Olivia Rodrigo', '1McMsnEElThX1knmY4oliG'],
  // ['Calvin Harris', '7CajNmpbOovFoOoasH2HaY'],
  // ['Billie Eilish', '6qqNVTkY8uBg9cP3Jd7DAH'],
  // ['Post Malone', '246dkjvS1zLTtiykXe5h60'],
  // ['Imagine Dragons', '53XhwfbYqKCa1cC15pYq2q'],
  // ['Pink Floyd', '0k17h0D3J5VfsdmQ1iZtE9'],
  // ['Lady Gaga', '1HY2Jd0NmPuamShAr6KMms'],
  // ['Adele', '4dpARuHxo51G3z768sgnrY'],
  // ['XXXTENTACION', '15UsOTVnJzReFVN1VCnxy4'],
  // ['J Balvin', '1vyhD5VmyZ7KMfW5gqLgo5'], 
  // ['Farruko', '329e4yvIujISKGKz1BZZbO'],
  // ['Bradley Cooper', '4VIvfOurcf0vuLRxLkGnIG'],
  // ['Daddy Yankee', '4VMYDCV2IEDYJArk749S6m'],
  // ['Beyoncé', '6vWDO969PvNqNYHIOW5v0m'],
  // ['Pop Smoke', '0eDvMgVFoNV3TpwtrVCoTj'],
  // ['Måneskin', '0lAWpj5szCSwM4rUMHYmrr'],
  // ['Glass Animals', '4yvcSjfu4PC0CYQyLy4wSq'],
  // ['Crystal Fighters', '75EZuo5MHV2572NRpMWotC'],
  // ['Green Day', '7oPftvlwr6VrsViSDV7fJY'],
  // ['Machine Gun Kelly', '6TIYQ3jFPwQSRmorSezPxX'],
  // ['John Newman', '34v5MVKeQnIo0CWYMbbrPf'], 
  // ['Twenty One Pilots', '3YQKmKGau1PzlVlkL1iodx'],
  // ['Joji', '3MZsBdqDrRTJihTHQrO6Dq'],
  // ['BTS', '3Nrfpe0tUJi4K4DXYWgMUX'],
  // ['Weston Estate', '18CPEToK1OfjJ5B5vDBDKa'],
  // ['Marshmello', '64KEffDW9EtZ1y2vBYgq8T'],
  // ['Vanessa Mai', '3WUe8ADT5d65WeByR3ubl7'],
  // ['Mako', '0Ye4nfYAA91T1X56gnlXAA'],
  // ['Gilsons', '6q7nMIVgGohQ14mSsq3F8t'],
  // ['Grouper', '31uyAcnY0kjjKKIQZMKX4i'],
  // ['Porter Robinson', '3dz0NnIZhtKKeXZxLOxCam'],
  // ['Granger Smith', '4sTFGCigAQIUiEy8wSSQNF'],
  // ['100 gecs', '6PfSUFtkMVoDkx4MQkzOi3'],
  // ['Rubel', '0slVGXBggrLglTLNKbeEyW'],
  // ['Muddy Waters', '4y6J8jwRAwO4dssiSmN91R'],
  // ['Sido', '4Yttlv9ndGjCDCVLqM7ACq'],
  // ['CJ', '7arQA31aZVS8yS6zUveWzb'],
  // ['Blue October', '1TJbmc7jTpw78GKCiMpvDh'],
  // ['Babyxsosa', '0z6XSqpMBqmhaRVWduV9HJ'],
  // ['colours in the dark', '4lRRwA3JsWrOD8f47gI2iI'],
  // ['Tiago PZK', '5Y3MV9DZ0d87NnVm56qSY1'],
  // ['harmless', '5dYGaoCO0iaUZKfl9K8Gtd'],
  // ['Frank Zappa', '6ra4GIOgCZQZMOaUECftGN'],
  // ['Will Sparks', '1u7OVFmWah4wQhOPIbUb8U'],
  // ['Yung Bae', '30FDJPN3RtwJZ20g5YGCRX'],
  // ['', ''],
];

const ARTIST_SET_ID_FILE = './data/artist-set-id60.txt';
const CONNECTIONS_FILE = './data/connections60.txt';
const ARTIST_ID_SET = setPopulator(ARTIST_SET_ID_FILE);
const POPULARITY = 60;

setTimeout(() => {
  populateConnections(
    SOURCE,
    ARTIST_ID_SET,
    ARTIST_SET_ID_FILE,
    CONNECTIONS_FILE,
    POPULARITY
  );
}, 10000);
