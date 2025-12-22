export default function CardBags( {direction} ) {

  return (
    <div className={`min-w-[150px] max-w-[180px] h-full overflow-hidden cursor-pointer flex-shrink-0 ${direction === "right" ? "[clip-path:polygon(15%_0,100%_0,85%_100%,0_100%)]" : "[clip-path:polygon(0_0,85%_0,100%_100%,15%_100%)]"}`}>
      <div className="w-full h-full">
        <img
          src="bags/cavacos/58e19bf6-36ea-4113-8a02-50ebf63114a9/0.png"
          className="w-full h-full object-cover scale-120 transition-transform duration-300 ease-in-out hover:scale-100"
        />
      </div>
    </div>
  );
}
