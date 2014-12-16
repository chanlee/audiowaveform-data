/**
 * audiowaveform-data-js
 */
var path = require('path');

module.exports = function(exec, baseDir, filename, callback) {

    var source = path.join(baseDir, filename);
    var target = path.join(baseDir, filename+'.json');

    var exec = require('child_process').exec;
    var child = exec('audiowaveform -i ' + source + ' -o ' + target,
                    function(error, stdout, stderr) {
                        if (error !== null) {
                            callback(error);
                        } else {
                            callback(null, stdout);
                        }
                    });

};
