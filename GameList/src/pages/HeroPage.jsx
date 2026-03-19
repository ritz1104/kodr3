import React, { useState } from 'react'

const HeroPage = () => {

const games = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    rating: 4.8,
    description: "Experience Night City as a mercenary outlaw in this open-world action-adventure RPG.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK_m-S41Pp5qyB0W48Sza43jUSdUUB2eMFM4u_AOyut9pkZ12pN9rhOUIsoVuRSwmwrhJAjMMQgCMht9DfUFx95vnZyaEsU7IvMftCh-TxWls7zXgvDpysB_6q4JZfZzY6uB0MH_G9bQhzGrRMd4S_3vbNElxRsbCpXsWjn60Jl9JsjxKhVXGFX9Gn3nGQy4dsZw9jP721g8QBv1UTP2lRmE8C-rhoAlPQbhtLRNYw3qhd4nco4lXMvT9Ubp4yqQI9YIqqruthDls",
  },
  {
    id: 2,
    title: "Elden Ring",
    rating: 4.9,
    description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7vm0lCijCJsn0pKcVEtbJvy5EHIBQLyMmdP7mtvi9weJbNKcBBhXOJ0cc7RV3Q3mlEc3fxBxSTfKOSzgaTEM-Kl44JBjEkbCpLaIyx8tiStpQlqFWyLvrKyInLAvM4DD-xvj14kdkgnuyO2KM2Gw2yzCrnr2xpJFvXjuFN0v1cwhrbfGmJ0cqgv2I1rnbmxxEdOBVcXi4H8V7mT2Jl3ZBu29q2XOuYmRpkEhKi3phTWQsYsdpZByAYlonkjZSr7TwFaGd0T9U6Jw",
  },
  {
    id: 3,
    title: "Hades II",
    rating: 4.7,
    description: "Battle beyond the Underworld using dark sorcery to take on the Titan of Time.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBx-4HOTaT4_zXLPbAq0pf6YnxYklG8_eX6RQIUfyCLdhTHyTB6VKxZFRIGKAwSgBlZ7B_1B04ZAHPzZ9X7Y_kclH_QoTch-mnmxQeCb_GGAGLDa_RYAhK0WKXwFC4GAnWMrLxxUxaaTLSW0ngUqgvoS4T8SD0zqFD5QFcGBrVZDisPiFKFEnFOlus31b0lrPPLNNSihJKqtqc4yOuV3gfiJukuTqdXIrD-7N5-ndbduZlxV_TyRegd6pBZk0Ly4EXwKIAwl2Z_U2U",
  },
  {
    id: 4,
    title: "The Witcher 3",
    rating: 5.0,
    description: "Become Geralt of Rivia, a monster hunter for hire, in a war-torn world.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-Ozbw9uLMRlZVzQ8VoQ1wcbq27ZyXhC_85eddTJibJZ78IRLTXquaVXZWjAHdAq-Vy9cq-XEBsAmv0GoOyBxbIl269_4Z8EP61Q_bJLauwXLF_3WxwD9XcsAGfMppKwXp3KvMpyVqR_mbnWqD5d0QOav9D783JV-G3f4KIIyDDSVifn9zM29uJoWxX2G9ZslZgapSkD3sVDcWN3UWzzs6y4vbl9R4WgtE2-5KI5glSkWHm7jqs7a28pIh4SBbwzc4jvLyz8UwKtg",
  },
  {
    id: 5,
    title: "Starfield",
    rating: 4.2,
    description: "Embark on an epic journey to answer humanity's greatest mystery among the stars.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHjdY8i016JcK-jzePM86mhM-VHDS2rgZLl5whhijy-ZTRBaM-jEKWQQ85WA3VsU3e40UNSbLiB-sk_IUuq5_Qi6wTAgyU7nObeNWxMi7ICkAzht4ypoQqvwWz5p78mcs4TZd3dLuR3eUqaqAg9RTdF7saV3RslVo-X9j4zK1ALpReOrkWGI1p67yTcpUarur5Lry77DsWemVqNOs2UwuFqNDN4EJC34KROAhNAARIDrPw9CO4iCg-qKjD4ADhfcmXdnLMjbcx4Rs",
  },
  {
    id: 6,
    title: "Ghost of Tsushima",
    rating: 4.9,
    description: "Forge a new way of warfare to liberate Tsushima Island in this samurai adventure.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAViDTZ0x0RFPkI3MOhPq82_yZgPs9eErbfSSey4khr8C7qY8jRlivyzvRQYCaY6HWbs2tKu6pB8wX_XlO8B8ypRCzPCDjtoAWO90Z7gcEol7OGwKOIUCunbM9BCrw3d0G0-2itxfl0qwnztJbStpllB3-p1asBYPgGFTcuVPv-lif8KBF0SXY39Kxr7ov-M-F0VjwxJ8po-0YlLJrSYqyqZ6qu9QvuQPtUZvJvowNSfXSJR6EpA0TD5w1nZGNblz680bJMDFco1A8",
  },
  {
    id: 7,
    title: "Doom Eternal",
    rating: 4.8,
    description: "Hell's armies have invaded Earth. Become the Slayer and stop the destruction.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnG3HXTadceeCHJutKQGcxwEUeRAfsbsCE7zQthAM51MpQlTqZ5UqAGgKeGqrOnPe3gq4ekoTAGOP3fV0wNRmrKnFlJkRdGQ4rM98zLZJQQSW2Dwz2k9J50dXcKZekHe3Mz7hZGH3invZBX9oj5yMYl6X2EyRNcG2-Kc3iYYtIPWFrF0BUjXOhbo-LQ-2eo46hAJ2ZCA0nlDGF05B33z8daIhyXKGBXwLyfeLUSlefUqS72NZkqs7m5pljvH4_rve-VEfJ9uatF0c",
  },
  {
    id: 8,
    title: "Horizon Zero Dawn",
    rating: 4.6,
    description: "In an era where Machines roam the Earth, one young hunter seeks her destiny.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjojj4UTr6Kp9dcE39M4n7Zi5oXwnoVtJI8zV97mR3G0Cb2moNVTRIDVFVFp3CRc7NfcrHU3_bhDqDIYcvNuQk0meF4Ry6UqsDYBVRI8t1XBQRJIFwO9J43xiOxchlVijVtI5U9HZpBOBlbTVcYU2Q5zVL2P7Nlr5AkUJ4F-TBZie0j5RZYPgY0w_5I6N8ywXcpHVI1ftdx0hZWcQMLlMl5WQnn89jaSOqAUB6NarnMkzIfGUU85ghKJhkgassoJsK9KX4yb8aq7E",
  },
];

function GameCard({ game }) {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-[#111111] border border-slate-200 dark:border-[#333333] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={game.img}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate pr-2">{game.title}</h3>
          <div className="flex items-center gap-1 shrink-0">
            <StarIcon />
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{game.rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed flex-1">
          {game.description}
        </p>
        <button className="w-full py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-bold transition-opacity hover:opacity-80">
          View Details
        </button>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
  const [currentPage, setCurrentPage] = useState(1);

const filters = ["All Titles", "Trending Now", "New Releases", "RPG", "Action"];
const [activeFilter, setActiveFilter] = useState("All Titles");
  return (
     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Explore the Metaverse
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Discover your next obsession from our meticulously curated database of the world's most legendary titles.
          </p>
        </section>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                activeFilter === filter
                  ? "bg-[#137fec] text-white"
                  : "bg-[#111111] text-slate-400 hover:bg-[#333333]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center py-12 gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#333333] hover:bg-[#111111] transition-colors text-slate-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold text-sm transition-colors ${
                currentPage === page
                  ? "bg-[#137fec] text-white"
                  : "border border-[#333333] hover:bg-[#111111] text-slate-300"
              }`}
            >
              {page}
            </button>
          ))}
          <span className="px-2 text-slate-500">...</span>
          <button
            onClick={() => setCurrentPage(12)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold text-sm transition-colors ${
              currentPage === 12
                ? "bg-[#137fec] text-white"
                : "border border-[#333333] hover:bg-[#111111] text-slate-300"
            }`}
          >
            12
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#333333] hover:bg-[#111111] transition-colors text-slate-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>
  )
}

export default HeroPage