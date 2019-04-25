const path = require('path');
const fs = require('fs');

// fs.mkdir(path.join(__dirname,'test'),function(err) {
//     if(err) console.log("error occured" + err);
//     console.log("folder created!");
// })

fs.writeFile(("./new_folder/text1.txt"),"hello world again",err => {
    if(err) console.log(`error ${err}`);
    console.log("file written to...");

    fs.appendFile("./new_folder/text1.txt","\nLook this is not is overwritten",function(err){
        if(err) console.log("error"+err);
        console.log("another file is written...");
    })
})