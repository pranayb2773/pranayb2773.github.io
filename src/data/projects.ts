export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  icon: string;
  githubUrl?: string;
  liveUrl?: string;
  features?: ProjectFeature[];
  apiEndpoints?: ApiEndpoint[];
  usage?: UsageSection[];
  techDetails?: TechDetail[];
}

export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ApiEndpoint {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description: string;
}

export interface UsageSection {
  title: string;
  code: string;
  language: string;
}

export interface TechDetail {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: "job-tracker",
    title: "Job Applications Tracker",
    shortDescription: "A powerful Laravel 12 application for tracking job applications with AI-powered CV analysis, built with modern tools and best practices.",
    description: "A comprehensive job application tracking system built with Laravel 12 and Livewire. Features AI-powered CV analysis using Claude, modern UI with Flux components, and robust data management for job seekers.",
    technologies: ["Laravel", "Livewire", "Flux UI", "AI"],
    icon: "folder",
    githubUrl: "https://github.com/pranayb2773/job-tracker",
    features: [
      {
        icon: "ai",
        title: "AI-Powered Analysis",
        description: "Claude AI analyzes your CV against job descriptions, providing match scores and improvement suggestions.",
      },
      {
        icon: "dashboard",
        title: "Modern Dashboard",
        description: "Beautiful, responsive interface built with Flux UI components and Livewire for real-time updates.",
      },
      {
        icon: "tracking",
        title: "Application Tracking",
        description: "Track applications through every stage: Applied, Screening, Interview, Offer, Accepted, or Rejected.",
      },
      {
        icon: "analytics",
        title: "Analytics & Insights",
        description: "Visualize your job search progress with charts and statistics to optimize your strategy.",
      },
    ],
    techDetails: [
      { category: "Backend", items: ["Laravel 12", "PHP 8.3", "MySQL"] },
      { category: "Frontend", items: ["Livewire 3", "Flux UI", "Tailwind CSS"] },
      { category: "AI Integration", items: ["Claude API", "Anthropic SDK"] },
      { category: "Testing", items: ["Pest", "PHPUnit", "80%+ Coverage"] },
    ],
  },
  {
    id: "carpark-booking-api",
    title: "Car Park Booking API",
    shortDescription: "A Laravel 12 (PHP 8.2) REST API for checking car park availability, calculating prices, and managing bookings with token-based authentication.",
    description: "A robust REST API built with Laravel 12 for managing car park bookings. Features dynamic pricing, availability checking, and secure token-based authentication using Laravel Sanctum.",
    technologies: ["Laravel", "PHP 8.2", "Sanctum", "REST API"],
    icon: "terminal",
    githubUrl: "https://github.com/pranayb2773/carpark-booking-api",
    features: [
      {
        icon: "availability",
        title: "Real-time Availability",
        description: "Check parking space availability for any date range with instant responses.",
      },
      {
        icon: "pricing",
        title: "Dynamic Pricing",
        description: "Calculate booking prices based on duration, vehicle type, and seasonal rates.",
      },
      {
        icon: "auth",
        title: "Secure Authentication",
        description: "Token-based authentication using Laravel Sanctum for secure API access.",
      },
      {
        icon: "booking",
        title: "Booking Management",
        description: "Full CRUD operations for bookings with validation and conflict detection.",
      },
    ],
    apiEndpoints: [
      { method: "POST", path: "/api/register", description: "Register a new user" },
      { method: "POST", path: "/api/login", description: "Authenticate and get token" },
      { method: "GET", path: "/api/availability", description: "Check parking availability" },
      { method: "GET", path: "/api/price", description: "Calculate booking price" },
      { method: "POST", path: "/api/bookings", description: "Create a new booking" },
      { method: "GET", path: "/api/bookings", description: "List user's bookings" },
      { method: "DELETE", path: "/api/bookings/{id}", description: "Cancel a booking" },
    ],
    techDetails: [
      { category: "Backend", items: ["Laravel 12", "PHP 8.2", "MySQL"] },
      { category: "Authentication", items: ["Laravel Sanctum", "API Tokens"] },
      { category: "Testing", items: ["Pest", "Feature Tests", "95% Coverage"] },
      { category: "Documentation", items: ["OpenAPI/Swagger", "Postman Collection"] },
    ],
  },
  {
    id: "portfolio-project",
    title: "Portfolio Website",
    shortDescription: "A modern, responsive portfolio website built with React, Tailwind CSS, and TypeScript. Features light/dark theme toggle, smooth animations, and mobile-first design.",
    description: "This portfolio website showcasing my work and experience. Built with modern technologies including React, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.",
    technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    icon: "globe",
    githubUrl: "https://github.com/pranayb2773/pranayb2773.github.io",
    liveUrl: "https://pranaybaddam.site",
    features: [
      {
        icon: "theme",
        title: "Dark/Light Theme",
        description: "Seamless theme switching with smooth transitions and persistent preferences.",
      },
      {
        icon: "responsive",
        title: "Responsive Design",
        description: "Mobile-first approach with beautiful layouts across all device sizes.",
      },
      {
        icon: "animation",
        title: "Smooth Animations",
        description: "Framer Motion powered animations for engaging user experience.",
      },
      {
        icon: "seo",
        title: "SEO Optimized",
        description: "Meta tags, Open Graph, and structured data for better discoverability.",
      },
    ],
    techDetails: [
      { category: "Frontend", items: ["React 18", "TypeScript", "Vite"] },
      { category: "Styling", items: ["Tailwind CSS v4", "CSS Variables"] },
      { category: "Animation", items: ["Framer Motion", "CSS Animations"] },
      { category: "Deployment", items: ["GitHub Pages", "GitHub Actions"] },
    ],
  },
  {
    id: "products-parser",
    title: "Products Parser",
    shortDescription: "Native PHP CLI that streams large supplier catalogs (CSV, TSV, JSON/NDJSON, XML), normalizes fields, and counts unique product combinations with optional parallel processing.",
    description: "A high-performance PHP CLI tool designed for processing large product catalogs efficiently. Supports multiple file formats with streaming for memory efficiency and optional parallel processing for speed.",
    technologies: ["PHP 8.4", "Streaming", "CLI", "CSV/JSON/XML"],
    icon: "file",
    githubUrl: "https://github.com/pranayb2773/products-parser",
    features: [
      {
        icon: "streaming",
        title: "Memory-Efficient Streaming",
        description: "Process gigabyte-sized files without loading them entirely into memory.",
      },
      {
        icon: "formats",
        title: "Multi-Format Support",
        description: "Parse CSV, TSV, JSON, NDJSON, and XML files with automatic format detection.",
      },
      {
        icon: "parallel",
        title: "Parallel Processing",
        description: "Optional parallel processing to maximize throughput on multi-core systems.",
      },
      {
        icon: "normalize",
        title: "Field Normalization",
        description: "Standardize field names and values across different supplier formats.",
      },
    ],
    usage: [
      {
        title: "Basic Usage",
        code: `php products-parser parse products.csv --format=csv`,
        language: "bash",
      },
      {
        title: "With Parallel Processing",
        code: `php products-parser parse large-catalog.json --parallel=4`,
        language: "bash",
      },
      {
        title: "Count Unique Combinations",
        code: `php products-parser count products.xml --fields=brand,category`,
        language: "bash",
      },
    ],
    techDetails: [
      { category: "Language", items: ["PHP 8.4", "Native CLI"] },
      { category: "Formats", items: ["CSV", "TSV", "JSON", "NDJSON", "XML"] },
      { category: "Features", items: ["Streaming", "Generators", "Parallel Processing"] },
      { category: "Testing", items: ["PHPUnit", "Pest", "100% Coverage"] },
    ],
  },
  {
    id: "todo-list-api",
    title: "Todo List API",
    shortDescription: "A RESTful API for managing todo lists with role-based access control, built with Laravel and comprehensive test coverage.",
    description: "A feature-rich Todo List API built with Laravel, featuring role-based access control (RBAC), team collaboration, and comprehensive API documentation.",
    technologies: ["Laravel", "RBAC", "REST API", "MySQL"],
    icon: "checklist",
    githubUrl: "https://github.com/pranayb2773/todo-list-api",
    features: [
      {
        icon: "rbac",
        title: "Role-Based Access",
        description: "Fine-grained permissions with admin, manager, and user roles.",
      },
      {
        icon: "teams",
        title: "Team Collaboration",
        description: "Share todo lists with team members and manage permissions.",
      },
      {
        icon: "api",
        title: "RESTful Design",
        description: "Clean, consistent API following REST best practices.",
      },
      {
        icon: "testing",
        title: "Comprehensive Testing",
        description: "Full test suite with unit, feature, and integration tests.",
      },
    ],
    apiEndpoints: [
      { method: "GET", path: "/api/todos", description: "List all todos" },
      { method: "POST", path: "/api/todos", description: "Create a new todo" },
      { method: "GET", path: "/api/todos/{id}", description: "Get a specific todo" },
      { method: "PUT", path: "/api/todos/{id}", description: "Update a todo" },
      { method: "PATCH", path: "/api/todos/{id}/complete", description: "Mark as complete" },
      { method: "DELETE", path: "/api/todos/{id}", description: "Delete a todo" },
    ],
    techDetails: [
      { category: "Backend", items: ["Laravel 11", "PHP 8.2", "MySQL"] },
      { category: "Auth", items: ["Sanctum", "RBAC", "Spatie Permissions"] },
      { category: "Testing", items: ["Pest", "Feature Tests", "90% Coverage"] },
      { category: "Docs", items: ["OpenAPI", "Swagger UI"] },
    ],
  },
];

export const featuredProjects = projects.slice(0, 4);
