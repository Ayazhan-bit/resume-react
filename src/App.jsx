import React, { useState } from 'react';
import { 
  Mail, Send, Code, MapPin, Printer, Moon, Sun, 
  Briefcase, GraduationCap, Award, BarChart3 
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const profile = {
    name: "Аяжан Жылдызбекова",
    title: "Frontend-разработчик / Аналитик",
    location: "Бишкек, Кыргызстан",
    email: "aazanzyldyzbekova@gmail.com",
    telegram: "@aazan_dev",
    github: "https://github.com/aazan",
    about: "Студентка Кыргызско-Германского института прикладной информатики. Развиваюсь на стыке фронтенд-разработки и аналитики данных: создаю адаптивные интерфейсы на React, работаю с контролем версий через Git и анализирую требования к продукту. Быстро обучаюсь, системно подхожу к решению задач и владею иностранными языками для работы в интернациональных проектах.",
  };

  const skills = {
    "Фронтенд & Разработка": ["React", "JavaScript", "HTML5 & CSS3", "Tailwind CSS", "Git & GitHub"],
    "Аналитика & Инструменты": ["Анализ требований", "Сбор и структурирование данных", "BPMN / Схемы процессов", "Декомпозиция задач"],
    "Языки": ["Русский (Свободный)", "Кыргызский (Родной)", "Немецкий (A2-B1)", "Английский (B1)"]
  };

  const experience = [
    {
      role: "Учебная и проектная практика",
      company: "Кыргызско-Германский институт прикладной информатики",
      period: "2025 — Настоящее время",
      achievements: [
        "Разработка веб-интерфейсов и SPA-приложений с использованием React и современного стека.",
        "Контроль версий, ведение веток и совместная командная работа через Git.",
        "Анализ пользовательских сценариев и декомпозиция технического задания на задачи."
      ]
    }
  ];

  const projects = [
    {
      title: "Interactive Resume Web App",
      category: "Frontend / React",
      desc: "Интерактивное одностраничное приложение резюме с поддержкой темной/светлой темы, адаптивной сеткой и подготовленным стилем печати в PDF.",
      tags: ["React", "JavaScript", "Tailwind CSS", "Vite"]
    },
    {
      title: "Web Data Analytics & UI Module",
      category: "Аналитика & Разработка",
      desc: "Исследование требований, структурирование данных предметной области и разработка дашбордов для наглядного отображения информации.",
      tags: ["Анализ данных", "React", "Git", "UI/UX"]
    }
  ];

  const education = [
    {
      degree: "Бакалавриат, Прикладная информатика",
      institution: "Кыргызско-Германский институт прикладной информатики (КГИПИ / INAI)",
      period: "Обучение в процессе",
      details: "Программная инженерия, алгоритмы и структуры данных, системный анализ, технический немецкий язык."
    }
  ];

  return (
    <div className={darkMode ? 'bg-slate-950 text-slate-100 min-h-screen' : 'bg-slate-50 text-slate-900 min-h-screen'}>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
        }
      `}</style>
      
      <div className="p-4 md:p-10 transition-colors">
        {/* Панель управления */}
        <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center no-print">
          <span className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
            Резюме
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-lg border transition ${darkMode ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-amber-400' : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-600'}`}
              title="Переключить тему"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition shadow-sm"
            >
              <Printer size={18} />
              Сохранить в PDF
            </button>
          </div>
        </div>

        {/* Главная карточка */}
        <main className={`max-w-4xl mx-auto border rounded-2xl shadow-sm p-6 md:p-10 transition-colors ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          
          {/* Шапка */}
          <header className={`border-b pb-8 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  {profile.name}
                </h1>
                <p className="text-lg font-medium text-indigo-500 mt-1">
                  {profile.title}
                </p>
                <div className="flex items-center gap-1.5 text-slate-400 text-sm mt-2">
                  <MapPin size={15} />
                  <span>{profile.location}</span>
                </div>
              </div>

              {/* Контакты */}
              <div className="flex flex-col gap-2 text-sm">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-indigo-500 transition">
                  <Mail size={16} className="text-slate-400" />
                  <span>{profile.email}</span>
                </a>
                <a href={`https://t.me/${profile.telegram.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-indigo-500 transition">
                  <Send size={16} className="text-slate-400" />
                  <span>{profile.telegram}</span>
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-indigo-500 transition">
                  <Code size={16} className="text-slate-400" />
                  <span>GitHub Профиль</span>
                </a>
              </div>
            </div>

            {/* О себе */}
            <div className="mt-6 text-sm md:text-base leading-relaxed opacity-90">
              {profile.about}
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Левая колонка: Навыки и Образование */}
            <div className="md:col-span-1 space-y-8">
              <section>
                <h2 className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase mb-4">
                  <Code size={18} className="text-indigo-500" />
                  Навыки
                </h2>
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">{category}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((skill, idx) => (
                          <span key={idx} className={`px-2.5 py-1 rounded text-xs ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase mb-4">
                  <GraduationCap size={18} className="text-indigo-500" />
                  Образование
                </h2>
                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <div key={idx}>
                      <h3 className="font-semibold text-sm">{edu.institution}</h3>
                      <p className="text-xs text-indigo-500 font-medium">{edu.degree}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{edu.period}</p>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Правая колонка: Практика и Проекты */}
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase mb-4">
                  <Briefcase size={18} className="text-indigo-500" />
                  Опыт & Практика
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-4 border-l-2 border-indigo-500">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-base">{exp.role}</h3>
                        <span className="text-xs text-slate-400">{exp.period}</span>
                      </div>
                      <p className="text-xs font-semibold text-indigo-500 mb-2">{exp.company}</p>
                      <ul className="list-disc list-inside space-y-1.5 text-xs opacity-90">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase mb-4">
                  <BarChart3 size={18} className="text-indigo-500" />
                  Проекты
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {projects.map((proj, idx) => (
                    <div key={idx} className={`border rounded-xl p-4 ${darkMode ? 'border-slate-800 bg-slate-800/40' : 'border-slate-200 bg-slate-50/70'}`}>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-sm">{proj.title}</h3>
                        <span className="text-[11px] font-medium text-indigo-500 uppercase">{proj.category}</span>
                      </div>
                      <p className="text-xs mb-3 leading-relaxed opacity-90">
                        {proj.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.map((tag, tIdx) => (
                          <span key={tIdx} className={`text-[11px] border px-2 py-0.5 rounded ${darkMode ? 'bg-slate-900 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-600'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}