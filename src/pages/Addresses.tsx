import { useNavigate } from 'react-router-dom';

export default function Addresses() {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-screen max-w-md mx-auto flex-col bg-white dark:bg-slate-900 overflow-hidden shadow-xl">
      {/* Top App Bar */}
      <div className="flex items-center bg-white dark:bg-slate-900 p-4 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 ml-2">我的收货地址</h2>
      </div>

      {/* Address List Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
        {/* Address Card 1 (Default) */}
        <div className="bg-white dark:bg-slate-800 border border-primary/20 rounded-lg p-5 shadow-sm relative">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
              <span className="text-slate-900 dark:text-slate-100 font-bold text-base">张三</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">+86 138 0013 8000</span>
            </div>
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-sm">默认</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
            广东省深圳市南山区粤海街道 腾讯滨海大厦
          </p>
          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
            <div className="flex gap-6">
              <button className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">edit</span>
                编辑
              </button>
              <button className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-lg">delete</span>
                删除
              </button>
            </div>
            <div className="w-16 h-10 bg-slate-100 dark:bg-slate-700 rounded overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKdRt0ACELRo62k2aOqAoHVVe5zX7VBkbw9_lMbFfa_hoxavd5BDv-ZCFF3d8WFWg7p1sREqXvBpEkStsNFgAtc4l-w_sNpWrk5X1c263sAM-Uh-k_nvfoRJnU00mUjoXASMGRUshvYGuL21ExFRfqNeFOCNvQzQdW0XHVAuSY-Nwu8T3IEGls2Kaf4ShPO34GLz1ipQwjGLvz9XyajL_q6uZdJm3icSJMimAbYGMjMOt3E6JCqnMcdahkBtGFz1OYiM1vV1HIpv0")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
          </div>
        </div>

        {/* Address Card 2 */}
        <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg p-5 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
              <span className="text-slate-900 dark:text-slate-100 font-bold text-base">李四</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">+86 139 1234 5678</span>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
            北京市朝阳区建国门外大街1号 国贸大厦
          </p>
          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
            <div className="flex gap-6">
              <button className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">edit</span>
                编辑
              </button>
              <button className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-lg">delete</span>
                删除
              </button>
            </div>
            <div className="w-16 h-10 bg-slate-100 dark:bg-slate-700 rounded overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYqbjC3WxzrZA8F9AeFLOklO_kM4ri7SHmXczIVgY6GPsFi2zxt9biA6CNl4A93yrYc80b3v6wfAzU8wknbIB62xwQ3SErSjGtWaOGv2CgubLboo7Gnad3_gzY-T1Cno_s35l1qiRiAffUs2zekv_luf4AqjbIhOmSzO91CQzeCSvQH6Tzkumv4zBx5fxQApG8xcBChsW2DK00YHCwRJOS87G2FwNcMo1F7d30MGWcuhL84QsAhTtcD7ov7e53fg-1y98x6SwURwM")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
          </div>
        </div>

        {/* Address Card 3 */}
        <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg p-5 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
              <span className="text-slate-900 dark:text-slate-100 font-bold text-base">王五</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">+86 137 6677 8899</span>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
            上海市浦东新区世纪大道1号 东方明珠塔
          </p>
          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
            <div className="flex gap-6">
              <button className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">edit</span>
                编辑
              </button>
              <button className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-lg">delete</span>
                删除
              </button>
            </div>
            <div className="w-16 h-10 bg-slate-100 dark:bg-slate-700 rounded overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjoYfrB3wI0NOmuQH_ZiWttD3choucRvLNbIbQnVFM7BFZcrNVW5BURT2jErJ1oRWaD63oO4tKXFqFF_9JocKXBgvTRP3XgiddRQeC4asQ0V-OUqhrIoCjljUKSIBnqL50dOdiv_19t7pB5PdJpsLYwBBoJgbDOpkLUxN0tjfZ_pIf6EExqMkXg0vCoLELMClR-U5m4v7kNL76ixMxgYilpz2JZHsgiTMbTdbooxsUrxmMFkC5nKkHO57v7yp9BQrxUYWJAoNBIv4")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all active:scale-[0.98]">
          <span className="material-symbols-outlined">add</span>
          添加新地址
        </button>
      </div>
    </div>
  );
}
