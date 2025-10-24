import { ArrowRight, Heart, Users, Lightbulb, MessageCircle, Leaf, History, Sparkles, Mail, Phone, Instagram, Home, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import logoMove from '../assets/logo-move.png'

export function LandingPage({ onNavigateToPainel }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoMove} alt="Move Congonhas" className="h-12 w-auto" />
              <span className="text-xl font-bold" style={{ color: 'var(--move-vermelho)' }}>
                MOVE CONGONHAS
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-[#E8604C] transition-colors font-medium">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-[#E8604C] transition-colors font-medium">
                Sobre Nós
              </button>
              <button onClick={() => scrollToSection('bandeiras')} className="text-gray-700 hover:text-[#E8604C] transition-colors font-medium">
                Bandeiras
              </button>
              <button onClick={() => scrollToSection('publicacoes')} className="text-gray-700 hover:text-[#E8604C] transition-colors font-medium">
                Publicações
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-[#E8604C] transition-colors font-medium">
                Contato
              </button>
              <Button 
                onClick={onNavigateToPainel}
                className="bg-[#E8604C] hover:bg-[#d55440] text-white"
              >
                Painel de Transparência
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-[#1E3A5F] to-[#2B7A9B] text-white pt-30 pb-23">
        {/**/}

      {/* <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-[#2B7A9B] via-[#1A9B8E] to-[#1E3A5F] text-white pt-32 pb-20"> */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#A4D65E] via-[#1A9B8E] to-[#2B7A9B] rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img src={logoMove} alt="Move Congonhas" className="relative h-48 w-auto drop-shadow-2xl" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold animate-fade-in">
              MOVE CONGONHAS
            </h1>
            
            <p className="text-2xl lg:text-3xl font-medium bg-[#F4C542] text-[#1E3A5F] px-6 py-3 rounded-full animate-fade-in-up">
              Transformando nossa cidade juntos!
            </p>
            
            <p className="text-xl max-w-3xl leading-relaxed animate-fade-in-up animation-delay-200">
              Um movimento suprapartidário idealizado por jovens congonhenses que acreditam na força da comunidade para transformar a cidade
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-white text-lg px-8 py-6 rounded-full"
                onClick={() => scrollToSection('sobre')}
              >
                Conheça o Movimento
              </Button>
              <Button 
                size="lg" 
                className="bg-[#E8604C] hover:bg-[#d55440] text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
                onClick={onNavigateToPainel}
              >
                Acessar Painel de Transparência (Protótipo)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--move-azul-escuro)' }}>
              Sobre Nós
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8 lg:p-12">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  O <strong>MOVE Congonhas</strong> é um movimento suprapartidário, idealizado por jovens congonhenses que acreditam na 
                  força da comunidade para transformar a cidade. Nosso trabalho se concentra no <strong>diálogo</strong>, 
                  na <strong>formação</strong> e na <strong>mobilização social</strong>, sempre com o propósito de construir 
                  soluções coletivas que tornem Congonhas mais justa, inovadora e conectada.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Acreditamos que a transformação da nossa cidade passa necessariamente pelo engajamento cidadão, pela 
                  valorização da nossa história e cultura, e pelo compromisso com um futuro sustentável para as próximas gerações.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold" style={{ color: 'var(--move-azul-escuro)' }}>
              Nossos Pilares
            </h3>
            <p className="text-xl text-gray-600 mt-4">
              Trabalhamos com diálogo, formação e mobilização social para construir soluções coletivas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-t-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ borderTopColor: 'var(--move-verde)' }}>
              <CardHeader>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--move-verde)' }}>
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Inovação com propósito</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Buscamos soluções criativas e inovadoras que atendam às necessidades reais da nossa comunidade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-t-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ borderTopColor: 'var(--move-vermelho)' }}>
              <CardHeader>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--move-vermelho)' }}>
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Colaboração e transparência</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Promovemos a participação cidadã e a transparência em todas as nossas ações e decisões.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-t-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ borderTopColor: 'var(--move-amarelo)' }}>
              <CardHeader>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--move-amarelo)' }}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Mobilização e engajamento social</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Engajamos a comunidade para construir coletivamente o futuro que queremos para Congonhas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-t-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ borderTopColor: 'var(--move-azul-claro)' }}>
              <CardHeader>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--move-azul-claro)' }}>
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Diálogo e escuta ativa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Valorizamos o diálogo aberto e a escuta ativa de todas as vozes da nossa comunidade.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bandeiras */}
      <section id="bandeiras" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--move-azul-escuro)' }}>
              Nossas Bandeiras
            </h2>
            <p className="text-xl text-gray-600">
              Temas que guiam nossas ações e mobilizações
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: 'var(--move-turquesa)' }}>
                  <Home className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-center">História & Memória</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Para o MOVE Congonhas, trabalhar com história e memória significa muito mais do que preservar monumentos ou conservar a materialidade do nosso patrimônio. Trata-se de compreender que cada pedra, cada obra de arte e cada tradição carregam consigo a essência da identidade congonhense, formada por séculos de fé, cultura e resistência.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  É criar pontes entre a riqueza cultural herdada do passado e as <strong>urgências do presente</strong>, permitindo que a memória coletiva seja fonte de inspiração e aprendizado para novas gerações.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: 'var(--move-verde)' }}>
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-center">Meio Ambiente & Sustentabilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Para o MOVE Congonhas, pensar em meio ambiente e sustentabilidade é assumir um compromisso ético com o presente e, sobretudo, com as gerações futuras. Congonhas é uma cidade marcada pela força da atividade mineradora, que por séculos tem desempenhado papel central em sua economia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Contudo, sabemos que essa mesma atividade gera <strong>impactos profundos no território</strong>, no modo de vida das comunidades e no equilíbrio ecológico da região. Sustentabilidade não pode ser vista como um discurso distante, mas como uma prática diária.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: 'var(--move-amarelo)' }}>
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-center">Juventude</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  No contexto de nossa cidade, a juventude representa não apenas o futuro, mas também o presente ativo da transformação social e política. Para o MOVE Congonhas, os jovens são agentes de mudança capazes de articular conhecimento, criatividade e senso crítico para enfrentar os desafios locais e propor soluções inovadoras.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A juventude congonhense, quando devidamente capacitada e encorajada, torna-se <strong>ponte entre passado e futuro</strong>: preserva a memória da cidade, honra suas tradições, mas também se dispõe a reinterpretar a identidade local.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publicações */}
      <section id="publicacoes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--move-azul-escuro)' }}>
              Publicações e Posts
            </h2>
            <p className="text-xl text-gray-600">
              Acompanhe nossas análises, artigos e atualizações sobre os debates políticos em Congonhas
            </p>
          </div>

          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">Em breve, publicaremos conteúdos sobre os temas que movem nossa cidade.</p>
            <Button 
              onClick={onNavigateToPainel}
              className="bg-[#E8604C] hover:bg-[#d55440] text-white"
            >
              Enquanto isso, conheça nosso Painel de Transparência
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#2B7A9B] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Faça Parte da Transformação
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a nós na construção de uma Congonhas mais justa, inovadora e conectada
          </p>
          <Button 
            size="lg" 
            className="bg-[#F4C542] hover:bg-[#e5b63a] text-[#1E3A5F] text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all font-bold"
            onClick={onNavigateToPainel}
          >
            Conheça o Painel de Transparência
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--move-azul-escuro)' }}>
                Entre em Contato
              </h2>
              <p className="text-xl text-gray-600">
                Estamos prontos para ouvir você
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: 'var(--move-verde)' }}>
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Telefone</h3>
                  <a href="tel:+5531996637708" className="text-gray-600 hover:text-[#2B7A9B] transition-colors">
                    (31) 99663-7708
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: 'var(--move-vermelho)' }}>
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:movcongonhas@gmail.com" className="text-gray-600 hover:text-[#2B7A9B] transition-colors">
                    movcongonhas@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: 'var(--move-amarelo)' }}>
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Instagram</h3>
                  <a 
                    href="https://instagram.com/move.congonhas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#2B7A9B] transition-colors"
                  >
                    @move.congonhas
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src={logoMove} alt="Move Congonhas" className="h-12 w-auto" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Move Congonhas</h3>
            <p className="text-gray-400 mb-6">Transformando nossa cidade juntos!</p>
            <p className="text-sm text-gray-500">© 2025 Move Congonhas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

