/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import SkillElem from "./SkillElem";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

const DisplayArray = ({ array, selectedItem }) => {
  let countNum = 3 ;
  const [displayCount, setDisplayCount] = useState(countNum);
  const [selectedItemState, setSelectedItemState] = useState(selectedItem);

  useEffect(() => {
    // Reset display count when selected item changes
    setDisplayCount(countNum);
    setSelectedItemState(selectedItem);
  }, [selectedItem]);

  const handleShowMore = () => {
    setDisplayCount(array.length); // Display all elements
  };

  const handleShowLess = () => {
    setDisplayCount(countNum); // Display countNum elements
  };
  const wholeArray = array.filter((elem) => elem.category === selectedItemState)

  const displayedArray = array
    .filter((elem) => elem.category === selectedItemState)
    .slice(0, displayCount);

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[25px]">
        {displayedArray.map((elem, index) => (
          <SkillElem
            key={index}
            name={elem.name}
            imgSrc={elem.imgSrc}
            pourcentage={elem.pourcentage}
            iconColor={elem.iconColor}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {displayCount < array.length  && wholeArray.length > displayCount ?(
          <FaChevronDown
            onClick={handleShowMore}
            className="text-3xl text-color2 cursor-pointer"
          />
        ) : displayCount > countNum ? (
          <FaChevronUp
            onClick={handleShowLess}
            className="text-3xl text-color2 cursor-pointer"
          />
        ) : null}
      </div>
    </div>
  );
};

export default DisplayArray;
