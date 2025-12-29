import React, { useEffect } from 'react';
import '../App.css';
import './Policy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="about policy-page">
            <div className="container">
                <h1 className="section-title">Privacy Policy</h1>
                <p className="last-updated">Last Updated: December 2024</p>
                
                <div className="policy-content">
                    <p>
                        At My World, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
                    </p>

                    <h2>1. Information We Collect</h2>
                    
                    <h3>1.1 Information You Provide</h3>
                    <p>We collect information that you provide directly to us, including:</p>
                    <ul>
                        <li>Account information (username, email address, phone number)</li>
                        <li>Profile information (name, bio, profile picture, location)</li>
                        <li>Content you post (memes, vines, stories, comments)</li>
                        <li>Messages and communications with other users</li>
                        <li>Group information and participation</li>
                    </ul>

                    <h3>1.2 Automatically Collected Information</h3>
                    <p>We automatically collect certain information when you use our app:</p>
                    <ul>
                        <li>Device information (device type, operating system, unique device identifiers)</li>
                        <li>Usage data (features used, time spent, interactions)</li>
                        <li>Log information (IP address, access times, app crashes)</li>
                        <li>Location information (if you choose to enable location services)</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, maintain, and improve our services</li>
                        <li>Create and manage your account</li>
                        <li>Enable communication between users</li>
                        <li>Send you notifications about activity on your account</li>
                        <li>Personalize your experience</li>
                        <li>Detect and prevent fraud, abuse, and security issues</li>
                        <li>Comply with legal obligations</li>
                        <li>Analyze usage patterns to improve our app</li>
                    </ul>

                    <h2>3. Information Sharing and Disclosure</h2>
                    <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                    <ul>
                        <li><strong>Public Content:</strong> Information you post publicly (posts, comments, profile information) is visible to other users</li>
                        <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf (hosting, analytics, customer support)</li>
                        <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                        <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
                    </ul>

                    <h2>4. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                    </p>

                    <h2>5. Your Rights and Choices</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access and update your account information</li>
                        <li>Delete your account and associated data</li>
                        <li>Control privacy settings for your content</li>
                        <li>Opt-out of certain communications</li>
                        <li>Request a copy of your data</li>
                    </ul>

                    <h2>6. Children's Privacy</h2>
                    <p>
                        My World is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information.
                    </p>

                    <h2>7. Third-Party Services</h2>
                    <p>
                        Our app may contain links to third-party services or integrate with third-party services (such as Firebase, Google Play Services). These services have their own privacy policies, and we encourage you to review them.
                    </p>

                    <h2>8. Data Retention</h2>
                    <p>
                        We retain your information for as long as your account is active or as needed to provide services. We may retain certain information for legitimate business purposes or as required by law.
                    </p>

                    <h2>9. International Data Transfers</h2>
                    <p>
                        Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country.
                    </p>

                    <h2>10. Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically.
                    </p>

                    <h2>11. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <p>
                        <strong>Email:</strong> <a href="/contact">Contact Us</a><br />
                        <strong>App:</strong> My World (com.My.World)
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;

