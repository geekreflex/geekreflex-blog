---
title: "Building a File Utility Tool with Node.js"
date: "2023-05-19"
---

As software developers, we often encounter repetitive tasks that can be automated to improve productivity and reduce errors. In this article, we will explore how to create our own file utility tool using Node.js. This tool will provide functionalities such as file copying, moving and deletion. Let's dive in!

## Prerequisites

Before we begin, please ensure that you have Node.js and npm (Node Package Manager) installed on your computer. You can download the latest version of Node.js from the official [website](https://nodejs.org)

## Setting Up the Project

1. Create a new project folder in your desired location.
2. Open a command-line interface and navigate to the project folder.
3. Run the following command to utilize a new Node.js project:

```bash
npm init -y
```

This will generate a `package.json` file, which tracks the project's dependencies. We will circle back to this file later in the article for further modifications.

## Installing Dependencies

Our utility tool will utilize the `commander` package to handle command-line interactions. To install `commander`, execute the following command in your project folder:

```bash
npm install commander
```

## Implementing the File Copying command

Let's start by implementing the file copying functionality. We will use the `fs` (File System) module provide by Node.js. Create a new file called `index.js` in the root directory of your project and add the following code:

```js
const fs = require("fs")
const path = require("path")
const { program } = require("commander")

program.version("1.0.0").description("File Utility Tool")

program
  .command("copy <source> <destination>")
  .description("Copy a file from the source path to the destination path")
  .action((source, destination) => {
    const sourcePath = path.resolve(source)
    const destinationPath = path.resolve(destination)

    const sourceStream = fs.createReadStream(sourcePath)
    const destinationStream = fs.createWriteStream(destinationPath)

    sourceStream.pipe(destinationStream)

    sourceStream.on("end", () => {
      console.log(`File copied from ${sourcePath} to ${destinationPath}`)
    })

    sourceStream.on("error", err => {
      console.error("Error copying file:", err.message)
    })
  })
```

In the above code, we import the necessary modules `fs` and `path` for file operations, as well as the `program` object from `commander`. We define a `copy` command that takes a source and destination file path as arguments.

Inside the `copy` command, we resolve the provided paths to their absolute paths using `path.resolve()`. This ensures that we are working with the correct file locations. We then create readable and writeable streams using `fs.createReadStream()` and `fs.createWriteStream()` respectively. By piping the source stream to the destination stream, we copy the file contents. Success and error messages are logged accordingly.

## Implementing the File Moving Command

```js
program
  .command("move <source> <destination>")
  .description("Move a file from the source path to the destination path")
  .action((source, destination) => {
    const sourcePath = path.resolve(source)
    const destinationPath = path.resolve(destination)

    fs.rename(sourcePath, destinationPath, err => {
      if (err) {
        console.error("Error moving file:", err.message)
      } else {
        console.log(`File moved from ${sourcePath} to ${destinationPath}`)
      }
    })
  })
```

In the code snippet above, we define a `move` command that takes two arguments: the source file path and the destination file path. Similar to the previous command, we resolve the provided paths to their absolute paths using `path.resolve()`. We then use the `fs.rename()` function to rename the source file to the destination path, effectively moving the file. Success and error messages are handled accordingly.

## Implementing the File Deletion Command

Lastly, let's implement the file deletion functionality. Add the following code to `index.js`:

```js
program
  .command("delete <file>")
  .description("Delete a file")
  .action(file => {
    const filePath = path.resolve(file)

    fs.unlink(filePath, err => {
      if (err) {
        console.error("Error deleting file:", err.message)
      } else {
        console.log(`File deleted: ${filePath}`)
      }
    })
  })

program.parse(process.argv)
```

For the `delete` command, it takes a single argument representing the file path. We resolve the provided path using `path.resolve()`. Then, we use the `fs.unlink()` function to delete the file at the specified path.

Lastly, the `program.parse(process.argv)` line executes the utility tool from the command line. It parses the command-line arguments passed to the tools and invokes the corresponding actions defined for each command.

## Testing Our Tool 🛠️

You can execute the utility tool by running the following command in your terminal or command prompt:

```bash
node index.js [command] [arguments]
```

Replace `[command]` with the desired command (e.g., `copy`, `move`, or `delete`) and provide the necessary `[arguments]` based on the command you choose.

For example, to copy a file from `source.txt` to `destination.txt` you would run:

```bash
node index.js copy source.txt destination.txt
```

Similarly, for moving a file, you would run:

```bash
node index.js move source.txt destination.txt
```

And for deleting a file:

```bash
node index.js delete file.txt
```

Adjust the file names and path according to your specific requirements.
The tool will execute the corresponding command and provide feedback in the console, such as success messages or error messages if any issues occur.

That's it! The utility tool is now at your service. But wait, there's a bright idea that just sparked! Remember when I mentioned earlier that we would revisit the package.json file? Well, this is the perfect time. You see, although our tool is capable of some impressive feats, it's currently confined within the boundaries of our project folder. But don't worry, we have a clever solution to overcome this limitation and make our tool more versatile. Let's shed some light on how to expand its reach beyond the boundaries of our project folder

First, to make the tool work globally, we can package it as a global Node.js command-line tool. This will allow you to run the tool from any directory on your computer without needing to specify the path to the `index.js` file.

Here's how you can make it work globally:

1. **Update `package.json`:** Open your `package.json` file make sure it includes the following properties:

```json
{
  "name": "utilz",
  "version": "1.0.0",
  "description": "Utility tool for Copy, Move, and Delete operations",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": " <Your Name>",
  "license": "MIT",
  "bin": {
    "utilz": "./index.js"
  },
  "preferGlobal": true,
  "dependencies": {
    "commander": "^10.0.1"
  }
}
```

Update the values accordingly, including the name, description, author, and license. I named mine `utilz` you can name yours whatever you want.

2. **\*Add Shebang to`index.js`:** At the very top of your `index.js` file, add a shebang line to specify the interpreter for the file. For Node.js use the following line:

```js
#!/usr/bin/env node
```

This line tells the operating system to use Node.js to interpret the script.

3. **Make `index.js` Executable:** In your terminal or command prompt, navigate to the directory where your `index.js` file is located. Run the following command to make the file executable:

```bash
chmod +x index.js
```

This command sets the executable permission for the `index.js` file.

4. **Link the Package:** Run the following command to globally link your utility tool:

```bash
npm link
```

This command creates a symbolic link from the globally installed directory to your utility tool's directory.

5. **Test the Global Tool:** Now, you can use your utility tool globally from any directory. Open a new terminal or command prompt window, and you can run the tool using command `your-tool-name [command] [arguments]`.

For example, if I want to copy a file from any location, I can run the following command:

```js
utilz copy my_old_file.txt new_destination.txt
```

VOILA! 🤓

Feel free to customize the tool further and add error handling, additional commands, or any other features to suit your specific needs. If you'd like to connect or have a chat, feel free to reach out to me on Twitter [@geekreflex](https://twitter.com/geekreflex)

Check out the [repo](https://github.com/geekreflex/utilz)

## Conclusion

In this tutorial, we have built a file utility tool using Node.js and the `commander` package. Our tool provides commands to copy, move, and delete files. By automating tasks, you can save time and simplify your development workflow, Utility tools like this can be expanded and customized based on your requirements, making you more productive as a programmer. Happy coding!
