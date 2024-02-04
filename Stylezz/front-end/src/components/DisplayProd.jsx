import "../styles/displayprod.css";
import { useEffect, useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactDOM } from "react-dom/client";
import Footer from "./Footer";
import { ProductContext } from "./Context";

const DisplayProd = (prods) => {
  const { options, setOption } = useContext(ProductContext);
  //console.log(title.current.value)
  const [products, setProduct] = useState([]);
  const [inputText, setInputText] = useState("");
  // const [options, setOption] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/products", {
        method: "GET",
      }).then((res) => {
        return res.json();
      });
      setProduct(response.products);
      // console.log(response);
    };

    fetchData();
  }, []);

  let handleChange = async (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(() => {
      return e.target.value;
    });
    // console.log(e.target.value);

    const response1 = await fetch("http://localhost:8000/searchInput", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: lowerCase,
      }),
    }).then((res) => {
      return res.json();
    });

    console.log("options response", response1)
    setOption(response1);
  };

  let handleSearch = async (e) => {
    const response2 = await fetch("http://localhost:8000/result", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        results: options,
      }),
    })
  };
  // return response.json();

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      handleSearch();
      setProduct(options)
    }
  };

  const handleHome = (e) => {
    return navigate("/");
  };

  return (
    <div>
      <div className="bigDiv">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a
              className="btn btn-ghost normal-case text-xl"
              onClick={(e) => {
                handleHome();
              }}
            >
              Pesho's Homepage
            </a>
          </div>
          <div className="navbar-end">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-60 md:w-auto"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={inputText}
              />
              <div className="searchProducts">
                <ul>
                  {inputText.length > 0 &&
                    options.map((product, index) => (
                      <div className="temp" key={index}>
                        <li className="b">
                          <div className="resProds">
                            <img
                              className="resImgs"
                              src={"http://localhost:8000/uploads/" + product.image}
                              alt={product.title}
                            />
                            <p className="resTitles">{product.title}</p>
                          </div>
                        </li>
                      </div>
                    ))}
                </ul>
              </div>
            </div>
            <button
              className="btn btn-ghost btn-circle"
              onClick={(e) => {
                handleSearch(e);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
        <div className="midPart">
          <div className="flex-child-left"></div>
          <ul className="Container">
            {products.map((product, index) => (
              <li className="a" key={index}>
                {/* {console.log("here", product.image)} */}
                <div className="products">
                  <img
                    className="images"
                    src={"http://localhost:8000/uploads/" + product.image}
                    alt={product.title}
                  />
                  <div className="info">
                    <h2 className="titles">{product.title}</h2>
                    <p>{product.price}.00$</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex-child-right"></div>
        </div>
        <div className="footerGrid">{<Footer inputText={{ inputText }} />}</div>
      </div>
    </div>
  );
};

export default DisplayProd;
