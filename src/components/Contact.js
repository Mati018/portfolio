import React from "react";

export default function Contact() {
  return (
    <div>
      <span id="contact"></span>
      <h2 className="header">contact</h2>
      <section className="grid mt-6 ml-0 mr-0 md:mt-10 md:ml-28 md:mr-80 gap-y-4 text-primary">
        <p>
          Currently looking for opportunities where I can not only learn new
          skills by solving different types of problems but also apply what I
          know myself. Nevertheless, my inbox is always open.
        </p>
        <p>
          <a
            href="mailto:matiurrehman.meersayed@gmail.com"
            className="text-link underline-anim"
          >
            Say hi.
          </a>
        </p>
        <p>
          I am also on&nbsp;
          <a
            href="https://www.facebook.com/mati.rehman.940"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link underline-anim"
          >
            Facebook
          </a>
          ,&nbsp;
          <a
            href="https://www.instagram.com/_vulpes_00/?utm_medium=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link underline-anim"
          >
            Instagram
          </a>
          ,&nbsp;
          <a
            href="https://twitter.com/mati548"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link underline-anim"
          >
            Twitter
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://www.linkedin.com/in/matiurrehman-meersayed-a164329a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link underline-anim"
          >
            Linkedin
          </a>
          .
        </p>
      </section>
    </div>
  );
}
