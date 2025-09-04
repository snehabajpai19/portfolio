import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import PageLoader from "./components/PageLoader";

export default function App() {
  return (
    <div className="bg-white font-sans antialiased text-gray-900">
      <PageLoader />
      <Header />
      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Education />
        <Achievements />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
