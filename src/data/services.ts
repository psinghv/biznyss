export type ServiceFAQ = { q: string; a: string };
export type Deliverable = { label: string; detail: string };
export type ProcessStep = { n: string; title: string; desc: string };
export type Benefit = { stat: string; label: string; desc: string };

export type ServicePage = {
  slug: string;
  cap: string;
  capName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  lead: string;
  about: string;
  deliverables: Deliverable[];
  process: ProcessStep[];
  benefits: Benefit[];
  faqs: ServiceFAQ[];
  relatedServices: string[];
  relatedSolutions: string[];
  keywords: string[];
};

export const services: ServicePage[] = [
  {
    slug: 'ai-video-advertising',
    cap: 'ai-creative-studio',
    capName: 'AI Creative Studio',
    title: 'AI Video Advertising',
    metaTitle: 'AI Video Advertising Services | Biznyss',
    metaDescription:
      'Biznyss produces AI video advertising that scales creative output for performance marketing—cinematic ads, rapid variants, and channel-ready assets.',
    eyebrow: 'AI Creative Studio',
    headline: 'AI Video Advertising That Scales Creative Output',
    lead:
      'AI video advertising combines generative AI with expert creative direction to produce high-quality video ads at the volume modern performance marketing demands. Biznyss builds repeatable pipelines that turn a single brief into dozens of channel-ready variants. The result is faster testing, broader reach, and lower cost per asset without sacrificing brand quality.',
    about:
      'AI video advertising is the production of video ad creative using generative AI tools, synthetic media, and automated editing pipelines alongside traditional filmmaking craft. It enables teams to generate, version, and localize video assets far faster than conventional shoots. For growth-focused brands, it collapses the gap between concept and campaign so creative can keep pace with media spend.',
    deliverables: [
      { label: 'Creative strategy & brief', detail: 'A documented creative direction with hooks, audience segments, and channel mapping so every generated asset serves a measurable objective.' },
      { label: 'AI-generated hero films', detail: 'Cinematic hero ads produced with generative video, motion, and editing for brand-level storytelling across CTV, YouTube, and social.' },
      { label: 'Performance variant sets', detail: '10–40 asset variants per concept with alternate hooks, lengths, and CTAs designed for platform algorithms and rapid A/B testing.' },
      { label: 'Localization & adaptation', detail: 'Language, talent, and cultural adaptations generated and QA\'d so a single campaign can run across multiple regions and markets.' },
      { label: 'Channel-ready exports', detail: 'Aspect ratios, durations, and technical specs delivered for every major platform so media teams can launch without re-editing.' },
      { label: 'Creative performance reporting', detail: 'A dashboard connecting each asset to spend and outcomes so future creative is informed by what actually performed.' },
    ],
    process: [
      { n: '01', title: 'Discovery & creative strategy', desc: 'We align on audience, offer, brand, and channel goals to define the creative territory and success metrics.' },
      { n: '02', title: 'Concept & AI pipeline design', desc: 'Our team designs the concept and selects the AI tools, models, and production pipeline best suited to the brief.' },
      { n: '03', title: 'Production & generation', desc: 'We produce hero films and generate variant sets using a blend of generative AI, motion design, and editorial craft.' },
      { n: '04', title: 'QA, localization & export', desc: 'Every asset is reviewed for brand safety, adapted for target markets, and exported to channel specifications.' },
      { n: '05', title: 'Launch, measure & iterate', desc: 'We hand off assets, track performance, and feed insights back into the next creative cycle.' },
    ],
    benefits: [
      { stat: '5x', label: 'More creative variants', desc: 'AI pipelines produce 5x the asset volume of traditional video production per budget cycle.' },
      { stat: '60%', label: 'Faster turnaround', desc: 'Concepts move from brief to channel-ready assets in days rather than weeks.' },
      { stat: '3–8x', label: 'Lower cost per asset', desc: 'Generative production reduces per-asset cost while maintaining brand-grade quality.' },
      { stat: '40%', label: 'Higher creative recall', desc: 'Variant testing surfaces the strongest creative, improving recall and engagement.' },
    ],
    faqs: [
      { q: 'What is AI video advertising?', a: 'AI video advertising is the production of video ad creative using generative AI, synthetic media, and automated editing alongside traditional filmmaking craft. It lets brands produce, version, and localize video ads far faster and at lower cost than conventional shoots. Biznyss pairs AI pipelines with creative direction so output stays on-brand and performance-ready.' },
      { q: 'How does AI video advertising reduce production costs?', a: 'It reduces costs by replacing expensive shoot logistics with generative pipelines that produce many variants from one concept. Brands typically see 3–8x lower cost per asset because talent, location, and post-production scale efficiently. The savings compound when assets are localized and reused across markets.' },
      { q: 'Can AI-generated video ads look brand-grade?', a: 'Yes. When AI generation is paired with professional creative direction, motion design, and QA, the output is indistinguishable in quality from traditionally produced ads. Biznyss applies brand systems, color, and editorial standards to every asset before delivery. The result is cinematic quality with the speed of generative production.' },
      { q: 'How many ad variants can AI video advertising produce?', a: 'A single concept typically yields 10–40 variants with different hooks, lengths, and CTAs for platform testing. Volume scales with the brief, so brands running aggressive performance programs can generate hundreds of assets per quarter. Each variant is exported to the exact spec of its target channel.' },
      { q: 'Which platforms are AI video ads optimized for?', a: 'AI video ads from Biznyss are exported for YouTube, Meta, TikTok, LinkedIn, and connected TV, with correct aspect ratios and durations for each. Localization and captions are added where needed for regional campaigns. This means media teams can launch without re-editing assets.' },
    ],
    relatedServices: ['commercial-production', 'product-explainers', 'cgi-motion-graphics', 'social-media-creatives'],
    relatedSolutions: ['launch', 'scale'],
    keywords: ['AI video advertising', 'AI video ad production', 'generative video ads', 'programmatic creative', 'performance video marketing', 'AI ad variants', 'synthetic media advertising', 'scalable video creative'],
  },
  {
    slug: 'commercial-production',
    cap: 'ai-creative-studio',
    capName: 'AI Creative Studio',
    title: 'Commercial Production',
    metaTitle: 'Commercial Production Services | Biznyss',
    metaDescription:
      'Biznyss commercial production blends live-action craft with AI tools to deliver premium brand films and ads—on strategy, on budget, on time.',
    eyebrow: 'AI Creative Studio',
    headline: 'Commercial Production for Premium Brand Films',
    lead:
      'Commercial production at Biznyss combines live-action filmmaking with AI-assisted pre-production, post-production, and visual effects to deliver brand-grade films efficiently. We direct every project with experienced creative leadership so the final cut carries cinematic quality. The result is premium commercials that perform across broadcast, CTV, and digital.',
    about:
      'Commercial production is the end-to-end process of planning, shooting, and finishing a brand film or advertisement, from creative concept and casting to edit, color, and delivery. At Biznyss, it is enhanced by AI tools that accelerate pre-visualization, VFX, and localization without replacing human craft. This hybrid model gives brands cinematic output at a fraction of traditional timelines and cost.',
    deliverables: [
      { label: 'Creative concept & treatment', detail: 'A documented concept, visual treatment, and director\'s approach that aligns the brand story with the production plan.' },
      { label: 'Pre-production & AI pre-vis', detail: 'Storyboards, shot lists, casting, and AI-generated pre-visualization that de-risks the shoot before a camera rolls.' },
      { label: 'Live-action filming', detail: 'Professional direction, crew, and equipment for on-location or studio shoots, managed end-to-end by Biznyss.' },
      { label: 'AI-assisted post-production', detail: 'Edit, color, sound, and VFX pipelines that use AI to accelerate cleanup, compositing, and finishing.' },
      { label: 'Localization & cutdowns', detail: 'Regional adaptations, subtitle versions, and social cutdowns produced from the hero film for multi-market campaigns.' },
      { label: 'Final delivery & archive', detail: 'Broadcast-spec masters, digital exports, and an organized asset archive ready for media activation.' },
    ],
    process: [
      { n: '01', title: 'Brief & creative development', desc: 'We translate the brand objective into a creative concept, treatment, and production scope.' },
      { n: '02', title: 'Pre-production & pre-visualization', desc: 'Casting, locations, storyboards, and AI pre-vis lock the plan before filming begins.' },
      { n: '03', title: 'Filming & direction', desc: 'Our team directs the shoot on location or in studio with a professional crew and equipment.' },
      { n: '04', title: 'Post-production & finishing', desc: 'Edit, color, sound, and VFX are completed with AI-assisted workflows for speed and quality.' },
      { n: '05', title: 'Delivery & localization', desc: 'We deliver broadcast and digital masters plus localized versions for every target market.' },
    ],
    benefits: [
      { stat: '40%', label: 'Faster post-production', desc: 'AI-assisted edit and VFX pipelines shorten finishing time by up to 40%.' },
      { stat: '2x', label: 'More cutdowns per shoot', desc: 'A single production yields twice the usable cutdowns for social and digital.' },
      { stat: '30%', label: 'Lower production overhead', desc: 'Pre-vis and AI tools reduce reshoots and on-set risk, cutting overhead.' },
      { stat: '100%', label: 'Brand-grade quality', desc: 'Every film is finished to broadcast spec with professional color and sound.' },
    ],
    faqs: [
      { q: 'What is commercial production?', a: 'Commercial production is the full process of creating a brand film or advertisement, from concept and pre-production through filming, editing, and final delivery. At Biznyss it blends live-action craft with AI-assisted pre-visualization and post-production for speed and quality. The output is a cinematic commercial ready for broadcast, CTV, and digital channels.' },
      { q: 'How does AI improve commercial production?', a: 'AI improves commercial production by accelerating pre-visualization, VFX, cleanup, and localization without replacing human direction. It reduces reshoots, shortens post timelines, and lowers cost while preserving cinematic quality. Biznyss applies AI where it adds value and keeps experienced creatives in control of the story.' },
      { q: 'How long does commercial production take with Biznyss?', a: 'A typical commercial takes 4–8 weeks from brief to final delivery, depending on complexity, locations, and localization scope. AI-assisted pre-vis and post-production can compress timelines by up to 40% versus traditional workflows. We provide a detailed schedule at the start of every project.' },
      { q: 'Can Biznyss produce commercials for multiple markets?', a: 'Yes. We design productions for localization from the start, producing regional talent, subtitle, and cutdown versions from the hero film. This lets one shoot serve many markets efficiently. Final masters are delivered to each region\'s broadcast and digital specs.' },
      { q: 'What formats does Biznyss deliver commercials in?', a: 'We deliver broadcast-spec masters, CTV-ready files, and platform-optimized digital exports for YouTube, Meta, TikTok, and LinkedIn. Cutdowns and localized versions are included where scoped. Every file meets the technical requirements of its destination channel.' },
    ],
    relatedServices: ['ai-video-advertising', 'product-explainers', 'cgi-motion-graphics', 'social-media-creatives'],
    relatedSolutions: ['launch', 'innovate'],
    keywords: ['commercial production', 'brand film production', 'AI commercial production', 'advertising video production', 'TV commercial production', 'premium brand films', 'AI pre-visualization', 'commercial post-production'],
  },
  {
    slug: 'product-explainers',
    cap: 'ai-creative-studio',
    capName: 'AI Creative Studio',
    title: 'Product Explainers',
    metaTitle: 'Product Explainer Videos & Films | Biznyss',
    metaDescription:
      'Biznyss creates product explainer videos that turn complex offerings into clear, conversion-ready stories—powered by AI and expert creative direction.',
    eyebrow: 'AI Creative Studio',
    headline: 'Product Explainers That Make Complex Products Clear',
    lead:
      'Product explainers translate complicated offerings into clear, compelling stories that help buyers understand value fast. Biznyss blends AI-assisted animation, live footage, and sharp scriptwriting to produce explainers that move prospects from curiosity to decision. The result is content that raises conversion, shortens sales cycles, and scales across channels.',
    about:
      'A product explainer is a short video or film designed to communicate what a product does, who it is for, and why it matters, usually in 60–90 seconds. It combines script, visuals, voiceover, and motion to simplify complex offerings for buyers and investors. At Biznyss, explainers are built with AI-assisted production so they can be versioned, localized, and updated as the product evolves.',
    deliverables: [
      { label: 'Message architecture', detail: 'A documented narrative structure that defines the problem, solution, proof, and call to action for the explainer.' },
      { label: 'Script & voiceover', detail: 'A professionally written script with voiceover casting and direction, optimized for clarity and conversion.' },
      { label: 'Visual style & storyboarding', detail: 'A visual system and storyboard that aligns the look, motion, and pacing with the brand and message.' },
      { label: 'AI-assisted animation & footage', detail: 'Motion graphics, AI-generated visuals, and live footage blended to bring the product story to life.' },
      { label: 'Versioning & localization', detail: 'Alternate lengths, languages, and use-case versions so one explainer serves web, sales, and social.' },
      { label: 'Embed & distribution kit', detail: 'Embed codes, thumbnails, and captions ready for site, sales decks, and paid placements.' },
    ],
    process: [
      { n: '01', title: 'Discovery & messaging', desc: 'We define the audience, value proposition, and narrative arc that the explainer must communicate.' },
      { n: '02', title: 'Script & visual direction', desc: 'Our team writes the script and designs the visual style, storyboarding each scene for clarity.' },
      { n: '03', title: 'Production & animation', desc: 'We produce voiceover, animation, and footage using AI-assisted and traditional motion workflows.' },
      { n: '04', title: 'Edit & sound design', desc: 'We assemble the final cut with music, sound design, and captions for a polished, on-brand result.' },
      { n: '05', title: 'Versioning & delivery', desc: 'We deliver the hero explainer plus localized and cutdown versions for every channel.' },
    ],
    benefits: [
      { stat: '80%', label: 'Faster comprehension', desc: 'Viewers grasp the product value in under 90 seconds versus pages of copy.' },
      { stat: '2–4x', label: 'Higher landing conversion', desc: 'Pages with explainers typically convert 2–4x better than text-only pages.' },
      { stat: '50%', label: 'Shorter sales cycles', desc: 'Sales teams use explainers to qualify and educate prospects earlier in the funnel.' },
      { stat: '5x', label: 'More channel reach', desc: 'One explainer is versioned for web, sales, social, and paid in multiple languages.' },
    ],
    faqs: [
      { q: 'What is a product explainer video?', a: 'A product explainer video is a short film, usually 60–90 seconds, that communicates what a product does, who it is for, and why it matters. It combines script, visuals, voiceover, and motion to simplify complex offerings for buyers. Biznyss produces explainers that are clear, on-brand, and optimized for conversion.' },
      { q: 'How long should a product explainer video be?', a: 'The ideal length is 60–90 seconds for most products, long enough to explain value but short enough to hold attention. Complex enterprise products may run up to 2 minutes with clear chaptering. Biznyss scripts every explainer to the attention curve of its target audience.' },
      { q: 'How much does a product explainer cost with AI production?', a: 'AI-assisted production typically reduces explainer cost by 40–60% versus traditional animation while maintaining brand quality. Final pricing depends on length, style, localization, and version count. Biznyss scopes every project to the outcomes it needs to drive.' },
      { q: 'Can product explainers be localized for multiple markets?', a: 'Yes. Biznyss designs explainers for localization from the start, producing alternate voiceovers, subtitles, and on-screen text for each market. This lets one core production serve many regions efficiently. Updates are easy when the product or messaging evolves.' },
      { q: 'Where should I use a product explainer video?', a: 'Product explainers perform best on homepage hero sections, product pages, sales decks, paid social, and investor materials. Biznyss delivers embed-ready versions for each placement. Versioning ensures the right length and message for each context.' },
    ],
    relatedServices: ['ai-video-advertising', 'commercial-production', 'cgi-motion-graphics', 'social-media-creatives'],
    relatedSolutions: ['launch', 'scale'],
    keywords: ['product explainer video', 'product explainer production', 'AI explainer video', 'SaaS explainer video', 'product video production', 'explainer animation', 'product demo video', 'conversion video'],
  },
  {
    slug: 'cgi-motion-graphics',
    cap: 'ai-creative-studio',
    capName: 'AI Creative Studio',
    title: 'CGI & Motion Graphics',
    metaTitle: 'CGI & Motion Graphics Services | Biznyss',
    metaDescription:
      'Biznyss creates CGI and motion graphics that elevate brands—3D product visuals, animated systems, and AI-assisted motion design for every channel.',
    eyebrow: 'AI Creative Studio',
    headline: 'CGI & Motion Graphics That Elevate Every Brand Surface',
    lead:
      'CGI and motion graphics give brands a premium visual language that works across film, web, social, and product. Biznyss blends 3D, AI-assisted rendering, and motion design to produce visuals that feel cinematic and ownable. The result is a flexible visual system that scales across every surface where customers meet the brand.',
    about:
      'CGI and motion graphics are computer-generated imagery and animated design used to create product visuals, brand systems, title sequences, and channel-ready motion assets. They allow brands to show products, ideas, and worlds that would be impossible or expensive to film. At Biznyss, AI-assisted rendering and procedural pipelines make premium CGI faster and more affordable than ever.',
    deliverables: [
      { label: 'Visual system & style frames', detail: 'A documented CGI and motion language with style frames that define look, materials, lighting, and movement.' },
      { label: '3D product visualization', detail: 'Photoreal or stylized 3D renders of products for use in film, web, packaging, and configurators.' },
      { label: 'Motion graphics & title design', detail: 'Animated logos, lower thirds, transitions, and title sequences that bring brand identity to life.' },
      { label: 'AI-assisted rendering', detail: 'Generative and procedural rendering pipelines that accelerate look development and output.' },
      { label: 'Channel-ready exports', detail: 'Aspect ratios and formats for film, web, social, DOOH, and events so motion assets work everywhere.' },
      { label: 'Template & asset library', detail: 'Reusable templates and 3D assets that let internal teams extend the system without starting over.' },
    ],
    process: [
      { n: '01', title: 'Concept & visual direction', desc: 'We define the CGI and motion language, style frames, and use cases the system must serve.' },
      { n: '02', title: 'Modeling & look development', desc: 'Our team builds 3D models, materials, and lighting with AI-assisted look development.' },
      { n: '03', title: 'Animation & simulation', desc: 'We animate cameras, objects, and effects with procedural and keyframe techniques.' },
      { n: '04', title: 'Render & composite', desc: 'AI-assisted rendering and compositing produce final frames at the required resolution.' },
      { n: '05', title: 'Delivery & templates', desc: 'We export channel-ready assets and a template library so the system can grow.' },
    ],
    benefits: [
      { stat: '3x', label: 'Faster look development', desc: 'AI-assisted rendering accelerates look dev and iteration by up to 3x.' },
      { stat: '60%', label: 'Lower CGI cost', desc: 'Procedural pipelines reduce per-asset CGI cost without sacrificing quality.' },
      { stat: '10+', label: 'Surfaces from one system', desc: 'A single CGI system serves film, web, social, DOOH, and events.' },
      { stat: '100%', label: 'Brand-ownable visuals', desc: 'Custom materials, lighting, and motion create a look only your brand can own.' },
    ],
    faqs: [
      { q: 'What are CGI and motion graphics?', a: 'CGI is computer-generated imagery used to create 3D visuals, while motion graphics is animated graphic design used for titles, transitions, and brand systems. Together they let brands show products, ideas, and worlds that would be costly or impossible to film. Biznyss uses AI-assisted rendering to deliver premium CGI and motion faster and more affordably.' },
      { q: 'How is AI used in CGI and motion graphics?', a: 'AI accelerates look development, denoising, upscaling, and procedural generation of materials and motion. It reduces render times and lets teams iterate faster without replacing the creative direction. Biznyss applies AI where it improves speed and quality, keeping human artists in control of the final look.' },
      { q: 'What can CGI and motion graphics be used for?', a: 'CGI and motion graphics are used for product visualization, brand films, title sequences, social content, DOOH, web experiences, and event visuals. A single system can serve all of these surfaces consistently. Biznyss designs for reuse so the investment compounds across channels.' },
      { q: 'How long does CGI and motion graphics production take?', a: 'A typical project runs 3–6 weeks depending on complexity, number of assets, and render requirements. AI-assisted rendering can cut look development and render time by up to 60%. We provide a detailed timeline after the concept phase.' },
      { q: 'Can CGI replace product photography?', a: 'For many products, yes—CGI can produce photoreal visuals that are indistinguishable from photography and far easier to update or version. It is especially powerful for products with variants, configurations, or impossible shots. Biznyss helps brands decide where CGI, photography, or a hybrid approach is best.' },
    ],
    relatedServices: ['ai-video-advertising', 'commercial-production', 'product-explainers', 'social-media-creatives'],
    relatedSolutions: ['launch', 'innovate'],
    keywords: ['CGI production', 'motion graphics services', '3D product visualization', 'AI motion design', 'brand motion graphics', '3D animation studio', 'CGI rendering', 'motion design system'],
  },
  {
    slug: 'social-media-creatives',
    cap: 'ai-creative-studio',
    capName: 'AI Creative Studio',
    title: 'Social Media Creatives',
    metaTitle: 'Social Media Creative Services | Biznyss',
    metaDescription:
      'Biznyss produces social media creatives at scale—scroll-stopping content, AI-assisted variants, and always-on systems built for reach and conversion.',
    eyebrow: 'AI Creative Studio',
    headline: 'Social Media Creatives Built for Reach and Conversion',
    lead:
      'Social media creatives must stop the scroll, communicate value, and convert—often in under three seconds. Biznyss builds content systems that produce high-volume, on-brand creative for every platform, powered by AI and directed by strategists. The result is always-on social content that compounds reach and drives measurable outcomes.',
    about:
      'Social media creatives are the images, videos, carousels, and short-form content designed to perform on platforms like Instagram, TikTok, LinkedIn, and YouTube Shorts. They are built for platform algorithms, attention curves, and conversion, not just aesthetics. At Biznyss, AI-assisted production lets teams generate, version, and test creative at the volume modern social requires.',
    deliverables: [
      { label: 'Content strategy & pillars', detail: 'A documented content strategy with pillars, formats, and posting cadence aligned to audience and funnel.' },
      { label: 'AI-assisted creative production', detail: 'High-volume image, video, and carousel production using AI tools and creative direction for brand consistency.' },
      { label: 'Platform-native formats', detail: 'Assets sized and styled for Instagram, TikTok, LinkedIn, YouTube Shorts, and Facebook with native specs.' },
      { label: 'Variant & test sets', detail: 'Multiple hooks, captions, and visuals per concept so teams can test and learn what performs.' },
      { label: 'Caption & hashtag system', detail: 'SEO-aware captions and hashtag sets that improve discoverability and platform reach.' },
      { label: 'Performance reporting', detail: 'A dashboard connecting creative to reach, engagement, and conversion so future content is informed by data.' },
    ],
    process: [
      { n: '01', title: 'Strategy & content pillars', desc: 'We define the audience, pillars, formats, and cadence that the content system will deliver.' },
      { n: '02', title: 'Creative direction & templates', desc: 'Our team designs the visual system, templates, and hooks that keep content on-brand at scale.' },
      { n: '03', title: 'AI-assisted production', desc: 'We produce images, video, and carousels using AI tools and creative direction for volume and quality.' },
      { n: '04', title: 'Platform adaptation & scheduling', desc: 'Assets are sized, captioned, and prepared for each platform and publishing cadence.' },
      { n: '05', title: 'Measure & optimize', desc: 'We track performance and feed insights back into the next content cycle.' },
    ],
    benefits: [
      { stat: '10x', label: 'More content output', desc: 'AI-assisted pipelines produce 10x the creative volume of manual production.' },
      { stat: '3x', label: 'Higher engagement', desc: 'Platform-native, tested creative drives up to 3x higher engagement than generic posts.' },
      { stat: '50%', label: 'Lower cost per asset', desc: 'AI and templates reduce per-asset cost while maintaining brand quality.' },
      { stat: '24/7', label: 'Always-on presence', desc: 'Content systems sustain a consistent posting cadence without burning out teams.' },
    ],
    faqs: [
      { q: 'What are social media creatives?', a: 'Social media creatives are the images, videos, carousels, and short-form content designed to perform on platforms like Instagram, TikTok, LinkedIn, and YouTube Shorts. They are built for platform algorithms, attention, and conversion, not just aesthetics. Biznyss produces them at scale with AI-assisted pipelines and creative direction.' },
      { q: 'How does AI help with social media creative production?', a: 'AI accelerates ideation, visual generation, variant creation, and captioning so teams can produce far more content per week. It reduces cost per asset while keeping brand consistency through templates and direction. Biznyss pairs AI with strategists so output stays on-message and on-brand.' },
      { q: 'How much social media content can Biznyss produce?', a: 'A typical engagement produces 60–200 assets per month across platforms, depending on scope and cadence. Volume scales with AI-assisted pipelines and reusable templates. We scope output to the reach and conversion goals of each brand.' },
      { q: 'Which platforms do you create social creatives for?', a: 'Biznyss produces creatives for Instagram, TikTok, LinkedIn, YouTube Shorts, Facebook, and X, with native formats for each. Assets are sized, captioned, and styled for each platform\'s algorithm and audience. This ensures content performs wherever it runs.' },
      { q: 'How do you measure social media creative performance?', a: 'We track reach, engagement, click-through, and conversion per asset and feed insights back into the next content cycle. A dashboard connects creative to business outcomes so decisions are data-led. This turns social content from an expense into a measurable growth channel.' },
    ],
    relatedServices: ['ai-video-advertising', 'commercial-production', 'product-explainers', 'cgi-motion-graphics'],
    relatedSolutions: ['scale', 'launch'],
    keywords: ['social media creatives', 'social media content production', 'AI social media content', 'social content at scale', 'Instagram creative production', 'TikTok content production', 'social media creative system', 'always-on social content'],
  },
  {
    slug: 'seo-content',
    cap: 'growth-marketing',
    capName: 'Growth Marketing',
    title: 'SEO & Content',
    metaTitle: 'SEO & Content Marketing Services | Biznyss',
    metaDescription:
      'Biznyss builds SEO and content engines that compound organic visibility—technical SEO, topical authority, and AI-search-ready content.',
    eyebrow: 'Growth Marketing',
    headline: 'SEO & Content That Compound Organic Visibility',
    lead:
      'SEO and content are the compounding engine of durable organic growth. Biznyss builds search strategies that combine technical SEO, topical authority, and content designed to rank in both classical search and AI-powered results. The outcome is qualified traffic that keeps growing long after the campaign ends.',
    about:
      'SEO and content marketing is the practice of structuring a website and its content so that search engines and AI search systems can find, understand, and recommend it to users. It combines technical optimization, keyword and entity strategy, content production, and authority building. At Biznyss, it is engineered for both classical rankings and emerging AI search surfaces like Google AI Overviews and ChatGPT.',
    deliverables: [
      { label: 'Technical SEO audit', detail: 'A full crawl, Core Web Vitals, indexation, and architecture review with a prioritized fix roadmap.' },
      { label: 'Keyword & entity strategy', detail: 'A mapped set of topics, keywords, and entities organized by funnel stage and search intent.' },
      { label: 'Topical authority architecture', detail: 'A content architecture that builds topical authority through clusters, pillar pages, and internal linking.' },
      { label: 'AI-search-ready content', detail: 'Content written to be cited by AI search engines, with clear answers, structure, and entity coverage.' },
      { label: 'Editorial production', detail: 'SEO-aware articles, landing pages, and resources produced by writers and editors with subject expertise.' },
      { label: 'Authority & link building', detail: 'Digital PR and outreach that earns authoritative links and mentions to strengthen domain authority.' },
    ],
    process: [
      { n: '01', title: 'Audit & opportunity mapping', desc: 'We audit technical health, map keyword demand, and identify the highest-leverage content opportunities.' },
      { n: '02', title: 'Strategy & architecture', desc: 'Our team designs the topical architecture, entity strategy, and content roadmap.' },
      { n: '03', title: 'Technical implementation', desc: 'We fix technical SEO issues and implement structured data, speed, and indexation improvements.' },
      { n: '04', title: 'Content production', desc: 'We produce SEO- and AI-search-ready content across the priority topics and funnel stages.' },
      { n: '05', title: 'Authority, measure & iterate', desc: 'We build authority, track rankings and AI visibility, and refine the strategy each cycle.' },
    ],
    benefits: [
      { stat: '3–5x', label: 'Organic traffic growth', desc: 'Topical authority strategies typically grow organic traffic 3–5x within 12 months.' },
      { stat: '40%', label: 'Lower CAC', desc: 'Organic search lowers blended customer acquisition cost by up to 40%.' },
      { stat: '2x', label: 'AI search visibility', desc: 'Structured, entity-rich content doubles the chance of being cited in AI Overviews.' },
      { stat: '12+', label: 'Months of compounding', desc: 'SEO and content keep delivering traffic and leads long after production ends.' },
    ],
    faqs: [
      { q: 'What is SEO and content marketing?', a: 'SEO and content marketing is the practice of structuring a website and its content so search engines and AI search systems can find, understand, and recommend it. It combines technical optimization, keyword and entity strategy, content production, and authority building. Biznyss engineers it for both classical rankings and AI search visibility.' },
      { q: 'How long does SEO take to show results?', a: 'Most SEO programs show meaningful traction within 3–6 months and compound significantly over 12 months. Technical fixes can produce quick wins, while topical authority builds over time. Biznyss scopes timelines to the competitive landscape of each market.' },
      { q: 'How does Biznyss optimize content for AI search?', a: 'We structure content with clear answers, entity coverage, schema markup, and topical authority so AI search engines like Google AI Overviews and ChatGPT can cite it. This includes definitional paragraphs, FAQ sections, and semantic clarity. The result is higher visibility in both classical and AI-generated results.' },
      { q: 'What is topical authority in SEO?', a: 'Topical authority is the depth and breadth of coverage a site has on a topic, signaled by clusters of related content, pillar pages, and internal linking. It helps search engines see the site as a trusted source on that subject. Biznyss builds topical authority architectures that compound rankings over time.' },
      { q: 'How is SEO success measured?', a: 'We measure organic traffic, keyword rankings, AI search visibility, conversions, and revenue attributed to organic search. A dashboard connects SEO activity to business outcomes so strategy is data-led. This turns SEO from a vanity metric into a growth channel.' },
    ],
    relatedServices: ['google-meta-ads', 'linkedin-marketing', 'lead-generation', 'conversion-optimization'],
    relatedSolutions: ['scale', 'launch'],
    keywords: ['SEO services', 'content marketing', 'AI search optimization', 'topical authority', 'technical SEO', 'organic growth', 'SEO content strategy', 'Google AI Overviews optimization'],
  },
  {
    slug: 'google-meta-ads',
    cap: 'growth-marketing',
    capName: 'Growth Marketing',
    title: 'Google & Meta Ads',
    metaTitle: 'Google & Meta Ads Management | Biznyss',
    metaDescription:
      'Biznyss manages Google and Meta ads that scale revenue, not just spend—full-funnel paid media with creative, tracking, and optimization.',
    eyebrow: 'Growth Marketing',
    headline: 'Google & Meta Ads That Scale Revenue, Not Just Spend',
    lead:
      'Google and Meta ads remain the fastest way to generate qualified demand, but only when creative, targeting, and measurement work together. Biznyss manages full-funnel paid media programs that pair AI-assisted creative with rigorous tracking and optimization. The result is efficient customer acquisition that scales with confidence.',
    about:
      'Google and Meta ads management is the planning, execution, and optimization of paid search, shopping, YouTube, and Meta (Facebook and Instagram) advertising to acquire customers profitably. It combines audience strategy, creative production, bidding, and conversion tracking. At Biznyss, it is run as a growth system with creative, data, and media working as one.',
    deliverables: [
      { label: 'Account strategy & architecture', detail: 'A full-funnel account structure mapping campaigns to funnel stages, audiences, and business outcomes.' },
      { label: 'Creative production & testing', detail: 'AI-assisted ad creative with structured A/B testing across hooks, formats, and offers.' },
      { label: 'Audience & targeting strategy', detail: 'Audience research, segmentation, and targeting setup including first-party data and lookalikes.' },
      { label: 'Conversion tracking & attribution', detail: 'Server-side tracking, enhanced conversions, and attribution modeling tied to revenue.' },
      { label: 'Bid & budget optimization', detail: 'Ongoing bid, budget, and campaign optimization aligned to target CPA and ROAS.' },
      { label: 'Performance reporting', detail: 'A dashboard connecting spend to pipeline and revenue with clear pacing and forecasts.' },
    ],
    process: [
      { n: '01', title: 'Audit & strategy', desc: 'We audit accounts, tracking, and creative to define the strategy and growth thesis.' },
      { n: '02', title: 'Account build & tracking', desc: 'Our team structures campaigns and implements server-side tracking and attribution.' },
      { n: '03', title: 'Creative & launch', desc: 'We produce AI-assisted creative variants and launch campaigns across priority channels.' },
      { n: '04', title: 'Optimize & scale', desc: 'We optimize bids, budgets, and creative weekly, scaling what works and cutting what doesn\'t.' },
      { n: '05', title: 'Report & refine', desc: 'We report on ROAS and pipeline and refine the strategy each cycle.' },
    ],
    benefits: [
      { stat: '3–5x', label: 'ROAS improvement', desc: 'Structured testing and optimization typically improve ROAS by 3–5x within a quarter.' },
      { stat: '40%', label: 'Lower CPA', desc: 'Creative testing and audience refinement reduce cost per acquisition by up to 40%.' },
      { stat: '2x', label: 'Faster scaling', desc: 'Reliable tracking and creative velocity let brands scale spend 2x without breaking ROAS.' },
      { stat: '100%', label: 'Revenue attribution', desc: 'Server-side tracking ties every dollar of spend to pipeline and revenue.' },
    ],
    faqs: [
      { q: 'What is Google and Meta ads management?', a: 'Google and Meta ads management is the planning, execution, and optimization of paid search, shopping, YouTube, and Meta advertising to acquire customers profitably. It combines audience strategy, creative production, bidding, and conversion tracking. Biznyss runs it as a growth system with creative, data, and media working as one.' },
      { q: 'How much should I spend on Google and Meta ads?', a: 'Budget depends on your target CPA, market, and scale goals, but most growth programs start at $10K–$50K per month per channel. Biznyss scopes budget to the revenue outcome required, not a fixed spend. We scale budgets only when tracking and creative support profitable growth.' },
      { q: 'How does Biznyss improve ad ROAS?', a: 'We improve ROAS through structured creative testing, audience refinement, bid optimization, and reliable conversion tracking. AI-assisted creative production lets us test more variants per cycle. The result is efficient acquisition that scales without breaking targets.' },
      { q: 'What is server-side conversion tracking?', a: 'Server-side tracking sends conversion data from your server to ad platforms, improving accuracy in a privacy-first, cookie-restricted world. It captures conversions that browser-only tracking misses. Biznyss implements it so every dollar of spend is attributed correctly.' },
      { q: 'How long until Google and Meta ads are profitable?', a: 'Most accounts see meaningful performance within 4–8 weeks, with full profitability and scale achieved in 8–12 weeks. The timeline depends on budget, market, and creative velocity. Biznyss provides a clear forecast after the audit phase.' },
    ],
    relatedServices: ['seo-content', 'linkedin-marketing', 'lead-generation', 'conversion-optimization'],
    relatedSolutions: ['scale', 'launch'],
    keywords: ['Google Ads management', 'Meta Ads management', 'paid media agency', 'PPC management', 'Facebook Ads agency', 'paid social advertising', 'performance marketing', 'Google Ads optimization'],
  },
  {
    slug: 'linkedin-marketing',
    cap: 'growth-marketing',
    capName: 'Growth Marketing',
    title: 'LinkedIn Marketing',
    metaTitle: 'LinkedIn Marketing & Ads Services | Biznyss',
    metaDescription:
      'Biznyss runs LinkedIn marketing for B2B growth—organic, ads, and ABM that reach decision-makers and build qualified pipeline.',
    eyebrow: 'Growth Marketing',
    headline: 'LinkedIn Marketing for B2B Pipeline Growth',
    lead:
      'LinkedIn is where B2B decisions start, and most brands underuse it. Biznyss builds LinkedIn programs that combine organic presence, paid ads, and account-based marketing to reach the right buyers and build qualified pipeline. The result is a LinkedIn engine that turns the platform into a predictable revenue channel.',
    about:
      'LinkedIn marketing is the use of organic content, paid advertising, executive presence, and account-based targeting on LinkedIn to reach B2B buyers and decision-makers. It is especially powerful for high-consideration sales cycles and enterprise pipeline. At Biznyss, it is run as an integrated program that aligns brand, demand, and sales.',
    deliverables: [
      { label: 'LinkedIn strategy & positioning', detail: 'A documented LinkedIn strategy mapping audiences, content pillars, and ad programs to pipeline goals.' },
      { label: 'Executive & brand presence', detail: 'Thought leadership and content systems for founders and executives that build category authority.' },
      { label: 'Organic content production', detail: 'A cadence of posts, carousels, and documents designed to grow reach and engagement organically.' },
      { label: 'LinkedIn Ads management', detail: 'Full-funnel LinkedIn ad campaigns including Sponsored Content, Conversation Ads, and Account-Based Marketing.' },
      { label: 'ABM & targeting', detail: 'Account lists, audience segmentation, and retargeting aligned to sales priorities and ICP.' },
      { label: 'Pipeline reporting', detail: 'A dashboard connecting LinkedIn activity to MQLs, SQLs, and revenue influenced.' },
    ],
    process: [
      { n: '01', title: 'Strategy & ICP definition', desc: 'We define the ICP, audiences, content pillars, and ad programs that will drive pipeline.' },
      { n: '02', title: 'Presence & content system', desc: 'Our team builds executive presence and an organic content cadence for brand and key accounts.' },
      { n: '03', title: 'Ads & ABM launch', desc: 'We launch LinkedIn ad campaigns and ABM targeting aligned to sales priorities.' },
      { n: '04', title: 'Optimize & engage', desc: 'We optimize creative, targeting, and budgets while engaging inbound conversations.' },
      { n: '05', title: 'Report & refine', desc: 'We report on pipeline influenced and refine the program each cycle.' },
    ],
    benefits: [
      { stat: '4x', label: 'Higher B2B lead quality', desc: 'LinkedIn leads are 4x more likely to convert than leads from other channels for B2B.' },
      { stat: '60%', label: 'Faster sales cycles', desc: 'ABM on LinkedIn shortens enterprise sales cycles by warming target accounts early.' },
      { stat: '3x', label: 'More executive reach', desc: 'Organic and paid LinkedIn reaches decision-makers 3x more efficiently than email alone.' },
      { stat: '2x', label: 'Pipeline influence', desc: 'Integrated LinkedIn programs double pipeline influence versus ads-only approaches.' },
    ],
    faqs: [
      { q: 'What is LinkedIn marketing?', a: 'LinkedIn marketing is the use of organic content, paid advertising, executive presence, and account-based targeting on LinkedIn to reach B2B buyers and decision-makers. It is especially powerful for high-consideration sales cycles and enterprise pipeline. Biznyss runs it as an integrated program that aligns brand, demand, and sales.' },
      { q: 'Is LinkedIn ads effective for B2B?', a: 'Yes. LinkedIn ads are among the most effective channels for B2B because they allow precise targeting by job title, company, industry, and seniority. They are especially powerful for enterprise and ABM programs. Biznyss pairs them with organic and ABM for compounding pipeline impact.' },
      { q: 'How much do LinkedIn ads cost?', a: 'LinkedIn ads typically have a higher CPC than Google or Meta, often $8–$15 per click, but deliver higher-quality B2B leads. Most effective programs start at $10K–$25K per month. Biznyss scopes budget to the pipeline outcome required, not a fixed spend.' },
      { q: 'What is LinkedIn account-based marketing?', a: 'LinkedIn ABM is the practice of targeting specific high-value accounts with personalized ads and content on LinkedIn. It warms target accounts before sales outreach and shortens enterprise cycles. Biznyss runs ABM alongside organic and paid programs for maximum impact.' },
      { q: 'How do you measure LinkedIn marketing success?', a: 'We measure reach, engagement, MQLs, SQLs, and revenue influenced by LinkedIn activity. A dashboard connects content and ads to pipeline outcomes so strategy is data-led. This turns LinkedIn from a brand channel into a revenue channel.' },
    ],
    relatedServices: ['seo-content', 'google-meta-ads', 'lead-generation', 'conversion-optimization'],
    relatedSolutions: ['scale', 'launch'],
    keywords: ['LinkedIn marketing', 'LinkedIn Ads', 'B2B LinkedIn marketing', 'LinkedIn ABM', 'LinkedIn lead generation', 'LinkedIn content marketing', 'LinkedIn advertising agency', 'executive thought leadership'],
  },
  {
    slug: 'lead-generation',
    cap: 'growth-marketing',
    capName: 'Growth Marketing',
    title: 'Lead Generation',
    metaTitle: 'B2B Lead Generation Services | Biznyss',
    metaDescription:
      'Biznyss builds lead generation systems that fill pipeline with qualified buyers—multi-channel, tracked, and sales-ready.',
    eyebrow: 'Growth Marketing',
    headline: 'Lead Generation Systems That Fill Pipeline',
    lead:
      'Lead generation is the lifeblood of B2B growth, but most programs produce volume without quality. Biznyss builds multi-channel lead generation systems that attract, qualify, and route the right buyers to sales. The result is a predictable pipeline engine that sales teams trust.',
    about:
      'Lead generation is the process of attracting and converting strangers into qualified prospects for a sales team. It combines content, paid media, landing pages, forms, enrichment, and routing to deliver leads that match an ideal customer profile. At Biznyss, it is engineered as a system with clear qualification, tracking, and feedback loops to sales.',
    deliverables: [
      { label: 'ICP & lead definition', detail: 'A documented ideal customer profile and lead scoring model that defines what a qualified lead looks like.' },
      { label: 'Multi-channel acquisition', detail: 'Paid, organic, outbound, and partner channels orchestrated to reach the ICP across the funnel.' },
      { label: 'Conversion assets', detail: 'Landing pages, forms, lead magnets, and chat experiences designed to convert visitors into leads.' },
      { label: 'Qualification & enrichment', detail: 'Lead scoring, data enrichment, and routing rules that send the right leads to the right reps.' },
      { label: 'Nurture & follow-up', detail: 'Email, SMS, and retargeting sequences that nurture leads until they are sales-ready.' },
      { label: 'Pipeline dashboard', detail: 'A dashboard connecting lead activity to SQLs, opportunities, and revenue.' },
    ],
    process: [
      { n: '01', title: 'ICP & strategy', desc: 'We define the ICP, qualification model, and channel mix that will drive qualified leads.' },
      { n: '02', title: 'Acquisition build', desc: 'Our team builds the landing pages, forms, ads, and content that generate lead flow.' },
      { n: '03', title: 'Qualification & routing', desc: 'We implement scoring, enrichment, and routing so qualified leads reach sales fast.' },
      { n: '04', title: 'Nurture & optimize', desc: 'We build nurture sequences and optimize channels, creative, and conversion paths.' },
      { n: '05', title: 'Report & refine', desc: 'We report on lead quality and pipeline and refine the system each cycle.' },
    ],
    benefits: [
      { stat: '3x', label: 'More qualified leads', desc: 'ICP-led lead generation produces 3x more qualified leads than generic programs.' },
      { stat: '50%', label: 'Lower cost per lead', desc: 'Multi-channel orchestration and optimization reduce cost per qualified lead by up to 50%.' },
      { stat: '2x', label: 'Faster sales follow-up', desc: 'Automated routing and scoring cut lead response time from days to minutes.' },
      { stat: '40%', label: 'Higher lead-to-opportunity', desc: 'Qualification and nurture raise lead-to-opportunity conversion by up to 40%.' },
    ],
    faqs: [
      { q: 'What is lead generation?', a: 'Lead generation is the process of attracting and converting strangers into qualified prospects for a sales team. It combines content, paid media, landing pages, forms, enrichment, and routing to deliver leads that match an ideal customer profile. Biznyss engineers it as a system with clear qualification and feedback loops to sales.' },
      { q: 'How does Biznyss improve lead quality?', a: 'We improve lead quality by starting with a documented ICP and lead scoring model, then aligning channels, creative, and qualification to it. Enrichment and routing ensure only sales-ready leads reach reps. This turns volume into pipeline that sales trusts.' },
      { q: 'What channels work best for B2B lead generation?', a: 'The best channels depend on the ICP, but typically include paid search, LinkedIn, content syndication, SEO, and outbound for enterprise. Biznyss orchestrates multiple channels rather than betting on one. This diversifies risk and compounds results.' },
      { q: 'How long does it take to build a lead generation engine?', a: 'A functional lead generation engine takes 4–8 weeks to build, with meaningful pipeline within 8–12 weeks. Full optimization continues over the following quarters. Biznyss provides a clear roadmap and forecast at the start of every engagement.' },
      { q: 'How is lead generation success measured?', a: 'We measure lead volume, lead quality, cost per qualified lead, lead-to-opportunity rate, and revenue influenced. A dashboard connects lead activity to pipeline so strategy is data-led. This turns lead generation from a cost center into a growth engine.' },
    ],
    relatedServices: ['seo-content', 'google-meta-ads', 'linkedin-marketing', 'conversion-optimization'],
    relatedSolutions: ['scale', 'launch'],
    keywords: ['lead generation', 'B2B lead generation', 'lead generation services', 'qualified leads', 'lead generation strategy', 'demand generation', 'lead nurturing', 'sales pipeline generation'],
  },
  {
    slug: 'conversion-optimization',
    cap: 'growth-marketing',
    capName: 'Growth Marketing',
    title: 'Conversion Rate Optimization',
    metaTitle: 'Conversion Rate Optimization Services | Biznyss',
    metaDescription:
      'Biznyss runs conversion rate optimization that turns traffic into revenue—research, testing, and UX changes backed by data.',
    eyebrow: 'Growth Marketing',
    headline: 'Conversion Rate Optimization That Turns Traffic Into Revenue',
    lead:
      'Traffic without conversion is wasted spend. Biznyss runs conversion rate optimization (CRO) programs that use research, experimentation, and UX to lift the metrics that matter—leads, sales, and revenue. The result is more value from the traffic you already pay for.',
    about:
      'Conversion rate optimization is the systematic process of increasing the percentage of visitors who take a desired action on a website or app, such as filling a form or making a purchase. It combines analytics, user research, hypothesis-driven testing, and UX changes. At Biznyss, it is run as a continuous experimentation program tied to revenue.',
    deliverables: [
      { label: 'Analytics & funnel audit', detail: 'A full audit of analytics, funnels, and user behavior to identify where and why visitors drop off.' },
      { label: 'User research & testing plan', detail: 'Heatmaps, session recordings, user interviews, and a prioritized testing roadmap.' },
      { label: 'Hypothesis & experiment design', detail: 'A documented set of test hypotheses with expected impact, confidence, and measurement plan.' },
      { label: 'A/B & multivariate testing', detail: 'Rigorous A/B and multivariate tests run on landing pages, forms, and key conversion paths.' },
      { label: 'UX & copy implementation', detail: 'Design and copy changes implemented from winning tests and research insights.' },
      { label: 'Revenue & lift reporting', detail: 'A dashboard connecting test outcomes to revenue lift and ongoing experimentation impact.' },
    ],
    process: [
      { n: '01', title: 'Audit & research', desc: 'We audit analytics and run user research to find the biggest conversion blockers.' },
      { n: '02', title: 'Hypothesis & roadmap', desc: 'Our team builds a prioritized testing roadmap with expected impact and effort.' },
      { n: '03', title: 'Experimentation', desc: 'We run A/B and multivariate tests on the highest-leverage pages and flows.' },
      { n: '04', title: 'Implement winners', desc: 'We implement winning variations and roll out UX and copy improvements.' },
      { n: '05', title: 'Report & iterate', desc: 'We report on revenue lift and keep the experimentation engine running.' },
    ],
    benefits: [
      { stat: '2–4x', label: 'Conversion lift', desc: 'Continuous CRO programs typically lift conversion rates by 2–4x over a year.' },
      { stat: '30–50%', label: 'Lower cost per acquisition', desc: 'Higher conversion rates reduce CPA without increasing ad spend.' },
      { stat: '100%', label: 'Data-backed changes', desc: 'Every change is backed by test data, not opinion or guesswork.' },
      { stat: 'Ongoing', label: 'Compounding gains', desc: 'Each winning test compounds with the next, lifting revenue continuously.' },
    ],
    faqs: [
      { q: 'What is conversion rate optimization?', a: 'Conversion rate optimization is the systematic process of increasing the percentage of visitors who take a desired action on a website or app. It combines analytics, user research, hypothesis-driven testing, and UX changes. Biznyss runs it as a continuous experimentation program tied to revenue.' },
      { q: 'How does CRO improve ROI on ad spend?', a: 'CRO improves ROI by converting more of the traffic you already pay for, reducing cost per acquisition without increasing budget. A 2x conversion lift effectively halves your CPA. This makes every dollar of media spend more profitable.' },
      { q: 'How long does conversion rate optimization take?', a: 'Initial research and first tests run within 2–4 weeks, with meaningful lift visible in 8–12 weeks. CRO is a continuous program, so gains compound over time. Biznyss scopes the roadmap to the traffic and revenue goals of each brand.' },
      { q: 'What does a CRO program include?', a: 'A CRO program includes analytics and funnel audits, user research, hypothesis design, A/B and multivariate testing, UX and copy implementation, and revenue reporting. Biznyss runs it as a continuous cycle, not a one-time project. This keeps gains compounding quarter over quarter.' },
      { q: 'How do you measure CRO success?', a: 'We measure conversion rate, revenue per visitor, cost per acquisition, and total revenue lift from experiments. A dashboard connects test outcomes to business results so strategy is data-led. This makes CRO a measurable revenue channel, not a vanity exercise.' },
    ],
    relatedServices: ['seo-content', 'google-meta-ads', 'linkedin-marketing', 'lead-generation'],
    relatedSolutions: ['scale', 'launch'],
    keywords: ['conversion rate optimization', 'CRO services', 'A/B testing', 'landing page optimization', 'conversion optimization', 'website conversion', 'UX optimization', 'experimentation program'],
  },
  {
    slug: 'web-development',
    cap: 'software-products',
    capName: 'Software & Products',
    title: 'Web Development',
    metaTitle: 'Web Development Services | Biznyss',
    metaDescription:
      'Biznyss builds fast, scalable websites and web apps—Astro, React, and headless stacks engineered for performance, SEO, and growth.',
    eyebrow: 'Software & Products',
    headline: 'Web Development Built for Performance and Growth',
    lead:
      'A modern website is a growth platform, not a brochure. Biznyss builds fast, scalable websites and web applications using modern stacks like Astro, React, and headless commerce. The result is web experiences that rank, convert, and scale with your business.',
    about:
      'Web development is the design and engineering of websites and web applications, from marketing sites to complex platforms. It combines front-end and back-end engineering, performance optimization, SEO, and integration with third-party systems. At Biznyss, it is built for speed, search visibility, and conversion from the first commit.',
    deliverables: [
      { label: 'Architecture & tech stack', detail: 'A documented architecture and stack selection (Astro, React, Next.js, headless) matched to performance and growth goals.' },
      { label: 'Front-end engineering', detail: 'Pixel-perfect, accessible, responsive front-end built with modern component frameworks.' },
      { label: 'Back-end & APIs', detail: 'Serverless functions, APIs, and data layers that power dynamic experiences and integrations.' },
      { label: 'CMS & content modeling', detail: 'A headless CMS setup with content modeling that lets editors publish without engineering.' },
      { label: 'Performance & SEO', detail: 'Core Web Vitals, structured data, and technical SEO built in so the site ranks and converts.' },
      { label: 'Analytics & experimentation', detail: 'Analytics, event tracking, and A/B testing infrastructure ready from launch.' },
    ],
    process: [
      { n: '01', title: 'Discovery & architecture', desc: 'We define goals, users, and the technical architecture that will support them.' },
      { n: '02', title: 'Design & content modeling', desc: 'Our team designs the UX and models content so editors can manage it independently.' },
      { n: '03', title: 'Engineering', desc: 'We build the front-end, back-end, and integrations with performance and SEO built in.' },
      { n: '04', title: 'QA & launch', desc: 'We test across devices, optimize performance, and launch with monitoring in place.' },
      { n: '05', title: 'Iterate & grow', desc: 'We monitor analytics and iterate on the experience to improve outcomes.' },
    ],
    benefits: [
      { stat: '2–4x', label: 'Faster page loads', desc: 'Modern stacks deliver 2–4x faster loads, improving SEO and conversion.' },
      { stat: '90+', label: 'Lighthouse scores', desc: 'Performance, accessibility, and SEO scores of 90+ at launch.' },
      { stat: '50%', label: 'Lower maintenance cost', desc: 'Headless and composable architectures reduce long-term maintenance burden.' },
      { stat: '100%', label: 'SEO-ready at launch', desc: 'Structured data, Core Web Vitals, and technical SEO built in from day one.' },
    ],
    faqs: [
      { q: 'What is web development?', a: 'Web development is the design and engineering of websites and web applications, from marketing sites to complex platforms. It combines front-end and back-end engineering, performance optimization, SEO, and integration with third-party systems. Biznyss builds it for speed, search visibility, and conversion from the first commit.' },
      { q: 'Which web development stack does Biznyss use?', a: 'We use modern stacks like Astro, React, Next.js, and headless commerce, selected based on performance, SEO, and team needs. Astro is our default for content sites because of its speed and SEO advantages. We choose the stack that best serves the business outcome.' },
      { q: 'How long does web development take?', a: 'A marketing site typically takes 4–8 weeks, while a complex web application can take 12–24 weeks. Timeline depends on scope, integrations, and content readiness. Biznyss provides a detailed plan after discovery.' },
      { q: 'Does Biznyss build SEO-ready websites?', a: 'Yes. Every site we build includes structured data, Core Web Vitals optimization, semantic HTML, and technical SEO best practices. This ensures the site ranks from launch. SEO is built in, not bolted on.' },
      { q: 'Can Biznyss integrate a CMS into my website?', a: 'Yes. We implement headless CMS platforms with content modeling that lets editors publish without engineering. This separates content from presentation for flexibility. Editors get autonomy while engineering stays scalable.' },
    ],
    relatedServices: ['mobile-applications', 'saas-development', 'enterprise-solutions', 'custom-applications'],
    relatedSolutions: ['launch', 'scale'],
    keywords: ['web development', 'website development services', 'Astro development', 'React development', 'headless CMS', 'web app development', 'performance web development', 'SEO-ready websites'],
  },
  {
    slug: 'mobile-applications',
    cap: 'software-products',
    capName: 'Software & Products',
    title: 'Mobile Applications',
    metaTitle: 'Mobile App Development Services | Biznyss',
    metaDescription:
      'Biznyss builds mobile apps for iOS and Android—native and cross-platform, designed for adoption, retention, and scale.',
    eyebrow: 'Software & Products',
    headline: 'Mobile Applications Designed for Adoption and Retention',
    lead:
      'A great mobile app earns its place on a user\'s home screen. Biznyss builds iOS and Android applications with native and cross-platform stacks, designed for adoption, retention, and scale. The result is mobile products that users choose again and again.',
    about:
      'Mobile application development is the design and engineering of software for iOS and Android devices, using native or cross-platform frameworks. It combines UX, performance, offline capability, and integration with device features and back-end systems. At Biznyss, it is built around user retention and business outcomes, not just launch.',
    deliverables: [
      { label: 'Product strategy & roadmap', detail: 'A documented product strategy and roadmap aligned to user needs and business goals.' },
      { label: 'UX & interaction design', detail: 'Native-feeling UX and interaction design for iOS and Android with accessibility built in.' },
      { label: 'Cross-platform engineering', detail: 'React Native or Flutter engineering that shares code across iOS and Android without sacrificing quality.' },
      { label: 'Back-end & APIs', detail: 'Scalable back-end services and APIs that power sync, auth, payments, and data.' },
      { label: 'App store launch', detail: 'Store listings, assets, review readiness, and submission to the App Store and Google Play.' },
      { label: 'Analytics & growth', detail: 'Event tracking, funnel analytics, and experimentation infrastructure for post-launch growth.' },
    ],
    process: [
      { n: '01', title: 'Discovery & product strategy', desc: 'We define users, jobs-to-be-done, and the product roadmap.' },
      { n: '02', title: 'UX & design', desc: 'Our team designs native-feeling UX and interactions for iOS and Android.' },
      { n: '03', title: 'Engineering', desc: 'We build the app with React Native or Flutter and connect it to scalable back-end services.' },
      { n: '04', title: 'QA & store launch', desc: 'We test across devices and submit to the App Store and Google Play.' },
      { n: '05', title: 'Launch & iterate', desc: 'We monitor analytics and iterate on the product to improve retention and growth.' },
    ],
    benefits: [
      { stat: '2x', label: 'Faster time to market', desc: 'Cross-platform engineering ships to iOS and Android from one codebase.' },
      { stat: '60%', label: 'Lower dev cost', desc: 'Shared codebases reduce development cost by up to 60% versus native-only.' },
      { stat: '40%', label: 'Higher retention', desc: 'Retention-focused design and analytics lift 30-day retention by up to 40%.' },
      { stat: '100%', label: 'Store-ready launch', desc: 'Every app is prepared for App Store and Google Play review at launch.' },
    ],
    faqs: [
      { q: 'What is mobile application development?', a: 'Mobile application development is the design and engineering of software for iOS and Android devices, using native or cross-platform frameworks. It combines UX, performance, offline capability, and integration with device and back-end systems. Biznyss builds it around user retention and business outcomes.' },
      { q: 'Should I build native or cross-platform mobile apps?', a: 'Cross-platform frameworks like React Native and Flutter are the right choice for most apps because they share code across iOS and Android without sacrificing quality. Native is best for apps with heavy device or performance requirements. Biznyss recommends the approach that best serves the product.' },
      { q: 'How long does mobile app development take?', a: 'A typical MVP takes 10–16 weeks, while a full-featured app can take 6–9 months. Timeline depends on scope, integrations, and platform targets. Biznyss provides a detailed plan after discovery.' },
      { q: 'How much does mobile app development cost?', a: 'A cross-platform MVP typically starts at $40K–$80K, with full apps scaling based on scope and integrations. Biznyss scopes budget to the product outcome required. We avoid bloated scopes and focus on what drives adoption and retention.' },
      { q: 'Does Biznyss handle app store submission?', a: 'Yes. We prepare store listings, assets, and review readiness, then submit to the App Store and Google Play. We handle review feedback and updates until approval. This ensures a smooth launch without last-minute surprises.' },
    ],
    relatedServices: ['web-development', 'saas-development', 'enterprise-solutions', 'custom-applications'],
    relatedSolutions: ['launch', 'innovate'],
    keywords: ['mobile app development', 'iOS app development', 'Android app development', 'React Native development', 'Flutter development', 'cross-platform apps', 'mobile product design', 'app store launch'],
  },
  {
    slug: 'saas-development',
    cap: 'software-products',
    capName: 'Software & Products',
    title: 'SaaS Development',
    metaTitle: 'SaaS Development Services | Biznyss',
    metaDescription:
      'Biznyss builds SaaS platforms from MVP to scale—multi-tenant architecture, billing, auth, and UX engineered for retention and growth.',
    eyebrow: 'Software & Products',
    headline: 'SaaS Development From MVP to Scale',
    lead:
      'Building a SaaS product is about more than code—it is about architecture, pricing, onboarding, and retention working together. Biznyss builds SaaS platforms with multi-tenant architecture, billing, auth, and UX engineered for growth. The result is software that scales technically and commercially.',
    about:
      'SaaS development is the engineering of multi-tenant software delivered as a subscription service, typically with billing, authentication, onboarding, and analytics built in. It requires architecture that scales securely across customers while keeping data isolated. At Biznyss, it is built with retention and expansion in mind from the first commit.',
    deliverables: [
      { label: 'Product & pricing strategy', detail: 'A documented product strategy with pricing, packaging, and expansion paths aligned to the business model.' },
      { label: 'Multi-tenant architecture', detail: 'A secure, scalable multi-tenant architecture with data isolation, roles, and permissions.' },
      { label: 'Auth, billing & subscriptions', detail: 'Authentication, subscription billing, trials, and metering integrated with Stripe or equivalent.' },
      { label: 'Onboarding & activation', detail: 'Onboarding flows and activation moments designed to get users to value fast.' },
      { label: 'Analytics & retention', detail: 'Event tracking, funnels, and retention analytics built in from day one.' },
      { label: 'Scalable infrastructure', detail: 'Cloud infrastructure with CI/CD, observability, and autoscaling ready for growth.' },
    ],
    process: [
      { n: '01', title: 'Discovery & product strategy', desc: 'We define the product, pricing, and architecture that will support growth.' },
      { n: '02', title: 'Architecture & design', desc: 'Our team designs the multi-tenant architecture, data model, and UX.' },
      { n: '03', title: 'Engineering', desc: 'We build the app with auth, billing, onboarding, and analytics integrated.' },
      { n: '04', title: 'QA & launch', desc: 'We test, deploy, and launch with monitoring and CI/CD in place.' },
      { n: '05', title: 'Iterate & scale', desc: 'We monitor retention and iterate on the product to drive expansion.' },
    ],
    benefits: [
      { stat: '2x', label: 'Faster MVP to market', desc: 'Reusable SaaS foundations ship MVPs 2x faster than custom builds.' },
      { stat: '40%', label: 'Higher activation', desc: 'Onboarding designed around activation lifts trial-to-paid by up to 40%.' },
      { stat: '100%', label: 'Multi-tenant secure', desc: 'Data isolation and roles built in for enterprise-grade security.' },
      { stat: '3x', label: 'Easier expansion', desc: 'Pricing and packaging designed for upsell and expansion revenue.' },
    ],
    faqs: [
      { q: 'What is SaaS development?', a: 'SaaS development is the engineering of multi-tenant software delivered as a subscription service, with billing, authentication, onboarding, and analytics built in. It requires architecture that scales securely across customers while keeping data isolated. Biznyss builds it with retention and expansion in mind from the first commit.' },
      { q: 'How long does SaaS development take?', a: 'A SaaS MVP typically takes 12–20 weeks, with full platforms scaling based on scope and integrations. Timeline depends on complexity, billing, and onboarding requirements. Biznyss provides a detailed plan after discovery.' },
      { q: 'What tech stack does Biznyss use for SaaS?', a: 'We use modern stacks like TypeScript, React or Next.js, Node or serverless back-ends, PostgreSQL, and Stripe for billing. The exact stack is chosen based on scale, team, and integration needs. We avoid lock-in and favor composable, maintainable architecture.' },
      { q: 'How much does SaaS development cost?', a: 'A SaaS MVP typically starts at $60K–$120K, with full platforms scaling based on scope. Biznyss scopes budget to the product and revenue outcome required. We focus on what drives activation, retention, and expansion.' },
      { q: 'Does Biznyss build multi-tenant SaaS architecture?', a: 'Yes. Every SaaS we build includes secure multi-tenant architecture with data isolation, roles, and permissions. This is essential for security, compliance, and enterprise sales. We design it to scale without re-architecture as the customer base grows.' },
    ],
    relatedServices: ['web-development', 'mobile-applications', 'enterprise-solutions', 'custom-applications'],
    relatedSolutions: ['launch', 'scale'],
    keywords: ['SaaS development', 'SaaS product development', 'multi-tenant SaaS', 'SaaS MVP development', 'subscription software', 'SaaS architecture', 'SaaS platform engineering', 'SaaS product strategy'],
  },
  {
    slug: 'enterprise-solutions',
    cap: 'software-products',
    capName: 'Software & Products',
    title: 'Enterprise Solutions',
    metaTitle: 'Enterprise Software Solutions | Biznyss',
    metaDescription:
      'Biznyss builds enterprise solutions—portals, integrations, and platforms engineered for security, scale, and operational efficiency.',
    eyebrow: 'Software & Products',
    headline: 'Enterprise Solutions Built for Scale and Security',
    lead:
      'Enterprise software must integrate with legacy systems, meet strict security requirements, and serve thousands of users reliably. Biznyss builds enterprise portals, integrations, and platforms engineered for scale, security, and operational efficiency. The result is software that large organizations can trust and adopt.',
    about:
      'Enterprise solutions are large-scale software systems built for organizations with complex requirements, including security, compliance, integration, and high user volume. They typically connect to existing systems and support critical business processes. At Biznyss, they are engineered with governance, scalability, and adoption in mind.',
    deliverables: [
      { label: 'Solution architecture', detail: 'A documented architecture that maps integrations, data flows, security, and scale requirements.' },
      { label: 'System integration', detail: 'Integration with ERP, CRM, HRIS, and other enterprise systems via APIs and middleware.' },
      { label: 'Security & compliance', detail: 'Role-based access, audit logging, SSO, and compliance with standards like SOC 2 and HIPAA where required.' },
      { label: 'Portals & platforms', detail: 'Customer, partner, and employee portals built for usability and scale.' },
      { label: 'Data & analytics', detail: 'Data pipelines, dashboards, and reporting that give leaders a reliable view of operations.' },
      { label: 'Change management & enablement', detail: 'Training, documentation, and adoption support so the solution delivers real value.' },
    ],
    process: [
      { n: '01', title: 'Discovery & architecture', desc: 'We map requirements, integrations, security, and the architecture that will serve them.' },
      { n: '02', title: 'Design & security', desc: 'Our team designs the UX, data model, and security model for scale and compliance.' },
      { n: '03', title: 'Engineering & integration', desc: 'We build the solution and integrate it with existing enterprise systems.' },
      { n: '04', title: 'QA, security & launch', desc: 'We test, audit security, and launch with monitoring and support in place.' },
      { n: '05', title: 'Adopt & optimize', desc: 'We drive adoption and optimize the solution based on usage and feedback.' },
    ],
    benefits: [
      { stat: '40%', label: 'Lower operational cost', desc: 'Automation and integration reduce manual work and operational overhead.' },
      { stat: '3x', label: 'Faster reporting', desc: 'Unified data and dashboards deliver insights 3x faster than manual reporting.' },
      { stat: '100%', label: 'Compliance-ready', desc: 'Security and compliance built in for SOC 2, HIPAA, and enterprise procurement.' },
      { stat: '60%', label: 'Higher adoption', desc: 'UX and enablement drive adoption rates of 60%+ versus typical enterprise rollouts.' },
    ],
    faqs: [
      { q: 'What are enterprise solutions?', a: 'Enterprise solutions are large-scale software systems built for organizations with complex requirements, including security, compliance, integration, and high user volume. They connect to existing systems and support critical business processes. Biznyss builds them with governance, scalability, and adoption in mind.' },
      { q: 'How long does enterprise software development take?', a: 'Enterprise solutions typically take 6–12 months depending on scope, integrations, and compliance requirements. They are larger and more complex than typical product builds. Biznyss provides a detailed roadmap after discovery.' },
      { q: 'Does Biznyss build secure, compliant software?', a: 'Yes. We build with role-based access, audit logging, SSO, and compliance with standards like SOC 2 and HIPAA where required. Security is designed in from the start, not added later. This ensures the solution passes enterprise procurement and audits.' },
      { q: 'Can Biznyss integrate with our existing systems?', a: 'Yes. We integrate with ERP, CRM, HRIS, and other enterprise systems via APIs and middleware. We map data flows and design for reliability and auditability. This lets the new solution work with what you already run.' },
      { q: 'How do you ensure enterprise software adoption?', a: 'We drive adoption through UX design, training, documentation, and change management support. Adoption is planned from the start, not left to chance. This ensures the solution delivers real operational value, not just technical delivery.' },
    ],
    relatedServices: ['web-development', 'mobile-applications', 'saas-development', 'custom-applications'],
    relatedSolutions: ['scale', 'innovate'],
    keywords: ['enterprise software development', 'enterprise solutions', 'enterprise portals', 'system integration', 'enterprise architecture', 'secure software development', 'enterprise platforms', 'compliance-ready software'],
  },
  {
    slug: 'custom-applications',
    cap: 'software-products',
    capName: 'Software & Products',
    title: 'Custom Applications',
    metaTitle: 'Custom Application Development | Biznyss',
    metaDescription:
      'Biznyss builds custom applications for unique business needs—internal tools, dashboards, and niche products engineered to fit.',
    eyebrow: 'Software & Products',
    headline: 'Custom Applications Built for Your Unique Needs',
    lead:
      'Off-the-shelf software rarely fits the way your business actually works. Biznyss builds custom applications for internal tools, dashboards, and niche products that fit your exact workflows. The result is software that removes friction instead of creating it.',
    about:
      'Custom application development is the engineering of software built specifically for an organization\'s unique processes, data, and user needs. It is chosen when off-the-shelf tools cannot meet the requirements or differentiation needed. At Biznyss, it is built with a focus on usability, integration, and time-to-value.',
    deliverables: [
      { label: 'Requirements & workflow mapping', detail: 'A documented map of the workflows, users, and data the application must support.' },
      { label: 'UX & design', detail: 'UX designed for the actual users, whether employees, partners, or customers.' },
      { label: 'Custom engineering', detail: 'Full-stack engineering with the frameworks and integrations the use case requires.' },
      { label: 'Integrations & automation', detail: 'Connections to existing tools and automated workflows that reduce manual work.' },
      { label: 'Deployment & support', detail: 'Deployment, documentation, and ongoing support to keep the application running.' },
      { label: 'Iteration & growth', detail: 'A roadmap for iterating on the application as needs evolve.' },
    ],
    process: [
      { n: '01', title: 'Discovery & workflow mapping', desc: 'We map the workflows, users, and data the application must support.' },
      { n: '02', title: 'UX & design', desc: 'Our team designs the UX for the actual users of the application.' },
      { n: '03', title: 'Engineering', desc: 'We build the application with the frameworks and integrations required.' },
      { n: '04', title: 'Deploy & train', desc: 'We deploy the application and train users to ensure adoption.' },
      { n: '05', title: 'Iterate & support', desc: 'We iterate based on feedback and provide ongoing support.' },
    ],
    benefits: [
      { stat: '50%', label: 'Less manual work', desc: 'Custom apps automate workflows that off-the-shelf tools cannot.' },
      { stat: '3x', label: 'Faster workflows', desc: 'Purpose-built apps reduce workflow time by up to 3x versus generic tools.' },
      { stat: '100%', label: 'Fit to process', desc: 'The application matches your exact workflows, not a vendor\'s assumptions.' },
      { stat: '40%', label: 'Lower TCO', desc: 'Custom apps avoid per-seat SaaS costs and vendor lock-in over time.' },
    ],
    faqs: [
      { q: 'What is custom application development?', a: 'Custom application development is the engineering of software built specifically for an organization\'s unique processes, data, and user needs. It is chosen when off-the-shelf tools cannot meet the requirements or differentiation needed. Biznyss builds it with a focus on usability, integration, and time-to-value.' },
      { q: 'When should I build a custom application?', a: 'You should build a custom application when off-the-shelf tools cannot support your workflows, when you need differentiation, or when per-seat SaaS costs become unsustainable. Custom apps are ideal for internal tools, niche products, and unique processes. Biznyss helps you decide with a clear ROI analysis.' },
      { q: 'How long does custom application development take?', a: 'A typical custom application takes 8–16 weeks, depending on scope, integrations, and complexity. Internal tools are often faster than customer-facing products. Biznyss provides a detailed plan after discovery.' },
      { q: 'How much does a custom application cost?', a: 'Custom applications typically start at $30K–$80K, with scope scaling based on integrations and complexity. Biznyss scopes budget to the workflow and ROI required. We avoid over-engineering and focus on what drives value.' },
      { q: 'Can Biznyss integrate custom apps with our existing tools?', a: 'Yes. We integrate custom applications with your existing tools via APIs, webhooks, and automation. This lets the new app work with what you already run. It also reduces manual data entry and errors.' },
    ],
    relatedServices: ['web-development', 'mobile-applications', 'saas-development', 'enterprise-solutions'],
    relatedSolutions: ['launch', 'automate'],
    keywords: ['custom application development', 'custom software development', 'internal tools development', 'custom business apps', 'bespoke software', 'custom dashboards', 'workflow applications', 'custom product development'],
  },
  {
    slug: 'ai-agents-assistants',
    cap: 'ai-automation',
    capName: 'AI & Automation',
    title: 'AI Agents & Assistants',
    metaTitle: 'AI Agents & Assistants Services | Biznyss',
    metaDescription:
      'Biznyss builds AI agents and assistants that handle real work—research, outreach, ops, and decisions powered by LLMs and your data.',
    eyebrow: 'AI & Automation',
    headline: 'AI Agents & Assistants That Handle Real Work',
    lead:
      'AI agents and assistants are moving from demos to dependable coworkers that research, outreach, and operate inside your business. Biznyss designs and deploys agents powered by LLMs, your data, and the right guardrails. The result is AI that takes action, not just answers questions.',
    about:
      'AI agents and assistants are software systems powered by large language models that can reason, use tools, access data, and take actions to complete tasks. They differ from chatbots by acting autonomously within defined guardrails rather than only answering questions. At Biznyss, they are built with safety, observability, and clear handoffs to humans.',
    deliverables: [
      { label: 'Agent strategy & use case', detail: 'A documented set of high-value use cases with clear success metrics and human handoff rules.' },
      { label: 'Tool & data integration', detail: 'Connections to your systems, data, and APIs so the agent can act on real information.' },
      { label: 'Agent design & prompting', detail: 'Agent architecture, prompts, tools, and guardrails designed for reliability and safety.' },
      { label: 'Observability & evaluation', detail: 'Logging, monitoring, and evaluation so agent behavior is transparent and improvable.' },
      { label: 'Human-in-the-loop handoffs', detail: 'Clear escalation paths to humans for edge cases and high-stakes decisions.' },
      { label: 'Deployment & enablement', detail: 'Deployment to production with documentation and team enablement for adoption.' },
    ],
    process: [
      { n: '01', title: 'Use case & strategy', desc: 'We identify high-value use cases and define success metrics and handoff rules.' },
      { n: '02', title: 'Data & tool integration', desc: 'Our team connects the agent to your systems, data, and APIs.' },
      { n: '03', title: 'Agent design', desc: 'We design the agent architecture, prompts, tools, and guardrails.' },
      { n: '04', title: 'Test & evaluate', desc: 'We test the agent with real scenarios and build observability and evaluation.' },
      { n: '05', title: 'Deploy & enable', desc: 'We deploy to production and enable the team to use and improve the agent.' },
    ],
    benefits: [
      { stat: '5x', label: 'More capacity', desc: 'AI agents handle 5x the workload of a human on repetitive tasks.' },
      { stat: '60%', label: 'Faster response', desc: 'Agents respond in seconds, cutting wait times by up to 60%.' },
      { stat: '24/7', label: 'Always available', desc: 'Agents operate around the clock without fatigue or turnover.' },
      { stat: '100%', label: 'Observable', desc: 'Every action is logged and evaluable for safety and improvement.' },
    ],
    faqs: [
      { q: 'What are AI agents and assistants?', a: 'AI agents and assistants are software systems powered by large language models that can reason, use tools, access data, and take actions to complete tasks. They differ from chatbots by acting autonomously within defined guardrails rather than only answering questions. Biznyss builds them with safety, observability, and clear handoffs to humans.' },
      { q: 'What can AI agents be used for?', a: 'AI agents can be used for research, outreach, operations, scheduling, data entry, customer support triage, and decision support. They are best for repetitive, rules-based tasks with clear success criteria. Biznyss helps identify the highest-ROI use cases for your business.' },
      { q: 'How are AI agents different from chatbots?', a: 'Chatbots answer questions within a scripted flow, while AI agents reason, use tools, access data, and take actions autonomously within guardrails. Agents can complete multi-step tasks, not just respond. Biznyss designs agents with human-in-the-loop handoffs for safety.' },
      { q: 'How does Biznyss keep AI agents safe?', a: 'We build agents with guardrails, logging, observability, and human-in-the-loop handoffs for high-stakes decisions. Every action is evaluable and reversible where possible. This keeps agents dependable in production, not just in demos.' },
      { q: 'How long does it take to deploy an AI agent?', a: 'A first production agent typically takes 4–8 weeks, depending on integrations and complexity. We start with a high-value use case and expand from there. Biznyss provides a clear roadmap after discovery.' },
    ],
    relatedServices: ['chatbot-development', 'support-automation', 'workflow-automation', 'knowledge-solutions'],
    relatedSolutions: ['automate', 'innovate'],
    keywords: ['AI agents', 'AI assistants', 'LLM agents', 'autonomous AI agents', 'AI agent development', 'AI copilots', 'enterprise AI agents', 'AI automation agents'],
  },
  {
    slug: 'chatbot-development',
    cap: 'ai-automation',
    capName: 'AI & Automation',
    title: 'Chatbot Development',
    metaTitle: 'AI Chatbot Development Services | Biznyss',
    metaDescription:
      'Biznyss builds AI chatbots for support and sales—LLM-powered, brand-aware, and integrated with your systems for real outcomes.',
    eyebrow: 'AI & Automation',
    headline: 'AI Chatbot Development for Support and Sales',
    lead:
      'Modern chatbots do more than deflect tickets—they qualify leads, resolve issues, and route conversations intelligently. Biznyss builds LLM-powered chatbots that are brand-aware, integrated with your systems, and designed for real outcomes. The result is conversations that help customers and grow revenue.',
    about:
      'Chatbot development is the design and engineering of conversational interfaces that interact with users via text or voice, powered by rules or large language models. Modern LLM-powered chatbots understand intent, access business data, and take action rather than just matching keywords. At Biznyss, they are built with guardrails, integrations, and clear escalation to humans.',
    deliverables: [
      { label: 'Chatbot strategy & use case', detail: 'A documented set of use cases, intents, and success metrics for the chatbot.' },
      { label: 'Conversation design', detail: 'Conversation flows, personality, and guardrails designed for clarity and brand voice.' },
      { label: 'LLM & knowledge integration', detail: 'Integration with LLMs and your knowledge base so answers are accurate and on-brand.' },
      { label: 'System & data integration', detail: 'Connections to CRM, helpdesk, and other systems so the bot can take real action.' },
      { label: 'Escalation & handoff', detail: 'Clear escalation paths to humans for complex or sensitive conversations.' },
      { label: 'Analytics & optimization', detail: 'Conversation analytics and continuous improvement of the chatbot over time.' },
    ],
    process: [
      { n: '01', title: 'Use case & strategy', desc: 'We define the use cases, intents, and success metrics for the chatbot.' },
      { n: '02', title: 'Conversation design', desc: 'Our team designs the flows, personality, and guardrails for the bot.' },
      { n: '03', title: 'Integration & build', desc: 'We integrate LLMs, knowledge, and systems and build the chatbot.' },
      { n: '04', title: 'Test & launch', desc: 'We test with real conversations and launch with monitoring in place.' },
      { n: '05', title: 'Optimize & grow', desc: 'We analyze conversations and optimize the bot for better outcomes.' },
    ],
    benefits: [
      { stat: '70%', label: 'Instant resolution', desc: 'Modern chatbots resolve up to 70% of common queries instantly.' },
      { stat: '24/7', label: 'Always available', desc: 'Chatbots provide instant support around the clock, in any timezone.' },
      { stat: '40%', label: 'Lower support cost', desc: 'Deflection and automation reduce support cost per contact by up to 40%.' },
      { stat: '3x', label: 'Faster lead response', desc: 'Chatbots qualify and route leads in seconds, not hours.' },
    ],
    faqs: [
      { q: 'What is chatbot development?', a: 'Chatbot development is the design and engineering of conversational interfaces that interact with users via text or voice, powered by rules or large language models. Modern LLM-powered chatbots understand intent, access business data, and take action. Biznyss builds them with guardrails, integrations, and clear escalation to humans.' },
      { q: 'What can an AI chatbot do for my business?', a: 'An AI chatbot can resolve support queries, qualify leads, book meetings, answer product questions, and route conversations to the right team. It works around the clock and scales without adding headcount. Biznyss scopes the bot to the outcomes that matter most to your business.' },
      { q: 'How is an LLM chatbot different from a rule-based chatbot?', a: 'A rule-based chatbot follows scripted flows and keyword matching, while an LLM chatbot understands intent, generates natural responses, and can take actions via tools. LLM bots handle far more variation and complexity. Biznyss uses LLMs with guardrails so responses stay accurate and on-brand.' },
      { q: 'How long does chatbot development take?', a: 'A production chatbot typically takes 3–6 weeks, depending on integrations and complexity. We start with a high-value use case and expand from there. Biznyss provides a clear timeline after discovery.' },
      { q: 'Can Biznyss integrate a chatbot with our CRM and helpdesk?', a: 'Yes. We integrate chatbots with CRM, helpdesk, and other systems so the bot can take real action, not just chat. This lets the bot qualify leads, create tickets, and book meetings. It also keeps conversations in sync with your existing workflows.' },
    ],
    relatedServices: ['ai-agents-assistants', 'support-automation', 'workflow-automation', 'knowledge-solutions'],
    relatedSolutions: ['automate', 'scale'],
    keywords: ['chatbot development', 'AI chatbot development', 'LLM chatbot', 'conversational AI', 'customer support chatbot', 'sales chatbot', 'enterprise chatbot', 'AI customer service'],
  },
  {
    slug: 'support-automation',
    cap: 'ai-automation',
    capName: 'AI & Automation',
    title: 'Support Automation',
    metaTitle: 'Support Automation Services | Biznyss',
    metaDescription:
      'Biznyss builds support automation that resolves tickets faster—AI agents, knowledge bases, and workflows that scale customer service.',
    eyebrow: 'AI & Automation',
    headline: 'Support Automation That Resolves Tickets Faster',
    lead:
      'Customer support is one of the highest-ROI areas for AI and automation. Biznyss builds support automation that combines AI agents, knowledge bases, and workflow automation to resolve tickets faster and at lower cost. The result is support that scales without sacrificing quality.',
    about:
      'Support automation is the use of AI, chatbots, knowledge bases, and workflow automation to resolve customer issues with less human effort. It combines self-service, AI-assisted agents, and intelligent routing to reduce ticket volume and handle time. At Biznyss, it is built to improve customer satisfaction while lowering cost per contact.',
    deliverables: [
      { label: 'Support audit & strategy', detail: 'An audit of ticket volume, types, and root causes with a prioritized automation roadmap.' },
      { label: 'AI agent & chatbot', detail: 'An AI agent or chatbot that resolves common queries and escalates complex ones to humans.' },
      { label: 'Knowledge base & self-service', detail: 'A structured knowledge base that powers self-service and AI answers.' },
      { label: 'Workflow automation', detail: 'Automated routing, tagging, and escalation workflows that speed resolution.' },
      { label: 'Agent assist & copilot', detail: 'AI copilots that help human agents draft responses and find answers faster.' },
      { label: 'Analytics & reporting', detail: 'A dashboard tracking deflection, resolution time, CSAT, and cost per contact.' },
    ],
    process: [
      { n: '01', title: 'Audit & strategy', desc: 'We audit ticket volume and types and build a prioritized automation roadmap.' },
      { n: '02', title: 'Knowledge & self-service', desc: 'Our team structures the knowledge base and self-service flows.' },
      { n: '03', title: 'AI agent & workflows', desc: 'We build the AI agent, chatbot, and automation workflows.' },
      { n: '04', title: 'Agent assist & launch', desc: 'We deploy agent copilots and launch with monitoring in place.' },
      { n: '05', title: 'Optimize & scale', desc: 'We track deflection and CSAT and optimize the system over time.' },
    ],
    benefits: [
      { stat: '70%', label: 'Ticket deflection', desc: 'AI and self-service deflect up to 70% of common tickets from human agents.' },
      { stat: '50%', label: 'Faster resolution', desc: 'Automation and agent assist cut average resolution time by up to 50%.' },
      { stat: '40%', label: 'Lower cost per contact', desc: 'Deflection and automation reduce cost per contact by up to 40%.' },
      { stat: '24/7', label: 'Always-on support', desc: 'AI agents provide instant support around the clock, in any timezone.' },
    ],
    faqs: [
      { q: 'What is support automation?', a: 'Support automation is the use of AI, chatbots, knowledge bases, and workflow automation to resolve customer issues with less human effort. It combines self-service, AI-assisted agents, and intelligent routing to reduce ticket volume and handle time. Biznyss builds it to improve CSAT while lowering cost per contact.' },
      { q: 'How much can support automation reduce ticket volume?', a: 'AI and self-service can deflect up to 70% of common tickets from human agents, depending on the support mix. The biggest gains come from automating repetitive, high-volume queries. Biznyss prioritizes the use cases with the highest ROI.' },
      { q: 'Does support automation hurt customer satisfaction?', a: 'No, when done well it improves CSAT by resolving issues faster and offering 24/7 help. The key is clear escalation to humans for complex or sensitive issues. Biznyss designs automation with human handoffs so customers always reach help when needed.' },
      { q: 'What tools does Biznyss use for support automation?', a: 'We use LLMs, helpdesk platforms, knowledge bases, and workflow automation tools, selected based on the existing stack and use cases. We integrate with tools like Zendesk, Intercom, and custom helpdesks. The stack is chosen to fit the team, not the other way around.' },
      { q: 'How long does support automation take to deploy?', a: 'A first wave of support automation typically takes 4–8 weeks, depending on integrations and scope. We start with the highest-volume use cases and expand from there. Biznyss provides a clear roadmap after the audit.' },
    ],
    relatedServices: ['ai-agents-assistants', 'chatbot-development', 'workflow-automation', 'knowledge-solutions'],
    relatedSolutions: ['automate', 'scale'],
    keywords: ['support automation', 'customer support automation', 'AI customer support', 'ticket automation', 'support deflection', 'AI helpdesk', 'agent assist AI', 'customer service automation'],
  },
  {
    slug: 'workflow-automation',
    cap: 'ai-automation',
    capName: 'AI & Automation',
    title: 'Workflow Automation',
    metaTitle: 'Workflow Automation Services | Biznyss',
    metaDescription:
      'Biznyss automates business workflows—connecting tools, removing manual steps, and deploying AI where it saves real time.',
    eyebrow: 'AI & Automation',
    headline: 'Workflow Automation That Removes Manual Work',
    lead:
      'Most teams lose hours every week to manual handoffs, copy-paste, and disconnected tools. Biznyss automates business workflows by connecting systems, removing manual steps, and deploying AI where it saves real time. The result is more capacity, fewer errors, and faster cycles.',
    about:
      'Workflow automation is the design and deployment of automated processes that connect tools, data, and people to complete tasks with less manual effort. It combines integrations, rules, and AI to handle repetitive work and hand off exceptions to humans. At Biznyss, it is built with clear ROI, observability, and governance.',
    deliverables: [
      { label: 'Workflow audit & map', detail: 'An audit of current workflows with a map of manual steps, bottlenecks, and automation opportunities.' },
      { label: 'Automation roadmap', detail: 'A prioritized roadmap of automation projects with expected ROI and effort.' },
      { label: 'Integration & orchestration', detail: 'Connections between tools and systems using APIs, webhooks, and automation platforms.' },
      { label: 'AI-assisted automation', detail: 'AI steps for tasks like classification, extraction, summarization, and drafting.' },
      { label: 'Governance & observability', detail: 'Monitoring, logging, and error handling so automations are reliable and auditable.' },
      { label: 'Enablement & documentation', detail: 'Documentation and training so the team can operate and extend the automations.' },
    ],
    process: [
      { n: '01', title: 'Audit & map', desc: 'We audit current workflows and map manual steps and bottlenecks.' },
      { n: '02', title: 'Roadmap & prioritize', desc: 'Our team builds a prioritized automation roadmap with ROI and effort.' },
      { n: '03', title: 'Integrate & automate', desc: 'We connect tools and build automations with AI steps where valuable.' },
      { n: '04', title: 'Test & deploy', desc: 'We test automations with real data and deploy with monitoring in place.' },
      { n: '05', title: 'Monitor & extend', desc: 'We monitor performance and extend automations as needs evolve.' },
    ],
    benefits: [
      { stat: '10+', label: 'Hours saved per week', desc: 'Typical workflow automation saves each team 10+ hours of manual work per week.' },
      { stat: '80%', label: 'Fewer errors', desc: 'Automation reduces manual errors by up to 80% on repetitive tasks.' },
      { stat: '3x', label: 'Faster cycles', desc: 'Automated workflows complete in minutes what took hours manually.' },
      { stat: '100%', label: 'Observable', desc: 'Every automation is monitored and auditable for reliability.' },
    ],
    faqs: [
      { q: 'What is workflow automation?', a: 'Workflow automation is the design and deployment of automated processes that connect tools, data, and people to complete tasks with less manual effort. It combines integrations, rules, and AI to handle repetitive work and hand off exceptions to humans. Biznyss builds it with clear ROI, observability, and governance.' },
      { q: 'What workflows should I automate first?', a: 'Start with high-volume, repetitive workflows with clear rules, such as data entry, approvals, notifications, and reporting. These deliver the fastest ROI and free up team capacity. Biznyss helps prioritize based on effort, impact, and risk.' },
      { q: 'How does AI fit into workflow automation?', a: 'AI handles steps that require understanding, such as classifying documents, extracting data, summarizing content, and drafting responses. It complements rules-based automation by handling unstructured tasks. Biznyss uses AI where it adds value and keeps humans in the loop for exceptions.' },
      { q: 'What tools does Biznyss use for workflow automation?', a: 'We use automation platforms like Zapier and Make, plus custom code, APIs, and AI where needed. The stack is chosen based on the tools, scale, and complexity of the workflows. We favor maintainable, observable solutions over fragile patches.' },
      { q: 'How long does workflow automation take?', a: 'A first wave of automation typically takes 2–6 weeks, depending on the number of workflows and integrations. We start with the highest-ROI processes and expand from there. Biznyss provides a clear roadmap after the audit.' },
    ],
    relatedServices: ['ai-agents-assistants', 'chatbot-development', 'support-automation', 'knowledge-solutions'],
    relatedSolutions: ['automate', 'scale'],
    keywords: ['workflow automation', 'business process automation', 'AI workflow automation', 'process automation', 'automation consulting', 'workflow integration', 'business automation', 'operational automation'],
  },
  {
    slug: 'knowledge-solutions',
    cap: 'ai-automation',
    capName: 'AI & Automation',
    title: 'Knowledge Solutions',
    metaTitle: 'AI Knowledge Solutions & RAG | Biznyss',
    metaDescription:
      'Biznyss builds AI knowledge solutions—RAG systems, internal search, and knowledge bases that make enterprise information instantly useful.',
    eyebrow: 'AI & Automation',
    headline: 'AI Knowledge Solutions That Make Information Useful',
    lead:
      'Most organizations sit on a wealth of knowledge that is hard to find and use. Biznyss builds AI knowledge solutions—RAG systems, internal search, and knowledge bases—that make enterprise information instantly accessible. The result is faster decisions, fewer repeated questions, and a smarter organization.',
    about:
      'Knowledge solutions are systems that capture, organize, and deliver organizational knowledge to the people who need it, often using retrieval-augmented generation (RAG) and AI search. They combine a knowledge base, search, and AI to answer questions from the organization\'s own data. At Biznyss, they are built for accuracy, governance, and adoption.',
    deliverables: [
      { label: 'Knowledge audit & strategy', detail: 'An audit of existing knowledge sources with a strategy for organizing and delivering them.' },
      { label: 'Knowledge base architecture', detail: 'A structured knowledge base with content modeling, taxonomy, and governance.' },
      { label: 'RAG & AI search', detail: 'Retrieval-augmented generation and AI search that answers questions from your data with citations.' },
      { label: 'Integrations & ingestion', detail: 'Connections to documents, wikis, databases, and tools so knowledge stays current.' },
      { label: 'Access control & governance', detail: 'Role-based access and governance so the right people see the right knowledge.' },
      { label: 'Analytics & feedback', detail: 'Analytics on usage and feedback loops to continuously improve the knowledge base.' },
    ],
    process: [
      { n: '01', title: 'Audit & strategy', desc: 'We audit knowledge sources and define the strategy for organizing and delivering them.' },
      { n: '02', title: 'Architecture & modeling', desc: 'Our team designs the knowledge base architecture, taxonomy, and governance.' },
      { n: '03', title: 'RAG & search build', desc: 'We build RAG and AI search that answers questions from your data with citations.' },
      { n: '04', title: 'Integrate & ingest', desc: 'We connect sources and set up ingestion so knowledge stays current.' },
      { n: '05', title: 'Launch & improve', desc: 'We launch, track usage, and improve the system based on feedback.' },
    ],
    benefits: [
      { stat: '60%', label: 'Faster answers', desc: 'AI knowledge solutions cut time-to-answer by up to 60% versus manual search.' },
      { stat: '40%', label: 'Fewer repeated questions', desc: 'Self-service knowledge reduces repeated internal questions by up to 40%.' },
      { stat: '100%', label: 'Cited answers', desc: 'RAG answers include citations so users can verify sources.' },
      { stat: '24/7', label: 'Always available', desc: 'Knowledge is accessible around the clock, in any timezone.' },
    ],
    faqs: [
      { q: 'What are AI knowledge solutions?', a: 'AI knowledge solutions are systems that capture, organize, and deliver organizational knowledge using retrieval-augmented generation (RAG) and AI search. They combine a knowledge base, search, and AI to answer questions from the organization\'s own data. Biznyss builds them for accuracy, governance, and adoption.' },
      { q: 'What is RAG and how does it work?', a: 'RAG, or retrieval-augmented generation, is a technique that retrieves relevant information from a knowledge base and uses it to generate accurate, cited answers. It grounds AI responses in your own data rather than the model\'s training data. Biznyss builds RAG systems with citations so answers are verifiable.' },
      { q: 'How do AI knowledge solutions improve productivity?', a: 'They cut time-to-answer by up to 60% and reduce repeated internal questions by up to 40%. Employees find information instantly instead of searching or asking colleagues. This frees up capacity for higher-value work.' },
      { q: 'Can Biznyss build knowledge solutions for our existing tools?', a: 'Yes. We ingest content from documents, wikis, databases, and tools so the knowledge base stays current. The solution integrates with where your team already works. This avoids yet another tool and keeps knowledge trustworthy.' },
      { q: 'How long does it take to build an AI knowledge solution?', a: 'A first production knowledge solution typically takes 4–8 weeks, depending on the number of sources and complexity. We start with the highest-value knowledge and expand from there. Biznyss provides a clear roadmap after the audit.' },
    ],
    relatedServices: ['ai-agents-assistants', 'chatbot-development', 'support-automation', 'workflow-automation'],
    relatedSolutions: ['automate', 'innovate'],
    keywords: ['AI knowledge solutions', 'RAG development', 'retrieval-augmented generation', 'enterprise knowledge base', 'AI internal search', 'knowledge management AI', 'enterprise AI search', 'AI knowledge platform'],
  },
];

export function getServicesForCap(capSlug: string): ServicePage[] {
  return services.filter(s => s.cap === capSlug);
}

export function getServiceBySlug(capSlug: string, serviceSlug: string): ServicePage | undefined {
  return services.find(s => s.cap === capSlug && s.slug === serviceSlug);
}

export function getServicesBySlugList(slugs: string[]): ServicePage[] {
  return services.filter(s => slugs.includes(s.slug));
}
