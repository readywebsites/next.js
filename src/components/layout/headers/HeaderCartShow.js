import countTotalPrice from "@/libs/countTotalPrice";
import modifyAmount from "@/libs/modifyAmount";
import { useCartContext } from "@/providers/CartContext";
import { useHeaderContext } from "@/providers/HeaderContext";
import Link from "next/link";
import React from "react";

const HeaderCartShow = () => {
  const { headerStyle } = useHeaderContext();
  const { cartProducts } = useCartContext();
  const totalProduct = cartProducts?.length;
  const totalPrice = countTotalPrice(cartProducts);
  return (
    <>
      {totalProduct || totalProduct === 0 ? (
        <div
          className={`mini-cart-icon   ${
            headerStyle === 5 ? "mini-cart-icon-2" : ""
          }`}
        >
          <Link href="#ltn__utilize-cart-menu" className="ltn__utilize-toggle">
            <span className={headerStyle === 5 ? "mini-cart-icon" : ""}>
              <i className="icon-shopping-cart"></i> <sup>{totalProduct}</sup>
            </span>
            {headerStyle === 5 ? (
              <h6>
                <span>Your Cart</span>{" "}
                <span className="ltn__secondary-color">
                  ${modifyAmount(totalPrice)}
                </span>
              </h6>
            ) : (
              ""
            )}
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HeaderCartShow;
