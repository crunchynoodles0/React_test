import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Dispatch", "Hades 2", "Elden Ring", "Spider-Man", "Balatro"]; //Array

  const handleSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Games"
        onSelectItem={handleSelect}
      ></ListGroup>
    </div>
  );
}

export default App;
