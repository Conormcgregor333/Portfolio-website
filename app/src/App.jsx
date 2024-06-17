import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import Work from "./work";
import Tech from "./tech";
import About from "./about";
import { createContext } from "react";
export let context = createContext();
function App() {
  let [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  let [ham, setHam] = useState(false);

  function handleDark() {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  }
  function handleLight() {
    setTheme("light");
    localStorage.setItem("theme", "light");
  }
  localStorage.getItem("theme") == "dark"
    ? (document.body.style.backgroundColor = "black")
    : (document.body.style.backgroundColor = "white");
  return (
    <context.Provider>
      <div>
        <div className=" absolute  h-32 bg-red-600 top-grad blur-3xl "></div>
        <div className=" absolute  h-14 bg-blue-600 top-grad2 blur-3xl "></div>

        <div
          style={
            localStorage.getItem("theme") == "light"
              ? { backgroundColor: "#e5e7eb" }
              : { backgroundColor: "#374151" }
          }
          className="absolute nav w-2/3  h-20 rounded-2xl  opacity-65 pt-7 sm:w-2/3 md:w-2/3 xl:w-1/2 2xl:w-1/2 "
        >
          <div className="flex justify-around mx-1 ">
            <div className="block sm:hidden md:hidden xl:hidden 2xl:hidden -translate-y-2">
              {localStorage.getItem("theme") == "light" ? (
                <p
                  className={
                    localStorage.getItem("theme") == "light"
                      ? "text-2xl sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl font-bold text-black hover:text-red-500 cursor-pointer"
                      : "text-2xl sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl font-bold hover:text-red-500 text-white  cursor-pointer"
                  }
                  onClick={() => {
                    handleDark();
                  }}
                >
                  ☾
                </p>
              ) : (
                <p
                  className={
                    localStorage.getItem("theme") == "light"
                      ? "text-2xl sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl font-bold text-black hover:text-red-500 cursor-pointer"
                      : "text-2xl sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl font-bold hover:text-green-500 text-white  cursor-pointer"
                  }
                  onClick={() => {
                    handleLight();
                  }}
                >
                  ☼
                </p>
              )}
            </div>

            <p
              className={
                localStorage.getItem("theme") == "light"
                  ? "text-sm sm:text-md md:text-xl xl:text-xl 2xl:text-xl  font-bold name text-blue-400 hover:text-green-500"
                  : "text-sm sm:text-md md:text-xl xl:text-xl 2xl:text-xl font-bold name text-green-600 hover:text-red-500"
              }
            >
              {" "}
              <Link to="/">Siddharth Pareek</Link>
            </p>

            <div className=" justify-between md:flex xl:flex 2xl:flex hidden ">
              <p 
                className={
                  localStorage.getItem("theme") == "light"
                    ? "font-bold text-xl mx-2 text-black hover:text-red-500 cursor-pointer"
                    : "font-bold text-xl mx-2 hover:text-green-500 text-white  cursor-pointer"
                }
              >
                {" "}
                <Link to="/about">About</Link>
              </p>

              <p 
                className={
                  localStorage.getItem("theme") == "light"
                    ? "font-bold text-xl mx-2 text-black hover:text-red-500 cursor-pointer"
                    : "font-bold text-xl mx-2 hover:text-green-500 text-white  cursor-pointer"
                }
              >
                {" "}
                <Link to="/work">Work</Link>
              </p>

              <p 
                className={
                  localStorage.getItem("theme") == "light"
                    ? "font-bold text-xl mx-2 text-black hover:text-red-500 cursor-pointer"
                    : "font-bold text-xl mx-2 hover:text-green-500 text-white  cursor-pointer"
                }
              >
                {" "}
                <Link to="/resume">Resume</Link>
              </p>
            </div>
            <div className="hidden sm:block md:block xl:block 2xl:block">
              {localStorage.getItem("theme") == "light" ? (
                <p
                  className={
                    localStorage.getItem("theme") == "light"
                      ? "text-2xl sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl font-bold text-black hover:text-red-500 cursor-pointer"
                      : "text-2xl sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl font-bold hover:text-red-500 text-white  cursor-pointer"
                  }
                  onClick={() => {
                    handleDark();
                  }}
                >
                  ☾
                </p>
              ) : (
                <p
                  className={
                    localStorage.getItem("theme") == "light"
                      ? "text-2xl sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl font-bold text-black hover:text-red-500 cursor-pointer"
                      : "text-2xl sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl font-bold hover:text-green-500 text-white  cursor-pointer"
                  }
                  onClick={() => {
                    handleLight();
                  }}
                >
                  ☼
                </p>
              )}
            </div>
            <div
              id="hamburger"
              onClick={() => {
                setHam(!ham);
              }}
              className={
                ham
                  ? "hamburger block sm:hidden md:hidden xl:hidden 2xl:hidden hamburger-press"
                  : "hamburger block sm:hidden md:hidden xl:hidden 2xl:hidden "
              }
            >
              <div
                className={
                  localStorage.getItem("theme") == "dark"
                    ? "ham1 bg-white"
                    : "ham1 bg-black"
                }
              ></div>
              <div
                className={
                  localStorage.getItem("theme") == "dark"
                    ? "ham2 bg-white"
                    : "ham2 bg-black"
                }
              ></div>
              <div
                className={
                  localStorage.getItem("theme") == "dark"
                    ? "ham3 bg-white"
                    : "ham3 bg-black"
                }
              ></div>
            </div>
          </div>
        </div>
        {ham ? (
          <div
            className={
              localStorage.getItem("theme") == "dark"
                ? "block nav2 fixed sm:hidden md:hidden xl:hidden 2xl:hidden bg-gray-700 w-2/3 sm:w-2/3 md:w-2/3 xl:w-1/2 rounded-xl h-28    text-white"
                : "block nav2 fixed sm:hidden md:hidden xl:hidden 2xl:hidden bg-gray-200 w-2/3 sm:w-2/3 md:w-2/3 xl:w-1/2 rounded-xl h-28  "
            }
          >
            <div  onClick={() => {
                setHam(!ham);
              }} className="text-center mt-1 font-bold text-xl">
              {" "}
              <Link to="/about">About</Link>
            </div>
            <div  onClick={() => {
                setHam(!ham);
              }} className="text-center mt-1 my-1 font-bold text-xl">
              {" "}
              <Link to="/work">Work</Link>
            </div>
            <div  onClick={() => {
                setHam(!ham);
              }} className="text-center font-bold text-xl">
              {" "}
              <Link to="/resume">Resume</Link>
            </div>
          </div>
        ) : null}
         <div className="translate-y-52 container absolute   top-0 -z-50">
          <div className="circle">
            <svg
              className="blur-xl svgStyle "
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              id="visual"
              viewBox="0 0 900 600"
              version="1.1"
            >
              <g transform="translate(461.6786425649586 255.62215185070386)">
                <path
                  d="M119.1 -114.1C152.5 -85.8 176.2 -42.9 172.5 -3.8C168.7 35.4 137.4 70.7 104 120.7C70.7 170.7 35.4 235.4 -10 245.4C-55.4 255.4 -110.8 210.8 -146.9 160.8C-183.1 110.8 -200.1 55.4 -195.5 4.6C-190.9 -46.2 -164.7 -92.4 -128.6 -120.7C-92.4 -149.1 -46.2 -159.5 -1.6 -157.9C42.9 -156.2 85.8 -142.5 119.1 -114.1"
                  fill="#f10a66"
                />
              </g>
            </svg>
          </div>
          <div className=" circle-reverse absolute top-0  opacity-70">
            <svg
              className="blur-xl svgStyle"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              id="visual"
              viewBox="0 0 900 600"
              version="1.1"
            >
              <g transform="translate(461.6786425649586 255.62215185070386)">
                <path
                  d="M119.1 -114.1C152.5 -85.8 176.2 -42.9 172.5 -3.8C168.7 35.4 137.4 70.7 104 120.7C70.7 170.7 35.4 235.4 -10 245.4C-55.4 255.4 -110.8 210.8 -146.9 160.8C-183.1 110.8 -200.1 55.4 -195.5 4.6C-190.9 -46.2 -164.7 -92.4 -128.6 -120.7C-92.4 -149.1 -46.2 -159.5 -1.6 -157.9C42.9 -156.2 85.8 -142.5 119.1 -114.1"
                  fill="#4786e8"
                />
              </g>
            </svg>
          </div>
          <div className="circle">
            <svg
              className="blur-xl svgStyle absolute top-60"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              id="visual"
              viewBox="0 0 900 600"
              version="1.1"
            >
              <g transform="translate(461.6786425649586 255.62215185070386)">
                <path
                  d="M119.1 -114.1C152.5 -85.8 176.2 -42.9 172.5 -3.8C168.7 35.4 137.4 70.7 104 120.7C70.7 170.7 35.4 235.4 -10 245.4C-55.4 255.4 -110.8 210.8 -146.9 160.8C-183.1 110.8 -200.1 55.4 -195.5 4.6C-190.9 -46.2 -164.7 -92.4 -128.6 -120.7C-92.4 -149.1 -46.2 -159.5 -1.6 -157.9C42.9 -156.2 85.8 -142.5 119.1 -114.1"
                  fill="#f3857c"
                />
              </g>
            </svg>
          </div>
          <div className="circle">
            <svg
              className="blur-xl svgStyle absolute  top-30"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              id="visual"
              viewBox="0 0 900 600"
              version="1.1"
            >
              <g transform="translate(461.6786425649586 255.62215185070386)">
                <path
                  d="M119.1 -114.1C152.5 -85.8 176.2 -42.9 172.5 -3.8C168.7 35.4 137.4 70.7 104 120.7C70.7 170.7 35.4 235.4 -10 245.4C-55.4 255.4 -110.8 210.8 -146.9 160.8C-183.1 110.8 -200.1 55.4 -195.5 4.6C-190.9 -46.2 -164.7 -92.4 -128.6 -120.7C-92.4 -149.1 -46.2 -159.5 -1.6 -157.9C42.9 -156.2 85.8 -142.5 119.1 -114.1"
                  fill="#c393eb"
                />
              </g>
            </svg>
          </div>
        </div>
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Tech />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <div className="h-10 bg-red-600  blur-3xl rounded-t-lg "></div>
        <div className="h-10 bg-blue-600  blur-3xl rounded-t-lg opacity-55 "></div>
      </div>
    </context.Provider>
  );
}

export default App;
