import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">DIVINO</h3>
            <p className="text-sm text-muted-foreground">
              Autêntica culinária italiana em Flores da Cunha
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/cardapio"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Cardápio
                </Link>
              </li>
              <li>
                <Link
                  href="/reservas"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Reservas
                </Link>
              </li>
              <li>
                <Link
                  href="/eventos"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sobre"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/trabalhe-conosco"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Rua Principal, 123</li>
              <li>Flores da Cunha - RS</li>
              <li>Tel: (54) 3292-1234</li>
              <li>contato@divinoristorante.com.br</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 Divino Ristorante. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
