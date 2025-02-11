import { Header } from "./components/Header";

import "./App.scss";
import { SentResume } from "./components/SentResume";
import { Messenger } from "./components/Messenger";

function App() {
  return (
    <div className="container">
      <Header />
      <SentResume />
      <Messenger />
    </div>
  );
}

export default App;
