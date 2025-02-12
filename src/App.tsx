import { Header } from "./components/Header";
import { SentResume } from "./components/SentResume";
import { Messenger } from "./components/Messenger";
import { Form } from "./components/Form";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <SentResume />
      <Messenger />
      <Form />
    </div>
  );
}

export default App;
