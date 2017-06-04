## Sample of Webpack configuration

#### Sample Project
You can download this project, unzip it and run npm install from the root of it. Then you can run `webpack` and it should transpile your code. You can see in the index.js file that we make use of imports and are using a 3rd party library called Lodash.

After running webpack to transpile the code, you can run `node dist/bundle.js` and should see a random number every time you do so.


`webpack.config.js`

```
const path = require('path');

module.exports = {
  entry: './src/index.js', // Our Working File
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js', // Our Bundled/Distributed File
  },
  resolve: {
    modules: [
      'node_modules' // Where we pull our modules from
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader', // Needed to compile our ES2015 Code
        exclude: /node_modules/,
        options: {
          presets: ['es2015'] // Needed for ES2015 Modules
        }
      },
    ],
  },
};
```

---

`package.json`

```
{
  "name": "Project Name",
  "version": "1.0.0",
  "description": "A sample Webpack project.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    // the following are needed to transpile with webpack using Babel
    "babel-core": "^6.24.1",
    "babel-loader": "^7.0.0",
    "babel-preset-es2015": "^6.24.1",
  }
}
```
