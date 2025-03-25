import { Link } from "@/components/Link"
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography
} from "@mui/joy"

export function Register() {
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
            Create an account in <Typography color="primary">Filez</Typography>
          </Typography>
          <Typography
            textAlign="center"
            level="body-sm"
          >
            Already have an account? <Link to="/auth">Sign in</Link>
          </Typography>
        </Stack>

        <Stack
          direction="column"
          spacing={1}
        >
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input />
          </FormControl>

          <FormControl>
            <FormLabel>Last name</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input />
          </FormControl>

          <FormControl>
            <FormLabel>Confirm password</FormLabel>
            <Input />
          </FormControl>
        </Stack>

        <Stack marginTop={2}>
          <Button>Register</Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
