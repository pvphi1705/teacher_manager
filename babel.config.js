module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx'],
        alias: {
          'src/components/*': './src/components/*',
          'src/constants/*': './src/constants/*',
          'src/hooks/*': './src/hooks/*',
          'src/i18n/*': './src/i18n/*',
          'src/models/*': './src/models/*',
          'src/navigation/*': './src/navigation/*',
          'src/scenes/*': './src/scenes/*',
          'src/services/*': './src/services/*',
          'src/stores/*': './src/stores/*',
          'src/themes/*': './src/themes/*',
          'src/utils/*': './src/utils/*',
        },
      },
    ],
  ],
};
