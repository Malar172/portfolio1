import ResumeImg from '../images/resume.png';

export default function Resume(){
      const config ={
        link: 'https://r.search.yahoo.com/_ylt=A2RSe0y4IsZqxQIAlBc_Ogx.;_ylu=Y29sbwNldS13ZXN0LTEEcG9zAzYEdnRpZAMEc2VjA3Ny/RV=2/RE=1792579512/RO=10/RU=https%3a%2f%2fontheline.trincoll.edu%2fimages%2fbookdown%2fsample-local-pdf.pdf/RK=2/RS=_.TkE0KeIiwlVZDxWi1HTF1rtNU-'
      }    
    
    return <section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl text-white border-b-4  border-[#2b2d77] mb-5 w-[135px] font-bold'>Resume</h1>
            <p className='pb-5'>You can view My Resume Here.<a className='btn' href={config.link}>Download</a></p>
           </div> 
        </div>
    </section>
}