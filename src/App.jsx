// @ts-nocheck
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";
import Fondo from "./assets/Fondo.webp";

function App() {
  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    position: "relative",
  };

  return (
    <div
      style={bgImagen}
      className="flex justify-center overflow-hidden min-h-screen"
    >
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
