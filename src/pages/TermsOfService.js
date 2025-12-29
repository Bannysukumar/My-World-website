import React, { useEffect } from 'react';
import '../App.css';
import './Policy.css';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="about policy-page">
            <div className="container">
                <h1 className="section-title">Terms of Service</h1>
                <p className="last-updated">Last Updated: December 2024</p>
                
                <div className="policy-content">
                    <p>
                        Welcome to My World! These Terms of Service ("Terms") govern your access to and use of the My World mobile application ("App", "Service") operated by Bannysukumar ("we", "us", or "our").
                    </p>
                    <p>
                        By accessing or using our App, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
                    </p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By downloading, installing, or using My World, you agree to comply with and be bound by these Terms of Service. If you do not agree to these Terms, you must not use the App.
                    </p>

                    <h2>2. Eligibility</h2>
                    <p>You must be at least 13 years old to use My World. By using the App, you represent and warrant that:</p>
                    <ul>
                        <li>You are at least 13 years of age</li>
                        <li>You have the legal capacity to enter into these Terms</li>
                        <li>You will comply with all applicable laws and regulations</li>
                        <li>You will not use the App for any illegal or unauthorized purpose</li>
                    </ul>

                    <h2>3. Account Registration</h2>
                    <p>To use certain features of the App, you must register for an account. You agree to:</p>
                    <ul>
                        <li>Provide accurate, current, and complete information during registration</li>
                        <li>Maintain and update your account information</li>
                        <li>Maintain the security of your account credentials</li>
                        <li>Accept responsibility for all activities under your account</li>
                        <li>Notify us immediately of any unauthorized use of your account</li>
                    </ul>

                    <h2>4. User Content</h2>
                    
                    <h3>4.1 Content Ownership</h3>
                    <p>
                        You retain ownership of any content you post, upload, or share on My World ("User Content"). By posting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your User Content for the purpose of operating and promoting the App.
                    </p>

                    <h3>4.2 Content Standards</h3>
                    <p>You agree not to post, upload, or share any User Content that:</p>
                    <ul>
                        <li>Is illegal, harmful, or violates any laws</li>
                        <li>Infringes on intellectual property rights of others</li>
                        <li>Contains hate speech, harassment, or bullying</li>
                        <li>Is pornographic, sexually explicit, or inappropriate</li>
                        <li>Contains spam, scams, or misleading information</li>
                        <li>Violates privacy rights of others</li>
                        <li>Contains viruses or malicious code</li>
                    </ul>

                    <h2>5. Prohibited Activities</h2>
                    <p>You agree not to:</p>
                    <ul>
                        <li>Use the App for any illegal purpose</li>
                        <li>Impersonate any person or entity</li>
                        <li>Harass, abuse, or harm other users</li>
                        <li>Interfere with or disrupt the App or servers</li>
                        <li>Attempt to gain unauthorized access to the App or related systems</li>
                    </ul>

                    <h2>6. Intellectual Property</h2>
                    <p>
                        The App and its original content, features, and functionality are owned by Bannysukumar and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>

                    <h2>7. Privacy</h2>
                    <p>
                        Your use of the App is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
                    </p>

                    <h2>8. Termination</h2>
                    <p>We may terminate or suspend your account and access to the App immediately, without prior notice, for any reason, including if you breach these Terms.</p>

                    <h2>9. Disclaimer of Warranties</h2>
                    <p>
                        THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                    </p>

                    <h2>10. Limitation of Liability</h2>
                    <p>
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
                    </p>

                    <h2>11. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                    </p>

                    <h2>12. Contact Information</h2>
                    <p>
                        If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService;

