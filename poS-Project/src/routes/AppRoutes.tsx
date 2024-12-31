import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';

// Services
import ServiceCatalog from '../pages/services/ServiceCatalog';
import ServiceRequests from '../pages/services/ServiceRequests';
import Analytics from '../pages/services/Analytics';

// Products
import AllProducts from '../pages/products/AllProducts';
import Categories from '../pages/products/Categories';
import Inventory from '../pages/products/Inventory';

// Subscriptions
import SubscriptionPlans from '../pages/subscriptions/SubscriptionPlans';
import Billing from '../pages/subscriptions/Billing';

// Clients
import AllClients from '../pages/clients/AllClients';
import Segments from '../pages/clients/Segments';

// Reports
import ReportsOverview from '../pages/reports/Overview';
import SalesReports from '../pages/reports/SalesReports';
import Performance from '../pages/reports/Performance';

// Support
import Tickets from '../pages/support/Tickets';
import KnowledgeBase from '../pages/support/KnowledgeBase';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      
      {/* Services Routes */}
      <Route path="/services/catalog" element={<ServiceCatalog />} />
      <Route path="/services/requests" element={<ServiceRequests />} />
      <Route path="/services/analytics" element={<Analytics />} />
      
      {/* Products Routes */}
      <Route path="/products/all" element={<AllProducts />} />
      <Route path="/products/categories" element={<Categories />} />
      <Route path="/products/inventory" element={<Inventory />} />
      
      {/* Subscriptions Routes */}
      <Route path="/subscriptions/plans" element={<SubscriptionPlans />} />
      <Route path="/subscriptions/billing" element={<Billing />} />
      
      {/* Clients Routes */}
      <Route path="/clients/all" element={<AllClients />} />
      <Route path="/clients/segments" element={<Segments />} />
      
      {/* Reports Routes */}
      <Route path="/reports/overview" element={<ReportsOverview />} />
      <Route path="/reports/sales" element={<SalesReports />} />
      <Route path="/reports/performance" element={<Performance />} />
      
      {/* Support Routes */}
      <Route path="/support/tickets" element={<Tickets />} />
      <Route path="/support/kb" element={<KnowledgeBase />} />
    </Routes>
  );
};

export default AppRoutes; 