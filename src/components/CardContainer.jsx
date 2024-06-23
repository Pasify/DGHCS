import Card from "./Card";
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";
import { BsCashCoin } from "react-icons/bs";
import { getTotalNumberOfStudent } from "../utils/storage";
import { useEffect, useState } from "react";

function CardContainer() {
  const [totalNumberOfStudent, setTotalNumberOfStudent] = useState(0);
  useEffect(() => {
    function updateTotalNumberOfStudent() {
      setTotalNumberOfStudent(getTotalNumberOfStudent());
    }

    updateTotalNumberOfStudent();
  }, []);
  const cardItems = [
    {
      title: "student",
      backgroundColor: "",
      icon: <PiStudent size={20} color="white" />,
      value: totalNumberOfStudent,
      // value: 10,
    },
    {
      title: "teacher",
      backgroundColor: "",
      icon: <PiChalkboardTeacherLight size={20} color="white" />,
      value: 53,
    },
    {
      title: "school",
      backgroundColor: "",
      icon: <LuSchool size={20} color="white" />,
      value: 5,
    },
    {
      title: "income",
      backgroundColor: "",
      icon: <BsCashCoin size={20} color="white" />,
      value: 350_000,
      color: "green",
    },
  ];
  return (
    <div className="flex gap-4 ">
      {cardItems.map((item) => (
        <Card
          key={item.title}
          icon={item.icon}
          cardTitle={item.title}
          value={item.value}
        />
      ))}
    </div>
  );
}

export default CardContainer;
