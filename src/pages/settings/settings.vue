<script setup lang="ts">
import PageHeader from "@/components/layout/PageHeader.vue"
</script>

<template>
  <PageHeader title="Settings" :show-actions="false" />
  <div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
    <div class="px-4 lg:px-6">
      <h2 class="text-lg font-semibold">Settings</h2>
      <p class="text-sm text-muted-foreground">
        This page is intentionally minimal for layout verification.
      </p>
    </div>
  </div>
</template>
