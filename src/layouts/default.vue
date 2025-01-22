<template>
  <main h-100vh flex="~ col" transition-all>
    <AppHeader class="!z-999" />
    <RouterView v-slot="{ Component }">
      <Transition name="fade-0_25s" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <NavigationFooter class="!z-999" />
  </main>
</template>
