// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // Compatibility date for Nuxt.js features
  compatibilityDate: '2024-11-01',

  ssr: false, // Enable server-side rendering

  // Enable or disable devtools
  devtools: { enabled: true },

  // Modules to be included in the project
  modules: [
    '@nuxtjs/tailwindcss' // Tailwind CSS module for styling
  ],

  // Global CSS files to be included
  css: [
    "~/assets/styles/main.scss" // Main SCSS file for global styles
  ],


})