import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [pet, setPet] = useState([]);
  const [selected, setSelected] = useState(0);

  let params = useParams();
  // console.log(params.pet_id);

  useEffect(() => {
    fetch(`https://pets-v2.dev-apis.com/pets?id=${params.pet_id}`)
      .then((res) => res.json())
      .then((res) => setPet(res.pets[0]))
      .catch((error) => console.log(error));
  }, []);

  const { name, animal, breed, city, state, description, images } = pet;
  // console.log(images);

  const handleClick = (e) => {
    setSelected(+e.target.dataset.number);
    // console.log(e.target.dataset.index);
  };

  return (
    <div>
      <div>
        {images && <img src={images[selected]} alt={name} />}
        <div>
          {images &&
            images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt="smallphoto"
                data-number={index}
                onClick={handleClick}
              />
            ))}
        </div>
      </div>
      <div>
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {city},{state}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
