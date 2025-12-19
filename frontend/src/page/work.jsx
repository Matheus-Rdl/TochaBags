export default function Work() {
  return (
    <section className="section">
      <h1>Nosso trabalho</h1>
      <p className="text-center w-[70%] mx-[15%] mb-5">
        Sabemos que cada instrumento possui suas particularidades, assim como
        cada músico tem seu estilo e suas necessidades. Por isso, na Tocha Bags,
        cada peça é criada em colaboração com o cliente, levando em
        consideração:
      </p>
      <div className="flex justify-center items-center">
        <div className="w-[50%] flex justify-center items-center flex-col indent-5">
          <p>
            <strong>O instrumento:</strong> Bags sob medida para diversos instrumentos, como guitarras, baixos, violões, teclados, baterias, instrumentos de sopro e muito mais.
          </p>
          <p>
            <strong>A proteção:</strong> Utilizamos materiais de alta qualidade e técnicas de confecção que garantem a segurança do seu instrumento, protegendo-o de impactos, umidade e variações de temperatura.
          </p>
          <p>
            <strong>O estilo:</strong> Do clássico ao moderno, do minimalista ao extravagante, personalizamos cada detalhe para que sua bag reflita sua personalidade e seu estilo musical.
          </p>
          <p>
            <strong> A praticidade:</strong> Compartimentos inteligentes, alças confortáveis e acessório funcionais tornam sua bag uma aliada no transporte e organização do seu equipamento."
          </p>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src="logo-tocha-bags.png" className="w-40 h-40" />
        </div>
      </div>
    </section>
  );
}
