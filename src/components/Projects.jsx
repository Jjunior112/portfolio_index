import styles from './Projects.module.css'


import Project from './Project'


const Projects = () => {


    return (
        <section id='projects' className={styles.section}>
            <h1>Projetos</h1>

            <div className={styles.projects}   >



                <Project linkDeploy="https://statuesque-swan-31c081.netlify.app/" linkGithub="https://github.com/Jjunior112/Cardapio_virtual" name='Cardápio Virtual' title="link para cardapio virtual " src='cardapio.webp' alt='site que oferece um cardápio virtual'

                    description="O site de cardápio virtual foi desenvolvido em React js usando vite e oferece um menu para escolha dos pratos, funcionalidade de adicionar ao carrinho de compras e ao finalizar a escolha dos pratos, o usuário é redirecionado para o Whatsapp  para finalizar o pedido. " />

                <Project linkDeploy="https://unrivaled-panda-750b2a.netlify.app/" linkGithub="https://github.com/Jjunior112/advocacy" name='Landing Page de Escritório de Advocacia' title="link para Landing page de advocacia" src='landing-page-advocacy.webp' alt='landing page advocacia'

                    description="Este site foi desenvolvido usando React e TypeScript e busca proporcionar uma ótima experiência para o usuário ao buscar uma solução jurídica, sendo responsivo e adptável para diversas telas e dispositivos." />

                <Project linkDeploy="https://bespoke-begonia-313714.netlify.app/" linkGithub="https://github.com/Jjunior112/github-api-ts" name='Buscador de usuários GitHub' title="link para buscador de usuarios github" src='github-api.webp' alt='buscador de usuarios github'

                    description="Esse buscador foi desenvolvido em React js usando a linguagem TypeScript e tem por objetivo o consumo da api de usuários do GitHub. O site tem um design bem intuitivo e retorna alguns dados do perfil pesquisado como nome, usuário, link para o perfil entre outros." />


            </div>


        </section >
    )
}

export default Projects