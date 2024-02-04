import "../styles/navigation.css";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import categories from "../categories.js";
import { ProductContext } from "./Context";

const Navigation = () => {
  console.log("hereeee");
  const [hovered, setHovered] = useState(["", "", "", "", "", "", "", ""]);
  const [isShown, setIsShown] = useState(-1);
  const [isShown1, setIsShown1] = useState(false);
  const [inputText, setInputText] = useState("");
    const { options, setOption } = useContext(ProductContext);
  const navigate = useNavigate();
  // a lot was copy pasted

  const handleHover = (setter, index) => {
    setter((prev) => {
      const arr = [...prev];
      arr[index] = !arr[index];
      return arr;
    });
  };

  const handleUnderline = (setter, index) => {
    setter((prev) => {
      const arr = [...prev];
      arr[index] = "_Hovered";
      return arr;
    });
  };

  const handleLeaveUnderline = (setter, index) => {
    setter((prev) => {
      const arr = [...prev];
      arr[index] = "";
      return arr;
    });
  };

  let handleChange = async (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(() => {
      return lowerCase;
    });
    console.log(e.target.value);

    const response1 = await fetch("http://localhost:8000/searchInput", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: lowerCase,
      }),
    }).then((response1) => {
      return response1.json();
    });
    setOption(response1);
    // console.log(options, response1)
  };

  return (
    <div>
      <div className="Ultranav">
        <div className="main navbar">
          <div className="nav_genders">
            <div>
              <a href="" className="nav_gender">
                Men
              </a>
            </div>
            <div>
              <a href="" className="nav_gender">
                Women
              </a>
            </div>
            <div>
              <a href="" className="nav_gender">
                Kids
              </a>
            </div>
          </div>
          <div className="navbar-center">
            <a className="nav_logo " href="">
              <img
                className="shop_logo"
                src="/output-onlinepngtools (2).png"
              ></img>
            </a>
          </div>
          <div className="nav_icons">
            <button className="UserIcon_userButton">
              <img className="icons" src="/icons8-manager-96.png"></img>
            </button>
            <button className="NotificationIcon_notificationIcon"> </button>
            <a href="" className="CustomerListIcon_wishIcon">
              <img className="icons" src="/icons8-heart-96.png"></img>
            </a>
            <a href="" className="CartIcon_cartIcon">
              <img className="icons" src="icons8-cart-96.png"></img>
            </a>
          </div>
        </div>
        <div className="navigation navbar">
          <ul className="nav_left">
            <li
              className={"MainItem_mainItem" + hovered[0]}
              onMouseEnter={() => {
                ("here on mouse enter");
                setIsShown(0);
                handleUnderline(setHovered, 0);
              }}
              onMouseLeave={() => {
                handleLeaveUnderline(setHovered, 0);
              }}
            >
              <a href="" className="MainItem_mainLink">
                New arrivals
              </a>
            </li>
            <li
              className={"MainItem_mainItem" + hovered[1]}
              onMouseEnter={() => {
                setIsShown(1);
                handleUnderline(setHovered, 1);
              }}
              onMouseLeave={() => {
                handleLeaveUnderline(setHovered, 1);
              }}
            >
              <a href="" className="MainItem_mainLink">
                Shoes
              </a>
            </li>
            <li
              className={"MainItem_mainItem" + hovered[2]}
              onMouseEnter={() => {
                setIsShown(2);
                handleUnderline(setHovered, 2);
              }}
              onMouseLeave={() => {
                handleLeaveUnderline(setHovered, 2);
              }}
            >
              <a href="" className="MainItem_mainLink">
                Clothing
              </a>
            </li>
            <li
              className={"MainItem_mainItem" + hovered[3]}
              onMouseEnter={() => {
                setIsShown(3);
                handleUnderline(setHovered, 3);
              }}
              onMouseLeave={() => {
                handleLeaveUnderline(setHovered, 3);
              }}
            >
              <a href="" className="MainItem_mainLink">
                Accessories
              </a>
            </li>
            <li
              className={"MainItem_mainItem" + hovered[4]}
              onMouseEnter={() => {
                setIsShown(4);
                handleUnderline(setHovered, 4);
              }}
              onMouseLeave={() => {
                handleLeaveUnderline(setHovered, 4);
              }}
            >
              <a href="" className="MainItem_mainLink">
                Brands
              </a>
            </li>
            <li
              className={"MainItem_mainItem" + hovered[5]}
              onMouseEnter={() => {
                setIsShown(5);
                handleUnderline(setHovered, 5);
              }}
              onMouseLeave={() => {
                handleLeaveUnderline(setHovered, 5);
              }}
            >
              <a href="" className="MainItem_mainLink">
                Sale
              </a>
            </li>
          </ul>
          <div className="nav_right">
            <div className="wrap">
              <div className="search">
                <input
                  onChange={(e) => {
                    setInputText(e.target.value);
                    console.log(inputText, e.target.value);
                  }}
                  type="text"
                  className="searchTerm"
                  placeholder="What are you looking for?"
                  value={inputText}
                />
                <button type="submit" className="searchButton">
                  <img src="icons8-search-500.png" />
                </button>
                <div className="searchProducts">
                  <ul>
                    {inputText.length > 0 &&
                      options.map((product, index) => (
                        <div className="temp" key={index}>
                          <li className="b">
                            <div className="resProds">
                              <img
                                className="resImgs"
                                src={"http://localhost:8000/" + product.image}
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
            </div>
          </div>
        </div>
        {isShown >= 0 && (
          <div
            className="nav_Left_Hovered_Child"
            onMouseLeave={() => {
              setIsShown(-1);
            }}
          >
            {isShown >= 0 &&
              categories[isShown].map((category, idx) => {
                return (
                  <div className="columns_Hovered_Children">
                    <div className="columns_Elements_Hovered_Children">
                      {Object.keys(category).map((titles, idx) => {
                        // {}[i] -> titles
                        return (
                          <div>
                            <div>
                              <div className="titles_Hovered_Children">
                                {titles}
                              </div>
                            </div>
                            <div>
                              {Object.values(category)[idx].map((element) => {
                                console.log(element);
                                return (
                                  <a
                                    href={element.url}
                                    className="nav_bar_Hovered_Elements"
                                  >
                                    {element.name}
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        );
                        //
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
