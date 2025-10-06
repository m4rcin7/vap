import { useParams, useNavigate } from "react-router-dom";
import { postsData } from "../data/posts";

export function PostDetail() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  const post = postsData.find((p) => p.id === Number(postId));

  const handleBack = () => {
    navigate("/");
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The post you're looking for doesn't exist.
          </p>
          <button
            onClick={handleBack}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = postsData
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const handleRelatedPostClick = (relatedPostId: number) => {
    navigate(`/post/${relatedPostId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <span className="mr-2">←</span>
            Back to Posts
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article>
          <div className="mb-8">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-between text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {post.author}
                  </div>
                  <div className="text-sm text-gray-500">{post.date}</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">{post.readTime}</div>
            </div>
          </div>

          <div
            className={`h-96 ${post.image} rounded-lg mb-8 flex items-center justify-center`}
          >
            <span className="text-white text-8xl font-bold opacity-20">
              {post.id}
            </span>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
              {post.excerpt}
            </div>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-200">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
              #{post.category.toLowerCase()}
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
              #webdevelopment
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
              #tutorial
            </span>
          </div>

          <div className="bg-gray-100 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Share this article
            </h3>
            <div className="flex gap-4">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Twitter
              </button>
              <button className="flex-1 bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
                LinkedIn
              </button>
              <button className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Copy Link
              </button>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  onClick={() => handleRelatedPostClick(relatedPost.id)}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <div className={`h-32 ${relatedPost.image}`}></div>
                  <div className="p-4">
                    <span className="text-xs text-blue-600 font-semibold">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                About {post.author}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.author} is a passionate developer and writer with years of
                experience in web development. They love sharing knowledge and
                helping others learn.
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors text-sm">
                  Follow
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm">
                  More Articles
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
