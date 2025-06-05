import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function StudentItem({ student, handleDelete ,handleUpdate }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editableStudent, setEditableStudent] = useState({ ...student });

  return (
    <>
      <div
        style={{
          border: "2px solid #7cf03d",
          minHeight: "300px",
          width: "250px",
          boxShadow: "0 0 10px  #7cf03d",
          borderRadius: "20px",
          padding: "10px 0px",
        }}
      >
        {/* profile picture */}
        <div className="d-flex justify-content-center mb-2">
          <div
            style={{
              background: " #7cf03d",
              width: "60%",
              padding: "2px",
              borderRadius: "50%",
            }}
          >
            <img
              src={student.photoUrl}
              alt="profile picture"
              width={"100%"}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        {/* student details */}

        <div className=" px-3 py-1 d-flex justify-content-center ps-5">
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td style={{ paddingLeft: "10px" }}>{student.name}</td>
              </tr>
              <tr>
                <td>Age:</td>
                <td style={{ paddingLeft: "10px" }}>{student.age}</td>
              </tr>
              <tr>
                <td>Mobile: </td>
                <td style={{ paddingLeft: "10px" }}>{student.mobile}</td>
              </tr>
              <tr>
                <td>Place:</td>
                <td style={{ paddingLeft: "10px" }}>{student.place}</td>
              </tr>
              <tr>
                <td>Class:</td>
                <td style={{ paddingLeft: "10px" }}>{student.std}</td>
              </tr>
              <tr>
                <td>
                  <button className="btn" onClick={() => handleShow()}>
                    ✏️
                  </button>
                </td>
                <td>
                  <button
                    className="btn"
                    onClick={() => handleDelete(student.id)}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Update Modal */}
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
          <Modal.Title>Update Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1f242d", color: "white" }}>
          <form className="d-flex flex-column gap-3">
            <input
              type="text"
              className="form-control"
              value={editableStudent.name}
              onChange={(e) =>
                setEditableStudent({ ...editableStudent, name: e.target.value })
              }
              placeholder="Name"
            />
            <input
              type="number"
              className="form-control"
              value={editableStudent.age}
              onChange={(e) =>
                setEditableStudent({ ...editableStudent, age: e.target.value })
              }
              placeholder="Age"
            />
            <input
              type="text"
              className="form-control"
              value={editableStudent.mobile}
              onChange={(e) =>
                setEditableStudent({
                  ...editableStudent,
                  mobile: e.target.value,
                })
              }
              placeholder="Mobile"
            />
            <input
              type="text"
              className="form-control"
              value={editableStudent.place}
              onChange={(e) =>
                setEditableStudent({
                  ...editableStudent,
                  place: e.target.value,
                })
              }
              placeholder="Place"
            />
            <input
              type="text"
              className="form-control"
              value={editableStudent.std}
              onChange={(e) =>
                setEditableStudent({ ...editableStudent, std: e.target.value })
              }
              placeholder="Class"
            />
          </form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#1f242d" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>{handleUpdate(editableStudent.id,editableStudent);handleClose()}}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentItem;
