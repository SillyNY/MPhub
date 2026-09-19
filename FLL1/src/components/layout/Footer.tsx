import { FACADE } from "@/lib/utils/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-white/30">
        <p>{FACADE.name} — {FACADE.nameEn}</p>
        <p className="mt-1">
          © {new Date().getFullYear()} {FACADE.name}. 仅供学习交流，非商业用途。
        </p>
      </div>
    </footer>
  );
}