import { Container, Text } from "@nextui-org/react";
import { Box } from "../home";

export const Footer = () => {
  return (
    <Container>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "40px",
        }}
      >
        <Text color="white" size={20}>
          Made with <span style={{ color: "#ffffff" }}>❤️</span> by Vallarasu
        </Text>
      </Box>
    </Container>
  );
};
