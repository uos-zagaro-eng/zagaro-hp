import Section from '../components/Section';

export default function About() {
  return (
    <Section id="about" className="relative bg-gradient-to-b from-white/60 to-sky-turquoise/5">
      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">About</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary-light mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            <span className="text-2xl font-bold text-primary">ZAGARO（ザガロ）</span>は、静岡県立大学の学生を中心としたテック・エンジニアリングサークルです。
          </p>
          <p>
            エンジニアリングやAI・Web開発に関心のある学生が集まり、学び・交流・発信を通じて互いに成長することを目指しています。
          </p>
          <p>
            授業で得た知識を実践につなげ、学生が自ら学び、教え合い、社会へ発信することで、大学発のエンジニア文化の循環をつくります。
          </p>
        </div>
      </div>
    </Section>
  );
}

