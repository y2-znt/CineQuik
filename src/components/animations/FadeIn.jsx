import { motion } from "motion/react";

export default function FadeIn({ children, delay = 0 }) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1.2, delay }}
    >
      {children}
    </motion.div>
  );
}
