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
    <div className="min-h-screen">
      <article className="max-w-7xl mx-auto py-16 px-8 bg-black text-white"> {/* Adjusted max-width, padding */}
        <div className="bg-neutral-800 p-12 rounded-4xl shadow-xl"> {/* Content wrapper for the blog post */}
          <header className="mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gold-accent leading-tight tracking-wider mb-6">
              {post.title}
            </h1>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"> {/* Adjusted margin-bottom */}
              {post.intro.headline}
            </h2>
            <p className="text-xl leading-relaxed text-white">
              {post.intro.body}
            </p>
          </header>

          <div className="prose prose-xl prose-invert max-w-none text-white space-y-10"> {/* Adjusted prose size, space-y */}
            {post.sections.map((section, index) => (
              <div key={index} className="mb-12"> {/* Adjusted margin-bottom */}
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
                  <ul className="list-disc list-inside text-xl space-y-3 mt-6 leading-relaxed"> {/* Adjusted space-y, margin-top */}
                    {section.bullets.map((bullet, bIndex) => (
                      <li key={bIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.cta && (
                  <div className="mt-10"> {/* Adjusted margin-top */}
                    <Button cta={section.cta} variant="outline" />
                  </div>
                )}
              </div>
            ))}

            {post.keyTakeaway && (
              <div className="bg-black p-10 rounded-3xl shadow-lg border-l-8 border-gold-accent mt-20"> {/* Adjusted background, padding, rounded, margin-top */}
                <h3 className="text-3xl font-bold text-gold-accent mb-4 leading-tight">Key Takeaway</h3>
                <p className="text-xl leading-relaxed text-white">{post.keyTakeaway}</p>
              </div>
            )}

            <div className="mt-20 text-center"> {/* Adjusted margin-top */}
              <h3 className="text-4xl font-extrabold text-gold-accent mb-8 leading-tight">Final Word</h3> {/* Adjusted margin-bottom */}
              <p className="text-xl leading-relaxed text-white max-w-3xl mx-auto">
                {post.finalWord}
              </p>
            </div>
          </div>

          {/* SEO Summary/Related Links */}
          <footer className="mt-20 pt-10 border-t border-gray-700"> {/* Adjusted margin-top, border-color */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Adjusted gap */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Primary Keywords</h4> {/* Adjusted font size and margin-bottom */}
                <ul className="flex flex-wrap gap-3 text-lg"> {/* Adjusted gap */}
                  {post.seoSummary.primaryKeywords.map((keyword, index) => (
                    <li key={index} className="bg-black px-5 py-2 rounded-xl text-white"> {/* Adjusted background, padding, rounded */}
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Supporting Entities</h4> {/* Adjusted font size and margin-bottom */}
                <ul className="flex flex-wrap gap-3 text-lg"> {/* Adjusted gap */}
                  {post.seoSummary.supportingEntities.map((entity, index) => (
                    <li key={index} className="bg-black px-5 py-2 rounded-xl text-white"> {/* Adjusted background, padding, rounded */}
                      {entity}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Internal Links</h4> {/* Adjusted font size and margin-bottom */}
                <ul className="space-y-3 text-lg"> {/* Adjusted space-y */}
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
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;