import './contactwhathappen.css'

const ContactWhatHappen = () => {
    return (
        <section className='section bg-[#01030D]'>
            <div className="container">
                <div className="cnct-what-happen-title w-[478px]">
                    <h2 className='font-semibold text-[white]'>You Hit Send. We Get To Work.</h2>

                    <p className='text-18 font-normal website-subtitle-mt text-[white]'>No waiting in the void. No automated replies. Just real people, real conversations, and a clear path from your first idea to the first pixel.</p>
                </div>

                <div className="cnct-what-happen-card-wrapper mt-[60px] flex items-start justify-between">
                    <div className="cnct-happens-card cnct-happens-card-1 border-t w-[630px] border-[#E8DB7D] flex items-start justify-between pt-[20px]">
                        <span className='text-[#424242] font-semibold'>01</span>

                        <div className="cnct-happens-text w-[410px] ">
                            <h3 className='text-[white]'>WE READ THE ROOM</h3>

                            <p className='font-normal text-18 text-[white] mt-[20px]'>Your message doesn&apos;t disappear into an inbox. We actually read it, understand the context, and look at what you&apos;re trying to achieve before we come back to you.</p>
                        </div>
                    </div>

                    <div className="cnct-happens-card cnct-happens-card-2 border-t w-[180px] border-[#E8DB7D] flex items-start justify-between pt-[20px] opacity-[50%]">
                        <span className='text-[#424242] font-semibold'>02</span>

                        <div className="cnct-happens-text w-[410px] hidden">
                            <h3 className='text-[white]'>YOU HEAR FROM A HUMAN</h3>

                            <p className='font-normal text-18 text-[white] mt-[20px]'>Within 24 hours, you&apos;ll hear back from a real member of the RarePixels team. No bots. No copy-paste replies. Just a thoughtful response to what you actually told us.</p>
                        </div>
                    </div>

                    <div className="cnct-happens-card cnct-happens-card-3 border-t w-[180px] border-[#E8DB7D] flex items-start justify-between pt-[20px] opacity-[50%]">
                        <span className='text-[#424242] font-semibold'>03</span>

                        <div className="cnct-happens-text w-[410px] hidden">
                            <h3 className='text-[white]'>LET&apos;S TALK IT THROUGH</h3>

                            <p className='font-normal text-18 text-[white] mt-[20px]'>If there&apos;s a potential fit, we get on a 30-minute discovery call. You bring the challenge. We bring questions, ideas, and an honest perspective. No pressure. No hard sell.</p>
                        </div>
                    </div>

                    <div className="cnct-happens-card cnct-happens-card-4 border-t w-[180px] border-[#E8DB7D] flex items-start justify-between pt-[20px] opacity-[50%]">
                        <span className='text-[#424242] font-semibold'>04</span>

                        <div className="cnct-happens-text w-[410px] hidden">
                            <h3 className='text-[white]'>YOUR PROJECT, YOUR PROPOSAL</h3>

                            <p className='font-normal text-18 text-[white] mt-[20px]'>If we&apos;re the right fit, we build a proposal around your project, not a recycled template. Scope, timelines, investment, and approach, all shaped around what you actually need.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactWhatHappen