import { useState } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  AlertCircle,
  DollarSign,
  Award,
  Search,
  Home
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts'
import { politicos, promessas, orcamento, evolucaoGastos, kpis } from '../data/mockData'
import logoMove from '../assets/logo-move.png'

export function PainelTransparencia({ onNavigateToHome }) {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todas')
  const [selectedStatus, setSelectedStatus] = useState('todos')

  // Ordenar políticos por percentual de cumprimento
  const politicosRanked = [...politicos].sort((a, b) => b.percentualCumprimento - a.percentualCumprimento)

  // Filtrar promessas
  const promessasFiltradas = promessas.filter(promessa => {
    const matchSearch = promessa.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       promessa.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCategory = selectedCategory === 'todas' || promessa.categoria === selectedCategory
    const matchStatus = selectedStatus === 'todos' || promessa.status === selectedStatus
    return matchSearch && matchCategory && matchStatus
  })

  const getStatusBadge = (status) => {
    const statusConfig = {
      cumprida: { label: 'Cumprida', variant: 'default', className: 'bg-green-500 hover:bg-green-600' },
      em_andamento: { label: 'Em Andamento', variant: 'secondary', className: 'bg-blue-500 hover:bg-blue-600 text-white' },
      nao_iniciada: { label: 'Não Iniciada', variant: 'outline', className: 'bg-gray-400 hover:bg-gray-500 text-white' },
      descumprida: { label: 'Descumprida', variant: 'destructive', className: 'bg-red-500 hover:bg-red-600' }
    }
    const config = statusConfig[status] || statusConfig.nao_iniciada
    return <Badge className={config.className}>{config.label}</Badge>
  }

  const getStatusIcon = (status) => {
    switch(status) {
      case 'cumprida': return <CheckCircle2 className="w-5 h-5 text-green-500" />
      case 'em_andamento': return <Clock className="w-5 h-5 text-blue-500" />
      case 'nao_iniciada': return <AlertCircle className="w-5 h-5 text-gray-400" />
      case 'descumprida': return <XCircle className="w-5 h-5 text-red-500" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logoMove} alt="Move Congonhas" className="h-16 w-auto cursor-pointer" onClick={onNavigateToHome} />
              <div>
                <h1 className="text-2xl font-bold" style={{ color: 'var(--move-vermelho)' }}>
                  Painel de Transparência
                </h1>
                <p className="text-sm text-gray-600">Acompanhe o cumprimento das promessas políticas</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={onNavigateToHome}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Voltar ao Início
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="ranking" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Ranking
            </TabsTrigger>
            <TabsTrigger value="promessas" className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Promessas
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-l-4" style={{ borderLeftColor: 'var(--move-verde)' }}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Promessas Cumpridas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">{kpis.promessasCumpridas}</div>
                      <p className="text-xs text-gray-500">de {kpis.totalPromessas} promessas</p>
                    </div>
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <Progress value={kpis.percentualGeralCumprimento} className="mt-3" />
                  <p className="text-xs text-gray-600 mt-1">{kpis.percentualGeralCumprimento}% de cumprimento</p>
                </CardContent>
              </Card>

              <Card className="border-l-4" style={{ borderLeftColor: 'var(--move-amarelo)' }}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Em Andamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">{kpis.promessasEmAndamento}</div>
                      <p className="text-xs text-gray-500">promessas ativas</p>
                    </div>
                    <Clock className="w-10 h-10 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4" style={{ borderLeftColor: 'var(--move-vermelho)' }}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Orçamento Executado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">{kpis.percentualExecucaoOrcamento}%</div>
                      <p className="text-xs text-gray-500">R$ {(kpis.orcamentoExecutado / 1000000).toFixed(1)}M de R$ {(kpis.orcamentoTotal / 1000000).toFixed(1)}M</p>
                    </div>
                    <DollarSign className="w-10 h-10" style={{ color: 'var(--move-vermelho)' }} />
                  </div>
                  <Progress value={kpis.percentualExecucaoOrcamento} className="mt-3" />
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Índice de Transparência</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">{kpis.transparenciaScore}</div>
                      <p className="text-xs text-gray-500">de 10 pontos</p>
                    </div>
                    <TrendingUp className="w-10 h-10 text-purple-500" />
                  </div>
                  <Progress value={kpis.transparenciaScore * 10} className="mt-3" />
                </CardContent>
              </Card>
            </div>

            {/* Gráficos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Distribuição Orçamentária */}
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição Orçamentária por Área</CardTitle>
                  <CardDescription>Valores previstos vs. executados</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={orcamento}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="area" angle={-45} textAnchor="end" height={100} />
                      <YAxis />
                      <Tooltip formatter={(value) => `R$ ${(value / 1000000).toFixed(1)}M`} />
                      <Legend />
                      <Bar dataKey="valorPrevisto" fill="#A4D65E" name="Previsto" />
                      <Bar dataKey="valorExecutado" fill="#E8604C" name="Executado" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Evolução de Gastos */}
              <Card>
                <CardHeader>
                  <CardTitle>Evolução de Gastos Mensais</CardTitle>
                  <CardDescription>Principais áreas de investimento (em milhares)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={evolucaoGastos}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="mes" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="saude" stroke="#E8604C" strokeWidth={2} name="Saúde" />
                      <Line type="monotone" dataKey="educacao" stroke="#A4D65E" strokeWidth={2} name="Educação" />
                      <Line type="monotone" dataKey="infraestrutura" stroke="#F4C542" strokeWidth={2} name="Infraestrutura" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Status das Promessas */}
              <Card>
                <CardHeader>
                  <CardTitle>Status Geral das Promessas</CardTitle>
                  <CardDescription>Distribuição por status de cumprimento</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Cumpridas', value: kpis.promessasCumpridas, color: '#10B981' },
                          { name: 'Em Andamento', value: kpis.promessasEmAndamento, color: '#3B82F6' },
                          { name: 'Não Iniciadas', value: kpis.promessasNaoIniciadas, color: '#9CA3AF' },
                          { name: 'Descumpridas', value: kpis.promessasDescumpridas, color: '#EF4444' }
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {[
                          { color: '#10B981' },
                          { color: '#3B82F6' },
                          { color: '#9CA3AF' },
                          { color: '#EF4444' }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Execução Orçamentária */}
              <Card>
                <CardHeader>
                  <CardTitle>Execução Orçamentária por Área</CardTitle>
                  <CardDescription>Percentual de execução do orçamento previsto</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orcamento.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{item.area}</span>
                        <span className="text-sm text-gray-600">{item.percentualExecucao.toFixed(1)}%</span>
                      </div>
                      <Progress value={item.percentualExecucao} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Ranking Tab */}
          <TabsContent value="ranking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6" style={{ color: 'var(--move-amarelo)' }} />
                  Ranking de Cumprimento de Promessas
                </CardTitle>
                <CardDescription>
                  Políticos ordenados por percentual de promessas cumpridas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {politicosRanked.map((politico, index) => (
                    <div 
                      key={politico.id} 
                      className="flex items-center gap-4 p-4 bg-white border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                          style={{ 
                            backgroundColor: index === 0 ? '#F4C542' : index === 1 ? '#C0C0C0' : index === 2 ? '#CD7F32' : '#9CA3AF' 
                          }}
                        >
                          {index + 1}
                        </div>
                      </div>
                      
                      <img 
                        src={politico.foto} 
                        alt={politico.nome} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{politico.nome}</h3>
                        <p className="text-sm text-gray-600">{politico.cargo} - {politico.partido}</p>
                        <p className="text-xs text-gray-500">Mandato: {politico.mandato}</p>
                      </div>
                      
                      <div className="text-center px-6">
                        <div className="text-3xl font-bold" style={{ color: 'var(--move-verde)' }}>
                          {politico.percentualCumprimento}%
                        </div>
                        <p className="text-xs text-gray-500">de cumprimento</p>
                      </div>
                      
                      <div className="text-right space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span>{politico.promessasCumpridas} cumpridas</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span>{politico.promessasEmAndamento} em andamento</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <AlertCircle className="w-4 h-4 text-gray-400" />
                          <span>{politico.promessasNaoIniciadas} não iniciadas</span>
                        </div>
                        {politico.promessasDescumpridas > 0 && (
                          <div className="flex items-center gap-2 text-sm">
                            <XCircle className="w-4 h-4 text-red-500" />
                            <span>{politico.promessasDescumpridas} descumpridas</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Promessas Tab */}
          <TabsContent value="promessas" className="space-y-6">
            {/* Filtros */}
            <Card>
              <CardHeader>
                <CardTitle>Filtrar Promessas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar promessas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="todas">Todas as categorias</option>
                    <option value="Saúde">Saúde</option>
                    <option value="Educação">Educação</option>
                    <option value="Infraestrutura">Infraestrutura</option>
                    <option value="Meio Ambiente">Meio Ambiente</option>
                    <option value="Trabalho e Renda">Trabalho e Renda</option>
                    <option value="Lazer e Cultura">Lazer e Cultura</option>
                  </select>
                  
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="todos">Todos os status</option>
                    <option value="cumprida">Cumprida</option>
                    <option value="em_andamento">Em Andamento</option>
                    <option value="nao_iniciada">Não Iniciada</option>
                    <option value="descumprida">Descumprida</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Lista de Promessas */}
            <div className="grid grid-cols-1 gap-4">
              {promessasFiltradas.map((promessa) => {
                const politico = politicos.find(p => p.id === promessa.politicoId)
                return (
                  <Card key={promessa.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {getStatusIcon(promessa.status)}
                            <CardTitle className="text-xl">{promessa.titulo}</CardTitle>
                          </div>
                          <CardDescription>{promessa.descricao}</CardDescription>
                        </div>
                        {getStatusBadge(promessa.status)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span className="font-medium">{politico?.nome}</span>
                            <span className="text-gray-500">({politico?.cargo})</span>
                          </div>
                          <Badge variant="outline">{promessa.categoria}</Badge>
                        </div>
                        
                        {promessa.evidencias && promessa.evidencias.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Evidências:</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {promessa.evidencias.map((evidencia, idx) => (
                                <li key={idx} className="text-sm text-gray-600">{evidencia}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {promessa.atualizacoes && promessa.atualizacoes.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Últimas atualizações:</h4>
                            <div className="space-y-2">
                              {promessa.atualizacoes.slice(-2).reverse().map((atualizacao, idx) => (
                                <div key={idx} className="flex gap-2 text-sm">
                                  <span className="text-gray-500 font-medium">{atualizacao.data}:</span>
                                  <span className="text-gray-700">{atualizacao.texto}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {promessasFiltradas.length === 0 && (
              <Card>
                <CardContent className="py-12 text-center">
                  <AlertCircle className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">Nenhuma promessa encontrada com os filtros selecionados.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Move Congonhas</h3>
            <p className="text-gray-400 mb-4">Transformando nossa cidade juntos!</p>
            <p className="text-sm text-gray-500">© 2025 Move Congonhas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

