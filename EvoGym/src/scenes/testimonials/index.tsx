import HText from "@/shared/HText";
import { SelectedPage, testimonialType } from "@/shared/types";
import { motion } from "framer-motion";
import Testimonial from "./Testimonial";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Testimonials = ({ setSelectedPage }: Props) => {
  return (
    <section id="testimonials" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        className=""
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-4/5"
        >
          <HText>TESTIMONIALS</HText>
          <p className="py-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 text-center md:mt-18 md:flex">
         
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
