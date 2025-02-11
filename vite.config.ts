/// <reference types="vitest" />

import path from 'node:path'
import process from 'node:process'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
// import VueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-layouts'
import { VineVitePlugin } from 'vue-vine/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname)}/`,
    },
  },
  plugins: [
    Vue(),

    // https://github.com/posva/unplugin-vue-router
    VueRouter(),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        '@vueuse/head',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
        {
          swrv: [
            ['default', 'useSWR'],
          ],
        },
        {
          'swrv/dist/cache/adapters/localStorage': [
            ['default', 'SwrlocalStorageCache'],
          ],
        },
      ],
      dts: true,
      dirs: [
        './src/composables',
        './src/utils',
        './src/modules',
      ],
      include: [
        './src/**/*.vue',
        './src/**/*.ts',
      ],
      vueTemplate: true,
      resolvers: [
        VarletUIResolver(),
      ],
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: true,
      resolvers: [
        VarletUIResolver(),
      ],
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      srcDir: 'src',
      registerType: 'autoUpdate',
      manifest: {
        name: process.env.VITE_APP_NAME,
        short_name: process.env.VITE_APP_NAME,
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      devOptions: {
        enabled: true,
        suppressWarnings: true,
        navigateFallbackAllowlist: [/^\/$/],
        type: 'module',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,ttf}'],
        // Cache 10MB of assets
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      },
    }),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    // VueDevTools(),

    VineVitePlugin(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
      },
    },
  },
})
