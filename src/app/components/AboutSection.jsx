"use client"
import React,{ useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA =[
  {
    title:"Skills",
    id:"skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>TYPESCRIPT</li>
        <li>REACT.JS</li>
        <li>NEXT.JS</li>
        <li>PYTHON</li>
        <li>C#</li>
      </ul>
    )
  },
  {
    title:"Education",
    id:"education",
    content : (
      <ul >
        <li>ศึกษาที่โรงเรียนสวนศรีวิทยา</li>
        <li>มัธยมศึกษาปีที่ 6</li>
        <li>สายการเรียน วิทย์-คณิต-คอม</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tap, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }

  return (
    <section className='text-white mt-8 ' id='about' >
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 md:py-14" >
    {/* ภาพทางซ้าย */}
    <div className="flex justify-center">
      <Image 
        src='/images/about-image.JPG' 
        alt='about' 
        width={500} 
        height={500} 
        className="rounded-xl object-cover aspect-square"
      />
    </div>
    
    {/* ข้อมูลทางขวา */}
    <div className="text-left flex flex-col h-full">
      <h2 className='text-4xl font-bold text-white mb-4 xl:my-8'>เกี่ยวกับผม</h2>
      <p className="text-base md:text-lg">
      สวัสดีครับ! ผมชื่อ นายสรวิชญ์ กุลสาโรจน์ ผมเริ่มต้นเรียนรู้และฝึกฝนทักษะการพัฒนาเว็บมาได้ประมาณ 1 ปีแล้ว และถึงแม้จะยังอยู่ในช่วงเริ่มต้น แต่ผมมีความมุ่งมั่นและหลงใหลในการเรียนรู้และพัฒนาตัวเองอยู่เสมอ

ผมได้ลองทำโปรเจกต์เล็ก ๆ มาหลายชิ้น ทั้งการพัฒนาเว็บไซต์และแอปพลิเคชันพื้นฐาน ทำให้ได้เรียนรู้วิธีการแก้ปัญหาและปรับปรุงสิ่งที่ทำไปเรื่อย ๆ ความท้าทายของงานนี้ทำให้ผมตื่นเต้นทุกครั้งที่ได้ลองสิ่งใหม่ ๆ

ในเวลาว่าง ผมชอบศึกษาเพิ่มเติมเกี่ยวกับเทคโนโลยีและเครื่องมือใหม่ ๆ ที่เราพบกันได้ทุกวัน เช่น AI เป็นต้นครับ
      </p>
      <div className="flex flex-row mt-8 justify-start space-x-4">
        <TabButton selectTab={() => handleTabChange("skills")} active={tap === "skills"}>
          {" "}Skills{" "}
        </TabButton>
        <TabButton selectTab={() => handleTabChange("education")} active={tap === "education"}>
          {" "}Education{" "}
        </TabButton>
      </div>
      <div className="mt-8">{TAB_DATA.find((t) => t.id === tap).content}</div>
    </div>
  </div>
</section>


  )
}

export default AboutSection