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
                Halo! Saya Yogi. Saya mulai belajar pengembangan web pada saat
                saya sedang kuliah di semester 2. Saya belajar pengembangan web
                awalnya dari situs website yaitu freeCodeCamp dan menonton video
                youtube untuk mempelajari tentang bagaimana cara membuat sebuah
                website yang baik dan menarik.
              </p>
              <p>
                Ada banyak teknologi yang saya harus pelajari dalam pengembangan
                frontend dan itu yang membuat saya semakin bersemangat dalam
                mempelajarinya. Saya menyiapkan seperti goals – goals yang harus
                saya penuhi agar saya bisa berkembang secara signifikan.
              </p>
              <p>
                Di website ini saya akan menulis beberapa blog dan memamerkan
                project yang telah saya buat, namun saya tidak akan memamerkan
                project yang bersifat sederhana tetapi saya memamerkan project
                yang sifatnya sudah publik. Dan tujuan saya membuat blog pada
                website ini dengan maksud agar pengunjung atau pembaca blog di
                website saya ini agar mereka bisa mengerti apa yang saya
                kerjakan dan saya alami dalam proses pengembangan website.
              </p>
            </article>
            <h3 className="h4 mt-4">What I`m up to?</h3>
            <article className="mt-2 prose">
              <ul>
                <li>
                  Saya seorang full-stack engineer di organisasi GenPI (Generasi
                  Pesona Indonesia) Kota Dumai
                </li>
                <li>
                  Saya seorang penulis blog di website GenPI Kota Dumai dan
                  website saya sendiri
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
              Jika kalian ada kendala dalam pengembangan web. Saya akan dengan
              senang hati membantu!.
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
