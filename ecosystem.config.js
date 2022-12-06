module.exports = {
  apps: [{
    name: "dev",
    script: "./index.js",
    watch: true,
    env: {
      "PORT": 8000,
    }
  }]
}
