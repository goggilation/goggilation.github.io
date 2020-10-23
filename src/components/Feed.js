import React from "react";
import items from "../content/feedContent.json";
import FeedCard from "./FeedCard";

const Feed = () => {
  return (
    <div>
      <h5>Feed</h5>
      {items.FeedItems.map((item, index) => {
        return (
          <FeedCard
            key={index}
            img={item[index].img}
            clientName={item[index].clientName}
            projectName={item[index].projectName}
            description={item[index].description}
            ctaText={item[index].ctaText}
          />
        );
      })}
    </div>
  );
};
export default Feed;
