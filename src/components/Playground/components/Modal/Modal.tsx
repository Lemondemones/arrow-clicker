import { useAppDispatch } from "../../../../app/hooks";
import { resetStore } from "../../store/slices";

import cn from "classnames";

import ResultMessage from "./components/ResultMessage";

import Button from "../../../UI/Button/Button";
import { Modal as MaterialModal } from "@mui/material";
import styles from "./Modal.module.css";

export type typeModalProps = {
  isSuccessEndGame: boolean;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ setIsShowModal, isSuccessEndGame }: typeModalProps) {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setIsShowModal(false);
    dispatch(resetStore());
  };

  return (
    <MaterialModal open onClose={handleClose} className={styles.wrapper}>
      <div className={cn(styles.container, isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess)}>
        <ResultMessage isSuccessEndGame={isSuccessEndGame} />
        <Button onClick={handleClose} className={styles.button}>
          Restart new game
        </Button>
      </div>
    </MaterialModal>
  );
}
