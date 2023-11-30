import { FaGithub } from 'react-icons/fa'

const Project = ({  linkGithub, name,  titleGithub, src, alt, description }) => {

    return (
        <div className='project' >

            <img src={src} alt={alt} />

            <h2>{name}</h2>

            <div className='description' >

                <p>{description}</p>

            </div>

            <a href={linkGithub} title={titleGithub} target="_blank" rel="noopener noreferrer" ><FaGithub className='github' /></a>
        </div>

    )

}

export default Project