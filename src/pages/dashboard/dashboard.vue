<script setup lang="ts">
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/layout/PageHeader.vue"
import DashboardChart from "./components/DashboardChart.vue"
import DashboardTable from "./components/DashboardTable.vue"
import SectionCards from "./components/SectionCards.vue"
</script>

<template>
  <PageHeader title="Dashboard">
    <template #actions>
      <Button variant="outline" size="sm">Download report</Button>
      <Button size="sm">New alert</Button>
    </template>
  </PageHeader>
  <div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
    <SectionCards />
    <div class="px-4 lg:px-6">
      <DashboardChart />
    </div>
    <DashboardTable />
  </div>
</template>
