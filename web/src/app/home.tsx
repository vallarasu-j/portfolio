"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Card,
  Col,
  Row,
  Button,
  Text,
  Navbar,
  Radio,
  Container,
  Grid,
  Spacer,
  Input,
  Textarea,
} from "@nextui-org/react";
import { styled } from "@nextui-org/react";
import { createTheme, NextUIProvider } from "@nextui-org/react";

export const Card5 = () => {
  return (
    <>
      <Layout>
        <div>
          <Hero />
          <AboutMe />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </Layout>
    </>
  );
};
const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      // primaryLight: "$green200",
      // primaryLightHover: "$green300",
      // primaryLightActive: "$green400",
      // primaryLightContrast: "$green600",
      // primary: "#4ADE7B",
      // primaryBorder: "$green500",
      // primaryBorderHover: "$green600",
      // primarySolidHover: "$green700",
      // primarySolidContrast: "$white",
      // primaryShadow: "$green500",
      // gradient:
      //   "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      // link: "#5E1DAD",
      // you can also create your own color
      // myColor: "#ff4ecd",
      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
export const Layout = (props: any) => {
  const { children } = props;
  const navLinks = [
    { name: "Home", href: "#", isActive: true },
    { name: "Contact", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  return (
    <NextUIProvider theme={theme}>
      <Navbar
        isCompact
        maxWidth="fluid"
        variant="floating"
        css={{
          position: "fixed",
        }}
      >
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs" size="large">
            VJ - Portfolio
          </Text>
        </Navbar.Brand>

        <Navbar.Content hideIn="xs">
          {navLinks.map((item, index) => {
            return (
              <>
                <Navbar.Link isActive={item.isActive} href={item.href}>
                  {item.name}
                </Navbar.Link>
              </>
            );
          })}
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Let`s Work Together
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {children}
    </NextUIProvider>
  );
};

export const Box = styled("div", {
  boxSizing: "border-box",
});

export const socialMedia = [
  {
    name: "Instagram",
    url: "",
  },
  {
    name: "LinkedIn",
    url: "",
  },
  {
    name: "GitHub",
    url: "",
  },
];

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
                {socialMedia?.map((item, index) => {
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
                priority
              />
            </Col>
          </Grid>
        </Grid.Container>
      </Card>
    </Container>
  );
};

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

export const Contact = () => {
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
                {socialMedia?.map((item, index) => {
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
                <Button auto ghost>
                  Send Message
                </Button>
              </Box>
            </Col>
          </Box>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

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
