/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: [["@babel/plugin-transform-react-jsx", { throwIfNamespace: false }]],
};

module.exports = nextConfig;
