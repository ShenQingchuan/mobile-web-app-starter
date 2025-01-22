<script setup lang="ts">
interface NavigationItem {
  icon: string
  url: string
}

const navigationItems: NavigationItem[] = [
  // ...
  { icon: 'home', url: '/' },
  { icon: 'account-circle', url: '/me' },
]
const router = useRouter()
const active = ref(0)

function navigate(newTab: number | string) {
  const target = navigationItems[Number(newTab)]
  if (target)
    router.push(target.url)
}
</script>

<template>
  <div class="navigation-footer var-elevation--3 mt-auto bg-[var(--color-primary)] px-0.25rem pb-6">
    <var-bottom-navigation
      v-model:active="active"
      class="bg-[var(--color-primary)]!"
      active-color="#fff"
      @change="navigate"
    >
      <var-bottom-navigation-item
        v-for="(item, index) in navigationItems"
        :key="item.icon"
        class="bg-[var(--color-primary)]!"
        :icon="item.icon"
        :index="index"
        @click="navigate(index)"
      />
    </var-bottom-navigation>
  </div>
</template>
