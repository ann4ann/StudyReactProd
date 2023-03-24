import { BuildOptions } from "../types/config";

export function buildBabelLoader(options:BuildOptions) {
    return {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    options.isDev && require.resolve("react-refresh/babel"),
                //     [
                //         "i18next-extract",
                //         {
                //             // не работает с "ru"
                //             locales: ["ru", "en"],
                //             keyAsDefaultValue: false,
                //             saveMissing: true,
                //             outputPath: "public/locales/{{locale}}/{{ns}}.json",
                //         },
                //     ],
                ].filter(Boolean),
            },
        },
    };
}
