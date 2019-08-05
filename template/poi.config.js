module.exports = {
  entry: 'src/index',
  output: {
    publicUrl: process.env.POI_APP_PUBLIC_URL
  },
  plugins: ['@poi/plugin-typescript']
}
