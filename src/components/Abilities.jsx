import { DiMysql, DiJsBadge, DiMongodb, DiNodejs, DiReact, DiGithub } from "react-icons/di";

import { TbApi } from "react-icons/tb";

const Abilities = () => {
    return (
        <section id="abilities" className='abilities'>
            <h1>Habilidades </h1>
            <div className='icons'>
                <div><DiJsBadge /> <p>JavaScript (JS): É uma linguagem de programação amplamente utilizada para adicionar interatividade a sites e aplicativos web. Permite criar funcionalidades dinâmicas, como pop-ups, validação de formulários e animações.</p></div>
                <div><DiNodejs /><p> Node.js: É uma plataforma de desenvolvimento back-end que utiliza JavaScript para executar código do lado do servidor. Oferece um ambiente de execução rápido e eficiente, baseado no motor V8 do Google Chrome.</p></div>

                <div><DiMongodb /> <p>MongoDB:  Com seu esquema flexível e capacidades avançadas de consulta, o MongoDB é a escolha para lidar elegantemente com dados não estruturados. Explore como essa tecnologia redefine a gestão de dados em meu trabalho.</p></div>


            </div>
            <div className='icons'>
                <div><DiMysql /> <p>MySQL: Como um banco de dados relacional, oferece consistência e integridade para projetos críticos. Com suporte transacional e uma linguagem SQL robusta, o MySQL é a escolha sólida para garantir a gestão eficiente e confiável de dados.</p></div>
                <div><TbApi /> <p>Express js: É um poderoso framework para Node.js, é a espinha dorsal da eficiência na construção de aplicações web. Com sua abordagem minimalista, Express simplifica o desenvolvimento, oferecendo uma estrutura flexível para criar APIs escaláveis e dinâmicas.</p></div>


                <div><DiGithub /> <p>GitHub: É uma plataforma de hospedagem de código-fonte e colaboração para desenvolvedores. Permite o controle de versão, revisão de código e facilita o trabalho em equipe em projetos de software.</p></div>

            </div>


        </section >
    )
}

export default Abilities