import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';




const Card = (props) => {
    let review = props.review;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px' }}>
            <div>
                <img src={review.image} style={{ width: '200px', height: '200px', borderRadius: '50%', marginBottom: '20px' }} />
            </div>

            <div>
                <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{review.name}</p>
            </div>

            <div>
                <p style={{ fontSize: '16px', marginBottom: '10px' }}>{review.job}</p>
            </div>

            <div>
                <FaQuoteLeft style={{ fontSize: '24px', marginBottom: '10px' }} />
            </div>

            <div>
                <p style={{ fontSize: '16px', marginBottom: '10px' }}>{review.text}</p>
            </div>

            <div>
                <FaQuoteRight style={{ fontSize: '24px', marginTop: '10px' }} />
            </div>
        </div>


    )
}

export default Card
