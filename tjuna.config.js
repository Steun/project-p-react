module.exports = {
  templates: [
    {
      templateName: 'eslint-ignore-typescript-nextjs',
      outputFilePath: '.eslintignore',
    },
    {
      templateName: 'eslint-typescript-react',
      outputFilePath: '.eslintrc.js',
    },
    {
      templateName: 'jest-config-nextjs',
      outputFilePath: 'jest.config.js',
    },
    {
      templateName: 'nextjs-config',
      outputFilePath: 'next.config.js',
    },
    {
      templateName: 'nodemon-nextjs',
      outputFilePath: 'nodemon.json',
    },
    {
      templateName: 'prettier-config',
      outputFilePath: 'prettier.config.js',
    },
    {
      templateName: 'tsconfig-nextjs',
      outputFilePath: 'tsconfig.server.json',
    },
    {
      templateName: 'tsconfig-server-nextjs',
      outputFilePath: 'tsconfig.server.json',
    },
  ],
  parameters: {
    JEST_COVERAGE_THRESHOLD: '40',
  },
};
