import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Waht I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="services__list">
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF THE UI/UX DESIGN */}
        <article className='services'>
          <div className="services__head">
            <h3>Web Development</h3>
          </div>

          <ul className="services__list">
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className='services'>
          <div className="services__head">
            <h3>content creation</h3>
          </div>

          <ul className="services__list">
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services