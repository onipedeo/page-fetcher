const request = require('request');
const fs = require('fs');

//saves the two CLI Arguments in args array
const args = process.argv.slice(2, 4);
const fetcher = () => {
  request(args[0], (error, response, body) => {
    //initialise filesize variable
    let fileSize;
    //writing to file passed as second argument on CLI usingnode Fs
    fs.writeFile(args[1], body, (error) => {
      if (error) {
        console.log(error);
      }
      //Getting the size from the stats object using the fs.stat async method
      fs.stat(args[1], (err, stats) => {
        if (err) {
          console.log(`Error`);
        }
        fileSize = stats.size;
        console.log(`Downloaded and saved ${fileSize} bytes to ${args[1]}`);
      });
    });
  });
}

fetcher();