import "./Carditem.css";
const CardItem = (props) => {
  return (
    <div className="cw pt-3">
      <div className="card">
        <img style={{ maxWidth: "100%" }} src={props.img} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text ">{props.des}</p>
          <a href="#" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
