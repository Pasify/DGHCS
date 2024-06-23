import { useLogin } from "../../context/LoginContext";

function StudentHome() {
  const {
    loggedInUser: { studentID, name: studentName },
  } = useLogin();
  return (
    <div>
      <h1>
        Welcome <span className="font-bold capitalize">{studentName}</span> to
        your student Portal, your studentID is
        <span className="font-bold"> {studentID} </span>
        Today is a great day. education is the best legacy
      </h1>
    </div>
  );
}

export default StudentHome;
