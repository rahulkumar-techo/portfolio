import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Btech in Computer Science"
            subTitle="RTCIT ranchi "
            result="3.90/4"
            des="Embarking on a B.Tech journey—unveiling the realm of technology, problem-solving, and innovation. A transformative experience awaits, paving the future ahead."
          />
          <ResumeCard
            title="AS - Science & Information"
            subTitle="RTCIT anandi "
            result="4.75/5"
            des="Embark on the fascinating journey of AS Science & Information. Uncover the intricacies of data, algorithms, and scientific exploration, expanding knowledge and possibilities"
          />
          <ResumeCard
            title="Secondary Education"
            subTitle="Ram tahal chaudhay P.H.E.D buti "
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold"> Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="As a Instructor"
            subTitle="TCS "
            result="Banglore"
            des="Empower minds with expertise. As an instructor, navigate the path of knowledge, inspire growth, and shape futures through education's transformative force"
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Android Developer Team "
            result="Noida"
            des="Explore the digital realm seamlessly with our web and app solutions. Intuitive design, functionality, and accessibility redefine your online experience"
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle=" Vista"
            result="Ranchi"
            des="Frontend magic unveiled: Elevate user experiences with responsive design, sleek interfaces, and seamless interactions. Transform visions into captivating digital landscapes"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education