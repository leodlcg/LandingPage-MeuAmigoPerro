(function(){

  /* ==========================================================
     DADOS: array de objetos de eventos.
     Cada evento: { data: 'AAAA-MM-DD', horaInicio, horaFim, nucleo, titulo, descricao, repetirMensal? }
     - Se repetirMensal for true, o evento passa a ocorrer todo mês,
       sempre no mesmo dia do mês da data original (a partir dela).
       Se o dia não existir em algum mês (ex: 31 em fevereiro), usa
       o último dia disponível daquele mês.
     Edite/insira livremente neste array para popular o calendário.
     ========================================================== */
  const hoje = new Date();
  const pad = n => String(n).padStart(2,'0');
  const isoHoje = `${hoje.getFullYear()}-${pad(hoje.getMonth()+1)}-${pad(hoje.getDate())}`;

  const eventos = [
    {
      data: '2026-00-28',
      horaInicio: '19:00',
      horaFim: '20:00',
      nucleo: 'Tecnologia',
      titulo: 'Reunião mensal de alinhamento - Opcional',
      descricao: 'Reunião destinada ao Núcleo de Tecnologia da Informação à avaliação das atividades realizadas no mês anterior e à definição das atividades do próximo período.',
      repetirMensal: true
    },
    {
      data: '2026-00-27',
      horaInicio: '19:00',
      horaFim: '20:00',
      nucleo: 'Infraestrutura',
      titulo: 'Reunião mensal de alinhamento - Opcional',
      descricao: 'Reunião destinada ao Infraestrutura e Operações à avaliação das atividades realizadas no mês anterior e à definição das atividades do próximo período.',
      repetirMensal: true 
    },
    {
      data: '2026-00-26',
      horaInicio: '19:00',
      horaFim: '20:00',
      nucleo: 'Contato',
      titulo: 'Reunião mensal de alinhamento - Opcional',
      descricao: 'Reunião destinada ao Núcleo de Comunicação e Conscientização à avaliação das atividades realizadas no mês anterior e à definição das atividades do próximo período.',
      repetirMensal: true
    },
    {
      data: '2026-00-25',
      horaInicio: '19:00',
      horaFim: '20:00',
      nucleo: 'Financeiro',
      titulo: 'Reunião mensal de alinhamento - Opcional',
      descricao: 'Reunião destinada ao Núcleo de Captação de Recursos e Parcerias à avaliação das atividades realizadas no mês anterior e à definição das atividades do próximo período.',
      repetirMensal: true
    },
    {
      data: '2026-00-24',
      horaInicio: '19:00',
      horaFim: '20:00',
      nucleo: 'BemEstar',
      titulo: 'Reunião mensal de alinhamento - Opcional',
      descricao: 'Reunião destinada ao Núcleo de Bem-estar Animal à avaliação das atividades realizadas no mês anterior e à definição das atividades do próximo período.',
      repetirMensal: true
    },
    {
      data: '2026-00-01',
      horaInicio: '10:00',
      horaFim: '18:00',
      nucleo: 'Financeiro',
      titulo: 'Prestação de contas - Obrigatório',
      descricao: 'Organização das entradas e saídas mensais para divulgação pública via Instagram, visando à transparência. Realizada pelo Núcleo de Captação de Recursos e Parcerias.',
      repetirMensal: true
    },
    {
      data: '2026-00-15',
      horaInicio: '10:00',
      horaFim: '18:00',
      nucleo: 'Administrativo',
      titulo: 'Seleção processo seletivo - Obrigatório',
      descricao: 'Consiste na análise e avaliação dos candidatos que realizaram a leitura do edital e o preenchimento do formulário de inscrição, visando à seleção de novos voluntários. Realizada pelo Núcleo Administrativo e Jurídico.',
      repetirMensal: true
    },
    {
      data: '2026-00-05',
      horaInicio: '10:00',
      horaFim: '18:00',
      nucleo: 'Contato',
      titulo: 'Publicação de um post/reels - Obrigatório',
      descricao: 'Data final para entrega da Criação de Reels ou posts educativos/informativos sobre as atividades realizadas pelo projeto, ações de conscientização, artigos e demais conteúdos relevantes, seguindo a identidade visual estabelecida pelo projeto. Realizada pelo Núcleo de Comunicação e Conscientização.',
      repetirMensal: true
    },
    {
      data: '2026-00-20',
      horaInicio: '10:00',
      horaFim: '18:00',
      nucleo: 'Contato',
      titulo: 'Publicação de um post/reels - Obrigatório',
      descricao: 'Data final para entrega da criação de Reels ou posts educativos/informativos sobre as atividades realizadas pelo projeto, ações de conscientização, artigos e demais conteúdos relevantes, seguindo a identidade visual estabelecida pelo projeto. Realizada pelo Núcleo de Comunicação e Conscientização.',
      repetirMensal: true
    },
      {
      data: '2026-00-10',
      horaInicio: '10:00',
      horaFim: '18:00',
      nucleo: 'Financeiro',
      titulo: 'Coleta de arrecadação  - Obrigatório',
      descricao: 'Data final para criação e divulgação de uma chamada fixa para doações destinadas à manutenção e ao sustento do projeto. A campanha deverá ser divulgada em todos os canais de comunicação disponíveis, destacando a importância das contribuições para a continuidade das atividades e priorizando a captação de doações recorrentes. A atividade será realizada em conjunto pelo Núcleo de Comunicação e Conscientização e pelo Núcleo de Captação de Recursos e Parcerias.',
      repetirMensal: true
    },
  ];

  /* ==========================================================
     CORES POR NÚCLEO
     Mapa fixo para os núcleos conhecidos; qualquer núcleo novo
     que apareça nos dados recebe uma cor da paleta de reserva,
     escolhida de forma determinística (mesmo núcleo = mesma cor
     sempre, mesmo sem estar cadastrado abaixo).
     ========================================================== */
  const CORES_NUCLEO = {
    Administrativo: '#dd00ff',
    BemEstar: '#00ff8c',
    Contato: '#ff8c00',
    Financeiro: '#ffea00',
    Infraestrutura: '#ff0000',
    Tecnologia: '#001eff'
  };
  const PALETA_RESERVA = ['#e452fa','#3fb6c9','#f6a545','#6c7ae0','#3cc98a','#ff6b81','#b98be0','#5ec8d8'];

  function corDoNucleo(codigo){
    if(CORES_NUCLEO[codigo]) return CORES_NUCLEO[codigo];
    let hash = 0;
    for(let i=0; i<codigo.length; i++){
      hash = codigo.charCodeAt(i) + ((hash << 5) - hash);
    }
    return PALETA_RESERVA[Math.abs(hash) % PALETA_RESERVA.length];
  }

  /* fundo do anel do dia: cor sólida se só há um núcleo naquele dia,
     ou um conic-gradient dividido em fatias iguais se há vários */
  function fundoAnelDoDia(codigosNucleo){
    if(codigosNucleo.length === 1){
      return corDoNucleo(codigosNucleo[0]);
    }
    const cores = codigosNucleo.map(corDoNucleo);
    const passo = 100 / cores.length;
    const fatias = cores.map((cor, i) => `${cor} ${(i*passo).toFixed(2)}% ${((i+1)*passo).toFixed(2)}%`);
    return `conic-gradient(${fatias.join(', ')})`;
  }

  /* ========================================================== */

  const nomesMeses = [
    'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
    'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
  ];
  const nomesDiasSemana = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];

  let anoVisivel = hoje.getFullYear();
  let mesVisivel = hoje.getMonth(); // 0-indexado
  let isoSelecionado = isoHoje;

  const rotuloMes = document.getElementById('rotuloMes');
  const rotuloAno = document.getElementById('rotuloAno');
  const gradeDias = document.getElementById('gradeDias');
  const rotuloDataSelecionada = document.getElementById('rotuloDataSelecionada');
  const corpoEventos = document.getElementById('corpoEventos');

  function isoPara(y,m,d){
    return `${y}-${pad(m+1)}-${pad(d)}`;
  }

  /* decide se um evento ocorre num determinado dia (AAAA-MM-DD),
     considerando eventos fixos mensais e o caso de meses mais curtos */
  function ocorreEmData(evento, iso){
    if(evento.data === iso) return true;
    if(!evento.repetirMensal) return false;

    // não repete antes da data original do evento
    if(iso < evento.data) return false;

    const diaBase = Number(evento.data.split('-')[2]);
    const [anoIso, mesIso, diaIso] = iso.split('-').map(Number);

    // se o dia base (ex: 31) não existir no mês, usa o último dia do mês
    const ultimoDiaDoMesIso = new Date(anoIso, mesIso, 0).getDate();
    const diaEsperado = Math.min(diaBase, ultimoDiaDoMesIso);

    return diaIso === diaEsperado;
  }

  function eventosDaData(iso){
    return eventos
      .filter(e => ocorreEmData(e, iso))
      .sort((a,b) => a.horaInicio.localeCompare(b.horaInicio));
  }

  /* calcula os códigos de núcleo únicos presentes num dia específico,
     considerando também eventos recorrentes (repetirMensal) */
  function nucleosNaData(iso){
    const codigos = [];
    eventos.forEach(e => {
      if(ocorreEmData(e, iso) && !codigos.includes(e.nucleo)){
        codigos.push(e.nucleo);
      }
    });
    return codigos;
  }

  /* legenda com todos os núcleos presentes nos dados, montada uma
     única vez e inserida logo abaixo do cabeçalho do calendário */
  function construirLegenda(){
    const codigosUnicos = [...new Set(eventos.map(e => e.nucleo))].sort();
    if(codigosUnicos.length === 0) return;

    const legenda = document.createElement('div');
    legenda.className = 'legenda-nucleos';

    codigosUnicos.forEach(codigo => {
      const item = document.createElement('span');
      item.className = 'legenda-item';

      const bolinha = document.createElement('span');
      bolinha.className = 'legenda-cor';
      bolinha.style.background = corDoNucleo(codigo);

      item.appendChild(bolinha);
      item.appendChild(document.createTextNode(codigo));
      legenda.appendChild(item);
    });

    const cabecalhoCalendario = document.querySelector('#calendario .calendario-cabecalho');
    if(cabecalhoCalendario){
      cabecalhoCalendario.insertAdjacentElement('afterend', legenda);
    }
  }

  function renderizarCalendario(){
    rotuloMes.textContent = nomesMeses[mesVisivel];
    rotuloAno.textContent = anoVisivel;

    gradeDias.innerHTML = '';

    const primeiroDiaDoMes = new Date(anoVisivel, mesVisivel, 1);
    const diaSemanaInicial = primeiroDiaDoMes.getDay(); // 0=Dom
    const diasNoMes = new Date(anoVisivel, mesVisivel+1, 0).getDate();
    const diasNoMesAnterior = new Date(anoVisivel, mesVisivel, 0).getDate();

    const totalCelulas = 42; // 6 semanas fixas
    let dataCelula, mesCelula, anoCelula, fora;

    for(let i=0; i<totalCelulas; i++){
      const numDia = i - diaSemanaInicial + 1;

      if(numDia < 1){
        dataCelula = diasNoMesAnterior + numDia;
        mesCelula = mesVisivel - 1;
        anoCelula = anoVisivel;
        fora = true;
      } else if(numDia > diasNoMes){
        dataCelula = numDia - diasNoMes;
        mesCelula = mesVisivel + 1;
        anoCelula = anoVisivel;
        fora = true;
      } else {
        dataCelula = numDia;
        mesCelula = mesVisivel;
        anoCelula = anoVisivel;
        fora = false;
      }

      // normaliza mês/ano para a célula
      let mesNormalizado = mesCelula, anoNormalizado = anoCelula;
      if(mesNormalizado < 0){ mesNormalizado = 11; anoNormalizado -= 1; }
      if(mesNormalizado > 11){ mesNormalizado = 0; anoNormalizado += 1; }

      const iso = isoPara(anoNormalizado, mesNormalizado, dataCelula);
      const nucleosDoDia = nucleosNaData(iso);

      const botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'dia' + (fora ? ' fora' : '') + (iso === isoHoje ? ' hoje' : '') + (iso === isoSelecionado ? ' selecionado' : '');
      botao.dataset.iso = iso;
      botao.setAttribute('aria-label', `${dataCelula} de ${nomesMeses[mesNormalizado]}${nucleosDoDia.length ? ', com eventos do' + (nucleosDoDia.length > 1 ? 's núcleos ' : ' núcleo ') + nucleosDoDia.join(', ') : ''}`);

      const numero = document.createElement('span');
      numero.className = 'numero';
      numero.textContent = dataCelula;
      botao.appendChild(numero);

      if(nucleosDoDia.length){
        const ponto = document.createElement('span');
        ponto.className = 'ponto';
        ponto.style.background = fundoAnelDoDia(nucleosDoDia);
        botao.appendChild(ponto);
      }

      botao.addEventListener('click', () => {
        isoSelecionado = iso;
        if(fora){
          anoVisivel = anoNormalizado;
          mesVisivel = mesNormalizado;
          renderizarCalendario();
        } else {
          document.querySelectorAll('.dia.selecionado').forEach(el => el.classList.remove('selecionado'));
          botao.classList.add('selecionado');
        }
        renderizarEventos();
      });

      gradeDias.appendChild(botao);
    }
  }

  function formatarRotuloSelecionado(iso){
    const [y,m,d] = iso.split('-').map(Number);
    const dt = new Date(y, m-1, d);
    return `${d} de ${nomesMeses[m-1].toLowerCase()} — ${nomesDiasSemana[dt.getDay()]}`;
  }

  function renderizarEventos(){
    rotuloDataSelecionada.textContent = formatarRotuloSelecionado(isoSelecionado);
    const lista = eventosDaData(isoSelecionado);

    if(lista.length === 0){
      corpoEventos.innerHTML = '';
      const vazio = document.createElement('div');
      vazio.className = 'estado-vazio';
      vazio.innerHTML = `
        <div class="marca">＊</div>
        <p>Nenhum compromisso marcado para este dia.</p>
      `;
      corpoEventos.appendChild(vazio);
      return;
    }

    const envolucro = document.createElement('div');
    envolucro.className = 'lista-eventos';

    lista.forEach(ev => {
      const cor = corDoNucleo(ev.nucleo);
      const cartao = document.createElement('div');
      cartao.className = 'cartao-evento';
      cartao.style.borderLeftColor = cor;
      cartao.innerHTML = `
        <div class="linha-horario">
          <span class="horario">${ev.horaInicio} — ${ev.horaFim}</span>
          <span class="selo-nucleo" style="color:${cor}; border-color:${cor};">${escaparHtml(ev.nucleo)}</span>
        </div>
        <div class="titulo">${escaparHtml(ev.titulo)}</div>
        <div class="descricao">${escaparHtml(ev.descricao)}</div>
      `;
      envolucro.appendChild(cartao);
    });

    corpoEventos.innerHTML = '';
    corpoEventos.appendChild(envolucro);
  }

  function escaparHtml(str){
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  document.getElementById('botaoAnterior').addEventListener('click', () => {
    mesVisivel -= 1;
    if(mesVisivel < 0){ mesVisivel = 11; anoVisivel -= 1; }
    renderizarCalendario();
  });

  document.getElementById('botaoProximo').addEventListener('click', () => {
    mesVisivel += 1;
    if(mesVisivel > 11){ mesVisivel = 0; anoVisivel += 1; }
    renderizarCalendario();
  });

  construirLegenda();
  renderizarCalendario();
  renderizarEventos();

})();