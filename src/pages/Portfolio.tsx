import { useState } from 'react';

const projects = [
    { id: 1, title: 'Cinematic Travel Vlog', category: 'Long Form', subtitle: 'Travel • Documentary', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80', large: true },
    { id: 2, title: 'Tech Product Review', category: 'Long Form', subtitle: 'Tech • YouTube', image: 'https://images.unsplash.com/photo-1593642532744-937713517478?w=800&q=80', large: false },
    { id: 3, title: 'Fashion Reel', category: 'Short Form', subtitle: 'Fashion • Instagram', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80', large: false },
    { id: 4, title: 'Brand Story Documentary', category: 'Long Form', subtitle: 'Brand • Film', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80', large: false },
    { id: 5, title: 'TikTok Campaign', category: 'Short Form', subtitle: 'Social • Viral', image: 'https://images.unsplash.com/photo-1552168324-d612d77725e3?w=800&q=80', large: false },
    { id: 6, title: 'Music Video Teaser', category: 'Short Form', subtitle: 'Music • Motion', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80', large: true },
];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container">

                {/* Header */}
                <div className="section-header fade-in">
                    <div className="section-label">Portfolio</div>
                    <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Selected Works</h1>
                </div>

                {/* Filters */}
                <div className="project-filters fade-in delay-1">
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
                                <div className="project-card__arrow">→</div>
                            </div>
                        </div>
                    ))}
                </div>

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
