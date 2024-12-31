import { FileText, Bed, Users, DollarSign, MoreVertical } from 'lucide-react';
import './dashboard.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="header-left">
          <h1 className="welcome-text">Hi, Welcome back!</h1>
          <p className="subtitle">Spice Dashboard</p>
        </div>
        <div className="header-right">
          <div className="ratings-section">
            <span className="label">Customer Ratings</span>
            <div className="ratings">
              {[1, 2, 3, 4].map((star) => (
                <span key={star} className="star">⭐</span>
              ))}
              <span className="rating-count">(9,876)</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="income-section">
            <span className="label">Total Income</span>
            <div className="income-graph">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i} 
                  className="bar"
                  style={{ height: `${Math.random() * 24 + 8}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon purple">
            <FileText size={24} />
          </div>
          <div className="stat-info">
            <h3 className="stat-value">1,245</h3>
            <p className="stat-label">Total Booking</p>
          </div>
          <div className="stat-progress purple-progress"></div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <Bed size={24} />
          </div>
          <div className="stat-info">
            <h3 className="stat-value">287</h3>
            <p className="stat-label">Rooms Available</p>
          </div>
          <div className="stat-progress orange-progress"></div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <Users size={24} />
          </div>
          <div className="stat-info">
            <h3 className="stat-value">1,532</h3>
            <p className="stat-label">New Customers</p>
          </div>
          <div className="stat-progress green-progress"></div>
        </div>

        <div className="stat-card">
          <div className="stat-icon cyan">
            <DollarSign size={24} />
          </div>
          <div className="stat-info">
            <h3 className="stat-value">$22,567</h3>
            <p className="stat-label">Total Revenue</p>
          </div>
          <div className="stat-progress cyan-progress"></div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="content-left">
          <div className="recent-bookings card">
            <div className="card-header">
              <h3>Recent Bookings</h3>
              <button className="more-btn"><MoreVertical size={20} /></button>
            </div>
            <div className="bookings-list">
              {/* Add booking items here */}
            </div>
          </div>

          <div className="popular-rooms card">
            <div className="card-header">
              <h3>Popular Rooms</h3>
              <button className="more-btn"><MoreVertical size={20} /></button>
            </div>
            <div className="rooms-grid">
              {/* Add room cards here */}
            </div>
          </div>
        </div>

        <div className="content-right">
          <div className="upcoming-events card">
            <div className="card-header">
              <h3>Upcoming Events</h3>
              <button className="more-btn"><MoreVertical size={20} /></button>
            </div>
            <div className="events-list">
              {/* Add event items here */}
            </div>
          </div>

          <div className="recent-notifications card">
            <div className="card-header">
              <h3>Recent Notifications</h3>
              <button className="more-btn"><MoreVertical size={20} /></button>
            </div>
            <div className="notifications-list">
              {/* Add notification items here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 