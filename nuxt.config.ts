// https://nuxt.com/docs/api/configuration/nuxt-config
// 1. "export default" sends the result of the function to Nuxt
export default defineNuxtConfig({
  // 2. This object is the argument passed TO the function
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/supabase'],

  supabase: {
    redirectOptions: {
      login: '/Auth',
      callback: '/Confirm',
    },
  },

})

// database password : amigoeatsAE2025