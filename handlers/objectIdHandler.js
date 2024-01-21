const path = require('path');
const fs = require('fs');

const objectIdHandler = (req, res) => {
    const type = req.params.type;
    const id = req.params.id;
    const dataPath = path.join(__dirname, '../data', `${type}.json`);

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const objectsOfType = JSON.parse(data);
        const objectWithId = objectsOfType.find(obj => obj.id === parseInt(id));

        if (!objectWithId) {
            res.status(404).send('Object Not Found');
            return;
        }

        res.json(objectWithId);
    });
};

module.exports = objectIdHandler;
