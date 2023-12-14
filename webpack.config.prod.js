const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

const productsURL = process.env.PRODUCTS_URL || "http://localhost:3001";
const productDetailsURL =
  process.env.PRODUCT_DETAILS_URL || "http://localhost:3002";
const cartURL = process.env.CART_URL || "http://localhost:3003";
const checkoutURL = process.env.CART_URL || "http://localhost:3004";
const deployURL = process.env.DEPLOY_URL || "http://localhost:3000";

module.exports = (_, argv) => ({
  output: {
    publicPath: deployURL + "/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "ecommerce",
      filename: "remoteEntry.js",
      remotes: {
        products: `products@${productsURL}/remoteEntry.js`,
        productdetails: `productdetails@${productDetailsURL}/remoteEntry.js`,
        cart: `cart@${cartURL}/remoteEntry.js`,
        checkout: `checkout@${checkoutURL}/remoteEntry.js`,
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
