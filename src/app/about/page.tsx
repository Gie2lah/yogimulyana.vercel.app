"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import profile from "../../../public/images/yogi.jpg";
import {
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiInstagram,
  SiNextdotjs,
  SiLaravel,
  SiTailwindcss,
  SiFirebase,
  SiMysql,
} from "react-icons/si";
import TechStack from "@/components/Techstack";
import SocialIcons from "@/components/SocialIcons";

export default function About() {
  return (
    <main>
      <section>
        <div className="layout pt-[120px]">
          <h2>About</h2>
          <h1 className="mt-1">Yogi Mulyana Prayoga</h1>
          <div className="mt-4">
            <Image
              src={profile}
              width="1500"
              height="1695"
              alt="Picture of me"
              className="rounded float-right ml-6 w-40 md:w-72"
            />
            <article className="prose">
              <p>
                Hello, I&#39;m Yogi. I started learning web development during
                my second semester in college. I initially began learning from
                websites like freeCodeCamp and watching YouTube videos to
                understand how to create a good and engaging website.
              </p>
              <p>
                There&#39;s a lot of technology to grasp in frontend
                development, and that&#39;s what excites me about learning it.
                I&#39;ve set specific goals that I aim to achieve to make
                significant progress.
              </p>
              <p>
                On this website, I&#39;ll be writing some blogs and showcasing
                projects I&#39;ve worked on. However, I won&#39;t showcase
                simple projects; rather, I&#39;ll display projects that are
                already public. My goal in creating blogs on this website is to
                help visitors and blog readers understand what I&#39;ve worked
                on and experienced throughout the website development process.
              </p>
            </article>
            <h3 className="h4 mt-4">What I&#39;m up to?</h3>
            <article className="mt-2 prose">
              <ul>
                <li>
                  I am a full-stack engineer at GenPI (Generasi Pesona
                  Indonesia) in Dumai City.
                </li>
                <li>
                  I am a blog writer on the GenPI Dumai City website as well as
                  on my personal website.
                </li>
              </ul>
            </article>
            <h3 className="mt-12">Tech Stack</h3>
            <figure className="mt-2">
              <TechStack />
            </figure>
          </div>
        </div>
      </section>
      <section>
        <div className="layout mt-16 pb-20">
          <h2>Contact</h2>
          <article className="prose mt-4">
            <p>
              If you encounter any challenges in web development, I&#39;d be
              more than happy to help!.
            </p>
          </article>
          {/* <figure className="mt-2">
            <SocialIcons />
          </figure> */}
        </div>
      </section>
    </main>
  );
}
