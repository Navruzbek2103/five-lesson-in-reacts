// import Card from "./../../UI/Card";
// import { user } from "./data";
import React, { useState, useRef } from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {baseUrl} from "./../constants"

const index = () => {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");


  const addTask = () => {
    const check = {
      title: taskTitle.trim().length === 0,
      deadline: taskDeadline.trim().length === 0,
    };
    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      deadline: taskDeadline,
    };

    if (check.title || check.deadline) {
      toast.warning("Iltimos, kerakli joyni to'ldiring", {
        position: "top-right",
        autoClose: 1400,
      });
    } else {
      fetch(`${baseUrl}/userlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask)
      })


      toast.success("Muvaffaqqiyatli qo'shildi", {
        position: "top-right",
        autoClose: 1500,
      });
    }

    setTaskTitle("");
    setTaskDeadline("");

  };


  return (
    <>
      <ToastContainer />
      <section className="intro">
        <div className="container">
          <div className="card shadow p-3 mt-5">
            <h4 className="text-center text-danger">USER ADD FORM</h4>
            <input
              type="text"
              className="form-control mx-auto p-3 mb-3 w-50"
              placeholder="Enter user name"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <input
              type="number"
              className="form-control mx-auto p-3 mb-3 w-50"
              placeholder="Enter user age"
              value={taskDeadline}
              onChange={(e) => setTaskDeadline(e.target.value)}
            />
            <button
              className="btn btn-success w-50 p-3 mx-auto"
              onClick={() => addTask()}
            >
              ADD NEW USER
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
