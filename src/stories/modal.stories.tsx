import React from "react";
import Button from "../elements/Button";
import { Modal, ModalBackground, ModalContent } from "..";

export default { title: 'Components/Modal' };

const style = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  } as React.CSSProperties,
  buttonContainer: {
    width: '33.333%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column'
  }  as React.CSSProperties,
};

export const BaseModal = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    console.log('open changed', open);
  }, [open]);

  const onModalOpenClick = () => {
    setOpen(true);
  };

  const onModalCloseClick = () => {
    setOpen(false);
  };

  return (
    <div style={style.container}>
      <div style={style.buttonContainer}>
        <h3 className="is-size-3 has-text-white">Base Modal</h3>
        <Button primary onClick={onModalOpenClick}>Open Modal</Button>
        <Modal open={open}>
          <ModalBackground />
          <ModalContent>
            This is an example modal
          </ModalContent>
          <Button success onClick={onModalCloseClick}>Close</Button>
        </Modal>
      </div>
    </div>
  )
};
