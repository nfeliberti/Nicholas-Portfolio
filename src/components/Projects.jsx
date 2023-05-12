import React, {useContext} from 'react'

import {works} from './constants'

const ProjectCard = ({image, title, description, tags, visit, source}) => {
  return(
    
      <div className ="gradient-bg-projects m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      flex-col p-3 rounded-md hover:shadow-2xl"
      >
       
          <div className= "flex flex-col items-center w-full mt-3">
            <div className=" display-flex justify-start w-full mb-6 p-2">
              <h3 className ="text-white">{title}</h3>
              <>
              <br/>
              <p className ="text-white">{description}</p>
              </>

    
            </div>
            <img
              src= {image}
              className = "w-full p-1 h-64 2x:h-96 rounded-md shadow-lg object-cover"
            />
            <div className =" p-2 px-5 w-max rounded-3xl  ">
              <p className="text-white font-bold">{tags}</p>
            
             
            </div>
            <a className="text-white font-bold " href={visit}>Visit</a>
              <a className="text-white" href={source}>Source</a>
    
          </div>
          
        </div> 
    
    

  )
}

const Projects = () => {
  return (
    <div className= "flex flex-col md:flex-row w-ful justify-center items-center gradient-bg-projects">
      <div className ="flex flex-col md-p-12 py-12 px-4">
        <h3 className="text-white text-3xl text-center my-2">Top projects</h3>
        <div className="flex flex-wrap justify-center items-center mt-10">
          {works.map((work, i)=>{
            return (
              <ProjectCard key={i} {...work}/>
            ) 
          })} 
        </div>
      </div>
    </div>
  )
}

export default Projects