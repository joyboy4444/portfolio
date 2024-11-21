"use client"
import React,{ useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const ProjectsData = [
  {
    id:1,
    title: "UI JJK Website",
    description: "โปรเจคฝึกการทำ UI",
    image: "/images/sukuna.png",
    tag: ["ทั้งหมด", "โปรเจคที่ฝึกทำ"],
    preview:"https://sukuna-seven.vercel.app/",
  },
  {
    id:2,
    title: "UI weather Website",
    description: "โปรเจคฝึกการทำ UI",
    image: "/images/weatherUI.png",
    tag: ["ทั้งหมด", "โปรเจคที่ฝึกทำ"],
    preview:"https://weather-ui-ten.vercel.app/",
  },
  {
    id:3,
    title: "API weather Website",
    description: "โปรเจคฝึกการใช้ api",
    image: "/images/download.png",
    tag: ["ทั้งหมด", "โปรเจคที่ฝึกทำ"],
    preview:"https://weather-sand-three.vercel.app/",
  },
  {
    id:4,
    title: "API movie Website",
    description: "โปรเจคฝึกการทำ api",
    image: "/images/movie.png",
    tag: ["ทั้งหมด", "โปรเจคที่ฝึกทำ"],
    preview:"https://movie-guide-app-ten-delta.vercel.app/",
  },
  {
    id:5,
    title: "React workout Website",
    description: "โปรเจคโครงงานจบม.5",
    image: "/images/workout.png",
    tag: ["ทั้งหมด", "โปรเจคที่ฝึกทำ"],
    preview:"https://react-firebase-gym.web.app/",
  },
  {
    id:6,
    title: "Next car Website",
    description: "โปรเจคฝึกการใช้ next",
    image: "/images/carhub.png",
    tag: ["ทั้งหมด", "โปรเจคที่ฝึกทำ"],
    preview:"https://carhub-swart-omega.vercel.app/",
  },
  {
    id:7,
    title: "NSC national software contest",
    description: "กดเพื่ออ่านเพิ่มเติม",
    image: "/images/NSC.jpg",
    tag: ["ทั้งหมด", "การแข่ง"],
    preview:"/blog",
  },

]

const ProjectsSection = () => {
  const [tag, setTag] = useState("ทั้งหมด");

  const handleTagChange = (newTag) => {
    setTag(newTag)
  };

  const filteredProjects = ProjectsData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center
      gap-2 py-6'>
        <ProjectTag onClick={handleTagChange}  
        name='ทั้งหมด' 
        isSelected={tag === "ทั้งหมด"}/>
        <ProjectTag onClick={handleTagChange}  
        name='โปรเจคที่ฝึกทำ' 
        isSelected={tag === "โปรเจคที่ฝึกทำ"}/>
        <ProjectTag onClick={handleTagChange}  
        name='การแข่ง' 
        isSelected={tag === "การแข่ง"}/>
      </div>
      <div className='grid  lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => (
        <ProjectCard 
          key={project.id}
          title={project.title} 
          description={project.description}
          imgUrl={project.image}
          tags={project.tag}
          previewUrl={project.preview}
        />))}
        </div>
    </section>
  )
}

export default ProjectsSection