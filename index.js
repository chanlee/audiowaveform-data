/**
 * audiowaveform-data-js
 */
var path = require('path');
var fs = require('fs');

module.exports = function(baseDir, filename, callback) {

    var source = path.join(baseDir, filename);
    var target = path.join(baseDir, filename+'.json');

    var audiowave = require('child_process').spawn(
        'audiowaveform',
        ['-i', source, '-o', target]
    );

    audiowave.on('close', function(code, signal) {
        fs.readFile(target, function(err, data) {
            if (err !== null) {
                callback(err);
            } else {
                callback(null, data);
            }
        });
    });

};
