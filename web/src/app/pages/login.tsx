import {
  Button,
  Card,
  Container,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";

const LoginPage = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "400px",
          margin: "0 auto",
          background: "transparent",
        }}
      >
        <Text h1>Login</Text>

        <Text h3>Welcome back !</Text>

        <Spacer y={1} />
        <Input
          label="Username"
          placeholder="Enter your username"
          width="100%"
        />
        <Spacer y={1} />
        <Input.Password
          label="Password"
          placeholder="Enter your password"
          width="100%"
        />
        <Spacer y={1} />

        <Text color="error" small>
          Forgot password?
        </Text>

        <Spacer y={1} />

        <Button ghost color="primary" auto>
          Login
        </Button>
      </Card>
    </Container>
  );
};

export default LoginPage;
