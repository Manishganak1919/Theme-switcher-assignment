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
      <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
        {" "}
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="text-xl p-6 rounded-lg bg-opacity-20 bg-white dark:bg-gray-700">
          <p className="mb-4">Feel free to reach out to me at:</p>
          <a
            href="mailto:your.email@example.com"
            className="text-2xl font-semibold underline hover:text-blue-500 transition-colors"
          >
            developer2002manish@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
