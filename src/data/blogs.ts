import type { BlogPost } from '@/types/blog'

export const blogs: BlogPost[] = [
    {
        slug: 'how-branding-makes-businesses-recognisable',

        title:
            'From Unknown to Unforgettable: How Branding Makes Businesses Recognisable',

        excerpt:
            'Discover how strategic branding helps businesses become recognisable, trusted, and memorable.',

        publishedAt: '2026-10-23',
        displayDate: '23rd Oct 2026',

        category: 'UX/UI Design',
        readingTime: '8 Min',

        coverImage: '/blog-detail/blog-detail-cover.png',
        coverImageAlt: 'Brand identity and business recognition',

        author: {
            name: 'Bina Yogesh',
            image: '/blog-detail/bina-patel-author.webp',
        },

        content: [
            {
                type: 'paragraph',
                text: 'Every business starts somewhere.',
            },
            {
                type: 'paragraph',
                text: 'A new name. A new idea. A website. A product. Perhaps a logo that represents the beginning of something ambitious.',
            },
            {
                type: 'paragraph',
                text: 'But being in the market does not automatically make a business memorable.',
            },
            {
                type: 'paragraph',
                text: 'Customers see hundreds of brands every day. They scroll past businesses on social media, compare products on websites, receive recommendations from friends, and make decisions in seconds. In such a crowded environment, simply being visible is not enough.',
            },
            {
                type: 'paragraph',
                text: 'A business needs to be recognisable, relevant, and remembered.',
            },
            {
                type: 'paragraph',
                text: 'That is where branding becomes much more than a logo or a colour palette.',
            },
            {
                type: 'paragraph',
                text: 'At RarePixels, we look at branding as the process of giving a business a clear identity, a distinct voice, and a visual presence that people can recognise and connect with.',
            },
            {
                type: 'paragraph',
                text: 'Because the journey from being unknown to becoming unforgettable rarely happens by accident.',
            },

            {
                type: 'heading',
                level: 2,
                text: 'Recognition Starts With a Clear Identity',
                id: 'recognition-starts-with-a-clear-identity',
            },

            {
                type: 'paragraph',
                text: 'Think about the brands you can recognise without seeing their name.',
            },
            {
                type: 'paragraph',
                text: 'You may know them from a particular colour, visual style, tone of voice, packaging, typography, or even the way their website communicates.',
            },
            {
                type: 'paragraph',
                text: 'That recognition comes from consistency.',
            },
            {
                type: 'paragraph',
                text: 'A strong brand identity gives people something familiar to hold on to. It creates a clear answer to an important question:',
            },
            {
                type: 'paragraph',
                text: 'Who are we?',
                className: 'font-semibold',
            },
            {
                type: 'paragraph',
                text: 'Before designing a logo or selecting colours, a business needs to understand its own identity.',
            },

            {
                type: 'list',
                style: 'bullet',
                items: [
                    'What does it stand for?',
                    'Who is it trying to reach?',
                    'What problem does it solve?',
                    'What makes it different?',
                    'What should people feel when they interact with it?',
                ],
            },

            {
                type: 'paragraph',
                text: 'When these questions have clear answers, design becomes more meaningful. Instead of decorating a business, branding starts communicating its personality and purpose.',
            },

            {
                type: 'heading',
                level: 3,
                text: 'Your Logo Is Only One Piece of the Picture',
                id: 'your-logo-is-only-one-piece-of-the-picture',
            },

            {
                type: 'paragraph',
                text: 'One of the biggest misconceptions about branding is that it begins and ends with a logo.',
            },
            {
                type: 'paragraph',
                text: 'A logo is important, but it is only one part of the brand identity.',
            },
            {
                type: 'paragraph',
                text: 'A recognisable brand is built through a connected system of elements.',
            },

            {
                type: 'list',
                style: 'bullet',
                items: [
                    'Logo and visual identity',
                    'Colour palette',
                    'Typography',
                    'Photography and imagery',
                    'Graphic language',
                    'Brand voice',
                    'Messaging',
                    'Website experience',
                    'Packaging',
                    'Social media presence',
                    'Marketing communication',
                ],
            },

            {
                type: 'paragraph',
                text: 'Each element should feel like it belongs to the same story.',
            },
            {
                type: 'paragraph',
                text: 'That consistency is what gradually turns individual interactions into brand recognition.',
            },

            {
                type: 'heading',
                level: 3,
                text: 'Branding Helps People Understand Your Business',
                id: 'branding-helps-people-understand-your-business',
            },

            {
                type: 'paragraph',
                text: 'A strong brand does not only make a business look better. It makes the business easier to understand.',
            },
            {
                type: 'paragraph',
                text: 'Within a few seconds, a potential customer should be able to understand:',
            },

            {
                type: 'list',
                style: 'number',
                items: [
                    'What does this business do?',
                    'Who is it for?',
                    'Why should I care?',
                    'Why should I choose it?',
                ],
            },

            {
                type: 'paragraph',
                text: 'When branding and messaging work together, these answers become clearer.',
            },

            {
                type: 'heading',
                level: 3,
                text: 'Consistency Builds Trust',
                id: 'consistency-builds-trust',
            },

            {
                type: 'paragraph',
                text: 'People tend to trust what feels familiar.',
            },
            {
                type: 'paragraph',
                text: 'When a business presents itself consistently across its website, social media, presentations, packaging, advertisements, and other customer touchpoints, it creates a sense of reliability.',
            },

            {
                type: 'heading',
                level: 3,
                text: 'Building a Brand People Remember',
                id: 'building-a-brand-people-remember',
            },

            {
                type: 'paragraph',
                text: 'There is a difference between being seen and being remembered.',
            },
            {
                type: 'paragraph',
                text: 'Being seen is about visibility.',
            },
            {
                type: 'paragraph',
                text: 'Being remembered is about meaning.',
            },

            {
                type: 'quote',
                text: 'The strongest brands do not simply ask people to remember their name. They give people something worth remembering.',
            },

            {
                type: 'paragraph',
                text: 'Your brand has a story. Make sure people remember it.',
                className: 'font-semibold',
            },
        ],
    },
]

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
    return blogs.find((blog) => blog.slug === slug)
}