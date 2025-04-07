import React, { useState } from 'react';

function Marketplace() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'digital', name: 'Digital Assets' },
    { id: 'physical', name: 'Physical Rewards' },
    { id: 'services', name: 'Premium Services' },
    { id: 'exclusive', name: 'Exclusive Access' }
  ];
  
  const marketplaceItems = [
    {
      id: 1,
      title: 'Premium Dashboard Access',
      description: 'Unlock advanced analytics and personalized insights with our premium dashboard.',
      price: 500,
      category: 'digital',
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='none'%3E%3Crect width='300' height='200' fill='%234F46E5'/%3E%3Cpath d='M50 50H250V150H50V50Z' fill='%23F8FAFC'/%3E%3Cpath d='M70 70H130V90H70V70Z' fill='%234F46E5' fill-opacity='0.2'/%3E%3Cpath d='M70 100H230V110H70V100Z' fill='%234F46E5' fill-opacity='0.2'/%3E%3Cpath d='M70 120H230V130H70V120Z' fill='%234F46E5' fill-opacity='0.2'/%3E%3Cpath d='M150 70H230V90H150V70Z' fill='%234F46E5' fill-opacity='0.2'/%3E%3Ccircle cx='220' cy='70' r='15' fill='%234F46E5'/%3E%3C/svg%3E`
    },
    {
      id: 2,
      title: 'Wellness Consultation',
      description: 'One-hour consultation with a certified wellness expert to optimize your health routine.',
      price: 750,
      category: 'services',
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='none'%3E%3Crect width='300' height='200' fill='%2310B981'/%3E%3Ccircle cx='150' cy='80' r='40' fill='%23F8FAFC'/%3E%3Cpath d='M110 140C110 118.954 127.909 100 150 100C172.091 100 190 118.954 190 140V160H110V140Z' fill='%23F8FAFC'/%3E%3Cpath d='M130 70H170M150 50V90' stroke='%2310B981' stroke-width='8' stroke-linecap='round'/%3E%3C/svg%3E`
    },
    {
      id: 3,
      title: 'Financial Planning Session',
      description: 'Expert financial advice tailored to your goals and current financial situation.',
      price: 1000,
      category: 'services',
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='none'%3E%3Crect width='300' height='200' fill='%233B82F6'/%3E%3Ccircle cx='80' cy='100' r='30' fill='%23F8FAFC'/%3E%3Cpath d='M75 100H85M80 95V105' stroke='%233B82F6' stroke-width='4' stroke-linecap='round'/%3E%3Cpath d='M130 60L130 140' stroke='%23F8FAFC' stroke-width='4' stroke-dasharray='8 8'/%3E%3Cpath d='M170 120L170 140' stroke='%23F8FAFC' stroke-width='12'/%3E%3Cpath d='M200 100L200 140' stroke='%23F8FAFC' stroke-width='12'/%3E%3Cpath d='M230 80L230 140' stroke='%23F8FAFC' stroke-width='12'/%3E%3Cpath d='M130 140L230 140' stroke='%23F8FAFC' stroke-width='4'/%3E%3C/svg%3E`
    },
    {
      id: 4,
      title: 'Limited Edition NFT',
      description: 'Exclusive LifeSync NFT artwork that grants special privileges within the platform.',
      price: 2500,
      category: 'digital',
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='none'%3E%3Crect width='300' height='200' fill='%238B5CF6'/%3E%3Cpath d='M150 50L200 100L150 150L100 100L150 50Z' fill='%23F8FAFC'/%3E%3Cpath d='M150 70L180 100L150 130L120 100L150 70Z' fill='%238B5CF6'/%3E%3Ccircle cx='150' cy='100' r='10' fill='%23F8FAFC'/%3E%3Cpath d='M70 130H90L100 150H60L70 130Z' fill='%23F8FAFC'/%3E%3Cpath d='M210 130H230L240 150H200L210 130Z' fill='%23F8FAFC'/%3E%3C/svg%3E`
    },
    {
      id: 5,
      title: 'Eco-Friendly Water Bottle',
      description: 'Sustainable, insulated water bottle with LifeSync branding and smart hydration tracking.',
      price: 350,
      category: 'physical',
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='none'%3E%3Crect width='300' height='200' fill='%23EC4899'/%3E%3Cpath d='M130 40H170V50C170 55.523 165.523 60 160 60H140C134.477 60 130 55.523 130 50V40Z' fill='%23F8FAFC'/%3E%3Cpath d='M135 60H165V160C165 165.523 160.523 170 155 170H145C139.477 170 135 165.523 135 160V60Z' fill='%23F8FAFC'/%3E%3Cpath d='M135 80H165' stroke='%23EC4899' stroke-width='2'/%3E%3Cpath d='M135 100H165' stroke='%23EC4899' stroke-width='2'/%3E%3Cpath d='M135 120H165' stroke='%23EC4899' stroke-width='2'/%3E%3Cpath d='M135 140H165' stroke='%23EC4899' stroke-width='2'/%3E%3C/svg%3E`
    },
    {
      id: 6,
      title: 'Exclusive Webinar Access',
      description: 'Access to monthly webinars featuring industry experts on productivity, wellness, and finance.',
      price: 200,
      category: 'exclusive',
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200' fill='none'%3E%3Crect width='300' height='200' fill='%23F59E0B'/%3E%3Crect x='70' y='60' width='160' height='100' rx='10' fill='%23F8FAFC'/%3E%3Cpath d='M130 90L170 110L130 130V90Z' fill='%23F59E0B'/%3E%3Ccircle cx='100' cy='170' r='10' fill='%23F8FAFC'/%3E%3Ccircle cx='150' cy='170' r='10' fill='%23F8FAFC'/%3E%3Ccircle cx='200' cy='170' r='10' fill='%23F8FAFC'/%3E%3C/svg%3E`
    },
  ];
  
  const filteredItems = activeCategory === 'all' 
    ? marketplaceItems 
    : marketplaceItems.filter(item => item.category === activeCategory);
  
  const purchaseItem = (item) => {
    if (item.id === 1) {
      window.location.href = '/premium-dashboard.html';
    } else {
      // This would be replaced with actual purchase logic for other items
      console.log(`Purchasing ${item.title}...`);
      alert(`This would initiate the purchase of ${item.title} for ${item.price} SYNC tokens using blockchain transactions.`);
    }
  };

  return (
    <section id="marketplace" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">SYNC Token Marketplace</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Exchange your earned SYNC tokens for exclusive benefits, services, and products.
        </p>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 mx-2 mb-2 rounded-full transition duration-300 ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Marketplace Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-gray-200">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">{item.price} SYNC</span>
                  <button 
                    onClick={() => purchaseItem(item)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                  >
                    {item.id === 1 ? 'Access Dashboard' : 'Purchase'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 my-12">No items found in this category.</p>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Don't see what you're looking for?</p>
          <button className="btn-secondary">
            Suggest New Marketplace Items
          </button>
        </div>
      </div>
    </section>
  );
}

export default Marketplace;