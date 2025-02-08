import "./features.css";

export default function Features() {
  return (
    <div id="services" className="features">
      <h1>Our Services</h1>
      <div className="container">
        <div className="feat">
          <div className=" img-icon img-par"></div>
          <h3>Pilot your business</h3>
          <p>
            Our solution gives you visibility on your potential turnover as well
            as the associated financial performance.
            <br />
            In real-time, you will have the key trends on product profitability
            to quickly adapt your sales and purchasing strategy accordingly.{" "}
            <br />
            Instantly monitor and manage your activity efficiently and maximise
            its profitability.
          </p>
        </div>
        <div className="feat">
          <div className=" img-icon img-cost"></div>
          <h3>Predict your stocks</h3>
          <p>
            Using artificial intelligence, our solution calculates and precisely
            plans your supplier needs and deadlines, internal or external
            production and distribution to your points of sale and end
            customers.
            <br /> You will never hear the words "out of stock" or
            "over-stocking" again. <br /> Your cash flow and storage space are
            thus optimally assured.
          </p>
        </div>
        <div className="feat">
          <div className=" img-icon img-manag"></div>
          <h3>Manage your operations</h3>
          <p>
            Automated management features with real-time alerts help you track
            your supplier orders, prioritise your production and distribution
            capacities.
            <br /> On a daily basis, manage your flows more efficiently and
            adapt without stress according to the evolution of your sales.
          </p>
        </div>
      </div>
    </div>
  );
}
