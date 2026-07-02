"use client"
import { Link } from 'react-scroll';
import { ElementWrapper } from '../clients/client';

const stats = [
    { value: '2.5+', label: 'Years' },
    { value: '10+', label: 'Projects' },
    { value: '15+', label: 'Technologies' },
];

const Hero = () => {
    return (
        <ElementWrapper nameOfTheElement="hero">
            <div className="relative flex flex-col justify-center w-full min-h-screen overflow-hidden select-none">
                <div className="relative max-w-[1180px] mx-auto w-full px-7 pt-32 pb-16">
                    {/* Top metadata row */}
                    <div className="flex justify-between items-center mb-6"
                        style={{ fontSize: '13px', letterSpacing: '2px' }}>
                        <div style={{ overflow: 'hidden' }}>
                            <span className="uppercase font-mono text-[#6b7185] reveal-item" style={{ animationDelay: '0.05s', display: 'block' }}>
                                Portfolio / {new Date().getFullYear()}
                            </span>
                        </div>
                    </div>

                    {/* Giant name */}
                    <h1
                        className="font-bold text-white uppercase w-full"
                        style={{
                            fontSize: 'clamp(3rem, 9.2vw, 11rem)',
                            lineHeight: '0.86',
                            letterSpacing: '-4px',
                            marginTop: '24px',
                        }}
                    >
                        <div style={{ overflow: 'hidden' }}>
                            <div className="reveal-item" style={{ animationDelay: '0.15s' }}>Mudassir</div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <div className="reveal-item" style={{ animationDelay: '0.28s' }}>
                                Khan<span className="text-primary">.</span>
                            </div>
                        </div>
                    </h1>

                    {/* Bottom row: subtitle + stats */}
                    <div className="mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <div>
                            <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
                                <p className="leading-relaxed max-w-md reveal-item"
                                    style={{ fontSize: '16px', color: '#e8eaf0', animationDelay: '0.42s' }}>
                                    Frontend Developer building fast, scalable web
                                    applications with Angular, React &amp; Next.js.
                                </p>
                            </div>
                            <div style={{ overflow: 'hidden' }}>
                                <div className="flex items-center gap-4 flex-wrap reveal-item" style={{ animationDelay: '0.54s' }}>
                                    <Link
                                        to="projects"
                                        smooth offset={-70} duration={600}
                                        className="cursor-pointer bg-primary text-[#06120c] font-semibold hover:bg-primary/80 transition-colors"
                                        style={{ borderRadius: '11px', padding: '14px 24px', fontSize: '15px' }}
                                    >
                                        View my work →
                                    </Link>
                                    <Link
                                        to="contact"
                                        smooth offset={-70} duration={600}
                                        className="cursor-pointer border border-zinc-700 text-white font-semibold hover:border-zinc-400 transition-colors"
                                        style={{ borderRadius: '11px', padding: '14px 24px', fontSize: '15px' }}
                                    >
                                        Get in touch
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-10 lg:gap-14 pb-1">
                            {stats.map(({ value, label }, i) => (
                                <div key={label} style={{ overflow: 'hidden' }}>
                                    <div className="reveal-item" style={{ animationDelay: `${0.64 + i * 0.08}s` }}>
                                        <div className="font-bold text-primary leading-none" style={{ fontSize: '30px' }}>{value}</div>
                                        <div className="mt-2 font-mono uppercase" style={{ fontSize: '14px', color: '#9aa0b4' }}>{label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ElementWrapper>
    );
};

export default Hero;
