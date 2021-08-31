import "./App.css";
import landscape from "./images/landscape.png";
import sky from "./images/sky.png";
// import final from "./images/Section-2.png";
function App() {
  window.addEventListener("scroll", function () {
    let text = document.getElementById("text");
    var value = window.scrollY;
    text.style.top = value * 0.25 + "px";
  });
  return (
    <section>
      <h1 id="text">TREKK</h1>
      {/* <img src={final} id="sec"></img> */}
      <img src={sky} id="sky" alt="sky"></img>
      <img src={landscape} id="landscape" alt="landscape"></img>
    </section>
  );
}

export default App;
