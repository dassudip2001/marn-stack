<!-- What do yo mean by polyfill -->

- in older version browser can not support let cont then polyfill can transfer the own code

<!-- what is parcel -->

create a server
HMR
file watching algo
clean code
dev and prod build
super fast build algorithms
caching with development
image optimization
capable with older version of browser

<!-- tree shaking  -->

- Removing un wanted code

<!-- how to remove console log -->

- bable is used to and install cmd
  npm i babel-plugin-transform-remove-console --save-dev

React.CreateElement => object and convart the html

<!-- what is different between html and jsx -->

# there is two type of component

- class base component
- function base component -- in newer version function base component used
- function component used fast later in capital letter

# Different between react element and react functional component

- react element is jsx component

# testing React Application

- install jest
- npm i -D jest
- install React Testing Libratory
- npx jest --init
- npm i jest-environment-jsdom

# jest babel config

- npm i --save-dev babel-jest @babel/core @babel/preset-env

```
    https://jestjs.io/docs/getting-started
```

- babel.config.js

```
    module.exports = {
      presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    };
```

- npm i -D @babel/preset-react
- npm i -D @testing-library/jest-dom
