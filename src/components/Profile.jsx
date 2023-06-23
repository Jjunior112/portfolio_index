import styles from './Profile.module.css'

import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'

import { motion } from 'framer-motion'

const Profile = () => {
    
    return (
        <section className={styles.section}>

            <motion.div className={styles.name} initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>

                <h1>Frontend Developer</h1>

                <h2>Juarez Júnior</h2>

                <p>Tenho 23 anos, sou frontend developer, tenho uma paixão pela criação de soluções digitais inovadoras e funcionais. Tenho habilidades em HTML,CSS, JavaScript e no framework React JS </p>

            </motion.div>

            <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1.5 }}>

                <a href="https://www.linkedin.com/in/juarez-gonzaga-de-castro-jnr" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>

                <a href="https://github.com/Jjunior112" target="_blank" rel="noopener noreferrer"><FaGithub /></a>

                <a href="https://jjunior112.github.io/portfolioDev/Curriculo.pdf" download='curriculo.pdf' target='_blank' rel="noopener noreferrer"><FaFileDownload /></a>

            </motion.div>

        </section>
    )

}

export default Profile