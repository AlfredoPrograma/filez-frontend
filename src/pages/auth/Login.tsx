import { Link } from "@/components/Link"
import {
  Mail,
  Google,
  Microsoft,
  Key,
  Visibility,
  VisibilityOff
} from "@mui/icons-material"
import {
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Stack,
  Typography
} from "@mui/joy"
import { useState } from "react"

export function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => setShowPassword((prev) => !prev)

  return (
    <Card
      sx={(theme) => ({ padding: theme.spacing(4), width: 400 })}
      variant="outlined"
    >
      <CardContent>
        <Stack
          direction="column"
          spacing={1}
          marginBottom={2}
        >
          <Typography
            textAlign="center"
            level="h3"
          >
            Welcome to <Typography color="primary">Filez</Typography>
          </Typography>

          <Typography
            textAlign="center"
            level="body-sm"
          >
            Don't have an account?{" "}
            <Typography>
              <Link to="/register">Sign up</Link>
            </Typography>
          </Typography>
        </Stack>

        <Stack
          marginBottom={1}
          direction="column"
          spacing={1}
        >
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input
              type="email"
              startDecorator={<Mail />}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type={showPassword ? "text" : "password"}
              startDecorator={<Key />}
              endDecorator={
                <IconButton onClick={toggleShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
          </FormControl>
        </Stack>

        <Stack marginBottom={3}>
          <Button>Sign in</Button>
        </Stack>

        <Divider>Or use third party provider</Divider>

        <Stack
          marginTop={1}
          direction="row"
          spacing={1}
        >
          <Button
            fullWidth
            variant="outlined"
          >
            <Google />
          </Button>
          <Button
            fullWidth
            variant="outlined"
          >
            <Microsoft />
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
