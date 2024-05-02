export type ControlsProps = {
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Controls({ isTimerActive, setIsTimerActive }: ControlsProps) {
  const handlePlay = () => setIsTimerActive(true);
  const handlePause = () => setIsTimerActive(false);
  return (
    <div>
      <button onClick={handlePlay} disabled={isTimerActive}>
        Play
      </button>
      <button onClick={handlePause} disabled={!isTimerActive}>
        Pause
      </button>
    </div>
  );
}
