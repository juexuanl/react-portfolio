import React, { useState } from 'react'
import { getImageUrl } from '../../utils'
import styles from "./ProjectCard.module.css"


const ProjectCard = ({ project: {title, imageSrc, description, skills, details}}) => {
    const [detailOpen, setDetailOpen] = useState(false);
    const toggleList = () => {
        setDetailOpen(preState => !preState);
    }
  return (
    <div className= {styles.container}>
        <img src= {getImageUrl(imageSrc)} alt={`Image of ${title}`} className= {styles.image} />
        <h3 className= {styles.title}>{title}</h3>
        <p className= {styles.description}>{description}</p>
        <ul className= {styles.skills}>
            {
                skills.map((skill, id) => {
                    return <li key={id} className= {styles.skill}>{skill}</li>
                })
            }
        </ul>
        <div className= {styles.details}>
            <botton className= {styles.detailsText} onClick = {toggleList}>
                {detailOpen ? 'Hide' : 'Details'}
            </botton>
            {
                detailOpen && (
                    <ul className= {styles.detail}>
                        {
                            details.map((detail, id) => {
                                return <li key={id}>
                                    {detail}
                                </li>
                            })
                        }
                    </ul>
                )
            }
        </div>
    </div>
  )
}

export default ProjectCard
