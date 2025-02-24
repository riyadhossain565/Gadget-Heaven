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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gadgets.length ? (
        gadgets.map((gadget) => (
          <Card key={gadget.product_id} gadget={gadget}></Card>
        ))
      ) : (
        <p className="text-3xl">No Gadgets Found</p>
      )}
    </div>
  );
};

export default GadgetCards;
