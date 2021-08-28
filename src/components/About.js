import React from "react";

export default function About() {
  return (
    <div>
      <span id="about"></span>
      <h2 className="header">about</h2>
      <section className="mt-6 md:mt-10 ml-0 md:ml-28 mr-0 md:mr-40 grid gap-y-4 text-primary">
        <p>
          Hello! I’m Matiurrehman from Dharwad.
          <br />
          Currently studying
          <span className="font-semibold">
            &nbsp;Computer Science & Engineering&nbsp;
          </span>
          at&nbsp;
          <a
            className="text-link underline-anim"
            href="https://klsvdit.edu.in//"
            target="_blank"
            rel="noopener noreferrer"
          >
            KLS's Vishvanathrao Deshpande Institute of Technology
          </a>
          .
        </p>
        <p>
          I enjoy creating things for the internet whether that be a website or
          an application or anything in between which is not only functional but
          also beautiful bringing elegant experience.
        </p>
        <p>
          Whenever I am not studying or working, I’m probably watching movies or
          tv-shows.
        </p>
      </section>
    </div>
  );
}
