import React from "react";

export default function Carousel(props) {
  const { mock } = props;

  return (
    <div>
      <img src={mock.images[0]} alt={mock.name} />
      <div>
        {mock.images.map((photo) => (
          <img key={photo} src={photo} alt={mock.name} />
        ))}
      </div>
    </div>
  );
}
