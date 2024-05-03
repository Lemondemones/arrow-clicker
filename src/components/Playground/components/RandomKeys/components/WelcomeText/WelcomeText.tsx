export type typeWelcomeTextProps = {
  isTimerActive: boolean;
};

export default function WelcomeText({ isTimerActive }: typeWelcomeTextProps) {
  if (isTimerActive) {
    return <span>Loading...</span>;
  }

  return <span>Press "Play" to start the game</span>;
}
