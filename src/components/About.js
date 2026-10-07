import AboutImg from '../images/about.png';

export default function About(){
    const config ={
        line1: 'Hi, Im Malarvizhi Raju, a passionate and curious web developer who loves creating websites that are simple, modern. and user-friendly.',
        line2: 'I enjoy working with HTML, CSS, JavaScript, React, and GitHub to create responsive and interactive web experiences.',
        line3: 'As a student developer, I have worked on projects such as To-Do List Management Systems, Asset Tracking Systems, Portfolio Websites, and Package Tracking Applications.'
    }
    
    
    return <section className='flex flex-col md:flex-row bg-primary px-5'id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            
            <h1 className='text-4xl text-white border-b-4  border-[#2b2d77] mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}