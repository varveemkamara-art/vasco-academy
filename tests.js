// ============================================
// VASCO AI LEARNING PLATFORM - tests.js
// Test Engine - 8 MCQ + 2 Essay, 80% Pass Mark
// AI is DISABLED during all tests
// ============================================

const testData = {
  "small-business": {
    beginner: {
      mcq: [
        {
          id: 1,
          question: "What is the main purpose of a business plan?",
          options: [
            "To impress friends and family",
            "To explain what your business is, who it serves, and how it will make money",
            "To apply for a passport",
            "To register with the government"
          ],
          answer: 1
        },
        {
          id: 2,
          question: "Which of the following is the best way to find a business idea?",
          options: [
            "Copy exactly what someone else is doing",
            "Pick the most expensive business you can think of",
            "Look for problems in your community that a business could solve",
            "Wait until you have a lot of money first"
          ],
          answer: 2
        },
        {
          id: 3,
          question: "What does 'startup cost' mean?",
          options: [
            "The salary you pay yourself",
            "Money needed before your business can open",
            "The cost of closing a business",
            "Monthly rent only"
          ],
          answer: 1
        },
        {
          id: 4,
          question: "If your product costs $10 to make and you want 20% profit, what should you charge?",
          options: ["$10", "$11", "$12", "$15"],
          answer: 2
        },
        {
          id: 5,
          question: "Why is it important to know your customer?",
          options: [
            "So you can avoid them",
            "So you can sell better and market smarter",
            "So you can charge them more than others",
            "It is not important"
          ],
          answer: 1
        },
        {
          id: 6,
          question: "What is the best first step to make your first sale?",
          options: [
            "Spend a lot on advertising",
            "Wait for customers to find you",
            "Tell people you know — family, friends, neighbors",
            "Open a big shop first"
          ],
          answer: 2
        },
        {
          id: 7,
          question: "Why should you keep business records?",
          options: [
            "Because the government forces you to",
            "To know how much money is coming in and going out",
            "To show off to competitors",
            "Records are not necessary for small businesses"
          ],
          answer: 1
        },
        {
          id: 8,
          question: "What does business growth require?",
          options: [
            "Spending all your profit immediately",
            "Borrowing money every month",
            "Reinvesting profit back into the business",
            "Reducing the quality of your product"
          ],
          answer: 2
        }
      ],
      essay: [
        {
          id: 9,
          question: "Describe a business idea you have and explain who your target customer would be. Include what problem your business solves and how you would make your first sale."
        },
        {
          id: 10,
          question: "You started a small business selling food and after one month your expenses are higher than your income. What steps would you take to fix this situation?"
        }
      ]
    },
    intermediate: {
      mcq: [
        {
          id: 1,
          question: "What is cash flow?",
          options: [
            "The amount of cash in your wallet",
            "Money moving in and out of your business",
            "Your monthly salary",
            "The price of your products"
          ],
          answer: 1
        },
        {
          id: 2,
          question: "Why should you separate business and personal money?",
          options: [
            "It is a legal requirement everywhere",
            "So you always know exactly how much the business has",
            "To confuse tax authorities",
            "It is not necessary"
          ],
          answer: 1
        },
        {
          id: 3,
          question: "What is the best way to deal with competition?",
          options: [
            "Lower your prices until they close down",
            "Copy everything they do",
            "Offer something different — better quality, faster service, or a personal touch",
            "Ignore them completely"
          ],
          answer: 2
        },
        {
          id: 4,
          question: "What does a good supplier relationship give you?",
          options: [
            "Free products forever",
            "Better prices, reliable delivery, and credit terms",
            "A government license",
            "Free advertising"
          ],
          answer: 1
        },
        {
          id: 5,
          question: "What should a business goal be?",
          options: [
            "Vague and flexible",
            "Specific and measurable",
            "As big as possible with no timeline",
            "Set once and never reviewed"
          ],
          answer: 1
        },
        {
          id: 6,
          question: "What is the main benefit of using Mobile Money for business?",
          options: [
            "It is free to use always",
            "It tracks payments and builds a payment history",
            "It replaces the need for a business plan",
            "It automatically markets your business"
          ],
          answer: 1
        },
        {
          id: 7,
          question: "How do you build customer loyalty?",
          options: [
            "By charging the lowest price always",
            "Through good service, reliability, and rewarding repeat buyers",
            "By advertising every day",
            "By opening more locations"
          ],
          answer: 1
        },
        {
          id: 8,
          question: "What is profit?",
          options: [
            "Total money received from sales",
            "Money left after subtracting all costs from revenue",
            "The price you charge customers",
            "Money borrowed from a bank"
          ],
          answer: 1
        }
      ],
      essay: [
        {
          id: 9,
          question: "Your business has been running for 3 months. Describe how you would analyze your performance — what numbers would you look at and what decisions would you make based on what you find?"
        },
        {
          id: 10,
          question: "A new competitor opens near your business selling similar products at lower prices. Write a detailed plan for how you would respond to protect and grow your customer base."
        }
      ]
    },
    advanced: {
      mcq: [
        {
          id: 1,
          question: "What is a business brand?",
          options: [
            "Just a logo and colors",
            "How people feel about your business including name, promise, and identity",
            "Your business registration number",
            "The price of your most popular product"
          ],
          answer: 1
        },
        {
          id: 2,
          question: "What does scaling a business mean?",
          options: [
            "Making the business smaller",
            "Growing without losing quality or control",
            "Closing one location to open another",
            "Reducing staff to save money"
          ],
          answer: 1
        },
        {
          id: 3,
          question: "What is the main advantage of registering your business?",
          options: [
            "You pay no taxes",
            "You get free government funding",
            "It opens doors to bank accounts, contracts, and customer trust",
            "Your competitors cannot copy you"
          ],
          answer: 2
        },
        {
          id: 4,
          question: "What is business networking?",
          options: [
            "Setting up your office internet connection",
            "Building genuine relationships with other business owners and partners",
            "Advertising on social media",
            "Hiring staff from your community"
          ],
          answer: 1
        },
        {
          id: 5,
          question: "When borrowing money for business, what is the most important rule?",
          options: [
            "Borrow as much as possible",
            "Only borrow from family",
            "Borrow only what you can repay with business revenue",
            "Never borrow money"
          ],
          answer: 2
        },
        {
          id: 6,
          question: "What makes a business sustainable long-term?",
          options: [
            "Having the lowest prices always",
            "Consistent customers, managed costs, and a plan for the future",
            "Opening as many branches as possible",
            "Avoiding all competition"
          ],
          answer: 1
        },
        {
          id: 7,
          question: "Why is a digital presence important for a small business?",
          options: [
            "It replaces the need for a physical location",
            "It gives visibility beyond your neighborhood and attracts more customers",
            "It is required by law",
            "It eliminates all marketing costs"
          ],
          answer: 1
        },
        {
          id: 8,
          question: "What is the first step when hiring staff?",
          options: [
            "Pay them as little as possible",
            "Hire friends and family only",
            "Write a clear job description defining role, tasks, and pay",
            "Wait until the business is failing"
          ],
          answer: 2
        }
      ],
      essay: [
        {
          id: 9,
          question: "Write a complete scaling plan for a small business of your choice. Include what the business does, current challenges, and exactly how you would grow it to serve 3 times more customers."
        },
        {
          id: 10,
          question: "You want to register your business and build a strong brand. Describe the steps you would take for both and explain how they would work together to grow your business."
        }
      ]
    }
  },

  "digital-skills": {
    beginner: {
      mcq: [
        {
          id: 1,
          question: "Why are digital skills important today?",
          options: [
            "Only for people who work in tech companies",
            "They are as important as reading and writing for jobs and business",
            "They are only needed in developed countries",
            "They replace the need for education"
          ],
          answer: 1
        },
        {
          id: 2,
          question: "What is the main risk of clicking unknown links online?",
          options: [
            "Your phone becomes faster",
            "You could lose data or have your accounts stolen",
            "Nothing serious happens",
            "Your battery drains faster"
          ],
          answer: 1
        },
        {
          id: 3,
          question: "What does cloud storage do?",
          options: [
            "Slows down your internet",
            "Saves your files online so they cannot be lost if your device breaks",
            "Automatically deletes old files",
            "Only works on computers not phones"
          ],
          answer: 1
        },
        {
          id: 4,
          question: "What makes a good email subject line?",
          options: [
            "Leave it blank to save time",
            "Write something vague like 'Hello'",
            "Write something clear and specific about the email content",
            "Use all capital letters"
          ],
          answer: 2
        },
        {
          id: 5,
          question: "Which Google search gives better results?",
          options: [
            "'business'",
            "'small business ideas Liberia 2024 low cost'",
            "'things to do'",
            "Any search gives the same results"
          ],
          answer: 1
        },
        {
          id: 6,
          question: "What is the purpose of a spreadsheet?",
          options: [
            "To send emails",
            "To organize numbers, track money, and create simple reports",
            "To design logos",
            "To make video calls"
          ],
          answer: 1
        },
        {
          id: 7,
          question: "What should you do before joining a video call for work?",
          options: [
            "Nothing special is needed",
            "Test your audio and video and find a quiet background",
            "Use your phone in a busy public place",
            "Join late to seem busy"
          ],
          answer: 1
        },
        {
          id: 8,
          question: "What is two-factor authentication?",
          options: [
            "Using two different passwords",
            "A second verification step that protects your account even if password is stolen",
            "Logging in from two devices",
            "Having two email accounts"
          ],
          answer: 1
        }
      ],
      essay: [
        {
          id: 9,
          question: "Describe how you would use digital tools to manage a small business. Include at least 3 specific tools and explain what each one would help you do."
        },
        {
          id: 10,
          question: "Someone sends you a WhatsApp message saying you won a prize and need to click a link and enter your bank details. What would you do and why? Explain how you would identify if this is a scam."
        }
      ]
    },
    intermediate: {
      mcq: [
        {
          id: 1,
          question: "What is Canva primarily used for?",
          options: [
            "Sending emails",
            "Creating professional visual designs without design experience",
            "Building mobile apps",
            "Managing spreadsheets"
          ],
          answer: 1
        },
        {
          id: 2,
          question: "What is the main advantage of WhatsApp Business over regular WhatsApp?",
          options: [
            "It is free while regular WhatsApp costs money",
            "It has professional features like catalogs, quick replies, and automated messages",
            "It works without internet",
            "It allows unlimited group members"
          ],
          answer: 1
        },
        {
          id: 3,
          question: "What does AI mean in the context of productivity tools?",
          options: [
            "Automatic Internet",
            "Artificial Intelligence — tools that help you write, research, and work faster",
            "Advanced Interface",
            "African Innovation"
          ],
          answer: 1
        },
        {
          id: 4,
          question: "Why is fact-checking important online?",
          options: [
            "Not everything online is true and spreading false information causes harm",
            "It is required by law",
            "To slow down your research",
            "Only journalists need to fact-check"
          ],
          answer: 0
        },
        {
          id: 5,
          question: "What is Google Forms used for?",
          options: [
            "Creating presentations",
            "Collecting information, running surveys, and gathering feedback for free",
            "Designing logos",
            "Making video calls"
          ],
          answer: 1
        },
        {
          id: 6,
          question: "What is the Pomodoro technique used for?",
          options: [
            "A cooking method",
            "Managing focused work sessions to improve productivity",
            "A design style",
            "A type of spreadsheet formula"
          ],
          answer: 1
        },
        {
          id: 7,
          question: "What makes a good professional online communication?",
          options: [
            "Using abbreviations and emojis always",
            "Replying after several days",
            "Clear language, proper grammar, and timely responses",
            "Writing very long messages for every topic"
          ],
          answer: 2
        },
        {
          id: 8,
          question: "What should a good presentation slide contain?",
          options: [
            "As much text as possible",
            "Only images with no text",
            "Clear simple points with visual support",
            "The entire speech written out"
          ],
          answer: 2
        }
      ],
      essay: [
        {
          id: 9,
          question: "You have been asked to manage the digital presence of a small local business. Describe your complete plan — which platforms you would use, what content you would create, and how you would measure success."
        },
        {
          id: 10,
          question: "Explain how AI tools can help someone running a small business. Give at least 3 specific examples of tasks AI could help with and describe any risks or limitations to be aware of."
        }
      ]
    },
    advanced: {
      mcq: [
        {
          id: 1,
          question: "What is a personal digital brand?",
          options: [
            "Your phone model and color",
            "Your consistent online presence that builds credibility and attracts opportunities",
            "The number of social media accounts you have",
            "Your email address"
          ],
          answer: 1
        },
        {
          id: 2,
          question: "What is the main purpose of project management tools like Trello?",
          options: [
            "To design graphics",
            "To manage tasks, track progress, set deadlines, and collaborate",
            "To send bulk emails",
            "To create websites"
          ],
          answer: 1
        },
        {
          id: 3,
          question: "What does data analysis help a business owner do?",
          options: [
            "Design a better logo",
            "Understand patterns in numbers to make better decisions",
            "Write better emails",
            "Build a website"
          ],
          answer: 1
        },
        {
          id: 4,
          question: "What is the key requirement for successful remote work?",
          options: [
            "Living in a big city",
            "Having the most expensive equipment",
            "Self-discipline, digital communication skills, and time management",
            "Working only during night hours"
          ],
          answer: 2
        },
        {
          id: 5,
          question: "What is automation in a digital work context?",
          options: [
            "Hiring more staff",
            "Using tools to do repetitive tasks automatically without manual effort",
            "Working faster manually",
            "Outsourcing all your work"
          ],
          answer: 1
        },
        {
          id: 6,
          question: "What is cybersecurity?",
          options: [
            "Designing computer games",
            "Protecting digital systems, accounts, and data from unauthorized access and attacks",
            "Building websites",
            "Managing social media"
          ],
          answer: 1
        },
        {
          id: 7,
          question: "Which free tool can you use to build a simple website with no coding?",
          options: [
            "Microsoft Excel",
            "Google Sites or Carrd.co",
            "Google Maps",
            "WhatsApp"
          ],
          answer: 1
        },
        {
          id: 8,
          question: "What does HTML stand for?",
          options: [
            "How To Make Links",
            "HyperText Markup Language — the basic language of web pages",
            "High Tech Mobile Language",
            "Home Tool Manage Layout"
          ],
          answer: 1
        }
      ],
      essay: [
        {
          id: 9,
          question: "Design a complete digital transformation plan for a small traditional market business. Include which digital tools you would introduce, in what order, and how you would train the owner to use them."
        },
        {
          id: 10,
          question: "Explain what a personal digital brand is and describe step by step how someone in your community could build one from scratch using only a smartphone and free tools."
        }
      ]
    }
  },

  "communication": {
    beginner: {
      mcq: [
        {
          id: 1,
          question: "What percentage of communication is non-verbal?",
          options: ["10%", "30%", "50%", "70%"],
          answer: 3
        },
        {
          id: 2,
          question: "What is active listening?",
          options: [
            "Listening while doing other tasks",
            "Fully concentrating on the speaker without planning your reply while they talk",
            "Nodding without paying attention",
            "Listening only to the first and last sentences"
          ],
          answer: 1
        },
        {
          id: 3,
          question: "What is the best cure for fear of public speaking?",
          options: [
            "Avoiding speaking situations completely",
            "Preparation, practice, and starting small",
            "Speaking very fast so it ends quickly",
            "Memorizing every word"
          ],
          answer: 1
        },
        {
          id: 4,
          question: "What type of question invites more conversation?",
          options: [
            "Closed questions that get yes or no",
            "Open questions starting with who, what, why, how",
            "Leading questions",
            "Multiple choice questions"
          ],
          answer: 1
        },
        {
          id: 5,
          question: "What is effective feedback?",
          options: [
            "Telling someone everything they did wrong",
            "Being specific, honest, and kind about performance",
            "Avoiding saying anything negative",
            "Praising everything regardless of quality"
          ],
          answer: 1
        },
        {
          id: 6,
          question: "What does clarity in speech mean?",
          options: [
            "Speaking very loudly",
            "Using technical jargon to sound smart",
            "Speaking simply so your listener always understands",
            "Speaking as fast as possible"
          ],
          answer: 2
        },
        {
          id: 7,
          question: "Why is written communication important professionally?",
          options: [
            "It is not as important as speaking",
            "Poor writing creates confusion and damages your professional reputation",
            "Only managers need to write well",
            "Spelling errors do not matter in business"
          ],
          answer: 1
        },
        {
          id: 8,
          question: "What causes most misunderstandings in cross-cultural communication?",
          options: [
            "Language barriers only",
            "Differences in eye contact, directness, formality, and tone",
            "Different clothing styles",
            "Time zone differences"
          ],
          answer: 1
        }
      ],
      essay: [
        {
          id: 9,
          question: "Describe a situation where poor communication caused a problem — in your life, community, or a story you know. Explain what went wrong and how better communication could have prevented it."
        },
        {
          id: 10,
          question: "You need to give feedback to a friend or colleague who did something that disappointed you. Write exactly what you would say, using the principles of effective and respectful feedback."
        }
      ]
    },
    intermediate: {
      mcq: [
        {
          id: 1,
          question: "What is persuasion based on?",
          options: [
            "Manipulation and pressure",
            "Trust, logic, and emotion — understanding what the other person wants",
            "Repeating yourself until they agree",
            "Offering money"
          ],
          answer: 1
        },
        {
          id: 2,
          question: "What should a good negotiator always know before negotiating?",
          options: [
            "The other person's weaknesses",
            "Their minimum acceptable outcome and ideal result",
            "How to walk away angrily",
            "The highest possible price to charge"
          ],
          answer: 1
        },
        {
          id: 3,
          question: "What is emotional intelligence in communication?",
          options: [
            "Being emotional during conversations",
            "Understanding and managing your emotions while being sensitive to others",
            "Hiding your feelings always",
            "Only communicating when you feel happy"
          ],
          answer: 1
        },
        {
          id: 4,
          question: "What makes a story effective in communication?",
          options: [
            "Being as long as possible",
            "Using complicated vocabulary",
            "Having a character, a problem, and a resolution that connects emotionally",
            "Including lots of statistics"
          ],
          answer: 2
        },
        {
          id: 5,
          question: "What is assertive communication?",
          options: [
            "Being aggressive to get what you want",
            "Staying silent to avoid conflict",
            "Expressing your needs and boundaries clearly and respectfully",
            "Always agreeing with others"
          ],
          answer: 2
        },
        {
          id: 6,
          question: "What do the best networkers do first?",
          options: [
            "Ask for favors immediately",
            "Give value before they ask for anything",
            "Collect as many business cards as possible",
            "Only connect with famous people"
          ],
          answer: 1
        },
        {
          id: 7,
          question: "What is the first step in resolving conflict?",
          options: [
            "Declaring who is right",
            "Understanding both sides of the issue",
            "Involving as many people as possible",
            "Avoiding the other person"
          ],
          answer: 1
        },
        {
          id: 8,
          question: "What are the fundamentals of public speaking?",
          options: [
            "Memorize every word and speak fast",
            "Know your topic, know your audience, structure clearly, practice, and engage",
            "Read directly from notes without looking up",
            "Speak as long as possible to show knowledge"
          ],
          answer: 1
        }
      ],
      essay: [
        {
          id: 9,
          question: "You need to persuade a community leader to support your business idea or community project. Write the conversation you would have — what you would say, how you would handle objections, and how you would close the conversation."
        },
        {
          id: 10,
          question: "Describe a conflict resolution process. Use a real or imaginary conflict between two people and walk through exactly how you would help them reach a fair resolution."
        }
      ]
    },
    advanced: {
      mcq: [
        {
          id: 1,
          question: "What is the key difference between a leader's communication and a manager's?",
          options: [
            "Leaders speak more loudly",
            "Leaders communicate vision, build trust, and inspire action",
            "Managers communicate more often",
            "There is no difference"
          ],
          answer: 1
        },
        {
          id: 2,
          question: "What is the principle of scarcity in influence?",
          options: [
            "Offering too much of a product",
            "Making something seem more valuable because it is limited or rare",
            "Reducing prices to attract buyers",
            "Giving products away for free"
          ],
          answer: 1
        },
        {
          id: 3,
          question: "When presenting to decision makers, what should you lead with?",
          options: [
            "A long introduction about yourself",
            "The conclusion and key outcome first",
            "Background history of the topic",
            "Technical details and data"
          ],
          answer: 1
        },
        {
          id: 4,
          question: "What is a soundbite in media communication?",
          options: [
            "A sound effect used in videos",
            "A short clear quotable statement that captures your key message",
            "Background music in a presentation",
            "A loud opening statement"
          ],
          answer: 1
        },
        {
          id: 5,
          question: "What is the worst approach to a difficult conversation?",
          options: [
            "Preparing what you want to say",
            "Choosing a private setting",
            "Avoiding it and hoping the problem goes away",
            "Starting with positive intent"
          ],
          answer: 2
        },
        {
          id: 6,
          question: "What does a communication strategy define?",
          options: [
            "Only the words you will use",
            "Who you speak to, what you want them to do, channels used, and how to measure success",
            "Your speaking speed and volume",
            "The length of every message"
          ],
          answer: 1
        },
        {
          id: 7,
          question: "What makes a great trainer or teacher?",
          options: [
            "Talking for as long as possible",
            "Breaking down complex topics, using examples, checking understanding, and adjusting style",
            "Only teaching from textbooks",
            "Giving tests without explanation"
          ],
          answer: 1
        },
        {
          id: 8,
          question: "What does bridging mean in a media interview?",
          options: [
            "Connecting two microphones",
            "Returning to your key message after any question asked",
            "Pausing between sentences",
            "Agreeing with the interviewer always"
          ],
          answer: 1
        }
      ],
      essay: [
        {
          id: 9,
          question: "You have been asked to give a 5-minute speech at a community event about a problem you care about. Write the full speech using storytelling, clear structure, and a call to action."
        },
        {
          id: 10,
          question: "Design a communication strategy for a small nonprofit organization trying to raise awareness about education in their community. Include audience, key message, channels, content plan, and how you would measure impact."
        }
      ]
    }
  },

  "digital-income": {
    beginner: {
      mcq: [
        {
          id: 1,
          question: "What is digital income?",
          options: [
            "Money earned only by programmers",
            "Money earned using the internet and digital tools from anywhere",
            "Income from selling physical goods in a market",
            "Salary paid via mobile money"
          ],
          answer: 1
        },
        {
          id: 2,
          question: "What is freelancing?",
          options: [
            "Working for one company permanently",
            "Offering your skills as a service to clients who pay per project",
            "Selling physical products online",
            "Working for free to gain experience"
          ],
          answer: 1
        },
        {
          id: 3,
          question: "Which platform is best known for beginner freelancers starting out?",
          options: ["LinkedIn", "Fiverr", "Twitter", "Google Drive"],
          answer: 1
        },
        {
          id: 4,
          question: "What is a digital product?",
          options: [
            "A product sold in a digital shop only",
            "Something like an eBook or template that costs nothing to duplicate and can be sold unlimited times",
            "Any product advertised online",
            "A product that requires electricity to use"
          ],
          answer: 1
        },
        {
          id: 5,
          question: "Why is building an online reputation important?",
          options: [
            "It is not important for freelancers",
            "Clients pay more for trusted providers and reputation is the main differentiator",
            "It replaces the need for skills",
            "Only big companies need a reputation"
          ],
          answer: 1
        },
        {
          id: 6,
          question: "Which payment platform is most recommended for West African freelancers?",
          options: ["PayPal only", "Cash only", "Payoneer", "Bitcoin only"],
          answer: 2
        },
        {
          id: 7,
          question: "What is the best tool for free marketing of a service in West Africa?",
          options: [
            "Television advertising",
            "WhatsApp Status and word of mouth",
            "Billboard advertising",
            "Newspaper ads"
          ],
          answer: 1
        },
        {
          id: 8,
          question: "What does time management mean for a digital earner?",
          options: [
            "Working as many hours as possible",
            "Setting a schedule and tracking output to stay productive",
            "Only working when you feel motivated",
            "Letting clients decide your working hours"
          ],
          answer: 1
        }
      ],
      essay: [
        {
          id: 9,
          question: "Identify two skills you have that someone would pay for online. For each skill, describe who would hire you, what platform you would use, and what you would charge. Explain your reasoning."
        },
        {
          id: 10,
          question: "You want to start earning income online but you have no experience and no portfolio. Write a step-by-step plan for your first 30 days — what you would do each week to go from zero to your first paid client."
        }
      ]
    },
    intermediate: {
      mcq: [
        {
          id: 1,
          question: "What makes a freelance proposal win?",
          options: [
            "Being the longest proposal submitted",
            "Addressing the client's specific need and explaining clearly how you will solve it",
            "Listing all your qualifications",
            "Offering the lowest price"
          ],
          answer: 1
        },
        {
          id: 2,
          question: "What is affiliate marketing?",
          options: [
            "Creating your own products to sell",
            "Promoting other people's products and earning commission for every sale through your link",
            "Paying others to market for you",
            "Advertising on social media"
          ],
          answer: 1
        },
        {
          id: 3,
          question: "Why do many beginners undercharge for their services?",
          options: [
            "They have too many clients",
            "Out of fear and lack of knowledge of market rates",
            "Because clients demand low prices",
            "Low prices always attract more clients"
          ],
          answer: 1
        },
        {
          id: 4,
          question: "What is the best way to retain a long-term client?",
          options: [
            "Always offer discounts",
            "Deliver on time, exceed expectations, and follow up after delivery",
            "Send daily messages",
            "Complete work as fast as possible regardless of quality"
          ],
          answer: 1
        },
        {
          id: 5,
          question: "What does social media management as a service involve?",
          options: [
            "Using social media personally",
            "Creating content, growing followers, responding to comments, and reporting results for businesses",
            "Only posting photos online",
            "Managing personal social accounts for free"
          ],
          answer: 1
        },
        {
          id: 6,
          question: "What is a freelance portfolio?",
          options: [
            "A list of your qualifications",
            "Proof of your work that shows potential clients what you can do",
            "Your pricing document",
            "Your bank account details"
          ],
          answer: 1
        },
        {
          id: 7,
          question: "How can you start teaching skills online?",
          options: [
            "You need a university degree to teach online",
            "Through video courses, live sessions, WhatsApp groups, or tutoring",
            "Only through expensive platforms",
            "You must wait until you are an expert"
          ],
          answer: 1
        },
        {
          id: 8,
          question: "What is the main advantage of content creation as income?",
          options: [
            "It pays immediately from day one",
            "It requires no skills",
            "It scales without limits once an audience is built",
            "It requires expensive equipment"
          ],
          answer: 2
        }
      ],
      essay: [
        {
          id: 9,
          question: "You decide to offer social media management as a freelance service. Write your complete service package — what you offer, which platforms, how many posts per week, your price, and how you would find and pitch your first 3 clients."
        },
        {
          id: 10,
          question: "Explain the difference between active and passive digital income. Give two examples of each and describe a realistic plan to build both streams within 6 months."
        }
      ]
    },
    advanced: {
      mcq: [
        {
          id: 1,
          question: "What is a digital income system?",
          options: [
            "Only earning from one source",
            "A combination of active and passive income streams so money flows even when you rest",
            "Working 24 hours a day online",
            "Having multiple social media accounts"
          ],
          answer: 1
        },
        {
          id: 2,
          question: "What is the main advantage of selling digital products?",
          options: [
            "They require daily maintenance",
            "They cost nothing to duplicate and can be sold unlimited times globally",
            "They are easier to create than physical products",
            "They only sell in developed countries"
          ],
          answer: 1
        },
        {
          id: 3,
          question: "What does running a digital agency mean?",
          options: [
            "Working alone on all client projects",
            "Hiring others to deliver work while you manage and earn the margin",
            "Only working with government clients",
            "Operating a physical office"
          ],
          answer: 1
        },
        {
          id: 4,
          question: "What is scaling in digital income?",
          options: [
            "Working more hours to earn more",
            "Growing income without proportionally growing personal effort through systems and automation",
            "Reducing your prices to get more clients",
            "Closing old income streams to open new ones"
          ],
          answer: 1
        },
        {
          id: 5,
          question: "What is a personal brand in digital income?",
          options: [
            "Your logo and business colors",
            "Being the go-to person in your field built through consistent content and genuine value",
            "The number of followers you have",
            "Your profile picture"
          ],
          answer: 1
        },
        {
          id: 6,
          question: "What is the most important financial habit for a digital earner?",
          options: [
            "Spending all income immediately to reinvest",
            "Tracking income, saving a percentage, and setting aside money for slow periods",
            "Only accepting cash payments",
            "Never investing in tools or education"
          ],
          answer: 1
        },
        {
          id: 7,
          question: "What does long-term success in digital income require?",
          options: [
            "Finding one skill and never changing",
            "Continuous learning, adapting to new tools, and always increasing your value",
            "Working only on platforms that existed 5 years ago",
            "Avoiding all competition"
          ],
          answer: 1
        },
        {
          id: 8,
          question: "Where can you list a simple digital product for sale?",
          options: [
            "Only on Amazon",
            "Gumroad or Selar",
            "Only on your own website",
            "Digital products cannot be sold in Africa"
          ],
          answer: 1
        }
      ],
      essay: [
        {
          id: 9,
          question: "Design a complete digital income system for yourself. Include two active income streams and one passive income stream. Explain how each works, how much you could realistically earn from each, and your 3-month action plan."
        },
        {
          id: 10,
          question: "You want to build a personal brand and eventually run a digital agency in your skill area. Write a detailed 1-year plan covering: your niche, content strategy, first clients, team building, and income targets for months 3, 6, and 12."
        }
      ]
    }
  }
};

// ============================================
// TEST ENGINE
// ============================================

let currentTest = null;
let mcqAnswers = {};
let essayAnswers = {};

// ── START TEST ──
function startTest(courseId, level) {
  if (!isLevelComplete(courseId, level)) {
    alert("You must complete all lessons before taking the test.");
    return;
  }

  if (!testData[courseId] || !testData[courseId][level]) {
    alert("Test not available for this course and level yet.");
    return;
  }

  currentTest = { courseId, level };
  mcqAnswers = {};
  essayAnswers = {};

  const test = testData[courseId][level];
  const course = courses.find(c => c.id === courseId);

  document.getElementById("main-content").innerHTML = `
    <div class="test-view">

      <div class="test-header">
        <div class="test-header-info">
          <button class="btn-back" onclick="openCourse('${courseId}')">
            <i class="fas fa-arrow-left"></i> Back to Lessons
          </button>
          <h2><i class="fas fa-pen-nib"></i> ${course.title} — ${level.charAt(0).toUpperCase() + level.slice(1)} Test</h2>
          <p class="test-rules-note">
            <i class="fas fa-info-circle"></i>
            10 questions &nbsp;|&nbsp; 80% pass mark &nbsp;|&nbsp;
            <span class="ai-disabled-note"><i class="fas fa-robot"></i> AI Tutor disabled during test</span>
          </p>
        </div>
      </div>

      <div class="test-body">

        <div class="test-section-title">
          <i class="fas fa-list"></i> Part A — Multiple Choice (8 Questions)
        </div>

        ${test.mcq.map((q, i) => `
          <div class="question-card" id="q-${q.id}">
            <div class="question-num">Question ${i + 1}</div>
            <p class="question-text">${q.question}</p>
            <div class="options-list">
              ${q.options.map((opt, oi) => `
                <label class="option-label" id="opt-${q.id}-${oi}">
                  <input type="radio" name="mcq-${q.id}" value="${oi}"
                    onchange="selectMCQ(${q.id}, ${oi})" />
                  <span class="option-text">${opt}</span>
                </label>
              `).join("")}
            </div>
          </div>
        `).join("")}

        <div class="test-section-title">
          <i class="fas fa-pen"></i> Part B — Essay Questions (2 Questions)
        </div>

        ${test.essay.map((q, i) => `
          <div class="question-card">
            <div class="question-num">Question ${i + 9}</div>
            <p class="question-text">${q.question}</p>
            <textarea
              class="essay-input"
              placeholder="Write your answer here (minimum 100 words)..."
              onchange="saveEssay(${q.id}, this.value)"
              oninput="updateWordCount(${q.id}, this.value)"
            ></textarea>
            <div class="word-count" id="wc-${q.id}">0 words</div>
          </div>
        `).join("")}

        <div class="test-submit-wrap">
          <p class="submit-note">
            <i class="fas fa-exclamation-triangle"></i>
            Make sure you have answered all questions before submitting.
          </p>
          <button class="btn-primary" onclick="submitTest()">
            <i class="fas fa-paper-plane"></i> Submit Test
          </button>
        </div>

      </div>
    </div>
  `;
}

// ── MCQ SELECTION ──
function selectMCQ(questionId, optionIndex) {
  mcqAnswers[questionId] = optionIndex;
  const test = testData[currentTest.courseId][currentTest.level];
  const q = test.mcq.find(q => q.id === questionId);
  q.options.forEach((_, oi) => {
    const el = document.getElementById(`opt-${questionId}-${oi}`);
    if (el) el.classList.remove("selected", "correct", "wrong");
  });
  const selected = document.getElementById(`opt-${questionId}-${optionIndex}`);
  if (selected) selected.classList.add("selected");
}

// ── ESSAY SAVING ──
function saveEssay(questionId, value) {
  essayAnswers[questionId] = value;
}

// ── WORD COUNT ──
function updateWordCount(questionId, value) {
  const words = value.trim().split(/\s+/).filter(w => w.length > 0).length;
  const el = document.getElementById(`wc-${questionId}`);
  if (el) {
    el.textContent = `${words} words`;
    el.style.color = words >= 100 ? "var(--secondary)" : "var(--text-light)";
  }
}

// ── SUBMIT TEST ──
function submitTest() {
  const test = testData[currentTest.courseId][currentTest.level];

  if (Object.keys(mcqAnswers).length < test.mcq.length) {
    alert("Please answer all multiple choice questions before submitting.");
    return;
  }

  for (let eq of test.essay) {
    const ans = essayAnswers[eq.id] || "";
    const words = ans.trim().split(/\s+/).filter(w => w.length > 0).length;
    if (words < 50) {
      alert(`Please write a more complete answer for essay question ${eq.id}. Minimum 50 words required.`);
      return;
    }
  }

  let mcqScore = 0;
  test.mcq.forEach(q => {
    if (mcqAnswers[q.id] === q.answer) mcqScore++;
  });

  const mcqPercent = Math.round((mcqScore / test.mcq.length) * 100);
  const passed = mcqPercent >= 80;
  const finalScore = mcqPercent;

  saveTestResult(currentTest.courseId, currentTest.level, finalScore, passed);

  showTestResult(finalScore, passed, mcqScore, test.mcq.length);
}

// ── NEXT LEVEL HELPER ──
function getNextLevel(level) {
  if (level === 'beginner')     return 'intermediate';
  if (level === 'intermediate') return 'advanced';
  return null;
}

// ── SHOW RESULT ──
function showTestResult(score, passed, correct, total) {
  const course    = courses.find(c => c.id === currentTest.courseId);
  const level     = currentTest.level;
  const nextLevel = getNextLevel(level);
  const nextLabel = nextLevel
    ? nextLevel.charAt(0).toUpperCase() + nextLevel.slice(1)
    : null;

  document.getElementById("main-content").innerHTML = `
    <div class="result-view">
      <div class="result-card ${passed ? 'passed' : 'failed'}">

        <div class="result-icon">
          <i class="fas ${passed ? 'fa-trophy' : 'fa-redo'}"></i>
        </div>

        <h2>${passed ? 'Congratulations! You Passed!' : 'Not Quite There Yet'}</h2>
        <p class="result-course">${course.title} — ${level.charAt(0).toUpperCase() + level.slice(1)}</p>

        <div class="result-score">
          <span class="score-num">${score}%</span>
          <span class="score-label">Your Score</span>
        </div>

        <div class="result-breakdown">
          <div class="breakdown-item">
            <i class="fas fa-check-circle"></i>
            <span>${correct} of ${total} MCQ correct</span>
          </div>
          <div class="breakdown-item">
            <i class="fas fa-pen"></i>
            <span>2 essay answers submitted</span>
          </div>
        </div>

        ${passed ? `

          ${nextLevel ? `
            <div class="next-level-banner">
              <i class="fas fa-lock-open"></i>
              <div>
                <strong>${nextLabel} is now unlocked!</strong>
                <p>You can continue your learning journey.</p>
              </div>
              <button class="btn-green" onclick="switchToNextLevel('${currentTest.courseId}', '${nextLevel}')">
                <i class="fas fa-arrow-right"></i> Start ${nextLabel}
              </button>
            </div>
          ` : `
            <div class="next-level-banner">
              <i class="fas fa-star"></i>
              <div>
                <strong>You have completed all levels!</strong>
                <p>You are now ready to claim your full certificate.</p>
              </div>
            </div>
          `}

          <div class="cert-prompt">
            <h3><i class="fas fa-certificate"></i> Ready for Your Certificate?</h3>
            <p>Pay <strong>$5 USD</strong> via Mobile Money to receive your certificate.</p>
            <div class="payment-numbers">
              <span><i class="fas fa-mobile-alt"></i> 0777339716</span>
              <span><i class="fas fa-mobile-alt"></i> 0888359707</span>
            </div>
            <p class="payment-note">After payment, send your screenshot and test score via WhatsApp.</p>
            <a href="https://wa.me/231777339716?text=Hello%2C%20I%20passed%20the%20${encodeURIComponent(course.title)}%20${level}%20test%20with%20a%20score%20of%20${score}%25.%20I%20have%20made%20my%20%245%20payment%20and%20would%20like%20my%20certificate."
              target="_blank" class="btn-green whatsapp-btn">
              <i class="fab fa-whatsapp"></i> Send Payment Proof on WhatsApp
            </a>
          </div>

        ` : `
          <div class="retry-prompt">
            <p>You need <strong>80%</strong> to pass. You scored <strong>${score}%</strong>.</p>
            <p>Review your lessons and try again — you can do this!</p>
            <button class="btn-secondary" onclick="openCourse('${currentTest.courseId}')">
              <i class="fas fa-book-open"></i> Review Lessons
            </button>
            <button class="btn-primary" onclick="startTest('${currentTest.courseId}', '${level}')">
              <i class="fas fa-redo"></i> Retry Test
            </button>
          </div>
        `}

      </div>
    </div>
  `;
}

// ── SWITCH TO NEXT LEVEL AFTER PASSING TEST ──
function switchToNextLevel(courseId, nextLevel) {
  currentCourse = courses.find(c => c.id === courseId);
  currentLevel  = nextLevel;
  currentLessonIndex = 0;

  const lesson = currentCourse.levels[nextLevel].lessons[0];
  window.VASCO_COURSE = { id: currentCourse.id, title: currentCourse.title };
  window.VASCO_LESSON = {
    id          : lesson.id,
    title       : lesson.title,
    explanation : lesson.explanation,
    example     : lesson.example,
    task        : lesson.task,
  };

  renderCourseView();
}