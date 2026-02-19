import { Link } from 'react-router-dom';

const marqueeItems = [
    'Video Editing', 'Motion Graphics', 'Color Grading', 'Visual Effects',
    'Short Form', 'Long Form', 'Sound Design', 'Cinematography',
];

const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="fade-in">
                        <div className="hero__badge">
                            Available for Projects
                        </div>
                    </div>

                    <h1 className="hero__title fade-in delay-1">
                        Crafting<br />
                        <span>Visual</span><br />
                        Stories
                    </h1>

                    <p className="hero__desc fade-in delay-2">
                        Video editor & motion graphics artist specializing in high-energy content
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
                </div>

                <div className="hero__scroll-hint">
                    <span>Scroll</span>
                    <span>↓</span>
                </div>
            </section>

            {/* Marquee */}
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

            {/* Stats Section */}
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

            {/* Quick Links */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <div className="section-label">Explore</div>
                        <h2 className="section-title">What I Do</h2>
                    </div>

                    <div className="project-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        {[
                            { title: 'Long Form', desc: 'Documentaries, vlogs, YouTube content', icon: '🎬' },
                            { title: 'Short Form', desc: 'Reels, TikToks, social media clips', icon: '⚡' },
                            { title: 'Motion Graphics', desc: 'Intros, lower thirds, visual effects', icon: '✨' },
                        ].map((service, i) => (
                            <div key={i} className={`project-card fade-in delay-${i + 1}`} style={{ cursor: 'pointer' }}>
                                <div style={{ padding: '48px 32px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{service.icon}</div>
                                    <div className="project-card__title" style={{ textAlign: 'center' }}>{service.title}</div>
                                    <div className="project-card__subtitle" style={{ textAlign: 'center' }}>{service.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
