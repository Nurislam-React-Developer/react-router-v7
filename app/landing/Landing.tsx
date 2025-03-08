import { Link } from 'react-router';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Modern Web Routing with <span className="text-blue-600 dark:text-blue-400">React Router v7</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Build powerful, production-ready web applications with the latest features of React Router v7.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/docs" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 inline-flex items-center">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link to="/about" className="px-6 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-700 transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-30 dark:opacity-40"></div>
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                    <code>{`import { route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "./about/About.tsx"),
  route("docs/*", "./docs/routes.ts")
];`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              React Router v7 comes with amazing features that make building modern web applications easier than ever.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition duration-300">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Developers Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from developers who have built amazing applications with React Router.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of developers building amazing web experiences with React Router v7.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/docs" className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg transition duration-300">
                  Start Building
                </Link>
                <a href="https://github.com/remix-run/react-router" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent hover:bg-blue-700 text-white font-medium rounded-lg border border-white transition duration-300">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">React Router</h3>
              <p className="mb-4">Modern client-side routing for React applications.</p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/reactrouter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://github.com/remix-run/react-router" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/docs" className="hover:text-white transition duration-300">Documentation</Link></li>
                <li><Link to="/tutorials" className="hover:text-white transition duration-300">Tutorials</Link></li>
                <li><Link to="/examples" className="hover:text-white transition duration-300">Examples</Link></li>
                <li><a href="https://github.com/remix-run/react-router" className="hover:text-white transition duration-300">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="https://rmx.as/discord" className="hover:text-white transition duration-300">Discord</a></li>
                <li><a href="https://twitter.com/reactrouter" className="hover:text-white transition duration-300">Twitter</a></li>
                <li><a href="https://github.com/remix-run/react-router/discussions" className="hover:text-white transition duration-300">Discussions</a></li>
                <li><a href="https://stackoverflow.com/questions/tagged/react-router" className="hover:text-white transition duration-300">Stack Overflow</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="hover:text-white transition duration-300">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition duration-300">Terms of Service</Link></li>
                <li><Link to="/license" className="hover:text-white transition duration-300">License</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© {new Date().getFullYear()} React Router. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Features data
const features = [
  {
    title: "Declarative Routing",
    description: "Define your routes as JavaScript objects with a clean, declarative API that makes routing simple and intuitive.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    title: "Server-Side Rendering",
    description: "Built-in support for server-side rendering that makes your applications faster and more SEO-friendly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
  {
    title: "Data Loading",
    description: "Powerful data loading capabilities that let you fetch data before rendering components, with automatic error handling.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    title: "TypeScript Support",
    description: "First-class TypeScript support with comprehensive type definitions for a better development experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Hot Module Replacement",
    description: "Enjoy a seamless development experience with hot module replacement that preserves component state.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Nested Routes",
    description: "Create complex layouts with nested routes that make your application structure more intuitive and maintainable.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Alex Johnson",
    role: "Senior Frontend Developer",
    avatar: "https://i.pravatar.cc/150?img=1",
    quote: "React Router v7 has completely transformed how we build our applications. The new data loading features have made our code much cleaner and more maintainable."
  },
  {
    name: "Sarah Chen",
    role: "Tech Lead",
    avatar: "https://i.pravatar.cc/150?img=5",
    quote: "The server-side rendering capabilities in React Router v7 have significantly improved our site's performance and SEO rankings."
  },
  {
    name: "Miguel Rodriguez",
    role: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=8",
    quote: "I love how easy it is to create complex layouts with nested routes. It's made our application structure so much more intuitive."
  }
];