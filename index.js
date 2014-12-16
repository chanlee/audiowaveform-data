/**
 * audiowaveform-data
 */
var fs = require('fs');

module.exports = function(filename, callback) {

    var source = filename;
    var target = filename+'.json';

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
                fs.unlinkSync(target);
            }
        });
    });

};
