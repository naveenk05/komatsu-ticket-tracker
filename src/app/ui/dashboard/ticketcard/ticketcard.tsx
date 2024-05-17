import { props } from '@/app/dashboard/layout'
import React from 'react'
import styles from './ticketcard.module.css';
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import newticket from '@/assets/newticketpng.png';
import Image from 'next/image';
import { ticketdatacard } from './ticketdatacard';


// const myImage: StaticImageData = newticket;
// const imageUrl: string = newticket.src;

const ticketcard: React.FC<props> = ({ children }) => {
    return (
        <>
            <div className='container'>
                <div className={`row ${styles.ticketrow}`}>
                    {ticketdatacard.map((data, key) => {
                        return (
                            <div key={key} className='col-lg-2 col-md-3'>
                                <div className={`row ${styles.ticketcard}`}>
                                    <div className={`col-12 ${styles.tickettitle}`}>{data.title}</div>
                                    <div className='col-4'>
                                        <Image className={`${styles.ticketimg}`} src={data.thumbnail} alt='icon' />
                                    </div>
                                    <div className={`col-8 ${styles.ticketcount}`}>{data.ticketcount}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>

    )
}

export default ticketcard
