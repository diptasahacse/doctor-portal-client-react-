import React from 'react';
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import appointment from '../../../assets/images/appointment.png'

const FormSection = () => {
    return (
        <div className='py-12' style={{ backgroundImage: `url(${appointment})` }}>
            <SectionTitle align='text-center' title='Contact Us' subTitle='Stay connected with us' subTitleColor='text-white'></SectionTitle>
            <div className='flex justify-center'>
                <form>
                    <input className=' my-2 p-3  w-full rounded-lg' type="email" name="" placeholder='Email Address' />
                    <br />
                    <input className=' my-2 p-3  w-full rounded-lg' type="text" name="" placeholder='Subject' />
                    <br />
                    <textarea className=' my-2 p-3  w-full rounded-lg' name="" cols="30" rows="5" placeholder='Your message'></textarea>
                    <br />
                    <div className='text-center'>
                        <input type="submit" value="Submit" className='btn inline-block btn-primary text-white bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary' />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default FormSection;