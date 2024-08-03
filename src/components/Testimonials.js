import react from 'react';
import ProfilePic from '../assets/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonials = () => {
    return(
        <div className='work-section-wrapper'> 
            <div className='work-section-top'>
                <p className='primary-subheading'>Testimonials</p>
                <h1 className='primary-heading'> What they are saying</h1>
                <p className='primary-text'>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <div className='testimonial-section-bottom'>
                <img src ={ProfilePic} alt=''/>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className='testimonials-stars-conatiner'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                
                </div>
                <h2>John Doe</h2>

            </div>
        </div>
    )
}
export default Testimonials;