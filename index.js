const express = require('express');
const cors = require('cors');
const path = require('path');

const fileHandler = require('./handlers/fileHandler');
const objectsHandler = require('./handlers/objectsHandler');
const objectTypeHandler = require('./handlers/objectTypeHandler');
const objectIdHandler = require('./handlers/objectIdHandler');

const app = express();
const port = 3000;

app.use(cors());

app.get('/file/:filename', fileHandler);

app.get('/objects', objectsHandler);
app.get('/objects/:type', objectTypeHandler);
app.get('/objects/:type/:id', objectIdHandler);

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/assets/pages/home.html'));
});

app.get('/playlists', (req, res) => {
    res.sendFile(path.join(__dirname + '/assets/pages/playlists.html'));
});

app.get('/tracks', (req, res) => {
    res.sendFile(path.join(__dirname + '/assets/pages/tracks.html'));
});

app.get('/info', (req, res) => {
    res.json({ message: 'API documentation' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
