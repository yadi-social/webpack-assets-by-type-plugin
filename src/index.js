// @flow
import { join } from 'path'
import { writeFileSync } from 'fs'
import { sortAssets, getAssetsByType, getSriAssets } from './utils'

type Options = {
  path: string,
  sri: boolean,
}

const defaultPath = join(process.cwd(), 'assets.json')

/**
 * Save assets by type (js, css) and sri
 */
class AssetsByTypePlugin {
  options: Options;

  constructor({ path = defaultPath, sri }: Options = {}) {
    this.options = { path, sri }
  }

  apply(compiler: any) {
    compiler.plugin('done', (stats) => {
      const { output } = compiler.options
      const assets = sortAssets(stats.toJson({ modules: false }))
      const assetsByType = {
        js: getAssetsByType(assets, 'js', output.publicPath),
        css: getAssetsByType(assets, 'css', output.publicPath),
        ...(this.options.sri ? {
          sri: getSriAssets(assets, stats.compilation.assets, output.publicPath),
        } : {}),
      }

      writeFileSync(this.options.path, JSON.stringify(assetsByType))
    })
  }
}

module.exports = AssetsByTypePlugin
