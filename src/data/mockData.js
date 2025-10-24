// Dados mockados para o Painel de Transparência - Move Congonhas

export const politicos = [
  {
    id: 1,
    nome: "Maria Silva",
    cargo: "Prefeita",
    partido: "Partido A",
    foto: "https://ui-avatars.com/api/?name=Maria+Silva&background=E8604C&color=fff&size=200",
    mandato: "2021-2024",
    totalPromessas: 25,
    promessasCumpridas: 18,
    promessasEmAndamento: 5,
    promessasNaoIniciadas: 1,
    promessasDescumpridas: 1,
    percentualCumprimento: 72
  },
  {
    id: 2,
    nome: "João Santos",
    cargo: "Vereador",
    partido: "Partido B",
    foto: "https://ui-avatars.com/api/?name=Joao+Santos&background=A4D65E&color=fff&size=200",
    mandato: "2021-2024",
    totalPromessas: 15,
    promessasCumpridas: 10,
    promessasEmAndamento: 3,
    promessasNaoIniciadas: 2,
    promessasDescumpridas: 0,
    percentualCumprimento: 67
  },
  {
    id: 3,
    nome: "Ana Costa",
    cargo: "Vereadora",
    partido: "Partido C",
    foto: "https://ui-avatars.com/api/?name=Ana+Costa&background=F4C542&color=fff&size=200",
    mandato: "2021-2024",
    totalPromessas: 20,
    promessasCumpridas: 16,
    promessasEmAndamento: 3,
    promessasNaoIniciadas: 0,
    promessasDescumpridas: 1,
    percentualCumprimento: 80
  },
  {
    id: 4,
    nome: "Carlos Oliveira",
    cargo: "Vereador",
    partido: "Partido D",
    foto: "https://ui-avatars.com/api/?name=Carlos+Oliveira&background=E8604C&color=fff&size=200",
    mandato: "2021-2024",
    totalPromessas: 18,
    promessasCumpridas: 8,
    promessasEmAndamento: 6,
    promessasNaoIniciadas: 3,
    promessasDescumpridas: 1,
    percentualCumprimento: 44
  },
  {
    id: 5,
    nome: "Paula Mendes",
    cargo: "Vereadora",
    partido: "Partido E",
    foto: "https://ui-avatars.com/api/?name=Paula+Mendes&background=A4D65E&color=fff&size=200",
    mandato: "2021-2024",
    totalPromessas: 22,
    promessasCumpridas: 19,
    promessasEmAndamento: 2,
    promessasNaoIniciadas: 0,
    promessasDescumpridas: 1,
    percentualCumprimento: 86
  }
];

export const promessas = [
  {
    id: 1,
    politicoId: 1,
    titulo: "Construir 3 novas Unidades Básicas de Saúde",
    descricao: "Ampliar o acesso à saúde pública com a construção de três UBS nos bairros periféricos.",
    categoria: "Saúde",
    status: "cumprida",
    dataCriacao: "2021-01-15",
    prazo: "2023-12-31",
    evidencias: ["Inauguração UBS Bairro Norte", "Inauguração UBS Bairro Sul", "Inauguração UBS Centro"],
    atualizacoes: [
      { data: "2021-06-01", texto: "Projeto aprovado pela câmara" },
      { data: "2022-03-15", texto: "Início das obras da primeira UBS" },
      { data: "2023-11-20", texto: "Todas as UBS inauguradas" }
    ]
  },
  {
    id: 2,
    politicoId: 1,
    titulo: "Asfaltar 50km de ruas não pavimentadas",
    descricao: "Programa de pavimentação asfáltica para melhorar a mobilidade urbana.",
    categoria: "Infraestrutura",
    status: "em_andamento",
    dataCriacao: "2021-01-15",
    prazo: "2024-12-31",
    evidencias: ["35km já asfaltados"],
    atualizacoes: [
      { data: "2021-08-01", texto: "Licitação concluída" },
      { data: "2022-01-10", texto: "Início das obras" },
      { data: "2023-12-01", texto: "70% da meta atingida" }
    ]
  },
  {
    id: 3,
    politicoId: 2,
    titulo: "Criar programa de capacitação profissional",
    descricao: "Oferecer cursos gratuitos de capacitação para jovens e desempregados.",
    categoria: "Trabalho e Renda",
    status: "cumprida",
    dataCriacao: "2021-02-01",
    prazo: "2022-12-31",
    evidencias: ["500 pessoas capacitadas em 2022", "800 pessoas capacitadas em 2023"],
    atualizacoes: [
      { data: "2021-09-01", texto: "Parcerias firmadas com SENAI e SENAC" },
      { data: "2022-03-01", texto: "Primeira turma iniciada" },
      { data: "2022-12-15", texto: "Meta superada" }
    ]
  },
  {
    id: 4,
    politicoId: 3,
    titulo: "Implementar coleta seletiva em toda cidade",
    descricao: "Expandir o programa de coleta seletiva para 100% dos bairros.",
    categoria: "Meio Ambiente",
    status: "cumprida",
    dataCriacao: "2021-02-15",
    prazo: "2023-06-30",
    evidencias: ["Coleta seletiva em 100% dos bairros desde julho/2023"],
    atualizacoes: [
      { data: "2021-10-01", texto: "Compra de novos caminhões" },
      { data: "2022-06-01", texto: "Cobertura de 60% da cidade" },
      { data: "2023-07-01", texto: "100% de cobertura alcançada" }
    ]
  },
  {
    id: 5,
    politicoId: 4,
    titulo: "Aumentar vagas em creches municipais",
    descricao: "Criar 500 novas vagas em creches para atender a demanda reprimida.",
    categoria: "Educação",
    status: "em_andamento",
    dataCriacao: "2021-03-01",
    prazo: "2024-06-30",
    evidencias: ["300 vagas criadas até agora"],
    atualizacoes: [
      { data: "2022-01-15", texto: "Construção de 2 novas creches iniciada" },
      { data: "2023-08-01", texto: "Primeira creche inaugurada com 150 vagas" },
      { data: "2024-01-10", texto: "Segunda creche inaugurada com 150 vagas" }
    ]
  },
  {
    id: 6,
    politicoId: 5,
    titulo: "Revitalizar praças públicas",
    descricao: "Reformar e modernizar 10 praças da cidade.",
    categoria: "Lazer e Cultura",
    status: "cumprida",
    dataCriacao: "2021-03-15",
    prazo: "2023-12-31",
    evidencias: ["12 praças revitalizadas"],
    atualizacoes: [
      { data: "2021-11-01", texto: "Projeto paisagístico aprovado" },
      { data: "2022-05-01", texto: "5 praças concluídas" },
      { data: "2023-11-30", texto: "Meta superada: 12 praças revitalizadas" }
    ]
  }
];

export const orcamento = [
  {
    area: "Saúde",
    valorPrevisto: 15000000,
    valorExecutado: 14200000,
    percentualExecucao: 94.7,
    cor: "#E8604C"
  },
  {
    area: "Educação",
    valorPrevisto: 18000000,
    valorExecutado: 17500000,
    percentualExecucao: 97.2,
    cor: "#A4D65E"
  },
  {
    area: "Infraestrutura",
    valorPrevisto: 12000000,
    valorExecutado: 10800000,
    percentualExecucao: 90.0,
    cor: "#F4C542"
  },
  {
    area: "Segurança",
    valorPrevisto: 8000000,
    valorExecutado: 7600000,
    percentualExecucao: 95.0,
    cor: "#6B7280"
  },
  {
    area: "Cultura e Lazer",
    valorPrevisto: 5000000,
    valorExecutado: 4800000,
    percentualExecucao: 96.0,
    cor: "#8B5CF6"
  },
  {
    area: "Assistência Social",
    valorPrevisto: 7000000,
    valorExecutado: 6900000,
    percentualExecucao: 98.6,
    cor: "#EC4899"
  }
];

export const evolucaoGastos = [
  { mes: "Jan", saude: 1200, educacao: 1500, infraestrutura: 900 },
  { mes: "Fev", saude: 1300, educacao: 1450, infraestrutura: 950 },
  { mes: "Mar", saude: 1250, educacao: 1600, infraestrutura: 1000 },
  { mes: "Abr", saude: 1400, educacao: 1550, infraestrutura: 1100 },
  { mes: "Mai", saude: 1350, educacao: 1500, infraestrutura: 1050 },
  { mes: "Jun", saude: 1450, educacao: 1650, infraestrutura: 1200 },
  { mes: "Jul", saude: 1500, educacao: 1700, infraestrutura: 1150 },
  { mes: "Ago", saude: 1400, educacao: 1600, infraestrutura: 1100 },
  { mes: "Set", saude: 1550, educacao: 1750, infraestrutura: 1250 },
  { mes: "Out", saude: 1600, educacao: 1800, infraestrutura: 1300 }
];

export const kpis = {
  totalPromessas: 100,
  promessasCumpridas: 71,
  promessasEmAndamento: 19,
  promessasNaoIniciadas: 6,
  promessasDescumpridas: 4,
  percentualGeralCumprimento: 71,
  orcamentoTotal: 65000000,
  orcamentoExecutado: 61800000,
  percentualExecucaoOrcamento: 95.1,
  transparenciaScore: 8.5
};

