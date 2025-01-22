<script setup lang="ts">
import { StyleProvider } from '@varlet/ui'
import { THEME_COLOR } from '~/constants/theme'

useHead({
  title: import.meta.env.VITE_APP_TITLE,
  meta: [
    { name: 'description', content: import.meta.env.VITE_APP_DESCRIPTION },
    { name: 'theme-color', content: THEME_COLOR },
  ],
})

useDark() // 启用暗色模式自动监测
StyleProvider({
  '--color-primary': THEME_COLOR,
})
</script>

<template>
  <RouterView />
</template>
