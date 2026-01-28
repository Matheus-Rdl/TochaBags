import { useState } from "react";
import CardBags from "../components/cardBags";
import DragScroll from "../components/dragScroll";
import bags from "../data/bags.json";
import CardBagsDetailed from "../components/cardBagsDetailed";

export default function Bags() {
  const [selectedBag, setSelectedBag] = useState(null);
  const cavacoBags = bags.filter((bag) => bag.type === "cavacos");

  const handleSelectBag = (bag) => {
    setSelectedBag(bag);
  };

  const handleCloseBag = () => {
    setSelectedBag(null);
  };

  //console.log(bags);

  return (
    <section className="section-bags">
      <h1>Nossas Bags</h1>

      <div className="flex flex-col gap-0 my-15">
        <div>
          <div className="relative mr-[30%]">
            <img
              className="w-[60%] [clip-path:polygon(0_0,90%_0,100%_100%,0_100%)]"
              src="percussion-img.png"
            />
            <div className="-z-1 bg-green-700 absolute -top-[5%] left-[70%] w-[30%] h-[80%] [clip-path:polygon(0_0,70%_0,100%_100%,15%_100%)]"></div>
            <div className="-z-1 bg-green-600 absolute top-[15%] left-[52.5%] w-[35%] h-[80%] [clip-path:polygon(0_0,85%_0,100%_100%,10%_100%)]"></div>
            <div className="-z-1 bg-green-500 absolute -top-[10%] left-[40%] w-[30%] h-[80%] [clip-path:polygon(0_0,80%_0,100%_100%,15%_100%)]"></div>
            <h2 className="absolute bottom-0 right-0 translate-y-0 translate-x-20 products-title">
              Percussão
            </h2>
          </div>

          <div className="w-full overflow-hidden my-2">
            <DragScroll step={200}>
              {cavacoBags.map((bag) => (
                <CardBags
                  key={bag.id}
                  bag={bag}
                  direction="right"
                  onSelect={handleSelectBag}
                />
              ))}
            </DragScroll>
          </div>
        </div>

        <div>
          <div className="relative ml-[30%]">
            <img
              className="w-[60%] [clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)] ml-[40%]"
              src="strings-img.png"
            />
            <div className="-z-1 bg-green-700 absolute top-[15%] right-[75%] w-[30%] h-[70%] [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)]"></div>
            <div className="-z-1 bg-green-600 absolute top-0 right-[60%] w-[30%] h-[65%] [clip-path:polygon(15%_0,100%_0,90%_100%,0_100%)]"></div>
            <div className="-z-1 bg-green-500 absolute top-[10%] right-[52.5%] w-[20%] h-full [clip-path:polygon(20%_0,100%_0,90%_100%,0_100%)]"></div>
            <h2 className="absolute top-0 left-0 translate-y-0 -translate-x-8 products-title">
              Cordas
            </h2>
          </div>

          <div className="w-full overflow-hidden my-2">
            <DragScroll step={200}>
              {cavacoBags.map((bag) => (
                <CardBags
                  key={bag.id}
                  bag={bag}
                  direction="right"
                  onSelect={handleSelectBag}
                />
              ))}
            </DragScroll>
          </div>
        </div>

        <div>
          <div className="relative mx-[12%]">
            <img
              className="w-[60%] [clip-path:polygon(10%_0,90%_0,100%_100%,0_100%)] mx-[20%]"
              src="percussion-img.png"
            />
            <div className="-z-1 bg-green-700 absolute top-[15%] -right-20 w-[40%] h-[65%] [clip-path:polygon(0_0,90%_0,100%_100%,15%_100%)]"></div>
            <div className="-z-1 bg-green-600 absolute -top-[5%] right-[5%] w-[30%] h-[70%] [clip-path:polygon(10%_0,90%_0,100%_100%,0_100%)]"></div>
            <div className="-z-1 bg-green-500 absolute top-[5%] right-[65%] w-[30%] h-[65%] [clip-path:polygon(15%_0,100%_0,90%_100%,0_100%)]"></div>
            <h2 className="absolute top-1/2 left-0 translate-y-16 translate-x-0 products-title">
              Bateria
            </h2>
          </div>

          <div className="w-full overflow-hidden my-2">
            {/*
            <DragScroll step={200}>
              {bags.map((bag) => (
                <CardBags
                  key={bag.id}
                  bag={bag}
                  direction="left"
                  onSelect={handleSelectBag}
                />
              ))}
            </DragScroll>
            */}
          </div>
        </div>

        <div>
          <div className="relative mr-[30%]">
            <img
              className="w-[60%] [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]"
              src="strings-img.png"
            />
            <div className="-z-1 bg-green-700 absolute top-[10%] left-[82.5%] w-[30%] h-[70%] [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)]"></div>
            <div className="-z-1 bg-green-600 absolute -top-[5%] left-[65%] w-[30%] h-[70%] [clip-path:polygon(10%_0,90%_0,100%_100%,0_100%)]"></div>
            <div className="-z-1 bg-green-500 absolute top-[10%] left-[50%] w-[30%] h-[80%] [clip-path:polygon(10%_0,100%_0,85%_100%,0_100%)]"></div>
            <h2 className="absolute top-0 right-0 -translate-y-2 translate-x-32 products-title">
              Acessórios
            </h2>
          </div>

          <div className="w-full overflow-hidden my-2">
            {/*
            <DragScroll step={200}>
              {bags.map((bag) => (
                <CardBags
                  key={bag.id}
                  bag={bag}
                  direction="left"
                  onSelect={handleSelectBag}
                />
              ))}
            </DragScroll>
            */}
          </div>
        </div>
      </div>

      <CardBagsDetailed
        bag={selectedBag}
        open={Boolean(selectedBag)}
        onClose={() => setSelectedBag(null)}
      />
    </section>
  );
}
