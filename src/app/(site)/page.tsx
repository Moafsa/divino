import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-red-700 to-red-900 flex items-center justify-center text-white">
        <div className="container mx-auto text-center z-10">
          <h1 className="text-5xl font-bold mb-6">Divino Ristorante</h1>
          <p className="text-xl mb-8">Autêntica culinária italiana em um ambiente acolhedor</p>
          <div className="space-x-4">
            <Button asChild variant="secondary" size="lg">
              <Link href="/cardapio">Ver Cardápio</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/reservas">Fazer Reserva</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Destaques do Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-br from-red-100 to-red-200" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-red-600 font-bold">R$ {item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Mais Pedidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {popularItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-40 bg-gradient-to-br from-red-50 to-red-100" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-red-600 font-bold">R$ {item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <p className="text-gray-600 mb-8">
              Há mais de 20 anos servindo a autêntica culinária italiana em Flores da Cunha.
              Nosso compromisso é proporcionar uma experiência gastronômica única, combinando
              receitas tradicionais com ingredientes de alta qualidade.
            </p>
            <Button asChild variant="outline">
              <Link href="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const featuredItems = [
  {
    id: 1,
    name: 'Spaghetti alla Carbonara',
    description: 'Massa fresca com molho cremoso de ovos, queijo pecorino e guanciale',
    price: 48.90,
  },
  {
    id: 2,
    name: 'Ossobuco alla Milanese',
    description: 'Ossobuco de vitela cozido lentamente com legumes e ervas',
    price: 89.90,
  },
  {
    id: 3,
    name: 'Risotto ai Funghi',
    description: 'Risoto cremoso com mix de cogumelos frescos e parmesão',
    price: 62.90,
  },
]

const popularItems = [
  {
    id: 1,
    name: 'Bruschetta al Pomodoro',
    price: 28.90,
  },
  {
    id: 2,
    name: 'Pizza Margherita',
    price: 49.90,
  },
  {
    id: 3,
    name: 'Tiramisù',
    price: 24.90,
  },
  {
    id: 4,
    name: 'Lasagna alla Bolognese',
    price: 54.90,
  },
]
