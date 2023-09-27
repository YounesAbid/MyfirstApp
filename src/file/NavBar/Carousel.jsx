import "./hero.css";

const Carousel = (props) => {
  return (
    <>
      <div className={props.item}>
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="cd"
            style={{ maxWidth: "50%" }}
            src={props.img}
            alt=""
          />
          <div className="d-flex d-md-block">
            <h5 className="cf">{props.title}</h5>
            <p className="cf">{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
