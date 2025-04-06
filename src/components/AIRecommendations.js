import React, { useState, useEffect } from 'react';
import api from '../services/api';

function AIRecommendations() {
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true);
        // In a real app, this would fetch from the backend API
        // For demo purposes, we'll simulate a response after a delay
        setTimeout(() => {
          const mockData = {
            dailyInsight: { 
              id: 'd1', 
              text: 'Focus on deep work task X this morning.'
            },
            featureHighlights: [
              { id: 'f1', type: 'wellness', title: 'Try a 10-min meditation', details: 'Research shows meditation can improve focus by 30%' },
              { id: 'f2', type: 'finance', title: 'Review budget category Y', details: 'You\'ve exceeded your dining budget by 15%' },
              { id: 'f3', type: 'productivity', title: 'Block calendar for focused work', details: 'Your most productive hours are between 9-11 AM' },
            ],
            progressMetrics: { health: 82, finance: 68, productivity: 75 }
          };
          setRecommendations(mockData);
          setError(null);
          setLoading(false);
        }, 1000);

        // In production, this would be:
        // const response = await api.get('/ai/recommendations');
        // setRecommendations(response.data);
      } catch (err) {
        console.error("Error fetching recommendations:", err);
        setError("Could not load recommendations.");
        setRecommendations(null);
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <section id="ai-recommendations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Personalized AI Recommendations</h2>
        {loading && <p className="text-center">Loading your insights...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {recommendations && (
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left side: Description */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <p className="text-xl text-gray-600 mb-8">
                Our AI analyzes your data to provide personalized recommendations that help you optimize your daily life.
              </p>
              <div className="space-y-6">
                {recommendations.featureHighlights?.map(feature => (
                  <div key={feature.id} className="flex items-start"> 
                    <div className={`mt-1 flex-shrink-0 h-6 w-6 rounded-full ${feature.type === 'wellness' ? 'bg-green-100' : feature.type === 'finance' ? 'bg-blue-100' : 'bg-purple-100'} flex items-center justify-center`}>
                      <svg className={`h-4 w-4 ${feature.type === 'wellness' ? 'text-green-600' : feature.type === 'finance' ? 'text-blue-600' : 'text-purple-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{feature.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right side: Dashboard Mockup */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-blue-50 transform hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Today's Insights</h3>
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Updated</span>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg mb-6 border-l-4 border-blue-500">
                  <p className="text-gray-700">
                    <span className="font-medium">Daily Insight:</span> {recommendations.dailyInsight?.text || 'None today.'}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md transform hover:scale-105 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">Health & Wellness</span>
                      <span className="text-sm font-medium text-gray-900">{recommendations.progressMetrics?.health}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1 overflow-hidden">
                      <div className="bg-green-600 h-2.5 rounded-full transition-all duration-500 hover:bg-green-500" style={{ width: `${recommendations.progressMetrics?.health}%` }}></div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md transform hover:scale-105 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">Financial Health</span>
                      <span className="text-sm font-medium text-gray-900">{recommendations.progressMetrics?.finance}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1 overflow-hidden">
                      <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 hover:bg-blue-500" style={{ width: `${recommendations.progressMetrics?.finance}%` }}></div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md transform hover:scale-105 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">Productivity</span>
                      <span className="text-sm font-medium text-gray-900">{recommendations.progressMetrics?.productivity}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1 overflow-hidden">
                      <div className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 hover:bg-purple-500" style={{ width: `${recommendations.progressMetrics?.productivity}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!loading && !recommendations && !error && <p className="text-center">No recommendations available currently.</p>}
      </div>
    </section>
  );
}

export default AIRecommendations;