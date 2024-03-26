  "use client"
  import About from '@/Components/About'
  import HeroSection from '@/Components/HeroSection'
  import NabBar from '@/Components/NabBar'
  import React from 'react'
  import { motion, useInView, useAnimation } from "framer-motion";
  import { useEffect, useRef } from "react";
  import Project from '@/Components/Project'
  import MarqueeLeft from '@/Utils/MarqueeLeft';
  import Contact from '@/Components/Contact';
  import Footer from '@/Components/Footer';
  import { SampleProject } from '@/Utils/SampleProject';


  function MainPage() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();


    useEffect(() => {
      if (isInView) {
        mainControls.start("visible")
      }
    }, [isInView, mainControls])

    return (
      <div>
        <div>

          <NabBar />
        </div>

        <div ref={ref}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }}
            className='relative'
          >
            <HeroSection />

          </motion.div>
        </div>
        
        <SampleProject/>



        <About />
        <MarqueeLeft />
        <Project />
        <MarqueeLeft />
        <Contact />
        <Footer />
        
      </div>
    )
  }

  export default MainPage;
