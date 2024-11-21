import { motion, LayoutGroup } from "framer-motion";

const Contenido = () => {
  return (
   <section className="flex flex-col text-white w-full h-full items-center justify-center font-textbask px-4">

      <LayoutGroup> 
        <h1 className="text-3xl md:text-5xl text-center mb-6">¿DÓNDE ENCONTRARME?</h1>
        
      <motion.article 
     layoutId="item" 
     initial = {{ opacity: 0, scale: 0.4 }}
     animate = {{ opacity: 1, scale: 1 }}
     transition = {{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full md:w-[60%] my-4">

        <motion.div className="w-full h-[200px] sm:h-[300px] md:h-[400px] bg-slate-400 bg-[url('/shots-banner.png')] bg-cover bg-center rounded-lg border border-purple-950">
        </motion.div>

        <div className="w-full h-[60px] flex flex-row justify-center items-center bg-neutral-900/10 rounded-b-lg gap-4 text-sm sm:text-base">
        <a
            className="hover:scale-105 border border-gray-600/30 py-2 px-2 rounded-full hover:shadow-sm hover:shadow-purple-800 animate-pulse"
            href="https://www.twitch.tv/safiro01"
            target="_blank"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="1.96em" height="1.5em" viewBox="0 0 256 268"><path fill="#5a3e85" d="M17.458 0L0 46.556v186.201h63.983v34.934h34.931l34.898-34.934h52.36L256 162.954V0zm23.259 23.263H232.73v128.029l-40.739 40.741H128L93.113 226.92v-34.886H40.717zm64.008 116.405H128V69.844h-23.275zm63.997 0h23.27V69.844h-23.27z"/></svg>
          </a>
          <a href="https://kick.com/safiro" target="_blank" className="hover:scale-105 border border-gray-600/30 py-2 px-2 rounded-full hover:shadow-sm hover:shadow-green-800 flex items-center animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="1.5em"
                viewBox="0 0 24 24"
                fill="#00ff00"
              >
                <path d="M3 2h8v2h2V2h8v8h-2v4h2v8h-8v-2h-2v2H3zm10 16h2v2h4v-4h-2v-2h-2v-4h2V8h2V4h-4v2h-2v2H9V4H5v16h4v-4h4z" />
              </svg>
            </a>
        </div>
      </motion.article>


      <motion.article 
      initial = {{ opacity: 0, scale: 0.4 }}
      animate = {{ opacity: 1, scale: 1 }}
      transition = {{ duration: 0.5 }}
      layoutId="item"
      className="flex flex-col items-center justify-center w-full md:w-[60%] mb-4">

        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] bg-[url('/shots-banner2.png')] bg-cover bg-center border border-purple-950">
        </div>
        <div className="w-full h-[60px] flex flex-row justify-center items-center bg-neutral-900/10 rounded-b-lg gap-4 text-sm sm:text-base py-5">
        <a href="https://www.youtube.com/@SafiroVLR" target="_blank" className="hover:scale-105 border border-gray-600/30 py-2 px-2 rounded-full hover:shadow-sm hover:shadow-red-800 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 256 180"
                fill="#FF0000"
              >
                <path d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134" />
                <path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
              </svg>
            </a>
        </div>
      </motion.article>
     </LayoutGroup>
    </section> 
  );
};

export default Contenido;
``
