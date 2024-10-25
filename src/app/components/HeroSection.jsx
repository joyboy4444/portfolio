"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
  <div className="grid grid-cols-1 sm:grid-cols-12 mt-40">
    {/* ข้อความและปุ่ม */}
    <div className="col-span-7 place-self-center text-center sm:text-left">
      <h1 className="text-purple-300 mb-4 text-4xl lg:text-6xl font-bold ">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mb-4 text-center sm:text-left">
        ยินดีต้อนรับสู่
      </div>


        <TypeAnimation
          sequence={[
            'เว็บไซต์',
            1000,
            'Portfolio',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.5em', fontWeight: 'bold' }}
          repeat={Infinity}
        />
        <div className="text-white mt-4">ของ dev สมัครเล่น</div>
      </h1>
      <p className="text-gray-400 text-lg lg:text-xl mb-6">
      ยินดีต้อนรับสู่พื้นที่เล็ก ๆ ของผม คุณจะได้เห็นผลงานและโปรเจกต์ต่าง ๆ ที่ผมทำขึ้น ทั้งโปรเจกต์ส่วนตัวและกิจกรรมต่างๆ
      </p>
      <div>
        <button className="px-6 py-3 w-full sm:w-auto rounded-full mr-4 bg-gradient-to-r from-purple-500 to-pink-600 font-bold text-white hover:text-black">
        <a href="#projects">ดูผลงาน</a>
        </button>
        <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-white hover:bg-slate-300 text-black mt-4 sm:mt-0 font-bold">
        <a href="#contact">ติดต่อ</a>
        </button>
      </div>
    </div>
    
    {/* รูปภาพ */}
    <div className="col-span-5 place-self-center mt-8 lg:mt-0 hidden lg:block">
      <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-purple-500">
        <Image
          src="/images/hero-image.JPG"
          alt="hero image"
          layout="fill"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

  )
}

export default HeroSection