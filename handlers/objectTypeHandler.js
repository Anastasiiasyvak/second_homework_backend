const path = require('path');
const fs = require('fs');

const objectTypeHandler = (req, res) => {
    const type = req.params.type;
    const dataPath = path.join(__dirname, '../data', `${type}.json`);

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const objectsOfType = JSON.parse(data);
        res.json(objectsOfType);
    });
};

module.exports = objectTypeHandler;
