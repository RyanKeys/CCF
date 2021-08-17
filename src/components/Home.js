import MobileHome from "./MobileHome.js";
import DesktopHome from "./DesktopHome.js";

const Home = () => {
  if (window.innerWidth < 970) {
    return <MobileHome />;
  } else {
    return <DesktopHome />;
  }
};

export default Home;
