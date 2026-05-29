// Light ambient backdrop — sits behind all content. Pure CSS, zero JS cost.
export default function AmbientBG() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-ambient" />
      <div className="absolute inset-0 bg-grid opacity-100" />
      {/* Soft scientific glows */}
      <div className="absolute -top-[10%] -left-[6%] w-[55vw] h-[55vw] rounded-full bg-[#406edc]/8 blur-[120px]" />
      <div className="absolute top-[40%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-[#e7c068]/10 blur-[140px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#406edc]/6 blur-[140px]" />
    </div>
  );
}
