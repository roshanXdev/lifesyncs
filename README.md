# LifeSync - Integrated Life Management Platform

LifeSync is a comprehensive web application that helps users manage various aspects of their lives through AI-powered recommendations, tokenized rewards, and community features.

## Features

- **Personalized AI Recommendations**: Get tailored insights for productivity, wellness, and financial management
- **Tokenized Rewards System**: Earn SYNC tokens for achieving goals and engaging with the platform
- **Marketplace**: Exchange tokens for real-world benefits and digital assets
- **Community Integration**: Connect with like-minded individuals and share experiences

## Tech Stack

- **Frontend**: React with Tailwind CSS
- **Backend**: Node.js with Express
- **Database**: MongoDB/PostgreSQL (conceptual in this implementation)
- **Web3**: Solidity Smart Contracts (ERC20 token) with ethers.js integration

## Setup Instructions

### Prerequisites

- Node.js (v14+)
- npm or yarn
- MetaMask or another Web3 wallet (for blockchain features)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
   This will start both the React frontend and Node.js backend concurrently.

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `/src` - React frontend code
  - `/components` - React components
  - `/services` - API service layer
- `/backend` - Node.js backend code
  - `/routes` - API routes
  - `/controllers` - Route controllers
  - `/middleware` - Express middleware
- `/contracts` - Solidity smart contracts

## License

MIT