import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Button } from '@/components/ui/button'

export default async function Header() {
  const session = await getServerSession(authOptions)

  const adminLinks = [
    { href: '/caixa', label: 'Caixa', role: 'CAIXA' },
    { href: '/cozinha', label: 'Cozinha', role: 'COZINHEIRO' },
    { href: '/garcom/mesas', label: 'Mesas', role: 'GARCOM' },
  ]

  const filteredAdminLinks = adminLinks.filter(
    (link) => session?.user?.role === link.role,
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">DIVINO</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/cardapio"
              className="transition-colors hover:text-foreground/80"
            >
              Cardápio
            </Link>
            <Link
              href="/sobre"
              className="transition-colors hover:text-foreground/80"
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="transition-colors hover:text-foreground/80"
            >
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          {session?.user ? (
            <div className="flex items-center space-x-4">
              {filteredAdminLinks.map((link) => (
                <Button key={link.href} asChild variant="ghost">
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
              <Button asChild variant="ghost">
                <Link href="/perfil">Perfil</Link>
              </Button>
            </div>
          ) : (
            <Button asChild variant="ghost">
              <Link href="/login">Entrar</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
