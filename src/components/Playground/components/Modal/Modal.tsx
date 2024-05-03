import { useAppDispatch } from "../../../../app/hooks";
import { resetStore } from "../../store/slices";
import ResultMessage from "./components/ResultMessage";

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
    <div>
      <h3>Modal</h3>
      <ResultMessage isSuccessEndGame={isSuccessEndGame} />
      <button onClick={handleClose}>Restart game</button>
    </div>
  );
}
