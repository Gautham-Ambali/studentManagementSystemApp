import React, { useEffect, useState } from "react";
import StudentItem from "./StudentItem";
import {
  addNewStudentApi,
  deleteStudentApi,
  getStudentsDataApi,
  updateStudentApi,
} from "../services/allApis";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SearchSort from "./SearchSort";
const intialState = {
  name: "",
  photoUrl: "",
  age: "",
  mobile: "",
  place: "",
  std: "",
};

function Main() {
  const [studentsList, setStudentsList] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newStudent, setNewStudent] = useState(intialState);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const result = await getStudentsDataApi();
    if (result.status == 200) {
      setStudentsList(result.data);
    }
  };

  async function handleAdd() {
    console.log(newStudent);
    const { name, photoUrl, place, std, age, mobile } = newStudent;
    if (!name || !photoUrl || !place || !std || !age || !mobile) {
      alert("Enter all details...");
    } else {
      const result = await addNewStudentApi(newStudent);
      if (result.status == 201) {
        alert("New Student Added");
        getData();
        setNewStudent(intialState);
        handleClose();
      } else {
        alert("Adding Student Failed");
      }
    }
  }

  async function handleDelete(id) {
    const result = await deleteStudentApi(id);
    if (result.status === 200) {
      getData();
    } else {
      alert("Deletion Failed");
    }
  }

  async function handleUpdate(id, data) {
    const result = await updateStudentApi(id, data);
    if (result.status === 200) {
      alert("Details Updated.");
      getData();
    } else {
      alert("Updation Failed");
    }
  }

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          border: "2px solid #7cf03d",
          padding: "160px 9%",
        }}
      >
        <SearchSort searchTerm={searchTerm} setSearchTerm={setSearchTerm} sortKey={sortKey} setSortKey={setSortKey}/>

        <div className="d-flex justify-content-between  align-items-center">
          <h1 className=" mb-4 student-logo text-white">Student List</h1>
          <button className="btn text-white bg-danger" onClick={handleShow}>
            Add Student+
          </button>
        </div>
        <div
          className="text-white p-5 d-flex flex-wrap  gap-5"
          style={{
            minHeight: "100%",
            border: "2px solid rgba(124, 240, 61, 0.12)",
            borderRadius: "20px",
          }}
        >


          {(() => {
  let filtered = studentsList.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortKey === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortKey === "name-desc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortKey === "age-asc") {
    filtered.sort((a, b) => a.age - b.age);
  } else if (sortKey === "age-desc") {
    filtered.sort((a, b) => b.age - a.age);
  }

  return filtered.length === 0 ? (
    <h3 style={{ color: "#7cf03d" }}>No data found</h3>
  ) : (
    filtered.map((student) => (
      <StudentItem
        key={student.id}
        student={student}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    ))
  );
})()}


        </div>

        {/* Add Student Modal */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header
            closeButton
            style={{ backgroundColor: "#1f242d", color: "white" }}
          >
            <Modal.Title>Add New Student</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#1f242d", color: "white" }}>
            <form className="container">
              <div className="row mb-3 align-items-center">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, name: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="row mb-3 align-items-center">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  PhotoUrl
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, photoUrl: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="row mb-3 align-items-center">
                <label htmlFor="age" className="col-sm-2 col-form-label">
                  Age
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    id="age"
                    className="form-control"
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, age: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="row mb-3 align-items-center">
                <label htmlFor="mobile" className="col-sm-2 col-form-label">
                  Mobile
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="mobile"
                    className="form-control"
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, mobile: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="row mb-3 align-items-center">
                <label htmlFor="place" className="col-sm-2 col-form-label">
                  Place
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="place"
                    className="form-control"
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, place: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="row mb-3 align-items-center">
                <label htmlFor="class" className="col-sm-2 col-form-label">
                  Class
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="class"
                    className="form-control"
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, std: e.target.value })
                    }
                  />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#1f242d" }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleAdd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Main;
