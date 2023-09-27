import i1 from "../img/1.png";
import i2 from "../img/2.png";
import i3 from "../img/3.png";
import "./hero.css";
import Carousel from "./Carousel";
const Hero = (props) => {
  return (
    <>
      <div className="container pt-3">
        <div
          id="carouselExampleRide"
          className="carousel slide "
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner ">
            <Carousel
              item={"carousel-item active"}
              img={i1}
              title={"Title 1"}
              para={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet quibusdam omnis pariatur ipsum numquam facilis soluta ab, id perferendis natus veniam exercitationem. Facere, repudiandae vel. Reiciendis excepturi nihil omnis!
  `}
            />
            <Carousel
              item={"carousel-item"}
              key={2}
              img={i2}
              title={"Title 2"}
              para={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet quibusdam omnis pariatur ipsum numquam facilis soluta ab, id perferendis natus veniam exercitationem. Facere, repudiandae vel. Reiciendis excepturi nihil omnis!
            `}
            />
            <Carousel
              item={"carousel-item "}
              key={3}
              img={i3}
              title={"Title 3"}
              para={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet quibusdam omnis pariatur ipsum numquam facilis soluta ab, id perferendis natus veniam exercitationem. Facere, repudiandae vel. Reiciendis excepturi nihil omnis!
  `}
            />
          </div>

          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
