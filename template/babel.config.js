module.exports = {
  presets: ['poi/babel'],
  env: {
    production: {
      presets: ['poi/babel'],
      plugins: ['emotion']
    },
    development: {
      presets: ['poi/babel'],
      plugins: [['emotion', { sourceMap: true }], 'react-hot-loader/babel']
    }
  }
}
