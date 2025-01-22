// @ts-nocheck
import React from "react";
import Personaje from "../../assets/Personaje.png";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { slideUp, slideInFromSide } from "../../utility/animation";

const Body = () => {
  return (
    <section className="flex justify-center mt-36 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* descripciones */}
        <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36">
          <motion.img
            variants={slideUp(0.2)}
            initial="initial"
            animate="animate"
            src={Logo}
            alt="logo imperial"
            className="w-[150px] mx-auto"
          />
          <motion.p
            variants={slideUp(0.3)}
            initial="initial"
            animate="animate"
            className="py-12 text-white"
          >
            Únete al Imperio Galáctico y conviértete en un Stormtrooper, la fuerza de élite que mantiene el orden en la galaxia. Protege la paz, impone la justicia y sirve al Emperador con honor. Serás parte de la maquinaria más poderosa, recibirás entrenamiento avanzado y enfrentarás misiones en los rincones más emblemáticos del universo. ¡El destino de la galaxia necesita tu lealtad!
          </motion.p>
          <motion.div
            variants={slideUp(1)}
            initial="initial"
            animate="animate"
            className="flex justify-center gap-4"
          >
            {/* Botón Jugar ahora */}
            <a className="bg-red-600 py-2 px-12 rounded-3xl text-white hover:bg-red-700 transition-all duration-300 flex items-center cursor-pointer">
              Únete ahora
            </a>
          </motion.div>
        </div>

        {/* imagen */}
        <motion.div
          variants={slideInFromSide("right", 0.5)}
          initial="initial"
          animate="animate"
          className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36 mt-[-100px]"
        >
          <img src={Personaje} alt="Personaje de juego" />
        </motion.div>
      </div>
    </section>
  );
};

export default Body;
