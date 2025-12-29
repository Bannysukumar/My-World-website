import React, { useEffect } from 'react';
import w1 from '../assets/W1.JPG';
import w2 from '../assets/W2.JPG';
import w3 from '../assets/W3.JPG';
import w4 from '../assets/W4.JPG';
import w5 from '../assets/W5.JPG';
import w6 from '../assets/W6.JPG';
import '../App.css';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const features = [
        { icon: '📱', title: 'Post & Share', description: 'Post memes & vines and share with friends & groups. Express yourself and connect with your community.' },
        { icon: '🔍', title: 'Search & Discover', description: 'Search memes and vines across the world and enjoy. Explore trending content and discover new creators.' },
        { icon: '👥', title: 'Follow & Connect', description: 'Follow friends and groups and get notified of their posts. Stay connected with what matters to you.' },
        { icon: '💬', title: 'Chat & Groups', description: 'Chat with friends and groups. Share memes & vines directly in conversations. Create and manage your own groups.' },
        { icon: '✏️', title: 'Create & Edit', description: 'Create & edit new memes & vines with our built-in editor. Unleash your creativity and make amazing content.' },
        { icon: '⭐', title: 'Stories', description: 'Share your moments with Stories. Create engaging visual stories that disappear after 24 hours.' }
    ];

    const screenshots = [
        { img: w1, title: 'Easy Sign Up', description: 'Quick and simple registration process' },
        { img: w2, title: 'Create Groups', description: 'Build communities and connect with friends' },
        { img: w3, title: 'Discover Content', description: 'Browse memes, vines, and trending posts' },
        { img: w4, title: 'Chat & Messages', description: 'Stay connected with friends and groups' },
        { img: w5, title: 'Secure Login', description: 'Phone number verification for security' },
        { img: w6, title: 'Account Recovery', description: 'Easy password reset process' }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">Welcome to <span className="highlight">My World</span></h1>
                            <p className="hero-subtitle">Share memes, vines, and connect with friends. Post, chat, discover trending content, and create amazing content with our built-in editor.</p>
                            <div className="hero-buttons">
                                <a href="#download" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('download'); }}>Download Now</a>
                                <a href="#features" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Learn More</a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <div className="phone-mockup">
                                <div className="phone-screen">
                                    <img src={w3} alt="My World App - Home Feed" className="app-screenshot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <div className="container">
                    <h2 className="section-title">Amazing Features</h2>
                    <p className="section-subtitle">Everything you need to share, connect, and discover</p>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Screenshots Section */}
            <section id="screenshots" className="screenshots">
                <div className="container">
                    <h2 className="section-title">See My World in Action</h2>
                    <p className="section-subtitle">Explore the app through these screenshots</p>
                    <div className="screenshots-grid">
                        {screenshots.map((screenshot, index) => (
                            <div key={index} className="screenshot-item">
                                <img src={screenshot.img} alt={screenshot.title} className="screenshot-img" />
                                <h3>{screenshot.title}</h3>
                                <p>{screenshot.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2 className="section-title">About My World</h2>
                            <p>My World is a modern social media platform designed for sharing memes, vines, and connecting with friends and communities. Whether you're looking to discover trending content, create your own, or stay connected with friends and groups, My World has everything you need.</p>
                            <p>Our platform combines the best features of social networking with powerful content creation tools, making it easy to express yourself and connect with others who share your interests.</p>
                            <div className="about-stats">
                                <div className="stat">
                                    <h3>Easy to Use</h3>
                                    <p>Intuitive interface designed for everyone</p>
                                </div>
                                <div className="stat">
                                    <h3>Fast & Secure</h3>
                                    <p>Built with security and performance in mind</p>
                                </div>
                                <div className="stat">
                                    <h3>Always Free</h3>
                                    <p>Enjoy all features without any cost</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section id="download" className="download">
                <div className="container">
                    <h2 className="section-title">Download My World</h2>
                    <p className="section-subtitle">Coming Soon - We are publishing on Indus App Store and Play Store</p>
                    <div className="download-content">
                        <div className="download-card">
                            <div className="download-icon">📲</div>
                            <h3>Coming Soon</h3>
                            <p>My World will be available soon on Indus App Store and Google Play Store. Stay tuned for updates and be among the first to experience the app!</p>
                            <div className="coming-soon-badges">
                                <div className="store-badge">
                                    <div className="badge-icon">🏪</div>
                                    <span>Indus App Store</span>
                                </div>
                                <div className="store-badge">
                                    <div className="badge-icon">▶️</div>
                                    <span>Google Play Store</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-info">
                        <h3>App Information</h3>
                        <div className="info-grid">
                            <div className="info-item">
                                <strong>App Name:</strong> My World
                            </div>
                            <div className="info-item">
                                <strong>Version:</strong> 1.0
                            </div>
                            <div className="info-item">
                                <strong>Platform:</strong> Android
                            </div>
                            <div className="info-item">
                                <strong>Package:</strong> com.My.World
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

