<script setup lang="ts">
import { useEruda } from '~/composables/eruda'

const APP_NAME = import.meta.env.VITE_APP_NAME

const {
  handleCloseEruda,
  handleTouchStart,
  handleTouchEnd,
} = useEruda()

const clickLogoCount = ref(0)
const clickLogoTimer = ref<ReturnType<typeof setTimeout>>()
function handleClickLogo() {
  handleCloseEruda()

  clickLogoCount.value += 1
  if (clickLogoCount.value === 5) {
    clickLogoCount.value = 0
    window.location.reload()
  }

  if (!clickLogoTimer.value) {
    clickLogoTimer.value = setTimeout(() => {
      clickLogoCount.value = 0
      clickLogoTimer.value = (void 0)
      clearTimeout(clickLogoTimer.value)
    }, 3000)
  }
}
</script>

<template>
  <var-app-bar title="Fated" title-position="center">
    <div
      class="font-oswald relative top-0.5 select-none text-8 text-white font-700"
      @click="handleClickLogo"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      @touchcancel="handleTouchEnd"
    >
      {{ APP_NAME }}
    </div>
  </var-app-bar>
</template>
