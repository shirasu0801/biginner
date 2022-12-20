/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

//外部から画像を撮ってくる場合はドメイン名をここに登録する
module.exports = {
  images: {
    domains: ['images.unsplash.com']
  },
}