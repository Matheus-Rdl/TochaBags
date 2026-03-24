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

  //Styles:
  const bagsSubTitle =
    "text-center font-bold text-1xl font-text bg-(--color-yellow) px-7 py-3";
  const bagsSubTitleShadow =
    "absolute inset-0 bg-black translate-x-[6px] translate-y-[6px] -z-1";

  return (
    <section className="section-bags">
      <h1>Nossas Bags</h1>


      <div className="flex flex-col gap-10 my-15">

        {/* QUADRO 1 */}
        <div>
          <div className="relative mr-[30%]">
            <div className="flex flex-col">
              <div className="z-10 absolute -mt-10 rotate-1 left-1/2  -translate-x-1/2">
                <div className={bagsSubTitleShadow}></div>
                <h2 className={bagsSubTitle}>Percussão</h2>
              </div>
              <img
                className="w-[50%] [clip-path:polygon(0_0,90%_0,100%_100%,0_100%)]"
                src="percussion-img.png"
              />
              <div className="-z-1 bg-green-700 absolute -top-[10%] left-[70%] w-[25%] h-[75%] [clip-path:polygon(0_0,70%_0,100%_100%,15%_100%)]"></div>
              <div className="-z-1 bg-green-600 absolute top-[15%] left-[52.5%] w-[30%] h-[75%] [clip-path:polygon(0_0,85%_0,100%_100%,10%_100%)]"></div>
              <div className="-z-1 bg-green-500 absolute -top-[5%] left-[40%] w-[25%] h-[75%] [clip-path:polygon(0_0,80%_0,100%_100%,15%_100%)]"></div>
            </div>
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

        {/* QUADRO 2 */}
        <div>
          <div className="relative ml-[30%]">
            <div className="z-10 absolute -mt-5 -rotate-1 left-1/2  -translate-x-1/2">
              <div className={bagsSubTitleShadow}></div>
              <h2 className={bagsSubTitle}>Cordas</h2>
            </div>
            <img
              className="w-[50%] [clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)] ml-[50%]"
              src="strings-img.png"
            />
            <div className="-z-1 bg-green-700 absolute top-[25%] right-[65%] w-[25%] h-[65%] [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)]"></div>
            <div className="-z-1 bg-green-600 absolute top-[5%] right-[50%] w-[25%] h-[60%] [clip-path:polygon(15%_0,100%_0,90%_100%,0_100%)]"></div>
            <div className="-z-1 bg-green-500 absolute top-[25%] right-[45%] w-[17.5%] h-[80%] [clip-path:polygon(20%_0,100%_0,90%_100%,0_100%)]"></div>
          </div>

          <div className="w-full overflow-hidden my-2">
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
          </div>
        </div>

        {/* QUADRO 3 */}
        <div>
          <div className="relative mx-[12%]">
            <div className="z-10 absolute -mt-10 rotate-1 left-1/2  -translate-x-1/2">
              <div className={bagsSubTitleShadow}></div>
              <h2 className={bagsSubTitle}>Bateria</h2>
            </div>
            <img
              className="w-[50%] [clip-path:polygon(10%_0,90%_0,100%_100%,0_100%)] mx-[20%]"
              src="percussion-img.png"
            />
            <div className="-z-1 bg-green-700 absolute top-[30%] right-[10%] w-[30%] h-[60%] [clip-path:polygon(0_0,90%_0,100%_100%,15%_100%)]"></div>
            <div className="-z-1 bg-green-600 absolute -top-[10%] right-[20%] w-[25%] h-[65%] [clip-path:polygon(10%_0,90%_0,100%_100%,0_100%)]"></div>
            <div className="-z-1 bg-green-500 absolute top-[5%] right-[65%] w-[25%] h-[60%] [clip-path:polygon(15%_0,100%_0,90%_100%,0_100%)]"></div>
          </div>

          <div className="w-full overflow-hidden my-2">
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
          </div>
        </div>

        {/* QUADRO 4 */}
        <div>
          <div className="relative mr-[30%]">
            <div className="z-10 absolute -mt-10 -rotate-1 left-1/2  -translate-x-1/2">
              <div className={bagsSubTitleShadow}></div>
              <h2 className={bagsSubTitle}>Sopro</h2>
            </div>
            <img
              className="w-[50%] [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]"
              src="strings-img.png"
            />
            <div className="-z-1 bg-green-700 absolute top-[25%] left-[65%] w-[25%] h-[70%] [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)]"></div>
            <div className="-z-1 bg-green-600 absolute -top-[10%] left-[55%] w-[25%] h-[70%] [clip-path:polygon(10%_0,90%_0,100%_100%,0_100%)]"></div>
            <div className="-z-1 bg-green-500 absolute top-[10%] left-[40%] w-[25%] h-[80%] [clip-path:polygon(10%_0,100%_0,85%_100%,0_100%)]"></div>
          </div>

          <div className="w-full overflow-hidden my-2">
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
