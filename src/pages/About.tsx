export function About () {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">AB</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're passionate about creating amazing experiences and building
            meaningful connections with our community.
          </p>
        </section>

        {/* About Content */}
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              We believe in the power of innovation and creativity to solve
              real-world problems. Our team is dedicated to delivering
              exceptional solutions that make a difference.
            </p>
            <p className="text-gray-600">
              Founded in 2020, we've grown from a small startup to a trusted
              partner for businesses worldwide. Our commitment to quality and
              customer satisfaction drives everything we do.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Web Development & Design
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Mobile App Development
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Digital Marketing Solutions
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Technical Consulting
              </li>
            </ul>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-6 shadow-sm">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Jane Doe
              </h3>
              <p className="text-blue-600 mb-4 font-medium">CEO & Founder</p>
              <p className="text-sm text-gray-600">
                Passionate about technology and innovation with 10+ years of
                experience.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-6 shadow-sm">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                John Smith
              </h3>
              <p className="text-blue-600 mb-4 font-medium">Lead Developer</p>
              <p className="text-sm text-gray-600">
                Full-stack developer specializing in modern web technologies.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-6 shadow-sm">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">SJ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sarah Johnson
              </h3>
              <p className="text-blue-600 mb-4 font-medium">Design Director</p>
              <p className="text-sm text-gray-600">
                Creative designer with expertise in UI/UX and brand identity.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-900 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Ready to start your next project? We'd love to hear from you.
            Contact us today and let's create something amazing together.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">@</span>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">hello@company.com</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">☎</span>
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">📍</span>
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-300">New York, NY</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
