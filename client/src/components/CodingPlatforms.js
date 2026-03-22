import React from 'react';
import '../styles/CodingPlatforms.css';

const CodingPlatforms = () => {
  const platforms = [
    {
      id: 1,
      name: 'LeetCode',
      rating: '1102',
      badge: 'Active Competitor',
      problems: '100+',
      icon: 'fa-code',
      profileUrl: 'https://leetcode.com/u/UnnatSingh/',
      color: '#FFA116',
      bgColor: '#FFA116'
    },
    {
      id: 2,
      name: 'HackerRank',
      rating: '5 Stars',
      badge: 'Problem Solver',
      problems: '100+',
      icon: 'fa-star',
      profileUrl: 'https://www.hackerrank.com/profile/unnatsingh',
      color: '#00EA64',
      bgColor: '#1BA94C'
    },
    {
      id: 3,
      name: 'GeeksforGeeks',
      rating: 'Active',
      badge: 'Coding Enthusiast',
      problems: '100+',
      icon: 'fa-laptop-code',
      profileUrl: 'https://www.geeksforgeeks.org/profile/unnatsingh',
      color: '#2F8D46',
      bgColor: '#308D46'
    }
  ];

  return (
    <section className="coding-platforms" id="coding-platforms">
      <p>COMPETITIVE PROGRAMMING</p>
      <div className="title">
        <h1>Coding Platforms</h1>
        <p>My practice and achievements on major coding platforms</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="platforms-container">
        {platforms.map((platform) => (
          <div 
            className="platform-card" 
            key={platform.id}
            style={{ 
              '--platform-color': platform.color,
              '--platform-bg': platform.bgColor 
            }}
          >
            <div className="platform-header">
              <div className="platform-icon">
                <i className={`fa-solid ${platform.icon}`}></i>
              </div>
              <div className="platform-info">
                <h3>{platform.name}</h3>
                <p className="rating"><strong>Rating:</strong> {platform.rating}</p>
              </div>
            </div>
            <div className="platform-details">
              <div className="detail-item">
                <span className="label">Badge:</span>
                <span className="value">{platform.badge}</span>
              </div>
              <div className="detail-item">
                <span className="label">Problems Solved:</span>
                <span className="value">{platform.problems}</span>
              </div>
            </div>
            <a href={platform.profileUrl} className="platform-link" target="_blank" rel="noopener noreferrer">
              View Profile <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingPlatforms;
