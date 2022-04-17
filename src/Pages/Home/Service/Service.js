import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = ({service}) => {
    const {img , name,text,price} = service;
    return (
        <div className='service-card'>
            <img src={img}></img>
            <h4 className='ms-2 mb-3'>{name}</h4>
            <p className='mt-4 ms-3'>{text}</p>
            <p className='ms-3'>${price}</p>
            <Button className='ms-3'>Booking</Button>
        </div>
    );
};

export default Service;