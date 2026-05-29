// Centralized content extracted and structured from the source .docx files.
// Single source of truth for repeated facts/statistics across pages.

export const BRAND = {
  name: "MEHEXA",
  product: "ExoTech",
  tagline: "Programming the Future of Precision Drug Delivery",
  legal: "MEHEXA Bio, Inc.",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Science", href: "/science" },
  {
    label: "Solutions For",
    href: "#",
    children: [
      { label: "Patients & Consumers", href: "/plant-exosomes", note: "Skincare & wellness" },
      { label: "Healthcare Providers", href: "/milk-exosomes", note: "Clinical data & protocols" },
      { label: "Researchers & Pharma", href: "/science", note: "Platform & payloads" },
      { label: "Investors", href: "/investors", note: "Pipeline & market" },
    ],
  },
  { label: "Platform", href: "/#how-it-works" },
  { label: "Research", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PILLARS = [
  {
    n: "01",
    title: "Natural Biocompatible Carriers",
    body:
      "Exosomes are 100-nm vesicles produced by every cell in your body. We leverage their inherent biocompatibility to create therapeutics with minimal immunogenicity and side effects.",
    accent: "from-[#406edc] to-[#11214f]",
  },
  {
    n: "02",
    title: "Programmable Payload Loading",
    body:
      "Our proprietary loading technology adapts a single exosome platform to virtually any drug — small molecules, proteins, nucleic acids, and immunomodulators.",
    accent: "from-[#e7c068] to-[#b58a2a]",
  },
  {
    n: "03",
    title: "Precision Targeting (AI-powered)",
    body:
      "Machine learning models traverse millions of exosome variants — surface ligands, source cells, payload combinations — to direct therapy to the right tissue.",
    accent: "from-[#2a4a99] to-[#d4a843]",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Exosome Engineering",
    body:
      "Isolate high-quality exosomes from source cells; engineer surface proteins for enhanced targeting.",
  },
  {
    step: "02",
    title: "Payload Loading",
    body:
      "Load therapeutic cargo — proteins, RNA, small molecules — via passive and active mechanisms.",
  },
  {
    step: "03",
    title: "Target Identification",
    body:
      "AI models match exosome variants to disease tissue, optimizing tropism and uptake.",
  },
  {
    step: "04",
    title: "Delivery",
    body:
      "Engineered exosomes cross biological barriers and fuse with target cell membranes.",
  },
  {
    step: "05",
    title: "Therapeutic Response",
    body:
      "Cargo released intracellularly produces measurable, on-target therapeutic effect.",
  },
];

export const THERAPEUTIC_AREAS = [
  {
    title: "Oncology",
    body:
      "Deliver chemotherapeutic agents directly to tumor cells while sparing healthy tissue.",
    metric: "Tumor growth inhibition",
  },
  {
    title: "Neurodegeneration",
    body:
      "Cross the blood-brain barrier to deliver neuroprotective agents to affected neurons.",
    metric: "BBB penetration",
  },
  {
    title: "Regenerative Medicine",
    body:
      "Accelerate the body's own healing mechanisms — from wound care to organ regeneration.",
    metric: "40% faster healing",
  },
  {
    title: "Skin Repair",
    body:
      "Plant exosomes signal skin cells to produce collagen, repair barrier, reduce inflammation.",
    metric: "31% wrinkle reduction",
  },
  {
    title: "Inflammatory Disease",
    body:
      "Milk exosomes reduce pro-inflammatory cytokines and restore intestinal barrier integrity.",
    metric: "70% IBD score reduction",
  },
  {
    title: "Metabolic Disorders",
    body:
      "Improve glucose tolerance, insulin sensitivity, and preserve pancreatic beta-cell function.",
    metric: "25-30% glucose improvement",
  },
];

export const EVIDENCE = [
  { label: "Inflammation reduction (IBD models)", value: 70, suffix: "%" },
  { label: "Wound healing acceleration", value: 40, suffix: "%" },
  { label: "Insulin sensitivity improvement", value: 50, suffix: "%" },
  { label: "Glucose control improvement", value: 30, suffix: "%" },
  { label: "Skin elasticity improvement", value: 23, suffix: "%" },
  { label: "Skin hydration increase", value: 42, suffix: "%" },
];

export const COMPARISON = {
  headers: ["", "ExoTech Exosomes", "Synthetic Nanoparticles", "Viral Vectors"],
  rows: [
    ["Biocompatibility", "Excellent", "Poor", "Moderate"],
    ["Immunogenicity", "Minimal", "High", "High"],
    ["Targeting", "AI-programmable", "Limited", "Fixed tropism"],
    ["Cargo Versatility", "Proteins, RNA, small molecules", "Limited", "Nucleic acids only"],
    ["Manufacturing", "Scalable, GMP-compatible", "Complex, expensive", "Highly regulated"],
    ["Repeat Dosing", "Yes", "Limited", "Very limited"],
    ["Clinical Translation", "Rapid", "Slow", "Established but narrow"],
  ],
};

export const SAB = [
  {
    name: "Prof. Dr. Bernd Giebel",
    title: "Professor of Translational EV Research",
    org: "University Hospital Essen, Germany",
    bio:
      "Pioneer in extracellular vesicle research with foundational contributions to MSC-EV biology, translational manufacturing, and regulatory science.",
  },
  {
    name: "Dr. Anja Ehrhardt",
    title: "Group Leader, Molecular Biotechnology",
    org: "University of Zurich, Switzerland",
    bio:
      "Expert in bioreactor technology and scale-up; bridges discovery-stage vesicle science with industrial-scale GMP production.",
  },
  {
    name: "Prof. Jan Lötvall",
    title: "Professor of Allergy",
    org: "University of Gothenburg, Sweden",
    bio:
      "Co-discoverer of exosomal RNA and a founder of the International Society for Extracellular Vesicles (ISEV). Defining figure of the field.",
  },
];

export const MARKET = {
  current: { year: 2024, size: "$105B", segment: "Precision + regenerative medicine & diagnostics" },
  projected: { year: 2030, size: "$285B", cagr: "18%" },
  subsetCagr: "25%+",
};

export const PIPELINE = [
  { phase: "Phase 1/2", indication: "Alzheimer's disease", year: "2026" },
  { phase: "Phase 2", indication: "Crohn's disease", year: "2026–2027" },
  { phase: "Phase 2", indication: "Ulcerative colitis", year: "2026–2027" },
  { phase: "Phase 2", indication: "Type 2 diabetes", year: "2027" },
  { phase: "Preclinical", indication: "Glioblastoma (targeted chemo delivery)", year: "Active" },
  { phase: "Preclinical", indication: "Cardiac ischemia-reperfusion", year: "Active" },
];

export const RESOURCES = [
  {
    type: "White Paper",
    title: "AI-Optimized Exosome Engineering: A Platform Overview",
    desc: "How machine learning collapses the design space for surface ligands, source cells, and payload combinations.",
    tag: "Platform",
  },
  {
    type: "Clinical Summary",
    title: "Milk Exosomes in IBD: Preclinical Evidence & Trial Design",
    desc: "70% inflammation reduction, restored barrier integrity, and the path toward Phase 2 trials.",
    tag: "Therapeutics",
  },
  {
    type: "Article",
    title: "Plant-Derived Exosomes for Skin Repair and Regeneration",
    desc: "Mechanisms, clinical evidence, and storage realities for the next generation of bioactive skincare.",
    tag: "Skincare",
  },
  {
    type: "Article",
    title: "Crossing the Blood-Brain Barrier with Engineered Exosomes",
    desc: "Targeting strategies for CNS delivery in Alzheimer's, Parkinson's, and stroke.",
    tag: "Neurology",
  },
  {
    type: "White Paper",
    title: "Exosomes vs. Liposomes vs. Viral Vectors",
    desc: "A comparative review of biocompatibility, manufacturing, and translational timelines.",
    tag: "Platform",
  },
  {
    type: "Glossary",
    title: "EV Science Terminology — A Reference",
    desc: "Definitions for extracellular vesicles, microRNA, endosomal biogenesis, tetraspanins, and more.",
    tag: "Education",
  },
];

export const PLANT_STATS = [
  { value: 23, label: "Elasticity improvement", suffix: "%", sub: "vs. 8% placebo, 8 weeks" },
  { value: 31, label: "Wrinkle reduction", suffix: "%", sub: "vs. 12% placebo" },
  { value: 42, label: "Hydration increase", suffix: "%", sub: "Measured TEWL" },
  { value: 35, label: "Redness reduction", suffix: "%", sub: "Sensitive skin cohort" },
];

export const MILK_STATS = [
  { value: 70, label: "IBD inflammation score reduction", suffix: "%" },
  { value: 80, label: "TNF-α / IL-6 cytokine reduction", suffix: "%", note: "60–80%" },
  { value: 50, label: "Insulin sensitivity improvement", suffix: "%", note: "40–50%" },
  { value: 45, label: "Hepatic steatosis reduction", suffix: "%", note: "35–45%" },
];

export const FRAME_SEQUENCES = {
  seq1: { dir: "/frames/seq1", count: 50, prefix: "ezgif-frame-", pad: 3, ext: ".jpg" },
  seq1light: { dir: "/frames/seq1light-mode", count: 100, prefix: "ezgif-frame-", pad: 3, ext: ".jpg" },
  seq2: { dir: "/frames/seq2", count: 51, prefix: "ezgif-frame-", pad: 3, ext: ".jpg" },
};

export function framePath(seq: keyof typeof FRAME_SEQUENCES, i: number) {
  const s = FRAME_SEQUENCES[seq];
  const num = String(i + 1).padStart(s.pad, "0");
  return `${s.dir}/${s.prefix}${num}${s.ext}`;
}
