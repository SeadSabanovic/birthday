import ReactLenis from "@studio-freight/react-lenis";
import "./App.scss";
import PreLoader from "./components/PreLoader";
import Land from "./components/Land";
import Space from "./components/Space";

function App() {
  let spaces = [
    {
      name: "Mama",
    },
  ];
  for (let i = 0; i < 100; i++) {
    spaces.push(null);
  }
  return (
    <ReactLenis root>
      {/* <PreLoader /> */}
      <div className="container">
        <Land></Land>
        {spaces.map((space, index) => (
          <Space key={index} index={index} space={space} />
        ))}
      </div>
    </ReactLenis>
  );
}

export default App;
