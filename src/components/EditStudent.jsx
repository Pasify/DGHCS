import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  IconButton,
  Select,
  Option,
} from "@material-tailwind/react";
import { set } from "react-hook-form";
import { editStudent } from "../api/editStudent";
import toast from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";
import { HandleRefetchStudents } from "../api/getStudents";

function EditStudent({ open, handleOpen, selectedStudentToEdit, onSubmit }) {
  let { studentEmail, studentGrade, studentName, studentID } =
    selectedStudentToEdit;
  const [isSubmittingEditedData, SetIsSubmittingEditedData] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    studentName: selectedStudentToEdit.studentName,
    studentEmail: selectedStudentToEdit.studentEmail,
  });
  const [studentDepartment, setStudentDepartment] = useState("");
  const [newStudentGrade, setNewStudentGrade] = useState("");
  useEffect(() => {
    setUpdatedData({
      studentName: selectedStudentToEdit.studentName,
      studentEmail: selectedStudentToEdit.studentEmail,
    });
  }, [selectedStudentToEdit.studentName, selectedStudentToEdit.studentEmail]);
  useEffect(() => {
    setStudentDepartment("");
  }, [selectedStudentToEdit]);

  const handleChange = function (e) {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  function handleChangeStudentDepartmentAndGrade(departmentVal, gradeVal) {
    if (departmentVal) {
      setStudentDepartment(departmentVal);
      setUpdatedData((prev) => ({
        ...prev,
        studentDepartment: departmentVal,
      }));
    }
    if (gradeVal) {
      setNewStudentGrade(gradeVal);
      setUpdatedData((prev) => ({
        ...prev,
        studentGrade: gradeVal,
      }));
    }
  }
  async function handleSubmit() {
    SetIsSubmittingEditedData(true);
    try {
      const studentInfoToUpdate = {
        studentID,
        updatedData: {
          name: updatedData.studentName,
          grade: updatedData.studentGrade,
          department: updatedData.studentDepartment,
          email: updatedData.studentEmail,
        },
      };

      const response = await editStudent(studentInfoToUpdate);
      console.log(studentInfoToUpdate);
      if (response.status === 200) {
        toast.success(
          `successfully updated ${response.data.studentID} records`,
        );
      }
      console.log("Student updated successfully:", response);
      response.status === 200 && HandleRefetchStudents();
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error(`Error updating student : ${err.message}`);
    } finally {
      handleOpen();
      SetIsSubmittingEditedData(false);
    }
  }

  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <form action="" onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Update Info for <span className="uppercase">{studentName}</span>
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Edit student info to update records.
              </Typography>

              <Input
                label="student Name"
                size="lg"
                // defaultValue={studentName}
                name="studentName"
                value={updatedData.studentName}
                onChange={handleChange}
              />
              <Input
                name="studentEmail"
                label="Email"
                size="lg"
                value={updatedData.studentEmail}
                // defaultValue={studentEmail}
                onChange={handleChange}
                required
              />
              <Select
                label="Student Grade"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                value={newStudentGrade}
                onChange={(val) =>
                  handleChangeStudentDepartmentAndGrade(null, val)
                }
              >
                <Option value=""></Option>
                <Option value="Basic 1">Basic 1</Option>
                <Option value="Basic 2">Basic 2</Option>
                <Option value="Basic 3">Basic 3</Option>
                <Option value="Basic 4">Basic 4</Option>
                <Option value="Basic 5">Basic 5</Option>
                <Option value="Basic 6">Basic 6</Option>
              </Select>
              <Select
                label="Student Department"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                name="studentDepartment"
                value={studentDepartment}
                onChange={(inputValue) =>
                  handleChangeStudentDepartmentAndGrade(inputValue, null)
                }
              >
                <Option value="art">Art</Option>
                <Option value="commercial">Commercial</Option>
                <Option value="science">Science</Option>
              </Select>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                className="bg-accent capitalize"
                onClick={handleSubmit}
                fullWidth
                disabled={isSubmittingEditedData}
              >
                {isSubmittingEditedData ? <LoadingSpinner /> : `update`}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}

export default EditStudent;
