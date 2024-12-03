module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      '/user': {
        target: 'http://localhost:9292',
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
