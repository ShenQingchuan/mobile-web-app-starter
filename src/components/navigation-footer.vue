<script setup lang="ts">
interface NavigationItem {
  icon: string
  url: string
}

const navigationItems: NavigationItem[] = [
  { icon: 'i-ic:baseline-house', url: '/' },
  { icon: 'i-ic:baseline-account-circle', url: '/me' },
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
        :key="item.url"
        class="bg-[var(--color-primary)]!"
        :index="index"
        @click="navigate(index)"
      >
        <template #icon>
          <div class="block h-6 w-6" :class="`${item.icon}`" />
        </template>
      </var-bottom-navigation-item>
    </var-bottom-navigation>
  </div>
</template>
