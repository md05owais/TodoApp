import React from "react";
// import "./style.css";

const TodoForm = ({
  onSubmitForm,
  titleUpdate,
  DescriptionUpdate,
  title,
  desc,
}) => {
  return (
    <form id="myForm" onSubmit={(event) => onSubmitForm(event)}>
      <div className="inputBox">
        <h2 className="heading">Add To Do</h2>
        <label htmlFor="input"></label>
        <input
          className="ui large icon input"
          onChange={(e) => titleUpdate(e)}
          value={title}
        />
        <br></br>
        <textarea
          id="textarea"
          onChange={(e) => DescriptionUpdate(e)}
          value={desc}
        ></textarea>
        <br></br>
        <button className="ui inverted green button" style={{ color: "white" , backgroundColor:"#4ade80"}}>
          Add task: <i class="pencil alternate icon"></i>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
