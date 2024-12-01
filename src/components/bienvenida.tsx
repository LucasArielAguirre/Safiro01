import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Typewriter from "typewriter-effect";
import Atropos from "atropos/react";

const Bienvenida = () => {
  return (
    <motion.section className="w-full h-full flex items-center justify-center text-white p-4 ">
      <AnimatePresence>
        <motion.div className="grid grid-cols-4 md:grid-cols-4 gap-4 max-w-xl w-full h-auto">
          <motion.div
            whileDrag={{ scale: 0.9, rotate: 0 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="col-span-4 md:col-span-4 h-40 md:h-56 rounded-lg flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-lg shadow-md shadow-purple-500 border border-white/20"
            style={{
              backgroundImage: "url(banner.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, x: -300, rotate: 80 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            whileDrag={{ scale: 0.9, rotate: 10 }}
            drag="x"
            dragConstraints={{ left: 0, right: 300 }}
            transition={{ duration: 0.5 }}
            className="h-56 overflow-x-hidden col-span-2 bg-black bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-md flex flex-col justify-center border border-white/10 shadow-black"
          >
            <h2 className="text-lg mt-2 font-textbask text-center uppercase text-purple-500">
              Streamer De Valorant
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-2 font-textbask">
              <Typewriter
                options={{
                  strings: [
                    " Bienvenido a nuestra comunidad. Aquí encontrarás directos con contenido exclusivo y una comunidad increíble. ¡Súmate! ",
                    " Realizo Speedruns del rango mas bajo al más alto en valorant, con agentes especificos y hasta en otras regiones.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 45,
                }}
              />
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300, rotate: -80 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            whileDrag={{ scale: 0.9, rotate: 10 }}
            drag="x"
            dragConstraints={{ left: -300, right: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-x-hidden col-span-2 bg-blue-600 bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-md flex flex-col justify-center border border-white/10 shadow-black"
          >
            <h1 className="text-4xl font-bold text-white text-center font-textbask">
              Safiro01
            </h1>
            <div className="w-full flex justify-center">
              <img
                src="/stream.gif"
                alt="Stream GIF"
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 max-w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            whileDrag={{ scale: 0.9, rotate: 10 }}
            drag="x"
            dragConstraints={{ right: 0, left: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 bg-black bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-md flex flex-col justify-center border border-white/10 shadow-black"
          >
            <h3 className="text-lg font-semibold mb-4 font-textbask text-center text-white">
              REDES
            </h3>
            <div className="flex gap-4 justify-center items-center">
              <a
                href="https://kick.com/safiro"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                  fill="#00ff00"
                >
                  <path d="M3 2h8v2h2V2h8v8h-2v4h2v8h-8v-2h-2v2H3zm10 16h2v2h4v-4h-2v-2h-2v-4h2V8h2V4h-4v2h-2v2H9V4H5v16h4v-4h4z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@SafiroVLR"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2.4em"
                  viewBox="0 0 256 180"
                  fill="#FF0000"
                >
                  <path d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134" />
                  <path
                    fill="#FFF"
                    d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/safirovt_/"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.7em"
                  height="2em"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect
                      width="256"
                      height="256"
                      fill="url(#skillIconsInstagram0)"
                      rx="60"
                    />
                    <rect
                      width="256"
                      height="256"
                      fill="url(#skillIconsInstagram1)"
                      rx="60"
                    />
                    <path
                      fill="#fff"
                      d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                    />
                    <defs>
                      <radialGradient
                        id="skillIconsInstagram0"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fd5" />
                        <stop offset=".1" stop-color="#fd5" />
                        <stop offset=".5" stop-color="#ff543e" />
                        <stop offset="1" stop-color="#c837ab" />
                      </radialGradient>
                      <radialGradient
                        id="skillIconsInstagram1"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3771c8" />
                        <stop offset=".128" stop-color="#3771c8" />
                        <stop offset="1" stop-color="#60f" stop-opacity="0" />
                      </radialGradient>
                    </defs>
                  </g>
                </svg>
              </a>
              <Link
                to={"/only"}
                className="hover:scale-110 transition-transform items-center align-middle"
              >
                <svg
                  viewBox="-3.98 0.25999999999999934 803.63 140.42"
                  xmlns="http://www.w3.org/2000/svg"
                  width="3em"
                  height="1.6em"
                >
                  <path
                    d="M53.46 5.98c6.99 0 13.92 1.38 20.38 4.07 6.46 2.68 12.33 6.62 17.27 11.58s8.87 10.85 11.54 17.33a53.453 53.453 0 0 1 4.05 20.44c0 21.6-12.97 41.08-32.87 49.34-19.9 8.27-42.8 3.7-58.03-11.58C.57 81.89-3.98 58.91 4.26 38.96 12.5 19 31.92 5.99 53.45 5.99zm0 69.43a15.927 15.927 0 0 0 11.31-4.68 16.1 16.1 0 0 0 3.46-5.2c.8-1.95 1.21-4.03 1.21-6.13 0-6.48-3.89-12.32-9.86-14.8s-12.84-1.11-17.41 3.47-5.94 11.47-3.46 17.46a15.97 15.97 0 0 0 14.76 9.89z"
                    fill="#00aeef"
                  />
                  <path
                    d="M113.31 46.04c13.53 3.91 29.5 0 29.5 0-4.63 20.3-19.33 33.01-40.52 34.55-2.04 4.76-4.77 9.19-8.09 13.16s-7.2 7.43-11.51 10.28c-4.32 2.85-9.02 5.05-13.97 6.53s-10.09 2.24-15.25 2.23l15.97-50.93C85.86 9.51 94.28 5.97 133.22 5.97h26.74c-4.47 19.76-19.89 34.86-46.65 40.06z"
                    fill="#008ccf"
                  />
                  <path
                    d="M303.17 59.34c0 30.39-14.96 52.18-44.73 52.18-29.98 0-44.59-21.82-44.59-52.2 0-30.03 14.84-52.05 44.59-52.05 30.38 0 44.74 21.51 44.73 52.08zM258.44 94.3c17.38 0 20.16-17.51 20.16-34.98 0-17.36-2.95-34.85-20.16-34.85s-20.02 17.6-20.02 34.84c0 17.11 2.98 34.98 20.02 34.98zm122.71-40.85v55.62h-19.01c-.47 0-.93-.09-1.37-.27a3.49 3.49 0 0 1-1.16-.78c-.33-.33-.6-.73-.77-1.16-.18-.43-.27-.9-.27-1.37V57.32c0-5.88-1.23-10.18-7.14-10.18-4.13 0-8.11 2.68-11.93 8.06a7.06 7.06 0 0 0-.93 1.93c-.1.34-.18.69-.23 1.05-.05.35-.07.71-.07 1.07v49.83h-19.01c-.47 0-.93-.09-1.37-.27a3.49 3.49 0 0 1-1.16-.78 3.597 3.597 0 0 1-1.04-2.53V32.97h13.72c.83 0 1.66.15 2.45.43.78.29 1.51.71 2.15 1.25s1.18 1.19 1.59 1.91c.42.73.7 1.52.85 2.34l.54 3.09c6.22-7.34 13.47-11.47 23.15-11.47 12.72 0 21.01 7.89 21.02 22.94zm43.57 40.03c.35.07.68.21.97.4.3.19.55.44.76.73s.36.61.45.95l3.7 13.4c-1.09.44-2.19.83-3.32 1.15-1.12.33-2.26.6-3.42.82-1.15.22-2.31.37-3.48.47s-2.34.14-3.51.12c-12.78 0-20.87-7.4-20.87-21.79V5.92a3.607 3.607 0 0 1 .92-2.39c.29-.33.64-.6 1.03-.8s.81-.33 1.25-.37l19.4-2.1v88.6c-.01 3.15 1.28 4.73 3.86 4.73.1 0 .2-.01.31-.01.1-.01.2-.01.31-.03.1-.01.2-.02.3-.04.1-.01.2-.03.3-.05.35-.06.7-.05 1.05.02zm78.41-60.53l-24.15 76.27c-6.15 19.82-19.4 29.41-39.42 31.42-.45.04-.9-.01-1.33-.14s-.83-.34-1.19-.62c-.35-.28-.65-.62-.88-1.02-.23-.39-.37-.82-.44-1.27l-1.93-12.61c12.84-1.7 19.81-4.74 24.44-15.92h-2.42c-.76 0-1.51-.13-2.23-.37s-1.4-.59-2.01-1.05c-.61-.45-1.14-1-1.58-1.62s-.77-1.31-.99-2.04l-21.65-71.05h21.14c.4 0 .8.07 1.19.2.38.13.74.33 1.05.59.31.25.58.56.8.9.21.34.37.72.45 1.12l12.99 58.83 14.21-58.9c.09-.39.25-.76.47-1.09.21-.34.48-.63.8-.88.31-.25.66-.44 1.04-.57s.77-.2 1.17-.2h20.48z"
                    fill="#00aeef"
                  />
                  <path
                    d="M512.92 11.93c.18-.43.44-.83.77-1.16s.73-.6 1.16-.78.9-.27 1.37-.27h55.45l-1.73 12.17c-.09.63-.3 1.25-.6 1.81-.31.56-.71 1.06-1.19 1.48s-1.04.75-1.64.97-1.23.34-1.87.34H536.1v26.39h28.32l-1.28 11.96c-.07.65-.26 1.29-.56 1.87-.3.59-.7 1.11-1.19 1.55s-1.05.78-1.66 1.02c-.61.23-1.26.35-1.92.35h-21.73v35.83c0 .47-.09.94-.27 1.37s-.44.83-.77 1.16-.73.6-1.16.78-.9.27-1.37.27h-19.86V13.28c0-.47.09-.94.27-1.37zm130.97 71.62c0 5.85 1.05 9.05 6.12 11.61l-3.17 7.88c-.51 1.27-1.28 2.43-2.26 3.39s-2.14 1.72-3.42 2.22-2.64.73-4.01.67c-1.37-.05-2.71-.39-3.95-.98-3.77-1.84-6.94-4.48-9.04-8.45-4.98 6.83-11.15 11.61-20.38 11.61-21.39 0-29.3-19.2-29.3-40.71 0-21.59 10.76-40.28 31.59-40.28 7.72 0 12.18 2.97 16.95 8.89l.14-.69a7.109 7.109 0 0 1 2.48-4.13c.63-.52 1.35-.93 2.12-1.21s1.59-.42 2.41-.42h13.73v50.61zm-23.92 5.03c.21-.3.4-.62.56-.95s.3-.67.42-1.02c.11-.35.2-.71.26-1.07s.09-.73.1-1.1V56.07c0-.45-.04-.9-.13-1.34a7.3 7.3 0 0 0-.37-1.29 7.128 7.128 0 0 0-1.43-2.26c-2.99-3.16-4.94-4.15-8.29-4.15-10.89 0-13.15 13-13.15 23.93s1.29 23.93 12.15 23.93c4.47 0 6.99-2.1 9.89-6.29zm106.26-35.14v55.62h-19.01c-.47 0-.93-.09-1.37-.27a3.49 3.49 0 0 1-1.16-.78c-.33-.33-.6-.73-.77-1.16-.18-.43-.27-.9-.27-1.37V57.31c0-5.88-1.24-10.18-7.15-10.18-4.13 0-8.11 2.68-11.93 8.06a7.06 7.06 0 0 0-.93 1.93c-.1.34-.18.69-.23 1.05-.05.35-.07.71-.07 1.07v49.83h-19.01c-.47 0-.93-.09-1.37-.27a3.49 3.49 0 0 1-1.16-.78c-.33-.33-.6-.73-.77-1.16-.18-.43-.27-.9-.27-1.37V32.95h13.72c.83 0 1.66.15 2.45.43.78.29 1.51.71 2.15 1.25s1.18 1.19 1.6 1.91c.42.73.7 1.52.85 2.34l.54 3.1c3.24-3.82 6.74-6.69 10.5-8.6 13.58-6.88 33.66-2.95 33.67 20.07zm73.42 32.99c0 17.01-16.58 25.09-33.73 25.09-11.41 0-23.31-3.51-31.74-11.35l8.86-9.93c.27-.32.6-.58.97-.78s.77-.33 1.18-.39.84-.04 1.24.04c.41.09.8.25 1.15.48 7.21 4.85 14.83 6.61 22.86 5.28.83-.14 1.62-.43 2.34-.85a7.08 7.08 0 0 0 3.14-3.78c.28-.79.42-1.63.41-2.47-.1-3.81-1.85-5.35-5.57-6.89-9.55-3.95-32.87-6.23-32.87-27.17 0-15.3 15.11-23.22 31.02-23.22 10.02 0 20.04 2.91 27.87 9.32l-6.44 9.91c-.23.37-.53.69-.88.95s-.74.45-1.16.57-.86.15-1.29.11-.85-.17-1.24-.37c-6.61-3.56-13.28-4.91-20-4.02-2.93.38-5.29 2.94-5.14 5.9.16 3.26 2.25 4.5 5.42 5.88 13.45 5.87 33.59 6.59 33.6 27.69z"
                    fill="#008ccf"
                  />
                </svg>
              </Link>
              <a
                href="https://www.twitch.tv/safiro01"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.96em"
                  height="1.9em"
                  viewBox="0 0 256 268"
                >
                  <path
                    fill="#5a3e85"
                    d="M17.458 0L0 46.556v186.201h63.983v34.934h34.931l34.898-34.934h52.36L256 162.954V0zm23.259 23.263H232.73v128.029l-40.739 40.741H128L93.113 226.92v-34.886H40.717zm64.008 116.405H128V69.844h-23.275zm63.997 0h23.27V69.844h-23.27z"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/SafiroVT"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.604 25.622L7.693 41.498M37.924 6.502L25.554 21.07M6.61 6.5l27.44 35h7.56l-27.439-35z"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
          <Atropos
            activeOffset={30}
            rotateXMax={15}
            rotateYMax={15}
            duration={400}
            commonOrigin={true}
            className="atropos-container relative col-span-4 h-[300px] w-full bg-transparent rounded-lg overflow-hidden transition-transform duration-300"
          >
            <Link
              to="/challenges"
              className="relative flex flex-col items-center justify-center w-full h-full p-6 shadow-lg rounded-lg overflow-hidden"
            >
              <img
                data-atropos-offset="5"
                src="/jett.jpg"
                alt="Jett"
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500"
              />
              <h3
                data-atropos-offset="30"
                className="relative z-10 text-5xl font-textbask text-black text-center underline"
              >
                SPEEDRUNS
              </h3>
            </Link>
          </Atropos>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default Bienvenida;
