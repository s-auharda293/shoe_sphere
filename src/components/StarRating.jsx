/* eslint-disable react/prop-types */
import { useState } from "react";
import Star from "./Star";

const StarRating = ({
  maxRating = 5,
  size = 30,
  defaultRating = 0,
  // onSetRating,/
}) => {
  const [rating, setRating] = useState(defaultRating);

  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rating) => {
    setRating(rating);
    // onSetRating(rating);
  };
  return (
    <div className="flex">
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          onRate={() => handleRating(i + 1)}
          full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
          onHoverIn={() => setTempRating(i + 1)}
          onHoverOut={() => setTempRating(0)}
          size={size}
          color="#fcc419"
        />
      ))}
    </div>
  );
};

export default StarRating;
