module.exports = {
  async redirects() {
    return [
        {
            "source": "/contact",
            "destination": "/about",
            "permanent": false
        }
    ]
  },
  i18n: {
    locales: ['en'],
    defaultLocale: "en",
  }
}