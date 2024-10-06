import { getCSS, tickConfig } from "./common.js"

async function QuantidadeusuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/alexandraarruda/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.values(dados)
    const Quantidadeusuarios = Object.values(dados)

    const data = [
        {
            x:nomeDasRedes,
            y=quantidadedeUsuarios,
            type: 'bar',
            marker: {
                color:getcss('--primary-color')
            }
        }
    ]

    const layyout ={
        plot_bgcolor: getCSS('--bg-color'),
        paper-bgcolor:getCSS('--bg-color'),
        title:{
            text: 'Redes Sociais com mais usuários',
            x: 0,
            font: {
                color:getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das redes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title:{
                text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

     const graficos = document.createElement('div')
     graficos.className = 'grafico'
     document.getElementById