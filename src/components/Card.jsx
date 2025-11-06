export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 hover:border-primary/40 hover:bg-white hover:shadow-xl transition-all duration-300 shadow-md ${className}`}>
      {children}
    </div>
  );
}

