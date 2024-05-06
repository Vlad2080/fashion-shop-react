import Card from "./../card/Card";
import "./popular.css";

import promo01Img from "./../../img/images/promo-01.jpg";
import promo02Img from "./../../img/images/promo-02.jpg";

const Popular = () => {
  return (
    <section className="popular">
      <div className="container">
        <div className="popular__header">
          <h2 className="title-2">Young’s Favourite</h2>
        </div>
        <div className="popular__cards">
          <Card title="Trending on instagram" img={promo01Img} />
          <Card title="All Under $40" img={promo02Img} />
        </div>
      </div>
    </section>
  );
};

export default Popular;
