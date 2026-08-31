(function(){

  /* ==========================================================
     DADOS: array de objetos de eventos.
     Cada evento: { data: 'AAAA-MM-DD', horaInicio, horaFim, nucleo, titulo, descricao }
     Edite/insira livremente neste array para popular o calendário.
     ========================================================== */
  const hoje = new Date();
  const pad = n => String(n).padStart(2,'0');
  const isoHoje = `${hoje.getFullYear()}-${pad(hoje.getMonth()+1)}-${pad(hoje.getDate())}`;

  const eventos = [
    {
      data: '2026-08-11',
      horaInicio: '09:00',
      horaFim: '10:00',
      nucleo: 'Administrativo',
      titulo: 'Reunião de alinhamento',
      descricao: 'Revisão semanal com a equipe sobre o andamento das entregas.'
    },
    {
      data: '2026-08-03',
      horaInicio: '14:30',
      horaFim: '15:15',
      nucleo: 'BemEstar',
      titulo: 'Ligação com cliente',
      descricao: 'Apresentação da proposta atualizada e próximos passos do contrato.'
    },
    {
      data: '2026-08-23',
      horaInicio: '11:00',
      horaFim: '12:00',
      nucleo: 'Contato',
      titulo: 'Dentista',
      descricao: 'Consulta de rotina — levar carteirinha do convênio.'
    },
    {
      data: '2026-08-10',
      horaInicio: '19:00',
      horaFim: '21:00',
      nucleo: 'Financeiro',
      titulo: 'Aula de espanhol',
      descricao: 'Módulo 4 — verbos irregulares no passado.'
    },
    {
      data: '2026-08-17',
      horaInicio: '19:00',
      horaFim: '21:00',
      nucleo: 'Infraestrutura',
      titulo: 'Aula de espanhol',
      descricao: 'Módulo 4 — verbos irregulares no passado.'
    },
    {
      data: '2026-08-01',
      horaInicio: '19:00',
      horaFim: '21:00',
      nucleo: 'Tecnologia',
      titulo: 'Aula de espanhol',
      descricao: 'Módulo 4 — verbos irregulares no passado.'
    }
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

  function eventosDaData(iso){
    return eventos
      .filter(e => e.data === iso)
      .sort((a,b) => a.horaInicio.localeCompare(b.horaInicio));
  }

  /* mapa: 'AAAA-MM-DD' -> lista de códigos de núcleo únicos naquele dia */
  function nucleosPorData(){
    const mapa = new Map();
    eventos.forEach(e => {
      if(!mapa.has(e.data)) mapa.set(e.data, []);
      const lista = mapa.get(e.data);
      if(!lista.includes(e.nucleo)) lista.push(e.nucleo);
    });
    return mapa;
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

    const nucleosMarcados = nucleosPorData();
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
      const nucleosDoDia = nucleosMarcados.get(iso);

      const botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'dia' + (fora ? ' fora' : '') + (iso === isoHoje ? ' hoje' : '') + (iso === isoSelecionado ? ' selecionado' : '');
      botao.dataset.iso = iso;
      botao.setAttribute('aria-label', `${dataCelula} de ${nomesMeses[mesNormalizado]}${nucleosDoDia ? ', com eventos do' + (nucleosDoDia.length > 1 ? 's núcleos ' : ' núcleo ') + nucleosDoDia.join(', ') : ''}`);

      const numero = document.createElement('span');
      numero.className = 'numero';
      numero.textContent = dataCelula;
      botao.appendChild(numero);

      if(nucleosDoDia && nucleosDoDia.length){
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