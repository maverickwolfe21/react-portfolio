import React from "react";

const Resume = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <button className="border-2 border-black rounded-md bg-transparent text-black p-1">
        <a href="/assets/resume.pdf" download>
          Download Resume
        </a>
      </button>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-medium">Proficiencies</h1>
        <ul className="list-disc list-inside">
          <li>HTML (HyperText Markup Language)</li>
          <li>CSS (Cascading Style Sheets)</li>
          <li>JavaScript</li>
          <li>Front-end Frameworks and Libraries (React and TailwindCSS)</li>
          <li>Back-end Development (Node.js)</li>
          <li>Database Management (MySQL, PostgreSQL, MongoDB)</li>
          <li>Version Control (Git/GitHub)</li>
          <li>Deployment and Hosting (Heroku and Render)</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
