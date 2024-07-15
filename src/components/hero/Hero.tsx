import "./hero.scss";
import { motion } from "framer-motion";
const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
   
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%", //increase this to move longer text
      transition: {
        repeat: Infinity,
        duration: 20, // control the speed of the text
        repeatType: "mirror" as const,
      },
    },
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ROHAN SHARMA</motion.h2>
          <motion.h1 className="" variants={textVariants}>
            Web Developer
          </motion.h1>
         
          
        </motion.div>
      </div>
      <motion.div
        className="slidingtext"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web React Next.js Node.js Express.js MongoDB Mongoose Firebase
      </motion.div>
    </div>
  );
};

export default Hero;