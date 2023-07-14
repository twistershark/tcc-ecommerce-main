import React from "react";
import { Link } from "react-router-dom";

import useCart from "cart/useCart";

export function Header() {
  const [cart] = useCart();
  const productsInCart = !!cart ? cart.length : 0;

  return (
    <header className="ec-relative ec-bg-white">
      <nav className="ec-mx-auto ec-max-w-7xl ec-px-4 ec-sm:px-6 ec-lg:px-8">
        <div className="ec-border-b ec-border-gray-200">
          <div className="ec-flex ec-h-16 ec-items-center">
            <div className="ec-ml-4 ec-flex lg:ec-ml-0 ec-text-blue-700 ec-font-bold ec-text-xl">
              <Link to="/">Loja Online</Link>
            </div>

            <div className="ec-ml-auto ec-flex ec-items-center">
              <div className="ec-ml-4 ec-flow-root lg:ec-ml-6">
                <Link
                  to="/carrinho"
                  className="ec-group -ec-m-2 ec-flex ec-items-center ec-p-2"
                >
                  <svg
                    className="ec-h-6 ec-w-6 ec-flex-shrink-0 ec-text-gray-400 ec-group-hover:ec-text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span className="ec-ml-2 ec-text-sm ec-font-medium ec-text-gray-700 ec-group-hover:ec-text-gray-800">
                    {productsInCart}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
