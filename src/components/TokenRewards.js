import React, { useState } from 'react';

function TokenRewards() {
  const [syncBalance, setSyncBalance] = useState(250); // Mock balance for demo
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = () => {
    // This would be replaced with actual Web3 wallet connection logic
    console.log('Connecting wallet...');
    setIsConnected(true);
  };

  const stakeTokens = () => {
    // This would be replaced with actual staking logic
    console.log('Staking tokens...');
    alert('Staking functionality would be implemented with a real blockchain connection');
  };

  return (
    <section id="tokenized-rewards" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Tokenized Rewards System</h2>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Earn SYNC tokens for achieving goals and engaging with the platform. Use them for premium features or exchange them in our marketplace.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="bg-gray-800 rounded-xl p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-6">Your SYNC Token Balance</h3>
              
              {isConnected ? (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-gray-300">Available Balance:</span>
                    <span className="text-2xl font-bold text-blue-400">{syncBalance} SYNC</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Staked Tokens</span>
                        <span className="text-sm text-gray-300">100 SYNC</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Rewards This Month</span>
                        <span className="text-sm text-gray-300">75 SYNC</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex space-x-4">
                    <button 
                      onClick={stakeTokens}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex-1"
                    >
                      Stake Tokens
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex-1">
                      View History
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400 mb-6">Connect your wallet to view your SYNC token balance and rewards.</p>
                  <button 
                    onClick={connectWallet}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Connect Wallet
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">How to Earn SYNC Tokens</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-900 flex items-center justify-center">
                  <span className="text-blue-300 text-xs font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-medium text-blue-300">Complete Daily Goals</h4>
                  <p className="mt-2 text-gray-400">Earn tokens by achieving your personalized daily goals and tasks recommended by our AI.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-900 flex items-center justify-center">
                  <span className="text-blue-300 text-xs font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-medium text-blue-300">Engage with Community</h4>
                  <p className="mt-2 text-gray-400">Share insights, participate in challenges, and help others to earn additional rewards.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-900 flex items-center justify-center">
                  <span className="text-blue-300 text-xs font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-medium text-blue-300">Provide Data Insights</h4>
                  <p className="mt-2 text-gray-400">Opt-in to share anonymized data to improve our AI recommendations and earn bonus tokens.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-900 flex items-center justify-center">
                  <span className="text-blue-300 text-xs font-bold">4</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-medium text-blue-300">Stake for Governance</h4>
                  <p className="mt-2 text-gray-400">Stake your tokens to participate in platform governance and earn staking rewards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TokenRewards;