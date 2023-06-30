import {
  Container,
  Grid,
  Row,
  Col,
  Button,
  Input,
  Spacer,
  Text,
  Textarea,
  Modal,
} from "@nextui-org/react";
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
      }}
    >
      <Grid.Container gap={2}>
        <Grid xs={12} md={4}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              flex: 1,
              flexDirection: "column",
            }}
          >
            <Text
              color="white"
              h2
              style={{ marginBottom: "20px", textAlign: "center" }}
            >
              Contact Me
            </Text>

            <Text
              color="#ffffffAA"
              style={{ marginBottom: "20px", textAlign: "center" }}
            >
              Let`s work together and build something awesome!
            </Text>

            <Box>
              <Row gap={1}>
                {profile?.social?.map((item, index) => {
                  return (
                    <Col key={index}>
                      <Button auto ghost>
                        {item.name}
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            </Box>
          </Box>
        </Grid>

        <Grid xs={12} md={4}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              flex: 1,
              flexDirection: "column",
            }}
          >
            <Text
              color="#ffffffAA"
              style={{ marginBottom: "20px", textAlign: "center" }}
            >
              Leave a message here
            </Text>
            <Col>
              <Input
                size="lg"
                fullWidth
                clearable
                bordered
                labelPlaceholder="Name"
              />
              <Spacer y={1} />

              <Input
                size="lg"
                fullWidth
                clearable
                bordered
                labelPlaceholder="Email"
              />
              <Spacer y={1} />

              <Input
                size="lg"
                fullWidth
                clearable
                bordered
                labelPlaceholder="Mobile"
              />
              <Spacer y={1} />

              <Textarea size="lg" fullWidth placeholder="Message" rows={4} />
              <Spacer y={1} />

              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Button auto ghost  onPress={handler}>
                  Send Message
                </Button>
                
              </Box>
            </Col>
          </Box>
        </Grid>
      </Grid.Container>

      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
            <Text b size={18}>
              Thank you for your message!
            </Text>
        </Modal.Header>
        <Modal.Body>
         
          
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};