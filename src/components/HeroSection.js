import React from 'react';

function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-36 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Sync Your Life with <span className="text-blue-600">AI-Powered</span> Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              LifeSync integrates your personal, financial, and wellness data to provide AI-driven recommendations, 
              tokenized rewards, and a supportive community.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary text-lg px-8 py-3">
                Get Started
              </button>
              <button className="btn-secondary text-lg px-8 py-3">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto transition-all duration-300 ease-in-out hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:translate-y-[-8px] hover:bg-blue-50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Daily Insight</h3>
                    <p className="text-sm text-gray-500">Personalized for You</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">New</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg mb-6">
                <p className="text-gray-700">
                  "Based on your sleep patterns and upcoming calendar, try to schedule your most important work between 9-11 AM today for optimal focus."
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Wellness Score</span>
                  <span className="text-sm font-medium text-gray-900">78/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Financial Health</span>
                  <span className="text-sm font-medium text-gray-900">65/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;