import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'

import { motion } from 'framer-motion'

import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'

const Profile = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setMenu] = useState('hideMenu');

    const openMenu = () => {
        if (!isOpen) {
            setMenu('showMenu')
        }
        else {
            setMenu('hideMenu')
        }
    }

    return (
        <section id='home' className='profile'>
            <div className='desktop'>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#abilities">Habilidades</a></li>
                        <li><a href="#projects">Projetos</a></li>
                    </ul>
                </nav>
            </div>
            <div className='mobile'>
                <nav>
                    <Hamburger toggled={isOpen} toggle={setIsOpen} onToggle={openMenu} color='#fff' />
                    <ul className={showMenu}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#abilities">Habilidades</a></li>
                        <li><a href="#projects">Projetos</a></li>
                    </ul>
                </nav>
            </div>

            <motion.div className='name' initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>

                <h1>Frontend Developer</h1>

                <h2>Juarez Júnior</h2>

                <p>Tenho 23 anos, sou frontend developer, tenho uma paixão pela criação de soluções digitais inovadoras e funcionais. Tenho habilidades em HTML,CSS, JavaScript e nos frameworks React JS e Node JS </p>

            </motion.div>

            <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1.5 }}>

                <a href="https://www.linkedin.com/in/juarez-gonzaga-de-castro-jnr" target="_blank" title='Link para perfil do Linkedin' rel="noopener noreferrer"><FaLinkedin className='linkedin' /></a>

                <a href="https://github.com/Jjunior112" target="_blank" title='Link para perfil do GitHub' rel="noopener noreferrer" ><FaGithub className='github' /></a>

                <a href="https://jjunior112.github.io/portfolioDev/Curriculo.pdf" download='curriculo.pdf' title='Link para download do curriculo em pdf' rel="noopener noreferrer"><FaFileDownload className='download' /></a>

            </motion.div>

        </section>
    )

}

export default Profile