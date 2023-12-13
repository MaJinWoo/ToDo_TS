import AddForm from "./components/AddForm";
import LetterList from "./components/LetterList";

function App() {
  return (
    <div>
      <header>Todo List</header>
      <main>
        <AddForm />
        <LetterList isDone={false} />
        <LetterList isDone={true} />
      </main>
    </div>
  );
}

export default App;
