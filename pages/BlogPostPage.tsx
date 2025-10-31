import React from 'react';
import { useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = BLOG_POSTS.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold text-gold-accent">Blog Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20"> {/* pt-20 to offset fixed header */}
      <article className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black text-white"> {/* Increased max-width */}
        <header className="mb-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gold-accent leading-tight tracking-wider mb-6">
            {post.title}
          </h1>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            {post.intro.headline}
          </h2>
          <p className="text-xl leading-relaxed text-white">
            {post.intro.body}
          </p>
        </header>

        <div className="prose prose-lg prose-invert max-w-none text-white space-y-8"> {/* Tailwind prose for consistent typography */}
          {post.sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gold-accent mb-6 leading-tight">
                {section.headline}
              </h2>
              {Array.isArray(section.body) ? (
                section.body.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-xl leading-relaxed">{paragraph}</p>
                ))
              ) : (
                <p className="text-xl leading-relaxed">{section.body}</p>
              )}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc list-inside text-xl space-y-2 mt-4 leading-relaxed">
                  {section.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.cta && (
                <div className="mt-8">
                  <Button cta={section.cta} variant="outline" />
                </div>
              )}
            </div>
          ))}

          {post.keyTakeaway && (
            <div className="bg-neutral-900 p-8 rounded-lg shadow-xl border-l-8 border-gold-accent mt-16">
              <h3 className="text-3xl font-bold text-gold-accent mb-4 leading-tight">Key Takeaway</h3>
              <p className="text-xl leading-relaxed text-white">{post.keyTakeaway}</p>
            </div>
          )}

          <div className="mt-16 text-center">
            <h3 className="text-4xl font-extrabold text-gold-accent mb-6 leading-tight">Final Word</h3>
            <p className="text-xl leading-relaxed text-white max-w-3xl mx-auto">
              {post.finalWord}
            </p>
          </div>
        </div>

        {/* SEO Summary/Related Links */}
        <footer className="mt-20 pt-10 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Primary Keywords</h4>
              <ul className="flex flex-wrap gap-2 text-lg">
                {post.seoSummary.primaryKeywords.map((keyword, index) => (
                  <li key={index} className="bg-neutral-900 px-4 py-2 rounded-md text-white">
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Supporting Entities</h4>
              <ul className="flex flex-wrap gap-2 text-lg">
                {post.seoSummary.supportingEntities.map((entity, index) => (
                  <li key={index} className="bg-neutral-900 px-4 py-2 rounded-md text-white">
                    {entity}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Internal Links</h4>
              <ul className="space-y-2 text-lg">
                {post.seoSummary.internalLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-gold-accent hover:underline">
                      {link.text}
                    </Link>
                  </li>
                ))}
                {post.seoSummary.localAnchor && (
                  <li>
                    <span className="text-gold-accent italic">{post.seoSummary.localAnchor}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPostPage;