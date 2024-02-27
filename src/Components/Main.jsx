import React from "react";
// Import Icons from the material Ui
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import DiamondIcon from "@mui/icons-material/Diamond";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Card1 from "./Card1";
import Card2 from "./Card2";

// passing cards heading as props 

let cardheading = "WixPro 72-Inch Responsive Website Builder";
let card2heading = "SiteCraft 68-Inch Ultimate Web Design Studio";
let card4heading = "CDK Resposive Builder: ";

// passing card content as a prop

let cardcontent =
  "- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)";
let card2content =
  "- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)";
let card4content =
  "An extensive library of widgets and apps, and detailed step-by-step guides";

  // passing the content under highlight heading

let highlight1 =
  "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.";
  let box2highlight = "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."

  // highlight content for the third card

let highlight2 = (
  <div className="bg-[#FFF4ED] py-2 px-4 space-y-2 rounded text-[20px]">
    <div className=" flex gap-4">
      <span className="p-2 text-[#1B88F4] bg-white">9.9</span>
      <p>Building Responsive</p>
    </div>
    <div className=" flex gap-4">
      <span className="p-2  text-[#1B88F4] bg-white">8.9</span>
      <p>Cool</p>
    </div>
    <div className=" flex gap-4">
      <span className="p-2 text-[#1B88F4] bg-white">8.9</span>
      <p>Docs</p>
    </div>
  </div>
);

// base lists for the fourth card

let card4base = (<div className="text-[22px]">
    <p>Why we Love it</p>
    <p><CheckCircleOutlineIcon className="text-blue-400" />Documentation</p>
    <p><CheckCircleOutlineIcon className="text-blue-400" />Easy use</p>
    <p ><CheckCircleOutlineIcon className="text-blue-400 " />Out of Box</p>
</div>
);

let bedge1 = (
  <button className="absolute top-[-25px] md:left-[-40px] left-[-20px] p-3 bg-[#FF7724] text-white rounded-r-lg">
   
    <EmojiEventsIcon />
     Best choice
  </button>
);
let bedge2 = (
  <button className="absolute top-[-25px] md:left-[-40px] left-[-20px] p-3 bg-[#FF7724] text-white rounded-r-lg">
    
    <DiamondIcon />
    
    Best Value
  </button>
);

const Main = () => {
  return (
    <div className="py-16 md:px-60 px-6  md:w-[100vw] w-[140vw]">
      <h1 className="md:text-5xl text-2xl mb-6">
        Best Website builders in the US
      </h1>

      <hr className="text-black" />

      <div className="flex flex-col md:flex-row gap-4 md:justify-between py-4">
        <div className="flex gap-8">
          <span>
            <CheckCircleOutlineIcon />
            Last updated - February 27,2024
          </span>

          <span>
            <ErrorOutlineIcon />
            Advertising Disclosure
          </span>
        </div>
        <div className="text-center">
          <span>
            Top Relevant
            <ExpandMoreIcon />
          </span>
        </div>
      </div>

      <hr className="text-black" />

      <div className="tools flex justify-between gap-1 md:pr-72 pt-8">
        <a href="#">Tools</a>
        <a href="#">AWS Builder</a>
        <a href="#">Start Build</a>
        <a href="#">Build Supplies</a>
        <a href="#">Tooling</a>
        <a href="#">BlueHosting</a>
      </div>

      <div className="hosting py-12">
        <p>
          Home <NavigateNextIcon /> Hosting For all <NavigateNextIcon /> Hosting{" "}
          <NavigateNextIcon /> Hosting6 <NavigateNextIcon /> Hosting5
        </p>
      </div>

      {/* main cards of the web page  */}

      <Card1
        rate={9.8}
        star={<StarIcon />}
        content={cardcontent}
        heading={cardheading}
        highlight={highlight1}
        imgdesc="Builder 1"
        bedge={bedge1}
        count={1}
        comment = "Exceptional"
      />
      <Card1
        rate={9.5}
        star={<StarHalfIcon />}
        content={card2content}
        heading={card2heading}
        highlight={box2highlight}
        imgdesc="Builder"
        bedge={bedge2}
        count={2}
        comment = "Excellent"
      />
      <Card1
        rate={9.3}
        star={<StarIcon />}
        content={cardcontent}
        heading={cardheading}
        highlight={highlight1}
        imgdesc="Builder 1"
        count={3}
        comment = "Exceptional"
      />
      <Card1
        rate={9.1}
        star={<StarOutlineIcon />}
        content={card4content}
        heading={card4heading}
        highlight={highlight2}
        imgdesc="CDK"
        count={4}
        comment = "Very Good"
        base = {card4base}
      />

      <h1 className="md:text-5xl text-[40px] mt-20">Related deals you might like for</h1>

      <div className="flex flex-col md:flex-row mt-20 justify-center items-center md:space-x-20">

        {/* cards above the footer */}
      <Card2 />
      <Card2 />
      <Card2 />
      </div>

      <div className="flex flex-col md:flex-row mt-32 justify-center md:gap-96 gap-10">
        <h1 className="text-3xl">Sign up and get exclusive special deals</h1>
        <button className="py-4 px-20 bg-[#1B88F4] text-white mb-3 rounded-r-xl">Sign up</button>
      </div>

    </div>
  );
};

export default Main;
