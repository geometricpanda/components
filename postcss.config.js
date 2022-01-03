module.exports = {
  plugins: [
    'postcss-media-minmax',
    ['postcss-custom-media', {importFrom: ['./breakpoints.css']}],
  ]
}
