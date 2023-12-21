import CustomEditor from "@/components/tinymce/CustomEditor";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import BlogPage from "@/components/content/blogs/BlogPage";
import ProjectComponent from "@/components/content/projects/BlogPage";

export default function HomePage() {
  return (
    <>
      <div className="h-screen px-[7%] sm:px-[14%] py-[150px]">
        <div>
          <div className="mb-6">
            <h1 className="text-lg sm:text-xl font-bold text-white">
              Hi!, my name is
            </h1>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl sm:text-4xl">Yogi Mulyana Prayoga</h2>
          </div>
          <div className="mb-8">
            <h3 className="text-3xl sm:text-5xl">
              I&#39;m just a regular person.
            </h3>
          </div>
          <div className="w-full sm:w-1/2 mb-10">
            <p className="leading-relaxed">
              I&#39;m an ordinary person who enjoys sharing knowledge about the
              web world through blogs I&#39;ve written in a more understandable
              language.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="/blogs" className="border px-4 py-2 rounded">
              Read the blog
            </Link>
            <Link href="/about" className="border px-4 py-2 rounded">
              Learn more about me
            </Link>
          </div>
        </div>
        <div className="hidden lg:block left-16 fixed z-10 text-2xl bottom-0">
          <ul className="social space-y-6">
            <li className="hover:text-white hover:scale-95">
              <SiGithub />
            </li>
            <li className="hover:text-white hover:scale-95">
              <SiInstagram />
            </li>
            <li className="hover:text-white hover:scale-95">
              <SiLinkedin />
            </li>
          </ul>
        </div>
        <div className="hidden lg:block right-16 fixed z-10 text-2xl bottom-0">
          <div className="email flex flex-col">
            <Link href={""} className="text-email">
              yogimulyana498@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <BlogPage />
      <ProjectComponent />
    </>
  );
}
