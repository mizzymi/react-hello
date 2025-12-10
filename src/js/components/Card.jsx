const Card = () => {
  return (
    <div className="card h-100">
      <div
        className="bg-secondary text-white d-flex align-items-center justify-content-center"
        style={{ height: "200px" }}
      >
        500 x 325
      </div>

      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          esse necessitatibus neque.
        </p>
      </div>

      <div className="card-footer text-center">
        <button className="btn btn-primary">Find Out More!</button>
      </div>
    </div>
  );
};

export default Card;
