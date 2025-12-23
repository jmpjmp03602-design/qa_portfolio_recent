
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronDown, 
  Award, 
  Bug, 
  Code, 
  Globe, 
  Database, 
  Users,
  MessageSquare,
  Cpu,
  Target,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-4"
    >
      {title} <span className="text-gold">.</span>
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-12 h-1 bg-gold mt-6"></div>
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // 부드러운 스크롤 이동 함수
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // 헤더 높이
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'competency', 'experience', 'skills', 'vision'];
      const scrollPosition = window.scrollY + 120; // 오프셋을 약간 넉넉하게 설정

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Competency', id: 'competency' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Vision', id: 'vision' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="font-bold text-xl tracking-tighter cursor-pointer"
          >
            PARK <span className="text-gold">JOOMIN</span>
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`${
                  activeSection === item.id ? 'text-gold' : 'text-gray-400 hover:text-white'
                } transition-colors duration-300 relative py-2`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>
          <a 
            href="mailto:jmp03602@gmail.com" 
            className="bg-gold text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition-all flex items-center gap-2"
          >
            Contact
            <Mail size={16} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center gradient-bg overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold font-semibold mb-4 tracking-widest uppercase text-sm">Game QA Engineer</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              게임 품질 전문가로<br />
              성장하는 <span className="text-gold">박주민</span> <br />입니다.
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              25개 이상의 글로벌 게임 프로젝트를 성공적으로 완수했으며, 
              LQA, FQA 및 개발 QA 분야에서 탄탄한 실무 경험을 보유하고 있습니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-lg">
                <MapPin size={18} className="text-gold" />
                <span>Daegu, South Korea</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-lg">
                <Globe size={18} className="text-gold" />
                <span>English (Proficient)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* 메인 히어로 이미지: 나중에 본인 사진이나 프로젝트 스크린샷으로 교체하세요 */}
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Game QA Professional Setup" 
                className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-gold font-bold tracking-widest uppercase text-xs mb-1">Latest Project</p>
                <p className="text-white text-2xl font-bold">Towerborne</p>
                <p className="text-gray-400 text-sm">Action-Adventure RPG</p>
              </div>
            </div>
            {/* 장식 요소 */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="About Me" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="text-gold" size={32} />, title: "풍부한 경험", desc: "25개 이상의 게임 프로젝트에서 LQA, FQA 및 개발 QA 보조 경험" },
              { icon: <Zap className="text-gold" size={32} />, title: "실제 출시 기여", desc: "Towerborne 프로젝트 참여로 실제 사용자 대상 품질 확보 기여" },
              { icon: <Target className="text-gold" size={32} />, title: "전문가 목표", desc: "최적의 품질을 달성하는 게임 QA 자동화 전문가로 성장 중" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 transition-all group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white/5 rounded-3xl p-8 md:p-12 border border-white/5">
            <h3 className="text-2xl font-bold mb-6">Introduction</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Lionbridge와 QLOC에서 ‘Towerborne’을 포함한 약 25종의 글로벌 프로젝트를 수행하며 PC, 모바일, 그리고 Xbox·PS4·Switch 등 멀티 플랫폼에 대한 깊은 이해도를 갖췄습니다. 
              JIRA와 Azure DevOps를 활용하여 이슈의 근본 원인을 분석하고 끝까지 추적 관리하는 프로세스에 능숙합니다. 
              ISTQB 독학으로 다진 이론적 기반과 실무 경험을 바탕으로 최상의 품질 검증 서비스를 제공합니다.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-gold">25+</p>
                <p className="text-sm text-gray-500 uppercase">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold">1Year+</p>
                <p className="text-sm text-gray-500 uppercase">Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold">Multi</p>
                <p className="text-sm text-gray-500 uppercase">Platform Expert</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold">100%</p>
                <p className="text-sm text-gray-500 uppercase">Passion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competency Section */}
      <section id="competency" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Core Competency" 
            subtitle="소프트웨어 개발 생명주기와 문맥 기반 테스트에 대한 전문 지식" 
          />
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 rounded-3xl border border-white/5 hover:border-gold/20 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Cpu className="text-gold" /> SDLC 프로세스 이해
              </h3>
              <p className="text-gray-400 mb-6">소프트웨어 개발 생명주기 전반에 대한 깊은 이해를 바탕으로 QA의 전략적 중요성을 내재화하고 있습니다.</p>
              <ul className="space-y-4">
                {[
                  "Verification(검증) 수행 및 산출물 리뷰",
                  "Validation(유효성 확인) 중시 프로세스 설계",
                  "Stakeholder Needs를 충족하는 품질 관리",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 rounded-3xl border border-white/5 hover:border-gold/20 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Globe className="text-gold" /> Contextual Testing
              </h3>
              <p className="text-gray-400 mb-6">ISTQB 이론을 실무에 적용하여, 단순 텍스트 검수를 넘어 게임의 맥락을 고려한 테스트를 수행합니다.</p>
              <ul className="space-y-4">
                {[
                  "단순 번역 오류 확인을 넘어선 문맥 파악",
                  "Azure AI 번역 활용 및 2차 문맥 검수",
                  "사용자 경험(UX) 중심의 접근 방식 유지",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Work Experience" />
          <div className="space-y-12">
            {[
              {
                period: "2025.05 ~ 2025.07",
                company: "QLOC S.A.",
                position: "Korean Game Tester (FQA 및 개발 QA 보조)",
                details: [
                  "PC/Mobile/Xbox/PS4/Switch 등 멀티 플랫폼 환경 기능 점검",
                  "Jira/Confluence를 활용한 체계적 버그 라이프사이클 관리",
                  "기획서 기반 기능 검증 및 결함 근본 원인 분석(Root Cause Analysis)",
                  "Rocket Chat을 통한 다국적 팀원들과의 실시간 이슈 리포팅"
                ]
              },
              {
                period: "2024.08 ~ 2025.05",
                company: "Lionbridge",
                position: "Korean LQA Game Tester (Linguistic QA 담당)",
                details: [
                  "Action-Adventure RPG 'Towerborne' 등 글로벌 프로젝트 완수",
                  "Magic, memoQ, Excel 기반 데이터베이스 관리 및 검증",
                  "Azure AI를 활용한 효율적인 1차 번역 검수 파이프라인 구축",
                  "CQA(Compliance QA) 팀과의 협업으로 플랫폼 가이드라인 준수 확인"
                ]
              }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-white/10"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gold border-4 border-[#0a0a0a]"></div>
                <div className="mb-2 text-gold font-bold text-sm tracking-widest">{exp.period}</div>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold">{exp.company}</h3>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                    {exp.position}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-400 leading-relaxed flex gap-3">
                      <span className="text-gold">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Skills & Tech Stack" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Bug size={24} />, 
                title: "BTS / Management", 
                items: ["JIRA", "Confluence", "Azure DevOps"] 
              },
              { 
                icon: <Database size={24} />, 
                title: "Data & DB", 
                items: ["Magic", "memoQ", "Excel (VLOOKUP)", "SQL"] 
              },
              { 
                icon: <MessageSquare size={24} />, 
                title: "Collaboration", 
                items: ["MS Teams", "Rocket Chat", "Slack"] 
              },
              { 
                icon: <Code size={24} />, 
                title: "Programming", 
                items: ["Python (Learning)", "SQL Queries", "JQL (Jira Query Language)"] 
              }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 group hover:border-gold/30 transition-all"
              >
                <div className="p-3 bg-gold/10 text-gold rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h4 className="font-bold mb-4">{cat.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 rounded-md text-xs text-gray-400">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 px-6 bg-gold">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-black"
          >
            <SectionTitle title="Growth Vision" />
            <div className="space-y-8 mt-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center shrink-0 font-bold">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">현재 역량</h4>
                  <p className="text-black/70">25개 이상의 프로젝트 경험을 바탕으로 탄탄한 QA 기본기를 보유하고 있으며, Python 기본 문법 독학을 완료했습니다.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center shrink-0 font-bold">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">학습 중</h4>
                  <p className="text-black/70">QA 자동화 프로세스 구축을 위해 Python 심화 학습 및 자동화 스크립트 작성 역량을 강화하고 있습니다.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center shrink-0 font-bold">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">미래 목표</h4>
                  <p className="text-black/70">QA 자동화 엔지니어로 전향하여 데이터 기반의 품질 관리 시스템을 고도화하고 회사의 성장에 기여하고자 합니다.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="p-8 bg-black rounded-3xl shadow-2xl">
              <pre className="text-xs text-gold overflow-hidden">
                <code>{`
class QAAutomationExpert:
    def __init__(self, name="Park JooMin"):
        self.name = name
        self.skills = ["LQA", "FQA", "SDLC"]
        self.learning = "Python Automation"
        self.vision = "Quality First"

    def grow(self):
        while True:
            self.skills.append(self.learning)
            print(f"{self.name} is evolving...")
            if "Automation Specialist" in self.skills:
                break

joomin = QAAutomationExpert()
joomin.grow()
                `}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            함께 일할 준비가 되셨나요<span className="text-gold">?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <a href="mailto:jmp03602@gmail.com" className="group">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group-hover:border-gold group-hover:bg-gold/5 transition-all mb-3 flex items-center justify-center">
                <Mail size={32} className="text-gold" />
              </div>
              <p className="text-sm font-medium">jmp03602@gmail.com</p>
            </a>
            <div className="group">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 transition-all mb-3 flex items-center justify-center">
                <Phone size={32} className="text-gold" />
              </div>
              <p className="text-sm font-medium">+82 10 6595 8445</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Park Joo-min. Portfolio Created with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
