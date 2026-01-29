import React from 'react';
import springCreekImage from '../../assets/SpringCreekManor.jpeg';
import sasekaImage from '../../assets/SasekaSafariLodge.jpeg';
import laytonImage from '../../assets/LaytonLakesTrophyCabin.jpeg';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 p-6 md:p-12 font-sans tracking-tight">
      <div className="max-w-5xl mx-auto">
        {/* Main Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Hunting Lodge
          </h1>

        </header>

        {/* Intro Section */}
        <div className="space-y-6 text-stone-300 font-sans text-[16px] leading-relaxed mb-12">
            <p>
                <strong className="text-stone-100">Hunting Lodges</strong> were introduced with the DLC <em className="italic">Trophy Lodge Spring Creek Manor</em> in <a href="#" className="text-green-400 hover:underline">Patch 1.33</a>.
            </p>
            <p>
                Each hunting lodge serves the purpose of providing a place for trophy display. To prepare an animal for display in a trophy lodge, the player has to taxidermize the animal in the <a href="#" className="text-green-400 hover:underline">harvest screen</a>. This costs some <a href="#" className="text-green-400 hover:underline">cash</a>, costing more the larger the animal is. After this, the taxidermized animal can be selected on an empty and appropriate display in the respective hunting lodge. Thereby, each animal can have different poses, depending on the type of display (wall mount, ground display) and animal type. A placed trophy can also be put back to storage at any given time.
            </p>
            <p>
                Trophy lodges are multiplayer compatible.
            </p>
            <p>
                Trophies can be mounted on various <a href="#" className="text-green-400 hover:underline">Trophy Plaques and Platforms</a>.
            </p>
        </div>

        {/* Lodges Table Section */}
        <div className="mb-12">
            <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h2 className="text-2xl md:text-[28px] font-bold text-stone-100 tracking-normal">Lodges</h2>
                <a href="#" className="text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </a>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-sans text-sm md:text-[15px]">
                    <thead>
                        <tr className="border-b-2 border-stone-700">
                            <th className="py-3 pr-4 font-bold text-stone-100 w-1/5">Lodge</th>
                            <th className="py-3 px-4 font-bold text-stone-100 w-3/5">Description</th>
                            <th className="py-3 pl-4 font-bold text-stone-100 w-1/5 text-center">Trophy Displays</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-700">
                        <tr>
                            <td className="py-4 pr-4 align-top text-green-400 font-medium leading-tight">
                                <a href="#" className="hover:underline">Spring Creek Manor</a>
                            </td>
                            <td className="py-4 px-4 align-top italic text-stone-300 leading-relaxed">
                                This spacious British mansion from the 1800s is the perfect location to showcase your favorite trophies. With its exquisite wooden interior, the Spring Creek Manor is the Trophy Lodge of your dreams. Rustic, yet classically furnished, and sporting two floors for you to decorate. So come on in, feel the Persian rugs under your feet and drink in the quiet, nostalgic feel of this lovely country home.
                            </td>
                            <td className="py-4 pl-4 align-top text-center text-stone-300 font-bold text-lg">
                                <div className="group cursor-pointer">
                                  <img 
                                    src={springCreekImage} 
                                    alt="Spring Creek Manor" 
                                    className="w-full h-auto rounded border border-stone-600 shadow-md group-hover:opacity-90 transition-opacity"
                                  />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4 pr-4 align-top text-green-400 font-medium leading-tight">
                                <a href="#" className="hover:underline">Saseka Safari Lodge</a>
                            </td>
                            <td className="py-4 px-4 align-top italic text-stone-300 leading-relaxed">
                                This modern and african theme lodge is the perfect location to showcase your trophies in a huge lodge. Especially build for big games animals showcase.
                            </td>
                            <td className="py-4 pl-4 align-top text-center text-stone-300 font-bold text-lg">
                                <div className="group cursor-pointer">
                                  <img 
                                    src={sasekaImage} 
                                    alt="Saseka Safari Lodge" 
                                    className="w-full h-auto rounded border border-stone-600 shadow-md group-hover:opacity-90 transition-opacity"
                                  />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4 pr-4 align-top text-green-400 font-medium leading-tight">
                                <a href="#" className="hover:underline">Layton Lakes Trophy Cabin</a>
                            </td>
                            <td className="py-4 px-4 align-top italic text-stone-300 leading-relaxed">
                                A traditional lodge located in the beautiful Layton Lakes reserve, it has just enough space to display every animal trophy from your adventures in Hirschfelden or Layton Lakes.
                            </td>
                            <td className="py-4 pl-4 align-top text-center text-stone-300 font-bold text-lg">
                                <div className="group cursor-pointer">
                                  <img 
                                    src={laytonImage} 
                                    alt="Layton Lakes Trophy Cabin" 
                                    className="w-full h-auto rounded border border-stone-600 shadow-md group-hover:opacity-90 transition-opacity"
                                  />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Multi-Mounts Section */}
        <div className="mb-12">
            <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h2 className="text-2xl md:text-[28px] font-bold text-stone-100 tracking-normal">Multi-Mounts</h2>
                <a href="#" className="text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </a>
            </div>
            
            <div className="space-y-6 text-stone-300 font-sans text-[16px] leading-relaxed">
                <p className="italic">
                    "Set up the perfect hunting moment using Matmat's World Class Taxidermy multi trophy mounts. Placed on any platform or plaque, you will be able to position multiple animals in several realistic poses, visualizing a climactic moment involving your favourite trophies. Recreate incredible moments from the wild or tell an unseen story as you create the ultimate centerpiece for any room in Saseka Safari. This style of mounts will be made available in all trophy lodges."
                </p>
                <p>
                    *Note* : There is no massive mounts in Spring Creek Manor. Therefore, if you only possess this lodge, you won't be able to build the massive multi-mounts. However, you can build all the other ones.
                </p>
                <p>
                    To know more about Multi-Mounts and all you need to know about each specific one, click on the heading "<a href="#" className="text-green-400 hover:underline">Multi-Mounts</a>"
                </p>
            </div>
        </div>

        {/* Teasers Section */}
        <div className="mb-12">
             <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h2 className="text-2xl md:text-[28px] font-bold text-stone-100 tracking-normal">Teasers</h2>
                <a href="#" className="text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </a>
            </div>

            {/* Video Thumbnail Mockup */}
            <div className="w-full max-w-[300px] group cursor-pointer">
                <a href="https://www.youtube.com/watch?v=r1Qp2ooTJQM&t=1s" target="_blank" rel="noopener noreferrer">
                    <div className="relative aspect-video bg-black overflow-hidden border border-gray-700 shadow-xl">
                        <img 
                            src="https://img.youtube.com/vi/r1Qp2ooTJQM/maxresdefault.jpg" 
                            alt="Spring Creek Manor Trailer" 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center border-2 border-white/80">
                                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                        {/* Fake Title Overlay inside thumbnail */}
                        <div className="absolute top-2 left-2 flex items-center space-x-2">
                             <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
                                <span className="text-white font-bold text-xs">TL</span>
                             </div>
                             <span className="text-white text-xs font-bold shadow-black drop-shadow-md">TROPHY LODGE<br/>SPRING CREEK MANOR</span>
                        </div>
                    </div>
                </a>
                <p className="mt-2 text-sm font-bold text-stone-300 leading-tight">
                    TheHunter- Call of the Wild - Trophy Lodge Spring Creek Manor Trailer
                </p>
            </div>
        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}