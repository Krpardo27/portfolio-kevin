// components/PageWrapper.jsx
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "spring",
  ease: "easeInOut",
  duration: 0.4,
};

export const PageWrapper = ({ children }) => {
  return (
    <motion.div
      className="w-full h-full"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};
