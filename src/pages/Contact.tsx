import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { themeClasses } from "@/constants/themeClasses";
import Header from "@/components/Header";

const Contact = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );
  const theme = themeClasses[currentTheme];

  return (
    <div
      className={`min-h-screen ${theme.background} ${theme.text} ${theme.font}`}
    >
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8 sm:py-12 md:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
          Contact Us
        </h1>
        <div className={`w-full max-w-md p-4 sm:p-6 rounded-lg ${theme.card} bg-opacity-80 shadow-lg`}>
          <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-center">
            Feel free to reach out to me at:
          </p>
          <div className="text-center">
            <a
              href="mailto:developer2002manish@gmail.com"
              className="text-lg sm:text-xl md:text-2xl font-semibold underline hover:text-blue-500 transition-colors break-all"
            >
              developer2002manish@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;