# ElectronCGI Duplex Demo

Demo project for ElectronCGI's duplex functionality.

To run, clone the project and then at the root (you need Node.js and dotnet core installed):

  $ npm install && npm start

The Node.js application uses ElectronCGI to connect to a .Net Core application that on every second queries reddit:

![sequence diagram illustrating the four request types in the app](https://www.blinkingcaret.com/wp-content/uploads/2019/11/electron-cgi-duplex-showcase-diagram.png)

For more information about ElectronCGI and this example read [ElectronCGI – A solution to cross-platform GUIs for .Net Core](https://www.blinkingcaret.com/2019/11/27/electroncgi-a-solution-to-cross-platform-guis-for-net-core) and [ElectronCGI – Cross Platform .Net Core GUIs with Electron](https://www.blinkingcaret.com/2019/02/27/electron-cgi/).
