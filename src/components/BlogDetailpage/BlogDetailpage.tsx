'use client'

const BlogDetailpage = () => {
    return (
        <section>
            <div className="blog-detail-hero w-[100%] h-[621px] bg-[#040E36] flex items-center justify-center flex-col">
                <div className="blog-container-sm">
                    <div className="blog-detail-hero-text py-[80px] ">
                        <h1 className="text-[white]">From Unknown to Unforgettable: How Branding Makes Businesses Recognisable</h1>

                        <div className="blod-detail-type flex items-center justify-between mt-[40px]">
                            <div className="blog-detail-author-wrapper flex items-center gap-[22px]">
                                <div className="blog-detail-author-img w-[90px] h-[90px] bg-[#D9D9D9] rounded-full"></div>

                                <p className="text-18 text-[white] flex flex-col">
                                    <span className="font-normal" >Written by</span>
                                    <span className="font-semibold">Bina Yogesh</span>
                                </p>
                            </div>

                            <div className="blod-detailcategories-wrapper flex items-center gap-[90px]">
                                <div className="blog-post-date text-18 text-[white]">
                                    <p className="font-normal">Date</p>
                                    <p className="font-semibold">23rd Oct 2026</p>
                                </div>

                                <div className="blog-post-cate text-18 text-[white]">
                                    <p className="font-normal">Category</p>
                                    <p className="font-semibold">UX/UI Design</p>
                                </div>

                                <div className="blog-post-read text-18 text-[white]">
                                    <p className="font-normal">Reading Time</p>
                                    <p className="font-semibold">8 Min</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section bg-[#FBF8F5]">
                <div className="blog-detail-content-wrapper blog-container-sm">
                    <div className="blog-detail-cover-image -[1000] h-[562] bg-[black]">
                        {/* <Image className="" src="" alt="blog-detail-image" width={1000} height={562}></Image> */}
                    </div>

                    <div className="blog-detail-content-text pt-[80px]">
                        <p className="font-normal text-20">Every business starts somewhere.</p>
                        <p className="font-normal text-20 mt-[20px]">A new name. A new idea. A website. A product. Perhaps a logo that represents the beginning of something ambitious.</p>
                        <p className="font-normal text-20 mt-[20px]">But being in the market does not automatically make a business memorable.</p>
                        <p className="font-normal text-20 mt-[20px]">Customers see hundreds of brands every day. They scroll past businesses on social media, compare products on websites, receive recommendations from friends, and make decisions in seconds. In such a crowded environment, simply being visible is not enough.</p>
                        <p className="font-normal text-20 mt-[20px]">A business needs to be recognisable, relevant, and remembered.</p>
                        <p className="font-normal text-20 mt-[20px]">That is where branding becomes much more than a logo or a colour palette.</p>
                        <p className="font-normal text-20 mt-[20px]">At RarePixels, we look at branding as the process of giving a business a clear identity, a distinct voice, and a visual presence that people can recognise and connect with.</p>
                        <p className="font-normal text-20 mt-[20px]">Because the journey from being unknown to becoming unforgettable rarely happens by accident.</p>

                        <h2 className="h3 mt-[20px] mb-[40px] font-semibold">Recognition Starts With a Clear Identity</h2>

                        <p className="font-normal text-20">Think about the brands you can recognise without seeing their name.</p>
                        <p className="font-normal text-20 mt-[20px]">You may know them from a particular colour, visual style, tone of voice, packaging, typography, or even the way their website communicates.</p>
                        <p className="font-normal text-20 mt-[20px]">That recognition comes from consistency.</p>
                        <p className="font-normal text-20 mt-[20px]">A strong brand identity gives people something familiar to hold on to. It creates a clear answer to an important question:</p>
                        
                        <p className="font-semibold text-20 mt-[20px]">Who are we?</p>

                        <p className="font-normal text-20 mt-[20px]">Before designing a logo or selecting colours, a business needs to understand its own identity.</p>

                        <p className="font-normal text-20">What does it stand for?</p>
                        <p className="font-normal text-20">Who is it trying to reach?</p>
                        <p className="font-normal text-20">What problem does it solve?</p>
                        <p className="font-normal text-20">What makes it different?</p>
                        <p className="font-normal text-20">What should people feel when they interact with it?</p>

                        <p className="font-normal text-20 mt-[20px]">When these questions have clear answers, design becomes more meaningful. Instead of decorating a business, branding starts communicating its personality and purpose.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailpage