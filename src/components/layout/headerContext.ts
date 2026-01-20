import type { InjectionKey, Ref } from "vue"
import { inject, ref } from "vue"

export type HeaderContext = {
  title: Ref<string>
  hasCustomActions: Ref<boolean>
  setTitle: (title: string) => void
  resetTitle: () => void
  setHasCustomActions: (value: boolean) => void
}

export const headerContextKey: InjectionKey<HeaderContext> = Symbol("headerContext")

export function useHeaderContext() {
  const context = inject(headerContextKey, null)

  if (context) {
    return context
  }

  const title = ref("Dashboard")
  const hasCustomActions = ref(false)

  return {
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
  }
}
