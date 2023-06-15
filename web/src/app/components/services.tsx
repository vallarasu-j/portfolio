import { Container, Grid, Card, Button, Text } from "@nextui-org/react";
import { Box } from "../home";

export const Services = () => {
  const services = [
    {
      name: "UI/UX Design",
      description:
        "UI/UX Design is the process of creating products that provide meaningful and relevant experiences to users.",
      link: "https://www.google.com",
      icon: "/ui.png",
    },
    {
      name: "Web Development",
      description:
        "I have experience building Full Stack Web Applications using JavaScript, React, Python and MongoDB.",
      link: "https://www.google.com",
      icon: "/web.png",
    },
    {
      name: "App Development",
      description:
        "I have experience building Full Stack Apps using Flutter. This includes both Android and iOS.",
      link: "https://www.google.com",
      icon: "/app.png",
    },
  ];

  return (
    <Container
      style={{
        marginBottom: "100px",
      }}
    >
      <Text
        color="white"
        h2
        style={{ marginBottom: "20px", textAlign: "center" }}
      >
        What I Do
      </Text>

      <Grid.Container>
        {services?.map((item, index) => {
          return (
            <Grid xs={12} md={4} key={index}>
              <Card
                style={{
                  // background:
                  //   "linear-gradient(45deg, #1a202c -20%, #2d3748 100%)",
                  margin: "10px",
                }}
                css={{
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #1a202c -20%, #2d3748 100%)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "50px",
                  }}
                >
                  {/* <Image
                      src={item?.icon}
                      alt="Icon Img"
                      width={100}
                      height={100}
                      priority
                    /> */}
                  <Text h3 style={{ marginBottom: "20px" }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      marginBottom: "20px",
                    }}
                  >
                    {item.description}
                  </Text>
                  <Button auto ghost style={{ marginTop: 20 }}>
                    {item.name} - Details
                  </Button>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
    </Container>
  );
};
