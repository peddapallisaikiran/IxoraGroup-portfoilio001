import React from 'react';
import { Article, allArticles } from './NewsAndMediaPage';
import { CopyLinkIcon } from './icons/CopyLinkIcon';
import { XIcon } from './icons/XIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { RedditIcon } from './icons/RedditIcon';

interface ArticleDetailPageProps {
  article: Article;
  navigate: (page: string, data?: any) => void;
}

const defaultArticleContent = (
    <>
        <p>IxoraGroup India started a contract for Integrated Facility Management Services (IFMS) that has transformed the township into a model of operational excellence and has improved the quality of life for residents.</p>
        <p>In the heart of western India lies a sprawling township, a self-contained ecosystem where 10,000 employees and their families live, work, and thrive. This vibrant community, spanning over 4 million square feet, is more than just a residential hub— it not only has 2,500 residential flats, bungalows, and villas but also schools, hospitals, recreational centres, and administrative offices.</p>
        <p>The seamless functioning of such a vast and remote township hinges on one critical factor: efficient and comprehensive facility management services.</p>
        
        <h3>The Challenge: Managing a Township Located in a Remote Area</h3>
        <p>The township, located far from urban centres, poses unique challenges with limited access to resources.</p>
        <p>The need for self-sufficiency, and the sheer scale of operations demands a capable, reliable, and innovative integrated facility management partner to ensure seamless service delivery and consistency of services.</p>
        <p>Our customer required a service provider capable of addressing the following critical aspects:</p>
        <ul>
            <li><strong>Uniform Service Standards:</strong> Maintaining consistent quality across a sprawling township spanning 4 million sq. ft..</li>
            <li><strong>Comprehensive Service Integration:</strong> Delivering multiple essential services under one roof, eliminating the hassle of coordinating with multiple vendors.</li>
            <li><strong>Proactive Infrastructure Care:</strong> Optimising asset longevity through planned, predictive, and preventive maintenance to minimise costly breakdowns.</li>
        </ul>
        
        <div className="relative my-12 p-8 bg-amber-50/50 border-l-4 border-[#D4B258] rounded-r-xl overflow-hidden">
             <div 
                className="absolute top-0 right-0 h-full w-32 bg-repeat-y opacity-20"
                style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4B258' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
            </div>
            <blockquote className="text-xl font-medium text-gray-800 border-none p-0 not-italic">
                “Our work in this township goes beyond mere maintenance—it’s about creating a living environment that inspires and nurtures. By combining digital technology, technical expertise with a human-centric approach, we’ve not only met but exceeded our customer’s expectations, setting a new benchmark for facility management in remote locations.”
            </blockquote>
            <cite className="block mt-4 not-italic">
                <span className="font-semibold text-gray-900">Bikram Singh Bhadauria</span>
                <br />
                <span className="text-gray-600">Senior Vice President</span>
            </cite>
        </div>

        <h3>The IxoraGroup Solution:</h3>
        <p>Our solution was designed to cover the entire spectrum of integrated facility management services. From Hard Services and Annual Rate Contracts (ARC) for infrastructure repair and maintenance to Housekeeping, Horticulture, Pest Control and Community Engagement.</p>
        
        {/* ... More content as needed */}
    </>
);


const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ article, navigate }) => {

  const relatedArticles = allArticles.filter(a => a.title !== article.title).slice(0, 4);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16">
      {/* Article Hero */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-[#D4B258] text-sm mb-4">
              {article.categories.join(' | ')}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              {article.fullTitle || article.title}
            </h1>
            <div className="mt-8 flex items-center">
              <img 
                src={article.authorImage} 
                alt={article.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-800">{article.author}</p>
                <p className="text-sm text-gray-500">{article.date}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img 
              src={article.imageSrc}
              alt={article.fullTitle || article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto prose lg:prose-lg">
        {article.content || defaultArticleContent}
      </div>

      {/* Connect CTA */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8 sm:p-12">
                 <h3 className="text-3xl font-bold text-gray-800">Connect with IxoraGroup to elevate your facility management standards!</h3>
                 <a href="#" className="mt-6 inline-block bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors">
                    Contact Us
                </a>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop" alt="Looking up at skyscrapers through green trees" className="w-full h-64 md:h-full object-cover"/>
            </div>
        </div>
      </div>
      

      {/* Related News */}
      <div className="pt-8 border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Related News</h2>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('news', null); }} className="mt-6 inline-block bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors">
            See All News and Media
          </a>
        </div>
        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((relatedArticle, index) => (
                <article 
                    key={index} 
                    className="group flex items-center gap-6 cursor-pointer"
                    onClick={() => navigate('article-detail', relatedArticle)}
                >
                    <div className="w-1/3 flex-shrink-0">
                        <div className="overflow-hidden rounded-2xl shadow-md">
                            <img 
                                src={relatedArticle.imageSrc} 
                                alt={relatedArticle.title}
                                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                    <div className="w-2/3">
                        <p className="text-xs font-semibold text-[#D4B258] mb-2">{relatedArticle.categories.join(' | ')}</p>
                        <h3 className="text-lg font-bold text-gray-800 leading-tight">
                            <span className="hover:text-[#D4B258] transition-colors">{relatedArticle.title}</span>
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{relatedArticle.description}</p>
                         <div className="mt-4 flex items-center">
                            <img 
                            src={relatedArticle.authorImage}
                            alt={relatedArticle.author}
                            className="w-10 h-10 rounded-full object-cover border-2 border-amber-100"
                            />
                            <div className="ml-3">
                            <p className="font-semibold text-sm text-gray-800">{relatedArticle.author}</p>
                            <p className="text-xs text-gray-500">{relatedArticle.date}</p>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
      </div>

    </div>
  );
};

export default ArticleDetailPage;