import React from 'react';
import Home from "./pages/Home";
import CourseListPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import { createFileCoverage } from 'istanbul-lib-coverage';

const Routers = [
    {
        path: '/',
        exact: true,
        componentRoute: () => <Home />
    },
    {
        path: '/course-list',
        exact: true,
        componentRoute: () => <CourseListPage />
    },
    {
        path: '/about',
        exact: true,
        componentRoute: () => <AboutPage />
    },
    {
        path: '/contact',
        exact: true,
        componentRoute: () => <ContactPage />
    },
    {
        path: '',
        exact: false,
        componentRoute: () => <NotFoundPage />
    },
];
export default Routers; 
