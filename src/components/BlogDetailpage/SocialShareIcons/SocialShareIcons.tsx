'use client';

import { blogs } from '@/data/blogs';
import '../blogdetail.css';

type SocialShareIconsProps = {
    currentBlogHref: string;
};

const SocialShareIcons = ({
    currentBlogHref,
}: SocialShareIconsProps) => {
    const currentBlog = blogs.find(
        (blog) => blog.href === currentBlogHref
    );

    if (!currentBlog) {
        return null;
    }

    const siteUrl = 'https://rarepixelsdesign.in';
    const blogUrl = `${siteUrl}${currentBlog.href}`;
    const blogTitle = currentBlog.title;

    const encodedUrl = encodeURIComponent(blogUrl);
    const encodedTitle = encodeURIComponent(blogTitle);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(blogUrl);
            alert('Link copied!');
        } catch (error) {
            console.error('Unable to copy blog link:', error);
        }
    };

    return (
        <aside
            className="blog-social-icons-column"
            aria-label="Share this blog"
        >
            <div className="blog-social-icons-wrapper">
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share "${blogTitle}" on LinkedIn`}
                    className='w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-white flex items-center justify-center cursor-pointer'
                >
                    <span className="icon-linkedin" aria-hidden="true" />
                </a>

                <button
                    type="button"
                    onClick={handleCopyLink}
                    aria-label={`Copy link to "${blogTitle}"`}
                    title="Copy blog link"
                    className="w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-white flex items-center justify-center cursor-pointer"
                >
                    <span className="icon-instagram" aria-hidden="true" />
                </button>

                <button
                    type="button"
                    onClick={handleCopyLink}
                    aria-label={`Copy link to "${blogTitle}"`}
                    title="Copy blog link"
                    className="w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-white flex items-center justify-center cursor-pointer"
                >
                    <span className="icon-threads" aria-hidden="true" />
                </button>

                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share "${blogTitle}" on Facebook`}
                    className='w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-white flex items-center justify-center cursor-pointer'
                >
                    <span className="icon-facebook" aria-hidden="true" />
                </a>

                <a
                    href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share "${blogTitle}" on Twitter`}
                    className='w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-white flex items-center justify-center cursor-pointer'
                >
                    <span className="icon-twitter" aria-hidden="true"  />
                </a>
            </div>
        </aside>
    );
};

export default SocialShareIcons;