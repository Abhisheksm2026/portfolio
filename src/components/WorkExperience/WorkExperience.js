import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'GoldenLegand Leasing and Finance Pvt Ltd (SOLUTIO Pvt Ltd)',
      period: 'Jan 2026 - Present',
      project: 'UI UX Designer and Frontend Developer',
      description: `Designing Fintech mobile apps and web apps.`
    },
    {
      company: 'Mahindra and Mahindra (ITFMS Infotech Pvt Ltd)',
      period: 'Mar 2024 - Oct 2025',
      project: 'Mobile and Web Applications UI Design',
      description: `Designed mobile and web applications for Mahindra Farm Digital Centre, supporting tractor enquiries, bookings, eKYC, service updates, and dealer records. Created user-friendly UI/UX for apps like E-Parts Kosh, Dealer Employee App, M-Seva, 3S-Connect, and M-Track. Developed customer KYC merging process flows and simplified dealer-side operations through intuitive screen designs. Crafted overseas distributor app interfaces, covering dealer circulars, warranty schemes, service bulletins, and product portfolios. Designed Power BI and Mobility dashboards with clear layouts for inventory, sales, service, and resource utilization, enhancing data clarity. Produced wireframes, prototypes, and high-fidelity designs, maintaining responsive layouts across devices. Conducted user research, usability testing, and competitive analysis to guide design improvements and meet user needs. Focused on intuitive user flows for features such as GPS-enabled service support, QR scanning, OTP verification, and geotracking.`
    },
    {
      company: 'TechYard - Consultant Project',
      period: 'Nov 2023 - Dec 2023',
      project: 'TechYard Developers Website Design, Mobile Application Design',
      description: `Executed a comprehensive UI/UX redesign project for Techyard's website, optimizing visual elements and streamlining user flow, achieving an increase in conversion rates and a boost in customer satisfaction. Through a combination of user research, wireframing, and prototyping, I successfully contributed to a good UI. Arranged the UI design of a cutting-edge website, clarity about the company's online presence and accelerating service launch resulting in an increase in customer acquisition within the first quarter.`
    },
    {
      company: 'NGO Project',
      period: 'Oct 2023 - Dec 2023',
      project: 'Abundant Life Foundation NGO Website Design',
      description: `Designed intuitive and visually appealing UI for the Abundant Life Foundation NGO website. Ensured accessibility, brand alignment, and engaging user experience across all pages. Collaborated with developers and stakeholders to deliver a consistent and user-focused design.`
    },
    {
      company: 'Being Social - Consultant Project',
      period: 'Jan 2023 - Jun 2023',
      project: 'Jyothy Labs ESG Sustainability Website Design',
      description: `Worked as a UI/UX Designer to design Jyothy Labs' Sustainability webpage, creating an intuitive, visually consistent layout that enhanced user engagement and effectively highlighted the brand's environmental commitment.`
    },
    {
      company: 'Edfoal AI - Start-up company',
      period: 'Jan 2022 - Dec 2022',
      project: 'FeedCode Mobile Application Design & FeedCode Web Design',
      description: `Contributed to the UI design of the FeedCode mobile and web app. My work included conducting user research to understand what users need, then using that information to create a user-friendly and appealing interface for the app.`
    },
    {
      company: 'Ixiono Pte Ltd, Singapore - Start-up company',
      period: 'Jun 2020 - Nov 2021',
      project: 'Scratch NFT Minting Marketplace & Legal Service Provider Application',
      description: `Collaborated on NFT web, mobile, and service provider applications using Figma for UI/UX design and React.js for front-end development. Developed Ethereum-based crypto tokens with Solidity smart contracts, generated NFT variants via JSON, and maintained/deployed decentralized apps. Skilled in HTML, CSS, Bootstrap, Tailwind, Material UI, Solidity, NFT Gen, and Figma. Also designed and developed responsive web interfaces for a legal services application, ensuring intuitive navigation, clear information flow, and regulatory compliance. Collaborated with stakeholders to translate requirements into mockups and implemented robust solutions using HTML5, CSS3, JavaScript, and React.js.`
    }
  ];

  return (
    <section id="work-experience" className="section">
      <h2 className="section-title">Work Experience</h2><br></br>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="card-header">
              <div className="company-icon">🏢</div>
              <div>
                <h3>{exp.company}</h3>
                <span className="period">{exp.period}</span>
              </div>
            </div>
            <h4>{exp.project}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;