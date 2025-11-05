import React, { useState } from 'react';
import { PaginationArrowRightIcon } from './icons/PaginationArrowRightIcon';

export interface Article {
  imageSrc: string;
  categories: string[];
  title: string;
  fullTitle?: string;
  description: string;
  author: string;
  date: string;
  authorImage: string;
  content?: React.ReactNode;
}

const newArticleContent = (
    <>
        <p>Ganesh Chaturthi is a festival of joy, devotion, and togetherness. But once the celebrations end, an equally important responsibility begins — keeping our cities clean, green, and hygienic. At Ixora Group, we believe that true devotion lies not only in prayers but also in caring for our community and environment.</p>

        <h3>Stepping In After the Festivities</h3>
        <p>After the completion of Ganesh Visarjan, when the streets are often left crowded with waste, our Ixora employees stepped in without delay. Within just 24 hours, our team was on-ground, working tirelessly to clear the roads, perform deep cleaning, and restore hygiene across the city.</p>
        <p>This wasn’t justroutine work. It was a mission — a mission to protect the environment, ensure public health, and spread a message of responsible celebration.</p>

        <h3>Leadership by Example</h3>
        <p>What made this initiative even more special was the presence of our leadership. Our CEO, Mr. Abhishek Nath, and Director, Mr. Krishna Chaythaniya, personally monitored the activities day and night. They didn’t just oversee the work — they motivated employees, ensured resources were available, and stood alongside our workers throughout the process.</p>
        <p>This spirit of leading from the front is what defines Ixora Group.</p>

        <h3>Recognition from the Media</h3>
        <p>The dedication of our staff and leaders caught the attention of reputed news outlets including ABN, Andhrajyothi, Sakshi, and Siasat. These platforms not only praised our clean-up efforts but also published articles and images showcasing our team’s hard work and commitment.</p>
        <p>Such recognition strengthens our belief that collective efforts can bring visible change to society.</p>

        <h3>Our Commitment: Clean, Green, Hygienic Cities</h3>
        <p>At Ixora Group, our focus is clear:</p>
        <ul>
            <li>✔️ Cleanliness — Ensuring roads, public spaces, and neighborhoods are spotless.</li>
            <li>✔️ Hygiene — Safeguarding health by maintaining sanitation standards.</li>
            <li>✔️ Greenness — Promoting sustainability and eco-friendly practices.</li>
        </ul>
        <p>Ganesh Visarjan was just one example of how we act on this commitment. With every project, we aim to create cities that are not only functional but also beautiful, safe, and sustainable.</p>

        <h3>Gratitude to Our Team</h3>
        <p>We extend heartfelt appreciation to all our employees who worked tirelessly and selflessly. Your dedication has set an example of service and responsibility.</p>
        <p>Together, we proved that celebrations can end on a note of care, cleanliness, and community spirit.</p>
    </>
);

const charminarArticleContent = (
    <>
        <p>Charminar, the heart of Hyderabad, stands as a testament to the city's rich history and architectural grandeur. As a company deeply rooted in the communities we serve, Ixora Group took on the responsibility of ensuring this iconic monument and its surroundings remain clean, beautiful, and welcoming for all.</p>

        <h3>A Monumental Task</h3>
        <p>The bustling area around Charminar, with its vibrant markets and constant flow of tourists and locals, presents unique challenges in cleanliness and maintenance. Recognizing the need for a dedicated effort, our Ixora team launched a special initiative focused on the preservation and upkeep of this historic landmark.</p>
        
        <h3>Leading with Passion</h3>
        <p>Our leadership, including CEO Mr. Abhishek Nath, believes that corporate social responsibility goes beyond mere funding. It's about active participation. Our teams were on the ground, working in shifts to manage waste, clean the pathways, and restore the pristine beauty of the area, all while ensuring minimal disruption to the daily life around the monument.</p>
        
        <h3>More Than Just Cleaning</h3>
        <p>This initiative was about more than just sweeping streets. It involved:</p>
        <ul>
            <li>✔️ Implementing sustainable waste management solutions.</li>
            <li>✔️ Conducting deep cleaning of the surrounding public spaces.</li>
            <li>✔️ Raising awareness among local vendors and visitors about the importance of cleanliness.</li>
            <li>✔️ Collaborating with local authorities to create a long-term maintenance plan.</li>
        </ul>
        
        <h3>Our Pledge to Preserve Heritage</h3>
        <p>At Ixora Group, we are committed to protecting and preserving our cultural heritage. The Charminar clean-up drive is a shining example of our dedication to creating sustainable and hygienic cities that honor their past while looking towards the future.</p>
        
        <h3>A Heartfelt Thank You</h3>
        <p>We extend our deepest gratitude to our incredible employees whose hard work and dedication made this initiative a success. Their efforts reflect our core values and our unwavering commitment to making a positive impact on society.</p>
        <p>Together, we are ensuring that landmarks like Charminar continue to inspire generations to come.</p>
    </>
);

const thirdArticleContent = (
    <>
        <p>Festivals bring joy, unity, and celebration. But once the festivities end, they often leave behind challenges for our environment and communities. At Ixora Group, we believe that true devotion means responsibility, and this Ganesh Chaturthi was a reflection of that belief.</p>

        <h3>24 Hours of Dedication</h3>
        <p>While the city celebrated with devotion and enthusiasm, our Ixora employees were already preparing for what comes next — ensuring the surroundings remain clean, hygienic, and green.</p>
        <p>Within just 24 hours of the Ganesh Visarjan, our team was on the ground, conducting deep cleaning operations. Roads, lakesides, and neighborhoods were restored to their clean state, proving that hard work and commitment can transform challenges into impact.</p>

        <h3>Leadership in Action</h3>
        <p>This initiative was more than just a clean-up drive — it was an example of leadership by action. Our CEO, Mr. Abhishek Nath (@abhiishek_nath), and Director, Mr. Krishna Chaitanya (@krishnachaitanya67), personally monitored the efforts day and night.</p>
        <p>They didn’t just oversee the work; they stood beside employees, encouraged them, and motivated the team on-ground. Their presence demonstrated that at Ixora, leadership is about sharing responsibility and working together as one family.</p>

        <h3>Appreciating Our Ixora Warriors</h3>
        <p>We are incredibly proud of our Ixora warriors, who showed relentless dedication, even in the most demanding conditions. Their service goes beyond work — it reflects their passion for cleanliness, hygiene, and community well-being.</p>
        <p>Together, we celebrated Ganesh Chaturthi not only with devotion but with responsibility, ensuring that the joy of the festival also translated into a safer, greener, and cleaner city.</p>

        <h3>Our Ongoing Commitment</h3>
        <p>At Ixora Group, our mission is clear: to create and maintain clean, green, and sustainable environments for our communities. Each initiative, big or small, contributes to this vision of a healthier, brighter future.</p>
    </>
);

const fourthArticleContent = (
    <>
        <p>At Ixora Group, we believe that festivals are not only about devotion and joy, but also about responsibility towards our community and environment.</p>
        <p>This year, after the vibrant Ganesh Visarjan celebrations, our dedicated Ixora team stepped onto the ground with a clear mission: to ensure the surroundings remained clean, hygienic, and safe for everyone.</p>

        <h3>Our Employees: The True Heroes</h3>
        <p>Festivals often leave behind waste and challenges for public spaces. But within hours of the celebrations, our employees came together, working tirelessly to clear roads, perform deep cleaning, and bring back a sense of freshness to the city.</p>
        <p>To honor their hard work and spirit of service, we arranged snacks and meals throughout the day. It was a small token of appreciation for their dedication to keeping the community clean and safe.</p>

        <h3>Leadership by Example</h3>
        <p>One of the most special moments of the day came when our CEO, Mr. Abhishek Nath, personally joined the team on the ground. Not only did he support and encourage employees, but he also distributed food with his own hands.</p>
        <p>This was more than just a gesture — it was leadership in action. It showed that at Ixora, leadership means standing side by side with employees, sharing the challenges, and celebrating their efforts.</p> 

        <h3>Responsibility Beyond Festivities</h3>
        <p>What makes this initiative so meaningful is its message: true celebration doesn’t end with rituals, it continues with responsibility. By keeping the city clean and hygienic after the festival, we extended the joy of Ganesh Chaturthi to the wider community.</p>
        <p>This reflects the core values of Ixora Group — service, care, and community well-being.</p>

        <h3>Gratitude to Our Team</h3>
        <p>We are incredibly proud of our team’s relentless efforts and commitment to service. Their work shows how small acts of responsibility can make a big difference to society.</p>
        <p>Together, we not only celebrated Ganesh Chaturthi but also stood for cleanliness, care, and community well-being.</p>
        <p>Ganpati Bappa Morya! May the blessings of Lord Ganesha inspire us to continue creating cleaner, greener, and healthier cities.</p>
    </>
);

const fifthArticleContent = (
    <>
        <p>In recent years, Environmental, Social, and Governance (ESG) standards have shifted from being voluntary corporate gestures to critical business requirements. Investors, regulators, and customers now expect companies to prove they operate sustainably, ethically, and transparently.</p>
        <p>While ESG adoption promises long-term benefits — from brand trust to investment opportunities — meeting these requirements is often easier said than done.</p>

        <h3>What Are ESG Requirements?</h3>
        <p>ESG is a framework used to evaluate a company’s performance in three key areas:</p>
        <ul>
            <li>Environmental — How the company impacts nature and the climate.</li>
            <li>Social — How it treats employees, customers, and communities.</li>
            <li>Governance — How it manages leadership, ethics, and compliance.</li>
        </ul>
        <p>Meeting ESG standards means integrating sustainable practices into every business process — and that’s where the challenges begin.</p>
        
        <h3>Collecting and managing data</h3>
        <p>Effective data collection and management is a significant obstacle to appropriate ESG reporting. Businesses need help to collect, assess and organise ESG data in their areas of operations. For example, collecting accurate and numerical data on carbon emissions requires acquiring information from upstream and downstream sources that are beyond the control of the organizations.</p>
    </>
);

const sixthArticleContent = (
    <>
        <p>In 2025, the way we work, live, and use spaces has changed dramatically. Offices are hybrid, buildings are smarter, and sustainability is no longer optional. But at the heart of all these transformations lies one powerful function — Facility Management (FM).</p>
        <p>Once seen as a back-end service, facility management has evolved into a strategic pillar of modern business operations, enabling organizations to unlock efficiency, resilience, and long-term value.</p>
        
        <h3>What is Facility Management in Today’s World?</h3>
        <p>Facility Management (FM) involves the integrated management of physical spaces, people, processes, and technologies to ensure built environments operate effectively and sustainably.</p>
        
        <h4>Key Components:</h4>
        <ul>
            <li>Hard Services (HVAC, electrical, fire systems, structural maintenance)</li>
            <li>Soft Services (cleaning, security, landscaping, pest control)</li>
            <li>Workplace Services (employee experience, front office, mailroom)</li>
            <li>Sustainability & ESG (energy optimization, water management, waste audits)</li>
            <li>Digital FM (IoT, BMS, CAFM software, remote monitoring)</li>
        </ul>
        <p>FM is now more data-driven, tech-powered, and sustainability-focused than ever before.</p>

        <h3>Why Facility Management Matters More Than Ever</h3>
        <p>Businesses are facing rising operational costs, regulatory pressures, and growing expectations around environmental and employee wellbeing. Facility management is the invisible engine that keeps everything running smoothly — and strategically.</p>

        <h4>Facility Management Enables:</h4>
        <ul>
            <li>✅ Operational Continuity and uptime</li>
            <li>✅ Employee Wellbeing & Productivity</li>
            <li>✅ Sustainability & ESG Compliance</li>
            <li>✅ Asset Longevity & Maintenance ROI</li>
            <li>✅ Cost Reduction through Optimization</li>
            <li>✅ Business Resilience in Emergencies</li>
        </ul>
        <p>FM is no longer about fixing what’s broken — it’s about predicting what could break and preventing it.</p>

        <h3>2025 Trends Shaping the FM Industry</h3>
        <h4>1. AI & IoT Integration</h4>
        <p>Sensors, predictive maintenance, and real-time analytics are making FM proactive instead of reactive.</p>

        <h4>2. Sustainability as a Core Metric</h4>
        <p>FM plays a direct role in reducing carbon footprints via energy audits, solar integration, smart lighting, and waste management.</p>

        <h4>3. Hybrid Work & Space Optimization</h4>
        <p>FM teams are redefining workspace strategies — from hot desking to real-time occupancy tracking — to meet the demands of flexible work.</p>

        <h4>4. ESG Reporting & Compliance</h4>
        <p>Facility data contributes to Environmental, Social, and Governance (ESG) scores — a new KPI for modern businesses.</p>

        <h4>5. Health, Safety & Wellness</h4>
        <p>FM ensures indoor air quality (IAQ), disinfection protocols, and ergonomic spaces for a healthier workforce.</p>
    </>
);

const seventhArticleContent = (
    <>
        <p>In a country where access to clean public toilets is often a challenge, Loocafe isn’t just breaking barriers — it’s building a new era of dignity, safety, and innovation in public sanitation.</p>
        <p>With every unit that opens, Loocafe isn’t just providing hygiene — it’s creating experiences, enabling empowerment, and making cities smarter and more inclusive.</p>

        <h3>What is Loocafe?</h3>
        <p>At its core, Loocafe is a tech-enabled public toilet, but it’s also much more than that. It’s a space where sanitation meets sustainability, and urban convenience meets community care.</p>
        <ul>
            <li>Free access to clean, safe, and secure toilets</li>
            <li>Hygienic maintenance with real-time monitoring</li>
            <li>Eco-friendly design and waste management systems</li>
            <li>Micro-retail and café integration</li>
            <li>Employment for local women and marginalized groups</li>
        </ul>
        <p>It’s a public utility — with a heart.</p>

        <h3>The Loocafe Impact: Changing Lives, One Unit at a Time</h3>
        <p>Loocafe is more than infrastructure. It’s a movement for dignity. With units across metro cities and Tier II/III towns, Loocafe is solving real-life problems every day:</p>
        <ul>
            <li><strong>Empowering Women:</strong> Many Loocafes are managed by women, creating livelihoods while offering safety to female users.</li>
            <li><strong>Urban Innovation:</strong> Smart tech like IoT sensors and app-based access make it future-ready.</li>
            <li><strong>Modular and Scalable:</strong> Loocafes are quick to deploy and adapt to various city landscapes — from railway stations to tech parks.</li>
            <li><strong>Inclusive Access:</strong> Designed for differently-abled, elderly, and children, making sanitation universal.</li>
        </ul>

        <h3>Smart Cities Need Smart Toilets</h3>
        <p>As India’s cities grow smarter, so must their sanitation systems. Loocafe is actively aligning with the Swachh Bharat Mission, Smart City Initiatives, and UN SDGs by:</p>
        <ul>
            <li>Monitoring usage through IoT tech</li>
            <li>Using green building materials</li>
            <li>Incorporating solar power and water-saving systems</li>
            <li>Creating data-driven insights for better sanitation planning</li>
        </ul>

        <h3>Join the Hygiene Revolution</h3>
        <p>Whether you’re a policymaker, urban planner, investor, or just someone who values public hygiene — Loocafe invites you to be part of a cleaner, smarter, and more inclusive India.</p>
        <p>Because when hygiene becomes accessible, dignity follows.</p>
    </>
);

const eighthArticleContent = (
    <>
        <p>As one of India’s most trusted names in integrated solutions, Ixora Group is setting new benchmarks in the Facility Management industry.</p>
        <p>From corporate offices and tech parks to hospitals, manufacturing units, and retail chains, Ixora delivers tailored facility management services that align with each client’s operational goals.</p>

        <h3>Why Choose Ixora Group?</h3>
        <ul>
            <li>PAN India Presence with localized expertise</li>
            <li>24/7 Operational Support & SLA-based delivery</li>
            <li>Use of smart technology like CAFM/IoT</li>
            <li>Focus on ESG, energy audits, and sustainability</li>
            <li>A trusted partner to top corporates, PSUs, and MNCs</li>
        </ul>
        <p>By integrating facility management with technology, data, and innovation, Ixora Group is helping organizations optimize space, reduce downtime, and build sustainable workplaces.</p>

        <h3>The Future of Facility Management: ESG, Automation & Smart Buildings</h3>
        <p>FM is at the heart of the ESG (Environmental, Social & Governance) agenda. Energy efficiency, indoor air quality, and waste management are now business imperatives — not just checkboxes.</p>
        <p>IoT-based solutions, predictive maintenance, AI-driven scheduling, and real-time reporting are transforming FM into a data-rich, intelligent function.</p>
        <p>Ixora Group is already leading this shift with advanced tools, dashboards, and green initiatives — making buildings smarter and businesses cleaner.</p>

        <h3>Why Your Business Needs Facility Management Now</h3>
        <p>If you’re thinking FM is a “nice-to-have,” think again. It’s a revenue protector, risk mitigator, and culture builder.</p>
        <ul>
            <li>It keeps your employees safe and engaged</li>
            <li>It keeps your assets performing</li>
            <li>It keeps your costs under control</li>
        </ul>
        <p>And most importantly — it keeps your brand shining</p>
        <p>And with Ixora Group as your partner, you don’t just manage facilities — you create a workplace people love.</p>

        <h3>Conclusion: Facility Management is a Strategic Priority</h3>
        <p>As businesses gear up for the future, partnering with the right facility management provider is no longer optional — it’s essential. Companies like Ixora Group are not just maintaining facilities; they are enabling business continuity, employee satisfaction, and sustainable growth.</p>
        <p>So, whether you’re a startup or a multinational, FM is your silent driver of success. And with Ixora, you’re not just managing your space — you’re elevating it.</p>
    </>
);

const ninthArticleContent = (
    <>
        <p>In today’s fast-evolving business landscape, one of the most pressing challenges for organizations in India is not just finding talent — but retaining it. Manpower attrition is on the rise across industries, and it’s leaving a deep impact on business continuity, operational efficiency, and long-term strategy.</p>
        <p>At Ixora Group, where we work closely with facility management, infrastructure support, and smart city services, this issue is more than just a trend — it’s a daily operational reality.</p>
        
        <h3>What It Means for Companies Like Ixora Group</h3>
        <p>For a company like Ixora Group, which operates across complex infrastructure ecosystems, high attrition translates to:</p>
        <ul>
            <li>Increased Hiring & Training Costs</li>
            <li>Lower Morale Among Teams</li>
            <li>Disruption in Client Services</li>
        </ul>

        <h3>How Ixora Is Tackling It</h3>
        <p>At Ixora Group, we recognize that solving attrition isn’t about band-aid fixes — it requires a structural and cultural shift. Some key interventions we’re implementing include:</p>
        <ul>
            <li>Employee Recognition Programs</li>
            <li>Upskilling & Career Growth</li>
            <li>Better Onboarding & Mentorship</li>
            <li>Feedback-Driven Policy Changes</li>
        </ul>
        <p>Attrition may be a global issue, but its local impacts are real and immediate. Businesses in India — especially those that rely on human-led operations — need to prioritize people before processes. For Ixora Group, the future lies in creating an ecosystem where employees see purpose, not just payroll.</p>
        <p>Because when people stay, businesses grow.</p>
    </>
);

const tenthArticleContent = (
    <>
        <p>In an era driven by digital transformation, facility management is no longer just about maintenance — it’s about intelligence, automation, and efficiency. At Ixoragroup, we harness the power of cutting-edge technologies to deliver smarter, faster, and more proactive facility solutions.</p>
        
        <h3>Technology is the New Backbone of Facility Management</h3>
        <p>As workspaces become more complex, traditional approaches to facility management fall short. Businesses today demand real-time insights, energy efficiency, predictive maintenance, and seamless user experiences — and technology makes that possible.</p>

        <h3>Real-Time Monitoring with IoT</h3>
        <p>We deploy IoT-enabled sensors across buildings to monitor energy usage, temperature, air quality, occupancy, and more. This data allows our teams to identify inefficiencies and act instantly — whether it’s adjusting HVAC systems or optimizing lighting based on movement.</p>

        <h3>Predictive Maintenance with AI & Analytics</h3>
        <p>Gone are the days of reactive maintenance. At Ixoragroup, we use AI and data analytics to predict equipment failures before they happen. This reduces downtime, cuts repair costs, and extends asset life — all while ensuring smooth operations.</p>

        <h3>Enhanced Security Through Tech Integration</h3>
        <p>With advanced surveillance systems, access controls, and AI-powered threat detection, we ensure your facilities are secure — both digitally and physically.</p>
        <p>By integrating technology into every layer of facility operations, Ixoragroup helps businesses:</p>
        <ul>
            <li>Improve operational efficiency</li>
            <li>Reduce costs and energy waste</li>
            <li>Enhance employee comfort and safety</li>
            <li>Stay ahead with data-driven decision-making</li>
        </ul>
        <p>Future-proof your facility with Ixoragroup — where innovation meets performance.</p>
    </>
);

const eleventhArticleContent = (
    <>
        <p>In today’s business environment, the role of facility management has evolved far beyond basic maintenance and support functions. At Ixoragroup, we view facility management not just as operational support, but as a strategic driver of business sustainability and ESG (Environmental, Social, and Governance) performance.</p>
        <p>Traditionally, facility management was limited to sanitation, repairs, and technical services. However, at Ixoragroup, we’ve embraced a new-age approach — one that helps businesses become more efficient, environmentally responsible, and employee-focused. We integrate facility operations into the broader ESG strategy, enabling organisations to create long-term value for all stakeholders, including employees, investors, regulators, and the environment.</p>
        <ul>
            <li><strong>Energy & Waste Management:</strong> Smart systems, IoT tools, and renewable energy to reduce costs and carbon emissions.</li>
            <li><strong>Employee Well-being:</strong> Ergonomic, safe, and positive workplaces that support retention and regulatory compliance.</li>
            <li><strong>Net-Zero Strategy:</strong> Helping you meet science-based targets through green energy and low-emission facility design.</li>
            <li><strong>ESG Reporting:</strong> Real-time data and tracking for accurate, transparent reporting.</li>
        </ul>
        <p>At Ixoragroup, we don’t just manage buildings — we future-proof businesses.</p>
    </>
);

const twelfthArticleContent = (
    <>
        <p>Hyderabad, India — July 22, 2025 — Yesterday was a day marked by generosity and community spirit, as the Dr. Rabindra Nath Foundation once again stepped forward to serve the community. Continuing their admirable efforts, the foundation provided both food and their popular “Free Chai Counter” to grateful beneficiaries.</p>
        <p>The image captured from the event shows a bustling scene around the “Kadak House” stall, a clear indicator of the warm reception for the foundation’s initiative. The prominent sign, “DR. RABINDAR NATH FOUNDATION FREE CHAI COUNTER,” highlights their commitment to offering comforting beverages. Beyond just chai, the foundation also served food, ensuring that individuals received a nourishing meal.</p>
        <p>Such initiatives are vital in fostering a stronger, more compassionate community. The Dr. Rabindra Nath Foundation’s consistent dedication to providing essential sustenance and a warm cup of chai not only meets immediate needs but also brings a sense of dignity and care to those they serve.</p>
        <p>These acts of kindness are a testament to the foundation’s vision of making a tangible difference in people’s lives. We commend the Dr. Rabindra Nath Foundation for their continuous efforts and look forward to seeing more of their impactful work in the future.</p>
    </>
);

const thirteenthArticleContent = (
    <>
        <p>In our mission to create a cleaner, more efficient, and responsive community, Ixora Group, in collaboration with GHMC, is excited to introduce the Ixora Feedback App! This isn’t just another app; it’s our commitment to digitalizing feedback, moving towards a paperless system, and embracing a nimble, empathetic, and eco-conscious approach to facility management.</p>
        <p>Let’s take a tour of how this app empowers you and contributes to a better Hyderabad.</p>
        <h3>Seamless Feedback Submission: Easy as 1–2–3</h3>
        <p>We believe giving feedback should be simple and secure. The Ixora Feedback App makes it effortless to share your observations and suggestions about cleanliness and facility management in your area.</p>
        <ul>
            <li><strong>Secure Details Entry:</strong> When you submit feedback, you’ll be guided to enter key details like the shop name, owner’s full name, phone number, and shop address.</li>
            <li><strong>OTP Verification for Trust:</strong> To ensure secure and personalized access, we’ve integrated OTP-based verification. This enhances trust and protects your data, giving you peace of mind that your feedback is genuinely recorded.</li>
            <li><strong>Visual Confirmation with Images:</strong> A unique feature of our app is the ability to upload images. You’ll be asked to upload a selfie and two photos of the cleaned area where the feedback was taken. This provides visual evidence, making your feedback even more impactful!</li>
            <li><strong>Quick Confirmation:</strong> Once you submit, you’ll see a clear “Submitted!” message, thanking you for your valuable input.</li>
        </ul>
        <h3>A Glimpse into the Feedback Journey: What Happens Next?</h3>
        <p>Once feedback is submitted, it enters a structured system designed for efficient management and response.</p>
        <ul>
            <li><strong>Real-Time Insights:</strong> The app provides real-time insights, empowering us to be responsive to the feedback received.</li>
            <li><strong>Supervisor Dashboards:</strong> Our supervisors have a dedicated “Home Page” where they can see all previously collected feedbacks, sorted by date. They can quickly view details like the shop name, and location. They can also see the “Total Feedback Collected today”.</li>
        </ul>
        <h3>Performance at a Glance: Supervisors can access a “Statistics” section, which provides an overview of:</h3>
        <ul>
            <li>Total Feedbacks Collected.</li>
            <li>Their individual feedback collection numbers.</li>
            <li>Breakdown of feedback ratings (e.g., 5 Stars, 4 Stars, 3 Stars).</li>
            <li>A visual “Feedback Stats” chart showing total feedbacks and their contribution.</li>
        </ul>
        <h3>The Power Behind the Scenes: Admin Dashboard</h3>
        <p>For administrators, the Ixora Feedback Admin Dashboard provides a comprehensive overview, ensuring accountability and continuous improvement.</p>
        <ul>
            <li><strong>Centralized Feedback Overview:</strong> Admins can review all collected feedbacks and monitor the overall dashboard.</li>
            <li><strong>Key Metrics for Oversight:</strong> The dashboard displays total feedbacks collected, feedbacks collected today, and a “Feedback Collection Chart”.</li>
            <li><strong>Supervisor Performance Tracking:</strong> Admins can easily see “Highest Feedback Collectors,” with details on supervisor names and their activity levels.</li>
            <li><strong>Management Tools:</strong> The dashboard also allows for creating new supervisors and feedback entries.</li>
        </ul>
        <h3>Our Vision: A Better, More Connected Future</h3>
        <p>Embracing paperless feedback through the Ixora Feedback App is more than just adopting technology. It’s about a journey towards being nimble, empathetic, and eco-conscious. By integrating secure OTP-based verification, we build trust and protect your data. With real-time insights, we are empowered to be truly responsive.</p>
        <p>Together, we’re not just evolving; we’re creating a better, more connected, and secure future.</p>
        <p>Swachh Namaskar!</p>
    </>
);

const fourteenthArticleContent = (
    <>
        <p>In the bustling heart of Hyderabad, a heartwarming initiative is making a tangible difference, one cup of chai and a snack at a time. Loocafe, in collaboration with The Dr. Rabindar Nath Foundation and the support of the Ixora Group, is continuing a beautiful legacy of service in Banjara Hills, Hyderabad.</p>
        <p>The image captures the essence of this simple yet profound act of kindness. Volunteers from Loocafe are seen diligently serving free chai and snacks to those in need, embodying the spirit of community and compassion. This isn’t just about providing sustenance; it’s about spreading warmth, care, and making a genuine connection with individuals.</p>
        <p>The Dr. Rabindar Nath Foundation, with its commitment to service, finds a perfect partner in Loocafe, a “Toilet Company” that extends its mission beyond sanitation to social welfare. Together with the Ixora Group, they are creating a positive impact right in the heart of Banjara Hills, KBR Park.</p>
        <p>This initiative is a powerful reminder that even the simplest gestures can create significant ripples of kindness. In a world that often moves too fast, taking a moment to offer a warm drink and a snack can brighten someone’s day and provide much-needed comfort. It’s a testament to how businesses and foundations can come together to uplift their communities.</p>
        <p>Let’s celebrate and support such initiatives that truly make a difference. It’s inspiring to see organizations like Loocafe, The Dr. Rabindar Nath Foundation, and the Ixora Group actively working towards a more caring and inclusive society.</p>
    </>
);

const fifteenthArticleContent = (
    <>
        <p>Welcome to Ixora Security Services! We’re thrilled to have you here. In this inaugural post, we want to take a moment to introduce ourselves, share our passion, and give you a glimpse into what drives us every day. At Ixora Security Services, we’re more than just a business; we’re a team dedicated to revolutionizing your experience with both security and facility management, ensuring safety and efficiency across diverse environments.</p>
        <h3>Who We Are & Our Mission</h3>
        <p>Ixora Security Services was built on the belief that comprehensive safety and seamless operations are paramount for any thriving environment. Our mission is simple yet profound: To provide unparalleled security and facility management solutions that protect assets, optimize operations, and foster a sense of safety and well-being for our clients. We strive to achieve this by combining cutting-edge technology with highly trained professionals, offering a holistic approach to your operational needs.</p>
        <h3>What We Do: Our Services</h3>
        <p>At the heart of Ixora Security Services are our integrated solutions designed to safeguard your property and streamline your operations. We specialize in:</p>
        <ul>
            <li><strong>Security Services:</strong>
                <ul>
                    <li>Manned Guarding: Providing vigilant, professional security officers for on-site protection, access control, and proactive threat deterrence.</li>
                    <li>Electronic Security Systems: Implementing advanced CCTV, alarm systems, and access control solutions for comprehensive surveillance and rapid response.</li>
                    <li>Security Consulting & Risk Assessment: Offering expert analysis to identify vulnerabilities, develop tailored security strategies, and ensure compliance.</li>
                </ul>
            </li>
            <li><strong>Facility Management:</strong>
                <ul>
                    <li>Comprehensive management of commercial spaces, ensuring smooth operations, maintenance, and a well-managed environment. (e.g., Housekeeping, Maintenance, Landscaping, Pest Control, etc.)</li>
                </ul>
            </li>
        </ul>
        <p>We pride ourselves on delivering customized solutions, reliable performance, and exceptional customer support that truly make a difference for our clients.</p>
        <h3>Our Expertise Across Sectors</h3>
        <p>Our extensive experience allows us to serve a wide range of clients with specialized needs. We proudly provide our integrated services to:</p>
        <ul>
            <li>Commercial Spaces</li>
            <li>Hospitals</li>
            <li>Heritage Sites</li>
            <li>Malls</li>
            <li>Educational Institutions</li>
            <li>Tech Parks</li>
        </ul>
        <h3>Our Values & Culture</h3>
        <p>Our success isn’t just about what we do, but how we do it. Our company culture is built on a foundation of core values that guide every decision and interaction:</p>
        <ul>
            <li><strong>Integrity:</strong> We operate with utmost honesty and transparency, building trust with every client and partner.</li>
            <li><strong>Innovation:</strong> We continuously explore new technologies and methods to stay ahead and offer the best solutions.</li>
            <li><strong>Client Focus:</strong> Your needs are our priority. We listen, adapt, and strive to exceed expectations.</li>
            <li><strong>Excellence:</strong> We are committed to delivering the highest standards in everything we do, from service delivery to customer care.</li>
        </ul>
        <p>We believe a strong, positive culture translates directly into better service and stronger relationships.</p>
        <h3>Why Choose Ixora Security Services? Our Unique Edge</h3>
        <p>In a crowded market, what makes Ixora Security Services stand out? It’s our unique blend of:</p>
        <ul>
            <li><strong>Dual Expertise:</strong> We offer comprehensive solutions in both security services and facility management, providing a single, reliable partner for your diverse needs.</li>
            <li><strong>Dedicated Team:</strong> Our professionals are not just skilled; they are passionate, proactive, and genuinely care about your safety, efficiency, and satisfaction.</li>
        </ul>
        <h3>The Future of Security & Management</h3>
        <p>We don’t just keep pace with technology; we leverage the latest advancements to provide smarter, more efficient, and more effective solutions. Our commitment to innovation is evident in our use of cutting-edge tools, including:</p>
        <ul>
            <li><strong>Facial Recognition for Staff:</strong> Enhancing access control, streamlining attendance management, and boosting overall site security.</li>
            <li><strong>Geotagging & Geofencing for Sites:</strong> Ensuring precise location tracking, establishing secure virtual perimeters, and enabling rapid alerts for unauthorized movements.</li>
            <li><strong>Broadcast Instructions:</strong> Facilitating instant, clear communication and coordination across all sites and teams, crucial for emergency response and daily operations.</li>
        </ul>
        <p>We’re not just a vendor; we’re a partner invested in your success and peace of mind.</p>
        <h3>Looking Ahead</h3>
        <p>The journey for Ixora Security Services is just beginning. We are constantly evolving, researching new technologies and trends, and expanding our capabilities to better serve you. Our vision for the future includes continuously integrating advanced solutions to meet the evolving demands of modern commercial, healthcare, and educational environments. We are excited about what’s next and look forward to sharing our progress with you.</p>
        <h3>Join Our Community!</h3>
        <p>We invite you to explore our website, learn more about our services, and connect with us on social media. We’ll be regularly updating this blog with insights, industry news, tips, and company updates.</p>
        <h3>Conclusion</h3>
        <p>Thank you for taking the time to learn about Ixora Security Services. We are passionate about providing top-tier security and facility management, and we are committed to being a partner you can always rely on. We look forward to serving you!</p>
    </>
);

const sixteenthArticleContent = (
    <>
        <p>Manpower management is about strategically organizing and utilizing human resources to achieve organizational goals. It includes processes like hiring, training, and managing employee performance to ensure the right individuals are positioned in suitable roles. On the other hand, facility management focuses on maintaining and managing the physical spaces where business operations take place. This involves tasks such as maintenance, cleaning, security, and logistical support to ensure a functional and efficient work environment.</p>
        <h3>Our Key Services</h3>
        <h4>Workforce Planning and Management</h4>
        <p>We assist organizations in recruiting, training, and managing their workforce effectively. Our tailored solutions ensure that businesses have the right talent to achieve their objectives.</p>
        <h4>Facility Maintenance</h4>
        <p>IxoraGroup provides comprehensive facility management services, including regular maintenance, cleaning, and sanitation. We ensure that your workspace remains clean, safe, and conducive to productivity.</p>
        <h4>Security Services</h4>
        <p>Our trained security personnel help safeguard your premises, assets, and employees. We implement robust security measures tailored to your specific needs, enhancing safety and peace of mind.</p>
        <h4>Logistics Support</h4>
        <p>We manage logistics operations, including inventory management and supply chain solutions, ensuring smooth and efficient processes that align with your business objectives.</p>
        <h4>Technical Support</h4>
        <p>Our technical support services include equipment maintenance and repair, ensuring uninterrupted operations and minimizing downtime.</p>
    </>
);

const seventeenthArticleContent = (
    <>
        <h3>Make your facility safe & secure</h3>
        <p>Discover a new standard of efficiency and excellence with our Facility Management solutions. We streamline operations, maintain facilities, and optimize resources, ensuring seamless and top-tier services for your spaces. Elevate your infrastructure management experience with our innovative solutions tailored to your needs.</p>
        <p>Safeguard your business with our cutting-edge Security Services. We, prioritize your safety with robust security solutions tailored to your requirements. Our services ensure a secure environment for your operations, providing peace of mind and proactive protection.</p>
    </>
);

const eighteenthArticleContent = (
    <>
        <h3>Our Commitment to Quality</h3>
        <p>At IxoraGroup, our facility management solutions are designed to deliver top-notch housekeeping services, office assistance, support services, and pantry management. Over the years, we’ve had the privilege of serving a diverse clientele, including corporate offices, industrial facilities, residences, and event venues.</p>
        <h3>A Client-Centric Approach</h3>
        <p>Client satisfaction is our ultimate goal, and we go the extra mile to achieve it. By understanding each client’s unique facility management requirements, we ensure the deployment of carefully selected associates who are best suited for the job.</p>
        <h3>Rigorous Training and Employee Satisfaction</h3>
        <p>Our employee intake policy is among the most rigorous in the industry, supported by an intensive training program. We focus on identifying the right talent and equipping them with the skills they need to excel. More importantly, we foster a work environment where our employees love what they do, because we believe that happy employees are key to ensuring 100% client satisfaction.</p>
    </>
);

const nineteenthArticleContent = (
    <>
        <p>At IxoraGroup, we believe that the foundation of our success lies in the continuous growth and development of our team. Recently, we organized a hands-on training session aimed at equipping our team with practical skills for maintaining a clean, organized, and efficient workspace.</p>
        <h3>The Training Session</h3>
        <p>The training session began with an engaging workshop led by an experienced trainer. The focus was on teaching effective techniques for maintaining high standards of workplace hygiene, with live demonstrations covering glass surface cleaning, workstation organization, and overall cleanliness practices.</p>
        <p>Our team displayed eagerness and enthusiasm, absorbing every detail of the session. Beyond technical knowledge, the training emphasized precision, pride in work, and the importance of teamwork. The setting, with its vibrant and thoughtfully designed workspace, provided the perfect environment for fostering both learning and inspiration.</p>
        <h3>Putting Skills into Action</h3>
        <p>Following the training, our team put their newly acquired skills into action with great enthusiasm and attention to detail. The images vividly capture their dedication as they worked on:</p>
        <ul>
            <li>Cleaning and sanitizing workstations and electronic equipment.</li>
            <li>Vacuuming floors and organizing furniture.</li>
            <li>Ensuring every corner of the office was spotless and welcoming.</li>
        </ul>
        <p>This was not just about maintaining cleanliness; it was about applying learned techniques with precision and care, and creating a workspace that fosters productivity and positivity. Each team member displayed a sense of ownership and pride in their work, reflecting the high standards of IxoraGroup.</p>
    </>
);

const twentiethArticleContent = (
    <>
        <h3>Empowering Our Employees with Knowledge</h3>
        <p>In line with our commitment to employee well-being, our HR manager conducted an informative session for our team, explaining the significance of Employee State Insurance (ESI) and Employees’ Provident Fund (EPF). The session aimed to empower our workforce with the knowledge to leverage these benefits for improved health, financial security, and a stress-free retirement.</p>
        <p>Here, our dedicated team listens attentively as we guide them through the essential information about these programs. It’s a step toward building a well-informed workforce that values long-term benefits and security.</p>
        <p>Empowering employees with knowledge about their benefits today ensures a healthier, more secure tomorrow.</p>
    </>
);


export const allArticles: Article[] = [
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760076835/Leading_with_Care_Serving_with_Heart_2_k3nxil.png",
    categories: ["Community", "ESG"],
    title: "Media Recognizes Ixora Group’s Clean-Up Efforts",
    fullTitle: "ABN, Andhrajyothi, Sakshi & Siasat Recognize Ixora Group’s Clean-Up Efforts.",
    description: "Ganesh Chaturthi is a festival of joy, devotion, and togetherness. But once the celebrations end, an equally important responsibility begins...",
    author: "IxoraGroup Team",
    date: "Sep 20, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: newArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760090313/1_72OAoOWJWcWul85uGPFqkg_tyaysl.webp",
    categories: ["Manpower", "Facility Management", "Solutions"],
    title: "IxoraGroup Experts in Manpower and Facility Management Solutions",
    fullTitle: "IxoraGroup Experts in Manpower and Facility Management Solutions",
    description: "Manpower management is about strategically organizing and utilizing human resources to achieve organizational goals. It includes processes like hiring, training,",
    author: "IxoraGroup Team",
    date: "Oct 25, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: sixteenthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760090253/1_Y0RZhy-lHXOjxShXiQcYtg_u2yos8.webp",
    categories: ["Facility Management", "Security", "Solutions"],
    title: "IxoraGroup: All in One Solution for all the requirements of your facility.",
    fullTitle: "IxoraGroup: All in One Solution for all the requirements of your facility.",
    description: "Discover a new standard of efficiency and excellence with our Facility Management solutions.",
    author: "IxoraGroup Team",
    date: "Oct 24, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: seventeenthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760090206/1_wfzsWk1vf_NfId-79ykF8A_jvug78.webp",
    categories: ["Housekeeping", "Facility Management", "Hyderabad"],
    title: "IxoraGroup: Quality Facility Services in Hyderabad",
    fullTitle: "IxoraGroup: Quality Facility Services in Hyderabad",
    description: "At IxoraGroup, our facility management solutions are designed to deliver top-notch housekeeping services,",
    author: "IxoraGroup Team",
    date: "Oct 23, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: eighteenthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760090145/1_cXBxpTNmzI7mKEFhbhsNLA_fplxrz.jpg",
    categories: ["Training", "Workplace", "Excellence"],
    title: "From Training to Action: Workplace Excellence",
    fullTitle: "From Training to Action: Workplace Excellence",
    description: "At IxoraGroup, we believe that the foundation of our success lies in the continuous growth and development of our team.",
    author: "IxoraGroup Team",
    date: "Oct 22, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: nineteenthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760090002/1_7gPNTk9bNe00eExt9G0TyQ_d7kcvu.webp",
    categories: ["HR", "Employee Benefits", "Well-being"],
    title: "HR Manager’s Briefing on ESI and EPF Benefits for Employees",
    fullTitle: "HR Manager’s Briefing on ESI and EPF Benefits for Employees",
    description: "In line with our commitment to employee well-being, our HR manager conducted an informative session for our team,",
    author: "IxoraGroup Team",
    date: "Oct 21, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: twentiethArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760089333/0_vTaak1cllL-UJJL1_oidd89.jpg",
    categories: ["Security", "Facility Management", "Innovation"],
    title: "Discover Ixora Security Services",
    fullTitle: "Discover Ixora Security Services: Innovation, Reliability, and Comprehensive Care.",
    description: "Welcome to Ixora Security Services! We’re thrilled to have you here. In this inaugural post, we want to take a moment to introduce ourselves...",
    author: "Ixora Security Services",
    date: "July 31, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: fifteenthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760089273/1_IQf1TPu-vdAD_sJ18WGGNQ_ky8l5u.webp",
    categories: ["Community", "Foundation", "CSR"],
    title: "A Warm Gesture in Hyderabad",
    fullTitle: "A Warm Gesture: Dr. Rabindar Nath Foundation Serve the Community in Hyderabad.",
    description: "In the bustling heart of Hyderabad, a heartwarming initiative is making a tangible difference, one cup of chai and a snack at a time.",
    author: "IxoraGroup Team",
    date: "July 28, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: fourteenthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760089325/1_GN7gI16o5ryGKANcVnMeZA_s71ete.webp",
    categories: ["Technology", "Community", "Innovation"],
    title: "Exploring the Ixora Feedback App",
    fullTitle: "Exploring the Ixora Feedback App: Your Voice, Our Progress.",
    description: "In our mission to create a cleaner, more efficient, and responsive community, Ixora Group, in collaboration with GHMC, is excited to introduce the...",
    author: "IxoraGroup Team",
    date: "July 25, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: thirteenthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760088503/1_x3b16jO90pm0ta8mHDDKrg_n6go7e.jpg",
    categories: ["Community", "Foundation", "CSR"],
    title: "Dr. Rabindra Nath Foundation's Chai & Meals",
    fullTitle: "Dr. Rabindra Nath Foundation Spreads Warmth with Free Chai and Nourishing Meals.",
    description: "Hyderabad, India — July 22, 2025 — Yesterday was a day marked by generosity and community spirit, as the Dr. Rabindra Nath Foundation once again stepped forward to serve the community.",
    author: "IxoraGroup Team",
    date: "July 22, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: twelfthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760088048/1_qulSKJykyYFpOGGl6n_yLg_xtzrmc.jpg",
    categories: ["ESG", "Facility Management", "Sustainability"],
    title: "Powering ESG Transformation",
    fullTitle: "How Ixoragroup is Powering ESG Transformation Through Smart Facility Management.",
    description: "In today’s business environment, the role of facility management has evolved far beyond basic maintenance and support functions. At Ixoragroup,",
    author: "IxoraGroup Team",
    date: "Oct 17, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: eleventhArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760087248/1_jVCEuXuLW5xThEHXog_CQg_e80ggj.webp",
    categories: ["Technology", "Innovation", "Facility Management"],
    title: "Redefining Operational Excellence with Tech",
    fullTitle: "How Ixoragroup is Using Technology to Redefine Operational Excellence.",
    description: "In an era driven by digital transformation, facility management is no longer just about maintenance — it’s about intelligence, automation, and efficiency.",
    author: "IxoraGroup Team",
    date: "Oct 14, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: tenthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760086997/0_6rNBtNpMi7Kk5Cfr_uhkrwq.webp",
    categories: ["Human Resources", "Business", "India"],
    title: "Increasing Manpower Attrition in India",
    fullTitle: "Increasing Manpower Attrition and How It Is Affecting Businesses in India — A Perspective from Ixora Group",
    description: "In today’s fast-evolving business landscape, one of the most pressing challenges for organizations in India is not just finding talent — but retaining it.",
    author: "IxoraGroup Team",
    date: "Oct 11, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: ninthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760086762/0_s-KvmY_xjYAJKHkX_rzlcxs.webp",
    categories: ["Facility Management", "India", "Innovation"],
    title: "Redefining Facility Management in India",
    fullTitle: "Ixora Group: Redefining Facility Management in India",
    description: "As one of India’s most trusted names in integrated solutions, Ixora Group is setting new benchmarks in the Facility Management industry.",
    author: "IxoraGroup Team",
    date: "Oct 08, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: eighthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760086516/0_pj2-YQ9gOk2Rf5Yb_byxvqv.webp",
    categories: ["Sanitation", "Innovation", "Community"],
    title: "Loocafe: A Lifestyle Revolution",
    fullTitle: "Loocafe: Transforming Public Sanitation into a Lifestyle Revolution.",
    description: "In a country where access to clean public toilets is often a challenge, Loocafe isn’t just breaking barriers — it’s building a new era of dignity, safety, and innovation in public sanitation.",
    author: "IxoraGroup Team",
    date: "Oct 05, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: seventhArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760081289/0_FD5hC8no0MWosRwt_n20jrx.webp",
    categories: ["Facility Management", "Technology", "Sustainability"],
    title: "The Future of Facility Management",
    fullTitle: "The Future of Facility Management: Where Smart Spaces Meet Strategic Success.",
    description: "In 2025, the way we work, live, and use spaces has changed dramatically.",
    author: "IxoraGroup Team",
    date: "Oct 02, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: sixthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760081022/0_k1apLiD28zG9GBvB_jbiyk4.webp",
    categories: ["ESG", "Sustainability", "Compliance"],
    title: "Challenging to Meet ESG Requirements",
    fullTitle: "Why It Can Be Challenging to Meet ESG Requirements.",
    description: "In recent years, Environmental, Social, and Governance (ESG) standards have shifted from being voluntary corporate gestures to critical business requirements.",
    author: "IxoraGroup Team",
    date: "Sep 28, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: fifthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760078209/Leading_with_Care_Serving_with_Heart_3_vu8cvi.png",
    categories: ["Community", "ESG", "Responsibility"],
    title: "True Celebration is Responsibility",
    fullTitle: "True Celebration is Responsibility: Ganesh Visarjan Clean-Up by Ixora Group.",
    description: "At Ixora Group, we believe that festivals are not only about devotion and joy, but also about responsibility towards our community and environment.",
    author: "IxoraGroup Team",
    date: "Sep 25, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: fourthArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1760078216/1_VBw-wTwpcISP2-VjkIprVg_m1ommw.webp",
    categories: ["Community", "ESG", "Cleanliness"],
    title: "Ganesh Visarjan Clean-Up",
    fullTitle: "Ganesh Visarjan Clean-Up: Ixora Group’s Commitment to a Clean & Green City.",
    description: "Festivals bring joy, unity, and celebration. But once the festivities end, they often leave behind challenges for our environment and communities.",
    author: "IxoraGroup Team",
    date: "Sep 22, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: thirdArticleContent,
  },
  {
    imageSrc: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470695/65984127cf1dfd1717e7a919_Charminar1_tch3ln.jpg",
    categories: ["Heritage", "Community", "CSR"],
    title: "Ixora Group's Initiative at Charminar",
    fullTitle: "Ixora Group's Commitment to Heritage: Leading the Clean-Up Drive at Charminar",
    description: "As a part of our commitment to preserving cultural heritage, Ixora Group recently undertook a massive clean-up and maintenance drive at the historic Charminar...",
    author: "IxoraGroup Team",
    date: "Oct 15, 2025",
    authorImage: "https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40",
    content: charminarArticleContent,
  },
];

const articlesData = allArticles;


const NewsAndMediaPage: React.FC<{ navigate: (page: string, data?: any) => void }> = ({ navigate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesData.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Pagination = () => {
    const pageNumbers = [];
    
    pageNumbers.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors ${currentPage === 1 ? 'bg-[#D4B258] text-white' : 'border border-gray-300 text-gray-500 hover:bg-gray-100'}`}
      >
        1
      </button>
    );

    if (currentPage > 3) {
      pageNumbers.push(<span key="start-ellipsis" className="px-2 text-gray-500">...</span>);
    }
    
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage <= 3) {
      startPage = 2;
      endPage = Math.min(totalPages - 1, 4);
    }

    if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - 3);
      endPage = totalPages - 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors ${currentPage === i ? 'bg-[#D4B258] text-white' : 'border border-gray-300 text-gray-500 hover:bg-gray-100'}`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - 2) {
      pageNumbers.push(<span key="end-ellipsis" className="px-2 text-gray-500">...</span>);
    }

    if (totalPages > 1) {
        pageNumbers.push(
            <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors ${currentPage === totalPages ? 'bg-[#D4B258] text-white' : 'border border-gray-300 text-gray-500 hover:bg-gray-100'}`}
            >
            {totalPages}
            </button>
        );
    }


    return (
        <div className="flex items-center justify-center gap-2">
            {pageNumbers}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 pl-2 pr-4 py-2 rounded-full text-sm font-semibold border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
                <PaginationArrowRightIcon className="w-4 h-4" />
            </button>
        </div>
    )
  }

  const latestArticle = allArticles[0];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div 
        className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm overflow-hidden cursor-pointer group"
        onClick={() => navigate('article-detail', latestArticle)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-[#D4B258] text-sm mb-4">
              Latest Article
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight group-hover:text-[#D4B258] transition-colors">
              {latestArticle.fullTitle || latestArticle.title}
            </h1>
            <p className="mt-6 text-gray-600">
              {latestArticle.description}
              <span className="font-semibold text-[#D4B258] group-hover:underline ml-2">
                Read More
              </span>
            </p>
            <div className="mt-8 flex items-center">
              <img 
                src={latestArticle.authorImage} 
                alt={latestArticle.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-800">{latestArticle.author}</p>
                <p className="text-sm text-gray-500">{latestArticle.date}</p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="rounded-2xl overflow-hidden -order-1 lg:order-1">
            <img 
              src={latestArticle.imageSrc}
              alt={latestArticle.fullTitle || latestArticle.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Articles Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {currentArticles.map((article, index) => (
          <article 
            key={`${article.title}-${index}`} 
            className="group flex items-center gap-6 cursor-pointer"
            onClick={() => navigate('article-detail', article)}
          >
            <div className="w-1/3 flex-shrink-0">
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img 
                  src={article.imageSrc} 
                  alt={article.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="w-2/3">
              <p className="text-xs font-semibold text-[#D4B258] mb-2">
                {article.categories.join(' | ')}
              </p>
              <h3 className="text-lg font-bold text-gray-800 leading-tight">
                <span className="hover:text-[#D4B258] transition-colors">{article.title}</span>
              </h3>
              <p className="text-sm text-gray-600 mt-1">{article.description}</p>
              <div className="mt-4 flex items-center">
                <img 
                  src={article.authorImage}
                  alt={article.author}
                  className="w-10 h-10 rounded-full object-cover border-2 border-amber-100"
                />
                <div className="ml-3">
                  <p className="font-semibold text-sm text-gray-800">{article.author}</p>
                  <p className="text-xs text-gray-500">{article.date}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="pt-8">
        <Pagination />
      </div>
    </div>
  );
};

export default NewsAndMediaPage;