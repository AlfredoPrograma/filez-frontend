import { Link } from "@/components/Link"
import { Mail, Google, Microsoft } from "@mui/icons-material"
import {
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography
} from "@mui/joy"

export function Login() {
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
          marginBottom={3}
          direction="column"
          spacing={1}
        >
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input
              placeholder="johndoe@example.com"
              endDecorator={<Mail />}
            />
          </FormControl>
          <Button>Send magic link</Button>
        </Stack>

        <Divider>Or sign in using:</Divider>

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
