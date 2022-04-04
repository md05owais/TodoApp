import { useState } from "react";

const AddToDo = (props) => {
  return (
    <div className="ui items outerdiv">
      {props.data.map((value, index) => {
        // console.log(value);
        return (
          <div
            className="item innerDiv"
            key={value.title + value.Description + index + 1}
            style={{
              backgroundColor: "#c084fc",
              width: "60%",
              marginLeft: "18%",
              hover: "red",
              borderRadius: "5px",
            }}
          >
            <div className="checkBox">
              <input type="checkbox"></input>
            </div>
            <div className="content">
              <span className="header">({index + 1}). </span>
              <span className="header">{value.title}</span>
              <div className="meta">
                <span>{value.Description}</span>
              </div>
            </div>
            <button
              className="delete"
              id={index + 1}
              onClick={(e) =>
                props.deleteTodo(value.title + value.Description + index + 1)
              }
            >
              <i class="trash icon"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default AddToDo;

// <div className="ui items">
// <div class="item">
//   <div class="image"></div>
//   <div class="content">
//     <a class="header">Header</a>
//     <div class="meta">
//       <span>Description</span>
//     </div>
//     <div class="description">
//       <p></p>
//     </div>
//     <div class="extra">Additional Details</div>
//   </div>
// </div>
// </div>
