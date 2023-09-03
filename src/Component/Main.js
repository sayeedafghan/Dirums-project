import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import profile from './Mask group.png'
import logo from './logo bird cropped 1.png';
import title from './logo and bird cropped 1.png';
import CloseIcon from '@mui/icons-material/Close';
import './Main.css';

const Main = () => {
  const [popup, setPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('todo');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [editedTaskId, setEditedTaskId] = useState(null);

  const [tasks, setTasks] = useState([]);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const handleTaskDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const getRandomColor = () => {
    const colors = ['#fdcb6e', '#e84393', '#54a0ff', '#1dd1a1', '#B53471']; 
    return colors[Math.floor(Math.random() * colors.length)];
  };
  

  const handleSubmit = () => {
    if (editedTaskId !== null) {
      // Edit an existing task
      const updatedTasks = tasks.map((task) =>
        task.id === editedTaskId
          ? {
              id: task.id,
              description: taskDescription,
              dueDate: dueDate,
              status: selectedRadio,
            }
          : task
      );
      setTasks(updatedTasks);
      setEditedTaskId(null);
    } else {
      // Create a new task
      const newTask = {
        id: Date.now(),
        description: taskDescription,
        dueDate: dueDate,
        status: selectedRadio,
      };
      setTasks([...tasks, newTask]);
    }

    // Reset the form and close the popup
    setPopup(false);
    setEditPopup(false); // Close edit popup if open
    setSelectedRadio('todo');
    setTaskDescription('');
    setDueDate('');
  };

  const handleEdit = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setTaskDescription(taskToEdit.description);
      setDueDate(taskToEdit.dueDate);
      setSelectedRadio(taskToEdit.status);
      setEditedTaskId(taskId);
      setEditPopup(true);
    }
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setEditPopup(false); // Close the edit popup
  };

  return (
    <>
      <div className="header">
        <div className="sidebar">
          <img src={logo} alt="" />
          <div className="roundicon"></div>
          <div className="home">
            <p>Home</p>
          </div>
          <div className="line2"></div>
          <br></br>

          <div className="roundicon2"></div>
          <div className="home2">
            <p>Home</p>
          </div>
          <div className="line3"></div>
          <br></br>

          <div className="round-back">
            <div className="roundicon3"></div>
            <div className="home3">
              <p>Home</p>
            </div>
          </div>
          <br></br>
          <div className="roundicon4"></div>
          <div className="home4">
            <p>Home</p>
          </div>
          <div className="line4"></div>

          <br></br>
          <div className="roundicon5"></div>
          <div className="home5">
            <p>Home</p>
          </div>
          <div className="line5"></div>

          <br></br>
          <div className="roundicon6"></div>
          <div className="home6">
            <p>Home</p>
          </div>
          <div className="line6"></div>
          <br></br>
        </div>
        <nav className="navbar">
          <div className="taskbutton"></div>
          <div  className="addicon" onClick={() => {
              setPopup(true);
            }}>
            <p>
              < AddIcon onClick={() => {
              setPopup(true);
            }} />
            </p>
          </div>
          <div
            className="createtask"
            onClick={() => {
              setPopup(true);
            }}
          >
            <p>Create Task</p>
          </div>
          <div className="line1"></div>
          <div></div>
          <div className="searchbox">
            <input type="text" placeholder="search query here"></input>
          </div>
          <div className="searchicon">
            <p>
              <SearchIcon />
            </p>
          </div>
          <div className="profile"></div>
          <div className="profilename">
            <p>Ranjith Rajak | Senior Developer</p>
          </div>
          <div className="profilepic">
            <img
             src={profile}
              alt=""
            ></img>
          </div>
          <div className="arrowicon">
            <p>
              <ArrowDropDownIcon />
            </p>
          </div>
        </nav>
      </div>

      <div className="Title">
        <img src={title} alt="" />
        <p></p>
        <h5>Website Development Tracker</h5>
      </div>

      <main>
        <div className="task-stage">
          <div className="stage1">
            <h4>Tasks to do</h4>
            <div className="stage-border"></div>
            <div className="task-card-container">
              {tasks
                .filter((task) => task.status === 'todo')
                .map((task) => (
                  <div
                    key={task.id}
                    className="task-card"
                    style={{ backgroundColor: getRandomColor() }}
                    onClick={() => handleEdit(task.id)}
                  >
                    <h6>{task.description}</h6>
                    <p><strong>Due Date: {task.dueDate}</strong></p>
                  </div>
                ))}
            </div>
          </div>

          <div className="stage2">
            <h4>Tasks in Progress</h4>
            <div className="stage-border"></div>
            <div className="task-card-container">
              {tasks
                .filter((task) => task.status === 'progress')
                .map((task) => (
                  <div
                    key={task.id}
                    className="task-card"
                    style={{ backgroundColor: getRandomColor() }}
                    onClick={() => handleEdit(task.id)}
                  >
                    <h6>{task.description}</h6>
                    <p><strong>Due Date: {task.dueDate}</strong></p>
                  </div>
                ))}
            </div>
          </div>
          <div className="stage3">
            <h4>Tasks Done</h4>
            <div className="stage-border"></div>
            <div className="task-card-container">
              {tasks
                .filter((task) => task.status === 'done')
                .map((task) => (
                  <div
                    key={task.id}
                    className="task-card"
                    style={{ backgroundColor: getRandomColor() }}
                    onClick={() => handleEdit(task.id)}
                  >
                    <h6>{task.description}</h6>
                    <p><strong> Completed: {task.dueDate}</strong></p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Edit Task Popup */}
        {editPopup && (
          <div className="taskmodel">
            <CloseIcon onClick={() => setEditPopup(false)} className="icon" />
            <h2>Edit the Task for the team</h2>
            <p id="task-line"></p>
            <h4>Add task description*</h4>
            <input
              id="task-details"
              type="text"
              placeholder="Edit the task description"
              value={taskDescription}
              onChange={handleTaskDescriptionChange}
            />
            <p id="task-status">Select Task Status*</p>
            <label className="label-1">To do</label>
            <input
              className="radio-1"
              type="radio"
              name="task-status"
              value="todo"
              checked={selectedRadio === 'todo'}
              onChange={handleRadioChange}
            />
            <label className="label-2">In progress</label>
            <input
              className="radio-2"
              type="radio"
              name="task-status"
              value="progress"
              checked={selectedRadio === 'progress'}
              onChange={handleRadioChange}
            />
            <label className="label-3">Task done</label>
            <input
              className="radio-3"
              type="radio"
              name="task-status"
              value="done"
              checked={selectedRadio === 'done'}
              onChange={handleRadioChange}
            />
            <p className="due-date"> Due date* </p>
            <input
              className="task-date"
              type="date"
              value={dueDate}
              onChange={handleDueDateChange}
            />
            <button className="submit-button" onClick={handleSubmit}>
              Save changes
            </button>

            {editedTaskId !== null && ( 
              <button className="delete-button" onClick={() => handleDelete(editedTaskId)}>
                Delete
              </button>
            )}
          </div>
        )}

        {/* Create Task Popup */}
        {popup && (
          <div className="taskmodel">
            <CloseIcon onClick={() => setPopup(false)} className="icon" />
            <h2>Create a Task for the team</h2>
            <p id="task-line"></p>
            <h4>Add task description*</h4>
            <input
              id="task-details"
              type="text"
              placeholder="Feed the task guidelines and information"
              value={taskDescription}
              onChange={handleTaskDescriptionChange}
            />
            <p id="task-status">Select Task Status*</p>
            <label className="label-1">To do</label>
            <input
              className="radio-1"
              type="radio"
              name="task-status"
              value="todo"
              checked={selectedRadio === 'todo'}
              onChange={handleRadioChange}
            />
            <label className="label-2">In progress</label>
            <input
              className="radio-2"
              type="radio"
              name="task-status"
              value="progress"
              checked={selectedRadio === 'progress'}
              onChange={handleRadioChange}
            />
            <label className="label-3">Task done</label>
            <input
              className="radio-3"
              type="radio"
              name="task-status"
              value="done"
              checked={selectedRadio === 'done'}
              onChange={handleRadioChange}
            />
            <p className="due-date">Due date </p>
            <input
              className="task-date"
              type="date"
              value={dueDate}
              onChange={handleDueDateChange}
            />
            <button className="submit-button" onClick={handleSubmit}>
              Create task
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default Main;

