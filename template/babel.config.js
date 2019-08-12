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
    },
    test: {
      presets: ['poi/babel'],
      plugins: [['emotion'], 'react-hot-loader/babel']
    }
  }
}
