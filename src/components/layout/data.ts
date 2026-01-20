export type DashboardCard = {
  title: string
  value: string
  delta: string
  trend: "up" | "down"
  note: string
}

export type TableRow = {
  id: number
  title: string
  type: string
  status: "Done" | "In Progress" | "Pending"
  target: string
  limit: string
  reviewer: string
}

export const dashboardCards: DashboardCard[] = [
  {
    title: "Total Revenue",
    value: "¥128,450",
    delta: "+12.5%",
    trend: "up",
    note: "Compared to last month",
  },
  {
    title: "New Customers",
    value: "1,284",
    delta: "-4.2%",
    trend: "down",
    note: "Acquisition needs attention",
  },
  {
    title: "Active Accounts",
    value: "45,678",
    delta: "+8.1%",
    trend: "up",
    note: "Retention keeps rising",
  },
  {
    title: "Growth Rate",
    value: "4.5%",
    delta: "+1.1%",
    trend: "up",
    note: "Steady performance increase",
  },
]

export const chartData = [
  { date: "2024-04-01", visitors: 222 },
  { date: "2024-04-08", visitors: 307 },
  { date: "2024-04-15", visitors: 188 },
  { date: "2024-04-22", visitors: 412 },
  { date: "2024-04-29", visitors: 356 },
  { date: "2024-05-06", visitors: 498 },
  { date: "2024-05-13", visitors: 275 },
  { date: "2024-05-20", visitors: 215 },
  { date: "2024-05-27", visitors: 364 },
  { date: "2024-06-03", visitors: 287 },
  { date: "2024-06-10", visitors: 455 },
  { date: "2024-06-17", visitors: 389 },
]

export const tableRows: TableRow[] = [
  {
    id: 1,
    title: "Cover Page",
    type: "Design",
    status: "Done",
    target: "18",
    limit: "5",
    reviewer: "Eddie Lake",
  },
  {
    id: 2,
    title: "Executive Summary",
    type: "Narrative",
    status: "In Progress",
    target: "29",
    limit: "24",
    reviewer: "Jamik T.",
  },
  {
    id: 3,
    title: "Technical Approach",
    type: "Narrative",
    status: "Pending",
    target: "10",
    limit: "13",
    reviewer: "Assign reviewer",
  },
  {
    id: 4,
    title: "Security Measures",
    type: "Technical",
    status: "In Progress",
    target: "20",
    limit: "8",
    reviewer: "Sarah Chen",
  },
  {
    id: 5,
    title: "Deployment Plan",
    type: "Planning",
    status: "Done",
    target: "15",
    limit: "9",
    reviewer: "Carlos R.",
  },
]
