import { Link } from 'react-router-dom';

export default function Checkout() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased relative">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-slate-200/60 dark:border-slate-800/60">
        <Link to="/cart" className="flex items-center justify-center p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-90">
          <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
        </Link>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight mr-8">确认订单</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-32">
        {/* Address Selector Section */}
        <section className="mt-2 mx-0 bg-white dark:bg-slate-900 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="flex items-center gap-4 px-4 py-6 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div className="flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 p-3 shrink-0">
              <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
            </div>
            <div className="flex flex-1 flex-col justify-center overflow-hidden">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-slate-900 dark:text-slate-100 text-[17px] font-bold">张三 (John Doe)</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">+1 234 567 890</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-snug line-clamp-2">
                美国伊利诺伊州斯普林菲尔德市阳光大道123号405室，邮编 62704
              </p>
            </div>
            <div className="shrink-0 ml-1">
              <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
            </div>
          </div>
          {/* Decorative mail border */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[repeating-linear-gradient(45deg,#136dec,#136dec_12px,#fff_12px,#fff_24px,#ef4444_24px,#ef4444_36px,#fff_36px,#fff_48px)] dark:opacity-80"></div>
        </section>

        {/* Order Products List */}
        <section className="mt-3 bg-white dark:bg-slate-900 shadow-sm">
          <div className="px-4 py-3.5 border-b border-slate-100 dark:border-slate-800/60">
            <h3 className="text-slate-900 dark:text-slate-100 text-[15px] font-bold">订单商品</h3>
          </div>
          <div className="flex flex-col">
            {/* Item 1 */}
            <div className="flex gap-4 px-4 py-4 border-b border-slate-50 dark:border-slate-800/40 last:border-0">
              <div className="bg-slate-50 dark:bg-slate-800 aspect-square rounded-xl w-22 h-22 bg-cover bg-center overflow-hidden border border-slate-100 dark:border-slate-800 flex-shrink-0" data-alt="Feitian Maotai" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584225065152-4a145afaa3cc?q=80&w=800&auto=format&fit=crop")' }}>
              </div>
              <div className="flex flex-1 flex-col py-0.5">
                <div className="mb-1">
                  <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-tight line-clamp-1">飞天茅台 53度</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 font-medium bg-slate-100 dark:bg-slate-800 self-start inline-block px-2 py-0.5 rounded">规格: 500ml</p>
                </div>
                <div className="mt-auto flex justify-between items-baseline">
                  <p className="text-primary text-[17px] font-bold">¥2,999.00</p>
                  <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">x1</p>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex gap-4 px-4 py-4 border-b border-slate-50 dark:border-slate-800/40 last:border-0">
              <div className="bg-slate-50 dark:bg-slate-800 aspect-square rounded-xl w-22 h-22 bg-cover bg-center overflow-hidden border border-slate-100 dark:border-slate-800 flex-shrink-0" data-alt="Health Wine" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop")' }}>
              </div>
              <div className="flex flex-1 flex-col py-0.5">
                <div className="mb-1">
                  <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-tight line-clamp-1">人参枸杞养生酒</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 font-medium bg-slate-100 dark:bg-slate-800 self-start inline-block px-2 py-0.5 rounded">规格: 礼盒装</p>
                </div>
                <div className="mt-auto flex justify-between items-baseline">
                  <p className="text-primary text-[17px] font-bold">¥399.00</p>
                  <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">x1</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Options & Coupons */}
        <section className="mt-3 bg-white dark:bg-slate-900 shadow-sm divide-y divide-slate-50 dark:divide-slate-800/40">
          <div className="flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
            <span className="text-slate-700 dark:text-slate-300 text-[15px]">配送方式</span>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-900 dark:text-slate-100 text-sm font-medium">标准快递</span>
              <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-[20px]">chevron_right</span>
            </div>
          </div>
          <div className="flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
            <span className="text-slate-700 dark:text-slate-300 text-[15px]">优惠券</span>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 dark:text-slate-500 text-sm">暂无可用优惠券</span>
              <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-[20px]">chevron_right</span>
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <section className="mt-3 bg-white dark:bg-slate-900 px-4 py-5 shadow-sm space-y-3.5">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400 dark:text-slate-500">商品总计</span>
            <span className="text-slate-900 dark:text-slate-100 font-medium tracking-tight">¥3,398.00</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400 dark:text-slate-500">运费</span>
            <span className="text-slate-900 dark:text-slate-100 font-medium tracking-tight">¥0.00</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400 dark:text-slate-500">优惠减免</span>
            <span className="text-emerald-500 font-medium tracking-tight">-¥0.00</span>
          </div>
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex justify-between items-center">
            <span className="text-slate-900 dark:text-slate-100 font-bold">实付款</span>
            <span className="text-primary text-xl font-bold tracking-tight">¥3,398.00</span>
          </div>
        </section>
      </main>

      {/* Bottom Submission Bar */}
      <footer className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800/50 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex items-center justify-between z-50 shadow-[0_-4px_16px_rgba(0,0,0,0.03)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col">
          <span className="text-slate-400 dark:text-slate-500 text-[11px] font-medium uppercase tracking-wider mb-0.5">实付总额</span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-primary text-[24px] font-black tracking-tight">¥3,398.00</span>
          </div>
        </div>
        <Link to="/payment" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-12 rounded-full transition-all active:scale-[0.97] shadow-lg shadow-primary/25 text-base">
          提交订单
        </Link>
      </footer>
    </div>
  );
}
