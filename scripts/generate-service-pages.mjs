import { writeFile } from "node:fs/promises";

const site = "https://rrsolutionsofficials.in";
const contactEmail = "info.rrsolutionsofficial@gmail.com";
const phone = "+91 98233 726865";

const services = [
  {
    slug: "website-development",
    label: "Website Development",
    eyebrow: "Website development",
    title: "Website Development Company in India | RR Solutions",
    description: "RR Solutions builds fast, accessible websites for Indian businesses. Turn more visitors into enquiries with a website designed to grow.",
    headline: "A website that earns attention and <em>moves people to act.</em>",
    intro: "RR Solutions is a website development company for businesses that need more than an online brochure. We plan, design and build responsive websites that clearly explain your value and make it easy for the right customer to get in touch.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=85",
    video: "assets/videos/website-development.mp4",
    benefits: [["Strategy before screens", "We begin with your audience, offer and conversion goals, so every page has a clear job to do."], ["Fast on every device", "Mobile-first layouts, sensible image loading and lean front-end code help your site feel quick and dependable."], ["Search-ready foundations", "Semantic HTML, clear information architecture and technical SEO make your content easier for people and search engines to understand."]],
    deliverables: ["Discovery and content plan", "Custom responsive design", "Accessible front-end development", "Technical SEO setup", "Lead-focused contact flow", "Launch and support guidance"],
    sections: [["Built around the way customers choose", "A business website should answer the questions a potential customer has before they need to ask them: what you do, who you help, why you are credible, and what happens next. We structure service pages, calls to action and supporting content around that decision journey. The result is a clearer digital first impression for customers in Hyderabad, across India and beyond."], ["Designed to be found and understood", "Search visibility starts with useful information and clean implementation. Our website development work includes logical heading structure, unique metadata, descriptive links and a mobile-friendly experience. These elements support organic discovery while keeping the experience straightforward for the person on the page."], ["Ready for the next stage of growth", "Your website needs to keep working after launch. We build flexible page structures that can accommodate new services, campaigns, content and integrations. If your workflow also needs software, AI automation or ongoing support, RR Solutions can help connect those efforts into one practical digital foundation."]],
    faqs: [["What does a business website development project include?", "A typical project includes discovery, information architecture, custom responsive design, front-end development, technical SEO foundations, a contact path and launch support. The exact scope is agreed around your goals, audience and required integrations."], ["Will our website work on mobile devices?", "Yes. Every website is built and checked for mobile, tablet and desktop use. We prioritise readable content, touch-friendly controls and responsive layouts so customers can take action from the device they use."], ["Can you improve an existing business website?", "Yes. RR Solutions can audit an existing website and recommend focused improvements to content structure, page speed, accessibility, technical SEO or conversion paths before planning a wider redesign."]]
  },
  {
    slug: "custom-software-development",
    label: "Custom Software Development",
    eyebrow: "Custom software development",
    title: "Custom Software Development Company | RR Solutions",
    description: "Build custom software around your real workflow with RR Solutions. Scalable, secure business systems for teams across India.",
    headline: "Custom software that fits the way your <em>business actually works.</em>",
    intro: "RR Solutions develops custom software for teams that have outgrown disconnected spreadsheets and rigid off-the-shelf tools. We turn real operating requirements into useful, maintainable applications that help people work with more clarity and control.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
    video: "assets/videos/custom-software.mp4",
    benefits: [["Workflow-led planning", "We map the people, steps and information behind the problem before proposing the software solution."], ["Practical integrations", "Connect the systems your team already relies on, from CRMs and APIs to reporting and internal tools."], ["Room to scale", "A modular foundation lets you add roles, features and integrations as the business evolves."]],
    deliverables: ["Workflow discovery", "Product and technical planning", "Custom web application", "Role-based access", "API and system integrations", "Ongoing enhancement plan"],
    sections: [["Replace friction with a useful system", "When processes are spread across emails, sheets and several disconnected applications, teams spend time chasing information instead of moving work forward. Custom software gives your business one purposeful place to manage the steps, data and responsibilities that matter most."], ["A clear route from requirement to release", "We work through the problem in stages: understand the workflow, prioritise the highest-value features, design the experience, build in testable increments and prepare your team for launch. This keeps decisions visible and helps the project stay centred on real business outcomes."], ["Designed for adoption, not just delivery", "Good software is only valuable when people can use it confidently. We focus on understandable interfaces, sensible permissions and practical handover. Where automation, CRM or ERP capabilities are needed, we can plan those connections as part of the same solution."]],
    faqs: [["When should a business choose custom software?", "Custom software is worth considering when existing tools force manual workarounds, cannot represent your process, create duplicate data or make it difficult to serve customers consistently."], ["Can custom software integrate with existing tools?", "Yes. Integration needs are assessed during discovery. Depending on the systems involved, we can connect custom software with APIs, CRMs, cloud services, payment tools or other internal applications."], ["How do you control scope in a software project?", "We define the core workflow and highest-priority outcomes first, then plan the project in manageable releases. That makes trade-offs clear and preserves room for informed improvements after launch."]]
  },
  {
    slug: "mobile-app-development",
    label: "Mobile App Development",
    eyebrow: "Mobile app development",
    title: "Mobile App Development Company in India | RR Solutions",
    description: "RR Solutions creates useful, mobile-first apps for customers and teams. Plan, build and grow your app with an India-based partner.",
    headline: "Mobile apps that keep your customers and teams <em>moving.</em>",
    intro: "RR Solutions helps businesses turn a clear mobile opportunity into an app people can understand and use. From customer-facing journeys to operational tools, we focus on the simplest useful experience for the job at hand.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=85",
    benefits: [["Useful by design", "We concentrate on the key tasks people need to complete, avoiding complexity that makes adoption harder."], ["Connected to your business", "Plan integrations with your existing APIs, CRM, ordering, support or reporting workflows."], ["Built for real conditions", "Responsive interfaces, clear states and thoughtful testing help the app perform reliably for its intended users."]],
    deliverables: ["App discovery workshop", "User journey and UI design", "Mobile application development", "API integration planning", "Testing and launch support", "Iteration roadmap"],
    sections: [["Start with the customer or team moment that matters", "The best mobile apps solve a specific problem at the right time: ordering on the go, checking a status, coordinating a field team or getting quick support. We identify that moment first, then design the information and interaction needed to make it feel easy."], ["Keep the first release focused", "A focused first version helps you learn quickly without trying to build every idea at once. We prioritise features that create a complete core journey, then use feedback and business goals to shape the next release."], ["Bring mobile into the wider system", "An app should not become another disconnected destination. RR Solutions can plan how it shares data with your website, custom software, CRM, cloud platform or automation workflow so teams have a more consistent view of the business."]],
    faqs: [["Can you help define an app before development begins?", "Yes. Discovery can clarify the problem, target users, core journeys, technical dependencies and a sensible first-release scope before a build is committed."], ["Can a mobile app connect to our existing system?", "Where suitable APIs or integration paths are available, we can plan how the app exchanges data with the systems you already use."], ["How do you decide what belongs in version one?", "We prioritise the smallest set of features that lets a target user complete the key task successfully. Nice-to-have features can be planned as later releases."]]
  },
  {
    slug: "ai-automation",
    label: "AI Automation",
    eyebrow: "AI automation",
    title: "AI Automation Company in India | RR Solutions",
    description: "Automate repetitive business work with practical AI workflows and chatbots from RR Solutions. Start your AI automation project today.",
    headline: "Give your team more time for the work that <em>needs people.</em>",
    intro: "RR Solutions creates practical AI automation for businesses that want to reduce repetitive work without losing control of the customer experience. We focus on useful workflows, clear guardrails and measurable operational improvements.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
    video: "assets/videos/ai-automation.mp4",
    benefits: [["Automation with a purpose", "We look for repeatable tasks, bottlenecks and handoffs where an AI-assisted workflow can make a meaningful difference."], ["Better first responses", "AI chatbots and guided flows can help customers find answers or route enquiries at the moment they are ready to engage."], ["Visible, reviewable workflows", "Clear rules, monitoring and human escalation paths help keep automated processes useful and accountable."]],
    deliverables: ["Automation opportunity audit", "AI assistant and chatbot flows", "Workflow integrations", "Knowledge base structuring", "Escalation and review rules", "Monitoring guidance"],
    sections: [["Use AI where repeatable work is slowing people down", "AI automation is most effective when it supports a well-understood process. We identify activities such as responding to common enquiries, qualifying leads, preparing updates or moving data between systems, then design an appropriate workflow around the real business need."], ["Make automation part of a trustworthy customer journey", "A chatbot or automated reply should be helpful, clear about its role and able to hand over when a person is needed. We plan prompts, source information, escalation paths and review points so automation supports your brand rather than creating uncertainty."], ["Connect insight to action", "The strongest automation projects connect to the rest of your operating system. RR Solutions can pair AI workflows with your CRM, website forms, APIs, cloud tools and reporting so routine information reaches the right person or system at the right time."]],
    faqs: [["What business processes can AI automation support?", "Common starting points include enquiry handling, FAQ assistance, lead qualification, appointment follow-ups, document summaries, internal knowledge retrieval and routine status updates. The right choice depends on the process and available data."], ["Will AI automation replace our team?", "The goal is usually to reduce repetitive work and speed up routine responses, not to remove the judgement and relationship skills people bring to important customer and operational decisions."], ["Can an AI chatbot hand a conversation to a person?", "Yes. A good customer-facing flow includes clear escalation triggers and a simple route to a human when the request needs personal attention or falls outside the approved information."]]
  },
  {
    slug: "api-development",
    label: "API Development",
    eyebrow: "API development",
    title: "API Development Services in India | RR Solutions",
    description: "Connect your systems with secure, dependable API development services from RR Solutions. Simplify data flow and business operations.",
    headline: "Reliable APIs that let your systems <em>work together.</em>",
    intro: "RR Solutions provides API development for businesses that need software, websites and cloud tools to exchange the right information at the right time. We help replace manual handoffs with dependable connections.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
    benefits: [["Clear data contracts", "Define what is exchanged, who can access it and how errors or changes are handled."], ["Secure connection planning", "Use appropriate authentication, permissions and validation to protect business data in transit."], ["Easier operations", "Connect systems to reduce duplicate entry, speed up updates and create a more consistent view of information."]],
    deliverables: ["Integration discovery", "API design and documentation", "Secure endpoint development", "Authentication planning", "Testing and error handling", "Integration handover"],
    sections: [["Turn disconnected tools into a coordinated workflow", "Many teams rely on applications that do useful individual jobs but do not share information well. API development creates the bridge: a controlled way for a website, app, CRM, ERP or custom platform to send and receive the data the workflow needs."], ["Build for clarity and maintainability", "An API is a long-term agreement between systems. We focus on understandable endpoint design, validation, useful error responses and documentation that helps future teams or integrations work safely with the connection."], ["Plan integrations around business consequences", "A technical connection only matters when it improves a business moment: a lead reaches the sales team quickly, an order updates reliably, a customer sees the correct status or reporting reflects a trusted source. We keep those outcomes central throughout planning and testing."]],
    faqs: [["What is an API integration?", "An API integration lets two software systems exchange defined information or trigger actions in a controlled way. It can reduce manual updates and improve consistency across tools."], ["Can you integrate third-party services?", "Yes, where the service provides suitable API access and its terms allow the intended use. We review the available documentation and requirements before scoping the integration."], ["How do you protect data in an API?", "The approach depends on the system, but commonly includes secure transport, authentication, authorisation, validation, least-privilege access and controlled handling of errors and secrets."]]
  },
  {
    slug: "crm-development",
    label: "CRM Development",
    eyebrow: "CRM development",
    title: "CRM Development Services in India | RR Solutions",
    description: "Create a CRM that fits your sales and service process. RR Solutions builds connected customer management workflows for Indian businesses.",
    headline: "Customer relationships, organised around <em>your next best action.</em>",
    intro: "RR Solutions helps growing businesses plan and develop CRM workflows that make leads, conversations, follow-ups and customer records easier to manage. The focus is a system your team will genuinely use.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    benefits: [["One customer view", "Bring important customer context into a clearer, more dependable place for sales and service teams."], ["Process-led stages", "Shape pipelines, fields, reminders and permissions around the way your team actually qualifies and supports customers."], ["Connected follow-through", "Link forms, communication, reporting and automation so the next action is less likely to be missed."]],
    deliverables: ["CRM workflow mapping", "Pipeline and record design", "Role and permission setup", "Website and API integrations", "Automation opportunities", "Reporting plan"],
    sections: [["Make every follow-up easier to see", "A CRM should reduce the uncertainty around who owns the next step and what a customer has already been told. We map the path from first enquiry through delivery or support, then design a practical place for the information your team needs."], ["Create a process your team can adopt", "A complex CRM with unnecessary fields quickly becomes another task people avoid. We focus on the minimum useful information, clear stages and sensible prompts so updating a record supports the work instead of interrupting it."], ["Bring sales, service and operations closer together", "When appropriate, CRM development can connect lead forms, customer communication, custom software, APIs and AI automation. This reduces duplicate entry and creates a better foundation for thoughtful reporting and customer service."]],
    faqs: [["Do we need a custom CRM instead of an off-the-shelf tool?", "Not always. We begin by assessing your workflow and current tools. Customisation or a tailored CRM is most useful when your process, data model or integrations cannot be handled effectively by standard options."], ["Can a CRM capture website enquiries?", "Yes. A website form can be connected so qualified enquiries reach the right pipeline or team with the details needed for a timely follow-up."], ["What makes a CRM easier for teams to adopt?", "Clear stages, minimal manual entry, relevant fields, useful reminders and training around the actual day-to-day workflow all contribute to adoption."]]
  },
  {
    slug: "erp-development",
    label: "ERP Development",
    eyebrow: "ERP development",
    title: "ERP Development Services in India | RR Solutions",
    description: "Plan and develop ERP workflows that bring operations, data and decisions together. Speak with RR Solutions about your business systems.",
    headline: "Operational clarity for a business with <em>more moving parts.</em>",
    intro: "RR Solutions helps organisations plan ERP development around the processes that need a shared, dependable source of truth. We focus on practical modules, reliable data flow and a rollout path teams can manage.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=85",
    benefits: [["Connected operations", "Bring related operational information and responsibilities into a more coordinated system."], ["Role-aware access", "Plan views, approvals and controls around the decisions each team member needs to make."], ["Useful reporting", "Create a stronger foundation for timely, consistent reporting across core business activities."]],
    deliverables: ["Process and module discovery", "ERP roadmap", "Role and approval design", "Module development", "Integration planning", "Rollout and support plan"],
    sections: [["Start with the operational information that must agree", "ERP development is most valuable where different teams depend on the same accurate information but currently manage it in separate places. We identify the high-impact processes, owners and data relationships before recommending modules or a rollout sequence."], ["Avoid trying to solve everything at once", "A phased ERP approach lets the business stabilise a core process before expanding. We prioritise the modules that remove the biggest operational friction, establish controls and make future integration easier."], ["Support more confident decisions", "When operations share a dependable view of the relevant data, leaders spend less time reconciling conflicting reports. RR Solutions can also plan connections to CRM, custom software, cloud services and APIs where those systems need to participate in the wider workflow."]],
    faqs: [["What is ERP development?", "ERP development involves planning and building systems that coordinate core business processes and data, often across operations, approvals, inventory, finance-related workflows or reporting."], ["Can an ERP be introduced in phases?", "Yes. A phased rollout is often the most practical route. It allows the team to validate a core workflow before adding more modules, users or integrations."], ["Will an ERP connect to our existing tools?", "Integration needs are evaluated during discovery. Where appropriate, APIs and planned data flows can connect the ERP with existing business systems."]]
  },
  {
    slug: "cloud-solutions",
    label: "Cloud Solutions",
    eyebrow: "Cloud solutions",
    title: "Cloud Solutions Company in India | RR Solutions",
    description: "Use cloud solutions to run dependable, scalable business systems. RR Solutions helps plan and connect cloud-based applications and workflows.",
    headline: "Cloud foundations that keep your business <em>connected and ready.</em>",
    intro: "RR Solutions helps businesses plan cloud solutions that make applications, data and collaboration more available without adding unnecessary complexity. We focus on a practical architecture that matches the work you need to do.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
    benefits: [["Fit-for-purpose architecture", "Choose an approach based on your applications, users, data needs and growth plans rather than a one-size-fits-all stack."], ["Better availability planning", "Design for dependable access, backups and sensible recovery considerations around critical business workflows."], ["Connected delivery", "Use cloud services as a foundation for websites, software, APIs, automation and team collaboration."]],
    deliverables: ["Cloud readiness discovery", "Architecture and migration plan", "Application deployment guidance", "Integration planning", "Access and security considerations", "Operational handover"],
    sections: [["Choose the cloud approach that serves the work", "Cloud solutions are not just about moving files or applications online. They are about making the systems people depend on available, manageable and easier to connect. We start with the business workflow and technical constraints, then define a practical route forward."], ["Plan availability and responsibility clearly", "A good cloud plan identifies what must remain available, how access is controlled, where backups fit and who is responsible for ongoing operation. This creates a more dependable foundation than simply adding new services without a clear operating model."], ["Create a foundation for connected services", "Cloud capabilities can support a faster website, a custom application, secure API connections, data workflows and AI automation. We help you see those pieces as part of one system so future improvements can be planned with more confidence."]],
    faqs: [["What are cloud solutions for a small or growing business?", "They can include cloud-hosted applications, storage, collaboration tools, managed deployments, integrations and infrastructure planning. The right mix depends on your current systems and business requirements."], ["Can you help us move an existing application to the cloud?", "We can assess the current application, dependencies, data and operational requirements, then recommend a safe and phased migration plan where suitable."], ["How is cloud security considered?", "Security is planned around the service, data sensitivity and access needs. Common considerations include identity controls, permissions, secure configuration, backups and monitoring responsibilities."]]
  },
  {
    slug: "ui-ux-design",
    label: "UI/UX Design",
    eyebrow: "UI UX design",
    title: "UI UX Design Services in India | RR Solutions",
    description: "Create clear, usable digital experiences with UI UX design from RR Solutions. Improve journeys across websites, apps and business software.",
    headline: "Digital experiences people can understand <em>without a manual.</em>",
    intro: "RR Solutions provides UI UX design for websites, mobile apps and business software. We turn complex requirements into clearer user journeys, interfaces and interactions that support the intended action.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=85",
    benefits: [["Clearer journeys", "Map what people need to accomplish and remove unnecessary steps, choices and confusion along the way."], ["Consistent interfaces", "Use reusable patterns and considered visual hierarchy to make key actions easier to recognise."], ["Designed around evidence", "Combine business goals, user context and practical feedback to make thoughtful design decisions."]],
    deliverables: ["UX discovery", "User flow mapping", "Wireframes and prototypes", "Interface design", "Design system foundations", "Usability feedback plan"],
    sections: [["Make the important action feel obvious", "Strong UI UX design is not decoration added at the end of a build. It clarifies the route from intention to outcome: where people start, what they need to know, how they make a choice and what confirms the result."], ["Balance user needs with business goals", "A useful interface helps people complete their task while giving the business a clear route to the intended outcome, whether that is an enquiry, a purchase, a completed workflow or better self-service. We use hierarchy and plain language to make that balance visible."], ["Create a design foundation that development can use", "Design decisions are most valuable when they translate cleanly into implementation. We prepare flows, components and responsive states that support website development, mobile app development and custom software work without losing the thinking behind the experience."]],
    faqs: [["What is the difference between UI and UX design?", "UX design focuses on the overall journey and usefulness of the experience. UI design focuses on the interface people see and use. They work together to make a digital product clearer and more effective."], ["Can UI UX design improve an existing product?", "Yes. We can review a website, app or internal tool to identify confusing journeys, unclear content, inconsistent interfaces or barriers to completing important tasks."], ["Do you provide prototypes before development?", "Where helpful, we can create wireframes or interactive prototypes so stakeholders can review the key journey before the development work begins."]]
  },
  {
    slug: "ecommerce-solutions",
    label: "E-Commerce Solutions",
    eyebrow: "E-commerce development",
    title: "E-Commerce Website Development Company | RR Solutions",
    description: "RR Solutions builds secure, mobile-friendly e-commerce websites that help customers discover, buy and return with confidence.",
    headline: "Make buying from you feel <em>effortless.</em>",
    intro: "RR Solutions builds e-commerce experiences that guide customers from discovery to checkout with clarity. We combine an easy-to-use catalogue, a dependable purchase journey and the operational tools your team needs to manage orders.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    video: "assets/videos/ecommerce-solutions.mp4",
    benefits: [["A store built to convert", "Clear product journeys and intuitive checkout flows designed around real shoppers."], ["Payments customers trust", "Plan secure payment and order processes that match the needs of your business and customers."], ["Simple everyday operations", "Make product, inventory and order information easier for your team to maintain."]],
    deliverables: ["Product catalogue structure", "Mobile shopping UX", "Checkout and payment planning", "Order workflow setup", "Search-ready product pages", "Store launch support"],
    sections: [["Help customers move from interest to purchase", "An e-commerce website needs to make products easy to find, compare and trust. We focus on categories, product detail, clear next steps and a checkout experience that respects the customer's time and device."], ["Bring the store into your operation", "Orders and product information need a practical path to the people who manage them. We plan how the e-commerce experience connects with your inventory, CRM, support process or other business systems where appropriate."], ["Build a foundation for ongoing improvement", "E-commerce success benefits from learning: which products are found, where customers pause and what questions arise. A well-structured store makes it easier to improve content, campaigns, product presentation and operational workflows over time."]],
    faqs: [["Can you build an e-commerce website for a small business?", "Yes. The store can be scoped around your product catalogue, order process, customer needs and growth plans rather than unnecessary complexity."], ["Will the e-commerce site work on mobile?", "Yes. Mobile shopping is considered throughout the customer journey, from browsing and product detail through checkout and confirmation."], ["Can an online store connect to other systems?", "Depending on the platform and available integrations, a store can connect to payment, inventory, CRM, support or reporting tools."]]
  },
  {
    slug: "digital-marketing",
    label: "Digital Marketing",
    eyebrow: "Digital marketing",
    title: "Digital Marketing and SEO Services | RR Solutions",
    description: "RR Solutions provides practical SEO and digital marketing services that help the right customers discover your business and take action.",
    headline: "Be easy to find and difficult to <em>overlook.</em>",
    intro: "RR Solutions provides practical digital marketing for businesses that want clearer visibility and better-qualified enquiries. We connect search, content and campaign activity to the pages and services that matter to your audience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    video: "assets/videos/digital-marketing.mp4",
    benefits: [["Visibility with intent", "SEO and content direction shaped around the questions customers ask when they are ready to explore a solution."], ["Campaigns with a destination", "Give paid, social or email activity a relevant, well-structured landing experience."], ["A more connected message", "Keep your offer, content and calls to action aligned across the channels that bring people to your business."]],
    deliverables: ["SEO opportunity review", "Keyword and content mapping", "On-page optimisation", "Campaign landing pages", "Conversion path review", "Reporting framework"],
    sections: [["Make your expertise easier to discover", "Digital marketing works best when it helps a potential customer find a clear answer at the right moment. We organise keyword themes, helpful content and service pages around real buying questions instead of relying on generic claims."], ["Connect visibility to a useful next step", "A click is only the start of the journey. We make sure the page, offer and call to action match the expectation created by the search result or campaign, giving visitors a clearer reason to continue the conversation."], ["Build marketing on solid technical foundations", "Search-friendly content depends on a healthy website. RR Solutions can combine marketing activity with website development, technical SEO, UI UX design and analytics-ready conversion paths so the work is more coherent across the customer journey."]],
    faqs: [["What does digital marketing include?", "The right mix can include SEO, content planning, campaign landing pages, paid-media coordination, social direction and conversion optimisation. Scope is based on your goals and current digital foundation."], ["How does SEO support lead generation?", "SEO helps useful service and supporting content appear for relevant searches. The website then needs to make the next step clear for the visitor, such as requesting a consultation or exploring a solution."], ["Can you improve marketing on an existing website?", "Yes. We can review site structure, service pages, metadata, content gaps and conversion paths to identify practical priorities."]]
  },
  {
    slug: "support-maintenance",
    label: "Support and Maintenance",
    eyebrow: "Support and maintenance",
    title: "Website and Software Maintenance Services | RR Solutions",
    description: "Keep your website and software secure, current and dependable with practical support and maintenance from RR Solutions.",
    headline: "Launch is a milestone. Reliable improvement is the <em>long-term work.</em>",
    intro: "RR Solutions provides website and software maintenance for organisations that want a dependable partner after launch. We help keep digital tools current, address issues clearly and plan improvements that continue to support the business.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85",
    video: "assets/videos/support-maintenance.mp4",
    benefits: [["A direct support path", "Have a dependable route for fixes, questions and planned changes when they are needed."], ["Routine care", "Review updates, performance and security considerations so important digital tools do not stand still."], ["Improvement over time", "Use feedback and business change to prioritise enhancements after the initial launch."]],
    deliverables: ["Maintenance review", "Update and patch planning", "Issue resolution process", "Performance checks", "Content support options", "Enhancement roadmap"],
    sections: [["Protect the value of what you have already built", "Websites and business software need care as services change, content evolves and new requirements emerge. Ongoing support creates a clearer way to handle routine updates and prioritise the work that keeps the system useful."], ["Make requests and decisions easier to manage", "A reliable maintenance relationship is not just a queue for bugs. It is a practical process for identifying issues, understanding impact, agreeing priority and communicating the next step so nothing important gets lost."], ["Keep improving with the business", "After launch, the most valuable next change often becomes clearer through real use. RR Solutions can help assess feedback, performance and business priorities, then connect support work with SEO, design, software or automation improvements when needed."]],
    faqs: [["What does website maintenance cover?", "Coverage can include updates, security-related review, content changes, performance checks, issue resolution and planned improvements. The right scope depends on the website, software and support expectations."], ["Can you maintain a website you did not build?", "In many cases, yes. We start by reviewing the current technology, access, documentation and immediate priorities before agreeing a practical support plan."], ["How are urgent issues handled?", "Support expectations, contact paths and priority levels should be agreed up front so urgent issues have a clear route and the business knows what information to provide."]]
  }
];

const iconClasses = ["fa-pen-ruler", "fa-gears", "fa-bolt", "fa-shield-halved", "fa-chart-simple", "fa-handshake"];

function escape(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function selectedServices(service) {
  return services.filter((item) => item.slug !== service.slug).slice(0, 6);
}

function schemaFor(service) {
  const url = `${site}/${service.slug}`;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: service.title,
        description: service.description,
        isPartOf: { "@id": `${site}/#website` },
        about: { "@id": `${url}#service` },
        inLanguage: "en-IN"
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.label,
        description: service.description,
        url,
        provider: { "@id": `${site}/#organization` },
        areaServed: ["Hyderabad", "Pune", "Mumbai", "Bangalore", "Delhi", "Chennai", "India"],
        serviceType: service.label
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${site}/#services` },
          { "@type": "ListItem", position: 3, name: service.label, item: url }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: service.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } }))
      }
    ]
  }).replace(/</g, "\\u003c");
}

function head(service) {
  const url = `${site}/${service.slug}`;
  return `  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escape(service.description)}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <meta name="theme-color" content="#061b39">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="icon" href="assets/icons/favicon-32.png" sizes="32x32" type="image/png">
  <link rel="apple-touch-icon" href="assets/icons/icon-192.png">
  <link rel="manifest" href="manifest.json">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="RR Solutions">
  <meta property="og:locale" content="en_IN">
  <meta property="og:title" content="${escape(service.title)}">
  <meta property="og:description" content="${escape(service.description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${site}/assets/images/rr-solutions-social.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escape(service.title)}">
  <meta name="twitter:description" content="${escape(service.description)}">
  <meta name="twitter:image" content="${site}/assets/images/rr-solutions-social.jpg">
  <title>${escape(service.title)}</title>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com" crossorigin>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/site.css">
  <script type="application/ld+json">${schemaFor(service)}</script>`;
}

function navigation() {
  return `  <div class="topbar"><div class="container d-flex flex-wrap justify-content-center justify-content-md-between gap-2"><span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Hyderabad, India &middot; Serving businesses worldwide</span><a href="mailto:${contactEmail}">${contactEmail}</a></div></div>
  <nav class="navbar navbar-expand-lg bg-white sticky-top" aria-label="Main navigation"><div class="container"><a class="navbar-brand" href="/"><img src="assets/images/rr-solutions-logo.webp" alt="RR Solutions" width="58" height="58" decoding="async"><span class="brand-name"><span>RR</span> Solutions</span></a><button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation"><i class="fa-solid fa-bars-staggered" aria-hidden="true"></i></button><div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav ms-auto align-items-lg-center"><li class="nav-item"><a class="nav-link" href="/">Home</a></li><li class="nav-item"><a class="nav-link active" href="/#services">Services</a></li><li class="nav-item"><a class="nav-link" href="/blog">Insights</a></li><li class="nav-item"><a class="nav-link" href="/#about">About</a></li><li class="nav-item ms-lg-3"><a class="btn btn-primary btn-sm" href="#contact">Start a project <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></li></ul></div></div></nav>`;
}

function footer() {
  return `  <footer><div class="container"><div class="footer-bottom mt-0 border-0 pt-0"><span>&copy; <span id="year"></span> RR Solutions. All rights reserved.</span><div class="d-flex align-items-center gap-3 flex-wrap"><a href="/">Home</a><a href="/blog">Insights</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><nav class="social-links mt-0" aria-label="RR Solutions social links"><a href="https://www.linkedin.com/company/rr-solutions-india" target="_blank" rel="me noopener noreferrer" aria-label="RR Solutions on LinkedIn"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a><a href="https://www.instagram.com/rrsolutionsofficial/" target="_blank" rel="me noopener noreferrer" aria-label="RR Solutions on Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a><a href="https://www.facebook.com/people/RR-Solutions/61592745657174/?rdid=kD4Ptlix6J9WSHrn&amp;share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F192ETXgL6i%2F" target="_blank" rel="me noopener noreferrer" aria-label="RR Solutions on Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a></nav></div></div></div></footer>`;
}

function servicePage(service) {
  const related = selectedServices(service);
  const videoMarkup = service.video
    ? `<button class="play-button" type="button" data-video-trigger aria-label="Play ${escape(service.label)} video"><i class="fa-solid fa-play" aria-hidden="true"></i></button>`
    : "";
  const modal = service.video
    ? `  <div class="modal fade" id="watch" tabindex="-1" aria-labelledby="watch-title" aria-hidden="true"><div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content bg-dark"><div class="modal-header border-0"><h2 class="modal-title fs-6 text-white" id="watch-title">${escape(service.label)} video</h2><button class="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close video"></button></div><div class="ratio ratio-16x9"><video data-video controls playsinline preload="none" data-src="${service.video}" poster="${escape(service.image)}">Your browser does not support embedded video.</video></div></div></div></div>`
    : "";
  const benefits = service.benefits.map(([title, copy], index) => `<div class="benefit-card"><span class="eyebrow"><span></span> 0${index + 1}</span><h3>${escape(title)}</h3><p>${escape(copy)}</p></div>`).join("\n");
  const deliverables = service.deliverables.map((item, index) => `<div class="col-sm-6"><div class="deliverable"><i class="fa-solid ${iconClasses[index]}" aria-hidden="true"></i>${escape(item)}</div></div>`).join("\n");
  const copy = service.sections.map(([title, paragraph]) => `<section><h3>${escape(title)}</h3><p>${escape(paragraph)}</p></section>`).join("\n");
  const faqs = service.faqs.map(([question, answer], index) => `<div class="accordion-item"><h3 class="accordion-header" id="faq-heading-${index}"><button class="accordion-button${index ? " collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#faq-${index}" aria-expanded="${index ? "false" : "true"}" aria-controls="faq-${index}">${escape(question)}</button></h3><div id="faq-${index}" class="accordion-collapse collapse${index ? "" : " show"}" aria-labelledby="faq-heading-${index}" data-bs-parent="#service-faq"><div class="accordion-body">${escape(answer)}</div></div></div>`).join("\n");
  const relatedMarkup = related.map((item) => `<li><a href="/${item.slug}">${escape(item.label)} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></li>`).join("\n");
  return `<!doctype html>
<html lang="en-IN">
<head>
${head(service)}
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>
${navigation()}
  <main id="main-content" tabindex="-1">
    <section class="page-hero"><div class="container"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span class="mx-2">/</span><a href="/#services">Services</a><span class="mx-2">/</span><span>${escape(service.label)}</span></nav><span class="eyebrow"><span></span> ${escape(service.eyebrow)}</span><h1>${service.headline}</h1><p class="lead mt-3">${escape(service.intro)}</p></div></section>
    <section class="section-pad"><div class="container"><div class="service-video"><img src="${escape(service.image)}" alt="${escape(service.label)} planning session by RR Solutions" width="1400" height="700" fetchpriority="high" decoding="async">${videoMarkup}</div><div class="row g-5 align-items-center mt-2"><div class="col-lg-5"><span class="eyebrow"><span></span> Designed for impact</span><h2>A better digital experience starts with a smarter <em>foundation.</em></h2><p class="mt-3 text-secondary">Every engagement is shaped around the outcome your business needs, the people using the solution and the systems that need to work together.</p></div><div class="col-lg-6 offset-lg-1">${benefits}</div></div></div></section>
    <section class="deliverables section-pad"><div class="container"><div class="row align-items-center g-5"><div class="col-lg-5"><span class="eyebrow"><span></span> What is included</span><h2>A focused solution, made <em>for you.</em></h2><p class="text-secondary mt-3">The final scope is tailored to your priorities. These are common elements we bring together to create a useful, maintainable result.</p></div><div class="col-lg-6 offset-lg-1"><div class="row g-3">${deliverables}</div></div></div></div></section>
    <section class="section-pad service-copy"><div class="container"><div class="row g-5"><div class="col-lg-4"><span class="eyebrow"><span></span> How we help</span><h2>Technology that supports the way you <em>grow.</em></h2><p class="text-secondary mt-3">RR Solutions serves small businesses, startups and established teams in Hyderabad and across India with practical digital systems.</p></div><div class="col-lg-7 offset-lg-1">${copy}</div></div></div></section>
    <section class="faq-section section-pad"><div class="container"><div class="row g-5"><div class="col-lg-4"><span class="eyebrow"><span></span> Common questions</span><h2>Plan the next step with <em>clarity.</em></h2><p class="text-secondary mt-3">Every project is different. These answers cover the questions we hear most often when a team is evaluating ${escape(service.label.toLowerCase())}.</p></div><div class="col-lg-7 offset-lg-1"><div class="accordion" id="service-faq">${faqs}</div></div></div></div></section>
    <section class="related-services section-pad"><div class="container"><span class="eyebrow"><span></span> Explore related services</span><h2>Build a more connected <em>digital foundation.</em></h2><ul>${relatedMarkup}</ul><a class="text-link" href="/blog">Explore our digital growth topics <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div></section>
    <section class="service-cta" id="contact"><div class="container"><div class="row align-items-center g-4"><div class="col-lg-7"><span class="eyebrow eyebrow-light"><span></span> Start with a free consultation</span><h2>Let us make ${escape(service.label)} work harder for your <em>business.</em></h2><p>Tell us what you are working toward. We will help you identify the clearest next step.</p></div><div class="col-lg-4 offset-lg-1"><div class="service-contact"><a href="mailto:${contactEmail}"><i class="fa-solid fa-envelope" aria-hidden="true"></i> ${contactEmail}</a><a href="tel:+9198233726865"><i class="fa-solid fa-phone" aria-hidden="true"></i> ${phone}</a><a class="btn btn-primary mt-3 w-100" href="mailto:${contactEmail}?subject=Free%20Consultation%20Request">Request consultation <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div></div></div></div></section>
  </main>
${footer()}
${modal}
  <button class="back-to-top" type="button" aria-label="Back to top"><i class="fa-solid fa-arrow-up" aria-hidden="true"></i></button>
  <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script defer src="assets/js/main.js"></script>
</body>
</html>
`;
}

const topics = [
  ["AI and automation", ["How AI Automation Can Reduce Repetitive Work in Small Businesses", "AI Chatbots for Customer Support: What to Plan Before You Launch", "Business Automation Ideas for Restaurants and Clinics", "How to Connect AI Workflows to Your CRM", "Human Handoffs in AI Chatbots: A Practical Guide", "AI Automation vs Traditional Workflow Automation", "How to Audit a Process for Automation Opportunities", "Data and Privacy Considerations for Business AI"]],
  ["Website development", ["How to Choose a Website Development Company in India", "What Should a Small Business Website Include?", "Website Redesign Checklist for Growing Businesses", "How Fast Should a Business Website Load?", "Website Accessibility Basics for Indian Businesses", "Service Page SEO: How to Turn Visits into Enquiries", "Website Design for Hospitals, Clinics and Healthcare Teams", "E-Commerce Website Checklist Before Launch", "How to Write Website Content That Answers Buyer Questions", "When Does a Business Need a Custom Website?"]],
  ["Custom software", ["Signs Your Business Has Outgrown Spreadsheets", "Custom Software vs Off-the-Shelf Tools: How to Decide", "How to Scope a Custom Software Project", "How to Build Software Around a Real Workflow", "The Role of APIs in Custom Business Software", "How to Plan a Software MVP", "Business Software Security Basics for Decision-Makers", "How to Improve Team Adoption of New Software", "What Makes a Software Dashboard Useful", "How to Plan a Phased Software Rollout"]],
  ["CRM, ERP and cloud", ["How a CRM Can Improve Lead Follow-Up", "CRM Data Fields That Sales Teams Actually Need", "When Does a Growing Business Need ERP Software?", "ERP Implementation Phases Explained", "How CRM and ERP Systems Work Together", "Cloud Migration Checklist for Small Businesses", "Cloud Security Questions to Ask Before a Migration", "How to Improve Reporting with Connected Business Systems"]],
  ["Mobile apps and UX", ["How to Validate a Mobile App Idea Before Development", "Mobile App Features to Prioritise in Version One", "UI UX Design Principles for Business Applications", "How to Reduce Drop-Off in a Mobile App Journey", "Website vs Mobile App: Which Does Your Business Need?", "How to Test a Digital Product with Real Users", "Design System Basics for Growing Digital Products"]],
  ["SEO and digital growth", ["Technical SEO Checklist for a New Business Website", "How Local SEO Helps Service Businesses in India", "How to Create a Content Cluster Around a Core Service", "What Is a Canonical URL and Why Does It Matter?", "How Schema Markup Helps Search Engines Understand a Website", "Core Web Vitals Explained for Business Owners", "How to Plan a B2B Content Calendar", "How to Measure Website Leads Without Guesswork", "SEO Content Brief Template for Service Pages"]]
];

function blogPage() {
  const articleSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site}/blog#webpage`,
    url: `${site}/blog`,
    name: "Digital Growth Insights | RR Solutions",
    description: "Practical planning topics for website development, software, AI automation, CRM, ERP, cloud and digital growth.",
    isPartOf: { "@id": `${site}/#website` },
    inLanguage: "en-IN"
  }).replace(/</g, "\\u003c");
  const topicGroups = topics.map(([category, list]) => `<section class="blog-topic-group"><h2>${escape(category)}</h2><ol>${list.map((topic) => `<li>${escape(topic)}</li>`).join("")}</ol></section>`).join("\n");
  const serviceLinks = services.slice(0, 9).map((service) => `<li><a href="/${service.slug}">${escape(service.label)} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></li>`).join("\n");
  return `<!doctype html>
<html lang="en-IN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Practical digital growth topics from RR Solutions: websites, custom software, AI automation, CRM, ERP, cloud and SEO.">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <meta name="theme-color" content="#061b39">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="icon" href="assets/icons/favicon-32.png" sizes="32x32" type="image/png">
  <link rel="apple-touch-icon" href="assets/icons/icon-192.png">
  <link rel="manifest" href="manifest.json">
  <link rel="canonical" href="${site}/blog">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="RR Solutions">
  <meta property="og:locale" content="en_IN">
  <meta property="og:title" content="Digital Growth Insights | RR Solutions">
  <meta property="og:description" content="Practical topics for website development, custom software, AI automation, CRM, ERP, cloud and SEO.">
  <meta property="og:url" content="${site}/blog">
  <meta property="og:image" content="${site}/assets/images/rr-solutions-social.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Digital Growth Insights | RR Solutions">
  <meta name="twitter:description" content="Practical planning topics for your next website, software or automation project.">
  <meta name="twitter:image" content="${site}/assets/images/rr-solutions-social.jpg">
  <title>Digital Growth Insights | RR Solutions</title>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/site.css">
  <script type="application/ld+json">${articleSchema}</script>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>
${navigation()}
  <main id="main-content" tabindex="-1">
    <section class="page-hero"><div class="container"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span class="mx-2">/</span><span>Insights</span></nav><span class="eyebrow"><span></span> Digital growth insights</span><h1>Useful topics for your next <em>digital decision.</em></h1><p class="lead mt-3">A structured editorial plan for business leaders exploring website development, custom software, AI automation and connected operations.</p></div></section>
    <section class="section-pad"><div class="container"><div class="row g-5"><div class="col-lg-4"><span class="eyebrow"><span></span> Content architecture</span><h2>Six pillar clusters. Fifty focused <em>articles.</em></h2><p class="text-secondary mt-3">Publish each topic as a dedicated, expert-reviewed article with a clear author, date, table of contents, related posts and article schema. Keep only genuinely published articles in the sitemap and RSS feed.</p></div><div class="col-lg-7 offset-lg-1"><div class="blog-topic-grid">${topicGroups}</div></div></div></div></section>
    <section class="related-services section-pad"><div class="container"><span class="eyebrow"><span></span> Explore the services behind the topics</span><h2>Turn research into a practical <em>next step.</em></h2><ul>${serviceLinks}</ul><a class="text-link" href="/#contact">Discuss your project with RR Solutions <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div></section>
  </main>
${footer()}
  <button class="back-to-top" type="button" aria-label="Back to top"><i class="fa-solid fa-arrow-up" aria-hidden="true"></i></button>
  <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script defer src="assets/js/main.js"></script>
</body>
</html>
`;
}

for (const service of services) {
  await writeFile(new URL(`../${service.slug}.html`, import.meta.url), servicePage(service), "utf8");
}

await writeFile(new URL("../blog.html", import.meta.url), blogPage(), "utf8");

const redirect = `<!doctype html>\n<html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,follow"><link rel="canonical" href="${site}/custom-software-development"><meta http-equiv="refresh" content="0; url=/custom-software-development"><title>Custom Software Development | RR Solutions</title></head><body><main><p>Continue to <a href="/custom-software-development">Custom Software Development</a>.</p></main></body></html>\n`;
await writeFile(new URL("../custom-software.html", import.meta.url), redirect, "utf8");

console.log(`Generated ${services.length} service pages and the insights hub.`);
