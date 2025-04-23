import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function User(props) {
  console.log("In User")
  console.log(props);
  return (
    <>
      <div className="products">
        <div className="productList">
          <div className="productCard">
            <img
              src={props.petimage}
              alt="product-img"
              className="productImage"
            ></img>

            <FaShoppingCart className={"productCard__cart"} />
            <FaRegBookmark className={"productCard__wishlist"} />
            <FaFireAlt className={"productCard__fastSelling"} />

            <div className="productCard__content">
              <h3 className="productName">{props.petname}</h3>
              <div className="displayStack__2">
                <div className="productRating">
                  {[...Array(props.petrating)].map((index) => (
                    <FaStar id={index + 1} key={index} />
                  ))}
                </div>
              </div>
              {console.log(props.owneremail)}
              <Link to="/contact" state={{ email: props.owneremail, test: 123 }}>
                <button>Contact</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
