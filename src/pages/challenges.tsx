import React, { useState } from "react";
import { motion } from "framer-motion";
import { agentes, Agente } from "../data/data"; 
import Typewriter from "typewriter-effect";
import NumberFlow from '@number-flow/react'


const AgentSelection: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agente | null>(null);

  const hoverSound = new Audio("/hover.mp3");
  hoverSound.volume = 0.1; 

  const selectSound = new Audio("/selected.mp3");
  selectSound.volume = 0.1; 

  const handleHoverSound = () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  };

  const handleSelectSound = (agent: Agente) => {
    selectSound.currentTime = 0;
    selectSound.play();
    setSelectedAgent(agent);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full md:w-auto overflow-hidden bg-[url('/omen4k.webp')]  bg-cover bg-center bg-no-repeat">
      <h1 className="absolute font-textbask text-center justify-center align-middle w-full text-xl md:text-5xl text-white font-extralight underline decoration-purple-700/30 ">
        SPEEDRUNS CON AGENTES
      </h1>

      <motion.div 
        className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3 p-6 w-[80%] 
        md:w-2/5 lg:w-1/3 bg-zinc-900/50 backdrop-blur-lg shadow-lg 
        md:m-10 lg:m-16 shadow-black rounded-2x justify-center items-center align-middle m-auto"
      >
        {agentes.map((agent) => (
          <motion.div
            initial={{ opacity: 0, scale:0.4 }}
            animate={{ opacity: 1, scale:1 }}
            transition={{ duration: 0.5 }}
            key={agent.id}
            onMouseEnter={handleHoverSound}
            onClick={() => {
              if (agent.speedrun) {
                handleSelectSound(agent);
              }
            }}
            className={`cursor-pointer transition-transform transform hover:scale-105 hover:bg-purple-300/40 overflow-hidden 
            flex items-center justify-center rounded-lg ${
              agent.speedrun
                ? "bg-opacity-60 border-blue-400 hover:border-blue-300 shadow-md"
                : "bg-opacity-50 border-gray-600 grayscale  opacity-50 cursor-not-allowed"
            }`}
          >
            <img
              src={agent.img}
              alt={agent.name}
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
      <article className="flex-1 p-6 m-auto justify-center align-middle items-center font-textbask overflow-hidden">
        {selectedAgent ? (
          <div
          >
         <div
  className="bg-zinc-950/90 border border-white/40 p-6 rounded-xl shadow-lg text-white font-textbask flex flex-col md:flex-row items-center md:items-start md:space-x-8"
  data-atropos-offset="1"
>
  <div
    className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0"
    data-atropos-offset="0"
  >
    <img
      src={selectedAgent.stats ? selectedAgent.stats[0].img_agent : ""}
      alt={selectedAgent.name}
      className="w-[200px] h-[400px] object-cover rounded-lg border border-gray-300/30"
      data-atropos-offset="4"
    />
  </div>
  <div
    className="w-full md:w-2/3 text-left space-y-4"
    data-atropos-offset="0"
  >
    <h2 className="text-3xl font-bold text-center md:text-left mb-6 uppercase">
      Estadísticas con <span className="text-purple-600">{selectedAgent.name}</span>
    </h2>
    <p className="text-xl">
      Nombre de la cuenta:{" "}
      {selectedAgent.stats
        ? selectedAgent.stats[0].nameaccount
        : "N/A"}
    </p>
    <p>W/L: {selectedAgent.stats ? selectedAgent.stats[0].winandloss : "N/A"}</p>
    <p>
      K/D:{" "}
      {selectedAgent.stats ? (
        <NumberFlow value={selectedAgent.stats[0].kd} />
      ) : (
        "N/A"
      )}
    </p>
    <p>
      HS:{" "}
      {selectedAgent.stats ? (
        <NumberFlow value={selectedAgent.stats[0].hs}/>
      ) : (
        "N/A"
      )}
      %
    </p>
    <p>
      WINRATE:{" "}
      {selectedAgent.stats ? (
        <NumberFlow value={selectedAgent.stats[0].winrate} />
      ) : (
        "N/A"
      )}
      %
    </p>
    <p>
      HORAS JUGADAS:{" "}
      {selectedAgent.stats ? (
        <NumberFlow value={selectedAgent.stats[0].hours} />
      ) : (
        "N/A"
      )} 
    </p>
    <p
      className="mt-6 text-center md:text-left"
    >
      PLAYLIST COMPLETA DEL SPEEDRUN:
      <a
        target="_blank"
        referrerPolicy="no-referrer"
        className="text-purple-800 hover:text-purple-600 transition-all ml-2 gap-2"
        href={
          selectedAgent.stats
            ? selectedAgent.stats[0].link
            : "N/A"
        }
      >
        <strong className="hover:underline decoration-purple-700">CLICK AQUI</strong> <span className="animate-pulse delay-200">👈🏻</span>
      </a>
    </p>
  </div>
</div>
          </div>
        ) : (
          <div className="text-center text-gray-400">
            <p className="text-2xl font-textbask">
            <Typewriter
      options={{
        strings: [
          " Selecciona un agente disponible para ver las estadisticas.",
        ],
        autoStart: true,
        loop: true,
        delay: 45,
      }}
    />
            </p>
          </div>
        )}
      </article>
    </div>
  );
};

export default AgentSelection;
