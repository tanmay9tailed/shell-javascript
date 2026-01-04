const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: Uncomment the code below to pass the first stage

const promt = () => {
  rl.question("$ ", (answer) => {
    const commandArr = answer.split(" ");
    if(commandArr[0]==="exit"){
      process.exit(+commandArr[1]) ;
    }
    else if(commandArr[0]==="echo"){
      const args = commandArr?.slice(1).join(" ") ?? "";

      console.log(args);
    }
    else if(commandArr[0]==="type"){
      if(commandArr[1]==="exit" || commandArr[1]==="echo" || commandArr[1]==="type"){
        console.log(`${commandArr[1]} is a shell builtin`)
      }else{
        console.log(`${commandArr[1]}: not found`)
      }
    }
    else console.log(`${answer}: command not found`)
    promt();
  });
}

promt();