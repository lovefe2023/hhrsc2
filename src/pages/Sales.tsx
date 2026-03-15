import { Link } from 'react-router-dom';

export default function Sales() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center bg-primary text-white p-4 justify-between">
        <Link to="/profile" className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">收益中心</h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        <div className="bg-primary px-6 pt-4 pb-12 text-white relative">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-white/80 text-sm mb-1">可提现收益 (元)</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">¥</span>
              <span className="text-5xl font-bold tracking-tight">8,540.00</span>
            </div>
            <Link to="/withdraw" className="mt-4 bg-white text-primary font-bold px-8 py-2 rounded-full shadow-lg shadow-black/10 active:scale-95 transition-transform block">
              立即提现
            </Link>
          </div>
        </div>

        <div className="mx-4 -mt-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 relative z-10">
          <div className="grid grid-cols-2 divide-x divide-slate-100 dark:divide-slate-800 py-4">
            <div className="flex flex-col items-center justify-center">
              <span className="text-slate-500 text-xs mb-1">今日预估收益</span>
              <span className="text-slate-900 dark:text-slate-100 font-bold text-lg">¥125.50</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-slate-500 text-xs mb-1">本月累计收益</span>
              <span className="text-slate-900 dark:text-slate-100 font-bold text-lg">¥3,240.00</span>
            </div>
          </div>
        </div>

        <div className="mt-4 px-4 space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="px-4 py-3 border-b border-slate-50 dark:border-slate-800/50 flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 border-l-4 border-primary pl-2">收益明细</h3>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                全部 <span className="material-symbols-outlined text-[14px]">expand_more</span>
              </span>
            </div>
            <div className="divide-y divide-slate-50 dark:divide-slate-800/50">
              {[
                { title: '直推奖励', time: '2023-10-24 14:30', amount: '+50.00', type: 'positive' },
                { title: '团队分红', time: '2023-10-23 09:15', amount: '+120.50', type: 'positive' },
                { title: '提现到微信', time: '2023-10-20 18:00', amount: '-500.00', type: 'negative' },
                { title: '直推奖励', time: '2023-10-19 11:20', amount: '+35.00', type: 'positive' },
                { title: '团队分红', time: '2023-10-18 16:45', amount: '+88.00', type: 'positive' },
              ].map((item, i) => (
                <div key={i} className="p-4 flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{item.title}</span>
                    <span className="text-xs text-slate-400">{item.time}</span>
                  </div>
                  <span className={`font-bold text-base ${item.type === 'positive' ? 'text-emerald-500' : 'text-slate-900 dark:text-slate-100'}`}>
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-3 text-center border-t border-slate-50 dark:border-slate-800/50">
              <span className="text-xs text-slate-400">查看更多</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
