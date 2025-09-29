import { useState } from "react";

export default function Portfolio () {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Modern e-commerce solution with payment integration",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure banking application for iOS and Android",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      tags: ["React Native", "Firebase", "API"],
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "design",
      description: "Complete branding package for tech startup",
      image: "bg-gradient-to-br from-pink-400 to-pink-600",
      tags: ["Branding", "UI/UX", "Graphics"],
    },
    {
      id: 4,
      title: "Real Estate Website",
      category: "web",
      description: "Property listing platform with search filters",
      image: "bg-gradient-to-br from-green-400 to-green-600",
      tags: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Workout tracker with social features",
      image: "bg-gradient-to-br from-orange-400 to-orange-600",
      tags: ["Flutter", "Health API", "Cloud"],
    },
    {
      id: 6,
      title: "Dashboard UI Kit",
      category: "design",
      description: "Premium admin dashboard components",
      image: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      tags: ["Figma", "Design System", "UI"],
    },
    {
      id: 7,
      title: "Blog Platform",
      category: "web",
      description: "Content management system for bloggers",
      image: "bg-gradient-to-br from-teal-400 to-teal-600",
      tags: ["Next.js", "Tailwind", "CMS"],
    },
    {
      id: 8,
      title: "Food Delivery App",
      category: "mobile",
      description: "On-demand food ordering application",
      image: "bg-gradient-to-br from-red-400 to-red-600",
      tags: ["Swift", "Kotlin", "Maps API"],
    },
    {
      id: 9,
      title: "Logo Collection",
      category: "design",
      description: "Portfolio of brand logos and marks",
      image: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      tags: ["Logo Design", "Vector", "Creative"],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and creative work. Each project
            represents our commitment to excellence and innovation.
          </p>
        </section>

        {/* Filter Buttons */}
        <section className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeFilter === "all"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter("web")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeFilter === "web"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveFilter("mobile")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeFilter === "mobile"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Mobile Apps
          </button>
          <button
            onClick={() => setActiveFilter("design")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeFilter === "design"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Design
          </button>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div
                className={`h-48 ${project.image} flex items-center justify-center group-hover:scale-105 transition-transform`}
              >
                <span className="text-white text-6xl font-bold opacity-20">
                  {project.id}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Stats Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's work together to bring your ideas to life
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get In Touch
          </button>
        </section>
      </main>
    </div>
  );
}
