import {
  Typography,
  Card,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useStudent } from "../context/StudentContext";
// <FaEdit />
// <MdDeleteForever />
const TABLE_HEAD = ["UserName", "Email", "Grade", "password", "", ""];
// const TABLE_ROWS = [
//   {
//     username: "Elon Musk",
//     email: "elonmusk@pluto.space",
//     phone: "08012345678",
//     password: "erimusk001",
//   },
// ];
function ViewStudents() {
  const { studentData, getExistingStudentRecord } = useStudent();
  console.log(studentData);
  // console.log(getExistingStudentRecord());
  const studentRecord =
    studentData.length <= 0 || getExistingStudentRecord().length <= 0
      ? getExistingStudentRecord()
      : studentData;
  console.log(studentRecord);

  return (
    <div className=" flex w-full flex-col gap-10 rounded border border-midBlack2 bg-background p-4 shadow-sm">
      <div className="mt-[-2rem] rounded bg-midBlack p-3">
        <Typography variant="h4" color="white">
          Students Data
        </Typography>
      </div>

      <Card className="h-full w-full">
        {studentRecord.length <= 0 ? (
          <Typography variant="h6" className="p-4">
            No student records
          </Typography>
        ) : (
          <table className="w-full min-w-max table-auto text-left">
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
            <tbody>
              {studentRecord.map(
                ({
                  userName: username,
                  emailAddress: email,
                  grade: grade,
                  password,
                }) => (
                  <tr key={password} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal capitalize"
                      >
                        {username}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {grade}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {password}
                      </Typography>
                    </td>
                    <td>
                      <Tooltip
                        content="Edit"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                        className="bg-accent"
                      >
                        <IconButton variant="text">
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
                        <IconButton variant="text">
                          <MdDeleteForever size={15} />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  );
}

export default ViewStudents;
