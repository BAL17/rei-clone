import "./RatingId.css";
import Star from "/src/assets/Star.svg";
import Starempty from "/src/assets/Starempty.svg";



const RatingId = () => {
  return (
    <>
      <div className="product-details">
        <div className="product-rating">
          <a href="https://www.rei.com/product/186314/timbuk2-muttmover-luxe-pack#">
            <div className="star">
              <img src={Star} alt="Icon Description"></img>
              <img src={Star} alt="Icon Description"></img>
              <img src={Star} alt="Icon Description"></img>
              <img src={Star} alt="Icon Description"></img>
              <img src={Starempty} alt="Icon Description"></img>
              <span id="ratingSpan">
                <a href="#">
                  <strong>4.1</strong> | 9 Reviews
                </a>
              </span>
            </div>
          </a>
        </div>

        <span id="itemSpan">Item #186314</span>
      </div>
    </>
  );
};

export default RatingId;
