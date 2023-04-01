import React from "react";
import { motion } from "framer-motion";

export default function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <motion.div
      className="relative flex flex-col max-w-[990px] items-start w-full 2xl:max-w-[1200px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", damping: 15 }}
    >
      {children}
    </motion.div>
  );
}
