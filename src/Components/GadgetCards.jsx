import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const GadgetCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    if (category) {
      const filterByCategory = [...data].filter(
        (gadget) => gadget.category === category
      );
      setGadgets(filterByCategory);
    } else {
      setGadgets(data);
    }
  }, [category, data]);

  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-6">
      {gadgets.map((gadget) => (
        <Card key={gadget.product_id} gadget={gadget}></Card>
      ))}
    </div>
  );
};

export default GadgetCards;
