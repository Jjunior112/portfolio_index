import styles from './Project.module.css'


const Project = ({ link, name, title, src, alt, description }) => {


    return (
        <div className={styles.project} >

            <a href={link} target="_blank" title={title} rel="noopener noreferrer"><img src={src} alt={alt} /></a>

            <div className={styles.description} >

                <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
                
                <p>{description}</p>
            </div>

        </div>

    )

}

export default Project