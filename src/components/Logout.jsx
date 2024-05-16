import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
function Logout() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(!open);
  const logout = () => {
    handleOpen();
    navigate("/");
  };
  return (
    <>
      <Button
        size="md"
        fullWidth
        className="bg-accent capitalize"
        onClick={handleOpen}
      >
        <span className="capitalize">Log out</span>
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="xs"
      >
        <DialogHeader className="uppercase">Confirm Logout.</DialogHeader>
        <DialogBody divider={true}>
          Are you sure you really want to logout?
        </DialogBody>
        <DialogFooter className="flex gap-4">
          <Button
            variant="outlined"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="black" onClick={logout}>
            <span>Logout</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Logout;
