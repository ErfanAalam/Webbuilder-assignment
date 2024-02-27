import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";

const Card1 = ({
  rate,
  star,
  content,
  heading,
  imgdesc,
  bedge,
  count,
  highlight,
  base,
  comment,
}) => {
  return (
    <div className="flex gap-24 flex-col md:flex-row items-center relative py-10 mt-10 ">
      {bedge}
      <div className="absolute top-[40px] md:left-[-40px] left-[-20px] p-4 pt-4 flex justify-center text-center w-12 h-14 border-gray border-2 rounded-[50%]">
        {count}
      </div>
      <div className="img text-center space-y-4">
        <img className="w-80" src="card-img.svg" alt="" />
        <p>{imgdesc}</p>
      </div>

      <div className="decsription w-[450px] flex flex-col gap-4">
        <p>
          <span className="font-bold">{heading}</span>
          {content}
        </p>

        <h2 className="font-bold">Main highlights</h2>

        <p className="ml-4">{highlight}</p>
        <div>{base}</div>

        <a href="#" className="text-blue-600">
          Show More <ExpandMoreIcon />
        </a>
      </div>

      <div className="rating flex flex-col h-[29vh] justify-between">
        <div className="rate bg-[#F3F9FF] py-6 px-0 text-center rounded-b-lg text-[#074786]">
          <p className="text-4xl">{rate}</p>
          <p>{comment}</p>
          <p className="text-yellow-400">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            {star}
          </p>
        </div>
        <div className="btn py-4 px-28 bg-[#1B88F4] rounded-lg text-white mb-3">
          <p className="ml-34 md:ml-0">view</p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
