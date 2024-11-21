import React from "react";

const GifEmbed = () => {
  return (
    <div className="relative w-full" style={{ paddingTop: "100%" }}>
      <iframe
        src="https://gifer.com/embed/1kLR"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allowFullScreen
        title="Gif Embed"
      ></iframe>
      <p className="mt-2 text-sm text-gray-500">
        {/* Elimina cualquier comportamiento de enlace al usar un <span> */}
        <span className="text-blue-500 hover:underline cursor-default">
          a través de GIFER
        </span>
      </p>
    </div>
  );
};

export default GifEmbed;
