import React from 'react'
import { ArrowRight, MessageSquare, ThumbsUp, CornerDownRight } from 'lucide-react';

const Interviews = () => {
     const themeColor = "bg-neutral-800"; 
  const borderColor = "bg-white"; // Using bg-black on the gap to create borders

  const articles = [
    {
      id: 1,
      title: "In Trance We Trust returns with exclusive daytime event in Breda",
      excerpt: "on kitkat, the beloved sf feline who was run over by an autonomous vehicle, and jackie fielder, the pandering sf politician who now wants to ban the vehicles altogether",
      author: "Riley Nork",
      likes: 11,
      comments: 9,
      image: "https://weraveyou.com/wp-content/uploads/2023/10/DJ-Tiesto-at-Sensation-White-2006-1-1536x1024.jpg", // Autonomous car
      hasIcon: true,
      tag: "Dec 3"
    },
    {
      id: 2,
      title: "Mariah Carey ultra-rare 1988 demo tape sells for $54,050 at Wax Poetics auction",
      excerpt: "research shows most large language models, when prompted with thousands of moral dilemmas, would save the lives of palestinians over israelis, zionists, and...",
      author: "Arctotherium",
      likes: 6,
      comments: 0,
      image: "https://weraveyou.com/wp-content/uploads/2025/04/Mariah-Carey-by-Markus-Klinko-And-Indrani-e1744807363460-1536x1371.jpg", // Classical Statue
      hasIcon: true,
      tag: "Dec 10"
    },
    {
      id: 3,
      title: "George Michael ‘FAITH’ returns as limited-edition vinyl reissue in 2026",
      excerpt: "a 1967 treaty bans ownership and resource extraction in outer space, preventing colonization and development. we must end it to secure humanity's survival.",
      author: "Owen Lewis",
      likes: 44,
      comments: 2,
      image: "https://weraveyou.com/wp-content/uploads/2025/12/George-Michael-1024x1024.jpg", // Red sci-fi
      hasIcon: true,
      tag: "Dec 3"
    },
    
  ];
  return (
   <div className={`min-h-screen flex   px-4 text-neutral-800 bg-black`}>
         <div className=" px-4 pt-12  pb-15   ">
           
          
              
              <h1 className=" !text-[12vw] text-[#ff0028]   ">
                Latest interviews
              </h1>
              <img className='mt-40 invert opacity-15' src="https://cdn.prod.website-files.com/66715118c4748bd61331f714/6676bb71bc969b0c3196124a_sound-ethics-logomark.svg"></img>
           
            <div className="mt-8">
              <p className="text-sm font-medium leading-snug opacity-90  pb-4">
                
              </p>
            </div>
          </div>
      {/* Main Grid Container with 1px black gaps for borders */}
      <div className={`grid grid-cols-2 mt-2 `}>
        
        {/* --- HERO SECTION (Spans full width) --- */}
       

        {/* --- GRID CARDS --- */}
        {articles.map((article) => (
          <div key={article.id} className={`flex flex-col h-full p-4  group relative  border-b     border-l  border-white/40 pr-4 border-dashed  text-white`}>
            {/* Image Container */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Optional Tag (like Dec 10) */}
              {article.tag && (
                 <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 font-bold">
                    {article.tag}
                 </div>
              )}
            </div>

            {/* Content Container */}
            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-black leading-tight ">
                    {article.title}
                  </h3>
                 
                </div>
                
                <p className="text-xs mt-4 font-medium leading-relaxed opacity-90 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Footer Metadata */}
              <div className="flex justify-between items-end text-[10px] uppercase font-bold tracking-wider  backdrop-blur-3xl pt-3 mt-auto text-[#ff0028]">
                <span>Read More</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0 mt-1 ml-2" />
              </div>
            </div>
          </div>
        ))}

        {/* --- "READ MORE" BLOCK (Last Item) --- */}
        <div className={`p-8 flex flex-col justify-between border-b     border-l  border-white/40 border-dashed bg-neutral-800  min-h-[300px] `}>
           <h3 className="text-5xl font-black leading-[0.9] text-white ">
             Explore more Interviews...
           </h3>
           
           <div className="flex justify-end items-center">
             <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
             </div>
             <div className="ml-2 flex items-end pb-1 text-xs font-bold uppercase tracking-widest text-white">
                Dive into it
             </div>
           </div>
        </div>

      </div>
    </div>
  )
}

export default Interviews