import React, { useState } from "react";
import { motion } from "framer-motion";
import { agentes, Agente } from "../data/data"; // Importamos la lista de agentes

const AgentSelection: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agente | null>(null);

  // Cargar los sonidos
  const hoverSound = new Audio("/hover.mp3");
  const selectSound = new Audio("/selected.mp3");

  // Función para reproducir sonido en hover
  const handleHoverSound = () => {
    hoverSound.currentTime = 0; // Reinicia el sonido si ya se estaba reproduciendo
    hoverSound.play();
  };

  // Función para reproducir sonido al seleccionar
  const handleSelectSound = (agent: Agente) => {
    selectSound.currentTime = 0;
    selectSound.play();
    setSelectedAgent(agent);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full md:w-auto overflow-hidden ">
      <h1 className="absolute font-textbask text-center justify-center align-middle w-full text-xl md:text-5xl text-purple-600/80 font-extralight ">
        SPEEDRUNS CON AGENTES
      </h1> 

      {/* Contenedor de selección de agentes */}
      <motion.div 
        className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3 p-4 w-[80%] 
        md:w-2/5 lg:w-1/3 bg-gray-300/10 bg-opacity-20 backdrop-blur-lg shadow-lg 
        md:m-10 lg:m-16 shadow-purple-400 rounded-2x justify-center items-center align-middle m-auto"
      >
        {agentes.map((agent) => (
          <motion.div
            initial={{ opacity: 0, scale:0.4 }}
            animate={{ opacity: 1, scale:1 }}
            transition={{ duration: 0.5 }}
            key={agent.id}
            onMouseEnter={handleHoverSound} // Reproducir sonido al pasar el mouse
            onClick={() => {
              if (agent.speedrun) {
                handleSelectSound(agent); // Reproducir sonido al hacer clic
              }
            }}
            className={`cursor-pointer transition-transform transform hover:scale-105 hover:bg-purple-300/40 overflow-hidden 
            flex items-center justify-center rounded-lg ${
              agent.speedrun
                ? "bg-opacity-60 border-blue-400 hover:border-blue-300 shadow-md"
                : "bg-opacity-50 border-gray-600 grayscale opacity-50 cursor-not-allowed"
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

      {/* Panel de detalles del agente */}
      <article className="flex-1 p-6 m-auto justify-center align-middle items-center font-textbask overflow-hidden  ">
        {selectedAgent ? (
          <div className="bg-gray-800 bg-opacity-20 p-6 rounded-xl shadow-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-6 uppercase">
              Estadísticas con <span className="text-purple-600">{selectedAgent.name}</span> 
            </h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <img
                src={selectedAgent.stats ? selectedAgent.stats[0].img_agent : ""}
                alt={selectedAgent.name}
                className="w-[170px] h-[370px] object-cover rounded-lg border border-gray-300/30"
              />
              <div className="mt-4 md:mt-0 text-left">
                <p className="text-xl">
                  NOMBRE DE LA CUENTA:{" "}
                  {selectedAgent.stats
                    ? selectedAgent.stats[0].nameaccount
                    : "N/A"}
                </p>
                <p>
                  W/L:{" "}
                  {selectedAgent.stats
                    ? selectedAgent.stats[0].winandloss
                    : "N/A"}
                </p>
                <p>
                  K/D:{" "}
                  {selectedAgent.stats ? selectedAgent.stats[0].kd : "N/A"}
                </p>
                <p>
                  HS:{" "}
                  {selectedAgent.stats ? selectedAgent.stats[0].hs : "N/A"}
                </p>
                <p>
                  Winrate:{" "}
                  {selectedAgent.stats
                    ? selectedAgent.stats[0].winrate
                    : "N/A"}
                  %
                </p>
                <p>
                  HORAS JUGADAS:{" "}
                  {selectedAgent.stats
                    ? selectedAgent.stats[0].hours
                    : "N/A"}
                </p>
                <p className="">
                  PLAYLIST COMPLETA DEL SPEEDRUN:
                  <a
                  target="_blank"
                    referrerPolicy="no-referrer"
                    className="text-red-700 hover:text-red-500 transition-all animate-pulse delay-200 "
                    href={
                      selectedAgent.stats
                        ? selectedAgent.stats[0].link
                        : "N/A"
                    }
                  >
                    {" "}
                    CLICK AQUI 👈🏻
                  </a>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-400">
            <p className="text-2xl font-textbask">
              Selecciona un agente disponible para ver sus estadísticas.
            </p>
          </div>
        )}
      </article>
    </div>
  );
};

export default AgentSelection;