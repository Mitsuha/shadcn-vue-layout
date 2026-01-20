import type { Component } from "vue"
import {
  BarChart3,
  FileText,
  Folder,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-vue-next"

export type SidebarItem = {
  title: string
  url: string
  icon: Component
}

export const sidebarUser = {
  name: "Mitsuha",
  email: "mitsuha@mirrorstages.io",
  initials: "MI",
}

export const navMain: SidebarItem[] = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Analytics", url: "#", icon: BarChart3 },
  { title: "Projects", url: "#", icon: Folder },
  { title: "Team", url: "#", icon: Users },
]

export const navSecondary: SidebarItem[] = [
  { title: "Docs", url: "#", icon: FileText },
  { title: "Settings", url: "#", icon: Settings },
]
