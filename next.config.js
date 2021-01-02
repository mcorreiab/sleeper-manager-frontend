module.exports = {
  webpack: (config, { isServer, webpack }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    return config;
  },
};
