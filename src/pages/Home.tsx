import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and build your first component",
      date: "2024-10-01",
      category: "Tutorial",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Advanced TypeScript Tips",
      excerpt: "Improve your TypeScript skills with these advanced techniques",
      date: "2024-09-28",
      category: "Development",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      author: "Jane Smith",
    },
  ];

  const handlePostClick = (postId: number) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-xl">Discover insights, tutorials, and stories</p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              onClick={() => handlePostClick(post.id)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className={`h-48 ${post.image}`}></div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
