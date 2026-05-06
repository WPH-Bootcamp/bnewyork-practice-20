import WhyForms from "./01-WhyForms";
import ZodBasic from "./02-ZodBasic";
import RHFBasic from "./03-RHF-basic";
import RHFErrors from "./04.RHF-errors";
import ZodPlusRHF from "./06-RHF-zod";

type LessonProps = {
  title: string;
  desc: string;
  children: React.ReactNode;
};

function Lesson({ title, desc, children }: LessonProps) {
  return (
    <section className="mb-12 p-6 bg-slate-800 rounded-xl border border-slate-700">
      <h2 className="text-xl text-blue-400 font-bold mb-1">{title}</h2>
      <p className="text-sm text-slate-400 mb-4">{desc}</p>
      <div className="p-4 bg-slate-900 rounded-lg border border-dashed border-slate-600">
        {children}
      </div>
    </section>
  );
}
function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10 px-5">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">
          Meet 20 — Form Handling + Motion
        </h1>
        <p className="text-slate-400 mb-8">
          Form validation pakai <em>Zod</em>, state management pakai{" "}
          <em>React Hook Form</em>, animasi pakai <em>Framer Motion</em>. Goal:
          bikin form yang BERASA kayak product nyata, dengan tipe yang aman dan
          UX yang hidup.
        </p>

        <Lesson
          title="01 — Kenapa butuh library form?"
          desc="Form pakai useState manual. Capek banget. Kita bikin mentee NGERASIN masalahnya dulu."
        >
          <WhyForms />
        </Lesson>

        <Lesson title="02 — Zod" desc="Form pakai zod validation">
          <ZodBasic />
        </Lesson>

        <Lesson title="03 — React Hook Form" desc="React Hook Form">
          <RHFBasic />
        </Lesson>

        <Lesson
          title="04 — React Hook Form - handle error"
          desc="React Hook Form"
        >
          <RHFErrors />
        </Lesson>

        <Lesson title="05 — React Hook Form & ZOD" desc="React Hook Form & ZOD">
          <ZodPlusRHF />
        </Lesson>
      </div>
    </div>
  );
}

export default App;
