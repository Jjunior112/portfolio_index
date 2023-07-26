import { DiHtml5, DiJsBadge, DiCss3, DiBootstrap, DiReact, DiGithub } from "react-icons/di";

const Abilities = () => {
    return (
        <section id="abilities" className="abilities">
            <h1>Habilidades </h1>
            <div className="icons">
                <div><DiHtml5 /> <p>HTML5: É a linguagem de marcação usada para criar e estruturar o conteúdo de páginas da web. Introduziu elementos semânticos, melhorias de multimídia e recursos de formulário, tornando a criação de sites mais dinâmica e acessível.</p></div>

                <div><DiCss3 /> <p>CSS3: É a linguagem de estilo que permite o design e a aparência visual dos elementos HTML. Com recursos avançados, como animações, sombras e gradientes, possibilita layouts flexíveis e responsivos para diferentes dispositivos.</p></div>

                <div><DiJsBadge /> <p>JavaScript (JS): É uma linguagem de programação amplamente utilizada para adicionar interatividade a sites e aplicativos web. Permite criar funcionalidades dinâmicas, como pop-ups, validação de formulários e animações.</p></div>

            </div>
            <div className="icons">
                <div><DiReact /> <p>React: É uma biblioteca JavaScript para construção de interfaces de usuário (UI) interativas e reativas. Com componentes reutilizáveis, facilita o desenvolvimento de aplicativos complexos e de alto desempenho.</p></div>

                <div><DiBootstrap /> <p>Bootstrap: É um framework front-end que oferece uma coleção de estilos CSS e componentes interativos. Permite a criação rápida de sites e aplicativos responsivos, otimizando o design para diversos dispositivos.</p></div>

                <div><DiGithub /> <p>GitHub: É uma plataforma de hospedagem de código-fonte e colaboração para desenvolvedores. Permite o controle de versão, revisão de código e facilita o trabalho em equipe em projetos de software.</p></div>

            </div>


        </section>
    )
}

export default Abilities