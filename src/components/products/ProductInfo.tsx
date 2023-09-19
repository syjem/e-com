import React from "react";
import ProductItems from "../../data/ProductInfo";
import "../../scss/_product-info.scss";

function ProductInformation() {
  return (
    <section className="product-info">
      {ProductItems.map((item) => (
        <React.Fragment key={item.id}>
          <h5 className="item-supplier">{item.supplier}</h5>
          <h2 className="item-name">{item.name}</h2>
          <p className="item-description">{item.description}</p>
          <div className="prices">
            <span className="item-price">{item.price}</span>
            <span className="item-discount">{item.discount}</span>
          </div>
          <span className="item-original-price">{item.originalPrice}</span>
        </React.Fragment>
      ))}
    </section>
  );
}

export default ProductInformation;
