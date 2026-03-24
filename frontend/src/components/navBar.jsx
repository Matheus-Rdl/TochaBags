export default function NavBar() {

  //Styles:
  const navItemClass = "text-sm uppercase font-text font-semibold text-center"

  return (
    <div className="w-full absolute">
      <nav className="w-[80%] h-22 mx-[10%] -mt-35 bg-(--white-nav) rounded-full shadow-2xl flex justify-center items-center gap-10">
        <a className={navItemClass}>Home</a>
        <a className={navItemClass}>Nosso trabalho</a>
        <a className={navItemClass}>Bags</a>
        <a className={navItemClass}>Orçamento e pedidos</a>
        <a className={navItemClass}>Contatos</a>
      </nav>
    </div>
  );
}
