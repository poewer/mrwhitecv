import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import GitHubActivity from "@/components/GitHubActivity";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="ml-0 md:ml-20 overflow-x-hidden">
        <Main />
        <About activity={<GitHubActivity />} />
        <WorkExperience />
        <OpenSource />
        <Skills />
        <Education />
        <Footer />
      </div>
    </div>
  );
}
