import {
  Container,
  Card,
  Grid,
  Col,
  Row,
  Button,
  Text,
  Image,
} from "@nextui-org/react";
import { G_SOCIAL_MEDIA_LINKS } from "../common";

export const Hero = () => {
  return (
    <Container>
      <Card
        style={{
          background: "linear-gradient(45deg, #1a202c -20%, #2d3748 100%)",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          color: "#fff",

          padding: "50px",
          marginTop: "100px",
        }}
      >
        <Grid.Container gap={2}>
          <Grid xs={12} md={6}>
            <Col>
              <Text
                h1
                size={60}
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
              >
                Hey,
              </Text>
              <Text
                h1
                size={60}
                css={{
                  textGradient: "45deg, $purple600 -20%, $pink600 100%",
                }}
                weight="bold"
              >
                I`m Vallarasu
              </Text>
              <Text
                h1
                size={60}
                css={{
                  marginBottom: "10px",
                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                weight="bold"
              >
                Full Stack Developer
              </Text>

              <Text
                h3
                size={20}
                weight="bold"
                css={{
                  marginBottom: "10px",
                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
              >
                I`m Available for Freelance !
              </Text>

              <Row gap={1}>
                {G_SOCIAL_MEDIA_LINKS?.map((item, index) => {
                  return (
                    <Col key={index}>
                      <Button auto ghost style={{ marginTop: 20 }}>
                        {item.name}
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Grid>

          <Grid xs={12} md={6}>
            <Col>
              <Image
                src="/person1.png"
                alt="Person Img"
                width={400}
                height={400}
              />
            </Col>
          </Grid>
        </Grid.Container>
      </Card>
    </Container>
  );
};
