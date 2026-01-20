<script setup lang="ts">
import { ref } from "vue"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MoreHorizontal } from "lucide-vue-next"
import { tableRows } from "../../../components/layout/data"

const view = ref("outline")
const selected = ref<number[]>([])

function toggleAll(checked: boolean) {
  selected.value = checked ? tableRows.map((row) => row.id) : []
}

function toggleRow(id: number, checked: boolean) {
  selected.value = checked
    ? [...selected.value, id]
    : selected.value.filter((item) => item !== id)
}
</script>

<template>
  <Tabs v-model="view" class="w-full flex-col justify-start gap-3">
    <TabsList class="mx-4 lg:mx-6">
      <TabsTrigger value="outline">Outline</TabsTrigger>
      <TabsTrigger value="performance">
        Performance <Badge variant="secondary">3</Badge>
      </TabsTrigger>
      <TabsTrigger value="team">
        Team <Badge variant="secondary">2</Badge>
      </TabsTrigger>
    </TabsList>

    <TabsContent value="outline" class="px-4 lg:px-6">
      <div class="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader class="bg-muted sticky top-0 z-10">
            <TableRow>
              <TableHead class="w-10">
                <Checkbox
                  :checked="selected.length === tableRows.length"
                  @update:checked="toggleAll(!!$event)"
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead>Header</TableHead>
              <TableHead>Section Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead class="text-right">Target</TableHead>
              <TableHead class="text-right">Limit</TableHead>
              <TableHead>Reviewer</TableHead>
              <TableHead class="w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="row in tableRows" :key="row.id">
              <TableCell>
                <Checkbox
                  :checked="selected.includes(row.id)"
                  @update:checked="toggleRow(row.id, !!$event)"
                  aria-label="Select row"
                />
              </TableCell>
              <TableCell class="font-medium">{{ row.title }}</TableCell>
              <TableCell>
                <Badge variant="outline" class="text-muted-foreground">
                  {{ row.type }}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  :variant="row.status === 'Done' ? 'default' : 'outline'"
                >
                  {{ row.status }}
                </Badge>
              </TableCell>
              <TableCell class="text-right">
                <Input class="h-8 w-16 text-right" :default-value="row.target" />
              </TableCell>
              <TableCell class="text-right">
                <Input class="h-8 w-16 text-right" :default-value="row.limit" />
              </TableCell>
              <TableCell>{{ row.reviewer }}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" class="w-32">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </TabsContent>
  </Tabs>
</template>
