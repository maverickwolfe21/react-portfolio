import React from "react";

const AboutMe = () => {
  return (
    <div className="flex items-center gap-5">
      <img className="w-72 h-72 object-contain" src="public/assets/profile-pic-cropped.webp" alt="Maverick Wolfe" />
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl">Maverick Wolfe</h1>
        <p>I enjoy learning about new technologies and creating simple and efficient systems that make life easier for everyone.</p>
      </div>
    </div>
  );
};

export default AboutMe;
