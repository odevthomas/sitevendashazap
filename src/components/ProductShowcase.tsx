interface Product {
  title: string;
  desc: string;
  img: string;
  link: string;
}

const products: Product[] = [
  {
    title: "Processadores",
    desc: "Escolha o cérebro da sua máquina. Com as melhores opções da Intel e AMD, você garante velocidade e eficiência para qualquer tarefa.",
    img: "/imgs/processador.png",
    link: "https://wa.me/5519993261388?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20processadores,%20por%20favor.",
  },
  {
    title: "Placas-mãe",
    desc: "Compatibilidade total e upgrade garantido. Nossas placas-mãe oferecem estabilidade, conectividade e suporte para os processadores mais atuais.",
    img: "/imgs/placamae.png",
    link: "https://wa.me/5519993261388?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20placas-mãe,%20por%20favor.",
  },
  {
    title: "Placas de vídeo",
    desc: "Desempenho gráfico de última geração para jogos AAA, renderizações, edição de vídeo e projetos em 3D. RTX e Radeon com garantia e suporte.",
    img: "/imgs/placadevideo.png",
    link: "https://wa.me/5519993261388?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20placas%20de%20vídeo,%20por%20favor.",
  },
  {
    title: "Acessórios Gamer",
    desc: "Teclados mecânicos, mouses com alta precisão, headsets com som imersivo e cadeiras ergonômicas. Tudo para melhorar sua gameplay.",
    img: "/imgs/acessorios.png",
    link: "https://wa.me/5519993261388?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20acessórios%20gamer,%20por%20favor.",
  },
];

const ProductShowcase = () => {
  return (
    <div className="mt-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Não encontrou o que procura?
        </h3>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Montamos o PC dos seus sonhos sob medida com os melhores componentes do mercado.
          Fale com nossos especialistas e tenha uma máquina pronta para jogos, trabalho ou estudos intensivos.
        </p>
      </div>

      <div className="space-y-16">
        {products.map((product, idx) => (
          <a
            key={idx}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col lg:flex-row ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } bg-gradient-to-r from-orange-700/90 to-orange-800/90 hover:from-orange-800 hover:to-orange-900 
            backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl overflow-hidden 
            transition-all duration-500 transform hover:scale-[1.02] hover:shadow-orange-500/20`}
          >
            {/* Imagem */}
            <div className="lg:w-1/2 w-full relative overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Conteúdo */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center p-8 lg:p-12">
              <h4 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-orange-200 transition-colors duration-300">
                {product.title}
              </h4>
              <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                {product.desc}
              </p>

              <div
                className="inline-flex items-center justify-center text-white font-semibold 
                bg-gradient-to-r from-green-500 to-green-700 
                hover:from-green-600 hover:to-green-800 
                px-6 py-3 rounded-full border-2 border-green-400 
                shadow-2xl transition-all duration-300 group-hover:scale-105 w-fit"
              >
                Fale com um especialista agora
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
