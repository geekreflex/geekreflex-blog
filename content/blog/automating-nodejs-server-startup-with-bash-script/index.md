---
title: "Automating Node.js Server Start-Up with Bash Script"
date: "2023-04-30"
---

If you're tired of manually starting your server every time you work on your project, you might want to consider using a Bash script to automate the process. In this tutorial, I'll show you how to create a simple Bash script that you can use to start your server with just a few clicks.

## Prerequisites

Before we begin, make sure that you have the following:

- A Linux machine
- Node.js and Yarn installed on your machine
- A server project that you want to start using the script

## Step 1: Create the Bash script

Open a text editor of your choice and create a new file. You can name the file whatever you like, but make sure to give it a `.sh` extension to indicate that it's a Bash script. For example, you could name the file `start-server.sh`.

In the text editor, add the following code to the file:

```bash
#!/bin/bash

# Prompt the user to choose the server mode
echo "Enter the server mode you want to run:"
echo "1. Development"
echo "2. Production"
read -r mode

# Set the hyve-api directory path as a variable
API_DIR="/path/to/your/server/project"

# Set the server command based on the chosen mode
if [ "$mode" == "1" ]; then
    SERVER_COMMAND="yarn dev"
elif [ "$mode" == "2" ]; then
    SERVER_COMMAND="yarn start"
else
    echo "Invalid input. Please run the script again and choose a valid option."
    exit 1
fi

# Change to the server directory and start the server
cd "$API_DIR" || exit 1
eval "$SERVER_COMMAND"
```

In the code above, we're prompting the user to choose whether they want to run the server in development or production mode, and then setting the appropriate server command based on their choice. We're also setting the path to our server project as a variable so that we can easily change it later if needed.

## Step 2: Make the script executable

Before we can run the script, we need to make it executable. Open a terminal window and navigate to the directory where you saved the script. Then, enter the following command:

```bash
chmod +x start-server.sh
```

This command will give the script permission to execute.

## Step 3: Run the script

To run the script, simply double-click on the file. This will open terminal window and start the server according to the mode you choose earlier.

If you want to run the script from the terminal instead, navigate to the directory where you saved the script and enter the following command:

```bash
./start-server.sh
```

This will start the server according to the mode you chose earlier.

## Step 4: Customize the script for your project

If you want to use the script for your own project, you'll need to customize it by changing the `API_DIR` variable to the path of your project. You may also need to update the server commands if your project uses a different command to start the server.

Thanks for reading, I hope this helps. Happy hacking!
