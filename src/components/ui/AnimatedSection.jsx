import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionBox = motion(Box);

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  direction = 'up',
  ...props 
}) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: -40 },
    right: { x: 40 },
  };

  return (
    <MotionBox
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
      viewport={{ 
        once: true, 
        amount: 0.3 
      }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default AnimatedSection;