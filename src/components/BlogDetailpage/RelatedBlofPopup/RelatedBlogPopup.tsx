'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '@/data/blogs';
import './relatedblogpopup.css';

type RelatedBlogPopupProps = {
    currentBlogHref: string;
    currentCategory: string;
};

const RelatedBlogPopup = ({
    currentBlogHref,
    currentCategory,
}: RelatedBlogPopupProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const sameCategoryBlogs = blogs.filter(
        (blog) => blog.category === currentCategory
    );

    const currentBlogIndex = sameCategoryBlogs.findIndex(
        (blog) => blog.href === currentBlogHref
    );

    const relatedBlog =
        sameCategoryBlogs.length > 1
            ? sameCategoryBlogs[
            (currentBlogIndex + 1) % sameCategoryBlogs.length
            ]
            : null;

    useEffect(() => {
        const blogSection = document.getElementById('blog-detail-section');

        if (!blogSection) return;

        const handleScroll = () => {
            const sectionTop = blogSection.offsetTop;
            const sectionHeight = blogSection.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;

            const sectionScrollableDistance = Math.max( sectionHeight - window.innerHeight, 0 );
            const triggerPoint = sectionTop + sectionScrollableDistance * 0.5;
            const sectionEndPoint = sectionBottom - window.innerHeight;
            const hasReachedHalfway = window.scrollY >= triggerPoint;
            const hasReachedSectionEnd = window.scrollY >= sectionEndPoint;
            setIsVisible( hasReachedHalfway && !hasReachedSectionEnd );
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    if (!relatedBlog) { return null; }

    return (
        <aside className={`related-blog-popup ${isVisible ? 'is-visible' : ''}`} aria-label="Related blog recommendation" aria-hidden={!isVisible} >
            <Link href={relatedBlog.href} className="related-blog-popup-link" aria-label={`Read related post: ${relatedBlog.title}`} tabIndex={isVisible ? 0 : -1} >
                <div className="related-blog-popup-image">
                    <Image src={relatedBlog.image} alt={relatedBlog.title} fill sizes="135px" className="related-blog-popup-img" />
                </div>

                <p className="text-16 font-semibold related-blog-popup-text">
                    {relatedBlog.title}
                </p>
            </Link>
        </aside>
    );
};

export default RelatedBlogPopup;