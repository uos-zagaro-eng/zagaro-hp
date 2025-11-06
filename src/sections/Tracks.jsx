import Section from '../components/Section';
import Card from '../components/Card';

export default function Tracks() {
  const tracks = [
    {
      id: 'ai',
      title: 'AI Track',
      icon: '🤖',
      description: '機械学習・LLM・MLOps系の技術を学び、実践するトラック',
      features: [
        '教材共有',
        '論文読み会',
        'プロジェクト実践',
        '最新技術の情報共有',
      ],
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
    },
    {
      id: 'web',
      title: 'Web Track',
      icon: '🌐',
      description: 'フロント/バックエンド・UI/UX・チーム開発を学ぶトラック',
      features: [
        'フロントエンド開発',
        'バックエンド開発',
        'UI/UXデザイン',
        'チーム開発実践',
      ],
      color: 'from-sky-turquoise/20 to-accent-light/20',
      borderColor: 'border-sky-turquoise/40',
    },
  ];

  return (
    <Section id="tracks" className="relative bg-gradient-to-b from-white/70 to-cactus-green/5">
      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Tracks</h2>
          <p className="text-xl text-slate-600 mb-4">AI / Web</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary-light mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tracks.map((track) => (
            <Card
              key={track.id}
              className={`bg-gradient-to-br ${track.color} border-2 ${track.borderColor} hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-5xl mb-4">{track.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{track.title}</h3>
              <p className="text-slate-700 mb-4">{track.description}</p>
              <ul className="space-y-2">
                {track.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-600">
                    <span className="text-accent mr-2 font-bold">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

