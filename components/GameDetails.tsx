import React, { useState } from 'react';
import { Game } from '../types';

interface GameDetailsProps {
  game: Game;
  onBack: () => void;
}

const GameDetails: React.FC<GameDetailsProps> = ({ game, onBack }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'activity'>('about');

  return (
    <div className="min-h-screen bg-cream pt-24 pb-12 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        {/* Navigation / Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center text-coffee-600 hover:text-coffee-950 transition-colors mb-8 group"
        >
          <i className="fas fa-arrow-left mr-2 transform group-hover:-translate-x-1 transition-transform"></i>
          Back to Portfolio
        </button>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-white h-64 md:h-96">
          <img 
            src={game.imageUrl} 
            alt={game.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 to-transparent flex items-end p-8">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {game.tags.map(tag => (
                  <span key={tag} className="bg-amber-500 text-coffee-950 text-xs font-bold px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white font-hand">{game.title}</h1>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-coffee-200 mb-8">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-8 py-4 font-bold text-lg transition-all border-b-2 ${
              activeTab === 'about' 
              ? 'border-coffee-800 text-coffee-900' 
              : 'border-transparent text-coffee-400 hover:text-coffee-600'
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`px-8 py-4 font-bold text-lg transition-all border-b-2 ${
              activeTab === 'activity' 
              ? 'border-coffee-800 text-coffee-900' 
              : 'border-transparent text-coffee-400 hover:text-coffee-600'
            }`}
          >
            Activity
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-coffee-100 min-h-[400px]">
          {activeTab === 'about' ? (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-hand font-bold text-coffee-900 mb-4">The Adventure Awaits</h2>
              <p className="text-coffee-700 text-lg leading-relaxed mb-8 whitespace-pre-wrap">
                {game.fullDescription || game.description}
              </p>
             {game.keyFeatures && game.keyFeatures.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-coffee-900 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {game.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="text-coffee-700">
                        <span className="font-semibold text-coffee-900">
                          <span className="text-amber-500 mr-2">-</span>
                          {feature.title}
                        </span>
                        {" - "}
                        <span>{feature.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}


              {/* Gameplay Images */}
              {game.images && game.images.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-coffee-900 mb-4">
                    Gameplay
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {game.images.map((src, idx) => (
                      <a
                        key={idx}
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl overflow-hidden shadow-md border border-coffee-100 hover:shadow-lg transition-all"
                      >
                        <img
                          src={src}
                          alt={`Gameplay ${idx + 1}`}
                          className="w-full max-h-72 object-contain"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-6 p-6 bg-coffee-50 rounded-2xl border border-coffee-100">
                <div>
                  <h4 className="text-xs font-bold text-coffee-400 uppercase tracking-widest mb-1">Genre</h4>
                  <p className="font-medium text-coffee-800">{game.genre}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-coffee-400 uppercase tracking-widest mb-1">Release Date</h4>
                  <p className="font-medium text-coffee-800">{game.releaseDate}</p>
                </div>
                {game.playUrl && (
                  <div className="md:col-span-2 mt-4">
                    <a 
                      href={game.playUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-coffee-800 text-white px-8 py-3 rounded-full font-bold hover:bg-coffee-950 transition-colors shadow-lg"
                    >
                      <i className="fas fa-play mr-2"></i> Play Game
                    </a>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="animate-fade-in-up space-y-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-hand font-bold text-coffee-900">Developer Logs</h2>
                <div className="h-px flex-1 bg-coffee-100 mx-6"></div>
                <i className="fas fa-mug-hot text-coffee-200 text-xl"></i>
              </div>

              {!game.updates || game.updates.length === 0 ? (
                <div className="text-center py-12 text-coffee-400 italic">
                  No activity logs found for this game yet. Brewing soon!
                </div>
              ) : (
                <div className="space-y-12 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-coffee-100">
                  {game.updates.map((update, idx) => (
                    <div key={idx} className="relative pl-10">
                      {/* Timeline Dot */}
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-coffee-100 border-4 border-white shadow-sm flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-coffee-600"></div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <span className="text-xs font-bold bg-coffee-800 text-white px-2 py-1 rounded mb-2 md:mb-0 w-fit">
                          {update.version}
                        </span>
                        <span className="text-sm font-medium text-coffee-400">
                          <i className="far fa-calendar-alt mr-1"></i> {update.date}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-coffee-900 mb-3">{update.title}</h3>
                      {/*Changes subsection */}
                      {update.changes && update.changes.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-xs font-bold text-coffee-500 uppercase tracking-widest mb-3 flex items-center">
                            <i className="fas fa-star mr-2 text-coffee-400"></i> New Features & Changes
                          </h4>
                          <ul className="space-y-2 bg-red-50/50 p-4 rounded-xl border border-red-100/50">
                            {update.changes.map((change, cIdx) => (
                              <li key={cIdx} className="text-coffee-700 text-sm md:text-base">
                                {typeof change === "string" ? (
                                  <div className="flex items-start">
                                    <span className="text-amber-500 mr-2">-</span>
                                    <span>{change}</span>
                                  </div>
                                ) : (
                                  <div>
                                    <div className="flex items-start">
                                      <span className="text-amber-500 mr-2">-</span>
                                      <span>{change.text}</span>
                                    </div>

                                    {change.sub && (
                                      <ul className="ml-6 mt-1 space-y-1">
                                        {change.sub.map((subItem, sIdx) => (
                                          <li key={sIdx} className="flex items-start">
                                            <span className="text-amber-500 mr-2">-</span>
                                            <span>{subItem}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Bug fixes */}
                      {update.bugFixes && update.bugFixes.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-xs font-bold text-coffee-500 uppercase tracking-widest mb-3 flex items-center">
                            <i className="fas fa-bug-slash mr-2 text-coffee-400"></i> Bug Fixes
                          </h4>
                          <ul className="space-y-2 bg-red-50/50 p-4 rounded-xl border border-red-100/50">
                            {update.bugFixes.map((fix, fIdx) => (
                              <li key={fIdx} className="text-coffee-700 flex items-start text-sm md:text-base">
                                {/* <i className="fas fa-check text-green-500 mr-2 mt-1 text-xs"></i> */}
                                <span className="text-amber-500 mr-2">-</span>
                                <span>{fix}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Screenshots */}
                      {update.screenshots && update.screenshots.length > 0 && (
                        <div className="mt-6">
                          <h4 className="text-xs font-bold text-coffee-500 uppercase tracking-widest mb-3 flex items-center">
                            <i className="fas fa-camera mr-2 text-coffee-400"></i> Screenshots
                          </h4>
                          <div className="space-y-2 bg-red-50/50 p-4 rounded-xl border border-red-100/50 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {update.screenshots.map((src, sIdx) => (
                              <div key={sIdx} className="justify-self-center rounded-xl overflow-hidden shadow-sm border border-coffee-100 group cursor-pointer hover:shadow-md transition-all flex justify-center items-center">
                                <a
                                  href={src}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block"
                                >
                                <img 
                                  src={src} 
                                  alt={`Update screenshot ${sIdx + 1}`} 
                                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                  referrerPolicy="no-referrer"
                                />
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
