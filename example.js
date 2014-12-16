
var audiowaveform = require('./index.js');
var fs = require('fs');

audiowaveform('/home/chanlee/ddd.mp3',
              function(err, result) {
    if (err)
        console.log("err=", err);
    console.log("result=", result);

    fs.writeFileSync('result.json', result);
});
