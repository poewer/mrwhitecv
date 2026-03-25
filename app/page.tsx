import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import MyProfile from "@/components/MyPortfolio";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Thesis from "@/components/Thesis";
import N8nCourse from "@/components/N8nCourse";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="ml-0 md:ml-20 overflow-x-hidden">
        <Main />
        <MyProfile />
        <About />
        <WorkExperience />
        <Skills />
        <Thesis />
        <N8nCourse />
        <Footer />
      </div>
    </div>
  );
}
