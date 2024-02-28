import ReactLenis from "@studio-freight/react-lenis";
import "./App.scss";
import PreLoader from "./components/PreLoader";
import Land from "./components/Land";
import Space from "./components/Space";
import Gallery from "./components/Gallery";

function App() {
  let spaces = [
    {
      name: "Mama",
      audio: "audio/uvod.m4a",
    },
  ];
  for (let i = 0; i < 100; i++) {
    spaces.push(null);
  }
  spaces.push(
    {
      name: "Maja",
      audio: "audio/maja.m4a",
    },
    {
      name: "Ilda",
      audio: "audio/ilda.m4a",
    },
    {
      name: "lamija",
      audio: "audio/lamija.m4a",
    },
    {
      name: "demir",
      audio: "audio/demir.m4a",
    },
    {
      name: "KOMŠIJE",
      audio: "audio/komsije.m4a",
    },
    {
      name: "Šaloni",
      audio: "audio/pepa.m4a",
    },
    {
      name: "gabi ❤️",
      audio: "audio/gabi.mp3",
    },
    {
      name: "gabi roditelji",
      audio: "audio/gabi-roditelji.mp3",
    },
    {
      name: "Pimpla",
      audio: "audio/pimpla.m4a",
    },
    {
      name: "gogo",
      audio: "audio/gogo.m4a",
    },
    {
      name: "Selma & Merisa",
      audio: "audio/selma.m4a",
    },
    {
      name: "Raba",
      audio: "audio/raba.m4a",
    },
    {
      name: "Buse",
      audio: "audio/buse.m4a",
    },
    {
      name: "Nina",
      audio: "audio/nina.m4a",
    },
  );
  return (
    <ReactLenis root>
      <PreLoader />
      <div className="container">
        <Land></Land>

        {spaces.map((space, index) => (
          <Space key={index} index={index} space={space} />
        ))}
      </div>
      <Gallery />
    </ReactLenis>
  );
}

export default App;
