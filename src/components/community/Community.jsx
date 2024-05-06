import "./community.css";

const Community = () => {
  return (
    <section className="community">
      <div className="container">
        <div className="text-block-1">
          <p>
            JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
          </p>
        </div>
        <div className="text-block-2">
          <p>Type your email down below and be young wild generation</p>
        </div>
        <div className="form-container">
          <div className="email-input">
            <p>Add your email here</p>
          </div>
          <div className="send-button">
            <button>SEND</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
