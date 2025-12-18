export default function Header() {
  return (
    <div className="w-full h-137.5 relative">
      <div className="w-full h-full bg-green-700 [clip-path:polygon(0_0,100%_0,50%_65%,0%_90%)] absolute top-0"></div>
      <div className="w-full h-full bg-(--color-brown) [clip-path:polygon(30%_0,100%_0,100%_100%,30%_65%)] absolute top-0"></div>
      <div className="w-full h-full bg-yellow-300 [clip-path:polygon(75%_0,102.5%_0,95%_95%,75%_92%)] absolute top-0"></div>
      <div className="w-full h-full bg-(--color-orange) [clip-path:polygon(85%_0,100.5%_0,91%_84.5%,70%_80%)] absolute top-0"></div>
      <div className="w-full h-full bg-green-700 [clip-path:polygon(0_0,95%_0,90%_80%,0_60%)] absolute top-0"></div>
      <div className="w-full h-full bg-(--color-orange) [clip-path:polygon(0_0,75%_0,65%_85%,0_75%)] absolute top-0"></div>
      <div className="flex justify-center items-center absolute top-15 left-10">
        <div>
          <h1 className="font-title text-8xl mb-10 text-center">Tocha Bags</h1>
          <h2 className="font-title text-4xl text-center">
            O alfaiate dos seus instrumentos
          </h2>
        </div>
        <img src="logo-tocha-bags.png" className="w-40 h-40" />
      </div>
    </div>
  );
}
