const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello this is the KETCHUP PACKETS Podcast!! Don\'t forget to hit that subscribe button'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
