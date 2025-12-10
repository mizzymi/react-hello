import Card from "./Card";
import Container from "./Container";

const CardsRow = () => {
  return (
    <Container className=" mb-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div className="col-md-3" key={index}>
          <Card />
        </div>
      ))}
    </Container>
  );
};

export default CardsRow;
