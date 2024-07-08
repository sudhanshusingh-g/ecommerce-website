import { mdiStar } from "@mdi/js";
import Icon from "@mdi/react";
import classNames from "classnames";
import React from "react";
import './Rating.css'
function Rating({ rating, maxRating, size = 1 }) {
  return (
    <div className="flex items-center gap-1">
      {new Array(maxRating).fill(0).map((_, index) => {
        const isActive = rating >= index + 1;
        return (
          <Icon
            key={index}
            className={classNames("rating_star",{"rating_star--active":isActive})}
            path={mdiStar}
            size={size}
          />
        );
      })}
    </div>
  );
}

export default Rating;
