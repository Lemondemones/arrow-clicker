import type { TArrows, TEndGameCondition } from "./types";

export const INTERVAL_TIME: number = 2000;

export const ARROW_TREE: TArrows = {
  ArrowUp: "🔼",
  ArrowDown: "🔽",
  ArrowLeft: "⏪",
  ArrowRight: "⏩",
};

export const ARR_ARROW_TREE = Object.keys(ARROW_TREE);

export const END_GAME_CONDITION: TEndGameCondition = {
  SUCCESS_COUNT: 3,
  UNSUCCESS_COUNT: 3,
};
