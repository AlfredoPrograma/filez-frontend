import { Page } from "@/components/Page"
import { Outlet } from "react-router"

export function DashboardLayout() {
  return (
    <Page>
      <Outlet />
    </Page>
  )
}
