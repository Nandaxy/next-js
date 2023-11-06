import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section id='about' className="flex items-center justify-center h-full md:h-screen w-full bg-gray-100 dark:bg-black">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto p-10 shadow-lg rounded-lg md:bg-white bg-gray-100 dark:bg-dark dark:md:bg-dark">
        <div className="flex-shrink-0 mr-6">
            <Image src="/about.png" width={300} height={300}  alt='about' className='hidden md:block'></Image>
            <Image src="/about.png" width={250} height={250}  alt='about' className='mb-10 block md:hidden'></Image>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-sm md:text-lg mb-6">
            Saya adalah seorang pengembang web pemula dengan pengalaman dalam membangun web
            menggunakan teknologi HTML,CSS,JS.
          </p>
          <p className="text-sm md:text-lg mb-6">
            Saya juga terus belajar dan eksplorasi teknologi baru untuk memperluas keterampilan dan
            memberikan solusi terbaik untuk setiap tantangan pengembangan.
          </p>
          <p className="text-sm md:text-lg">
            Jika Anda tertarik untuk bekerja sama atau ingin mengetahui lebih lanjut tentang saya,
            jangan ragu untuk menghubungi saya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
