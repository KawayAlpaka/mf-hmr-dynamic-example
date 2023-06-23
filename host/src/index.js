// Use dynamic import here to allow webpack to interface with module federation code
window.remote1Url = 'http://localhost:3001';
window.remote2Url = 'http://localhost:3003';
window.libsUrl = 'http://localhost:3002';

import('./bootstrap');
