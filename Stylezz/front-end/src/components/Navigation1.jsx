import "../styles/navigation.css";
import React, { useState } from "react";
import Nav from "./Nav";
import categories from "../categories.js";

const Navigation = () => {
  ("hereeee");
  const [hovered, setHovered] = useState(["", "", "", "", "", "", "", ""]);
  const [isShown, setIsShown] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [isShown1, setIsShown1] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

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
      arr[index];
      return arr;
    });
  };

  const handleLeaveUnderline = (setter, index) => {
    setter((prev) => {
      const arr = [...prev];
      arr[index] = "";
      arr[index];
      return arr;
    });
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
                handleHover(setIsShown, 0);
                handleUnderline(setHovered, 0);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown, 0);
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
                handleHover(setIsShown, 1);
                handleUnderline(setHovered, 1);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown, 1);
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
                handleHover(setIsShown, 2);
                handleUnderline(setHovered, 2);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown, 2);
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
                handleHover(setIsShown, 3);
                handleUnderline(setHovered, 3);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown, 3);
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
                handleHover(setIsShown, 4);
                handleUnderline(setHovered, 4);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown, 4);
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
                handleHover(setIsShown, 5);
                handleUnderline(setHovered, 5);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown, 5);
                handleLeaveUnderline(setHovered, 5);
              }}
            >
              <a href="" className="MainItem_mainLink">
                Inspiration
              </a>
            </li>
            <li
              className={"MainItem_mainItem" + hovered[6]}
              onMouseEnter={() => {
                handleHover(setIsShown, 6);
                handleUnderline(setHovered, 6);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown, 6);
                handleLeaveUnderline(setHovered, 6);
              }}
            >
              <a href="" className="MainItem_mainLink">
                Sale
              </a>
            </li>
            <li
              className={"MainItem_mainItem" + hovered[7]}
              onMouseEnter={() => {
                handleHover(setIsShown, 7);
                handleUnderline(setHovered, 7);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown, 7);
                handleLeaveUnderline(setHovered, 7);
              }}
            >
              <a href="" className="MainItem_mainLink">
                PeshoShoes
              </a>
            </li>
          </ul>
          <div className="nav_right">
            <div className="wrap">
              <div className="search">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="What are you looking for?"
                />
                <button type="submit" className="searchButton">
                  <img src="icons8-search-500.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {((isShown[0] || isShown1[0]) && (
          <div
            className="nav_Left_Hovered_Child"
            onMouseEnter={() => {
              handleHover(setIsShown1, 0);
            }}
            onMouseLeave={() => {
              handleHover(setIsShown1, 0);
            }}
          >
            {categories.map((obj, idx) => {
              return (
                <Nav
                  props={{
                    array: obj.items,
                    title: obj.category,
                    url: obj.url,
                  }}
                ></Nav>
              );
            })}
          </div>
        )) ||
          ((isShown[1] || isShown1[1]) && (
            <div
              className="nav_Left_Hovered_Child"
              onMouseEnter={() => {
                handleHover(setIsShown1, 1);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown1, 1);
              }}
            >
              {/* <Nav props={{array:[ ['Premium Sneakers'], ['Spring','Summer','Autumn','Winter'], ['Running', 'Skate', 'Basket', 'Fitness', 'Outdoor']], title:['PREMIUM', 'SEASON', 'SPORT'], url:[[''],['','','',''],['','','','','']]}}></Nav>
            <Nav props={{array:[ ['adidas Samba','adidas Gazelle','Nike Air Max','Nike Dunk','Nike Air Force 1','Vans KNU SKOOL','Hoka One One Clifton 8','New Balance XC-72','Asics Gel-Kayano 14','On Cloud','adidas Campus 00s','Converse Chuck Taylor 70s','Converse Run Star Hike']], title:['POPULAR MODELS'], url:[['','','','','','','','','','','','','']]}}></Nav>
            <Nav props={{array:[ ['Nike','adidas Originals','adidas Performance','New Balance','Y-3','Converse','Reebok','HOKA ONE ONE','Vans Vault','Vans','Asics','Puma','Salomon Advanced','On']], title:['FAVOURITE BRANDS'], url:[['','','','','','','','','','','','','','']]}}></Nav> */}
            </div>
          )) ||
          ((isShown[2] || isShown1[2]) && (
            <div
              className="nav_Left_Hovered_Child"
              onMouseEnter={() => {
                handleHover(setIsShown1, 2);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown1, 2);
              }}
            >
              {/* <Nav props={{array:[ ['All Appeal', 'Premium', 'Coats & Jackets','Hoodies & Sweaters', 'Trousers', 'Shorts', 'Shirts', 'Underwear', 'Swimwear', 'Socks', 'Male shoes on sale'] ], title:['CATEGORY'], url:[['','','','','','','','','','','','']] }} ></Nav>
            <Nav props={{array:[ ['Spring','Summer','Autumn','Winter']], title:['SEASON'], url:[['','','','']]}}></Nav>
            <Nav props={{array:[ ['Running', 'Skate', 'Basket', 'Fitness', 'Outdoor']], title:['SPORT'], url:[['','','','','']]}}></Nav>
            <Nav props={{array:[ ['Nike','Jordan','adidas Originals','PeshoShoes','Carhartt WIP','The North Face','Y-3','Comme des Garçons PLAY','Pleasures','Daily Paper','Calvin Klein','RIPNDIP','Columbia','Under Armour']], title:['FAVOURITE BRANDS'], url:[['','','','','','','','','','','','','','']]}}></Nav> */}
            </div>
          )) ||
          ((isShown[3] || isShown1[3]) && (
            <div
              className="nav_Left_Hovered_Child"
              onMouseEnter={() => {
                handleHover(setIsShown1, 3);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown1, 3);
              }}
            >
              {/* <Nav props={{array:[ ['All Accessories', 'Premium','Male accessories on sale'] ], title:['ACCESSORIES'], url:[['']]}}></Nav> */}
            </div>
          )) ||
          ((isShown[4] || isShown1[4]) && (
            <div
              className="nav_Left_Hovered_Child"
              onMouseEnter={() => {
                handleHover(setIsShown1, 4);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown1, 4);
              }}
            ></div>
          )) ||
          ((isShown[5] || isShown1[5]) && (
            <div
              className="nav_Left_Hovered_Child"
              onMouseEnter={() => {
                handleHover(setIsShown1, 5);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown1, 5);
              }}
            ></div>
          )) ||
          ((isShown[6] || isShown1[6]) && (
            <div
              className="nav_Left_Hovered_Child"
              onMouseEnter={() => {
                handleHover(setIsShown1, 6);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown1, 6);
              }}
            ></div>
          )) ||
          ((isShown[7] || isShown1[7]) && (
            <div
              className="nav_Left_Hovered_Child"
              onMouseEnter={() => {
                handleHover(setIsShown1, 7);
              }}
              onMouseLeave={() => {
                handleHover(setIsShown1, 7);
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Navigation;
