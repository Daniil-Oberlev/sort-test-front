export interface IHeader {
  title: string;
}

export interface IAside {
  description: string;
}

export interface ISortState {
  items: number[];
  sorted: boolean;
  itemCount: number;
  sorting: boolean;
}

export interface ISortVisualizer {
  initialCount: number;
  sortStepFunction: SortStepFunction | null;
}

export interface ISortElements {
  items: number[];
}

export interface SortStep {
  i: number;
  j?: number;
  selectedIndex?: number;
}

export type SortStepFunction = (
  arr: number[],
  step: SortStep,
) => {
  sortedArray: number[];
  step: SortStep;
};
