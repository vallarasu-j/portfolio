import { Container, Row, Col, Text } from "@nextui-org/react";
import { Box } from "../home";
import { data } from "../Services/data";
import { useState } from "react";

export const Contact = () => {
  const profile = data["profile"];
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <Container
      style={{
        marginTop: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "40px",
      }}
    >
      <div>
        <Col>
          <Text color="font-primary" h2 style={{ textAlign: "center" }}>
            Contact Me
          </Text>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {profile?.socialMediaLinks?.map((item, index) => {
              return (
                <div style={{margin: 12}} key={index}>
                  <a href={item?.link} target="_blank">
                    {item?.label}
                  </a>
                </div>
              );
            })}
          </Box>

          <Text color="font-primary">
            Let`s work together and build something awesome!
          </Text>
        </Col>
      </div>
    </Container>
  );
};
