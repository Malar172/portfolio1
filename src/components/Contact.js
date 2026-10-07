import ContactImg from '../images/resume.png';

export default function Contact(){
    const config ={
        email :'malarvizhi1792@gmail.com',
        phone :'+46 xxxxxxxx46'
    }
    
    return <section id='contact' className='flex flex-col  bg-secondary px-5 py-32 text-white'>
        
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl  border-b-4 border-secondary  border-[#9fa0c1] mb-5 w-[135px] font-bold'>Contact</h1>
            <p className='pb-5 text-white' >If you want to discuss more in detail,Please contact Me.</p>
            <p className='py-2'><span className='font-bold'>Email:</span>{config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone:</span>{config.phone}</p>
        </div>
    
    </section>
}
