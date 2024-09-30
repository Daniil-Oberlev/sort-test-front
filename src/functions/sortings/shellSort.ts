import { SortStep } from "@/interfaces/interface";

export const shellSortStep = (
  arr: number[],
  step: SortStep,
  ascending: boolean = true,
): { sortedArray: number[]; step: SortStep } => {
  const sortedArray = [...arr];
  const n = sortedArray.length;

  const gap = Math.floor(n / 2);

  let { i, j } = step;

  if (i === undefined) {
    i = gap;
  }
  if (j === undefined) {
    j = 0;
  }

  if (gap > 0) {
    if (i < n) {
      const temp = sortedArray[i];

      if (ascending) {
        while (j >= gap && sortedArray[j - gap] > temp) {
          sortedArray[j] = sortedArray[j - gap];
          j -= gap;
        }
      } else {
        while (j >= gap && sortedArray[j - gap] < temp) {
          sortedArray[j] = sortedArray[j - gap];
          j -= gap;
        }
      }

      sortedArray[j] = temp;

      i++;
      if (i < n) {
        j = i;
      }
    } else {
      step = { i: 0, j: undefined };
    }
  }

  return { sortedArray, step: { i, j } };
};
