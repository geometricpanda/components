module.exports = {
  plugins: [
    'postcss-import',
    'postcss-combine-media-query',
    'postcss-combine-duplicated-selectors',
    'postcss-media-minmax',
    ['postcss-custom-media', {importFrom: ['./breakpoints.css']}],
  ]
}
