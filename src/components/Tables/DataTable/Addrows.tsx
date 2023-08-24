import React, { useState, Fragment } from "react";
import { Button, Form, Modal,ModalHeader,ModalBody,ModalFooter,Table,Input, Label } from "reactstrap";
import { nanoid } from "nanoid";

export const Savetable = (args:any) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
    const data = [
      {
        id: "1",
        sno: "1",
        Name: "Yonna",
        lastname: "Qond",
        position: "Financial Controller",
        email: "jacke123@gmail.com",
        salary: "$143,654",
      },
      {
        id: "2",
        sno: "2",
        Name: "Zonna",
        lastname: "Jond",
        position: "Accountant",
        email: "virginia456@gmail.com",
        salary: "$343,654",
      },
      {
        id: "3",
        sno: "3",
        Name: "Nonna",
        lastname: "Tond",
        position: "Chief Executive Officer",
        email: "jacobthomson@gmail.com",
        salary: "$743,654",
      },
      {
        id: "4",
        sno: "4",
        Name: "Bonna",
        lastname: "Oond",
        position: "Chief Operating Officer",
        email: "trevor@gmail.com",
        salary: "$643,654",
      },
      {
        id: "5",
        sno: "5",
        Name: "Honna",
        lastname: "Pond",
        position: "Data Coordinator",
        email: "kylie@gmail.com",
        salary: "$243,654",
      },
      {
        id: "6",
        sno: "6",
        Name: "Fonna",
        lastname: "Nond",
        position: "Developer",
        email: "jan@gmail.com",
        salary: "$543,654",
      },
      {
        id: "7",
        sno: "7",
        Name: "Aonna",
        lastname: "Xond",
        position: "Development lead",
        email: "trevor@gmail.com",
        salary: "$843,654",
      },
      {
        id: "8",
        sno: "8",
        Name: "Qonna",
        lastname: "Vond",
        position: "Director",
        email: "kylie@gmail.com",
        salary: "$843,654",
      },
      {
        id: "9",
        sno: "9",
        Name: "Jond",
        lastname: "Zonna",
        position: "Marketing Officer",
        email: "emily@gmail.com",
        salary: "$843,654",
      },
      {
        id: "10",
        sno: "10",
        Name: "Yonna",
        lastname: "Qond",
        position: "Financial Controller",
        email: "jan@gmail.com",
        salary: "$433,060",
      },
    ];
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      sno: "",
      Name: "",
      lastname: "",
      position: "",
      email: "",
      salary: "",
    });
  
    const [editFormData, setEditFormData] = useState({
      sno: "",
      Name: "",
      lastname: "",
      position: "",
      email: "",
      salary: "",
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
    const handleAddFormChange = (event:any) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData:any = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event:any) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData:any = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event:any) => {
      event.preventDefault();
  
      const newContact = {
        id: nanoid(),
        sno: addFormData.sno,
        Name: addFormData.Name,
        lastname: addFormData.lastname,
        position: addFormData.position,
        email: addFormData.email,
        salary: addFormData.salary,
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
  
    const handleEditFormSubmit = (event:any) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        sno: editFormData.sno,
        Name: editFormData.Name,
        lastname: editFormData.lastname,
        position: editFormData.position,
        email: editFormData.email,
        salary: editFormData.salary,
      };
  
      const newContacts:any = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event:any, contact:any) => {
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {
        sno: contact.sno,
        Name: contact.Name,
        lastname: contact.lastname,
        position: contact.position,
        email: contact.email,
        salary: contact.salary,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = (contactId:any) => {
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === contactId);
  
      newContacts.splice(index, 1);
  
      setContacts(newContacts);
    };
    let allElement2:any = [];
  let myfunction = (InputData:any) => {
    let allElement;
    for (allElement of data) {
      if (allElement.Name[0] == " ") {
        allElement.Name = allElement.Name.trim();
      }
      if (allElement.Name.toLowerCase().includes(InputData.toLowerCase())) {
        if (allElement.Name.toLowerCase().startsWith(InputData.toLowerCase())) {
          allElement2.push(allElement);
        }
      }
    }
    setContacts(allElement2);
  };
    return (
      <div className="app-container">
        <Form onSubmit={handleEditFormSubmit}>
        <Button color="" className="btn btn-primary mb-3"onClick={toggle}>
        Add New Row
      </Button>
      <Label className="float-end">
        <Input
          type="text"
          placeholder="Search..."
          className="mb-4 form-control-sm form-control"
          onChange={(ele) => {
            myfunction(ele.target.value);
          }}
        />
      </Label>
          <Table
            id="delete-datatable"
            className="table table-bordered text-nowrap border-bottom"
          >
            <thead>
              <tr>
                <th className="wd-5p text-center">S NO</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment key={contact.id}>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </Table>
        </Form>
  
        {/* <h2>Add a Contact</h2> */}
        <Modal
          isOpen={modal} toggle={toggle} {...args}
          size="lg"
          centered
        >
          <ModalHeader id="contained-modal-title-vcenter">
              Add New Row
            <Button
              color=""
              className="btn btn-close"
              onClick={toggle}
            >
              x
            </Button>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={handleAddFormSubmit} className="">
              <Input
                type="text"
                name="sno"
                required
                placeholder="S No..."
                onChange={handleAddFormChange}
                className="form-control mb-2 border"
              />
              <Input
                type="text"
                name="Name"
                required
                placeholder="Enter a name..."
                onChange={handleAddFormChange}
                className="form-control mb-2 border"
              />
              <Input
                type="text"
                name="lastname"
                required
                placeholder="Enter an lastname..."
                onChange={handleAddFormChange}
                className="form-control mb-2"
              />
              <Input
                type="text"
                name="position"
                required
                placeholder="Enter a phone number..."
                onChange={handleAddFormChange}
                className="form-control mb-2"
              />
              <Input
                type="email"
                name="email"
                required
                placeholder="Enter an email..."
                onChange={handleAddFormChange}
                className="form-control mb-2"
              />
              <Input

                name="salary"
                required
                placeholder="Salary..."
                onChange={handleAddFormChange}
                className="form-control mb-2"
              />
              <Button
                color=""
                className="btn btn-primary me-2 wd-100p "
                type="submit"
              >
                Add
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close
          </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  };
  const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
  }:any) => {
    return (
      <tr>
        <td>
          <Input
            type="text"
            required
            placeholder="S NO"
            name="Sno"
            value={editFormData.sno}
            onChange={handleEditFormChange}
            className="border"
          />
        </td>
        <td>
          <Input
            type="text"
            required
            placeholder="Enter a name..."
            name="Name"
            value={editFormData.Name}
            onChange={handleEditFormChange}
            className="border"
          />
        </td>
        <td>
          <Input
            type="text"
            required
            placeholder="Enter an lastname..."
            name="lastname"
            value={editFormData.lastname}
            onChange={handleEditFormChange}
            className="border"
          />
        </td>
        <td>
          <Input
            type="text"
            required
            placeholder="Enter a phone number..."
            name="position"
            value={editFormData.position}
            onChange={handleEditFormChange}
            className="border"
          />
        </td>
        <td>
          <Input
            type="email"
            required
            placeholder="Enter an email..."
            name="email"
            value={editFormData.email}
            onChange={handleEditFormChange}
            className="border"
          />
        </td>
        <td>
          <Input
            required
            placeholder="Salary..."
            name="salary"
            value={editFormData.salary}
            onChange={handleEditFormChange}
            className="border"
          />
        </td>
        <td>
          <Button color="" className="btn btn-primary me-1" type="submit">
            Save
          </Button>
          <Button
            color=""
            className="btn btn-danger me-1"
            onClick={handleCancelClick}
          >
            Cancel
          </Button>
        </td>
      </tr>
    );
  };
  const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }:any) => {
    return (
      <tr>
        <td className="wd-5p text-center">{contact.sno}</td>
        <td>{contact.Name}</td>
        <td>{contact.lastname}</td>
        <td>{contact.position}</td>
        <td>{contact.email}</td>
        <td>{contact.salary}</td>
        <td>
          <Button
            color=""
            className="btn btn-primary me-1"
            type="button"
            onClick={(event) => handleEditClick(event, contact)}
          >
            Edit
          </Button>
          <Button
            color=""
            className="btn btn-danger me-1"
            type="button"
            onClick={() => handleDeleteClick(contact.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  };