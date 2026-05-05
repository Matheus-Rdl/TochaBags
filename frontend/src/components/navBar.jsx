import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navItemClass =
    "text-sm uppercase font-text font-semibold text-center cursor-pointer";

  return (
    <div className="w-full absolute">

      <nav
        className={`bg-(--white-nav) rounded-full shadow-2xl px-4 py-3 flex items-center justify-center
        fixed z-1000 top-4 right-4 z-50
        ${open ? "w-12" : "w-12"}
        md:static md:mx-auto md:w-[80%] md:-mt-30`}
      >

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6 lg:gap-10">
          <a className={navItemClass}>Home</a>
          <a className={navItemClass}>Nosso trabalho</a>
          <a className={navItemClass}>Bags</a>
          <a className={navItemClass}>Orçamento</a>
          <a className={navItemClass}>Contatos</a>
        </div>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {open && (
        <div className="fixed z-999 md:hidden w-[90%] mx-[5%] top-10 bg-(--white-nav) rounded-2xl shadow-xl flex flex-col items-center gap-4 py-5">
          <a className={navItemClass}>Home</a>
          <a className={navItemClass}>Nosso trabalho</a>
          <a className={navItemClass}>Bags</a>
          <a className={navItemClass}>Orçamento</a>
          <a className={navItemClass}>Contatos</a>
        </div>
      )}
    </div>
  );
}