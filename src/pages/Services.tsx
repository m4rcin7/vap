import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-Commerce Solutions",
        "CMS Integration",
        "API Development",
      ],
      price: "Starting at $2,999",
    },
    {
      id: 2,
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "iOS Development",
        "Android Development",
        "React Native Apps",
        "App Store Deployment",
        "Push Notifications",
      ],
      price: "Starting at $4,999",
    },
    {
      id: 3,
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that engage your audience",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Usability Testing",
      ],
      price: "Starting at $1,999",
    },
    {
      id: 4,
      icon: "🚀",
      title: "Digital Marketing",
      description: "Strategic marketing campaigns to grow your online presence",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Strategy",
        "Email Campaigns",
        "Analytics & Reporting",
      ],
      price: "Starting at $999/month",
    },
    {
      id: 5,
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services",
      features: [
        "AWS/Azure Setup",
        "Server Management",
        "Database Optimization",
        "CI/CD Pipeline",
        "Security & Backup",
      ],
      price: "Starting at $1,499",
    },
    {
      id: 6,
      icon: "🔧",
      title: "Technical Support",
      description: "Ongoing maintenance and support for your digital products",
      features: [
        "24/7 Monitoring",
        "Bug Fixes",
        "Performance Optimization",
        "Security Updates",
        "Technical Consultation",
      ],
      price: "Starting at $499/month",
    },
  ];

  const handleButtonClick = (action: string) => {
    if (action === "schedule") {
      navigate("/contact");
    } else if (action === "viewWork") {
      navigate("/portfolio");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to your business
            needs. From design to deployment, we've got you covered.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all cursor-pointer ${
                activeService === service.id ? "ring-4 ring-blue-500" : ""
              }`}
              onClick={() =>
                setActiveService(
                  activeService === service.id ? null : service.id
                )
              }
            >
              <div className="p-8">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div
                  className={`transition-all ${
                    activeService === service.id ? "block" : "hidden"
                  }`}
                >
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-600"
                      >
                        <span className="text-blue-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-lg font-bold text-blue-600">
                    {service.price}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 mb-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Fast Delivery</h3>
              <p className="text-sm opacity-90">
                Quick turnaround without compromising quality
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold mb-2">Expert Team</h3>
              <p className="text-sm opacity-90">
                Skilled professionals with years of experience
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold mb-2">Best Value</h3>
              <p className="text-sm opacity-90">
                Competitive pricing for premium services
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold mb-2">Support</h3>
              <p className="text-sm opacity-90">
                Dedicated support throughout the project
              </p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Discovery</h3>
                  <p className="text-gray-600">
                    We learn about your business, goals, and requirements
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Planning</h3>
                  <p className="text-gray-600">
                    We create a detailed project plan and timeline
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Development</h3>
                  <p className="text-gray-600">
                    Our team brings your vision to life
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Launch</h3>
                  <p className="text-gray-600">
                    We deploy and provide ongoing support
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-3xl mb-2">🏥</div>
                <p className="font-medium text-gray-900">Healthcare</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-3xl mb-2">🏪</div>
                <p className="font-medium text-gray-900">E-Commerce</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-3xl mb-2">🎓</div>
                <p className="font-medium text-gray-900">Education</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-3xl mb-2">💼</div>
                <p className="font-medium text-gray-900">Finance</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-3xl mb-2">🏠</div>
                <p className="font-medium text-gray-900">Real Estate</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-3xl mb-2">🍽️</div>
                <p className="font-medium text-gray-900">Food & Beverage</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your
            needs. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleButtonClick("schedule")}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule a Call
            </button>
            <button
              onClick={() => handleButtonClick("viewWork")}
              className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              View Our Work
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
