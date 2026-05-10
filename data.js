// ============================================
// VASCO AI LEARNING PLATFORM - data.js
// ============================================

const courses = [
  {
    id: "small-business",
    title: "Starting a Small Business",
    icon: "fas fa-store",
    color: "blue",
    description: "Learn how to start, run and grow a small business from scratch.",
    levels: {
      beginner: {
        label: "Beginner",
        lessons: [
          {
            id: 1,
            title: "What is a Small Business?",
            explanation: "A small business is any business owned and run by one person or a small group of people. It can be a shop, a service, or even something you do from home. Small businesses are the backbone of every economy.",
            example: "Mary sells homemade soap from her house. She buys ingredients, makes the soap, and sells it to neighbors and online. That is a small business.",
            task: "Write down 3 business ideas you could start in your community with less than $50."
          },
          {
            id: 2,
            title: "Finding a Business Idea",
            explanation: "A good business idea solves a problem or meets a need people already have. The best ideas come from looking at what people around you need but cannot easily get.",
            example: "In a neighborhood with no laundry service, someone started a wash-and-fold service from their home. People needed it, they provided it.",
            task: "Walk around your area or think about your community. Write down 3 problems people face that a business could solve."
          },
          {
            id: 3,
            title: "Knowing Your Customer",
            explanation: "Your customer is the person who will buy from you. Understanding who they are — their age, needs, income, and habits — helps you sell better and market smarter.",
            example: "A student selling phone chargers targets other students and young workers who use smartphones daily.",
            task: "Pick one of your business ideas. Describe your ideal customer: age, job, what they need, and how much they can spend."
          },
          {
            id: 4,
            title: "What is a Business Plan?",
            explanation: "A business plan is a simple document that explains what your business is, who it serves, how you will make money, and what you need to get started. It does not have to be long — even one page works.",
            example: "Before opening his barbershop, James wrote one page describing his services, his prices, his location, and how much money he needed to start.",
            task: "Write a one-page business plan for your business idea. Include: what you sell, who buys it, your price, and startup cost."
          },
          {
            id: 5,
            title: "Startup Costs & Budgeting",
            explanation: "Startup costs are the money you need before your business can open. Budgeting means planning how you will spend that money so you do not run out before you make profit.",
            example: "A food seller needs money for a table, ingredients, packaging, and transport. Listing these before starting prevents surprises.",
            task: "List everything you would need to buy or pay for to start your business. Add up the total cost."
          },
          {
            id: 6,
            title: "Pricing Your Product or Service",
            explanation: "Price is what you charge customers. It must cover your costs and leave profit for you. If you price too low you lose money; too high and customers go elsewhere.",
            example: "If a bag of rice costs $10 and you spend $2 on transport and packaging, you should sell for at least $14 to make $2 profit.",
            task: "Take one product or service from your business idea. Calculate your cost and set a price that gives you at least 20% profit."
          },
          {
            id: 7,
            title: "How to Make Your First Sale",
            explanation: "Your first sale is the most important. It proves people want what you offer. Start by telling people you know — family, friends, neighbors — before trying to reach strangers.",
            example: "Fatima made her first 10 sales just by posting in her WhatsApp family group and asking people to share. No advertising costs.",
            task: "Write a short message (under 50 words) announcing your business that you could send to 10 people you know today."
          },
          {
            id: 8,
            title: "Keeping Simple Business Records",
            explanation: "Records help you know how much money is coming in and going out. Without records you cannot know if your business is making profit or losing money.",
            example: "Every day, Daniel writes in a notebook: what he sold, how much he received, and what he spent. At the end of the week he adds it up.",
            task: "Create a simple table with 3 columns: Date, Money In, Money Out. Record your personal spending for 3 days as practice."
          },
          {
            id: 9,
            title: "Handling Business Challenges",
            explanation: "Every business faces problems — slow sales, difficult customers, or unexpected costs. The key is to stay calm, analyze what went wrong, and adjust your approach.",
            example: "When sales dropped in the rainy season, a cold drink seller started selling hot tea instead. She adapted and kept earning.",
            task: "Think of one challenge your business might face. Write down two ways you could respond to that challenge."
          },
          {
            id: 10,
            title: "Growing Your Business",
            explanation: "Growth means earning more customers, selling more, or adding new products. You grow by reinvesting profit back into the business instead of spending all of it.",
            example: "After three months of profit, a phone accessories seller used savings to add a phone repair service — doubling her income.",
            task: "Write down one way you could grow your business after 3 months if things go well."
          }
        ]
      },
      intermediate: {
        label: "Intermediate",
        lessons: [
          {
            id: 1,
            title: "Understanding Profit and Loss",
            explanation: "Profit is what remains after you subtract all your costs from your revenue. Loss happens when costs are higher than revenue. Tracking this monthly keeps your business healthy.",
            example: "Revenue $500 - Costs $380 = Profit $120. If costs were $520, you would have a $20 loss.",
            task: "Using made-up numbers, calculate your monthly profit or loss for a business selling phone cases."
          },
          {
            id: 2,
            title: "Marketing on a Small Budget",
            explanation: "Marketing is how you attract customers. With little money, you can use WhatsApp, word of mouth, flyers, and community groups to spread the word about your business.",
            example: "A baker posts photos of fresh bread every morning on WhatsApp Status. Her customers order before she even opens.",
            task: "Create a 7-day free marketing plan for your business using only WhatsApp, word of mouth, and one offline method."
          },
          {
            id: 3,
            title: "Building Customer Loyalty",
            explanation: "Loyal customers buy from you again and again. You build loyalty through good service, reliability, following up, and occasionally rewarding repeat buyers.",
            example: "A tailor gives every 5th customer a free small alteration. Customers keep coming back and tell their friends.",
            task: "Design a simple loyalty reward for your business. What will you offer and after how many purchases?"
          },
          {
            id: 4,
            title: "Managing Cash Flow",
            explanation: "Cash flow is money moving in and out of your business. Even a profitable business can fail if cash runs out at the wrong time. Always keep some cash reserved for slow periods.",
            example: "A school supply seller saves extra during back-to-school season to survive slow months in December.",
            task: "Map out which months your business might be slow and which would be busy. Plan how you would manage money across those months."
          },
          {
            id: 5,
            title: "Working With Suppliers",
            explanation: "Suppliers provide the goods or materials you need. A good supplier relationship means better prices, reliable delivery, and credit terms that help your cash flow.",
            example: "After buying consistently for 3 months, a shop owner negotiated to pay suppliers after 30 days instead of upfront — freeing cash.",
            task: "List 3 suppliers you would need for your business and write one question you would ask each to negotiate better terms."
          },
          {
            id: 6,
            title: "Separating Business and Personal Money",
            explanation: "Many small businesses fail because owners mix personal and business money. Open a separate account or keep a separate cash box just for business income and expenses.",
            example: "Peter kept all business money in one pocket and personal money in another. He always knew exactly how much the business had.",
            task: "Write a rule for yourself: how will you keep business money separate from personal spending starting today?"
          },
          {
            id: 7,
            title: "Setting Business Goals",
            explanation: "Goals give your business direction. Set short-term goals (this week, this month) and long-term goals (6 months, 1 year). Goals should be specific and measurable.",
            example: "Goal: Sell 50 units per week by end of month 2. Track weekly and adjust if falling behind.",
            task: "Set 3 business goals: one for this week, one for this month, and one for 6 months from now."
          },
          {
            id: 8,
            title: "Dealing With Competition",
            explanation: "Competition is other businesses selling similar things. Instead of fearing competitors, learn from them. Offer something different — better quality, lower price, faster service, or a personal touch.",
            example: "Two phone sellers in the same market: one offers free screen cleaning with every purchase. He gets more customers despite same prices.",
            task: "Research one competitor in your business area. Write down one thing they do well and one gap you could fill."
          },
          {
            id: 9,
            title: "Using Mobile Money for Business",
            explanation: "Mobile money allows customers to pay you digitally and helps you track payments. It also builds a payment history useful for future loans or credit.",
            example: "A market seller shares her Mobile Money number on every package. 40% of her customers now pay digitally without cash issues.",
            task: "Set up or review your Mobile Money account. Write down how you will use it to receive and track business payments."
          }
        ]
      },
      advanced: {
        label: "Advanced",
        lessons: [
          {
            id: 1,
            title: "Building a Business Brand",
            explanation: "A brand is more than a logo — it is how people feel about your business. It includes your name, colors, tone, and the promise you make to customers.",
            example: "A cleaning business uses green color everywhere, calls itself EcoClean, and promises 'always natural, always safe.' Customers trust and remember it.",
            task: "Define your brand: choose a business name, a color, and write one sentence that describes what your business promises customers."
          },
          {
            id: 2,
            title: "Registering Your Business",
            explanation: "Registering makes your business legal. It opens doors to bank accounts, government contracts, and customer trust. In Liberia, you register through the Liberia Business Registry.",
            example: "After registering, a caterer was able to supply food to a school because they required a registered business certificate.",
            task: "Research the steps to register a business in your country. Write down the first 3 steps and estimated cost."
          },
          {
            id: 3,
            title: "Scaling Your Business",
            explanation: "Scaling means growing without losing quality or control. You can scale by hiring help, automating tasks, adding locations, or partnering with others.",
            example: "A seamstress hired two apprentices. She now designs and manages while they do basic sewing — tripling her output.",
            task: "Write a scaling plan: what would you need to do to serve 3x more customers than you do today?"
          },
          {
            id: 4,
            title: "Business Networking",
            explanation: "Networking means building relationships with other business owners, potential partners, and community leaders. Your network is your net worth in business.",
            example: "By joining a local business association, a shop owner got a bulk buying group deal that cut her supply costs by 15%.",
            task: "Identify 3 people or groups you could connect with to help your business. Write one message you could send to one of them."
          },
          {
            id: 5,
            title: "Accessing Business Finance",
            explanation: "Finance options include microloans, savings groups (susus), bank loans, and grants. Each has pros and cons. Borrow only what you can repay with business revenue.",
            example: "A trader joined a susu group and used her payout to buy stock in bulk — increasing her margin by 25%.",
            task: "Research one loan or grant available to small businesses in your area. Write down the amount, requirements, and repayment terms."
          },
          {
            id: 6,
            title: "Hiring and Managing Staff",
            explanation: "When you hire someone, you become responsible for their work and wellbeing. Be clear on roles, pay, and expectations from day one. Good management keeps good people.",
            example: "A bakery owner wrote a one-page job description before hiring her first assistant. Less confusion, better results.",
            task: "Write a simple job description for the first person you would hire in your business. Include role, tasks, and pay."
          },
          {
            id: 7,
            title: "Digital Presence for Your Business",
            explanation: "Having a Facebook page, WhatsApp Business account, or simple website gives your business visibility beyond your neighborhood. More visibility means more potential customers.",
            example: "A tailor set up WhatsApp Business with a catalog of his designs. Customers browse and order without visiting — doubling his reach.",
            task: "Set up or improve one digital presence for your business this week — WhatsApp Business, Facebook page, or Google Business profile."
          },
          {
            id: 8,
            title: "Long-Term Business Sustainability",
            explanation: "A sustainable business survives economic changes, personal challenges, and competition over time. It has consistent customers, managed costs, and a plan for the future.",
            example: "A stationery shop owner saved 10% of every month's profit into an emergency fund. When a flood damaged stock, she recovered quickly.",
            task: "Write your 2-year business vision: where do you want your business to be and what steps will get you there?"
          }
        ]
      }
    }
  },  {
    id: "digital-skills",
    title: "Digital Skills & Productivity",
    icon: "fas fa-laptop-code",
    color: "green",
    description: "Master essential digital tools used in modern workplaces.",
    levels: {
      beginner: {
        label: "Beginner",
        lessons: [
          {
            id: 1,
            title: "What Are Digital Skills?",
            explanation: "Digital skills are the ability to use computers, phones, and the internet to do tasks. In today's world, basic digital skills are as important as reading and writing for getting jobs and running businesses.",
            example: "Someone who can type a document, send an email, and search the internet has basic digital skills that most employers now require.",
            task: "List 5 digital tasks you already know how to do and 3 you want to learn."
          },
          {
            id: 2,
            title: "Using a Smartphone Effectively",
            explanation: "Your smartphone is a powerful tool for work and learning. Knowing how to organize apps, manage storage, use settings, and stay secure makes you more productive every day.",
            example: "A market trader uses her phone to check prices online, send invoices on WhatsApp, and track orders in a notes app — all from one device.",
            task: "Organize your phone today: delete unused apps, create one folder for work apps, and enable auto-backup for your photos."
          },
          {
            id: 3,
            title: "Email Basics",
            explanation: "Email is the standard communication tool in professional and business settings. Knowing how to write clearly, use subject lines, attach files, and organize your inbox is essential.",
            example: "A job applicant who sends a clear email with a proper subject line and attached CV gets noticed faster than one who sends a messy message.",
            task: "Write a professional email applying for any job or opportunity. Include: subject line, greeting, body, and sign-off."
          },
          {
            id: 4,
            title: "Typing & Document Creation",
            explanation: "Being able to type fast and create documents using Google Docs or Microsoft Word is a foundational workplace skill. Documents are used for reports, letters, proposals, and records.",
            example: "An office assistant who can type 40 words per minute and format a clean report stands out among colleagues who hand-write everything.",
            task: "Open Google Docs or Word. Type a one-page summary of your business idea or a topic you know well. Format it with headings and paragraphs."
          },
          {
            id: 5,
            title: "Internet Safety & Scam Awareness",
            explanation: "The internet has dangers including scams, fake websites, and hackers. Knowing how to protect yourself — strong passwords, avoiding suspicious links, not sharing personal info — keeps you safe online.",
            example: "A man lost $200 by clicking a fake bank link sent via SMS. The page looked real but was designed to steal his login details.",
            task: "Check your 3 most important online accounts. Make sure each has a strong unique password and enable two-factor authentication where possible."
          },
          {
            id: 6,
            title: "Using Google Search Effectively",
            explanation: "Most people use only 10% of Google's power. Learning to search with specific keywords, use quotes for exact phrases, and filter by date finds better results faster.",
            example: "Instead of searching 'business ideas', searching 'small business ideas Liberia 2024 low cost' gives far more relevant results.",
            task: "Search for information about your business or career using 3 different search strategies. Compare the results you get."
          },
          {
            id: 7,
            title: "Video Calls & Online Meetings",
            explanation: "Tools like Zoom, Google Meet, and WhatsApp video are now used for job interviews, business meetings, and remote work. Knowing how to join, present yourself, and communicate professionally online is critical.",
            example: "A freelancer in Monrovia does client meetings with people in the US every week via Google Meet — no travel, no cost.",
            task: "Set up a free Zoom or Google Meet account. Practice joining a meeting, sharing your screen, and muting/unmuting."
          },
          {
            id: 8,
            title: "Cloud Storage & File Management",
            explanation: "Cloud storage like Google Drive lets you save files online so they cannot be lost if your phone or computer breaks. It also lets you share files easily with others.",
            example: "A student lost all her work when her laptop crashed. Her classmate who used Google Drive lost nothing because everything was backed up automatically.",
            task: "Create a Google Drive account if you do not have one. Upload 3 important documents and organize them into named folders."
          },
          {
            id: 9,
            title: "Basic Spreadsheets",
            explanation: "Spreadsheets like Google Sheets or Excel help you organize numbers, track money, and create simple reports. Even basic knowledge of spreadsheets is a highly valued workplace skill.",
            example: "A small shop owner uses a simple Google Sheet to track daily sales. At month end she can see exactly which products sold best.",
            task: "Create a simple spreadsheet tracking your income and expenses for this week. Use one column for dates, one for income, one for expenses."
          }
        ]
      },
      intermediate: {
        label: "Intermediate",
        lessons: [
          {
            id: 1,
            title: "Professional Communication Online",
            explanation: "How you communicate digitally affects how people see you professionally. This includes tone in emails, response time, clarity in messages, and proper grammar in all written communication.",
            example: "Two people apply for the same contract. One replies within an hour with clear professional messages. The other takes days and writes casually. The first gets hired.",
            task: "Review your last 5 work-related messages or emails. Rewrite any that were unclear or unprofessional using better language and structure."
          },
          {
            id: 2,
            title: "Creating Presentations",
            explanation: "Google Slides and PowerPoint let you create visual presentations for meetings, pitches, and training. A good presentation is simple, visual, and tells a clear story.",
            example: "An entrepreneur used a 10-slide Google Slides presentation to pitch her business to a microfinance organization and secured a $500 loan.",
            task: "Create a 5-slide presentation about your business or a topic you know. Include a title slide, 3 content slides, and a closing slide."
          },
          {
            id: 3,
            title: "Managing Your Digital Time",
            explanation: "Digital distractions — social media, videos, notifications — waste hours every day. Productive people use tools and habits to stay focused and get more done in less time.",
            example: "A freelancer uses a timer app to work in 25-minute focused sessions with 5-minute breaks. She finishes in 4 hours what used to take 8.",
            task: "Track your phone screen time for one day. Identify your biggest time-wasting app and set a daily limit on it."
          },
          {
            id: 4,
            title: "Using AI Tools for Productivity",
            explanation: "AI tools like ChatGPT can help you write, research, translate, summarize, and brainstorm faster. Learning to use AI as an assistant saves time and improves your work quality.",
            example: "A business owner uses AI to draft customer emails, write product descriptions, and translate messages — tasks that used to take hours now take minutes.",
            task: "Use a free AI tool to help you write one business email, one social media post, and one product description. Compare it to what you would write alone."
          },
          {
            id: 5,
            title: "Canva for Design",
            explanation: "Canva is a free online design tool anyone can use without design experience. You can create flyers, social media posts, business cards, and presentations that look professional.",
            example: "A food seller creates her own weekly menu flyers on Canva for free. Her posts get more engagement than competitors who use plain text.",
            task: "Create one piece of marketing material for your business using Canva — a flyer, social media post, or business card."
          },
          {
            id: 6,
            title: "Data Collection with Google Forms",
            explanation: "Google Forms lets you collect information from customers, run surveys, and gather feedback for free. The responses go directly into a spreadsheet you can analyze.",
            example: "A trainer uses Google Forms to collect feedback after every workshop. She uses the results to improve her next session.",
            task: "Create a simple Google Form with 5 questions to collect customer feedback for your business. Share the link with at least 3 people."
          },
          {
            id: 7,
            title: "WhatsApp Business Features",
            explanation: "WhatsApp Business has professional features regular WhatsApp lacks — business profile, product catalog, quick replies, labels, and automated messages — all free.",
            example: "A tailor uses WhatsApp Business catalog to show all her designs with prices. Customers browse and order without calling — saving everyone time.",
            task: "Set up or improve your WhatsApp Business profile. Add at least 3 products to your catalog and create one automated greeting message."
          },
          {
            id: 8,
            title: "Online Research & Fact Checking",
            explanation: "Not everything online is true. Knowing how to verify information — checking multiple sources, looking at publication dates, identifying fake news — is a critical digital skill.",
            example: "A health rumor spread on WhatsApp. Someone who knew how to fact-check found the original false source and shared the correction before others spread it further.",
            task: "Find a news story or claim shared on social media. Spend 10 minutes verifying whether it is true using at least 2 independent sources."
          }
        ]
      },
      advanced: {
        label: "Advanced",
        lessons: [
          {
            id: 1,
            title: "Building a Personal Digital Brand",
            explanation: "Your digital presence is what employers and clients see before meeting you. A strong LinkedIn profile, consistent social media, and a portfolio of your work build credibility and attract opportunities.",
            example: "A graphic designer posts her work on LinkedIn weekly. A company in Nigeria found her profile and offered her a remote contract paying $800 per month.",
            task: "Update or create your LinkedIn profile with a professional photo, clear headline, and at least 3 listed skills. Connect with 10 people in your field."
          },
          {
            id: 2,
            title: "Project Management Tools",
            explanation: "Tools like Trello, Notion, and Asana help you manage projects, track tasks, set deadlines, and collaborate with others. These are standard in remote work environments worldwide.",
            example: "A team of 4 people running a community project uses Trello to assign tasks, track progress, and never miss a deadline — all from their phones.",
            task: "Create a free Trello board for a current project or goal. Add at least 5 tasks with deadlines and assign them to columns: To Do, In Progress, Done."
          },
          {
            id: 3,
            title: "Introduction to Coding Concepts",
            explanation: "You do not need to be a programmer but understanding basic coding concepts — how websites work, what HTML/CSS is, how apps are built — makes you more valuable in any digital role.",
            example: "A marketing manager who understands basic HTML can edit her company website herself instead of waiting days for a developer.",
            task: "Complete one free beginner coding lesson on Khan Academy or freeCodeCamp. Write down 3 things you learned."
          },
          {
            id: 4,
            title: "Data Analysis Basics",
            explanation: "Data analysis means looking at numbers and information to understand patterns and make better decisions. Even basic Excel or Google Sheets skills let you analyze business data effectively.",
            example: "By analyzing 3 months of sales data in Google Sheets, a shop owner discovered that 70% of revenue came from just 3 products — so she focused on stocking those.",
            task: "Take any set of data you have — sales, expenses, or survey responses — and create one chart in Google Sheets that reveals a pattern."
          },
          {
            id: 5,
            title: "Remote Work Skills",
            explanation: "Remote work requires strong self-discipline, digital communication skills, time management, and the ability to use collaboration tools. More jobs worldwide are going remote — being ready gives you a global advantage.",
            example: "A writer in Monrovia works fully remotely for a media company in London — same pay as local employees, zero commute.",
            task: "Set up a dedicated work space at home and establish a daily remote work routine. Write out your ideal remote workday hour by hour."
          },
          {
            id: 6,
            title: "Creating a Simple Website",
            explanation: "Having a website makes your business or personal brand look professional and permanent. Free tools like Google Sites or WordPress.com let you build one with no coding knowledge.",
            example: "A photographer built a free portfolio website in one afternoon using Google Sites. Within a week a client found it through Google and booked a session.",
            task: "Build a simple one-page website for yourself or your business using Google Sites or Carrd.co. Publish it and share the link."
          },
          {
            id: 7,
            title: "Cybersecurity for Professionals",
            explanation: "As you do more business online, cybersecurity becomes critical. This includes protecting client data, securing your devices, using VPNs, and knowing how to respond to a security breach.",
            example: "A freelancer encrypted all client files and used a password manager. When a colleague got hacked, her accounts remained safe.",
            task: "Conduct a personal security audit: update all passwords, enable 2FA on email and banking apps, and install a reputable antivirus on your devices."
          },
          {
            id: 8,
            title: "Automating Repetitive Tasks",
            explanation: "Automation means using tools to do repetitive tasks automatically — sending scheduled messages, backing up files, posting on social media, or generating reports without manual effort.",
            example: "A business owner uses a free tool to automatically send a thank-you WhatsApp message every time a customer pays. She saves 2 hours per week.",
            task: "Identify one task you do repeatedly every week. Research a free tool that could automate it and set it up."
          }
        ]
      }
    }
  }, {
    id: "communication",
    title: "Communication & Influence Skills",
    icon: "fas fa-comments",
    color: "purple",
    description: "Build confidence, speak clearly and influence others positively.",
    levels: {
      beginner: {
        label: "Beginner",
        lessons: [
          {
            id: 1,
            title: "What is Communication?",
            explanation: "Communication is the process of sharing information, ideas, and feelings between people. It includes what you say, how you say it, your body language, and how well you listen.",
            example: "A manager who speaks clearly, listens carefully, and maintains eye contact is more respected and effective than one who talks over people and never listens.",
            task: "Have a 5-minute conversation with someone today. Afterwards write down: did you listen more than you spoke? Did you understand them fully?"
          },
          {
            id: 2,
            title: "Verbal vs Non-Verbal Communication",
            explanation: "Only 30% of communication is words. The other 70% is tone of voice, facial expressions, posture, eye contact, and gestures. Mastering both makes you a far more powerful communicator.",
            example: "A salesperson who says 'I am happy to help' while frowning and crossing their arms sends a contradictory message. Customers feel it even if they cannot explain it.",
            task: "Stand in front of a mirror and say 'I am confident and ready.' Notice your posture, face, and eye contact. Adjust until your body matches your words."
          },
          {
            id: 3,
            title: "Active Listening",
            explanation: "Active listening means fully concentrating on the speaker — not planning your reply while they talk. It involves nodding, asking follow-up questions, and summarizing what you heard.",
            example: "A doctor who listens actively to a patient — without interrupting — diagnoses correctly the first time. One who rushes misses important details.",
            task: "In your next conversation, focus entirely on listening. Do not interrupt. After they finish, summarize what they said before giving your response."
          },
          {
            id: 4,
            title: "Overcoming the Fear of Speaking",
            explanation: "Fear of speaking in public or even in groups is one of the most common fears. It comes from fear of judgment. The cure is preparation, practice, and starting small.",
            example: "A shy student started by speaking up once per class. Within a month she was volunteering to present. Confidence grew through repeated small actions.",
            task: "Speak up at least once today in a group setting — ask a question, share an opinion, or greet a stranger. Write down how it felt."
          },
          {
            id: 5,
            title: "Clarity and Simplicity in Speech",
            explanation: "The best communicators speak simply and clearly. They avoid jargon, long sentences, and unnecessary words. If your listener is confused, the problem is with the speaker not the listener.",
            example: "A teacher who explains a complex topic using simple everyday examples is far more effective than one who uses technical language students do not understand.",
            task: "Explain your business or job to someone as if they were 10 years old. Use no jargon. Ask them to repeat back what they understood."
          },
          {
            id: 6,
            title: "Asking Good Questions",
            explanation: "Asking good questions shows intelligence, builds relationships, and gets you the information you need. Open questions (who, what, why, how) invite conversation. Closed questions get yes or no.",
            example: "Instead of asking 'Did you like it?' a smart seller asks 'What did you enjoy most about it?' — getting richer feedback and building rapport.",
            task: "In your next 3 conversations, replace yes/no questions with open questions. Write down the difference in the responses you get."
          },
          {
            id: 7,
            title: "Giving and Receiving Feedback",
            explanation: "Feedback is information about performance. Giving it well means being specific, honest, and kind. Receiving it well means listening without defensiveness and looking for truth in the message.",
            example: "Instead of 'Your report was bad', effective feedback says 'The data section was unclear — adding a chart would make it much stronger.'",
            task: "Ask one trusted person for honest feedback on one thing you do — your work, communication, or a skill. Listen fully without defending yourself."
          },
          {
            id: 8,
            title: "Written Communication Basics",
            explanation: "Writing clearly is as important as speaking clearly. This includes texts, emails, reports, and social media. Poor writing creates confusion and damages your professional reputation.",
            example: "Two people send proposals for the same project. One is clear, well-structured and has no errors. The other is messy with spelling mistakes. The first wins every time.",
            task: "Write a short professional message or email on any topic. Read it out loud, fix any awkward sentences, and check for spelling errors before sending."
          },
          {
            id: 9,
            title: "Communicating Across Cultures",
            explanation: "People from different backgrounds communicate differently. Being aware of cultural differences in eye contact, directness, formality, and tone helps you avoid misunderstandings.",
            example: "In some cultures direct eye contact means confidence. In others it feels aggressive. A global professional learns these differences before meetings.",
            task: "Research communication differences between your culture and one other. Write down 3 differences that could cause misunderstanding in a business setting."
          }
        ]
      },
      intermediate: {
        label: "Intermediate",
        lessons: [
          {
            id: 1,
            title: "The Art of Persuasion",
            explanation: "Persuasion is the ability to influence others to see your point of view or take an action. It is based on trust, logic, and emotion — not manipulation. The best persuaders understand what the other person wants.",
            example: "A fundraiser does not say 'donate money.' She says 'For just $5 — less than a meal — you can give a child clean water for a month.' She connects the ask to something real.",
            task: "Write a persuasive message asking for something you genuinely need — support, a discount, a meeting. Use emotion, logic, and a clear benefit to the other person."
          },
          {
            id: 2,
            title: "Negotiation Skills",
            explanation: "Negotiation is finding an agreement both sides can accept. Good negotiators prepare in advance, know their minimum acceptable outcome, and look for solutions that benefit both parties.",
            example: "A supplier quoted $200 for goods. The buyer said 'I plan to order monthly — if you do $170 I will commit to 6 months upfront.' Both won.",
            task: "Think of something you need to negotiate — a price, a deadline, a favor. Plan your opening offer, your ideal outcome, and your minimum acceptable result."
          },
          {
            id: 3,
            title: "Conflict Resolution",
            explanation: "Conflict is inevitable in work and life. Resolving it means understanding both sides, staying calm, finding common ground, and agreeing on a way forward that both parties accept.",
            example: "Two colleagues had a dispute over credit for a project. Their manager sat both down, let each speak fully, identified the misunderstanding, and agreed on shared credit going forward.",
            task: "Think of a current or recent conflict in your life. Write down both sides of the issue honestly. What would a fair resolution look like?"
          },
          {
            id: 4,
            title: "Public Speaking Fundamentals",
            explanation: "Public speaking is a learnable skill. The fundamentals are: know your topic, know your audience, structure your talk clearly, practice out loud, and engage your audience with questions and eye contact.",
            example: "A community leader gave a 5-minute talk at a town meeting. She prepared 3 clear points, practiced 3 times, and made eye contact with different people. The crowd responded positively.",
            task: "Prepare and deliver a 2-minute talk on any topic to at least one person. Record yourself on your phone and watch it back to identify areas to improve."
          },
          {
            id: 5,
            title: "Storytelling for Impact",
            explanation: "Stories are more memorable than facts. Great communicators use stories to make their message stick. A good story has a character, a problem, and a resolution — and connects emotionally to the audience.",
            example: "Instead of saying 'Our product works well', a seller says 'A mother in my neighborhood used this for one week and her child's skin cleared completely.' One story beats a hundred statistics.",
            task: "Turn one fact about your business or work into a short story with a character, a problem they faced, and how your product or service solved it."
          },
          {
            id: 6,
            title: "Assertive Communication",
            explanation: "Assertive communication means expressing your needs and boundaries clearly and respectfully — without being aggressive or passive. It protects your interests while respecting others.",
            example: "Instead of silently accepting unfair treatment or exploding in anger, an assertive person calmly says 'I feel this is unfair because... I would prefer if we...'",
            task: "Identify one situation where you were too passive or too aggressive. Rewrite how you would handle it assertively — what would you say word for word?"
          },
          {
            id: 7,
            title: "Networking & Building Relationships",
            explanation: "Networking is not just collecting contacts — it is building genuine relationships. The best networkers give before they ask, follow up consistently, and remember details about people.",
            example: "After a business event, one attendee sent a follow-up message to 5 people referencing their specific conversation. All 5 remembered him. Others who just exchanged numbers were forgotten.",
            task: "Reach out to 3 people you have not spoken to in over a month. Send a genuine message — not asking for anything, just reconnecting."
          },
          {
            id: 8,
            title: "Emotional Intelligence in Communication",
            explanation: "Emotional intelligence means understanding and managing your own emotions and being sensitive to others. High EQ communicators stay calm under pressure, read the room, and respond rather than react.",
            example: "During a tense meeting, one person noticed the client seemed frustrated and paused to ask 'Is there something specific we should address first?' That question changed the entire tone of the meeting.",
            task: "In your next difficult conversation, pause before responding. Name the emotion you feel first, then choose your words deliberately rather than reacting."
          }
        ]
      },
      advanced: {
        label: "Advanced",
        lessons: [
          {
            id: 1,
            title: "Leadership Communication",
            explanation: "Leaders communicate vision, build trust, and inspire action. They speak with clarity and confidence, give honest feedback, listen deeply, and communicate consistently — especially during uncertainty.",
            example: "During a company crisis, a calm leader gathered his team, explained the situation honestly, shared the plan, and asked for input. Trust increased because of his transparency.",
            task: "Write a short speech (one page) addressing a challenge your community or organization faces. Propose a clear vision and call people to action."
          },
          {
            id: 2,
            title: "Advanced Persuasion & Influence",
            explanation: "Advanced influence uses principles like social proof, scarcity, authority, and reciprocity. Understanding these helps you both use them ethically and recognize when they are being used on you.",
            example: "A seller says 'Only 3 left in stock and 8 people viewed this today.' This uses scarcity and social proof — two powerful influence principles — to motivate action.",
            task: "Identify one influence principle used in an advertisement you saw this week. Write how you could ethically use the same principle in your own business or communication."
          },
          {
            id: 3,
            title: "Presenting to Decision Makers",
            explanation: "Presenting to executives, investors, or officials requires a different approach — be brief, lead with the conclusion, support with data, and anticipate tough questions. Their time is limited.",
            example: "An entrepreneur had 10 minutes with an investor. She led with 'We solve X problem, we have Y traction, we need Z to reach this milestone.' She got a second meeting.",
            task: "Prepare a 3-minute pitch for your business or project designed for a busy decision maker. Practice it until you can deliver it confidently without notes."
          },
          {
            id: 4,
            title: "Difficult Conversations",
            explanation: "Difficult conversations — firing someone, confronting a partner, delivering bad news — require preparation, empathy, and directness. Avoiding them always makes things worse.",
            example: "A manager who needs to address poor performance prepares by: writing down facts, choosing a private setting, starting with positive intent, and ending with a clear agreed next step.",
            task: "Identify one difficult conversation you have been avoiding. Plan it: what will you say, how will you open, what outcome do you want, and when will you have it?"
          },
          {
            id: 5,
            title: "Cross-Cultural Business Communication",
            explanation: "Global business requires sensitivity to communication styles across cultures — formality levels, directness, hierarchy respect, and decision-making styles vary significantly around the world.",
            example: "A Liberian entrepreneur pitching to Asian investors learned that they prefer indirect communication and building personal rapport before business talk — adjusting her approach led to success.",
            task: "Research the business communication style of one country you would like to work with. Write 3 specific adjustments you would make when communicating with them."
          },
          {
            id: 6,
            title: "Media & Interview Skills",
            explanation: "Appearing on radio, TV, podcasts, or in newspaper interviews requires staying on message, bridging back to your key points, and speaking in clear quotable soundbites.",
            example: "A business owner interviewed on radio kept returning to her 3 key messages regardless of what she was asked. Listeners remembered her business clearly.",
            task: "Identify 3 key messages about your business or expertise. Practice answering 5 different questions while always bridging back to one of those 3 messages."
          },
          {
            id: 7,
            title: "Building a Communication Strategy",
            explanation: "A communication strategy defines who you are speaking to, what you want them to think or do, what channels you use, and how you measure success. It applies to businesses, campaigns, and personal brands.",
            example: "A nonprofit defined their audience as young mothers, their message as child nutrition, their channel as WhatsApp groups, and measured success by clinic attendance — and saw a 40% increase.",
            task: "Write a one-page communication strategy for your business or personal brand. Include: audience, key message, channels, and one measurable goal."
          },
          {
            id: 8,
            title: "Teaching & Training Others",
            explanation: "The ability to teach what you know multiplies your impact and income. Great trainers break down complex topics, use examples and activities, check for understanding, and adjust their style to the learner.",
            example: "A skilled tailor who could not teach had limited impact. After learning training skills, she taught 10 apprentices who each built their own businesses — her legacy multiplied.",
            task: "Pick one skill you are good at. Design a 30-minute training session on it: outline the content, one activity, and how you will check if people understood."
          }
        ]
      }
    }
  }, {
    id: "digital-income",
    title: "Digital Income & Opportunity Skills",
    icon: "fas fa-coins",
    color: "orange",
    description: "Discover how to earn income online using your skills.",
    levels: {
      beginner: {
        label: "Beginner",
        lessons: [
          {
            id: 1,
            title: "What is Digital Income?",
            explanation: "Digital income is money earned using the internet and digital tools. You can earn from anywhere in the world using just a phone or computer. It includes freelancing, selling online, content creation, and more.",
            example: "A young man in Monrovia earns $300 per month writing articles for websites in the US — using only his phone and a good internet connection.",
            task: "List 5 ways you think people make money online. Research each one for 5 minutes and write whether it is realistic for someone in your situation."
          },
          {
            id: 2,
            title: "Identifying Your Sellable Skills",
            explanation: "Everyone has skills someone else will pay for. Writing, design, teaching, translating, data entry, customer service, social media management — these are all in demand online globally.",
            example: "A woman who managed her church's Facebook page realized that was a marketable skill. She now manages social media for 3 small businesses at $50 each per month.",
            task: "Write down every skill you have — include things you consider basic or obvious. Circle the ones someone might pay for. Pick your top 2 to focus on."
          },
          {
            id: 3,
            title: "Introduction to Freelancing",
            explanation: "Freelancing means offering your skills as a service to clients who pay per project or per hour. You work independently, choose your clients, and set your own rates.",
            example: "A graphic designer does not work for one company. She takes projects from multiple clients — a logo here, a flyer there — and earns more than a fixed salary would pay.",
            task: "Choose one skill you could freelance. Write a simple service description: what you offer, who it is for, and what you would charge."
          },
          {
            id: 4,
            title: "Freelance Platforms Overview",
            explanation: "Platforms like Fiverr, Upwork, and Toptal connect freelancers with clients worldwide. Each has different fee structures, competition levels, and best-fit skill types.",
            example: "A beginner writer started on Fiverr at $5 per article to build reviews. Within 3 months she had 20 five-star reviews and raised her price to $30 per article.",
            task: "Create a free account on Fiverr or Upwork. Browse 10 gigs in your skill area. Note the pricing, descriptions, and what top sellers do differently."
          },
          {
            id: 5,
            title: "Selling Products Online",
            explanation: "You can sell physical or digital products online through social media, WhatsApp, or marketplaces. Digital products like templates, guides, and photos can be sold unlimited times with no extra cost.",
            example: "A teacher created a study guide PDF and sold it for $3 each via WhatsApp. She sold 200 copies — $600 from one document she made once.",
            task: "Think of one physical or digital product you could sell online. Write a product description and decide on a price and selling platform."
          },
          {
            id: 6,
            title: "Using WhatsApp to Earn Income",
            explanation: "WhatsApp is a powerful income tool in Africa. You can sell products, offer services, build a customer list, run group communities, and promote affiliate products — all for free.",
            example: "A makeup artist posts her work on WhatsApp Status every morning. She gets 3 to 5 booking inquiries per week without spending a single dollar on advertising.",
            task: "Create a WhatsApp business strategy: what will you post, how often, and what action do you want viewers to take? Implement it for one week."
          },
          {
            id: 7,
            title: "Receiving International Payments",
            explanation: "To earn from global clients you need a way to receive foreign payments. Options include PayPal, Wise, Payoneer, and cryptocurrency. Each has different availability and fees depending on your country.",
            example: "A Liberian freelancer uses Payoneer to receive payments from US clients in dollars, then withdraws to her local mobile money account.",
            task: "Research which international payment methods work in your country. Set up one account — Payoneer is recommended for West Africa — and verify it."
          },
          {
            id: 8,
            title: "Building an Online Reputation",
            explanation: "Online reputation is built through reviews, testimonials, consistent work quality, and your digital presence. It is the foundation of long-term digital income — clients pay more for trusted providers.",
            example: "A freelancer with 50 five-star reviews earns 3 times more than a new freelancer with the same skill level — reputation is the difference.",
            task: "Ask 3 people you have helped — personally or professionally — to write you a short testimonial. Save these for your profile or portfolio."
          },
          {
            id: 9,
            title: "Managing Time as a Digital Earner",
            explanation: "Working for yourself online requires strong self-discipline. Without a boss or office hours, it is easy to procrastinate or overwork. Setting a schedule and tracking output keeps you productive and protected.",
            example: "A freelance writer works from 7am to 12pm every day — no exceptions. She earns more in 5 hours of focused work than she did in 8 hours of distracted office work.",
            task: "Design your ideal digital work day. Write out your hours, tasks, breaks, and income target. Follow it for 5 days and review what worked."
          }
        ]
      },
      intermediate: {
        label: "Intermediate",
        lessons: [
          {
            id: 1,
            title: "Building a Freelance Portfolio",
            explanation: "A portfolio shows potential clients proof of your work. Even if you are new, you can create sample projects to demonstrate your skills. Quality matters more than quantity.",
            example: "A new web designer built 3 free websites for local nonprofits. She used these as portfolio pieces and landed her first paying client within 2 weeks.",
            task: "Create or update your portfolio. Include at least 3 samples of your work with a brief description of each. Host it on Google Sites, Canva, or a free portfolio site."
          },
          {
            id: 2,
            title: "Writing Winning Proposals",
            explanation: "On freelance platforms, your proposal is your first impression. A winning proposal addresses the client's specific need, shows you understand their problem, and explains clearly how you will solve it.",
            example: "Instead of 'I am a great writer with 5 years experience', a winning proposal says 'I noticed your blog has not been updated in 3 months. I can write 4 SEO articles per week that will bring consistent traffic.'",
            task: "Write a sample proposal for a job posting you find on Fiverr or Upwork. Make it specific, client-focused, and under 150 words."
          },
          {
            id: 3,
            title: "Pricing Your Services Confidently",
            explanation: "Many beginners undercharge out of fear. Your price signals your value. Research market rates, factor in your time and expenses, and charge what reflects the quality you deliver.",
            example: "A translator charged $5 per page for a year. After researching rates she learned the market rate was $15. She raised prices and kept all her clients — none left.",
            task: "Research the market rate for your top skill on Fiverr and Upwork. Calculate what you need to earn per hour to meet your monthly income goal. Set a new price."
          },
          {
            id: 4,
            title: "Affiliate Marketing Basics",
            explanation: "Affiliate marketing means promoting other people's products and earning a commission for every sale made through your link. It requires no product creation — just an audience and the right products.",
            example: "A blogger writes about phone accessories and includes affiliate links to products on Jumia. Every time a reader buys through her link she earns 5 to 10% commission.",
            task: "Sign up for one affiliate program relevant to your audience — Jumia, Amazon, or a digital product platform. Share your first affiliate link with a genuine recommendation."
          },
          {
            id: 5,
            title: "Content Creation as Income",
            explanation: "Creating content — videos, blogs, podcasts, or social media posts — can generate income through ads, sponsorships, affiliate links, and selling your own products. It takes time to build but scales without limits.",
            example: "A man started a YouTube channel teaching basic English in local dialect. After 8 months and 5,000 subscribers, a language app paid him $200 to mention their product in one video.",
            task: "Choose one content format you are comfortable with. Create and publish your first piece of content this week — a video, blog post, or detailed social media post."
          },
          {
            id: 6,
            title: "Social Media Management as a Service",
            explanation: "Businesses need someone to run their Facebook, Instagram, and WhatsApp pages. Social media managers create content, respond to comments, grow followers, and report results — all remotely.",
            example: "A university student manages social media for 4 local businesses at $40 each per month. She earns $160 working 2 hours per day from her phone.",
            task: "Create a social media management package: list what services you offer, how many posts per week, which platforms, and your monthly price."
          },
          {
            id: 7,
            title: "Teaching Skills Online",
            explanation: "If you know something others want to learn, you can teach it online through video courses, live sessions, WhatsApp groups, or tutoring. Knowledge is a product you can sell repeatedly.",
            example: "A woman who learned Canva design taught a free 3-day WhatsApp workshop. At the end she offered a paid advanced course for $10. 15 people enrolled — $150 from one skill.",
            task: "Identify one skill you could teach. Design a simple 3-lesson mini course outline with a title, lesson topics, and a price you would charge."
          },
          {
            id: 8,
            title: "Client Communication & Retention",
            explanation: "Keeping a client is easier and more profitable than finding a new one. Respond fast, deliver on time, exceed expectations, and check in after delivery — these habits turn one-time clients into long-term ones.",
            example: "A designer always delivers one day early and sends a follow-up message a week later asking if any adjustments are needed. Her client retention rate is over 80%.",
            task: "Write a client communication checklist: what will you do from first contact to project delivery to follow-up to ensure every client has an excellent experience?"
          }
        ]
      },
      advanced: {
        label: "Advanced",
        lessons: [
          {
            id: 1,
            title: "Building a Digital Income System",
            explanation: "A system means your income does not depend entirely on your daily effort. It combines active income (freelancing, services) with passive income (digital products, affiliate links, courses) so money flows even when you rest.",
            example: "A copywriter earns $800 per month from client work and another $300 from a writing course she recorded once and sells automatically. Her system works while she sleeps.",
            task: "Map out your current and potential income streams. Identify one active and one passive income source you can build this month."
          },
          {
            id: 2,
            title: "Creating & Selling Digital Products",
            explanation: "Digital products — eBooks, templates, courses, presets, printables — cost nothing to duplicate and can be sold globally forever. Creating one strong digital product can generate income for years.",
            example: "A HR professional created a CV template pack and sells it for $8 on Gumroad. She makes 10 to 20 sales per month with zero ongoing effort.",
            task: "Create one simple digital product this week — a checklist, template, or short guide in your area of expertise. List it for sale on Gumroad or Selar."
          },
          {
            id: 3,
            title: "Growing a Personal Brand Online",
            explanation: "A personal brand makes you the go-to person in your field. It is built through consistent content, a clear niche, genuine engagement with your audience, and delivering value before asking for anything.",
            example: "A nutritionist posts one practical food tip daily on Facebook. After 6 months she has 8,000 followers, a waiting list of clients, and brands approaching her for partnerships.",
            task: "Define your personal brand: your niche, your target audience, your key message, and your content platform. Post your first branded piece of content today."
          },
          {
            id: 4,
            title: "Running a Digital Agency",
            explanation: "Once you master a digital skill, you can hire others and take on more clients than you can handle alone — becoming an agency. You manage, they deliver, and you earn the margin.",
            example: "A social media manager got more clients than she could handle. She hired 2 others at lower rates, managed quality control, and tripled her income without tripling her hours.",
            task: "Write a plan for a simple one-person agency in your skill area: what services, what team structure, what your role would be, and what you would charge clients versus pay contractors."
          },
          {
            id: 5,
            title: "Advanced Affiliate & Partnership Strategies",
            explanation: "Advanced affiliates build email lists, create content funnels, and negotiate higher commission rates. Partnerships with complementary businesses create mutual referral income streams.",
            example: "A tech blogger built an email list of 3,000 subscribers. One sponsored newsletter to that list earned him $400 — more than a month of individual affiliate clicks.",
            task: "Research one high-paying affiliate program in your niche with commissions above 20%. Create a content plan to promote it authentically to your audience."
          },
          {
            id: 6,
            title: "Scaling Digital Income Streams",
            explanation: "Scaling means growing income without proportionally growing effort. This requires systems, automation, outsourcing, and focusing only on high-value activities that only you can do.",
            example: "A course creator used to handle all customer emails manually. She created an FAQ document, hired a part-time assistant, and freed 10 hours per week to create new content.",
            task: "Identify the 3 tasks in your digital work that take most time but generate least income. Write a plan to delegate, automate, or eliminate each one."
          },
          {
            id: 7,
            title: "Tax & Finance for Digital Earners",
            explanation: "Digital earners must understand basic financial management — tracking income, managing expenses, setting aside tax, and reinvesting strategically. Ignoring finances kills businesses that are otherwise thriving.",
            example: "A freelancer earning $1,000 per month spent everything. When a slow month came she had nothing in reserve. A simple 20% savings rule would have protected her.",
            task: "Set up a simple financial system: one account or envelope for savings, one for expenses, one for reinvestment. Decide your percentage split and follow it this month."
          },
          {
            id: 8,
            title: "Long-Term Digital Career Planning",
            explanation: "Digital skills and income opportunities evolve fast. Long-term success requires continuous learning, adapting to new tools, building relationships, and always increasing the value you offer the market.",
            example: "A social media manager who stayed updated added short-form video skills in 2020. Her rates doubled because most competitors had not adapted yet.",
            task: "Write your 3-year digital career plan: where you are now, where you want to be, what skills you need to develop, and one action you will take this week to move forward."
          }
        ]
      }
    }
  }
];
// Make courses available globally
if (typeof module !== 'undefined') {
  module.exports = courses;
}