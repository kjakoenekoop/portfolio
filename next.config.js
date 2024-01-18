/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}
const withMDX = require("@next/mdx")()
module.exports = withMDX(nextConfig)
