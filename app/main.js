const readline = require("readline");
const path = require("path");
const fs = require("fs")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: Uncomment the code below to pass the first stage

const promt = () => {
  rl.question("$ ", (answer) => {
    const commandArr = answer.split(" ");
    if(commandArr[0]==="exit"){
      process.exit(0) ;
    }
    else if(commandArr[0]==="echo"){
      const args = commandArr?.slice(1).join(" ") ?? "";

      console.log(args);
    }
    else if(commandArr[0]==="type"){
      if(commandArr[1]==="exit" || commandArr[1]==="echo" || commandArr[1]==="type"){
        console.log(`${commandArr[1]} is a shell builtin`)
      }else{
        let found = false;
        const envPath = process.env.PATH
        const directories = envPath.split(path.delimiter);
        for(const directory of directories){
          const fullPath = path.join(directory, commandArr[1]);
          try {
            fs.accessSync(fullPath, fs.constants.X_OK);
            console.log(`${commandArr[1]} is ${fullPath}`);
            found = true;
            break;
          }
          catch(err){

          }
        }
        if (!found) {
          console.log(`${commandArr[1]}: not found`);
        }
      }
    }
    else console.log(`${answer}: command not found`)
    promt();
  });
}

promt();