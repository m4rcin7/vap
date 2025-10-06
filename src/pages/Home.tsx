import { useState } from "react";
import { postsData } from "../data/posts";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const navigate = useNavigate();

  const categories = [
    "all",
    ...new Set(postsData.map((post) => post.category)),
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? postsData
      : postsData.filter((post) => post.category === selectedCategory);

  const handlePostClick = (postId: number) => {
    navigate(`/post/${postId}`);
  };

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Blog</h1>
            <p className="text-xl mb-8">
              Discover the latest insights, tutorials, and stories about web
              development, design, and technology.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
              Start Reading
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 -mt-10">
        <div className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {postsData.length}
            </div>
            <div className="text-gray-600 text-sm">Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">50K+</div>
            <div className="text-gray-600 text-sm">Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
            <div className="text-gray-600 text-sm">Topics</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
            <div className="text-gray-600 text-sm">Updated</div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all capitalize ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => handlePostClick(post.id)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <div
                className={`h-48 ${post.image} flex items-center justify-center`}
              >
                <span className="text-white text-6xl font-bold opacity-20">
                  {post.id}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-semibold">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <span className="font-medium">{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center text-white">
          {!subscribed ? (
            <>
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get the latest articles delivered directly to your inbox
              </p>
              <div className="max-w-md mx-auto flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </>
          ) : (
            <div className="py-8">
              <div className="text-6xl mb-4">✓</div>
              <h2 className="text-3xl font-bold mb-4">
                Thank You for Subscribing!
              </h2>
              <p className="text-xl opacity-90">
                Check your email to confirm your subscription
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
