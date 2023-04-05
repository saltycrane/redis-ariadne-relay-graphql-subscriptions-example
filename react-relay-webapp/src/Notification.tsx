import { useEffect, useState } from "react";
import { Alert, Modal } from "reactstrap";

type TProps = {
  message: string;
};

export default function Notification({ message }: TProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!message) {
      return;
    }
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 4000);
  }, [message]);

  return (
    <Modal centered={true} isOpen={isOpen} size="sm">
      <Alert className="m-0" color="info">
        <i className="bi bi-bell-fill me-2" />
        {message}
      </Alert>
    </Modal>
  );
}
