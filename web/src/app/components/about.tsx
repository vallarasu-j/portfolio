import { Container, Text } from "@nextui-org/react";
import { Box } from "../home";
import { data } from "../Services/data";

export const AboutMe = () => {
  const about = data["about"];

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
        {about?.title}
      </Text>

      <Box style={{ maxWidth: "700px", textAlign: "center" }}>
        <Text color="white" size={20}>
          {about?.desc}
        </Text>
      </Box>
    </Container>
  );
};
