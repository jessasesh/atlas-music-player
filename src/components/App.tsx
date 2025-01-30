import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="bg-background dark:bg-darkBackground h-full flex flex-col justify-between p-8 min-h-screen">
      <div className=" sm:flex justify-between p-8">
        <MusicPlayer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
