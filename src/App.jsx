// import Greeting from "./components/pure/Greeting";
// import Greetingf from "./components/pure/Greetingf";
import ContactComponent from "./components/container/Contact";
import TaskList from "./components/container/TaskList";

const App = () => {
  return (
    <div>
      {/* <Greeting name={'Yoan'} />
       <Greetingf name={'Yoan'} /> */}
      <TaskList />
      <ContactComponent />
    </div>
  );
}

export default App;