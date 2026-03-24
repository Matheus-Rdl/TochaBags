export default function Production() {
  //Styles:
  const productionSubTitle =
    "text-center font-bold text-1xl font-text bg-(--color-yellow) px-7 py-3";
  const productionSubTitleShadow =
    "absolute inset-0 bg-black translate-x-[6px] translate-y-[6px] -z-1";

  return (
    <section className="section">
      <h1>Nossa Produção</h1>

      <div className="flex flex-col gap-10">
        <div>
          <div className="relative w-fit mx-auto rotate-2 mb-5">
            <div className={`${productionSubTitleShadow}`}></div>
            <h2 className={productionSubTitle}>Composição</h2>
          </div>

          <div>
            <div className="bags-composition">
              <p className="text-center">
                Nossas bags são produzidas com materiais de alta qualidade e
                durabilidade, com duas opções de tecidos para revestimento
                externo. Tecido interno em pelúcia para evitar riscos ao
                instrumento, além de fornecer proteção extra durante transporte.
              </p>
            </div>

            <div className="flex gap-10">
              <div>
                <h2 className="text-center my-5">Tecido externo</h2>
                <div className="relative">
                  <img className="" src="bag-extern.png" />
                  <p className="absolute text-[12px] text-center">
                    Lona Capota Marítima - Lona Encerada (impermeável).
                  </p>
                  <p className="absolute text-[12px] text-center">
                    Nylon poliéster 1680 PVC.
                  </p>
                  <p className="absolute text-[12px] text-center">
                    Fundo emborrachado.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-center my-5">Tecido interno</h2>
                <div>
                  <img className="" src="bag-intern.png" />
                  <p className="absolute text-[12px] text-center">
                    Interior/Estrutura: Espuma Pack 15 ou 20mm; Placa EVA 6mm.
                  </p>
                  <p className="absolute text-[12px] text-center">Pelúcia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative w-fit mx-auto -rotate-2 mb-5">
            <div className={productionSubTitleShadow}></div>
            <h2 className={productionSubTitle}>Materiais</h2>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col items-center gap-5">
              <div className="h-[165px] [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)]">
                <img src="nylon.png" />
              </div>
              <p>Nylon poliéster 1680 PVC</p>
            </div>

            <div className="flex flex-col-reverse items-center gap-5">
              <div className="h-[165px] [clip-path:polygon(0%_0,90%_0,100%_100%,10%_100%)]">
                <img src="lona.png" />
              </div>
              <p>Lona capota marítima</p>
            </div>

            <div className="flex flex-col items-center gap-5">
              <div className="h-[165px] [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)]">
                <img src="pelucia.png" />
              </div>
              <p>Pelúcia</p>
            </div>
          </div>

          <p className="mt-7 text-center italic underline">
            Algumas cores tem varios tons, podendo escolher várias tonalidades.
          </p>
        </div>

        <div>
          <div className="relative w-fit mx-auto rotate-2 mb-5">
            <div className={productionSubTitleShadow}></div>
            <h2 className={productionSubTitle}>Personalizáveis</h2>
          </div>

          <div className="flex gap-5 justify-center">
            <div>
              <img src="p1.png" className="max-w-40 w-[100%]" />
              <p className="text-center">Bordados</p>
            </div>

            <div>
              <img src="p2.png" className="max-w-40 w-[100%]"  />
              <p className="text-center">Padrões ou desenhos</p>
            </div>

            <div>
              <img src="p3.png" className="max-w-40 w-[100%]"  />
              <p className="text-center">Rodinhas</p>
            </div>

            <div>
              <img className="rounded-full max-w-40 w-[100%]" src="p4.png" />
              <p className="text-center">Bags duplas ou triplas</p>
            </div>
          </div>
        </div>

        <div className="bags-customizable">
          <p className="text-center">
            Na TochaBags, tudo é personalizável, desde, o bordado, quanto a
            cores e modelos. è possivel adicionar itens, cores e
            padrões ou desenhos. Converse com nossa equipe e deixe a criatividade
            correr solta!
          </p>
        </div>
      </div>
    </section>
  );
}
