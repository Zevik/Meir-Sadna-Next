'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PoemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-8 pb-20 md:py-32 bg-gradient-to-br from-accent-cream via-accent-cream/30 to-accent-orange/10"> {/* Changed from pt-12 to pt-8 */}
      <div className="container mx-auto px-2 sm:px-4 max-w-4xl">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-4 {/* Changed from mb-8 to mb-4 */}
                     bg-gradient-to-r from-primary-dark to-primary 
                     text-transparent bg-clip-text"
        >
          יש לי פרצוף
        </motion.h2>

        {/* רקע דקורטיבי */}
        <div className="absolute -top-10 right-0 w-40 h-40 bg-accent-orange/30 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-10 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-30" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-accent-cream/10 backdrop-blur-sm rounded-3xl p-12 shadow-xl"
        >
        </motion.div>
      </div>
    </section>
  );
}