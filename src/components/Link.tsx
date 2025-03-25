import { ComponentProps, PropsWithChildren } from "react"
import { Link as MuiLink } from "@mui/joy"
import { Link as RouterLink, To } from "react-router"

type LinkProps = {
  to: To
} & ComponentProps<typeof MuiLink>

export function Link({ to, children, ...rest }: PropsWithChildren<LinkProps>) {
  return (
    <MuiLink
      {...rest}
      component={RouterLink}
      to={to}
    >
      {children}
    </MuiLink>
  )
}
