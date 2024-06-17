import { useState } from "react";
import {
  Typography,
  Card,
  Tooltip,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { FaEdit } from "react-icons/fa";

import { MdDeleteForever } from "react-icons/md";
import { useStudent } from "../context/StudentContext";

import EditStudent from "./EditStudent";
import { fakeStudentData } from "../fakeStudendData";
import Pagination from "./Pagination";

const TABLE_HEAD = ["Student Name", "Email", "StudentID ", "Grade", "", ""];
// const TABLE_ROWS = fakeStudentData;

function TableData({ children }) {
  return (
    <td className="p-4">
      <Typography
        variant="small"
        color="blue-gray"
        className="font-normal capitalize"
      >
        {children}
      </Typography>
    </td>
  );
}
function ViewStudents() {
  const { studentData } = useStudent();

  const [open, setOpen] = useState(false);
  const [selectedStudentToEdit, setSelectedStudentToEdit] = useState({});
  // pagination functionality start
  // const [students] = useState(studentData);
  const students = studentData;
  const [currentPage, setCurrentPage] = useState(1);
  const [studentPerPage] = useState(6);

  const indexOfLastPost = currentPage * studentPerPage;
  const indexOfFirstPost = indexOfLastPost - studentPerPage;
  const currentPost = students.slice(indexOfFirstPost, indexOfLastPost);
  function handlePagination(pageNumber) {
    setCurrentPage(pageNumber);
  }
  function moveToPreviousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function moveToNextPage() {
    if (currentPage !== Math.ceil(students.length / studentPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }
  // pagination functionality end

  // open edit student dialogue box functionality start
  const handleOpen = () => setOpen((cur) => !cur);
  function handleEditStudent(index) {
    handleOpen();
    setSelectedStudentToEdit(index);
  }
  // open edit student dialogue box functionality end
  return (
    <div className=" flex  w-full flex-col gap-5   rounded border border-midBlack2 bg-background   p-4 shadow-sm">
      <div className="mt-[-2rem] rounded bg-midBlack p-3">
        <Typography variant="h4" color="white">
          Students Data
        </Typography>
      </div>

      <Card className="   w-full">
        {studentData.length <= 0 ? (
          <Typography variant="h6" className="p-4">
            No student records
          </Typography>
        ) : (
          <table className="max-h-[60%] w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={index}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold uppercase leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="h-[20%] overflow-y-auto">
              {currentPost.map(
                (
                  {
                    studentName: username,
                    studentEmail: email,
                    studentID: studentId,
                    studentGrade: grade,
                  },
                  index,
                  studentArray,
                ) => (
                  <tr key={username} className="even:bg-blue-gray-50/50">
                    <TableData>{username}</TableData>
                    <TableData>{email}</TableData>
                    <TableData>{studentId}</TableData>
                    <TableData>{grade}</TableData>
                    <td>
                      <Tooltip
                        content="Edit"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                        className="bg-accent"
                      >
                        <IconButton
                          variant="text"
                          onClick={() =>
                            handleEditStudent(studentArray.at(index))
                          }
                        >
                          <FaEdit size={15} />
                        </IconButton>
                      </Tooltip>
                    </td>
                    <td>
                      <Tooltip
                        content="Delete"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                        className="bg-accent"
                      >
                        <IconButton
                          variant="text"
                          onClick={() => console.log(studentArray.at(index))}
                        >
                          <MdDeleteForever size={15} />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
            <EditStudent
              open={open}
              handleOpen={handleOpen}
              selectedStudentToEdit={selectedStudentToEdit}
            />
          </table>
        )}
      </Card>
      <Pagination
        studentPerPage={studentPerPage}
        length={students.length}
        handlePagination={handlePagination}
        currentPage={currentPage}
        moveToPreviousPage={moveToPreviousPage}
        moveToNextPage={moveToNextPage}
      />
    </div>
  );
}

export default ViewStudents;
