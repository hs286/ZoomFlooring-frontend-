import React from "react";
import { TabTitle } from "../../helpers/TabTitle";
import Product from "./product";

const ShopDetailComponent = ({service}) => {
  return (
    <>
      {service&&<Product service={service}/>}
    </>
  );
};

export default ShopDetailComponent;
