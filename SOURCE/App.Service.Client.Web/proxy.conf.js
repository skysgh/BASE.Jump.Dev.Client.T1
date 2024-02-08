const PROXY_CONFIG = [
  {
    context: [

      "/debug/**",
      "/$odata/**",
      "/swagger/**",
      "/api/**",
    ],
    target: "https://localhost:8201",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
