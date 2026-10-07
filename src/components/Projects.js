import websiteImg1 from '../images/ecommerce.jpg';
import websiteImg2 from '../images/coffeeshop.avif';
export default function Projects(){
    
    const config ={
        projects :[
            {
                 image:websiteImg1,
                 description:'A Coffee Shop Website.Built with HTML,CSS and JavaScript.',
                 link:'https://malar172.github.io/Coffee-shop/'
            },
            {
                image:websiteImg2,
                description:'A E-Commerce Website.Built with React,Tailwindcss and Javascript.',
                link:''
            }
        ]
    }

    
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-secondary">
        <div className="w-full">
          <div className="flex flex-col px-10 py-5">
          <h1 className='text-4xl text-white border-b-4 border-[#9093de] mb-5 w-[150px] font-bold'>Projects</h1>
          <p className='text-white'>These are projects. I have built with HTML,CSS ,JavaScript and Tailwindcss.Check them out. </p>
        </div>
     </div>
         <div className="w-full">
         <div className='flex flex-col md:flex-row px-10 gap-5 '>
            {config.projects.map((project)=> ( <div className='relative'>
           
           <img className="w-full max-w-[400px] h-[250px] object-cover rounded-lg" src={project.image}/>
           <div className='project-desc'>
            <p className='text-center px-5 py-5'>{project.description}</p>
           
             <div className='flex justify-center'>
              <a className='btn' target='_blank' href={project.link}>View Project</a>  
           </div>
           </div>
             
     </div>
     ))}
           
           
         </div>
         
    </div>
    </section>
}