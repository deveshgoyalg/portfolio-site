import { Link } from 'react-router-dom';

const presets = [
    { id: 1, title: 'Cinematic LUTs Pack', price: '$29', type: 'LUT', image: 'https://images.unsplash.com/photo-1533142296043-059ad2a488e0?w=800&q=80', desc: '25 handcrafted LUTs for cinematic color grading' },
    { id: 2, title: 'Glitch Transitions', price: '$19', type: 'SFX', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80', desc: '40 unique glitch and distortion transitions' },
    { id: 3, title: 'Social Media Templates', price: '$39', type: 'MOGRT', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80', desc: '30 animated templates for Instagram & TikTok' },
    { id: 4, title: 'Film Grain Overlays', price: '$15', type: 'OVERLAY', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80', desc: '20 authentic 35mm film grain overlays' },
    { id: 5, title: 'Sound Effects Bundle', price: '$24', type: 'AUDIO', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80', desc: '200+ professional sound effects and whooshes' },
    { id: 6, title: 'Title Animations', price: '$34', type: 'MOGRT', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80', desc: '15 kinetic typography title templates' },
    { id: 7, title: 'Color Presets Pack', price: '$22', type: 'LUT', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80', desc: '30 color correction presets for any mood' },
    { id: 8, title: 'Lower Thirds Pack', price: '$28', type: 'MOGRT', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80', desc: '20 animated lower thirds for any project' },
    { id: 9, title: 'Ambient Music Pack', price: '$35', type: 'AUDIO', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80', desc: '10 royalty-free ambient tracks for videos' },
];

const features = [
    { icon: '⚡', title: 'Instant Download', desc: 'Get your files immediately after purchase. No waiting.' },
    { icon: '🔄', title: 'Free Updates', desc: 'All future updates included with your purchase for life.' },
    { icon: '🎓', title: 'Tutorial Included', desc: 'Video walkthroughs showing how to use each asset.' },
    { icon: '💬', title: 'Direct Support', desc: 'Get help directly from the creator if you need it.' },
    { icon: '✅', title: 'Commercial License', desc: 'Use in client work and commercial projects freely.' },
    { icon: '📦', title: 'Bulk Discounts', desc: 'Save 25% when you grab 3 or more packs together.' },
];

const Presets = () => {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container">

                {/* Hero Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div className="section-label fade-in" style={{ justifyContent: 'center' }}>Marketplace</div>
                    <h1 className="fade-in delay-1" style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(3rem, 8vw, 7rem)',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.04em',
                        lineHeight: 0.95,
                        marginBottom: '24px'
                    }}>
                        Digital<br /><span className="gradient-text">Assets</span>
                    </h1>
                    <p className="fade-in delay-2" style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
                        Premium editing resources crafted from years of professional experience.
                        Save hours on every project.
                    </p>
                </div>

                {/* Features Grid */}
                <section className="section" style={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0 }}>
                    <div className="preset-features-grid">
                        {features.slice(0, 3).map((feature, i) => (
                            <div key={i} className={`preset-feature fade-in delay-${i + 1}`}>
                                <div className="preset-feature__icon">{feature.icon}</div>
                                <div className="preset-feature__title">{feature.title}</div>
                                <div className="preset-feature__desc">{feature.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Products Grid */}
                <div className="section-header fade-in">
                    <div className="section-label">Shop</div>
                    <h2 className="section-title">All Products</h2>
                </div>

                <div className="presets-grid">
                    {presets.map((item, i) => (
                        <div key={item.id} className={`preset-card fade-in delay-${(i % 5) + 1}`}>
                            <div className="preset-card__image-wrap">
                                <img src={item.image} alt={item.title} className="preset-card__image" />
                                <div className="preset-card__type">{item.type}</div>
                            </div>
                            <div className="preset-card__body">
                                <div className="preset-card__title">{item.title}</div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '12px' }}>{item.desc}</p>
                                <div className="preset-card__price">{item.price}</div>
                                <button className="preset-card__btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Why Choose Section */}
                <section className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <div className="section-header fade-in" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
                        <div className="section-label" style={{ justifyContent: 'center' }}>Benefits</div>
                        <h2 className="section-title">Why My Assets</h2>
                    </div>

                    <div className="services-grid">
                        {features.map((feature, i) => (
                            <div key={i} className={`service-card fade-in delay-${(i % 5) + 1}`}>
                                <div className="service-card__number">{String(i + 1).padStart(2, '0')}</div>
                                <div className="service-card__icon">{feature.icon}</div>
                                <div className="service-card__content">
                                    <h3 className="service-card__title">{feature.title}</h3>
                                    <p className="service-card__desc">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bundle CTA */}
                <section className="cta-section grain" style={{ borderRadius: 'var(--radius)', border: '1px solid var(--glass-border)' }}>
                    <div className="cta-content fade-in">
                        <h2 className="cta-title">Get the <span className="gradient-text">Complete Bundle</span></h2>
                        <p className="cta-desc">
                            All 9 packs together at 40% off. Everything you need to create professional content, instantly.
                        </p>
                        <div style={{ marginBottom: '20px' }}>
                            <span style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                                fontWeight: 900,
                                background: 'var(--accent-gradient)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>$149</span>
                            <span style={{ color: 'var(--text-muted)', textDecoration: 'line-through', marginLeft: '12px' }}>$246</span>
                        </div>
                        <div className="hero__actions" style={{ justifyContent: 'center' }}>
                            <button className="btn-primary">
                                Get the Bundle →
                            </button>
                            <Link to="/portfolio#contact" className="btn-secondary">
                                Custom Request
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Presets;
