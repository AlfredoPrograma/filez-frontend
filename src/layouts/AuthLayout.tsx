import { Page } from "@/components/Page"
import { Stack } from "@mui/joy"
import { Outlet } from "react-router"

export function AuthLayout() {
  return (
    <Page>
      <Stack
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Outlet />
      </Stack>
    </Page>
  )
}
