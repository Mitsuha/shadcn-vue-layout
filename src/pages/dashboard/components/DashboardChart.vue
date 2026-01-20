<script setup lang="ts">
import { computed } from "vue"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig, componentToString } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VisArea, VisAxis, VisXYContainer, VisAreaSelectors } from "@unovis/vue"
import { chartData } from "../../../components/layout/data"

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--color-chart-1)",
  },
} satisfies ChartConfig

const tooltipContent = componentToString(chartConfig, ChartTooltipContent, {
  indicator: "dot",
  labelFormatter: (value: number | Date) =>
    new Date(value).toLocaleDateString("zh-CN", {
      month: "short",
      day: "numeric",
    }),
})

const tooltipTriggers = computed(() => ({
  [VisAreaSelectors.area]: (datum: { data?: typeof chartData[number] } | typeof chartData[number]) => {
    const payload = "data" in datum && datum.data ? datum.data : datum
    return tooltipContent?.({ visitors: payload.visitors }, new Date(payload.date))
  },
}))
</script>

<template>
  <Card class="@container/card">
    <CardHeader>
      <CardTitle>Total Visitors</CardTitle>
      <CardDescription>Last 12 weeks performance</CardDescription>
    </CardHeader>
    <CardContent class="px-2 pt-4 sm:px-6 sm:pt-6">
      <ChartContainer :config="chartConfig" class="aspect-auto h-[250px] w-full">
        <VisXYContainer :data="chartData" :padding="{ top: 8, right: 16, left: 16, bottom: 0 }">
          <VisArea
            :x="(d) => new Date(d.date)"
            :y="(d) => d.visitors"
            curve-type="natural"
            :color="chartConfig.visitors.color"
          />
          <VisAxis
            type="x"
            :tick-format="(value) =>
              new Date(value).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
            "
            :num-ticks="6"
            :tick-line="false"
            :domain-line="false"
          />
          <VisAxis type="y" :tick-line="false" :domain-line="false" :num-ticks="4" />
          <ChartTooltip :triggers="tooltipTriggers" />
        </VisXYContainer>
      </ChartContainer>
    </CardContent>
  </Card>
</template>
