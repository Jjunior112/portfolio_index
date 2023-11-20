import { FaGithub, FaGlobeAmericas } from 'react-icons/fa'

const Project = ({ linkDeploy, linkGithub, name, titleDeploy, titleGithub, src, alt, description }) => {

    return (
        <div className='project' >

            <img src={src} alt={alt} />

            <h2>{name}</h2>

            <div className='description' >

                <p>{description}</p>

            </div>

            <a href={linkDeploy} title={titleDeploy} target="_blank" rel="noopener noreferrer"><FaGlobeAmericas className='deploy' /></a>

            <a href={linkGithub} title={titleGithub} target="_blank" rel="noopener noreferrer" ><FaGithub className='github' /></a>
        </div>

    )

}

export default Project