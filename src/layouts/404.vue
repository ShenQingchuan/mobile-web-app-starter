<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="bg-zinc-100 dark:bg-zinc-900" h="100vh" flex="~ col justify-center" p="x4 y10" text="center">
    <div class="text-autodark" text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <button
        class="mt-6 inline-block cursor-pointer border-2 border-zinc-800 rounded-lg border-solid bg-zinc-900 px-6 py-2 text-zinc-900 disabled:cursor-default dark:border-zinc-100:50 dark:bg-zinc-100:30 disabled:bg-gray-600 dark:text-white disabled:opacity-50 !outline-none"
        @click="router.back()"
      >
        返回
      </button>
    </div>
  </main>
</template>
