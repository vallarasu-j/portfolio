import { Button, Navbar, Text } from "@nextui-org/react";
import { data } from "../Services/data";

export const HomeLayout = (props: any) => {
  const { children } = props;

  const navLinks = [
    { name: "Home", href: "#", isActive: true },
    { name: "Contact", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  const profile = data;

  return (
    <>
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
            {profile?.title}
          </Text>
        </Navbar.Brand>

        {/* <Navbar.Content hideIn="xs">
          {navLinks.map((item, index) => {
            return (
              <>
                <Navbar.Link isActive={item.isActive} href={item.href}>
                  {item.name}
                </Navbar.Link>
              </>
            );
          })}
        </Navbar.Content> */}

        <Navbar.Content>
          {/* <Navbar.Link color="inherit" href="/login">
            Login
          </Navbar.Link> */}
          <Navbar.Item>
            <Button auto flat>
              <a
                href={`mailto:${profile?.email}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Let`s Work Together
              </a>
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {children}
    </>
  );
};
