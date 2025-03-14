module.exports = {
  apps: [
    {
      name: "NuxtPlaywright",
      exec_mode: "cluster",
      instances: "1",
      script: "./node_modules/nuxt/bin/nuxt.mjs",
      args: "dev",
    },
  ],
};
