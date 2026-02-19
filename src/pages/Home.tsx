import { useState } from 'react';
import { Link } from 'react-router-dom';

const marqueeItems = [
    'Video Editing', 'Motion Graphics', 'Color Grading', 'Visual Effects',
    'Short Form', 'Long Form', 'Sound Design', 'Cinematography',
];

const featuredWork = [
    { title: 'Cinematic Travel Vlog', category: 'Long Form', subtitle: 'Travel • Documentary', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80' },
    { title: 'Brand Story Documentary', category: 'Long Form', subtitle: 'Brand • Film', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=80' },
    { title: 'Fashion Campaign', category: 'Short Form', subtitle: 'Fashion • Social', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=900&q=80' },
    { title: 'Music Video Teaser', category: 'Short Form', subtitle: 'Music • Motion', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80' },
];

const testimonials = [
    { name: 'Alex Chen', role: 'Founder, Vibe Media', quote: 'Devesh transformed our raw footage into a cinematic masterpiece. The attention to detail and pacing was incredible.' },
    { name: 'Sarah Williams', role: 'Content Creator', quote: 'Working with Devesh elevated our brand content to a whole new level. Every edit feels intentional and polished.' },
    { name: 'Marcus Johnson', role: 'Marketing Director', quote: 'Fast turnaround, exceptional quality. Our engagement metrics doubled after switching to Devesh for our video content.' },
];

const processSteps = [
    { step: '01', title: 'Discovery', desc: 'We discuss your vision, goals, and target audience to align on the creative direction.' },
    { step: '02', title: 'Strategy', desc: 'I develop an editing plan — pacing, mood, transitions, and sound design tailored to your brand.' },
    { step: '03', title: 'Production', desc: 'The edit comes to life with precision cuts, color grading, motion graphics, and sound mixing.' },
    { step: '04', title: 'Delivery', desc: 'Final review, revisions, and delivery in all formats you need — social, web, broadcast.' },
];

const services = [
    { num: '01', title: 'Long Form Editing', desc: 'Documentaries, vlogs, YouTube videos, corporate films — narrative-driven content with cinematic quality.', icon: '🎬' },
    { num: '02', title: 'Short Form Content', desc: 'Reels, TikToks, Shorts — punchy, scroll-stopping edits optimized for algorithms and engagement.', icon: '⚡' },
    { num: '03', title: 'Motion Graphics', desc: 'Custom intros, lower thirds, animated logos, kinetic typography, and data visualizations.', icon: '✨' },
    { num: '04', title: 'Color Grading', desc: 'Professional color science and LUT development to give your footage a distinctive cinematic look.', icon: '🎨' },
    { num: '05', title: 'Sound Design', desc: 'Audio mixing, sound effects, music selection, and voiceover integration for immersive experiences.', icon: '🎧' },
    { num: '06', title: 'Content Strategy', desc: 'Platform-specific optimization, series planning, and content calendars to grow your audience.', icon: '📊' },
];

const tools = [
    { icon: '🎬', name: 'Premiere Pro' },
    { icon: '✨', name: 'After Effects' },
    { icon: '🎨', name: 'DaVinci Resolve' },
    { icon: '🧊', name: 'Cinema 4D' },
    { icon: '🖼️', name: 'Photoshop' },
];

const brands = ['YouTube Creators', 'Warpspeed', 'Vibe Media', 'Neon Studios', 'FluxDigital'];

const faqs = [
    { q: 'What is your typical turnaround time?', a: 'Most projects are completed within 5–10 business days, depending on complexity. Rush deliveries are also available for urgent timelines.' },
    { q: 'What file formats do you deliver in?', a: 'I deliver in all major formats — MP4, MOV, ProRes, and can optimize for any platform including YouTube, Instagram, TikTok, and broadcast.' },
    { q: 'Do you offer revision rounds?', a: 'Yes! Every project includes 2 revision rounds. Additional revisions can be discussed based on scope.' },
    { q: 'Can you work with raw footage from any camera?', a: 'Absolutely. I work with footage from RED, ARRI, Blackmagic, Sony, Canon, DJI drones, and smartphones.' },
    { q: 'Do you handle music licensing?', a: 'I can source royalty-free music or work with your licensed tracks. I also partner with music libraries for premium selections.' },
];

const Home = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            {/* ===== HERO ===== */}
            <section className="hero grain">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="fade-in">
                        <div className="hero__badge" style={{ display: 'inline-flex' }}>
                            Available for Projects
                        </div>
                    </div>

                    <div className="hero__massive-text fade-in delay-1">
                        <div className="outline">DEVESH</div>
                        <div className="accent">CREATIVE</div>
                        <div>EDITOR</div>
                    </div>

                    <p className="hero__desc fade-in delay-2">
                        Video editor &amp; motion graphics artist specializing in high-energy content
                        that captures attention and drives engagement. From cinematic long-form
                        to viral short-form.
                    </p>

                    <div className="hero__actions fade-in delay-3">
                        <Link to="/portfolio" className="btn-primary">
                            View Work →
                        </Link>
                        <Link to="/portfolio#contact" className="btn-secondary">
                            Get in Touch
                        </Link>
                    </div>

                    <div className="hero__services fade-in delay-4">
                        {['Video Editing', 'Motion Graphics', 'Color Grading', 'Sound Design'].map((s) => (
                            <span className="hero__service-tag" key={s}>{s}</span>
                        ))}
                    </div>
                </div>

                <div className="hero__scroll-hint">
                    <span>Scroll</span>
                    <span>↓</span>
                </div>
            </section>

            {/* ===== MARQUEE ===== */}
            <div className="marquee">
                <div className="marquee__inner">
                    {[...Array(3)].map((_, repeat) => (
                        marqueeItems.map((item, i) => (
                            <span className="marquee__item" key={`${repeat}-${i}`}>
                                <span>✦</span> {item}
                            </span>
                        ))
                    ))}
                </div>
            </div>

            {/* ===== STATS ===== */}
            <section className="stats-section">
                <div className="stats-grid">
                    <div className="stat-item fade-in">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Projects Delivered</div>
                    </div>
                    <div className="stat-item fade-in delay-1">
                        <div className="stat-number">2M+</div>
                        <div className="stat-label">Views Generated</div>
                    </div>
                    <div className="stat-item fade-in delay-2">
                        <div className="stat-number">30+</div>
                        <div className="stat-label">Happy Clients</div>
                    </div>
                    <div className="stat-item fade-in delay-3">
                        <div className="stat-number">3+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                </div>
            </section>

            {/* ===== SHOWREEL ===== */}
            <section className="showreel-section">
                <div className="container">
                    <div className="section-header fade-in" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
                        <div className="section-label" style={{ justifyContent: 'center' }}>Showreel</div>
                        <h2 className="section-title">See It In Action</h2>
                    </div>

                    <div className="showreel-wrap fade-in delay-1">
                        <img
                            src="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80"
                            alt="Showreel thumbnail"
                        />
                        <div className="showreel-overlay">
                            <div className="showreel-play">▶</div>
                            <div className="showreel-label">Watch Showreel</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BRANDS ===== */}
            <div className="brands-section">
                <div className="container">
                    <div className="brands-label">Trusted By</div>
                    <div className="brands-grid">
                        {brands.map((brand) => (
                            <div className="brand-item" key={brand}>{brand}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== WHAT I DO ===== */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <div className="section-label">Capabilities</div>
                        <h2 className="section-title">What I Do</h2>
                    </div>

                    <div className="services-grid">
                        {services.map((service, i) => (
                            <div key={i} className={`service-card fade-in delay-${(i % 5) + 1}`}>
                                <div className="service-card__number">{service.num}</div>
                                <div className="service-card__icon">{service.icon}</div>
                                <div className="service-card__content">
                                    <h3 className="service-card__title">{service.title}</h3>
                                    <p className="service-card__desc">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== RED MARQUEE (Zayla-style) ===== */}
            <div className="marquee marquee--red">
                <div className="marquee__inner">
                    {[...Array(4)].map((_, repeat) => (
                        ['SELECTED WORK', 'PORTFOLIO', 'CASE STUDIES'].map((item, i) => (
                            <span className="marquee__item" key={`red-${repeat}-${i}`}>
                                <span>✦</span> {item}
                            </span>
                        ))
                    ))}
                </div>
            </div>

            {/* ===== FEATURED WORK ===== */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <div className="section-label">Portfolio</div>
                        <h2 className="section-title">Featured Work</h2>
                    </div>

                    <div className="featured-grid">
                        {featuredWork.map((project, i) => (
                            <Link to="/portfolio" key={i} className={`featured-card fade-in delay-${i + 1}`}>
                                <div className="featured-card__image-wrap">
                                    <img src={project.image} alt={project.title} className="featured-card__image" />
                                    <div className="featured-card__overlay">
                                        <span className="featured-card__tag">{project.category}</span>
                                        <div className="featured-card__info">
                                            <h3 className="featured-card__title">{project.title}</h3>
                                            <p className="featured-card__subtitle">{project.subtitle}</p>
                                        </div>
                                        <div className="featured-card__arrow">→</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="fade-in delay-3" style={{ textAlign: 'center', marginTop: '48px' }}>
                        <Link to="/portfolio" className="btn-secondary">
                            View All Projects →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== ABOUT ===== */}
            <section className="section about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image-wrap fade-in">
                            <img
                                src="https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&q=80"
                                alt="Video editing workspace"
                                className="about-image"
                            />
                            <div className="about-image__accent"></div>
                        </div>
                        <div className="about-content fade-in delay-2">
                            <div className="section-label">About</div>
                            <h2 className="section-title" style={{ marginBottom: '24px' }}>
                                Turning Raw Footage Into<br />Visual Gold
                            </h2>
                            <p className="about-text">
                                I'm a video editor and motion graphics artist with a passion for storytelling
                                through visuals. Every project I take on gets the same treatment — meticulous
                                attention to pacing, color, sound, and emotion.
                            </p>
                            <p className="about-text">
                                Whether it's a 60-second reel or a 60-minute documentary, I bring the same
                                energy and craft to every frame. My work has generated millions of views
                                and helped brands connect with their audiences on a deeper level.
                            </p>
                            <div className="about-tools">
                                <span className="about-tool">Premiere Pro</span>
                                <span className="about-tool">After Effects</span>
                                <span className="about-tool">DaVinci Resolve</span>
                                <span className="about-tool">Cinema 4D</span>
                                <span className="about-tool">Photoshop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TOOLS SECTION ===== */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
                        <div className="section-label" style={{ justifyContent: 'center' }}>Arsenal</div>
                        <h2 className="section-title">Tools I Use</h2>
                    </div>

                    <div className="tools-grid">
                        {tools.map((tool, i) => (
                            <div key={i} className={`tool-card fade-in delay-${i + 1}`}>
                                <div className="tool-card__icon">{tool.icon}</div>
                                <div className="tool-card__name">{tool.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROCESS ===== */}
            <section className="section grain">
                <div className="container">
                    <div className="section-header fade-in" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px' }}>
                        <div className="section-label" style={{ justifyContent: 'center' }}>Workflow</div>
                        <h2 className="section-title">How I Work</h2>
                    </div>

                    <div className="process-grid">
                        {processSteps.map((item, i) => (
                            <div key={i} className={`process-card fade-in delay-${i + 1}`}>
                                <div className="process-card__number">{item.step}</div>
                                <h3 className="process-card__title">{item.title}</h3>
                                <p className="process-card__desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <div className="section-label">Testimonials</div>
                        <h2 className="section-title">What Clients Say</h2>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className={`testimonial-card fade-in delay-${i + 1}`}>
                                <div className="testimonial-card__quote">"</div>
                                <p className="testimonial-card__text">{t.quote}</p>
                                <div className="testimonial-card__author">
                                    <div className="testimonial-card__avatar">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="testimonial-card__name">{t.name}</div>
                                        <div className="testimonial-card__role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
                        <div className="section-label" style={{ justifyContent: 'center' }}>FAQ</div>
                        <h2 className="section-title">Common Questions</h2>
                    </div>

                    <div className="faq-grid">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`faq-item ${openFaq === i ? 'faq-item--open' : ''} fade-in delay-${(i % 5) + 1}`}>
                                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    {faq.q}
                                    <span className="faq-toggle">+</span>
                                </button>
                                <div className="faq-answer">
                                    <p className="faq-answer__text">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== MARQUEE 2 ===== */}
            <div className="marquee">
                <div className="marquee__inner">
                    {[...Array(3)].map((_, repeat) => (
                        marqueeItems.map((item, i) => (
                            <span className="marquee__item" key={`m2-${repeat}-${i}`}>
                                <span>✦</span> {item}
                            </span>
                        ))
                    ))}
                </div>
            </div>

            {/* ===== CTA ===== */}
            <section className="cta-section grain">
                <div className="container">
                    <div className="cta-content fade-in">
                        <h2 className="cta-title">Ready to Create<br /><span className="gradient-text">Something Amazing?</span></h2>
                        <p className="cta-desc">
                            Let's bring your vision to life. Whether it's a brand film, social campaign,
                            or creative project — I'm ready to make it happen.
                        </p>
                        <div className="hero__actions" style={{ justifyContent: 'center' }}>
                            <Link to="/portfolio#contact" className="btn-primary">
                                Start a Project →
                            </Link>
                            <Link to="/presets" className="btn-secondary">
                                Browse Assets
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
