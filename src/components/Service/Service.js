import React from 'react'
import './Service.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFlask,
  faTabletAlt,
  faMedal,
  faStickyNote,
  faClock,
  faPlug,
} from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    id: 1,
    icon: faFlask,
    title: 'Art of Coding',
    text: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
  },
  {
    id: 2,
    icon: faTabletAlt,
    title: 'Responsive Design',
    text: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
  },
  {
    id: 3,
    icon: faMedal,
    title: 'Feature Rich',
    text: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
  },
  {
    id: 4,
    icon: faStickyNote,
    title: 'Useful Documentation',
    text: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
  },
  {
    id: 5,
    icon: faClock,
    title: 'Fast Delivery',
    text: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
  },
  {
    id: 6,
    icon: faPlug,
    title: 'Free Plugins',
    text: 'Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor',
  },
]

const Service = () => {
  return (
    <section className="service">
      <div className="service__container">
        {services.map((service) => (
          <div key={service.id} className="service__item">
            <FontAwesomeIcon icon={service.icon} className="service__icon" />
            <div className="service__content">
              <h4 className="service__title">{service.title}</h4>
              <p className="service__text">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service
