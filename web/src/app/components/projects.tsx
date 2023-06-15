import {
  Container,
  Grid,
  Button,
  Card,
  Col,
  Row,
  Text,
} from "@nextui-org/react";
import { Box } from "../home";

export const Projects = () => {
  const projects = [
    {
      name: "Blog Website",
      description: "A Blog Website built using React, NextJS and MongoDB.",
      link: "https://www.google.com",
      cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c12076163913421.63eddcb973737.jpg",
    },
    {
      name: "Blog Website",
      description: "A Blog Website built using React, NextJS and MongoDB.",
      link: "https://www.google.com",
      cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c12076163913421.63eddcb973737.jpg",
    },
    {
      name: "Blog Website",
      description: "A Blog Website built using React, NextJS and MongoDB.",
      link: "https://www.google.com",
      cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c12076163913421.63eddcb973737.jpg",
    },
  ];

  return (
    <Container>
      <Text
        color="white"
        h2
        style={{ marginBottom: "20px", textAlign: "center" }}
      >
        Explore My Projects
      </Text>

      <Grid.Container>
        {projects?.map((item, index) => {
          return (
            <Grid xs={12} md={4} key={index}>
              <ProjectCard data={item} />
            </Grid>
          );
        })}
      </Grid.Container>

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Button auto ghost>
          View All Projects
        </Button>
      </Box>
    </Container>
  );
};

export const ProjectCard = (props: any) => {
  const { data } = props;

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Card
          css={{
            w: "100%",
            h: "400px",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                New
              </Text>
              <Text h3 color="black">
                {data?.name}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={data?.cover}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Project Cover"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={12} h1>
                  {data?.description}
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button flat auto rounded color="secondary">
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      <a href={data?.link} target="_blank" rel="noreferrer">
                        See More
                      </a>
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Box>
    </>
  );
};
