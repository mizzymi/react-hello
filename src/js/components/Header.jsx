import Container from "./Container";

const Header = ({ children, className }) => {
  return (
    <Container
      className={
        "justify-content-around align-items-center bg-dark text-white p-4"
      }
    >
      <h5>Start Bootstrap</h5>
      <nav>
        <Container className={"p-2"}>
          <a>Home</a>
          <a>About</a>
          <a>Services</a>
          <a>Contact</a>
        </Container>
      </nav>
    </Container>
  );
};

export default Header;
