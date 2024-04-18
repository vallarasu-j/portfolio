import { Container, Grid, Card, Image, Button, Text } from "@nextui-org/react";
import { Box } from "../home";
import { data } from "../Services/data";

export const Services = () => {
  const skills = data["skills"];

  return (
    <Container
      style={{
        marginBottom: "100px",
      }}
    >
      <Text
        color="font-primary"
        h2
        style={{ marginBottom: "20px", textAlign: "center" }}
      >
        {skills?.title}
      </Text>

      <Grid.Container>
        {skills?.items?.map((item, index) => {
          return (
            <Grid xs={12} md={4} key={index}>
              <Card
                style={{
                  margin: "10px",
                }}
                css={{
                  "&:hover": {
                    background:"background-color",
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
                  <Text h3 style={{ marginBottom: "20px" }}>
                    {item?.name}
                  </Text>
                  <Text
                    style={{
                      marginBottom: "20px",
                    }}
                  >
                    {item?.desc}
                  </Text>
                  {/* <Button auto ghost style={{ marginTop: 20 }} href={item.link}>
                    {item.name} - Details
                  </Button> */}
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
    </Container>
  );
};
