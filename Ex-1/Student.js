import fs from "fs/promises";

 
const filePath = "./hello.txt"
// fs.writeFileSync(filePath, "Hello, Node.js beginner!");

// const content = fs.readFileSync(filePath, "utf-8")
// console.log("File Content : ", content)

// convert into asyn 


try {
    // wrtie
    await fs.writeFile(filePath, "Hello, Node.js beginner!");


    // read
    const content = await fs.readFile(filePath, "utf8");
    console.log("File content:", content);
  } catch (e) {
    console.error("Error handling the file:", e);
  }