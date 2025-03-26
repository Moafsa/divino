import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const featuredItems = [
    {
      name: "Xis da Casa",
      description: "Nosso carro-chefe! Um xis especial com hambúrguer artesanal, ovo, presunto, queijo, alface, tomate, milho, ervilha, maionese caseira e molho especial.",
      price: 32.90,
    },
    {
      name: "Xis Calabresa",
      description: "Delicioso xis com calabresa fatiada, queijo derretido, cebola grelhada, alface, tomate e maionese caseira.",
      price: 29.90,
    },
    {
      name: "Xis Bacon",
      description: "Xis com hambúrguer, bacon crocante, queijo, alface, tomate, milho, ervilha e maionese caseira.",
      price: 30.90,
    },
  ];

  return (
    <main className="flex-1">
      <section className="relative py-20 bg-gradient-to-r from-black via-yellow-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Divino Lanches</h1>
            <p className="text-xl mb-8">O melhor sabor de Flores da Cunha desde 2022</p>
            <Link href="/cardapio">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
                Ver Cardápio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Nossa História</h2>
          <div className="max-w-3xl mx-auto text-white">
            <p className="mb-6">
              Fundado em 2022, o Divino Lanches nasceu do sonho de trazer para Flores da Cunha uma experiência única em lanches artesanais. Com dedicação à qualidade dos ingredientes e um atendimento acolhedor, rapidamente nos tornamos referência na cidade.
            </p>
            <p className="mb-6">
              Nossa especialidade é o "Xis da Casa", preparado com ingredientes selecionados e nosso molho especial secreto, que conquistou o paladar dos nossos clientes e se tornou o carro-chefe da casa.
            </p>
            <p>
              Localizado no coração da cidade, na Avenida 25 de Julho, nosso estabelecimento é o lugar perfeito para saborear os melhores lanches da região, seja no local ou através do nosso delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black to-yellow-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Mais Pedidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div key={item.name} className="bg-black p-6 rounded-lg shadow-lg border border-yellow-400">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">{item.name}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <p className="text-white font-bold">R$ {item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Faça seu pedido</h2>
          <p className="text-xl text-white mb-8">
            Delivery ou retirada no balcão
            <br />
            <span className="font-bold">Telefone: (54) 3771-6480</span>
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size="lg" className="bg-black text-yellow-400 hover:bg-gray-900">
              Delivery
            </Button>
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
              Ver Cardápio
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}