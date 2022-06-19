import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const data = [
  {
    avatar: AVTR1,
    name: 'Tine Snow',
    review: 'Bearly Birthday on 13th May annually rounds By divining a Godly pretty penny Benz gifted, a girl And she like well solved rubiks cube!'  
  },
  {
    avatar: AVTR2,
    name: 'Snatta Wale',
    review: 'Bearly Birthday on 13th May annually rounds By divining a Godly pretty penny Benz gifted, a girl And she like well solved rubiks cube!'  
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Bearly Birthday on 13th May annually rounds By divining a Godly pretty penny Benz gifted, a girl And she like well solved rubiks cube!'  
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Bearly Birthday on 13th May annually rounds By divining a Godly pretty penny Benz gifted, a girl And she like well solved rubiks cube!'  
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small>{review}</small>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials