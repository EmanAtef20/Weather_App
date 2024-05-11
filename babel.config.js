module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'], // removing consoles.log from app during release (production) versions
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/src': './src',
          '@/assets': './src/assets',
          '@/images': './src/assets/images',
          '@/components': './src/components',
          '@/hooks': './src/hooks',
          // '@/config': './src/config',
          '@/navigation': './src/navigation',
          '@/screens': './src/screens',
          '@/services': './src/services',
          // '@/storage': './src/storage',
          '@/store': './src/store',
          '@/utils': './src/utils',
          '@/tw': './src/utils/tw',
          // '@/i18n': './src/i18n',
          // '@/tokens': './tokens',
          // '@/validation': './src/utils/validation',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": "env/.env",
        "blocklist": null,
        "allowlist": null,
        "safe": false,
        "allowUndefined": true,
        "verbose": false
     
      },
    ],
  ],
};
