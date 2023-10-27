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
        }}
      >
        <Text color="font-primary" size={20}>
          Made with <span style={{ color:"font-primary" }}>❤️</span> by Vallarasu
        </Text>
      </Box>
    </Container>
  );
};
