export default function NavBar() {

  //Styles:
  const navItemClass = "text-1xl uppercase font-text font-semibold text-center"

  return (
    <div className="w-full absolute">
      <nav className="w-[70%] h-30 mx-[15%] -mt-40 bg-(--white-nav) rounded-full shadow-2xl flex justify-center items-center gap-10">
        <a className={navItemClass}>Home</a>
        <a className={navItemClass}>Nosso trabalho</a>
        <a className={navItemClass}>Bags</a>
        <a className={navItemClass}>Orçamento e pedidos</a>
        <a className={navItemClass}>Contatos</a>
      </nav>
    </div>
  );
}
