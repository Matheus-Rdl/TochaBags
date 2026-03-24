export default function Bills() {
  return (
    <section className="section">
      <h1>Orçamento e pedidos</h1>
      <div className="flex ">

        <div className="-mx-1 w-[80%] bg-amber-400/40 [clip-path:polygon(0_0,92.5%_0,100%_100%,7.5%_100%)]">
          <img className="pl-[10%] pr-[13.5%] py-5 bg-amber-400" src="bills-1.png" />
          <p className="px-[15%] py-5 text-center">
            Por se tratar de uma bag personalizada, os orçamentos
            <strong> são feitos diretamente com nossas vendedoras</strong> e
            representantes, com contato direto com o artista, dependendo da
            quantidade, materiais e modelo.
          </p>
        </div>

        <div className="-mx-1 w-[80%] bg-green-700/40 [clip-path:polygon(0_0,92.5%_0,100%_100%,7.5%_100%)]">
          <img className="pl-[10%] pr-[13.5%] py-5 bg-green-700" src="bills-2.png" />
          <p className="px-[15%] py-5 text-center">
            Cada bag tem prazo médio de produção de
            <strong> 10 dias úteis, a depender da agenda.</strong> Em caso de
            urgência na produção da sua bag, temos uma taxa para adiantar seu
            pedido
          </p>
        </div>

        <div className="-mx-1 w-[80%] bg-(--color-brown)/40 [clip-path:polygon(0_0,92.5%_0,100%_100%,7.5%_100%)]">
          <img className="pl-[10%] pr-[13.5%] py-5 bg-(--color-brown)" src="bills-3.png" />
          <p className="px-[15%] py-5 text-center">
            O envio pode ser feito através dos correios
            <strong> Jadlog o melhor envio</strong>, bem como uber flash.
            Oferecemos também a opção de 
            <strong> retirar a bag em nosso atelier</strong>, você será muito bem
            vindo!
          </p>
        </div>
        
      </div>
    </section>
  );
}
