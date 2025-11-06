import Section from '../components/Section';
import Card from '../components/Card';
import { members } from '../data/members';

export default function Members() {
  const getTrackColor = (track) => {
    return track === 'AI' 
      ? 'bg-purple-100 text-purple-700 border-purple-300'
      : 'bg-cyan-100 text-cyan-700 border-cyan-300';
  };

  return (
    <Section id="members" className="relative bg-gradient-to-b from-sky-turquoise/10 to-cactus-green/10">
      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Members</h2>
          <p className="text-xl text-slate-600 mb-4">運営メンバー紹介</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary-light mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {members.map((member) => (
            <Card key={member.id} className="text-center hover:shadow-xl hover:shadow-primary/20">
              <div className="mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-accent to-primary-light mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-primary/30">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm text-slate-600">{member.role}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getTrackColor(member.track)}`}>
                    {member.track} Track
                  </span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{member.comment}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

