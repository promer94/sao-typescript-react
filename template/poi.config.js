module.exports = {
  entry: 'src/index',
  output: {
    publicUrl: process.env.POI_APP_PUBLIC_URL
  },
  plugins: [
    {
      resolve: '@poi/plugin-typescript',
      options: {
        babel: true
      }
    },
    {
      resolve: '@poi/bundle-report',
      options: {}
    }
  ],
  babel: {
    configFile: true
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization'
    },
    port: 9000
  }
}
