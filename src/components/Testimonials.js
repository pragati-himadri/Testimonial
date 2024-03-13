import React from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setindex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) {
            setindex(reviews.length - 1);
        }
        else {
            setindex(index - 1);
        }
    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setindex(0);
        }
        else {
            setindex(index + 1);
        }

    }

    function surpriseHandler() {
        let rndmidx = Math.floor(Math.random() * reviews.length);
        setindex(rndmidx);
    }


    return (
        <div>
            <Card review={reviews[index]} />
            <div>
                <button onClick={leftShiftHandler}
                    style={{ marginRight: '10px', padding: '10px', fontSize: '20px' }}>
                    <FiChevronLeft />
                </button>
                <button onClick={rightShiftHandler}
                    style={{ padding: '10px', fontSize: '20px' }}>
                    <FiChevronRight />
                </button>
            </div>

            <div>
                <button onClick={surpriseHandler}
                    style={{ backgroundColor: 'white', color: 'black', fontSize: '20px', padding: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer', margin: '10px' }}>
                    Surprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimonials
