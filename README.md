# webpack-assets-by-type-plugin

[![Generated with nod](https://img.shields.io/badge/generator-nod-2196F3.svg?style=flat-square)](https://github.com/diegohaz/nod)
[![NPM version](https://img.shields.io/npm/v/webpack-assets-by-type-plugin.svg?style=flat-square)](https://npmjs.org/package/webpack-assets-by-type-plugin)
[![Build Status](https://img.shields.io/travis/diegohaz/webpack-assets-by-type-plugin/master.svg?style=flat-square)](https://travis-ci.org/diegohaz/webpack-assets-by-type-plugin) [![Coverage Status](https://img.shields.io/codecov/c/github/diegohaz/webpack-assets-by-type-plugin/master.svg?style=flat-square)](https://codecov.io/gh/diegohaz/webpack-assets-by-type-plugin/branch/master)

A webpack plugin that save assets by type (`js`,`css`)

## Install

    $ npm install --save-dev webpack-assets-by-type-plugin

## Usage

```js
import AssetsByTypePlugin from 'webpack-assets-by-type-plugin'

const config = {
  ...
  plugins: [
    new AssetsByTypePlugin({
      path: path.join(process.cwd(), 'assets.json') // default
    })
  ]
}
```

Output:
```json
{"js":["vendor.js", "/main.js"],"css":["styles.css"]}
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### AssetsByTypePlugin

Save assets by type (js, css)

## License

MIT © [Diego Haz](https://github.com/diegohaz)