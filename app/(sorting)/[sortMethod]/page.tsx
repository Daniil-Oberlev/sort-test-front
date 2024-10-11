"use client";

import Layout from "@/components/layout";
import SortVisualizer from "@/components/template/SortVisualizer";
import sortConfig from "@/config/sortConfig";
import { notFound, useParams } from "next/navigation";

const SortPage = () => {
  const { sortMethod } = useParams<{ sortMethod: string }>();

  if (!(sortMethod in sortConfig)) {
    notFound();
  }

  const config = sortConfig[sortMethod as keyof typeof sortConfig];

  return (
    <>
      <Layout.Header title={config.title} />
      <SortVisualizer sortStepFunction={config.step} initialCount={50} />

      <Layout.Aside
        description={config.description}
        worst={config.complexity.worst}
        best={config.complexity.best}
        average={config.complexity.average}
      />
    </>
  );
};

export default SortPage;
