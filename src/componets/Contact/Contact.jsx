import React from 'react'
import { getImageUrl } from '../../utils'
import contacts from "../../data/contact.json"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer id='contact' className= {styles.container}>
        <div className= {styles.text}>
            <h2>
                Contact
            </h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className= {styles.links}>
            {
                contacts.map((contact, id) => {
                    return (
                        <li key={id} className= {styles.link}>
                            <img src={getImageUrl(contact.imageSrc)} alt= {contact.imageDesc} />
                            <a href={contact.title === 'Email' ? `mailto: ${contact.link}` : contact.link}>{contact.display}</a>
                        </li>
                    )
                })
            }
        </ul>
    </footer>
  )
}

export default Contact
