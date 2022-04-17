import React from 'react';
import { Button } from 'react-bootstrap';
import bannerimg from '../../../images/banner_img/Female-Doctor.png'

const Banner = () => {
    return (
        <div className='container d-flex align-content-center justify-content-center'>
            <div>
                <h2 className='fs-1 mt-5'>Hi I'm Doctor Selina</h2>
                <h4>Eye Specialist</h4>
                <p className='mt-4'>
                    MBBS, FCPS, DGO
                    Ophthalmology / Eye Specialist & Surgeon
                    Coordinator & Senior Consultant
                    Apollo Hospitals Dhaka
                    Chamber: Apollo Hospitals Dhaka
                    Plot # 81, Block # E, Basudhara R/A, Dhaka – 1229
                    Phone: +880-2-8401661, 8845242,
                    Cell: +880 1841276556, Hotline: 10678
                </p>
                <Button>See More</Button>
                </div>
            <img src={bannerimg}></img>
        </div>
    );
};

export default Banner;