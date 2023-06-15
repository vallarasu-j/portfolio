import { Button, Navbar, Text } from "@nextui-org/react";

export const HomeLayout = (props: any) => {
  const { children } = props;

  const navLinks = [
    { name: "Home", href: "#", isActive: true },
    { name: "Contact", href: "#" },
    { name: "Blogs", href: "#" },
  ];

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
          <Navbar.Link color="inherit" href="/login">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button
              auto
              flat
              onClick={() => {
                window.scrollTo(0, document.body.scrollHeight);
              }}
            >
              Let`s Work Together
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {children}
    </>
  );
};
