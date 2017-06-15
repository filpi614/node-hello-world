const fs = require('fs');
const async = require('async');

async.map(['file1', 'file2', 'file3'], fs.stat, function (err, results) {
    if (err) {
        console.log(err);
    }
    console.log(results);
});