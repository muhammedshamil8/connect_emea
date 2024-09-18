import React, { useState } from 'react';
import Icon from '@/assets/avatars/welcome.png';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/join');
    };

    return (
        <section className='text-center flex flex-col gap-4 my-4'>
            <div className='text-center flex flex-col max-w-[600px] mx-auto'>
                <h1 className='text-[20px] md:text-[32px] font-semibold uppercase'>
                    WHERE&nbsp; <span className='text-orange-500'>STUDENTS&nbsp; </span>meet&nbsp; peers,&nbsp;
                    <br />purpose&nbsp;and&nbsp;passion&nbsp;
                </h1>
                <p className='text-sm sm:text-lg'>For students, by students.</p>
            </div>

            <button
                className='px-10 sm:px-14 py-1 sm:py-1.5 bg-orange-600 text-white rounded-full w-fit mx-auto font-bold tracking-normal transition-all hover:bg-orange-500'
                onClick={handleClick}
            >
                Intens Register
            </button>

            {!loaded && (
                <div className='absolute inset-0 bg-white flex items-center justify-center'>
                    <p className='text-gray-500'>Loading...</p>
                </div>
            )}

            <div className='relative'>
                <img
                    src={Icon}
                    alt='avatar'
                    className='w-full max-w-[700px] h-auto mx-auto mt-6'
                    onLoad={() => setLoaded(true)}
                />
            </div>
        </section>
    );
}

export default Welcome;
