export default function CardBags({ bag, direction, onSelect }) {
  return (
    <>
      <div
        onClick={() => onSelect?.(bag)}
        className={`min-w-[75px] max-w-[125px] w-[20%] overflow-hidden cursor-pointer flex-shrink-0 ${
          direction === "right"
            ? "[clip-path:polygon(15%_0,100%_0,85%_100%,0_100%)]"
            : "[clip-path:polygon(0_0,85%_0,100%_100%,15%_100%)]"
        }`}
      >
        <img
          src={`bags/${bag?.type}/${bag?.id}/${bag?.images.main}`}
          className="w-full h-full object-cover scale-120 transition-transform duration-300 ease-in-out hover:scale-100"
          alt={bag?.name}
        />
      </div>
    </>
  );
}
