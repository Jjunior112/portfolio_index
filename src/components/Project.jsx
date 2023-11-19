import styles from './Project.module.css';
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa'

const Project = ({ linkDeploy, linkGithub, name, titleDeploy, titleGithub, src, alt, description }) => {


    return (
        <div className={styles.project} >

            <img src={src} alt={alt} />

            <h2>{name}</h2>

            <div className={styles.description} >
                
                <p>{description}</p>

            </div>

            <a href={linkDeploy} title={titleDeploy} target="_blank" rel="noopener noreferrer"><FaGlobeAmericas className={styles.deploy} /></a>

            <a href={linkGithub} titleGithub={titleGithub} target="_blank" rel="noopener noreferrer" ><FaGithub className={styles.github} /></a>
        </div>

    )

}

export default Project