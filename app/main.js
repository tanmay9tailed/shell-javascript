const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: Uncomment the code below to pass the first stage

const promt = () => {
  rl.question("$ ", (answer) => {
    if(answer.split(" ")[0]==="exit"){
      return ;
    }
    console.log(`${answer}: command not found`)
    promt();
  });
}

promt();