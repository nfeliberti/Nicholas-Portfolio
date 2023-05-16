import React, {useContext} from 'react'

const ProfileCard = () => {
  return(
    
      <div className ="gradient-bg-navbar flex flex-1 border-white 
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      rounded-md hover:shadow-2xl"
      >
       
          <div className= "flex flex-col items-center w-full  mb-2 p-1">
            <img
              src= "/src/assets/images/profilepic.png "
              className = "w-full  h-64 2x:h-96 rounded-md shadow-lg object-cover"
            />
          </div>
          
        </div> 
    
    

  )
}

const Welcome = () => {
  return (
    <div className= "flex w-full justify-center items-center ">
      <div className ="flex mf: flex-row flex-col items-start justify-between md: p-20 py-12 px-4 ">
        <div className= "about-container flex flex-1 justify-start flex-col mf:mr-10">
          <h3 className="text-2xl sm:text-5xl justify-center text-white text-gradient py-1">About me</h3>
          <h2 className="text-3xl sm:text-5xl text-white text-gradient py-1">
          Web UI/UX Developer <br/>
          </h2>
          <p className= "about-text text-left mt-5 text-white font-light md: w-9/12 w-11/12 text-base">
          Hi, my name is Nicholas and this is my most up to date project portfolio. Below you will see a list of projects that I have worked on over the course of the years. These projects will include turtorial projects and live running websites. Please take a look at some of my top projects further below. Click on the button to go to my github and see some of the projects that are not listed here. 
          </p>
          
          <div className="justify-center pt-1 ml-10">
          <button
            type="button"
            onClick={() => window.location = 'https://github.com/nfeliberti'}
            className ="button-container flex flex-row justify-center items-center my5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] "
            >
            <p className="text-white text-base font-semibold">Visit My GitHub</p>
            
          </button>
          
          </div>
          
        </div>
           
      </div>
     
      <div className= "bg-container bg-inherit border-white flex float-right  w-4/5 mr-3 p-2">
        
        <ProfileCard className = "w-full p-1  2x:h-96 rounded-md shadow-lg object-cover"/>

      </div>
      
    </div>
    
  )
}

export default Welcome