import classNames from "classnames";
import Story from "./Story";
import Features from "./Features";

const Home = () => {
  return (
    <div
      className={classNames({
        "text-gray-800 dark:text-gray-100": true,
      })}
    >
      <Story />
      <Features />
    </div>
  );
};

export default Home;
