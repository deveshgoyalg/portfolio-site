import { useState } from 'react';

const projects = [
    { id: 1, title: 'Cinematic Travel Vlog', category: 'Long Form', subtitle: 'Travel • Documentary', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80', large: true },
    { id: 2, title: 'Tech Product Review', category: 'Long Form', subtitle: 'Tech • YouTube', image: 'https://images.unsplash.com/photo-1593642532744-937713517478?w=800&q=80', large: false },
    { id: 3, title: 'Fashion Reel', category: 'Short Form', subtitle: 'Fashion • Instagram', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80', large: false },
    { id: 4, title: 'Brand Story Documentary', category: 'Long Form', subtitle: 'Brand • Film', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80', large: false },
    { id: 5, title: 'TikTok Campaign', category: 'Short Form', subtitle: 'Social • Viral', image: 'https://images.unsplash.com/photo-1552168324-d612d77725e3?w=800&q=80', large: false },
    { id: 6, title: 'Music Video Teaser', category: 'Short Form', subtitle: 'Music • Motion', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80', large: true },
    { id: 7, title: 'Corporate Brand Film', category: 'Long Form', subtitle: 'Corporate • Branding', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80', large: false },
    { id: 8, title: 'Instagram Ad Campaign', category: 'Short Form', subtitle: 'Ads • Social', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80', large: false },
];

const projectStats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '8', label: 'Industries Served' },
    { number: '100%', label: 'Client Satisfaction' },
];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container">

                {/* Hero Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div className="section-label fade-in" style={{ justifyContent: 'center' }}>Portfolio</div>
                    <h1 className="fade-in delay-1" style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(3rem, 8vw, 7rem)',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.04em',
                        lineHeight: 0.95,
                        marginBottom: '24px'
                    }}>
                        Selected<br /><span className="gradient-text">Works</span>
                    </h1>
                    <p className="fade-in delay-2" style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
                        A curated collection of projects spanning cinematic long-form,
                        viral short-form, and everything in between.
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="stats-grid fade-in delay-2" style={{ marginBottom: '60px' }}>
                    {projectStats.map((stat, i) => (
                        <div className="stat-item" key={i} style={{
                            borderRadius: i === 0 ? 'var(--radius) 0 0 var(--radius)' :
                                i === projectStats.length - 1 ? '0 var(--radius) var(--radius) 0' : '0'
                        }}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div className="project-filters fade-in delay-3">
                    {['All', 'Long Form', 'Short Form'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`project-filter ${filter === cat ? 'project-filter--active' : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="project-grid">
                    {filtered.map((project, i) => (
                        <div
                            key={project.id}
                            className={`project-card fade-in delay-${(i % 5) + 1} ${project.large ? 'project-card--large' : ''}`}
                        >
                            <div className="project-card__image-wrap">
                                <img src={project.image} alt={project.title} className="project-card__image" />
                                <div className="project-card__tag">{project.category}</div>
                            </div>
                            <div className="project-card__body">
                                <div>
                                    <div className="project-card__title">{project.title}</div>
                                    <div className="project-card__subtitle">{project.subtitle}</div>
                                </div>
                                <button className="project-card__view-btn">View Project</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Approach Section */}
                <section className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <div className="section-header fade-in">
                        <div className="section-label">Approach</div>
                        <h2 className="section-title">Every Frame Matters</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                        {[
                            { title: 'Story First', desc: 'Every edit starts with understanding the narrative. I find the emotional core and build around it.', icon: '📖' },
                            { title: 'Pixel Perfect', desc: 'Color accuracy, smooth transitions, and precise timing. The details make the difference.', icon: '🎯' },
                            { title: 'Platform Native', desc: 'Optimized for where your content lives — aspect ratios, captions, hooks, and pacing.', icon: '📱' },
                        ].map((item, i) => (
                            <div key={i} className={`service-card fade-in delay-${i + 1}`}>
                                <div className="service-card__icon">{item.icon}</div>
                                <div className="service-card__content">
                                    <h3 className="service-card__title">{item.title}</h3>
                                    <p className="service-card__desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <div id="contact" className="contact-section fade-in">
                    <div className="section-header">
                        <div className="section-label">Contact</div>
                        <h2 className="section-title">Let's Create Together</h2>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="contact-grid">
                            <div className="form-field">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-input" placeholder="Your name" />
                            </div>
                            <div className="form-field">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" placeholder="your@email.com" />
                            </div>
                            <div className="form-field form-field--full">
                                <label className="form-label">Project Type</label>
                                <select className="form-select">
                                    <option>Long Form Content</option>
                                    <option>Short Form / Reels</option>
                                    <option>Motion Graphics</option>
                                    <option>Full Production</option>
                                </select>
                            </div>
                            <div className="form-field form-field--full">
                                <label className="form-label">Budget Range</label>
                                <select className="form-select">
                                    <option>Under $500</option>
                                    <option>$500 - $1,000</option>
                                    <option>$1,000 - $5,000</option>
                                    <option>$5,000+</option>
                                </select>
                            </div>
                            <div className="form-field form-field--full">
                                <label className="form-label">Tell me about your project</label>
                                <textarea className="form-textarea" placeholder="Describe your vision..." rows={5}></textarea>
                            </div>
                            <button type="submit" className="form-submit">
                                Send Message →
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
