module.exports = {
    stories: [
        '../stories/**/*.stories.js'
    ],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-storysource',
            options: {
                loaderOptions: {
                    prettierConfig: {printWidth: 80, singleQuote: false}
                }
            },
        },
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null
            }
        }
    ],
};
