import { Box } from "@mui/joy"
import { PropsWithChildren } from "react"

export function Page({ children }: PropsWithChildren) {
  return (
    <Box
      sx={(theme) => ({
        height: "100%",
        width: "100%",
        padding: theme.spacing(3),
        backgroundColor: theme.vars.palette.neutral[100]
      })}
    >
      {children}
    </Box>
  )
}
