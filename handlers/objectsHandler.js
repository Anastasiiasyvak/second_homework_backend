const path = require('path');
const fs = require('fs');

const objectsHandler = (req, res) => {
    const dataPath = path.join(__dirname, '../data', 'objects.json');

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const objects = JSON.parse(data);
        res.json(objects);
    });
};

module.exports = objectsHandler;
