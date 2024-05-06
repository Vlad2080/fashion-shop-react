import "./banner.css";
import promoBanner from "./../../img/images/promo-img.jpg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__content">
          <div className="banner__img">
            <img src={promoBanner} alt="promoBanner" />
          </div>
          <div className="banner__text">
            <div className="banner__title">
              <span className="highlight">
                <span>PAYDAY</span>
              </span>
              SALE NOW
            </div>
            <div className="banner__desc">
              <span>Spend minimal $100 get 30% off</span>
              <span> voucher code for your next purchase</span>
            </div>
            <div className="banner__terms">
              <span>
                <b>1 June - 10 June 2021</b>
              </span>
              <br />
              <span>*Terms & Conditions apply</span>
            </div>

            <div className="banner__btn-wrapper">
              <a href="#!" className="banner__btn">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
