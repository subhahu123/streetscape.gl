module.exports = function babelConfig(api) {
  api.cache(() => process.env.NODE_ENV === 'production'); // eslint-disable-line

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          // modules: false,
          // targets: { node: 'current' }
        }
      ]
    ],
    plugins: [['@babel/plugin-proposal-class-properties', {loose: false}]]
  };
};
