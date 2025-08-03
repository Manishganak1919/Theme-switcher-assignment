import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { themeClasses } from "@/constants/themeClasses";

const Index = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );
  const theme = themeClasses[currentTheme];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen ${theme.background} ${theme.text} ${theme.font} flex flex-col`}
    >
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:py-20 md:py-24 pt-24">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Welcome to <span className="text-primary">Manish's Assignment</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Discover amazing features tailored for your needs. Our platform
            adapts to your preferences with customizable themes.
          </p>

          <div className="pt-4">
            <button
              className={`px-8 py-3 rounded-lg ${theme.button} text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg`}
            >
              Get Started
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
            {[
              {
                title: "React JS",
                desc: "JavaScript library for building user interfaces",
              },
              {
                title: "Redux & TypeScript",
                desc: "State management with type safety",
              },
              {
                title: "Tailwind CSS",
                desc: "Utility-first CSS framework for rapid UI development",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-lg border ${theme.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="h-12 w-12 mb-4 mx-auto rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                  <span className="text-primary text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="opacity-80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;