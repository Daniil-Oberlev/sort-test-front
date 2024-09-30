import * as sortFunctions from "@/functions/";
import { SortStep } from "@/interfaces/interface";
import data from "@/texts/data.json";

type SortFunction = {
  step: (
    arr: number[],
    step: SortStep,
    ascending?: boolean,
  ) => { sortedArray: number[]; step: SortStep };
  title: string;
  description: string;
};

const sortConfig: Record<string, SortFunction> = {
  binary: {
    step: sortFunctions.binaryInsertionSortStep,
    title: data.binary_insertion.title,
    description: data.binary_insertion.description,
  },
  bogo: {
    step: sortFunctions.bogoSortStep,
    title: data.bogo.title,
    description: data.bogo.description,
  },
  bubble: {
    step: sortFunctions.bubbleSortStep,
    title: data.bubble.title,
    description: data.bubble.description,
  },
  exchange: {
    step: sortFunctions.exchangeSortStep,
    title: data.exchange.title,
    description: data.exchange.description,
  },
  insertion: {
    step: sortFunctions.insertionSortStep,
    title: data.insertion.title,
    description: data.insertion.description,
  },
  optimized_bubble: {
    step: sortFunctions.optimizedBubbleSortStep,
    title: data.optimized_bubble.title,
    description: data.optimized_bubble.description,
  },
  quick: {
    step: sortFunctions.quickSortStep,
    title: data.quick.title,
    description: data.quick.description,
  },
  selection: {
    step: sortFunctions.selectionSortStep,
    title: data.selection.title,
    description: data.selection.description,
  },
  shaker: {
    step: sortFunctions.shakerSortStep,
    title: data.shaker.title,
    description: data.shaker.description,
  },
  shell: {
    step: sortFunctions.shellSortStep,
    title: data.shell.title,
    description: data.shell.description,
  },
};

export default sortConfig;
