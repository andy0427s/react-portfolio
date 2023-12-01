import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component) => {
    return function HOC({ children, idName }) {
      return (
        <motion.section
          id={idName}
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
        >
          <Component>{children}</Component>
        </motion.section>
      );
    };
  };
export default SectionWrapper;