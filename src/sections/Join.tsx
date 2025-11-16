import Section from "../components/Section";
import Button from "../components/Button";

export default function Join() {
  return (
    <Section id="join" className="relative bg-white/40">
      <div className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Join Us
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary-light mx-auto mb-8 rounded-full"></div>

          <p className="text-xl md:text-2xl text-slate-800 mb-6 font-semibold">
            メンバー募集中！
          </p>
          <p className="text-lg text-slate-600 mb-8">
            初心者も歓迎です。エンジニアリングやAI・Web開発に興味がある方は、ぜひお気軽にご参加ください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://twitter.com/zagaro_eng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white bg-accent hover:bg-accent-light px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/40 hover:shadow-xl hover:shadow-accent/50 min-w-[200px]"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>気になる方は、DMでお気軽にどうぞ</span>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg">
            <p className="text-slate-700 text-sm">
              💡 参加方法や活動内容についてのご質問もお気軽にどうぞ。
              <br />
              静岡県立大学の学生でなくても、興味のある方はご連絡ください。
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
