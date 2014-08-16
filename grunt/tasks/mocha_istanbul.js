module.exports = {
  unit: {
    src: 'test/unit',
    options: {
      coverage: true,
      mask: '**/*.spec.js',
      root: './lib',
      reportFormats: ['lcov'],
      reporter : 'spec',
      coverageFolder : 'coverage/unit'
    }
  }
};
