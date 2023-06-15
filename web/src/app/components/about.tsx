import { Container, Text } from "@nextui-org/react";
import { Box } from "../home";

export const AboutMe = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "500px",
      }}
    >
      <Text color="white" h2>
        About Me
      </Text>

      <Box style={{ maxWidth: "700px", textAlign: "center" }}>
        <Text color="white" size={20}>
          I am a Full Stack Developer with 2+ years of experience in building
          websites and web applications. I specialize in JavaScript and have
          professional experience working with React, Pyhton and MongoDB. I also
          have experience working with Flutter and building cross platform apps
          for Android and iOS.
        </Text>
      </Box>
    </Container>
  );
};
