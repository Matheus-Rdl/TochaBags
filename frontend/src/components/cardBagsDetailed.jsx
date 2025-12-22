import { Dialog } from "@mui/material";
import { useState } from "react";

export default function CardBagsDetailed({ bag, open, onClose }) {
  if (!bag) return null;

  const basePath = `bags/${bag?.type}/${bag?.id}`;
  const [selectedBag, setSelectedBag] = useState(bag?.images.main);

  const handleSelectBag = (bagImg) => {
    setSelectedBag(bagImg);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <div className="p-6 flex gap-4 overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-center text-xl font-semibold">{bag?.name}</h2>

          <img
            src={`${basePath}/${selectedBag}`}
            alt={bag?.name}
            className="w-auto h-80  rounded"
          />
          <p className="max-w-60 text-center">
            {bag?.description} Lorem ipsum dolor sit, lorem ipsum dolor sit,
            lorem ipsum dolor sit, lorem ipsum dolor sit, lorem ipsum dolor sit,
            lorem ipsum dolor sit
          </p>
        </div>

        <div className="flex flex-col gap-2 overflow-x-auto">
          <img
            onClick={() => handleSelectBag(bag?.images.main)}
            src={`${basePath}/${bag?.images.main}`}
            className={`transition-opacity duration-600 ease-in-out w-24 h-34 object-cover cursor-pointer ${
              selectedBag === bag?.images.main && "opacity-50"
            }`}
          />
          {bag?.images.gallery.map((img, i) => (
            <img
              key={i}
              src={`${basePath}/${img}`}
              className={`transition-opacity duration-600 ease-in-out w-24 h-34 object-cover cursor-pointer ${
                selectedBag === img && "opacity-50"
              }`}
              onClick={() => handleSelectBag(img)}
            />
          ))}
        </div>
      </div>
    </Dialog>
  );
}
