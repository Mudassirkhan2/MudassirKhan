"use client"
import { ElementWrapper } from '../clients/client';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

const socialLinks = [
    { href: 'https://www.linkedin.com/in/mudassir-khan-522303233/', icon: FaLinkedinIn, label: 'LinkedIn' },
    { href: 'https://github.com/Mudassirkhan2', icon: FaGithub, label: 'GitHub' },
    { href: 'mailto:mudassir222001@gmail.com', icon: FaEnvelope, label: 'Email' },
    { href: 'https://twitter.com/Mudassir_222', icon: FaTwitter, label: 'X' },
];

const Contact = () => {
    return (
        <ElementWrapper nameOfTheElement="contact">
            <section className='relative max-w-6xl px-4 mx-auto py-28 text-center'>
                <p className="text-primary font-mono text-sm tracking-widest mb-6">// contact</p>

                <h2 className="font-bold text-white leading-tight mb-6"
                    style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                    Let&apos;s build something<br />great together.
                </h2>

                <p className="text-zinc-400 text-base max-w-md mx-auto mb-10 leading-relaxed">
                    Open to frontend roles and freelance work. The fastest way to reach me
                    is email — I usually reply within a day.
                </p>

                <a
                    href="mailto:mudassir222001@gmail.com"
                    className="inline-block px-8 py-4 bg-primary text-black font-semibold rounded-md hover:bg-primary/80 transition-colors text-sm mb-12"
                >
                    mudassir222001@gmail.com
                </a>

                {/* Social icons */}
                <div className="flex items-center justify-center gap-4">
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all duration-200"
                        >
                            <Icon size={16} />
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-zinc-600 text-xs">
                    <span>© {new Date().getFullYear()} Mudassir Khan</span>
                    <a href="mailto:mudassir222001@gmail.com" className="hover:text-primary transition-colors duration-200">Get in touch →</a>
                </div>
            </section>
        </ElementWrapper>
    );
};

export default Contact;
