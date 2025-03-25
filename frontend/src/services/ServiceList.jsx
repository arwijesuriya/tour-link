import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate weather',
        desc: 'Get the weather forecast for your destination.'
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Hire a tour guide for your trip.'
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Customize your trip.'
    }
]

const ServiceList = () => {
    return (
        <>
            {servicesData.map((item, index) => (
                <Col lg='3' key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    )
}

export default ServiceList
