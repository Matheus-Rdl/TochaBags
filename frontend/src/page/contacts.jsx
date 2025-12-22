import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Contacts() {
  //clip-path: polygon(0 24%, 19% 0, 89% 9%, 100% 54%, 86% 89%, 37% 100%, 4% 81%);

  const id = crypto.randomUUID();
  //console.log(id)
  
  return (
    <section className="section-contacts">
      <h1>Contatos</h1>

      <div className="flex">
        <div className="w-[60%] relative">
          <div className="w-full flex flex-col items-center">
            <h2 className="font-text text-1xl font-semibold">Localização:</h2>
            <p>Vila Sônia</p>
            <p>Rua Guanás, 566</p>
          </div>

          <img
            className="w-25 absolute z-1 left-0 top-0 -rotate-10"
            src="icon-mapa.png"
          />

          <div className="relative h-100 bg-green-800 [clip-path:polygon(0_24%,19%_0,89%_9%,100%_54%,86%_89%,37%_100%,4%_81%)]">
            <div className="relative mx-5 h-100 [clip-path:polygon(0_22%,15%_5%,89%_9%,100%_54%,86%_87.5%,40%_95%,5%_81%)]">
              <iframe
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14624.76769335495!2d-46.75193764424389!3d-23.59744891234026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce598dbcfcfc27%3A0x4d81ac1e2f4c9be5!2sTocha%20Bags!5e0!3m2!1spt-BR!2sbr!4v1736525358280!5m2!1spt-BR!2sbr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="w-[40%] flex flex-col items-center justify-center">
          <div>
            <h2 className="font-text text-1xl font-semibold text-center">
              Redes sociais:
            </h2>
            <p className="mb-5 text-center">Clique para saber mais!</p>
          </div>

          <div className="flex flex-col gap-10 w-full items-center">
            <div className="relative flex items-center justify-center h-20 w-[60%] max-w-[210px] cursor-pointer transform transition duration-400 ease-in-out hover:scale-110">
              <div className="absolute w-full h-full bg-amber-400 py-5 px-7 [clip-path:polygon(15%_0,0_100%,4%_100%,18%_7%,95%_20%,82%_90%,3%_94%,0_100%,85%_100%,100%_15%)]"></div>
              <div className="flex gap-1">
                <p className="text-blue-700 font-bold ">Facebook</p>
                <FaFacebookSquare className="w-7 h-7 text-blue-700" />
              </div>
            </div>

            <div className="relative flex items-center justify-center h-20 w-[60%] max-w-[210px] cursor-pointer transform transition duration-400 ease-in-out hover:scale-110">
              <div className="absolute w-full h-full bg-green-800 py-5 px-7 [clip-path:polygon(5%_0,5%_85%,11%_83%,10%_7%,95%_10%,90%_92%,5%_75%,5%_85%,95%_100%,100%_0)]"></div>
              <div className="flex gap-1 flex-row-reverse">
                <p className="text-center bg-gradient-to-r from-[#F58529] via-[#DD2A7B] via-[#8134AF] to-[#515BD4] bg-clip-text text-transparent inline-block font-bold">Instagram</p>
                <RiInstagramFill className="w-7 h-7 text-[#DD2A7B]" />
              </div>
            </div>

            <div className="relative flex items-center justify-center h-20 w-[60%] max-w-[210px] cursor-pointer transform transition duration-400 ease-in-out hover:scale-110">
              <div className="absolute w-full h-full bg-(--color-brown) py-5 px-7 [clip-path:polygon(0_15%,5%_100%,12%_98%,5%_21%,93%_13%,89%_81%,8%_95%,5%_100%,95%_87%,100%_0)]"></div>
              <div className="flex gap-1">
                <p className="text-center text-green-400 font-bold">WhatsApp</p>
                <IoLogoWhatsapp className="w-7 h-7 text-green-400" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
