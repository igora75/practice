const fs = require('fs');
const path = require('path');

function iterFiles(files, oldPath, newPath) {

    files.forEach((file) => {
        fs.rename(path.join(oldPath, file), path.join(newPath, file), err => {
            if (err) throw err;
        })
    });

}

fs.readdir('./2000', (err, files2000) => {
    if (err) throw err;

    fs.readdir('./1800', (err, files1800) => {
        if (err) throw err;

        iterFiles(files1800, '1800', '2000');

    })

    iterFiles(files2000, '2000', '1800');

});

