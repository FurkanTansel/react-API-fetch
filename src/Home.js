import React from "react";

const List = ({ data }) => {
  console.log(data);
  var sinif = ["Description", "Competitor"];

  return (
    <div>
      {data &&
        data.map((item, index) => (
          <div key={(index, item)}>
            <h3>Description</h3>, <h3>index</h3>
            <h3>{item.id}</h3>
            <h3>{item.name}</h3>
          </div>
        ))}
    </div>
  );
};

export default List;
