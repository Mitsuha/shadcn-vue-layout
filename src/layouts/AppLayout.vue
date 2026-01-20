<script setup lang="ts">
import { provide, ref } from "vue"
import { RouterView } from "vue-router"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layout/AppSidebar.vue"
import SiteHeader from "@/components/layout/SiteHeader.vue"
import { headerContextKey } from "@/components/layout/headerContext"

const title = ref("Dashboard")
const hasCustomActions = ref(false)

provide(headerContextKey, {
  title,
  hasCustomActions,
  setTitle: (nextTitle: string) => {
    title.value = nextTitle
  },
  resetTitle: () => {
    title.value = "Dashboard"
  },
  setHasCustomActions: (value: boolean) => {
    hasCustomActions.value = value
  },
})
</script>

<template>
  <SidebarProvider
    :style="{
      '--sidebar-width': '18rem',
      '--header-height': '3.5rem',
    }"
  >
    <AppSidebar />
    <SidebarInset>
      <SiteHeader />
      <div class="flex flex-1 flex-col">
        <div class="@container/main flex flex-1 flex-col gap-2">
          <RouterView />
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
