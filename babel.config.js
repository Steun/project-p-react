module.exports = {
  env: {
    development: {
      presets: ['next/babel', '@zeit/next-typescript/babel'],
    },
    production: {
      presets: ['next/babel', '@zeit/next-typescript/babel'],
    },
    test: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {
              modules: 'commonjs',
            },
          },
        ],
        '@zeit/next-typescript/babel',
      ],
    },
  },
};
