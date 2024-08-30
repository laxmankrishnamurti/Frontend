import {
  UserContextProvider,
  ProductContextProvider,
} from "./Context/index.contextProvider";
import {
  Header,
  Form,
  UserInfo,
  ProductForm,
  Product,
} from "./Components/index.components";

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <UserInfo />
        <Form />
      </UserContextProvider>
      <ProductContextProvider>
        <ProductForm />
        <Product />
      </ProductContextProvider>
    </>
  );
}

export default App;
