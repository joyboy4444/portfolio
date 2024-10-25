"use client";
import React from 'react'
import GithubIcon from "../../../public/images/github-icon.svg"
import IGIcon from "../../../public/images/icons8-instagram.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section id="contact" className='grid md:grid-cols-2 mt-12 md:my-12 py-24 gap-4 relative'>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className='text-xl font-bold text-white my-2'>ติดต่อ</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          ถ้าคุณต้องการติดต่อผมหรือพูดคุยเกี่ยวกับโปรเจกต์ที่น่าสนใจ สามารถติดต่อได้ผ่านช่องทางต่าง ๆ ด้านล่างนี้ ไม่ว่าจะเป็นเรื่องการทำงานร่วมกัน การปรึกษาเกี่ยวกับเทคโนโลยี หรือการพูดคุยเรื่องทั่วไป ผมยินดีเป็นอย่างยิ่งที่จะได้รู้จักและแลกเปลี่ยนความคิดกับคุณ!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/joyboy4444" target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt='Github Icon' />
          </Link>
          <Link href="https://www.instagram.com/sossy_xx/" target="_blank" rel="noopener noreferrer">
            <Image src={IGIcon} alt='IG Icon' />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col'>
          <div className='mb-6'>
            <label className='text-white block mb-2 text-sm font-medium' htmlFor='email'>
              Email
            </label>
            <input  
              type="email" 
              id='email' 
              name='email'
              required 
              className='bg-[#18191E] border border-[#33353F] 
                placeholder-[#9CA2A9] text-gray-100 text-sm 
                rounded-lg block w-full p-2.5'
              placeholder='Email ของคุณ'
            />
          </div>
          <div className='mb-6'>
            <label className='text-white block text-sm mb-2 font-medium' htmlFor='subject'>
              หัวข้อ
            </label>
            <input  
              name='subject'
              type="text" 
              id='subject' 
              required 
              className='bg-[#18191E] border border-[#33353F] 
                placeholder-[#9CA2A9] text-gray-100 text-sm 
                rounded-lg block w-full p-2.5'
              placeholder='หัวข้อข้อความ'
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className='text-white block text-sm mb-2 font-medium'>
              ข้อความ
            </label>
            <textarea 
              name="message" 
              id="message"
              className='bg-[#18191E] border border-[#33353F] 
                placeholder-[#9CA2A9] text-gray-100 text-sm 
                rounded-lg block w-full p-2.5'
              placeholder='รายละเอียด....'
            />                            
          </div>
          <button
            type='submit'
            className='bg-purple-500 hover:bg-purple-600 
              text-white font-medium py-2.5 px-5 rounded-lg w-full'>
            ส่งข้อความ
          </button>
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
