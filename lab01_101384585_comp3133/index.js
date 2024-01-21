const fs = require('fs');
const csv = require('csv-parser');

const deleteIfExists = (filePath) => {
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
            if (err) throw err;
            console.log('File deleted!');
        });
    }
};

deleteIfExists('canada.txt');
deleteIfExists('usa.txt');

// filter data of Canada in input_countries.csv and write to canada.txt
fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (data) => {
        if (data.country === 'Canada') {
            fs.appendFileSync('canada.txt', `${data.country}, ${data.year}, ${data.population}\n`);
        }
        if (data.country === 'United States') {
            fs.appendFileSync('usa.txt', `${data.country}, ${data.year}, ${data.population}\n`);
        }
});