import {
  NavLink,
  Service,
  Industry,
  ServiceArea,
  BlogPost,
  HomePageContent,
  AboutPageContent,
  ServiceOverviewContent,
  IndustriesOverviewContent,
  ServiceAreasOverviewContent,
  BlogOverviewContent,
  ContactPageContent,
  FooterContent,
  Cta,
} from './types';

// --- Global Constants ---

export const COMPANY_NAME = 'Pillars Electrical, LLC';
export const COMPANY_ADDRESS = '11333 Chimney Rock Rd, Houston TX 77035';
export const DISPATCH_PHONE = '762-225-2425';
export const INFO_EMAIL = 'info@pillarselectrical.com';

// --- Navigation ---
export const NAVIGATION_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    subLinks: [
      { name: 'Emergency Electrical Repair', path: '/services/emergency-electrical-repair' },
      { name: 'Power Distribution & Switchgear Upgrades', path: '/services/power-distribution-switchgear-upgrades' },
      { name: 'Lighting & Energy Retrofits', path: '/services/lighting-energy-retrofits' },
      { name: 'New Construction & Tenant Build-Outs', path: '/services/new-construction-tenant-build-outs' },
      { name: 'Preventive Maintenance & Testing', path: '/services/preventive-maintenance-testing' },
    ],
  },
  {
    name: 'Industries',
    path: '/industries',
    subLinks: [
      { name: 'Warehouses & Distribution', path: '/industries/warehouses-distribution' },
      { name: 'Data Centers & Technology', path: '/industries/data-centers-technology' },
      { name: 'Manufacturing & Industrial', path: '/industries/manufacturing-industrial' },
      { name: 'Multifamily & Mixed Use', path: '/industries/multifamily-mixed-use' },
      { name: 'Retail & Commercial Property', path: '/industries/retail-commercial-property' },
    ],
  },
  {
    name: 'Service Areas',
    path: '/service-areas',
    subLinks: [
      { name: 'Houston', path: '/service-areas/houston' },
      { name: 'Galveston', path: '/service-areas/galveston' },
      { name: 'The Woodlands', path: '/service-areas/the-woodlands' },
      { name: 'Katy', path: '/service-areas/katy' },
      { name: 'Sugar Land', path: '/service-areas/sugar-land' },
      { name: 'Richmond', path: '/service-areas/richmond' },
      { name: 'College Station / Bryan', path: '/service-areas/college-station-bryan' },
      { name: 'Beaumont', path: '/service-areas/beaumont' },
      { name: 'Baytown', path: '/service-areas/baytown' },
      { name: 'Port Arthur', path: '/service-areas/port-arthur' },
    ],
  },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

// --- Services Data ---
export const SERVICES_DATA: Service[] = [
  {
    id: 'emergency-electrical-repair',
    title: 'Emergency Electrical Repair',
    shortDescription: 'When power fails, our crews respond immediately — day or night.',
    heroHeadline: '24/7 Emergency Electrical Repair Across Houston',
    heroSubheadline: 'When power fails, every minute matters.',
    description: [
      'When the lights go out or equipment shuts down, your operation can’t afford to wait. Pillars Electrical provides 24-hour emergency service for commercial and industrial clients across Houston and surrounding metros.',
      'Our licensed electricians are trained to diagnose, repair, and restore power safely — whether it’s a tripped breaker, a blown panel, or a system overload. We arrive fast, equipped, and ready to work.'
    ],
    commonCalls: [
      'Power outages or surges',
      'Breaker or fuse failures',
      'Lighting system malfunctions',
      'Burnt wiring or short circuits',
      'Equipment shutdowns or overheating',
    ],
    ctas: [
      { text: `Call Dispatch ${DISPATCH_PHONE}`, isPhone: true, phone: DISPATCH_PHONE },
      { text: 'Request Service Online', path: '/contact' },
    ],
    imageUrl: 'https://cdn.envato.com/files/197143924/Preview_Image.jpg', // Maintenance Engineers checking electricity
  },
  {
    id: 'power-distribution-switchgear-upgrades',
    title: 'Power Distribution & Switchgear Upgrades',
    shortDescription: 'Future-proof your facility with custom system upgrades.',
    heroHeadline: 'Power Distribution That Keeps Texas Running',
    heroSubheadline: 'Modern systems for today’s industrial demands.',
    description: [
      'Commercial power systems evolve fast. Old panels, undersized breakers, and outdated switchgear can’t keep up with the loads of today’s operations.',
      'Pillars Electrical designs and installs custom power distribution systems built to scale. From new switchgear assemblies to panel upgrades and transformer installations, we keep your facility running efficiently and safely.',
    ],
    capabilities: [
      'Main service upgrades and expansions',
      'Switchgear installation and modernization',
      'Transformer and load balancing',
      'Metering and monitoring systems',
      'Arc-flash analysis and compliance',
    ],
    ctas: [
      { text: 'Request a Site Evaluation', path: '/contact' },
    ],
    imageUrl: 'https://cdn.envato.com/files/342157077/Preview_Image.jpg', // Control Panels in Electrical station
  },
  {
    id: 'lighting-energy-retrofits',
    title: 'Lighting & Energy Retrofits',
    shortDescription: 'Save on energy, enhance visibility, and reduce maintenance costs.',
    heroHeadline: 'Lighting That Works Smarter and Costs Less',
    heroSubheadline: 'Save energy, improve visibility, and extend the life of your system.',
    description: [
      'Outdated lighting doesn’t just look bad — it wastes power and creates safety risks. Our retrofit specialists replace legacy fixtures with modern LED systems that brighten your facility and cut energy bills by up to 60%.',
      'We handle full lighting conversions for warehouses, parking lots, retail centers, and multifamily developments — including controls, motion sensors, and daylight harvesting systems.',
    ],
    bullets: [
      'LED conversions and upgrades',
      'Smart lighting controls and sensors',
      'Emergency and exit lighting',
      'Parking lot and exterior illumination',
      'Rebates and energy audit assistance',
    ],
    ctas: [
      { text: 'Schedule an Energy Audit', path: '/contact' },
    ],
    imageUrl: 'https://cdn.envato.com/files/383196924/Preview_Image.jpg', // Electricians Install Led Lamps on Entertainment Center Ceiling
  },
  {
    id: 'new-construction-tenant-build-outs',
    title: 'New Construction & Tenant Build-Outs',
    shortDescription: 'From design to finish, we wire new spaces ready for operation.',
    heroHeadline: 'Built Right From the Start',
    heroSubheadline: 'Electrical infrastructure for new commercial spaces.',
    description: [
      'Pillars Electrical partners with developers, GCs, and property owners to deliver complete electrical systems for new commercial construction and tenant build-outs.',
      'From design coordination to inspections and close-out, we make sure every phase runs smooth and passes code with zero surprises.',
    ],
    bullets: [
      'New commercial shell builds',
      'Office, retail, and restaurant fit-outs',
      'Multifamily and mixed-use developments',
      'Conduit, panels, and distribution design',
      'Lighting plans and smart controls',
    ],
    ctas: [
      { text: 'Request a Bid', path: '/contact' },
    ],
    imageUrl: 'https://cdn.envato.com/files/308112260/Preview_Image.jpg', // Architectural Detail of Metal Roofing on Commercial Construction
  },
  {
    id: 'preventive-maintenance-testing',
    title: 'Preventive Maintenance & Testing',
    shortDescription: 'Ongoing service that keeps your systems safe and compliant.',
    heroHeadline: 'Stay Powered, Stay Safe',
    heroSubheadline: 'Prevent downtime and costly repairs before they happen.',
    description: [
      'Routine maintenance keeps your electrical systems reliable and your business compliant. Our preventive programs catch problems before they become emergencies.',
      'We perform regular inspections, testing, and system optimization to protect your equipment and reduce long-term costs.',
    ],
    bullets: [
      'Infrared thermal scanning',
      'Panel and breaker testing',
      'Load analysis and balancing',
      'Code compliance and reporting',
      'Scheduled cleaning and inspections',
    ],
    ctas: [
      { text: 'Set Up a Maintenance Plan', path: '/contact' },
    ],
    imageUrl: 'https://cdn.envato.com/files/249009778/Preview_Image.jpg', // Maintenance Engineers checking electricity
  },
];

// --- Industries Data ---
export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'warehouses-distribution',
    title: 'Warehouses & Distribution',
    shortDescription: 'High-load systems, dock lighting, and power upgrades.',
    heroHeadline: 'Keeping Supply Chains Powered and Productive',
    heroSubheadline: 'High-load systems built for nonstop operation.',
    description: [
      'When your business runs around the clock, you need an electrical partner that does too. We service and install power systems for large distribution centers and logistics hubs across the Houston metro.',
      'From dock lighting and conveyor systems to switchgear and energy monitoring, we keep every square foot running safely and efficiently.',
    ],
    capabilities: [
      'Warehouse lighting and controls',
      'Panel and switchgear installation',
      'Emergency circuit repair',
      'Motor control systems',
      'Preventive maintenance programs',
    ],
    ctas: [
      { text: 'Request Warehouse Service', path: '/contact' },
    ],
    imageUrl: 'https://cdn.envato.com/files/420718507/Preview_Image.jpg', // Warehouse interior Envato
  },
  {
    id: 'data-centers-technology',
    title: 'Data Centers & Technology',
    shortDescription: 'Redundancy, switchgear, and compliance-focused wiring.',
    heroHeadline: 'Powering the Digital Backbone of Texas',
    heroSubheadline: 'Mission-critical reliability for data and tech infrastructure.',
    description: [
      'Downtime isn’t an option. Pillars Electrical delivers power systems for data centers, tech campuses, and communication facilities where uptime is everything.',
      'Our team is experienced in redundant power systems, precision cooling coordination, and switchgear upgrades that meet the demands of high-density operations.',
    ],
    capabilities: [
      'Redundant power and backup design',
      'UPS and generator integration',
      'Power distribution units (PDU) installation',
      'Cable management and grounding systems',
      'Load testing and fault prevention',
    ],
    ctas: [
      { text: 'Schedule Data Center Consultation', path: '/contact' },
    ],
    imageUrl: 'https://cdn.envato.com/files/320150904/Preview_Video.mp4', // Data center video - Envato
  },
  {
    id: 'manufacturing-industrial',
    title: 'Manufacturing & Industrial',
    shortDescription: 'Automation, heavy load distribution, safety.',
    heroHeadline: 'Heavy-Duty Power for Heavy-Duty Work',
    heroSubheadline: 'Industrial-grade systems built for safety, load, and longevity.',
    description: [
      'Manufacturing facilities demand systems that can handle heat, vibration, and continuous production. Our electricians design, install, and maintain industrial power systems that deliver dependable performance under pressure.',
      'We service everything from fabrication plants to refineries, ensuring safety and efficiency across every shift.',
    ],
    capabilities: [
      'Three-phase wiring and load balancing',
      'Motor control and automation systems',
      'Switchgear and transformer installation',
      'Preventive maintenance and thermal imaging',
      'Hazardous environment compliance',
    ],
    ctas: [
      { text: 'Book Industrial Service', path: '/contact' },
    ],
    imageUrl: 'https://cdn.envato.com/files/320150904/Preview_Video.mp4', // Manufacturing video - Envato
  },
  {
    id: 'multifamily-mixed-use',
    title: 'Multifamily & Mixed Use',
    shortDescription: 'Move-in ready systems and amenity lighting.',
    heroHeadline: 'Powering the Growth of Texas Living',
    heroSubheadline: 'Reliable electrical systems for multifamily and mixed-use developments.',
    description: [
      'From ground-up builds to renovation projects, Pillars Electrical delivers complete electrical packages for apartment complexes, condos, and mixed-use spaces.',
      'Our team coordinates with developers and GCs to install safe, efficient systems that meet code and exceed expectations — from unit wiring to amenity lighting.',
    ],
    capabilities: [
      'Rough-in and trim for multifamily units',
      'Common-area and exterior lighting',
      'Pool, gym, and amenity circuits',
      'Parking structure power and EV chargers',
      'Service upgrades and inspections',
    ],
    ctas: [
      { text: 'Request Multifamily Quote', path: '/contact' },
    ],
    imageUrl: 'https://cdn.envato.com/files/308112260/Preview_Image.jpg', // New construction apartment - Envato
  },
  {
    id: 'retail-commercial-property',
    title: 'Retail & Commercial Property',
    shortDescription: 'Efficient lighting and power systems for high-traffic facilities.',
    heroHeadline: 'Brighter Spaces. Stronger Systems.',
    heroSubheadline: 'Electrical work that enhances customer experience and reliability.',
    description: [
      'From storefronts to shopping centers, we provide electrical services that keep businesses running and looking their best.',
      'We handle new construction, renovations, and maintenance for retail and commercial spaces of all sizes — keeping systems efficient, lighting even, and power dependable.',
    ],
    capabilities: [
      'Tenant build-outs and remodels',
      'Lighting upgrades and control systems',
      'Panel replacements and code compliance',
      'Emergency power and signage circuits',
      'Preventive maintenance and service contracts',
    ],
    ctas: [
      { text: 'Get Retail Electrical Estimate', path: '/contact' },
    ],
    imageUrl: 'https://cdn.envato.com/files/249009778/Preview_Image.jpg', // Commercial Building Envato
  },
];

// --- Service Areas Data ---
export const SERVICE_AREAS_DATA: ServiceArea[] = [
  {
    id: 'houston',
    name: 'Houston',
    heroHeadline: 'Commercial Electricians in Houston, TX',
    heroSubheadline: 'Local crews. Proven expertise. On call 24/7.',
    description: [
      'Pillars Electrical is Houston’s trusted commercial electrical contractor, serving the city’s builders, property managers, and business owners.',
      'From warehouse lighting to emergency repairs, our team handles it all with professionalism and speed.',
    ],
    servicesIncluded: [
      '24/7 Emergency Electrical Repair',
      'Power Distribution & Switchgear Upgrades',
      'Lighting & Energy Retrofits',
      'New Construction & Tenant Build-Outs',
      'Preventive Maintenance & Testing',
    ],
    ctas: [
      { text: 'Request Houston Service', path: '/contact' },
      { text: `Call ${DISPATCH_PHONE}`, isPhone: true, phone: DISPATCH_PHONE },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1574577174092-d6c6a4d7d11f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80', // Houston cityscape at dusk
  },
  {
    id: 'galveston',
    name: 'Galveston',
    heroHeadline: 'Commercial Electricians in Galveston, TX',
    heroSubheadline: 'Reliable electrical service for coastal properties and businesses.',
    description: [
      'From beachside hotels to industrial docks, Pillars Electrical brings dependable electrical solutions to Galveston businesses. We understand the challenges of coastal environments — moisture, salt, and corrosion — and build systems that last.',
    ],
    servicesIncluded: [
      'Emergency service for hotels and retail',
      'Lighting retrofits and controls',
      'Marine and dock electrical repair',
      'Panel upgrades and code compliance',
      'Preventive maintenance',
    ],
    ctas: [
      { text: 'Get a Galveston Quote', path: '/contact' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1616086259074-98c4d29b1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80', // Galveston beach/port
  },
  {
    id: 'the-woodlands',
    name: 'The Woodlands',
    heroHeadline: 'Commercial Electricians in The Woodlands, TX',
    heroSubheadline: 'Professional electrical work for business parks and developments.',
    description: [
      'Pillars Electrical provides full-scope commercial electrical services throughout The Woodlands and surrounding areas. We partner with local developers, office parks, and multifamily communities to ensure safe, reliable power.',
    ],
    servicesIncluded: [
      'New construction wiring and build-outs',
      'Lighting and retrofit upgrades',
      '24-hour emergency response',
      'Switchgear and panel service',
      'Facility maintenance programs',
    ],
    ctas: [
      { text: 'Request Service in The Woodlands', path: '/contact' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596700810356-32d80d285a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRoZSUyMHdvb2RsYW5kcyUyMHRleGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1920&q=80', // The Woodlands cityscape
  },
  {
    id: 'katy',
    name: 'Katy',
    heroHeadline: 'Commercial Electricians in Katy, TX',
    heroSubheadline: 'Fast, reliable service for commercial and industrial clients.',
    description: [
      'From distribution warehouses to shopping centers, Pillars Electrical keeps Katy businesses powered. Our licensed crews handle everything from emergencies to complete system installations — safely and efficiently.',
    ],
    servicesIncluded: [
      'Warehouse and logistics facility wiring',
      'Emergency power restoration',
      'Panel and breaker replacements',
      'LED and energy retrofits',
      'Maintenance programs',
    ],
    ctas: [
      { text: 'Book Katy Service', path: '/contact' },
    ],
    imageUrl: 'https://cdn.envato.com/files/420718507/Preview_Image.jpg', // Warehouse interior Envato
  },
  {
    id: 'sugar-land',
    name: 'Sugar Land',
    heroHeadline: 'Commercial Electricians in Sugar Land, TX',
    heroSubheadline: 'Trusted by businesses and builders across Fort Bend County.',
    description: [
      'Pillars Electrical provides dependable electrical contracting for Sugar Land’s commercial, retail, and industrial spaces. Whether it’s a remodel, new build, or maintenance call, we show up ready to deliver lasting solutions.',
    ],
    servicesIncluded: [
      'Tenant build-outs and remodels',
      'Lighting and signage circuits',
      'Power distribution upgrades',
      'Preventive maintenance',
      '24/7 emergency response',
    ],
    ctas: [
      { text: 'Request Sugar Land Quote', path: '/contact' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1601007802778-9e1e2d42d3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80', // Sugar Land commercial area
  },
  {
    id: 'richmond',
    name: 'Richmond',
    heroHeadline: 'Commercial Electricians in Richmond, TX',
    heroSubheadline: 'Reliable service for local businesses and new developments.',
    description: [
      'Richmond is growing fast — and Pillars Electrical is here to support that growth. We handle everything from new construction wiring to emergency troubleshooting for commercial and mixed-use properties.',
    ],
    servicesIncluded: [
      'Ground-up construction projects',
      'Lighting installation and control systems',
      'Emergency and backup power repair',
      'Electrical safety inspections',
      'Preventive maintenance',
    ],
    ctas: [
      { text: 'Book Richmond Service', path: '/contact' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542378906-8b9f1e1a5e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80', // Richmond construction site
  },
  {
    id: 'college-station-bryan',
    name: 'College Station / Bryan',
    heroHeadline: 'Commercial Electricians in College Station & Bryan, TX',
    heroSubheadline: 'Powering campuses, apartments, and local business operations.',
    description: [
      'From multifamily housing near campus to industrial sites along Highway 6, Pillars Electrical delivers full-service electrical work across College Station and Bryan.',
    ],
    servicesIncluded: [
      'Electrical work for student housing and multifamily',
      'Warehouse and retail lighting retrofits',
      'Panel and switchgear upgrades',
      'Maintenance and inspections',
    ],
    ctas: [
      { text: 'Request a Quote in College Station', path: '/contact' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579547196627-c1d0f8d9f1b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxlZ2UlMjBzdGF0aW9uJTIwdGV4YXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=80', // College Station campus
  },
  {
    id: 'beaumont',
    name: 'Beaumont',
    heroHeadline: 'Commercial Electricians in Beaumont, TX',
    heroSubheadline: 'Powering industrial and commercial clients across Jefferson County.',
    description: [
      'Pillars Electrical supports Beaumont’s growing industrial and logistics operations with reliable electrical work for heavy-duty systems. From manufacturing floors to shipping terminals, we ensure safe and efficient power delivery.',
    ],
    servicesIncluded: [
      'Industrial wiring and control systems',
      'Emergency power service',
      'Switchgear installation',
      'Lighting and energy upgrades',
      'Preventive maintenance',
    ],
    ctas: [
      { text: 'Get Beaumont Service Estimate', path: '/contact' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596700810356-32d80d285a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRoZSUyMHdvb2RsYW5kcyUyMHRleGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1920&q=80', // Beaumont industrial
  },
  {
    id: 'baytown',
    name: 'Baytown',
    heroHeadline: 'Commercial Electricians in Baytown, TX',
    heroSubheadline: 'Industrial-grade service for petrochemical and manufacturing clients.',
    description: [
      'Con profundas raíces en la construcción, Pillars Electrical ofrece trabajos eléctricos especializados para las instalaciones industriales de Baytown. Entendemos las demandas de las refinerías, almacenes y entornos de fabricación complejos.',
    ],
    servicesIncluded: [
      'Cableado y cumplimiento para áreas peligrosas',
      'Paneles de control y sistemas de distribución',
      'Actualizaciones y adaptaciones de iluminación',
      'Reparaciones eléctricas de emergencia',
      'Programas de mantenimiento a largo plazo',
    ],
    ctas: [
      { text: 'Schedule Baytown Service', path: '/contact' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596700810356-32d80d285a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRoZSUyMHdvb2RsYW5kcyUyMHRleGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1920&q=80', // Baytown industrial
  },
  {
    id: 'port-arthur',
    name: 'Port Arthur',
    heroHeadline: 'Commercial Electricians in Port Arthur, TX',
    heroSubheadline: 'Supporting Gulf Coast industry with reliable electrical work.',
    description: [
      'Pillars Electrical ofrece servicios de contratación eléctrica para los sectores de transporte marítimo, fabricación y logística de Port Arthur. Nos especializamos en sistemas de carga pesada, servicio de emergencia y mejoras de instalaciones que mantienen la energía constante y segura.',
    ],
    servicesIncluded: [
      'Actualizaciones de sistemas industriales',
      'Instalación de cuadros de distribución y paneles',
      'Iluminación de muelles y patios',
      'Inspecciones eléctricas',
      'Respuesta de emergencia 24 horas',
    ],
    ctas: [
      { text: 'Contact Port Arthur Crew', path: '/contact' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596700810356-32d80d285a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRoZSUyMHdvb2RsYW5kcyUyMHRleGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1920&q=80', // Port Arthur industrial
  },
];

// --- Blog Posts ---
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'preventing-power-loss-in-houston-warehouses',
    title: 'Preventing Power Loss in Houston Warehouses: A Commercial Electrician’s Guide',
    metaTitle: 'Prevent Warehouse Power Outages | Commercial Electrician Houston TX',
    metaDescription: 'Learn how to prevent power loss in your Houston warehouse. Licensed commercial electricians at Pillars Electrical share expert maintenance and repair tips for facility managers.',
    intro: {
      headline: 'When the Lights Go Out, Production Stops',
      body: 'A warehouse without power is a warehouse losing money. In Houston’s industrial corridor — where humidity, heavy load equipment, and 24-hour operations collide — power reliability isn’t a luxury, it’s a necessity. At Pillars Electrical, we handle emergency repairs across Houston every week that could’ve been prevented with a little maintenance and foresight. This guide walks you through practical steps to protect your warehouse from power loss and keep your business running smoothly.',
    },
    sections: [
      {
        headline: 'Why Warehouses in Houston Are at Risk for Power Outages',
        body: 'Houston’s climate and industrial infrastructure create unique electrical challenges. Humidity accelerates corrosion, older systems run under higher demand, and inconsistent preventive care allows minor issues to become major shutdowns.',
        bullets: [
          'Overloaded panels and circuits',
          'Worn insulation or exposed conductors',
          'Faulty breakers and undersized switchgear',
          'Aging lighting or HVAC systems running on outdated wiring',
          'Storm surges and water intrusion from seasonal flooding',
        ],
      },
      {
        headline: 'Step 1: Conduct Routine Preventive Maintenance',
        body: 'Preventive maintenance is the difference between staying powered and calling us at 3 AM. At minimum, every Houston warehouse should schedule biannual inspections with a licensed commercial electrician.',
        bullets: [
          'Infrared scanning: Detects heat buildup before failure.',
          'Torque checks: Tightens connections loosened by vibration.',
          'Load analysis: Ensures circuits aren’t running beyond 80% capacity.',
          'Breaker testing: Identifies weak or failing units before a trip.',
        ],
        cta: { text: 'Learn more about our Preventive Maintenance Services.', path: '/services/preventive-maintenance-testing' },
      },
      {
        headline: 'Step 2: Balance Your Electrical Load',
        body: 'Houston’s larger distribution centers often expand equipment over time without upgrading electrical capacity. That’s how imbalance happens — some phases draw too much current while others sit idle. This not only shortens equipment life but increases the risk of arc flash and breaker failure. A load balance study by Pillars Electrical recalibrates your system, redistributes loads, and ensures optimal efficiency under peak demand.',
      },
      {
        headline: 'Step 3: Upgrade Panels and Switchgear Before It’s Too Late',
        body: 'If your electrical system is more than 15 years old, your switchgear probably isn’t built for today’s warehouse loads. Adding conveyors, charging stations, or climate control systems without upgrading distribution can overload panels. Modern switchgear upgrades provide:',
        bullets: [
          'Greater fault tolerance and surge protection',
          'Real-time monitoring',
          'Safer breaker isolation',
          'Compliance with NFPA 70E and OSHA 1910 standards',
        ],
        cta: { text: 'Learn more about our Power Distribution & Switchgear Upgrades.', path: '/services/power-distribution-switchgear-upgrades' },
      },
      {
        headline: 'Step 4: Retrofit Lighting for Energy and Safety',
        body: 'Outdated lighting doesn’t just burn more electricity — it creates heat and flicker that stress your system. LED retrofits cut load, reduce breaker trips, and improve workplace visibility.',
        bullets: [
          'LED conversion and design layout',
          'Smart lighting controls and occupancy sensors',
          'Parking lot and dock illumination',
          'Utility rebate paperwork and ROI analysis',
        ],
      },
      {
        headline: 'Step 5: Prepare for Houston’s Weather',
        body: 'Storm season hits hard in the Gulf. Lightning strikes and grid instability cause surges that can destroy panels and inventory systems. Smart facility owners invest in:',
        bullets: [
          'Surge protection devices (SPDs) on main distribution panels',
          'Backup generators or automatic transfer switches',
          'Elevated panels and sealed conduits for flood-prone areas',
        ],
      },
      {
        headline: 'Step 6: Establish a 24-Hour Electrical Response Plan',
        body: 'Power issues don’t wait for business hours. Your maintenance plan should include a local, reliable partner who knows your layout and can respond fast. At Pillars Electrical, we dispatch from 11333 Chimney Rock Rd, Houston TX 77035 and serve warehouses across Houston, Katy, Sugar Land, Baytown, and beyond. In an outage:',
        bullets: [
          'Secure your team’s safety.',
          `Call our dispatch line at ${DISPATCH_PHONE}.`,
          'We’ll send a licensed commercial electrician immediately.',
        ],
      },
    ],
    keyTakeaway: 'Preventing power loss isn’t complicated — it’s about consistency. A clean system, balanced load, and up-to-date equipment mean your warehouse stays productive even when Houston weather or demand spikes try to bring it down.',
    finalWord: 'Need help? Contact Pillars Electrical for a free inspection quote.',
    seoSummary: {
      primaryKeywords: ['commercial electrician Houston TX', 'warehouse electrical maintenance', 'power outage repair Houston', 'switchgear upgrade contractor', 'LED retrofit Houston'],
      supportingEntities: ['NFPA 70E', 'OSHA 1910', 'infrared scanning', 'switchgear modernization', 'surge protection'],
      internalLinks: [
        { text: 'Preventive Maintenance Services', path: '/services/preventive-maintenance-testing' },
        { text: 'Power Distribution & Switchgear Upgrades', path: '/services/power-distribution-switchgear-upgrades' },
        { text: 'Lighting & Energy Retrofits', path: '/services/lighting-energy-retrofits' },
        { text: 'Emergency Electrical Repair', path: '/services/emergency-electrical-repair' },
      ],
      localAnchor: 'Houston’s trusted commercial electrical contractor',
    },
  },
  {
    id: 'electrical-maintenance-checklist-for-property-managers',
    title: 'The Electrical Maintenance Checklist Every Houston Property Manager Needs',
    metaTitle: 'Electrical Maintenance Checklist | Property Managers Houston TX',
    metaDescription: 'Keep your commercial properties powered safely. Pillars Electrical shares the essential maintenance checklist for Houston property and facility managers.',
    intro: {
      headline: 'Avoid Electrical Headaches Before They Start',
      body: 'If you manage properties in Houston, you already know one bad breaker can ruin a day. Tenants call, lights flicker, and deadlines grind to a halt. Electrical systems don’t fail overnight — they give warnings most people miss. At Pillars Electrical, we help property managers across Greater Houston stay ahead of expensive surprises. This is the same maintenance framework we use in hundreds of commercial and multifamily buildings every year.',
    },
    sections: [
      {
        headline: '1. Inspect Panels Twice a Year',
        body: 'Your panels tell the story of your building’s health. Dust, rust, or burn marks mean trouble is coming. What to check:',
        bullets: [
          'Breakers that feel hot to the touch',
          'Loose connections or missing labels',
          'Water spots or corrosion near the main feed',
          'Panels that hum or buzz under load',
        ],
      },
      {
        headline: '2. Keep Emergency Lighting Code-Compliant',
        body: 'In Houston, exit lighting and emergency fixtures are required by code — yet we see dead units in half the buildings we service. Test every fixture monthly and replace batteries annually. Upgrading to LED emergency lights saves power and avoids frequent bulb replacements.',
      },
      {
        headline: '3. Schedule Annual Preventive Maintenance',
        body: 'A licensed commercial electrician should inspect your entire electrical distribution at least once per year. That includes testing breakers, tightening lugs, cleaning panels, and verifying grounding integrity. Regular maintenance reduces downtime by as much as 60% and extends system life dramatically.',
        cta: { text: 'Learn more about our Preventive Maintenance & Testing Services.', path: '/services/preventive-maintenance-testing' },
      },
      {
        headline: '4. Upgrade Outdated Lighting Systems',
        body: 'Lighting is one of the biggest energy draws in property management. Replacing fluorescents with LED fixtures immediately lowers your utility bills and reduces strain on panels. Houston LED retrofits offer:',
        bullets: [
          '50–70% energy savings',
          'Brighter, safer spaces',
          'Utility rebates through CenterPoint Energy',
        ],
        cta: { text: 'Explore Lighting & Energy Retrofits.', path: '/services/lighting-energy-retrofits' },
      },
      {
        headline: '5. Protect Against Surges and Storms',
        body: 'Houston weather means power surges, period. Install surge protection devices on main and sub panels. Check grounding annually to ensure proper bonding across metal piping, panels, and equipment.',
      },
      {
        headline: '6. Partner with a Reliable 24-Hour Contractor',
        body: `When outages happen, response time is everything. Partner with a commercial electrical team that offers emergency dispatch, keeps your layouts on file, and knows your systems inside out. When you call Pillars Electrical, you’re not explaining problems from scratch — we already know the property, and we fix it right the first time. 📞 Call us anytime: ${DISPATCH_PHONE}`,
      },
    ],
    finalWord: 'Electrical issues don’t disappear on their own. Stay proactive, build a relationship with a reliable local team, and protect your tenants and assets year-round. Pillars Electrical keeps Houston’s properties powered, safe, and compliant — one panel at a time.',
    seoSummary: {
      primaryKeywords: ['commercial electrician Houston TX', 'property manager electrical maintenance', 'building inspection Houston'],
      supportingEntities: ['infrared scanning', 'surge protection', 'LED retrofit'],
      internalLinks: [
        { text: 'Preventive Maintenance', path: '/services/preventive-maintenance-testing' },
        { text: 'Lighting Retrofits', path: '/services/lighting-energy-retrofits' },
        { text: 'Emergency Service', path: '/services/emergency-electrical-repair' },
      ],
    },
  },
  {
    id: 'houston-businesses-switching-to-led-lighting-retrofits',
    title: 'Why Houston Businesses Are Switching to LED Lighting Retrofits',
    metaTitle: 'LED Lighting Retrofits | Houston Commercial Electrician',
    metaDescription: 'Cut costs and boost efficiency. Pillars Electrical explains why LED lighting retrofits save Houston businesses thousands in energy and maintenance costs.',
    intro: {
      headline: 'Lighting Isn’t Just About Visibility — It’s About Money',
      body: 'Walk through any warehouse or retail space in Houston and you’ll find outdated fixtures wasting energy. Those buzzing fluorescents and metal halides cost more than they’re worth. At Pillars Electrical, we’ve replaced thousands of lights in the Houston area. Every project proves the same thing: switching to LED is one of the easiest ways to improve efficiency, safety, and ROI.',
    },
    sections: [
      {
        headline: 'What Is a Lighting Retrofit?',
        body: 'A lighting retrofit replaces old fixtures and ballasts with modern LED systems that use less power and require virtually no maintenance. For most commercial spaces, it’s a plug-and-play upgrade that pays for itself fast. Key Benefits:',
        bullets: [
          'Lower electric bills (up to 70% savings)',
          'Brighter and more consistent light',
          'Reduced maintenance calls',
          'Cooler operation — less heat on HVAC systems',
          'Improved employee visibility and safety',
        ],
      },
      {
        headline: 'How Much Can Houston Businesses Save with LEDs?',
        body: ['Savings vary by building type, but here’s what we typically see:', 'For a 100,000-sq-ft facility, that’s thousands saved every month.'],
        bullets: [
          'Warehouses: 50–65% drop in lighting costs',
          'Retail centers: 40–50% drop in load draw',
          'Office buildings: 30–40% improvement in light quality and comfort',
        ],
      },
      {
        headline: 'Are LED Retrofits Good for Older Buildings?',
        body: 'Yes — in fact, they’re ideal. Our electricians retrofit facilities built decades ago without disrupting tenants or operations. We handle everything: fixture selection, wiring adjustments, dimmer integration, and permit closure with Houston’s local authorities.',
      },
      {
        headline: 'Can I Get Rebates or Tax Credits?',
        body: 'Absolutely. CenterPoint Energy and the State of Texas both offer rebates for LED retrofits that meet specific energy efficiency thresholds. We handle the paperwork and rebate submission for every retrofit client.',
      },
      {
        headline: 'How Long Does Installation Take?',
        body: 'Most retrofits are completed in two to three days for small to mid-size facilities. We schedule work around business hours to avoid downtime.',
        cta: { text: 'Learn more about our Lighting & Energy Retrofit Services.', path: '/services/lighting-energy-retrofits' },
      },
      {
        headline: 'When to Upgrade',
        body: 'If your fixtures are more than 10 years old or your maintenance crew replaces bulbs monthly, it’s time. A retrofit is less about design and more about operational efficiency — and the results show immediately.',
      },
    ],
    finalWord: `The longer you wait to switch, the more money you lose every month. LED retrofits aren’t a luxury — they’re an investment that pays for itself. Pillars Electrical helps Houston’s warehouses, offices, and retail centers transition to smarter, safer lighting systems built to last. 📞 Call ${DISPATCH_PHONE} or Request an LED Audit.`,
    seoSummary: {
      primaryKeywords: ['LED retrofit contractor Houston TX', 'commercial lighting upgrade', 'energy efficient electrician Houston'],
      supportingEntities: ['CenterPoint Energy rebates', 'lighting retrofit installation', 'LED conversion'],
      internalLinks: [
        { text: 'Lighting & Energy Retrofits', path: '/services/lighting-energy-retrofits' },
        { text: 'Power Distribution Upgrades', path: '/services/power-distribution-switchgear-upgrades' },
      ],
    },
  },
  {
    id: 'every-houston-facility-needs-24-hour-electrical-partner',
    title: 'Why Every Houston Facility Needs a 24-Hour Electrical Partner',
    metaTitle: '24-Hour Commercial Electrician | Emergency Electrical Service Houston',
    metaDescription: 'Discover why having a 24-hour commercial electrician in Houston can save your business time, money, and safety risks.',
    intro: {
      headline: 'Power Problems Don’t Wait Until Morning',
      body: 'When a breaker blows during a night shift or a storm knocks out lighting before dawn, downtime costs pile up fast. For Houston businesses, having a 24-hour commercial electrical contractor isn’t optional — it’s essential.',
    },
    sections: [
      {
        headline: '1. Response Time Is Everything',
        body: 'Every hour of lost power means lost productivity. Local electricians know Houston’s layout, traffic, and industrial zones — meaning faster arrival, faster fix. Our crews at Pillars Electrical respond to emergency calls day or night across Houston, Katy, Sugar Land, and Baytown.',
        cta: { text: 'Explore our Emergency Electrical Repair Services.', path: '/services/emergency-electrical-repair' },
      },
      {
        headline: '2. Emergency Repairs Require Specialized Experience',
        body: 'Not every electrician is equipped for commercial emergencies. Handling 277-volt lighting or 480-volt switchgear requires training, PPE, and precision. We handle high-load systems in warehouses, data centers, and manufacturing plants without cutting corners.',
      },
      {
        headline: '3. 24-Hour Partners Know Your System',
        body: 'A real partnership means familiarity. When we service your facility regularly, we know your layout, load balance, and historical issues — so when an outage hits, we diagnose faster and fix cleaner.',
      },
      {
        headline: '4. Safety and Liability Protection',
        body: 'Electrical emergencies create risk: fires, arc flash, and equipment damage. Working with a licensed and insured contractor means compliance with OSHA and NFPA standards — protecting your property and your people.',
      },
      {
        headline: '5. Peace of Mind for Facility Managers',
        body: `Knowing who to call matters. When something sparks or trips, one call to a trusted partner ends the panic. Our dispatch system is monitored 24/7 — you’ll always reach a human, not an answering machine. 📞 Call ${DISPATCH_PHONE} anytime.`,
      },
    ],
    finalWord: 'Emergencies can’t be scheduled — but your response can. Build a relationship with a dependable 24-hour team and eliminate downtime before it starts. Pillars Electrical keeps Houston businesses powered around the clock.',
    seoSummary: {
      primaryKeywords: ['24 hour electrician Houston TX', 'emergency commercial electrical repair', 'licensed electrical contractor Houston'],
      supportingEntities: ['OSHA compliance', 'NFPA 70E', 'commercial emergency power'],
      internalLinks: [
        { text: 'Emergency Electrical Repair', path: '/services/emergency-electrical-repair' },
        { text: 'Preventive Maintenance', path: '/services/preventive-maintenance-testing' },
      ],
    },
  },
  {
    id: 'signs-your-data-center-needs-power-distribution-upgrade',
    title: 'Signs Your Data Center Needs a Power Distribution Upgrade',
    metaTitle: 'Data Center Power Upgrades | Commercial Electrician Houston TX',
    metaDescription: 'Learn the top signs your data center needs a power distribution upgrade. Houston’s commercial electrical experts explain how to prevent downtime.',
    intro: {
      headline: 'The Backbone of Every Data Center Is Its Power',
      body: 'Your servers can only perform as well as the power feeding them. Many Houston data centers still rely on aging distribution gear never designed for today’s load intensity. If breakers are tripping or UPS alarms keep flashing, it’s time to look deeper.',
    },
    sections: [
      {
        headline: '1. Breakers Trip Without Warning',
        body: 'This is the number one sign your distribution system is maxed out. Older breakers fatigue over time and can’t handle surge currents from modern equipment. An upgrade to higher-capacity switchgear with built-in monitoring eliminates nuisance trips.',
        cta: { text: 'Learn more about our Power Distribution & Switchgear Upgrades.', path: '/services/power-distribution-switchgear-upgrades' },
      },
      {
        headline: '2. Equipment Rooms Feel Hot',
        body: 'Heat means inefficiency. Excess warmth near panels or PDUs indicates unbalanced load or undersized wiring. Infrared scans and load studies help pinpoint where to expand capacity.',
      },
      {
        headline: '3. Your Infrastructure Hasn’t Been Evaluated in 10+ Years',
        body: 'Technology evolves, but electrical systems often get ignored. Data centers that haven’t been evaluated since their initial build are almost always running past design limits. A system evaluation identifies weak points before they fail.',
      },
      {
        headline: '4. Expansion Plans Without Power Planning',
        body: 'Adding racks or servers without verifying available load can cause voltage drops or arc faults. Before expansion, perform a load calculation and capacity verification — it’s cheaper than an outage.',
      },
      {
        headline: '5. Outdated Switchgear and Cables',
        body: 'Old gear isn’t just inefficient — it’s unsafe. New switchgear systems offer remote monitoring, isolation, and fault protection that didn’t exist a decade ago. Upgrading brings:',
        bullets: [
          'Consistent uptime',
          'Safer maintenance',
          'Easier compliance',
          'Lower insurance premiums',
        ],
      },
    ],
    finalWord: `If your Houston data center relies on legacy systems, you’re one surge away from downtime. Stay ahead of demand with proactive upgrades designed by commercial electricians who understand mission-critical systems. Pillars Electrical builds and maintains power systems that keep Houston’s digital backbone strong. 📞 Schedule a Power Evaluation: ${DISPATCH_PHONE}`,
    seoSummary: {
      primaryKeywords: ['data center power upgrade Houston TX', 'switchgear contractor', 'commercial electrician Houston'],
      supportingEntities: ['UPS', 'PDU', 'load analysis', 'switchgear modernization', 'thermal scanning'],
      internalLinks: [
        { text: 'Power Distribution & Switchgear Upgrades', path: '/services/power-distribution-switchgear-upgrades' },
        { text: 'Preventive Maintenance', path: '/services/preventive-maintenance-testing' },
      ],
    },
  },
];


// --- Page Content ---

export const HOME_PAGE_CONTENT: HomePageContent = {
  hero: {
    mainHeroBackground: 'https://cdn.envato.com/files/320150904/Preview_Video.mp4', // Crew working in a large electrical room
    headline: 'Powering Texas Business',
    subheadline: 'Commercial electrical crews, on call 24/7 across Houston and surrounding metros.',
    ctas: [
      { text: 'Request Service', path: '/contact' },
      { text: `Call Dispatch ${DISPATCH_PHONE}`, isPhone: true, phone: DISPATCH_PHONE },
    ],
  },
  introText: [
    'At Pillars Electrical, we power the operations that keep Texas running. From warehouses and data centers to multifamily properties and manufacturing facilities, our licensed electricians handle complex commercial systems with precision and pride.',
    'We’re based in Houston, serving surrounding metros — and available statewide for large-scale commercial projects in Austin and Dallas.',
  ],
  servicesSection: {
    headline: 'Full-Scope Commercial Electrical Services',
    copy: 'Whether it’s a 3 AM power failure or a new buildout for a 200-unit complex, our team knows how to get the job done safely and on schedule.',
    cta: { text: 'Explore Services', path: '/services' },
  },
  whoWeServeSection: {
    headline: 'Powering the Businesses That Power Texas',
    copy: 'We work with property owners, developers, and facility managers who value reliability. From high-bay warehouses to hospitality, our electricians keep systems running so your team can stay focused on the work that matters.',
    cta: { text: 'See Industries', path: '/industries' },
  },
  serviceAreaSection: {
    copy: `Headquartered at ${COMPANY_ADDRESS} — Pillars Electrical covers the Greater Houston metro and Gulf Coast region. For large-scale projects, we mobilize statewide, including Austin and Dallas.`,
    cta: { text: 'View Service Map', path: '/service-areas' },
  },
  trustedBySection: {
    headline: 'Trusted by Texas Builders and Developers',
    copy: 'Our crews have delivered electrical work on major commercial and multifamily developments across Texas. Every connection we wire represents a relationship built on trust, safety, and results.',
    logos: [
      'https://cdn.envato.com/files/320150904/Preview_Image.jpg', // Envato stock image for logo placeholder
      'https://cdn.envato.com/files/249009778/Preview_Image.jpg',
      'https://cdn.envato.com/files/249009778/Preview_Image.jpg',
      'https://cdn.envato.com/files/249009778/Preview_Image.jpg',
      'https://cdn.envato.com/files/249009778/Preview_Image.jpg',
    ],
  },
  testimonialsSection: {
    headline: 'What Our Clients Say',
    testimonials: [
      {
        quote: '“They showed up same day and got our warehouse back online before the night shift started.”',
        author: '— Operations Manager, Katy',
      },
      {
        quote: '“These guys actually answer the phone, show up when they say, and fix it right the first time.”',
        author: '— Property Supervisor, Houston',
      },
      {
        quote: '“Professional, clean, and fast. You can tell they take pride in the work.”',
        author: '— Developer, Sugar Land',
      },
    ],
  },
  finalCtaBanner: {
    headline: 'Ready to Power Your Project?',
    copy: 'Available 24 hours a day, 7 days a week.',
    ctas: [
      { text: `Call ${DISPATCH_PHONE}`, isPhone: true, phone: DISPATCH_PHONE },
      { text: 'Request Service Online', path: '/contact' },
    ],
  },
};

export const ABOUT_PAGE_CONTENT: AboutPageContent = {
  hero: {
    headline: 'Built by Builders. Powered by Professionals.',
    subheadline: 'Electrical contracting rooted in construction expertise.',
    body: [
      'Pillars Electrical was founded by the construction professionals behind Pillars of Seven — a Houston-based team known for delivering complex commercial projects across Texas.',
      'We’ve spent years in the field building, troubleshooting, and powering job sites just like yours. That experience built a team that knows how to think ahead, stay accountable, and deliver reliable power when it matters most.',
      'Our electricians are licensed, insured, OSHA-certified, and dedicated to doing the job safely every single time.',
    ],
    stats: [
      { label: 'Years Combined Experience', value: '20 +' },
      { label: 'Licensed & Insured', value: 'Yes' },
      { label: '24/7 Availability', value: 'Yes' },
      { label: 'Texas Proud', value: 'Yes' },
    ],
  },
  valuesSection: {
    headline: 'Grounded Values, Solid Results',
    values: [
      { title: 'Safety First', description: 'Every wire, every panel, every time.' },
      { title: 'Clear Communication', description: 'No surprises, just progress.' },
      { title: 'Quality Workmanship', description: 'If it’s not right, we make it right.' },
      { title: 'Integrity Always', description: 'We keep our word, period.' },
      { title: 'Accountability', description: 'From estimate to final walkthrough.' },
    ],
    copy: 'Our electricians and project managers bring decades of field experience to every site. They’ve wired high-rises, distribution centers, and multifamily complexes all across Texas — and they treat every project as if their own name’s on it.',
    cta: { text: 'Join Our Team', path: '/careers', isExternal: false }, // Optional careers link
  },
};

export const SERVICES_OVERVIEW_CONTENT: ServiceOverviewContent = {
  hero: {
    headline: 'Commercial Electrical Services for Texas Businesses',
    intro: 'We handle everything from fast-turn emergency repairs to complete power infrastructure for large facilities. Our licensed electricians are trained, insured, and experienced in complex commercial systems.',
  },
  cta: { text: 'Get a Quote', path: '/contact' },
};

export const INDUSTRIES_OVERVIEW_CONTENT: IndustriesOverviewContent = {
  hero: {
    headline: 'Powering Every Corner of Texas Commerce',
    subheadline: 'We build and maintain the electrical backbone of Texas business.',
    body: [
      'Every facility has one thing in common — nothing moves without power. Pillars Electrical partners with builders, developers, and property managers to keep operations running smoothly across the state.',
      'From warehouses to data centers and everything in between, our crews handle large-scale electrical systems with the skill and experience that comes from years in the field.',
      'We don’t talk about reliability. We prove it — every day, on every site.',
    ],
  },
  cta: { text: 'Explore Your Industry', path: '/contact' },
};

export const SERVICE_AREAS_OVERVIEW_CONTENT: ServiceAreasOverviewContent = {
  hero: {
    headline: 'Powering Houston and Beyond',
    subheadline: 'Serving Greater Houston and surrounding metros — available statewide for large-scale commercial projects.',
    body: [
      'Pillars Electrical is proud to serve commercial and industrial clients across Greater Houston and the Gulf Coast region.',
      'From data centers to apartment complexes, our crews handle projects of every size with precision and care.',
      `We’re headquartered at ${COMPANY_ADDRESS}, with teams positioned across nearby cities to respond fast when you need us most.`,
    ],
  },
  cta: { text: 'Find a Crew Near You', path: '/contact' },
};

export const BLOG_OVERVIEW_CONTENT: BlogOverviewContent = {
  hero: {
    headline: 'Insights That Keep Texas Running',
  },
};

export const CONTACT_PAGE_CONTENT: ContactPageContent = {
  hero: {
    headline: 'Let’s Keep Texas Powered',
    copy: ['Need help right now? Reach our dispatch team anytime.'],
    address: COMPANY_ADDRESS,
    phone: DISPATCH_PHONE,
    email: INFO_EMAIL,
  },
};

export const FOOTER_CONTENT: FooterContent = {
  column1: {
    name: COMPANY_NAME,
    address: COMPANY_ADDRESS,
    dispatch: `Dispatch: ${DISPATCH_PHONE}`,
    email: `Email: ${INFO_EMAIL}`,
    license: 'License #TX-XXXXXX', // Placeholder
    status: 'Bonded & Insured',
  },
  column2Links: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ],
  column3Areas: [
    'Houston (HQ)',
    'Galveston',
    'The Woodlands',
    'Katy',
    'Sugar Land',
    'Richmond',
    'College Station / Bryan',
    'Beaumont',
    'Baytown',
    'Port Arthur',
  ],
  column4: {
    title: 'Licensed Texas Electrical Contractor',
    certifications: [
      'OSHA Certified',
    ],
    links: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms & Conditions', path: '/terms-conditions' },
    ],
  },
  bottomBar: `© 2025 ${COMPANY_NAME}. All Rights Reserved. Powered by Pillars of Seven.`,
};