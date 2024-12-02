function keepConsoleOpen() {
    const readline = require('readline');
    const readLineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readLineInterface.question('Press enter to exit...', () => {
      readLineInterface.close();
      process.exit();
    });

}

keepConsoleOpen();