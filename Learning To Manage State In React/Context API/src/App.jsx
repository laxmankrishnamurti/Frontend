import { Header, InputForm, TodoList, Footer } from "./components/index";
import useTodo from "./Context/TodoContext";
import { TodoContext } from "./Context/TodoContext";

function App() {
  const vlaue = useTodo();
  console.log("Value is : ", vlaue);

  return (
    <>
      <TodoContext.Provider vlaue={{ todos }}>
        <Header />
        <InputForm />
        <Footer />
      </TodoContext.Provider>
    </>
  );
}

export default App;
