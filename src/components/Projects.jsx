import styles from './Projects.module.css'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import Project from './Project'


const Projects = () => {
    const carrossel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {

        setWidth(carrossel.current?.scrollWidth - carrossel.current.offsetWidth)

    }, [])

    return (
        <section id='projects' className={styles.section}>
            <h1>Projetos</h1>

            <motion.div ref={carrossel} className={styles.projects} whileTap={{ cursor: 'grabbing' }}  >

                <motion.div className={styles.inner} drag='x' dragConstraints={{ right: 0, left: -width }}>

                    <Project link="https://superb-palmier-ba87aa.netlify.app/" name='Newsletter sign up' title="link para Newsletter sign up" src='newsletter.webp' alt='pagina de inscrição  em uma newsletter'

                        description="Este é um projeto de newsletter sign up desenvolvido com React JS. Possui um formulário intuitivo e responsivo, permitindo aos usuários se inscreverem facilmente para receber atualizações por e-mail. A ideia do projeto veio de um desafio do site Frontend Mentor" />
                    <Project link="https://statuesque-swan-31c081.netlify.app/" name='Cardápio Virtual' title="link para cardapio virtual " src='cardapio.webp' alt='site que oferece um cardápio virtual'

                        description="O site de cardápio virtual foi desenvolvido em React js usando vite e oferece um menu para escolha dos pratos, funcionalidade de adicionar ao carrinho de compras e ao finalizar a escolha dos pratos, o usuário é redirecionado para o Whatsapp  para finalizar o pedido. " />
                    <Project link="https://jjunior112.github.io/portfolioDev/pag6.html" name='Parallax page' title="link para site parallax com slider " src='parallax_slider.webp' alt='site parallax com slider'

                        description="O projeto de parallax page combina os efeitos de parallax e slider para criar uma experiência interativa e visualmente atraente. Para seu desenvolvimento, foram usadas as linguagens HTML, CSS e JS e o framework bootsrap " />


                    <Project link="https://dreamy-buttercream-6d5fb5.netlify.app/" name='To do List' title="link para projeto To do List " src='to-do-list.webp' alt='site de to do list'

                        description="Este é um projeto de lista de tarefas (to-do list) desenvolvido com React JS. Com uma interface simples e intuitiva, permite aos usuários adicionar, marcar como concluídas, pesquisar, filtrar e excluir tarefas." />


                    <Project link="https://exquisite-hummingbird-7ef012.netlify.app/" name='Viajante Louco' title="link para o site de viagens " src='viajanteLouco.webp' alt='site de viagens viajante louco'

                        description="O site Viajante Louco é um refúgio virtual projetado em React, com uma estética relaxante e minimalista.  O site oferece aos usuários uma experiência de navegação tranquila em forma de Sigle Page Application (SPA), com informações sobre destinos, dicas de viagem e uma variedade de recursos terapêuticos para descontrair e estimular a imaginação." />

                    <Project link="https://radiant-speculoos-0f3049.netlify.app/" name='News Homepage' title="link para homepage de noticias" src='news-homepage.webp' alt='news hompage'

                        description="Este projeto de news homepage  desenvolvido com React JS com responsividade para diversos tamanhos de telas. Este projeto faz parte de um desafio do site Frontend Mentor" />





                    <Project link="https://jjunior112.github.io/portfolioDev/pag3.html" name='Formulário' title="link para formulario desenvolvido em html,css e javascript " src='form.webp' alt='formulário de pesquisa'

                        description="Projeto de formulário desenvolvido em HTML,CSS e JS. O projeto possui validação de campos, responsividade e mensagem de sucesso de envio." />

                    <Project link="https://merry-praline-8b8ed1.netlify.app/" name='Landing page viagens' title="link para Landing page viagens" src='landing-page-trip.webp' alt='landing page viagens'

                        description="Landing page responsiva e moderna desenvolvida utilizando React.js, com um design atraente e funcionalidades interativas. Interface intuitiva, otimizada para conversão, oferecendo uma experiência de usuário envolvente. Utilização de componentes reutilizáveis e código limpo, resultando em um projeto de alta qualidade e desempenho." />



                </motion.div>

            </motion.div>


        </section >
    )
}

export default Projects