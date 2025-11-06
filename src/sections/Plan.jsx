import Section from '../components/Section';
import Card from '../components/Card';
import { plan } from '../data/plan';

export default function Plan() {
  return (
    <Section id="plan" className="relative bg-gradient-to-b from-cactus-green/10 to-sky-turquoise/10">
      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Plan</h2>
          <p className="text-xl text-slate-600 mb-4">活動内容</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary-light mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plan.map((item) => (
            <Card key={item.id} className="hover:shadow-xl hover:shadow-primary/20">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold whitespace-nowrap ml-2 border border-primary/30">
                  {item.frequency}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

