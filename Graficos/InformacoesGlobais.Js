const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualirInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_Conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio) 
    const minutos = Math.roud ((dados.tempo_medio - horas) * 100)
    const pocentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = “Vocêsabiaqueomundotem<span>${pessoasNoMundo}bilhões</span>depessoasequeaproximadamente<span>${pessoasConectadas}bilhões</span>estãoconectadasemalgumaredesocialepassamemmédia<span>${horas}horas</span>e<span>${minutos}minutos</span>conectadas.<br>Issosignificaqueaproximadamente<span>${porcentagemConectada}%</span>depessoasestãoconectadasemalgumaredesocial.”
    
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarInformacoesGlobais()

