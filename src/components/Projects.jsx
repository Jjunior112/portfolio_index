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
        <section className={styles.section}>
            <h1>Projetos</h1>

            <motion.div ref={carrossel} className={styles.projects} whileTap={{ cursor: 'grabbing' }}  >

                <motion.div className={styles.inner} drag='x' dragConstraints={{ right: 0, left: -width }}>

                    <Project link="https://superb-palmier-ba87aa.netlify.app/" name='Newsletter sign up' title="link para Newsletter sign up" src='https://jjunior112.github.io/imagens/newsletter.png' alt='pagina de inscrição  emuma newsletter' 
                    
                    description="Este é um projeto de newsletter sign up desenvolvido com React JS. Possui um formulário intuitivo e responsivo, permitindo aos usuários se inscreverem facilmente para receber atualizações por e-mail. A ideia do projeto veio de um desafio do site Frontend Mentor" />


                    <Project link="https://dreamy-buttercream-6d5fb5.netlify.app/" name='To do List' title="link para projeto To do List " src='https://jjunior112.github.io/imagens/to-do-list.png' alt='site de to do list' 
                    
                    description="Este é um projeto de lista de tarefas (to-do list) desenvolvido com React JS. Com uma interface simples e intuitiva, permite aos usuários adicionar, marcar como concluídas, pesquisar, filtrar e excluir tarefas." />

                    <Project link="https://jjunior112.github.io/portfolioDev/pag2.html" name='Pokedex' title="link para pokedex " src='https://jjunior112.github.io/imagens/pokedex.png' alt='site pokemon'

                    description="O projeto Pokedex é uma aplicação web desenvolvida utilizando as tecnologias HTML, CSS e JavaScript. A Pokedex é uma enciclopédia virtual que contém informações sobre os diferentes Pokemons existentes no mundo fictício de Pokemon." />

                    <Project link="https://jjunior112.github.io/portfolioDev/pag6.html" name='Parallax page' title="link para site parallax com slider " src='https://jjunior112.github.io/imagens/parallax_slider.png' alt='site parallax com slider'

                    description="O projeto de parallax page combina os efeitos de parallax e slider para criar uma experiência interativa e visualmente atraente. Para seu desenvolvimento, foram usadas as linguagens HTML, CSS e JS " />

                    <Project link="https://jjunior112.github.io/portfolioDev/pag3.html" name='Formulário' title="link para formulario desenvolvido em html,css e javascript " src='https://jjunior112.github.io/imagens/form.png' alt='formulário de pesquisa' 

                    description="Projeto de formulário desenvolvido em HTML,CSS e JS. O projeto possui validação de campos, responsividade e mensagem de sucesso de envio." />

                    <Project link="https://merry-praline-8b8ed1.netlify.app/" name='Landing page viagens' title="link para Landing page viagens" src='https://jjunior112.github.io/imagens/landing-page-trip.png' alt='landing page viagens'

                    description="Landing page responsiva e moderna desenvolvida utilizando React.js, com um design atraente e funcionalidades interativas. Interface intuitiva, otimizada para conversão, oferecendo uma experiência de usuário envolvente. Utilização de componentes reutilizáveis e código limpo, resultando em um projeto de alta qualidade e desempenho." />


                </motion.div>

            </motion.div>


        </section >
    )
}

export default Projects