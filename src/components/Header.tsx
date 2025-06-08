import { Container, Nav, Navbar } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm py-2">
      <Container>
        <Navbar.Brand href="#top">yui19278</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto gap-2">
            <Nav.Link href="#about">自己紹介</Nav.Link>
            <Nav.Link href="#Career">経歴</Nav.Link>
            <Nav.Link href="#skills">技術スタック</Nav.Link>
            <Nav.Link href="#projects">制作物</Nav.Link>
            <Nav.Link href="#vision">将来像</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="https://github.com/yui19278"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="me-1" /> GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//ここなんもわからん また今度