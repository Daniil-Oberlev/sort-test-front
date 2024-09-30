"use client";

import Layout from "@/components/layout";
import SortVisualizer from "@/components/template/SortVisualizer";
import { quickSortStep } from "@/functions/quickSort";

import data from "@/texts/data.json";

const quickPage = () => {
  return (
    <>
      <Layout.Header title={data.quick.title} />
      <Layout.Aside description={data.quick.description} />
      <SortVisualizer sortStepFunction={quickSortStep} initialCount={5} />
    </>
  );
};

export default quickPage;
