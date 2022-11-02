module.exports = {
  all: true,
  extends: "@istanbuljs/nyc-config-typescript",
  exclude: [
    'src/database',
  ],
  include: ['src/**/*.ts']
};