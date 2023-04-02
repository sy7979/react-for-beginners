import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
    // console.log(toDo);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(toDo);
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => {
      return [...currentArray, toDo];
    });
    setToDo("");
  };
  console.log(toDos);
  console.log(
    toDos.map((item, index) => {
      return (
        <li key={index}>
          <input type="checkbox" id={"checkbox" + index} />
          <label htmlFor={"checkbox" + index}>{item}</label>
        </li>
      );
    })
  );
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Submit</button>
      </form>
      <hr />
      <ol>
        {toDos.map((item, index) => {
          return (
            <li key={index}>
              <input type="checkbox" id={"checkbox" + index} />
              <label htmlFor={"checkbox" + index}>{item}</label>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
