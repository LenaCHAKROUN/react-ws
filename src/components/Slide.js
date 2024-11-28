import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slide = () => {
  return (
    <div>
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img 
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1695380310317-a891cd3c4470?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="First slide"
                style={{height:'30%'}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1598493015060-c725bf855349?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1441120329518-a908598ea1fa?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
    </div>
  )
}

export default Slide