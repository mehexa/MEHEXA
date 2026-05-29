"use client";
import dynamic from "next/dynamic";

const ExosomeViewer3D = dynamic(() => import("./ExosomeViewer3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-square max-w-[640px] mx-auto rounded-full glass animate-pulse-glow" />
  ),
});

export default function ExosomeViewerClient() {
  return <ExosomeViewer3D />;
}
