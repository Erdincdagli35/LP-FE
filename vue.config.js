module.exports = {
  devServer: {
    proxy: {
      '/user': {
        target: 'http://localhost:9292',
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
