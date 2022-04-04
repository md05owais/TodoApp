import React, { useState } from "react";
import TodoForm from "./TodoForm";
import AddToDo from "./AddToDo";
import "./style.css";
const App = () => {
  const [color, setColor] = useState({
    primaryColor: '#c084fc',
    backColor: '#fafafa',
    fontColor: "white",
  })
  const [data, setData] = useState([
    {
      title: "javaScript",
      Description: "new todo",
    },
    {
      title: "cpp",
      Description: "2nd ",
    },
  ]);
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const titleUpdate = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
    // console.log(title);
  };
  const DescriptionUpdate = (e) => {
    // console.log(e.target.value);
    setDescription(e.target.value);
  };
  const AddToDoAnother = (event) => {
    event.preventDefault();
    const newTodo = { title, Description };
    // console.log(newTodo);
    data.push(newTodo);
    setData(data);
    setTitle("");
    setDescription("");
  };

  const deleteTodo = (e) => {
    const x = data.filter(
      (value, index) => value.title + value.Description + index + 1 !== e
    );
    setData(x);
  };

  return (
    <div className="MainContainer">
      <div>
        <TodoForm
          onSubmitForm={AddToDoAnother}
          title={title}
          titleUpdate={titleUpdate}
          desc={Description}
          DescriptionUpdate={DescriptionUpdate}
        />
      </div>
      <div class="ui labeled button" tabindex="0">
        <div class="ui red button">
          <i class="heart icon"></i> Total task todo
        </div>
        <a class="ui basic red left pointing label">{data.length}</a>
      </div>

      <AddToDo data={data} deleteTodo={deleteTodo} />
    </div>
  );
};
export default App;
