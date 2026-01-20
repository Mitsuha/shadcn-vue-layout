<script setup lang="ts">
import { computed, onBeforeUnmount, useSlots, watchEffect } from "vue"
import { useHeaderContext } from "./headerContext"

const props = withDefaults(
  defineProps<{
    title?: string
    showActions?: boolean
  }>(),
  {
    showActions: true,
  },
)

const slots = useSlots()
const { setTitle, resetTitle, setHasCustomActions } = useHeaderContext()

watchEffect(() => {
  if (props.title) {
    setTitle(props.title)
  }
})

const hasActionsSlot = computed(() => !!slots.actions)

watchEffect(() => {
  const shouldHideDefaults = hasActionsSlot.value || props.showActions === false
  setHasCustomActions(shouldHideDefaults)
})

onBeforeUnmount(() => {
  resetTitle()
  setHasCustomActions(false)
})
</script>

<template>
  <Teleport to="#page-header-actions" v-if="$slots.actions">
    <slot name="actions" />
  </Teleport>
</template>
