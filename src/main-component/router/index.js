import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage';
import ServicePage from '../ServicePage/ServicePage';
import ServicePageS2 from '../ServicePageS2/ServicePageS2';
import ServicePageS3 from '../ServicePageS3/ServicePageS3';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectPageS2 from '../ProjectPageS2/ProjectPageS2';
import ProjectSinglePage from '../ProjectSinglePage/ProjectSinglePage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import ContactPage from '../ContactPage/ContactPage';
import TestimonialPage from '../TestimonialPage/TestimonialPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import ComingSoonPage from '../ComingSoonPage/ComingSoonPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          {/* All home variants disabled - using default home only */}
          {/* <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} />
          <Route path="home-4" element={<HomePage4 />} />
          <Route path="home-5" element={<HomePage5 />} /> */}
          <Route path="about" element={<AboutPage />} />
          <Route path="solutions" element={<ServicePage />} />
          <Route path="solutions-grid" element={<ServicePageS2 />} />
          <Route path="solution-highlights" element={<ServicePageS3 />} />
          <Route path="solution/:slug" element={<ServiceSinglePage />} />
          <Route path="deployments" element={<ProjectPage />} />
          <Route path="deployments-grid" element={<ProjectPageS2 />} />
          <Route path="deployment/:slug" element={<ProjectSinglePage />} />
          <Route path="team-member/:slug" element={<TeamSinglePage />} />
          <Route path="testimonials" element={<TestimonialPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path='product-single/:slug' element={<ProductSinglePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='order_received' element={<OrderRecived />} />
          <Route path='articles' element={<BlogPage />} />
          <Route path='articles-sidebar' element={<BlogPageLeft />} />
          <Route path='articles-full' element={<BlogPageFullwidth />} />
          <Route path='article/:slug' element={<BlogDetails />} />
          <Route path='article-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='article-full/:slug' element={<BlogDetailsFull />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='coming-soon' element={<ComingSoonPage />} />
          <Route path='404' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
