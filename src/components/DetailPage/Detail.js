import React from "react";
import Carousel from "./Carousel";

const MOCKDATA = {
  id: 1,
  name: "Luna",
  animal: "dog",
  city: "Seattle",
  state: "WA",
  description:
    "Luna is actually the most adorable dog in the world. Her hobbies include yelling at squirrels, aggressively napping on her owners' laps, and asking to be fed two hours before IT'S DAMN WELL TIME LUNA. Luna is beloved by her puppy parents and lazily resides currently in Seattle, Washington.",
  breed: "Havanese",
  images: [
    "http://pets-images.dev-apis.com/pets/dog25.jpg",
    "http://pets-images.dev-apis.com/pets/dog26.jpg",
    "http://pets-images.dev-apis.com/pets/dog27.jpg",
  ],
};

export default function Detail(props) {
  return (
    <div>
      <Carousel mock={MOCKDATA} />
      <div>
        <h1>{MOCKDATA.name}</h1>
        <h2>
          {MOCKDATA.animal} - {MOCKDATA.breed} - {MOCKDATA.city},
          {MOCKDATA.state}
        </h2>
        <p>{MOCKDATA.description}</p>
      </div>
    </div>
  );
}
