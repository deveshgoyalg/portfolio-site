const presets = [
    { id: 1, title: 'Cinematic LUTs Pack', price: '$29', type: 'LUT', image: 'https://images.unsplash.com/photo-1533142296043-059ad2a488e0?w=800&q=80' },
    { id: 2, title: 'Glitch Transitions', price: '$19', type: 'SFX', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80' },
    { id: 3, title: 'Social Media Templates', price: '$39', type: 'MOGRT', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80' },
    { id: 4, title: 'Film Grain Overlays', price: '$15', type: 'OVERLAY', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80' },
    { id: 5, title: 'Sound Effects Bundle', price: '$24', type: 'AUDIO', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80' },
    { id: 6, title: 'Title Animations', price: '$34', type: 'MOGRT', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80' },
];

const Presets = () => {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container">

                <div className="section-header fade-in">
                    <div className="section-label">Marketplace</div>
                    <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Digital Assets</h1>
                    <p style={{ color: 'var(--text-muted)', marginTop: '16px', maxWidth: '500px', lineHeight: '1.7' }}>
                        Premium editing resources crafted from years of professional experience.
                    </p>
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
                                <div className="preset-card__price">{item.price}</div>
                                <button className="preset-card__btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Presets;
