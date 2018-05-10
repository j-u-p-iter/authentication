module.exports = {
  presets: [
    ['env', {
      modules: process.env.BABEL_ENV === 'cmjs' ? 'commonjs' : false,
    }],
  ],
  plugins: [
    'transform-class-properties',
    'transform-object-rest-spread',
  ],
};
