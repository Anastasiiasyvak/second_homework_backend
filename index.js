const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());


app.get('/info', (req, res) => {
    res.json({ message: 'API documentation'});
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})












// app.get('/home', (req, res) => {
//     res.sendFile(__dirname + '/assets/pages/home.html');
// });


// app.get('/playlists', (req, res) => {
//     res.sendFile(__dirname + '/assets/pages/playlists.html');
// });


// app.get('/tracks', (req, res) => {
//     res.sendFile(__dirname + '/assets/pages/tracks.html');
// });