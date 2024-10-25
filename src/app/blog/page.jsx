import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const Blog = () => {
  return (
<section className='flex min-h-screen flex-col mx-auto px-6 py-4'>
  <Navbar />
  <Link href="/" className="text-white hover:text-slate-300 mb-4 inline-block text-xl text-left ml-10 md:ml-4 mt-28">
      &lt; ย้อนกลับ
    </Link>
  <div className="p-6 mt-8 mx-auto w-full max-w-2xl lg:max-w-5xl md:max-w-3xl"> {/* ใช้ mx-auto และ w-full หรือ w-3/4 เพื่อกำหนดความกว้าง */}
    
    <h1 className="text-6xl font-bold text-purple-500 text-center">การแข่งขัน</h1>
    <hr className='border-2 border-purple-100 mt-4'/>
    <h2 className="text-4xl font-bold text-white text-center mt-10"> NSC (Smart Farm AI)</h2>

    {/* จัดการการแสดงรูปภาพตรงกลาง */}
    <div className="flex justify-center mt-8">
      <Image 
        src="/images/NSC.jpg"  // เปลี่ยน path เป็นภาพที่คุณต้องการ
        alt="NSC image"
        className="object-cover"
        width={800}
        height={800}
      />
    </div>

    <div className='flex flex-col justify-center mt-7 text-clip'> {/* ใช้ text-center เพื่อจัดเนื้อหาให้อยู่ตรงกลาง */}
      <h2 className='text-purple-500 text-4xl my-8 text-left lg:ml-14 font-semibold'>
        จุดเริ่มต้น
      </h2>
      <p className="text-white text-lg lg:text-xl mx-auto w-full lg:w-3/4 leading-relaxed"> {/* ใช้ mx-auto และ w-3/4 เพื่อจำกัดความกว้างข้อความ */}
        <span>
        จุดเริ่มต้นของการเข้าร่วมการแข่งขันนี้มาจากการที่เพื่อนผมกำลังหาทีมมาแข่งและได้ชวนผมเข้าร่วมด้วยครับ ในตอนแรกผมก็กังวลเล็กน้อยว่าจะไปแข่งจริงๆ เหรอ จะไหวแน่เหรอ ที่ผ่านมา ผมก็ไม่เคยแข่งจริงจังเลยสักครั้ง แต่ผมก็คิดว่าเป็นโอกาสดีที่จะได้รู้จักกับโลกไอทีมากขึ้น จึงได้ร่วมสมัครไปครับ        </span>
      </p>
      <h2 className='text-purple-500 text-4xl my-8 text-left lg:ml-14 font-semibold'>
      หาหัวข้อในการแข่ง
      </h2>
      <p className='text-white text-lg lg:text-xl mx-auto w-full lg:w-3/4 leading-relaxed'>
        <span>
        หลังจากที่รวมทีมกันได้แล้ว พวกผมได้เริ่มหาไอเดียในการแข่งขัน ไม่ว่าจะเป็นแอพดูหนังสำหรับคนตาบอด หรือแอพบอกสีสำหรับคนตาบอดสี ในตอนนั้นหัวหน้าของผมได้มีความคิดว่าเพื่อที่จะเข้าถึงกลุ่มผู้ใช้งานได้ง่ายและเข้าใจจริงๆ จึงเลือกเป็นสิ่งที่ใกล้ตัวเราดีกว่า จังหวัดที่ผมอยู่คือจังหวัดชุมพร สิ่งที่เด่นเลยก็คือการเกษตร ทำให้สุดท้ายหัวข้อของเราก็คือ Smart Farm AI        </span>
      </p>
      <div className="flex justify-center mt-12">
      <Image 
        src="/images/cc2.jpg"  // เปลี่ยน path เป็นภาพที่คุณต้องการ
        alt="NSC image"
        className="object-cover"
        width={500}
        height={500}
      />
    </div>
      <p className='text-slate-300 mt-3 text-sm lg:text-lg mx-auto w-full lg:w-3/4 leading-relaxed text-center'>
        <span>
          ขอบคุณภาพจาก MGR online
        </span>
      </p>
      <h2 className='text-purple-500 text-4xl my-8 text-left lg:ml-14 font-semibold'>
      ผ่านรอบข้อเสนอโครงการ
      </h2>
      <p className='text-white text-lg lg:text-xl mx-auto w-full lg:w-3/4 leading-relaxed'>
        <span>
        พอได้หัวข้อแล้ว พวกเราก็รีบปั่นเอกสารกันเลยครับ รวมถึงต้องทำ UI เพื่อนำมาประกอบในคู่มือใช้งานด้วย และเผอิญว่าตอนนั้นพวกผมต้องสอบปลายภาคด้วย บอกได้เลยว่ายุ่งเหยิงมากๆ ครับ 5555 แต่สุดท้ายพวกเราก็ทำเสร็จทันในวันสอบนั้นเลย และเป็นวันสุดท้ายที่เขารับสมัครด้วยครับ เรียกได้ว่ายืนอยู่ปลายเหวสุดๆ แต่เราก็ได้เข้ารอบนำเสนอมาแล้วครับบ        
        </span>
      </p>
      <div className="flex justify-center mt-12">
      <Image 
        src="/images/nscapp.png"  // เปลี่ยน path เป็นภาพที่คุณต้องการ
        alt="NSC image"
        className="object-cover"
        width={300}
        height={300}
      />
    </div>
    <p className='text-slate-300 mt-3 text-lg mx-auto w-full lg:w-3/4 leading-relaxed text-center'>
        <span>
          หน้า UI ของแอพเรา เราจะมีการบอกรายละเอียดต่างๆเกี่ยวกับฟาร์ม
        </span>
      </p>
    <div className="flex justify-center mt-12">
      <Image 
        src="/images/nscapp2.png"  // เปลี่ยน path เป็นภาพที่คุณต้องการ
        alt="NSC image"
        className="object-cover"
        width={300}
        height={300}
      />      
    </div>
    <p className='text-slate-300 mt-3 text-lg mx-auto w-full lg:w-3/4 leading-relaxed text-center'>
        <span>
          เราจะใช้ Ai ในการประเมิณผลข้อมูลที่ได้และแสดงมาทางแอป
        </span>
      </p>
      <h2 className='text-purple-500 text-4xl my-8 text-left lg:ml-14 font-semibold'>
      มาเริ่มพัฒนากัน
      </h2>
      <p className='text-white text-lg lg:text-xl mx-auto w-full lg:w-3/4 leading-relaxed'>
        <span>
        ข่าวร้ายคือ เวลาในการพัฒนาของพวกเราน้อยมากครับ เรามีเวลาแค่ 7 วันเท่านั้น เราต้องเริ่มพัฒนาเดี๋ยวนี้เลย แนวคิดของงานเราคือ เสาตรวจสภาพแวดล้อมในฟาร์มและจะใช้ AI ประมวลผลข้อมูลที่ได้มาแสดงในแอปครับ เราจะแบ่งเป็น 3 ฝ่าย คือ คนพัฒนาแอป คนเทรน AI และคนที่ทำเกี่ยวกับ IoT (ในทีมมี 3 คนพอดีครับ) ปัญหาแรกที่เจอเลยคืออุปกรณ์ IoT มาส่งไม่ทัน ทำให้พาร์ท IoT พัฒนาได้ช้ากว่าด้านอื่น แต่เราก็ทำอะไรไม่ได้ จึงพัฒนาส่วนที่เหลือต่อครับ และเวลาก็น้อยลงเรื่อยๆ ทำให้เวลาในการพักก็น้อยลงเรื่อยๆ ครับ ถึงขนาดที่ 3 วันก่อนไปงานแข่ง พวกเราได้นอนแค่ 1 ชั่วโมงเอง และ 1 วันก่อนแข่งก็ไม่ได้หลับเลยครับ        </span>
      </p>
      <div className="flex justify-center mt-12">
      <Image 
        src="/images/nsc3.jpg"  // เปลี่ยน path เป็นภาพที่คุณต้องการ
        alt="NSC image"
        className="object-cover"
        width={300}
        height={300}
      />
    </div>
    <p className='text-slate-300 mt-3 text-lg mx-auto w-full lg:w-3/4 leading-relaxed text-center'>
        <span>
          T T
        </span>
      </p>
    <h2 className='text-purple-500 text-4xl my-8 text-left lg:ml-14 font-semibold'>
    1 วันก่อนแข่ง
      </h2>
      <p className='text-white text-lg lg:text-xl mx-auto w-full lg:w-3/4 leading-relaxed'>
        <span>
        โปรเจกต์ของพวกผมเสร็จไปได้แค่ 70% เท่านั้น แต่เราก็ยอมแพ้ไม่ได้แล้วครับ มาไกลกันขนาดนี้แล้ว เราได้เดินทางมาที่โรงแรมเป็นที่เรียบร้อย วันต่อไปก็ต้องไปแข่งแล้ว เราปั่นกันแทบลุกเป็นไฟ แอปของผมกับ AI ก็เสร็จแล้ว แต่ปัญหาคือ IoT ยังไม่พร้อม เพราะต้องหาอุปกรณ์ในจังหวัดที่มาแข่งเลย (ตอนนั้นแข่งที่มหาวิทยาลัยสงขลานครินทร์ หาดใหญ่ จ.สงขลา) หลังจากได้ชิ้นส่วนมาแล้ว เราก็ปั่นกันต่อเลยครับ       
        </span>
      </p>
      <div className="flex justify-center mt-12 mb-4">
      <Image 
        src="/images/nsc2.jpg"  // เปลี่ยน path เป็นภาพที่คุณต้องการ
        alt="NSC image"
        className="object-cover"
        width={500}
        height={500}
      />
      </div>
      <h2 className='text-purple-500 text-4xl my-5 text-left lg:ml-14 font-semibold'>
      วันแข่ง
      </h2>
      <p className='text-white text-lg lg:text-xl mx-auto w-full lg:w-3/4 leading-relaxed'>
        <span>
        งานของเรายังไม่เสร็จสมบูรณ์ ปัญหาอยู่ที่การรับข้อมูลจาก IoT ที่มาไม่ครบ และไม่สามารถเชื่อมกันให้อัพเดทข้อมูลแบบเรียลไทม์ได้ แต่ถึงอย่างนั้น พวกเราก็ต้องไปนำเสนองานกันแล้ว ไม่มีเวลาเหลือให้เราแล้ว        
        </span>
      </p>
      <div className="flex justify-center mt-12 mb-4">
      <Image 
        src="/images/nsc4.jpg"  // เปลี่ยน path เป็นภาพที่คุณต้องการ
        alt="NSC image"
        className="object-cover"
        width={300}
        height={300}
      />
      </div>
      <p className='text-white text-lg lg:text-xl mx-auto w-full lg:w-3/4 leading-relaxed mt-8'>
        <span>
        เมื่อไปถึงงานแข่ง ผมก็ได้พบเจอโปรเจกต์มากมายจากหลายโรงเรียนในภาคใต้ ไม่ว่าจะเป็นเกมนำเสนอสถานที่ท่องเที่ยว หรือการใช้ AI ตรวจจับท่าทางต่างๆ พวกเรามาถึงโต๊ะ เราก็ได้เซ็ตอุปกรณ์ต่างๆ ให้พร้อมกับการนำเสนอครับ เมื่อถึงเวลางานเริ่ม คณะกรรมการก็ได้ลงมาตรวจทีละโต๊ะ ระหว่างนี้ผมก็ได้ไปดูงานของคนอื่นด้วย เรียกได้ว่างานผมน่าหดหู่เลยครับ 5555 ครูที่ปรึกษาเองก็บอกว่าถ้าได้เข้ารอบต่อไป ถือว่าเป็นปาฏิหาริย์มากๆ 555        </span>
      </p>
      <p className='text-white text-lg lg:text-xl mx-auto w-full lg:w-3/4 leading-relaxed mt-3'>
        <span>
        และเมื่อกรรมการมา พวกผมได้นำเสนองานที่ทำมาทั้งหมด ด้วย passion ที่ไม่ยอมแพ้ บอกข้อดีทั้งหมดของเรา คณะกรรมการก็ดูสนใจงานของพวกผมนะ แต่แน่นอนพวกท่านก็เจอข้อเสียด้วย ไม่ว่าจะเป็นการอัพเดทข้อมูลที่ไม่เรียลไทม์ ความแข็งแรงของเสา และแนวทางในการพัฒนาต่อไป
        </span>
      </p>
      <h2 className='text-purple-500 text-5xl my-8 text-left lg:ml-14 font-semibold mt-10'>
      สุดท้ายนี้
      </h2>
      <p className='text-white text-lg lg:text-xl mx-auto w-full lg:w-3/4 leading-relaxed'>
        <span>
        เป็นอย่างที่คิดครับ พวกผมตกรอบ ไม่ได้เข้ารอบต่อไป ถึงจะเสียดาย แต่ก็ไม่เสียใจเลยครับ เพราะงานชิ้นนี้มันเต็มไปด้วยความพยายาม passion การไม่ยอมแพ้ของพวกเราครับ และผมก็ได้ถ่ายทอดทั้งหมดนั้นให้กับคณะกรรมการและผู้อ่านบล็อกนี้ไปหมดแล้วครับ        </span>
      </p>
      <p className='text-white text-lg lg:text-xl mx-auto w-full lg:w-3/4 leading-relaxed text-center mt-40'>
        <span>
        ขอบคุณทุกท่านที่อ่านบล็อกนี้จนจบ สุดท้ายนี้ผมอยากจะบอกกับทุกคนว่า จงอย่ายอมแพ้ ไม่ว่าผลลัพธ์จะเป็นอย่างไร สิ่งที่สำคัญที่สุดคือการที่เราได้พยายามอย่างเต็มที่แล้ว        </span>
      </p>
      <div className="flex justify-center mb-4 mt-20">
      <Image 
        src="/images/thank_you1.png"  // เปลี่ยน path เป็นภาพที่คุณต้องการ
        alt="NSC image"
        className="object-cover "
        width={700}
        height={700}
      />
      </div>
    </div>
  </div>
</section>

  );
};

export default Blog;
