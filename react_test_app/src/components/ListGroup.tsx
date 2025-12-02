import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; //Tells the app component that a button has been clicked
}

function ListGroup(props: Props) {
  //props can be restructred to {items, heading} so the preface would no longer be needed
  //let items = ["Dispatch", "Hades 2", "Elden Ring", "Spider-Man", "Balatro"]; //Array
  //let selectedIndex = -1; Checks which item is clicked on to highlight it
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  /*const arr = useState(-1); initialize it to -1 returns array
  arr[0]; variable (selectedIndex)
  arr[1]; method to update selectedIndex*/

  //const message = items.length === 0 ? <p>Item not founs</p> : null; //Making a conditional statement to see if the array is empty
  const getMessage = () => {
    // Making it a function
    return props.items.length === 0 ? <p>Item not founs</p> : null;
    //props.items.length === 0 && <p>Item no exist</p>; A different way to rewrite the same code true && 1 = 1
  };
  // Handles the click. the event: MouseEvent specifies the type of variable event is
  //const handleClick = (event: MouseEvent) => console.log(event); Need to learn how to pass the item so that it can print that as well
  return (
    //We can't have multiple container types (the "h1" and "ul") return  at once
    //We can wrap it in a div container or Fragment container.
    //An empty container tells React to wrap it in one container.
    <>
      <h1>{props.heading}</h1>
      <ul className="list-group">
        {getMessage()} {/*Dynamically checking if array is empty*/}
        {props.items.map(
          (
            item,
            index // You can use a map to make every item in an array become a different item
          ) => (
            <li
              className={
                selectedIndex === index // Checks which item is being clicked on
                  ? "list-group-item active" // Makes that item active
                  : "list-group-item" // Otherwise make it not highlighted but still lines
              } //Making the lines appear to seperate each item
              key={item} // Making a key for each time to get that item from say an api call of something like that
              onClick={() => {
                setSelectedIndex(index); // Making a method to track which item is clicked on.
                props.onSelectItem(item); //Sends information back to the app that something has been clicked
              }}
            >
              {item}
            </li> // The {} means that the containers is being made dynamically
          )
        )}
      </ul>
    </>
  );
}

export default ListGroup;
