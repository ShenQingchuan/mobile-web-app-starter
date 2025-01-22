import type { Eruda } from 'eruda'
import { setupEruda } from '../modules/debug-console'

// Global singleton
const eruda = shallowRef<Eruda | null>(null)

export function useEruda() {
  const getEruda = () => {
    if (eruda.value) {
      return eruda.value
    }

    eruda.value = setupEruda()
    return eruda.value
  }

  const isErudaShown = ref(false)
  let pressTimer: ReturnType<typeof setTimeout> | null = null

  function showConsole() {
    getEruda().show()
    isErudaShown.value = true
  }
  function hideConsole() {
    getEruda().hide()
    isErudaShown.value = false
  }
  function handleCloseEruda() {
    if (isErudaShown.value) {
      hideConsole()
    }
  }
  function handleTouchStart() {
    pressTimer = setTimeout(() => {
      showConsole()
    }, 3000)
  }
  function handleTouchEnd() {
    if (pressTimer) {
      clearTimeout(pressTimer)
      pressTimer = null
    }
  }

  return {
    eruda,
    isErudaShown,
    handleCloseEruda,
    handleTouchStart,
    handleTouchEnd,
  }
}
