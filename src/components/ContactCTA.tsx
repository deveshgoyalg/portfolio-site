const ContactCTA = () => {
    return (
        <section id="contact" className="relative py-32 px-6 md:px-20">
            <div className="max-w-3xl mx-auto text-center">

                <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase mb-6">03 — Contact</p>

                <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
                    Let's Build<br />
                    <span className="text-muted">Something Real</span>
                </h2>

                <p className="text-muted font-light leading-relaxed max-w-lg mx-auto mb-12">
                    Available for documentary projects, long-form content, and editorial collaborations.
                    Serious inquiries only.
                </p>

                <form className="max-w-md mx-auto space-y-6 text-left">
                    <div>
                        <label className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase block mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full bg-transparent border-b border-surface-border py-3 text-primary font-light focus:border-accent focus:outline-none transition-colors duration-500"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase block mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full bg-transparent border-b border-surface-border py-3 text-primary font-light focus:border-accent focus:outline-none transition-colors duration-500"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase block mb-2">Project Details</label>
                        <textarea
                            rows={4}
                            className="w-full bg-transparent border-b border-surface-border py-3 text-primary font-light focus:border-accent focus:outline-none transition-colors duration-500 resize-none"
                            placeholder="Describe your project..."
                        />
                    </div>
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full py-4 border border-accent text-accent font-mono text-sm tracking-widest uppercase hover:bg-accent hover:text-primary transition-all duration-700"
                        >
                            Send Inquiry
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <footer className="mt-32 pt-12 border-t border-surface-border text-center">
                <p className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
                    © 2024 Devesh Goyal — All Rights Reserved
                </p>
            </footer>
        </section>
    );
};

export default ContactCTA;
