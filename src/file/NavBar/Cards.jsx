import Info from "../info/Info";
import CardItem from "./CardItem";
const Cards = (props) => {
  const Inf = Info.map((inf) => (
    <CardItem key={inf.id} title={inf.title} img={inf.img} des={inf.des} />
  ));
  return (
    <div className="container">
      <h1 className="pt-3" style={{ color: "white" }}>
        See More
      </h1>
      <div className="row">{Inf}</div>
    </div>
  );
};
export default Cards;
