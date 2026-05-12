import React from 'react';
import { ArrowRight, MessageSquare, ThumbsUp, CornerDownRight } from 'lucide-react';

const Stories = () => {
  // Custom Green Color to match the image
  const themeColor = "bg-[#f7f3e7]"; 
  const borderColor = "bg-black"; // Using bg-black on the gap to create borders

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
    {
      id: 4,
      title: "Fatboy Slim & The Rolling Stones unite for ‘Satisfaction Skank’: Listen",
      excerpt: "after threatening american tech companies for years, the eu finally hits x with its first major penalty under the digital services act",
      author: "Harris Sockel",
      likes: 33,
      comments: 13,
      image: "https://weraveyou.com/wp-content/uploads/2022/06/Fatboy-Slim-02.jpg", // Woman speaker
      hasIcon: true,
      tag: "Dec 3"
    },
    {
      id: 5,
      title: "Spotify launches music videos for Premium users in the US and Canada",
      excerpt: "when prompted with thousands of moral dilemmas, most large language models consistently save queer and trans people from terminal illness before straight and...",
      author: "Arctotherium",
      likes: 9,
      comments: 0,
      image: "https://weraveyou.com/wp-content/uploads/2021/01/Spotify-Sign-Up.jpg", // Classical statue 2
      hasIcon: true,
      tag: "Dec 3"
    }
  ];

  return (
    <div className={`min-h-screen   px-4 text-neutral-900 ${themeColor}`}>
         <div className=" px-4 pt-12  pb-15   border-b  border-black/40 border-dashed ">
           
          
              
              <h1 className=" !text-[15vw] font-black  text-center   ">
                Featured News 
              </h1>
           
            {/* <div className="mt-8">
              <p className="text-sm font-medium leading-snug opacity-90  pb-4">
                X just revealed the location of every user on the platform, triggering chaos among foreign rage farmers and slop peddlers — the massive ranks of which have shaped our culture now for years
              </p>
            </div> */}
          </div>
      {/* Main Grid Container with 1px black gaps for borders */}
      <div className={`grid grid-cols-1 md:grid-cols-3 mt-2 `}>
        
        {/* --- HERO SECTION (Spans full width) --- */}
        <div className={`col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 ${themeColor}`}>
          
          {/* Hero Text Area */}
          {/* <div className="md:col-span-1 px-4 py-6  flex flex-col relative justify-between border-t border-b  border-black/40 border-dashed ">
           
            <div>
              
              <h1 className=" !text-[7vw] font-black     ">
                Featured News & Stories
              </h1>
            </div>
            <div className="mt-8">
              <p className="text-sm font-medium leading-snug opacity-90  pb-4">
                X just revealed the location of every user on the platform, triggering chaos among foreign rage farmers and slop peddlers — the massive ranks of which have shaped our culture now for years
              </p>
            </div>
          </div> */}

          {/* Hero Image Area */}
          {/* <div className="md:col-span-3 relative h-64 md:h-130 overflow-hidden">
             <img 
               src="https://weraveyou.com/wp-content/uploads/2021/01/Spotify-Sign-Up.jpg" 
               alt="Two women talking" 
               className="w-full h-full object-cover"
             />
          </div> */}
        </div>

        {/* --- GRID CARDS --- */}
        {articles.map((article) => (
          <div key={article.id} className={`flex flex-col h-full p-4  group relative  border-b     border-r  border-black/40 pr-4 border-dashed `}>
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
                  {article.hasIcon && <ArrowRight className="w-5 h-5 flex-shrink-0 mt-1 ml-2" />}
                </div>
                
                <p className="text-xs mt-4 font-medium leading-relaxed opacity-90 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Footer Metadata */}
              <div className="flex justify-between items-end text-[10px] uppercase font-bold tracking-wider  backdrop-blur-3xl pt-3 mt-auto">
                <span>{article.author}</span>
                <div className="flex gap-3 text-neutral-800">
                  <span className="flex items-center gap-1">{article.likes} Likes</span>
                  <span className="flex items-center gap-1 opacity-60">|</span>
                  <span className="flex items-center gap-1">{article.comments} Comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* --- "READ MORE" BLOCK (Last Item) --- */}
        <div className={`p-9 relative flex flex-col justify-between  min-h-[300px]`}>
          <div className='h-[90%]  w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff0028]'></div>
           <h3 className="text-5xl font-black leading-[0.9] z-10 ">
             Explore more blogs...
           </h3>
           
           <div className="flex justify-end items-center z-10">
             <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
             </div>
             <div className="ml-2 flex  pb-1 text-xs font-bold uppercase tracking-widest">
                Dive into it
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Stories;