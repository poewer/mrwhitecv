import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import MyProfile from "@/components/MyPortfolio";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      {/* Sidebar zostaje przyklejony */}
      <Sidebar />

      {/* Główna zawartość strony */}
      <div className="ml-20">
        <Main />
        <MyProfile />
        <WorkExperience />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
