import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"
import about from "../../data/about.json"

const About = () => {
  return (
    <section className= {styles.container} id="about">
        <h2 className= {styles.title}>About</h2>
        <div className= {styles.content}>
            <img 
                src= {getImageUrl("about/aboutImage.png")}
                alt= "Me sitting and self-learning"
                className= {styles.aboutImage}
            />
            <ul className= {styles.aboutItems}>
                {
                    about.map((item, id) => {
                        return (
                            <li className= {styles.aboutItem} key={id}>
                                <img src = {getImageUrl(item.imageSrc)} alt= {item.imageDesc} />
                                <div className= {styles.aboutItemText}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default About
