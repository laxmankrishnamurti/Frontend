import List from './components/List'

function App() {

  const fruits = ["Apple", "Mango", "Banana", "Grapes", "Lichi", "Pineapple", "Watermelon"]
  const vegetables = ["Radish", "Tomato", "Potato", "Ladyfinger", "Cucumber", "Onion"]
  const sports = ["Chess", "Hocky", "Tenis-cricket", "Kabaddi", "Cricket"]

  return (
    <>
      <List styleType="none" data={fruits} dataInfo="Fruits" />
      <List styleType="disc" data={vegetables} dataInfo="Vegetables" />
      <List styleType="decimal" data={sports} dataInfo="Sports" />
    </>
  )
}

export default App
