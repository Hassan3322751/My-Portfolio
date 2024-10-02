import React from "react";

function article_1() {
	return {
		date: "2 Oct 2024",
		title: "E-Commerce Project",
		description:
			"E-Commerce website with infinite scrolling and integrated payment gateways, complete with user and admin controls.",
		keywords: [
			"E-Commerce",
			"Stripe",
			"Jazz-Cash",
			"Infinite-Scrolling",
		],
		style: `
				article {
					background-color: #f9f9f9;
					padding: 1rem;
					border-radius: 8px;
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
				}

				section {
					margin-bottom: 2rem;
				}

				h2 {
					font-size: 1.5rem;
					margin-bottom: 1rem;
					color: #333;
				}

				h3 {
					font-size: 1.2rem;
					margin-bottom: 0.5rem;
					color: #333;
				}

				p {
					color: #666;
				}

				ul, ol {
					margin: 0;
					padding: 0;
					list-style-type: none;
				}
			`,
		body: (
			<React.Fragment>
				<article>
					<section>
						<h2>Introduction</h2>
						<p>In today's digital age, creating an engaging and user-friendly E-Commerce platform is crucial for businesses aiming to thrive online. This article dives into the development journey of building a responsive E-Commerce website, featuring innovative features like infinite scrolling and integrated payment gateways.</p>
					</section>
					<section>
						<h2>Key Features</h2>
						<ol>
							<li>
								<h3>Responsive Design</h3>
								<p>Ensuring a seamless user experience across devices, from desktops to smartphones, with a fluid and adaptable layout.</p>
							</li>
							<li>
								<h3>Infinite Scrolling</h3>
								<p>Enhancing user engagement by loading products dynamically as the user scrolls, eliminating the need for traditional pagination.</p>
							</li>
							<li>
								<h3>Integrated Payment Gateways</h3>
								<p>Facilitating secure transactions with popular payment methods, providing a smooth checkout process for customers.</p>
							</li>
							<li>
								<h3>User and Admin Controls</h3>
								<p>Empowering both users and administrators with intuitive controls to manage orders, products, and account settings efficiently.</p>
							</li>
						</ol>
					</section>
					<section>
						<h2>Technologies Used</h2>
						<ul>
							<li>Frontend: HTML5, CSS3 and React.js for responsive design, and JavaScript for dynamic functionality.</li>
							<li>Backend: Node.js and Express.js for server-side logic, MongoDB for scalable database management.</li>
							<li>Payment Gateways: Integration of secure payment solutions to ensure seamless transactions.</li>
						</ul>
					</section>
					<section>
						<h2>Conclusion</h2>
						<p>The development of a responsive E-Commerce website with infinite scrolling and integrated payment gateways represents a significant milestone in creating a modern and efficient online shopping experience. By leveraging advanced technologies and focusing on user-centric design principles, this project aims to set new standards in E-Commerce accessibility and functionality.</p>
					</section>
				</article>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "2 Oct 2024",
		title: "Social-Boost",
		description:
			"Monetizaiton web for social-media: secure login, Instagram & YouTube APIs, referral system, and personalized dashboards for each social-media account.",
		style: ``,
		keywords: [
			"Social-Boost",
			"Youtube",
			"Instagram",
			"Tiktok",
		],
		style: `
		article {
			background-color: #f9f9f9;
			padding: 1rem;
			border-radius: 8px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		}

		section {
			margin-bottom: 2rem;
		}

		h2 {
			font-size: 1.5rem;
			margin-bottom: 1rem;
			color: #333;
		}

		h3 {
			font-size: 1.2rem;
			margin-bottom: 0.5rem;
			color: #333;
		}

		p {
			color: #666;
		}

		ul, ol {
			margin: 0;
			padding: 0;
			list-style-type: none;
		}
	`,
		body: (
			<React.Fragment>
				<article>
					<section>
						<h2>Introduction</h2>
						<p>Explore our innovative platform designed for monetizing social media accounts. This article delves into the features and functionalities of our secure login system, integrated Instagram and YouTube APIs, referral system, and personalized dashboards for each social media account.</p>
					</section>
					<section>
						<h2>Key Features</h2>
						<ol>
							<li>
								<h3>Secure Login</h3>
								<p>Ensure secure access with our robust login system, protecting user accounts and data.</p>
							</li>
							<li>
								<h3>Instagram & YouTube APIs</h3>
								<p>Integrate seamlessly with Instagram and YouTube APIs to facilitate interactions and growth on social media platforms.</p>
							</li>
							<li>
								<h3>Referral System</h3>
								<p>Incentivize growth with a powerful referral system, allowing users to earn rewards for expanding their network.</p>
							</li>
							<li>
								<h3>Personalized Dashboards</h3>
								<p>Empower users with customized dashboards, providing insights and analytics for effective management of social media accounts.</p>
							</li>
						</ol>
					</section>
					<section>
						<h2>Technologies Used</h2>
						<ul>
							<li>Frontend: HTML5, CSS3, React+Vite and React-Bootstrap for responsive design, JavaScript for dynamic functionalities.</li>
							<li>Backend: Node.js and Express.js for server-side logic, MongoDB for data management.</li>
							<li>API Integration: Instagram Graph API and YouTube API for seamless social media interactions.</li>
						</ul>
					</section>
					<section>
						<h2>Conclusion</h2>
						<p>Our monetization web application for social media sets a new standard in leveraging technology to enhance social media presence and engagement. By focusing on security, integration, and user-centric design, we empower users to monetize their social media efforts effectively.</p>
					</section>
				</article>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
