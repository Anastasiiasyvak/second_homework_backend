const path = require('path');

const fileHandler = (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../assets', filename);

    res.sendFile(filePath);
};

module.exports = fileHandler;
