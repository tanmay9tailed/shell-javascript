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
    else console.log(`${answer}: command not found`)
    promt();
  });
}

promt();