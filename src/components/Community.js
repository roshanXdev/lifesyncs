import React, { useState } from 'react';

function Community() {
  const [activeTab, setActiveTab] = useState('discussions');
  
  const tabs = [
    { id: 'discussions', name: 'Discussions' },
    { id: 'challenges', name: 'Challenges' },
    { id: 'events', name: 'Events' },
    { id: 'mentorship', name: 'Mentorship' }
  ];
  
  const discussionPosts = [
    {
      id: 1,
      author: 'Alex Johnson',
      avatar: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%234F46E5'/%3E%3Ccircle cx='20' cy='15' r='7' fill='%23F8FAFC'/%3E%3Cpath d='M8 34C8 26.268 13.268 21 20 21C26.732 21 32 26.268 32 34V40H8V34Z' fill='%23F8FAFC'/%3E%3C/svg%3E`,
      title: 'How I improved my productivity by 30% using LifeSync',
      content: `I've been using the AI recommendations for the past month and my productivity has skyrocketed. Here's what worked for me...`,
      likes: 24,
      comments: 8,
      time: '2 hours ago',
      verified: true
    },
    {
      id: 2,
      author: 'Maya Patel',
      avatar: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%2310B981'/%3E%3Ccircle cx='20' cy='15' r='7' fill='%23F8FAFC'/%3E%3Cpath d='M8 34C8 26.268 13.268 21 20 21C26.732 21 32 26.268 32 34V40H8V34Z' fill='%23F8FAFC'/%3E%3C/svg%3E`,
      title: 'Financial wellness challenge: 30 days of mindful spending',
      content: `I'm starting a community challenge for mindful spending. Join me as we track our expenses and make conscious decisions...`,
      likes: 42,
      comments: 15,
      time: '5 hours ago',
      verified: true
    },
    {
      id: 3,
      author: 'David Kim',
      avatar: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23F59E0B'/%3E%3Ccircle cx='20' cy='15' r='7' fill='%23F8FAFC'/%3E%3Cpath d='M8 34C8 26.268 13.268 21 20 21C26.732 21 32 26.268 32 34V40H8V34Z' fill='%23F8FAFC'/%3E%3C/svg%3E`,
      title: 'Seeking accountability partners for morning routine',
      content: 'Looking for 2-3 people who want to establish a solid morning routine. We can check in daily and share progress...',
      likes: 18,
      comments: 21,
      time: '1 day ago',
      verified: false
    }
  ];
  
  const activeChallenges = [
    {
      id: 1,
      title: '21-Day Meditation Challenge',
      participants: 156,
      daysLeft: 14,
      tokenReward: 300,
      category: 'Wellness'
    },
    {
      id: 2,
      title: 'Zero-Based Budget Month',
      participants: 89,
      daysLeft: 21,
      tokenReward: 450,
      category: 'Finance'
    },
    {
      id: 3,
      title: 'Digital Declutter Weekend',
      participants: 212,
      daysLeft: 3,
      tokenReward: 150,
      category: 'Productivity'
    }
  ];
  
  const upcomingEvents = [
    {
      id: 1,
      title: 'Mastering Personal Finance Webinar',
      date: 'Sept 15, 2023',
      time: '7:00 PM EST',
      host: 'Financial Wellness Team',
      attendees: 78
    },
    {
      id: 2,
      title: 'Productivity Systems Workshop',
      date: 'Sept 22, 2023',
      time: '1:00 PM EST',
      host: 'David Allen, Productivity Expert',
      attendees: 134
    },
    {
      id: 3,
      title: 'Community Town Hall: Platform Updates',
      date: 'Sept 30, 2023',
      time: '11:00 AM EST',
      host: 'LifeSync Team',
      attendees: 203
    }
  ];
  
  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      avatar: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='30' fill='%234F46E5'/%3E%3Ccircle cx='30' cy='22' r='10' fill='%23F8FAFC'/%3E%3Cpath d='M12 51C12 39.402 19.402 32 30 32C40.598 32 48 39.402 48 51V60H12V51Z' fill='%23F8FAFC'/%3E%3C/svg%3E`,
      specialty: 'Wellness & Mindfulness',
      rating: 4.9,
      sessions: 124,
      price: 200
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      avatar: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='30' fill='%2310B981'/%3E%3Ccircle cx='30' cy='22' r='10' fill='%23F8FAFC'/%3E%3Cpath d='M12 51C12 39.402 19.402 32 30 32C40.598 32 48 39.402 48 51V60H12V51Z' fill='%23F8FAFC'/%3E%3C/svg%3E`,
      specialty: 'Personal Finance',
      rating: 4.8,
      sessions: 87,
      price: 250
    },
    {
      id: 3,
      name: 'Aisha Washington',
      avatar: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='30' fill='%23F59E0B'/%3E%3Ccircle cx='30' cy='22' r='10' fill='%23F8FAFC'/%3E%3Cpath d='M12 51C12 39.402 19.402 32 30 32C40.598 32 48 39.402 48 51V60H12V51Z' fill='%23F8FAFC'/%3E%3C/svg%3E`,
      specialty: 'Productivity Systems',
      rating: 4.7,
      sessions: 156,
      price: 180
    }
  ];

  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Community & Support</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Connect with like-minded individuals, participate in challenges, and learn from experts on your journey.
        </p>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-lg transition duration-300 ${activeTab === tab.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="mt-8">
          {/* Discussions Tab */}
          {activeTab === 'discussions' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Community Discussions</h3>
                <button className="btn-primary">New Post</button>
              </div>
              
              <div className="space-y-6">
                {discussionPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
                    <div className="flex items-center mb-4">
                      <div className="relative group">
                        <img 
                          src={post.avatar} 
                          alt={post.author} 
                          className="h-10 w-10 rounded-full ring-2 ring-transparent group-hover:ring-blue-400 transition-all duration-300 transform group-hover:scale-110" 
                        />
                        {post.verified && (
                          <span className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 shadow-md">
                            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        )}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">{post.author}</h4>
                        <p className="text-sm text-gray-500">{post.time}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <button className="flex items-center mr-6 hover:text-blue-600">
                        <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        {post.likes} Likes
                      </button>
                      <button className="flex items-center hover:text-blue-600">
                        <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {post.comments} Comments
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="btn-secondary">View More Discussions</button>
              </div>
            </div>
          )}
          
          {/* Challenges Tab */}
          {activeTab === 'challenges' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Active Challenges</h3>
                <button className="btn-primary">Create Challenge</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeChallenges.map(challenge => (
                  <div key={challenge.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold">{challenge.title}</h4>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${challenge.category === 'Wellness' ? 'bg-green-100 text-green-800' : challenge.category === 'Finance' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                        {challenge.category}
                      </span>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Participants:</span>
                        <span className="font-medium">{challenge.participants}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Days Left:</span>
                        <span className="font-medium">{challenge.daysLeft}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Token Reward:</span>
                        <span className="font-medium text-blue-600">{challenge.tokenReward} SYNC</span>
                      </div>
                    </div>
                    <button className="w-full btn-primary">Join Challenge</button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="btn-secondary">View All Challenges</button>
              </div>
            </div>
          )}
          
          {/* Events Tab */}
          {activeTab === 'events' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Upcoming Events</h3>
                <button className="btn-primary">Browse Calendar</button>
              </div>
              
              <div className="space-y-6">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 border border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                        <p className="text-gray-600 mb-4">
                          Hosted by {event.host}
                        </p>
                        <div className="flex items-center text-gray-500 mb-4 md:mb-0">
                          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date} at {event.time}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-6">
                          <span className="block text-sm text-gray-500">Attendees</span>
                          <span className="block text-lg font-bold">{event.attendees}</span>
                        </div>
                        <button className="btn-primary">RSVP</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="btn-secondary">View All Events</button>
              </div>
            </div>
          )}
          
          {/* Mentorship Tab */}
          {activeTab === 'mentorship' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Available Mentors</h3>
                <button className="btn-primary">Become a Mentor</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentors.map(mentor => (
                  <div key={mentor.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="relative group">
                        <img 
                          src={mentor.avatar} 
                          alt={mentor.name} 
                          className="h-16 w-16 rounded-full ring-2 ring-transparent group-hover:ring-blue-400 transition-all duration-300 transform group-hover:scale-105 shadow-sm" 
                        />
                        <span className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 shadow-md">
                          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-bold">{mentor.name}</h4>
                        <p className="text-gray-600">{mentor.specialty}</p>
                      </div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-2">{mentor.rating} ({mentor.sessions} sessions)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Session Price:</span>
                        <span className="font-medium text-blue-600">{mentor.price} SYNC</span>
                      </div>
                    </div>
                    <button className="w-full btn-primary">Book Session</button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="btn-secondary">View All Mentors</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Community;