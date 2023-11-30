import Project from './Project'


const Projects = () => {


    return (
        <section id='projects' className='mainProjects'>
            <h1>Projetos</h1>

            <div className='projects'   >


                <Project  linkGithub="https://github.com/Jjunior112/api-movie-catalog" name='API catálogo de filmes' titleGithub='link para repositório no github' src='movie.webp' alt='Placa de gravação de cinema'

                    description="API para catalogo de filmes com autenticação usando JWT e uso da API externa chamada the movie database.

                    Este repositório contém uma API Node.js que utiliza JSON Web Tokens (JWT) para autenticação e implementa um limitador de requisições por minuto utilizando o middleware express-rate-limit. Esta API oferece endpoints que só podem ser acessados mediante autenticação." />

                <Project linkGithub="https://github.com/Jjunior112/Cardapio_virtual" name='API para cardápio' titleGithub='link para repositório no github' src='menu-restaurant.webp' alt='cardapio de um restaurante'

                    description="API de Cardápio, uma aplicação Node.js que utiliza o MongoDB como banco de dados para gerenciar pratos e tipos de pratos em um cardápio. Esta API oferece endpoints simples para adicionar, remover e alterar informações sobre os pratos, bem como adicionar novos tipos de pratos." />


                <Project  linkGithub="https://github.com/Jjunior112/api-inventory" name='API de controle de estoque' titleGithub='link para repositório no github' src='inventory.webp' alt='buscador de usuarios github'

                    description="Esta API de Controle de Estoque é uma solução eficiente para gerenciar o inventário de produtos. Desenvolvida em Node.js, ela oferece endpoints para adicionar/remover itens, verificar o status do estoque e atualizar quantidades. " />


            </div>


        </section >
    )
}

export default Projects