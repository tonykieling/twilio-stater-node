const shell = require("shelljs");

// const x = shell.exec("lsof -i :3333 | grep 3333", {silent: true}, (code, output) => {
//   // shell.echo(`exit code => ${code}`);
  
//   // shell.echo(`output => ${output}`);
//   // return output;
// }).output;
const x = shell.exec("lsof -i :3000 | grep -i *:3000").split(" ").join("");
// const x = shell.exec("lsof -i :3333 | grep 3333");
// console.log(`x = '${x}'`);
if (x != "") {
  let processID = "";
  for (let c = 0; c < 12; c += 1) {
    if (Number(x[c]) || x[c] == "0") {
      processID += x[c];
      // console.log("processID", x[c]);
    }
  }
  // console.log("x-->", x.split(" ").join(""));
  console.log(`KILLING process ${processID}`);
  shell.exec(`kill -9 ${processID}`);
} else
  console.log("nothing")