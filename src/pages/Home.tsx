import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex-1 overflow-y-auto bg-white dark:bg-slate-950 pb-20">
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center h-10 w-full bg-slate-100 dark:bg-slate-800 rounded-full pl-4 pr-1 gap-2">
              <span className="material-symbols-outlined text-slate-500 text-xl">search</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder-slate-500 outline-none" 
                placeholder="搜索美酒佳酿..." 
                type="text"
              />
              <button className="bg-primary text-white text-xs font-bold h-8 px-5 rounded-full whitespace-nowrap">搜索</button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-4">
        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-sm group">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=1000&auto=format&fit=crop')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center px-6">
            <span className="text-primary font-bold text-xs tracking-wider uppercase mb-1">名酒品鉴季</span>
            <h2 className="text-white text-xl font-bold leading-tight">高端白酒低至 8 折</h2>
            <button className="mt-3 w-fit bg-primary text-white text-xs font-bold py-2 px-4 rounded-lg">立即选购</button>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            <span className="size-1.5 rounded-full bg-white"></span>
            <span className="size-1.5 rounded-full bg-white/40"></span>
            <span className="size-1.5 rounded-full bg-white/40"></span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 px-4 py-4 grid-cols-3">
        <Link to="/partner" className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">handshake</span>
          </div>
          <span className="text-xs font-semibold">合伙人</span>
        </Link>
        <Link to="/team" className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">group</span>
          </div>
          <span className="text-xs font-semibold">我的团队</span>
        </Link>
        <Link to="/sales" className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">payments</span>
          </div>
          <span className="text-xs font-semibold">收益中心</span>
        </Link>
      </div>

      <div className="flex gap-6 overflow-x-auto px-4 py-4 hide-scrollbar">
        {[
          { icon: 'wine_bar', label: '养生酒' },
          { icon: 'liquor', label: '酱香白酒' },
          { icon: 'local_bar', label: '浓香白酒' },
          { icon: 'celebration', label: '进口红酒' },
          { icon: 'redeem', label: '礼盒专区' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 min-w-[56px]">
            <div className="size-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <span className="text-[11px] text-slate-600 dark:text-slate-400">{item.label}</span>
          </div>
        ))}
      </div>

      <section className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">热门商品</h3>
          <Link to="/products" className="text-primary text-sm font-semibold flex items-center gap-1">
            查看全部 <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar">
          <Link to="/product/1" className="min-w-[160px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584225065152-4a145afaa3cc?q=80&w=400&auto=format&fit=crop')" }}></div>
            <div className="p-3">
              <h4 className="text-sm font-medium line-clamp-1 mb-1">飞天茅台 53度 500ml</h4>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-primary font-bold">¥2999.00</span>
                <span className="text-[10px] text-slate-400 line-through">¥3299.00</span>
              </div>
              <span className="text-[10px] text-slate-500">已售 1.2w</span>
            </div>
          </Link>
          <Link to="/product/2" className="min-w-[160px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=400&auto=format&fit=crop')" }}></div>
            <div className="p-3">
              <h4 className="text-sm font-medium line-clamp-1 mb-1">人参枸杞养生酒 500ml</h4>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-primary font-bold">¥299.00</span>
                <span className="text-[10px] text-slate-400 line-through">¥399.00</span>
              </div>
              <span className="text-[10px] text-slate-500">已售 8500</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="px-4 py-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">为您推荐</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/product/3" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596460107916-430662021049?q=80&w=400&auto=format&fit=crop')" }}></div>
            <div className="p-3">
              <h4 className="text-sm font-medium line-clamp-2 mb-2">五粮液 普五第八代 52度</h4>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">¥1099.00</span>
                <span className="text-[10px] text-slate-500">已售 2.4w</span>
              </div>
            </div>
          </Link>
          <Link to="/product/4" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=400&auto=format&fit=crop')" }}></div>
            <div className="p-3">
              <h4 className="text-sm font-medium line-clamp-2 mb-2">宁夏红 枸杞养生酒 礼盒装</h4>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">¥358.00</span>
                <span className="text-[10px] text-slate-500">已售 5120</span>
              </div>
            </div>
          </Link>
          <Link to="/product/5" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=400&auto=format&fit=crop')" }}></div>
            <div className="p-3">
              <h4 className="text-sm font-medium line-clamp-2 mb-2">奔富 MAX 麦克斯 干红葡萄酒</h4>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">¥288.00</span>
                <span className="text-[10px] text-slate-500">已售 1.1w</span>
              </div>
            </div>
          </Link>
          <Link to="/product/6" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574085733277-851d9d856a3a?q=80&w=400&auto=format&fit=crop')" }}></div>
            <div className="p-3">
              <h4 className="text-sm font-medium line-clamp-2 mb-2">国窖1573 浓香型白酒 52度</h4>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">¥1199.00</span>
                <span className="text-[10px] text-slate-500">已售 9300</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
