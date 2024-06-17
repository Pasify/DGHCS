import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  IconButton,
} from "@material-tailwind/react";

function EditStudent({ open, handleOpen, selectedStudentToEdit }) {
  let { studentEmail, studentGrade, studentName } = selectedStudentToEdit;
  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Update Student Info
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Edit student info to update records.
            </Typography>

            <Input label="student Name" size="lg" defaultValue={studentName} />

            <Input label="Email" size="lg" defaultValue={studentEmail} />

            <Input
              type="number"
              label="student grade"
              size="lg"
              defaultValue={studentGrade}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              className="bg-accent capitalize"
              onClick={handleOpen}
              fullWidth
            >
              update
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default EditStudent;
