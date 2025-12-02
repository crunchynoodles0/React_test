import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup"; //not needed for now

function App() {
  let items = ["Dispatch", "Hades 2", "Elden Ring", "Spider-Man", "Balatro"]; // Array that will be passed to the lists component

  const handleSelect = (item: string) => {
    //Prints out which item
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items} //Pass the items array
        heading="Games" //Pass the heading
        onSelectItem={handleSelect} //Pass a function that will update the console when called
      ></ListGroup>
      <Alert text="text"></Alert>
    </div>
  );
}

export default App;
