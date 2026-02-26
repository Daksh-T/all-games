import { Book, Chapter, GameConfig } from "@/lib/types";

export const BOOKS: Book[] = [
  {
    id: "book-1l",
    code: "1L",
    title: "Student Book 1L",
    status: "ACTIVE",
    sortOrder: 1,
  },
  {
    id: "book-2l",
    code: "2L",
    title: "Student Book 2L",
    status: "ACTIVE",
    sortOrder: 2,
  },
  {
    id: "book-3r",
    code: "3R",
    title: "Student Book 3R",
    status: "ACTIVE",
    sortOrder: 3,
  },
  {
    id: "book-4l",
    code: "4L",
    title: "Student Book 4L",
    status: "ACTIVE",
    sortOrder: 4,
  },
  {
    id: "book-5l",
    code: "5L",
    title: "Student Book 5L",
    status: "ACTIVE",
    sortOrder: 5,
  },
];

export const CHAPTERS: Chapter[] = [
  {
    id: "1l-ch1",
    bookId: "book-1l",
    number: 1,
    title: "Nice to Meet You",
    theme: "Introductions, alphabet, and registration info",
    summary:
      "Students introduce themselves, practice alphabet and number basics, and share key registration details like address and phone number.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch2",
    bookId: "book-1l",
    number: 2,
    title: "That's This Month!",
    theme: "Dates, weekly schedule, and attendance communication",
    summary:
      "Learners identify dates with ordinals, discuss weekly schedules, and tell the teacher when they cannot attend class.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch3",
    bookId: "book-1l",
    number: 3,
    title: "It's Snowy and Cold",
    theme: "Weather talk and temperature comparisons",
    summary:
      "Students talk about weather, read simple forecasts, and compare temperatures in Celsius and Fahrenheit.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch4",
    bookId: "book-1l",
    number: 4,
    title: "It Hurts a Lot!",
    theme: "Body and basic health communication",
    summary:
      "Learners talk about body parts, describe pain, and respond to basic health check questions in class and daily life.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch5",
    bookId: "book-1l",
    number: 5,
    title: "It's New",
    theme: "Home descriptions with yes/no short answers",
    summary:
      "Students discuss where they live, describe homes and neighbors, and use singular/plural and yes/no short answers.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch6",
    bookId: "book-1l",
    number: 6,
    title: "I Like to Play Soccer",
    theme: "Hobbies and likes/dislikes",
    summary:
      "Learners talk about hobbies, free-time activities, and what they do not like to do.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch7",
    bookId: "book-1l",
    number: 7,
    title: "He Has a Big Family",
    theme: "Family members, school, and where people live",
    summary:
      "Students discuss family members, ask about children and ages, and talk about where family members live or go to school.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch8",
    bookId: "book-1l",
    number: 8,
    title: "Review and Progress Check",
    theme: "Comprehensive review of lessons 1-7",
    summary:
      "Learners consolidate chapters 1-7 with listening, speaking, and confidence-building progress checks.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch9",
    bookId: "book-1l",
    number: 9,
    title: "Field Trip",
    theme: "Real-world English in the community",
    summary:
      "Students prepare practical phrases for community interaction and use English during a guided field trip context.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch10",
    bookId: "book-1l",
    number: 10,
    title: "We Went Out",
    theme: "Simple past with go and stay",
    summary:
      "Learners talk about where they went and what they did last weekend using simple past question and answer patterns.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch11",
    bookId: "book-1l",
    number: 11,
    title: "I'm Retired",
    theme: "Jobs, workplaces, and opinions about work",
    summary:
      "Students discuss jobs, where people work, and whether they like their work or role.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch12",
    bookId: "book-1l",
    number: 12,
    title: "I Can Work Part Time",
    theme: "Skills and job applications with can/can't",
    summary:
      "Learners describe abilities, respond to job-related questions, and use can/can't in practical workplace scenarios.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch13",
    bookId: "book-1l",
    number: 13,
    title: "How Much Is It?",
    theme: "Transportation options and cost questions",
    summary:
      "Students ask about transportation, compare options, and talk about prices using how much/how many patterns.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch14",
    bookId: "book-1l",
    number: 14,
    title: "I'm Going to Hang Out with Friends",
    theme: "Future plans and schedules",
    summary:
      "Learners share future plans and weekend schedules using going to and short future-tense responses.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch15",
    bookId: "book-1l",
    number: 15,
    title: "We Have a Medium",
    theme: "Clothing sizes, shopping, and prices",
    summary:
      "Students role-play shopping for clothes, ask about sizes and costs, and describe style preferences.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "1l-ch16",
    bookId: "book-1l",
    number: 16,
    title: "Review and Progress Check",
    theme: "Comprehensive review of lessons 9-15",
    summary:
      "Learners reinforce transportation, jobs, clothing, family, and future-plan language through multi-skill review activities.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch1",
    bookId: "book-2l",
    number: 1,
    title: "I Like Rock Music",
    theme: "Likes, favorites, and everyday preference talk",
    summary:
      "Students share favorite music and movie types and ask others what they like in real conversations.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch2",
    bookId: "book-2l",
    number: 2,
    title: "We Had a BBQ",
    theme: "Simple past with to be for events and parties",
    summary:
      "Learners talk about past events, where people were, and how gatherings went using was and were.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch3",
    bookId: "book-2l",
    number: 3,
    title: "I Grew Up Here",
    theme: "Personal history and life-background questions",
    summary:
      "Students talk about where they were born, where they grew up, and key details about their life story.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch4",
    bookId: "book-2l",
    number: 4,
    title: "It's 11:00 P.M.",
    theme: "Daily schedule language and time prepositions",
    summary:
      "Learners describe routines using in, at, around, and on to explain when daily activities happen.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch5",
    bookId: "book-2l",
    number: 5,
    title: "What Are You Doing?",
    theme: "Present continuous and can/can't in context",
    summary:
      "Students discuss what they are doing now and make polite excuses when they cannot do something.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch6",
    bookId: "book-2l",
    number: 6,
    title: "It's Faster and Less Expensive!",
    theme: "Comparatives for transportation and daily choices",
    summary:
      "Learners compare options and explain which transportation or shopping choices are faster or cheaper.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch7",
    bookId: "book-2l",
    number: 7,
    title: "He Has the Shortest Commute",
    theme: "Superlatives and comparison language",
    summary:
      "Students compare people and choices using shortest, fastest, and least expensive in practical contexts.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch8",
    bookId: "book-2l",
    number: 8,
    title: "Review and Progress Check",
    theme: "Consolidation of chapters 1-7 language goals",
    summary:
      "Learners review likes, past events, personal history, schedules, present actions, and comparison language.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch9",
    bookId: "book-2l",
    number: 9,
    title: "Field Trip",
    theme: "Real-world communication outside class",
    summary:
      "Students practice practical interaction sequences for navigating destinations, schedules, and shared plans.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch10",
    bookId: "book-2l",
    number: 10,
    title: "What Do You Look Like?",
    theme: "Describing appearance and personality",
    summary:
      "Learners compare how people look and what they are like using clear descriptive vocabulary.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch11",
    bookId: "book-2l",
    number: 11,
    title: "What Are You Going to Do Tonight?",
    theme: "Future plans with going to and have to",
    summary:
      "Students describe future actions, chores, and vacation plans while asking others about upcoming plans.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch12",
    bookId: "book-2l",
    number: 12,
    title: "What Are You Doing Later?",
    theme: "Present continuous for now versus future",
    summary:
      "Learners distinguish between actions happening now and planned actions later using natural question patterns.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch13",
    bookId: "book-2l",
    number: 13,
    title: "What Did You Do on Vacation?",
    theme: "Simple past vacation storytelling",
    summary:
      "Students share what they did on vacation and ask classmates follow-up questions about past experiences.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch14",
    bookId: "book-2l",
    number: 14,
    title: "I'd Like Dessert",
    theme: "Food orders with offers and requests",
    summary:
      "Learners place menu orders, make polite requests, and discuss meal choices and preferences.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch15",
    bookId: "book-2l",
    number: 15,
    title: "I Need to Mail a Package",
    theme: "Needs, mail types, and frequency language",
    summary:
      "Students discuss sending mail, package details, and how often they use different communication methods.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "2l-ch16",
    bookId: "book-2l",
    number: 16,
    title: "Review and Progress Check",
    theme: "Comprehensive review of chapters 9-15",
    summary:
      "Learners reinforce trip planning, descriptions, future plans, vacation stories, food orders, and mailing tasks.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch1",
    bookId: "book-3r",
    number: 1,
    title: "Where Do You Play Soccer?",
    theme: "Reviewing present, past, and future with go and play",
    summary:
      "Students discuss important community activities and share what they do now, did before, and will do this year.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch2",
    bookId: "book-3r",
    number: 2,
    title: "Which One Is the Best Deal?",
    theme: "Reviewing comparatives and superlatives in shopping",
    summary:
      "Learners compare items, evaluate deals, and explain shopping preferences using clear comparison language.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch3",
    bookId: "book-3r",
    number: 3,
    title: "What Happened to My Wallet?",
    theme: "Reviewing regular and irregular past tense",
    summary:
      "Students ask and answer about lost or stolen items and describe what happened in practical daily scenarios.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch4",
    bookId: "book-3r",
    number: 4,
    title: "Why Were You Late?",
    theme: "Past continuous with while",
    summary:
      "Learners describe background actions and interruptions to explain life events and transportation delays.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch5",
    bookId: "book-3r",
    number: 5,
    title: "What Will You Do?",
    theme: "Present real conditional with if + will",
    summary:
      "Students discuss what they will do if home or utility problems happen and share practical response plans.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch6",
    bookId: "book-3r",
    number: 6,
    title: "It Was Interesting",
    theme: "Adjectives ending in -ed and -ing",
    summary:
      "Learners compare life events and explain how they felt using accurate -ed and -ing adjective forms.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch7",
    bookId: "book-3r",
    number: 7,
    title: "I'd Like to Change My Appointment",
    theme: "Would contractions and for/to in polite requests",
    summary:
      "Students make, change, and cancel appointments with polite request language in medical and service settings.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch8",
    bookId: "book-3r",
    number: 8,
    title: "Review and Progress Check",
    theme: "Consolidation of chapters 1-7",
    summary:
      "Learners reinforce tense review, comparisons, event descriptions, conditionals, emotions, and polite requests.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch9",
    bookId: "book-3r",
    number: 9,
    title: "Field Trip",
    theme: "Applied communication tasks in real settings",
    summary:
      "Students practice multi-step communication skills during practical field-trip style scenarios outside class.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch10",
    bookId: "book-3r",
    number: 10,
    title: "I'm Passionate about Helping People",
    theme: "Nouns and adjectives with prepositions and gerunds",
    summary:
      "Learners talk about skills, interests, jobs, and volunteer roles using passion and ability language.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch11",
    bookId: "book-3r",
    number: 11,
    title: "First, You Preheat the Oven",
    theme: "Sequencing phrases and instructions",
    summary:
      "Students give and follow step-by-step instructions for cooking and other practical life tasks.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch12",
    bookId: "book-3r",
    number: 12,
    title: "Whose Charger Is This?",
    theme: "Possessive pronouns with this, that, these, and those",
    summary:
      "Learners ask about ownership and identify who objects belong to in everyday classroom and home contexts.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch13",
    bookId: "book-3r",
    number: 13,
    title: "I Hope I'll Have a Better Job",
    theme: "Will for future predictions",
    summary:
      "Students discuss hopes and predict how their work and life may change in the future.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch14",
    bookId: "book-3r",
    number: 14,
    title: "Did You Find Anything?",
    theme: "Indefinite pronouns: anything, something, nothing",
    summary:
      "Learners ask about events, shopping, and gift choices using indefinite pronouns naturally.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch15",
    bookId: "book-3r",
    number: 15,
    title: "Thank You So Much!",
    theme: "Gerund nouns after prepositions",
    summary:
      "Students express appreciation for support and encouragement using polite thank-you and gerund structures.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "3r-ch16",
    bookId: "book-3r",
    number: 16,
    title: "Review and Progress Check",
    theme: "Comprehensive review of chapters 9-15",
    summary:
      "Learners reinforce passion language, sequencing, ownership, predictions, indefinite pronouns, and appreciation.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch1",
    bookId: "book-4l",
    number: 1,
    title: "What's Up?",
    theme: "Greetings across contexts and tense flexibility",
    summary:
      "Students practice greeting styles in different situations and respond naturally using past, present, and future references.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch2",
    bookId: "book-4l",
    number: 2,
    title: "I'd Like Both",
    theme: "Either, neither, and both for preferences",
    summary:
      "Learners express likes and dislikes with either, neither, and both while comparing choices clearly.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch3",
    bookId: "book-4l",
    number: 3,
    title: "Were You Speeding?",
    theme: "Past continuous and simple past with while/when",
    summary:
      "Students describe events in progress and interruptions using while and when in real-life law and safety contexts.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch4",
    bookId: "book-4l",
    number: 4,
    title: "Have You Ever Been to Las Vegas?",
    theme: "Present perfect for life experience",
    summary:
      "Learners ask and answer Have you ever questions about experiences, goals, and things they have not done yet.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch5",
    bookId: "book-4l",
    number: 5,
    title: "She's Had a Fever for 2 Days",
    theme: "Present perfect with for and since",
    summary:
      "Students describe ongoing health conditions and durations using for and since in practical care conversations.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch6",
    bookId: "book-4l",
    number: 6,
    title: "Have You Changed the Locks Yet?",
    theme: "Already and yet in home transition contexts",
    summary:
      "Learners discuss moving tasks, what is complete already, and what has not been done yet.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch7",
    bookId: "book-4l",
    number: 7,
    title: "Could You Pick Up My Mail?",
    theme: "Borrow/lend and polite requests with could",
    summary:
      "Students ask for help, borrow or lend items, and make respectful neighborhood requests.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch8",
    bookId: "book-4l",
    number: 8,
    title: "Review and Progress Check",
    theme: "Consolidation of chapters 1-7",
    summary:
      "Learners reinforce greetings, experience language, time duration, moving tasks, and polite request patterns.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch9",
    bookId: "book-4l",
    number: 9,
    title: "Field Trip",
    theme: "Applied communication outside class",
    summary:
      "Students sequence practical interactions for transportation, requests, and location-based communication tasks.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch10",
    bookId: "book-4l",
    number: 10,
    title: "What Would You Do?",
    theme: "Present unreal conditional and compound ideas",
    summary:
      "Learners discuss hypothetical situations and connect ideas with and, or, so, and but.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch11",
    bookId: "book-4l",
    number: 11,
    title: "What's Your Opinion?",
    theme: "Opinion language for social issues",
    summary:
      "Students share viewpoints, explain reasoning, and compare perspectives on community and policy topics.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch12",
    bookId: "book-4l",
    number: 12,
    title: "If I Could Have Any Job...",
    theme: "If I could and hypothetical goals",
    summary:
      "Learners discuss dream jobs and future possibilities using hypothetical conditional structures.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch13",
    bookId: "book-4l",
    number: 13,
    title: "I Disagree!",
    theme: "Agreeing and disagreeing respectfully",
    summary:
      "Students practice disagreement language and give reasons while maintaining polite conversational tone.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch14",
    bookId: "book-4l",
    number: 14,
    title: "And Then I Got Married",
    theme: "Get passive for life events",
    summary:
      "Learners describe milestones using get-passive forms such as got married and got promoted.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch15",
    bookId: "book-4l",
    number: 15,
    title: "Is It Rude To Show Up Late?",
    theme: "Politeness norms and need-based questions",
    summary:
      "Students compare cultural expectations and discuss polite versus rude behavior in daily social situations.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "4l-ch16",
    bookId: "book-4l",
    number: 16,
    title: "Review and Progress Check",
    theme: "Comprehensive review of chapters 9-15",
    summary:
      "Learners reinforce hypothetical language, opinions, disagreement, life milestones, and cultural etiquette communication.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch1",
    bookId: "book-5l",
    number: 1,
    title: "I'm Going on a Road Trip",
    theme: "Reviewing past, present, and future together",
    summary:
      "Students describe places and preferences using mixed tenses in practical travel and relocation conversations.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch2",
    bookId: "book-5l",
    number: 2,
    title: "Have You Prepared for Your Interview?",
    theme: "Present perfect versus simple past",
    summary:
      "Learners discuss interview readiness, qualifications, and accomplishments with precise tense choice.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch3",
    bookId: "book-5l",
    number: 3,
    title: "Retirement Seems So Far Away",
    theme: "If clauses with could, should, and would",
    summary:
      "Students discuss retirement planning, generational differences, and future financial decisions.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch4",
    bookId: "book-5l",
    number: 4,
    title: "The City Has Been Working Hard",
    theme: "Present perfect continuous in civic topics",
    summary:
      "Learners describe ongoing local initiatives and how long changes have been happening in their community.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch5",
    bookId: "book-5l",
    number: 5,
    title: "They Won't Get Help Unless They Know It's a Problem",
    theme: "Unless, even though, and because",
    summary:
      "Students explain causes, barriers, and contrasts in discussions about addiction and public support.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch6",
    bookId: "book-5l",
    number: 6,
    title: "I Wish I'd Tried It",
    theme: "Past unreal conditional and regret language",
    summary:
      "Learners talk about regrets, hopes, and dreams using wish and unreal past ideas.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch7",
    bookId: "book-5l",
    number: 7,
    title: "That's Just a Stereotype!",
    theme: "Must versus might for certainty",
    summary:
      "Students evaluate assumptions and express certainty or possibility when discussing stereotypes and prejudice.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch8",
    bookId: "book-5l",
    number: 8,
    title: "Review and Progress Check",
    theme: "Consolidation of chapters 1-7",
    summary:
      "Learners review tense control, interview language, conditionals, civic updates, and certainty markers.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch9",
    bookId: "book-5l",
    number: 9,
    title: "Field Trip",
    theme: "Applied language for social and civic contexts",
    summary:
      "Students practice structured speaking tasks that combine opinion, observation, and real-world interaction.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch10",
    bookId: "book-5l",
    number: 10,
    title: "I Agree With Free Speech",
    theme: "Agree/disagree with gerunds and nouns",
    summary:
      "Learners state opinions and agreement levels on controversial topics using accurate argument structures.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch11",
    bookId: "book-5l",
    number: 11,
    title: "Do You Think I Should Take My Shoes Off?",
    theme: "Direct and indirect questions",
    summary:
      "Students discuss culture and etiquette while moving between direct and softer indirect question forms.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch12",
    bookId: "book-5l",
    number: 12,
    title: "You Filed a Claim, Didn't You?",
    theme: "Tag questions in practical scenarios",
    summary:
      "Learners discuss insurance and confirmations using positive and negative tag questions naturally.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch13",
    bookId: "book-5l",
    number: 13,
    title: "Since Then, Many Things Have Changed",
    theme: "Time connectors once, before, until, since, and for",
    summary:
      "Students describe social change and milestones with accurate sequencing and duration language.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch14",
    bookId: "book-5l",
    number: 14,
    title: "Breaking a Mirror Is Bad Luck",
    theme: "Gerunds as subjects and infinitive patterns",
    summary:
      "Learners compare superstitions and beliefs using grammar for abstract ideas and evaluations.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch15",
    bookId: "book-5l",
    number: 15,
    title: "What an Inspiring Story!",
    theme: "Verb-adjective-noun word families",
    summary:
      "Students build expression range using word forms related to inspiration, motivation, and self-care.",
    publishStatus: "PUBLISHED",
  },
  {
    id: "5l-ch16",
    bookId: "book-5l",
    number: 16,
    title: "Review and Progress Check",
    theme: "Comprehensive review of chapters 9-15",
    summary:
      "Learners reinforce advanced opinion, question, connector, superstition, and word-family usage through review play.",
    publishStatus: "PUBLISHED",
  },
];

export const GAME_CONFIGS: GameConfig[] = [
  {
    id: "game-1l-ch1",
    chapterId: "1l-ch1",
    mechanicType: "TAP_CORRECT",
    roundTimeSec: 60,
    winRules: "Score at least 4 of 5 registration intro prompts.",
    isPublished: true,
    contentPayload: {
      title: "Class Intro Sprint",
      instructions: "Tap the best real-life response for each first-day class prompt.",
      successMessage: "Nice work. Your first-day English sounds natural.",
      failureMessage: "Try again and focus on intro questions and registration details.",
      rounds: [
        {
          prompt: "Teacher says: Hi! What's your name?",
          options: ["My name is Rosa.", "I am from Monday.", "See you yesterday."],
          answer: "My name is Rosa.",
        },
        {
          prompt: "Classmate asks: How do you spell your last name?",
          options: ["L-O-P-E-Z.", "My name from Peru.", "At 7:00 p.m."],
          answer: "L-O-P-E-Z.",
        },
        {
          prompt: "Pick the best registration answer:",
          options: ["My phone number is 970-555-6751.", "My phone is cold.", "My number is address."],
          answer: "My phone number is 970-555-6751.",
        },
        {
          prompt: "Pick the best address answer:",
          options: ["It's 812 Main Street.", "It's main my 812.", "Address is teacher."],
          answer: "It's 812 Main Street.",
        },
        {
          prompt: "Class ends. What do you say?",
          options: ["See you next class.", "See you last week.", "Goodbye from weather."],
          answer: "See you next class.",
        },
      ],
    },
  },
  {
    id: "game-1l-ch2",
    chapterId: "1l-ch2",
    mechanicType: "SWIPE_TRUE_FALSE",
    roundTimeSec: 70,
    winRules: "Get at least 4 date/schedule statements right.",
    isPublished: true,
    contentPayload: {
      title: "Calendar Swipe",
      instructions: "Swipe right for True and left for False.",
      successMessage: "Great. You can talk about dates and attendance.",
      failureMessage: "Try again and check ordinals, days, and class schedule language.",
      rounds: [
        { statement: "November 4th uses an ordinal number.", isTrue: true },
        { statement: "Thursday comes before Monday.", isTrue: false },
        { statement: "\"I can't come to class today\" is useful attendance language.", isTrue: true },
        { statement: "The 21st is written as twenty-oneth.", isTrue: false },
        { statement: "\"What day is your birthday?\" is a correct question.", isTrue: true },
      ],
    },
  },
  {
    id: "game-1l-ch3",
    chapterId: "1l-ch3",
    mechanicType: "CARD_FLIP_MATCH",
    roundTimeSec: 80,
    winRules: "Match all 6 weather and temperature pairs.",
    isPublished: true,
    contentPayload: {
      title: "Weather Match",
      instructions: "Match weather words with the best meaning or clue.",
      successMessage: "Nice. You can describe weather clearly.",
      failureMessage: "Retry and focus on weather and temperature vocabulary.",
      rounds: [
        {
          pairs: [
            ["snowy", "lots of snow is falling"],
            ["windy", "air is moving strongly"],
            ["rainy", "water is falling from clouds"],
            ["30°F", "cold winter temperature"],
            ["Celsius", "temperature scale used in many countries"],
            ["forecast", "prediction of upcoming weather"],
          ],
        },
      ],
    },
  },
  {
    id: "game-1l-ch4",
    chapterId: "1l-ch4",
    mechanicType: "SENTENCE_SORT",
    roundTimeSec: 90,
    winRules: "Rebuild 4 body and health sentences correctly.",
    isPublished: true,
    contentPayload: {
      title: "Body Talk Builder",
      instructions: "Tap words in order to build the best health sentence.",
      successMessage: "Great. You can explain basic health problems clearly.",
      failureMessage: "Try again and focus on question order and body words.",
      rounds: [
        {
          prompt: "Ask about pain",
          words: ["wrong", "What's"],
          answer: ["What's", "wrong"],
        },
        {
          prompt: "Describe a symptom",
          words: ["hurts", "My", "stomach"],
          answer: ["My", "stomach", "hurts"],
        },
        {
          prompt: "Respond to concern",
          words: ["you", "Are", "okay"],
          answer: ["Are", "you", "okay"],
        },
        {
          prompt: "Offer help",
          words: ["to", "Let's", "doctor", "the", "go"],
          answer: ["Let's", "go", "to", "the", "doctor"],
        },
      ],
    },
  },
  {
    id: "game-1l-ch5",
    chapterId: "1l-ch5",
    mechanicType: "SPEED_MULTIPLE_CHOICE",
    roundTimeSec: 60,
    winRules: "Beat the timer with 5 correct home and neighbor answers.",
    isPublished: true,
    contentPayload: {
      title: "Home Talk Blitz",
      instructions: "Answer fast before the timer runs out.",
      successMessage: "Nice speed. You can describe where you live.",
      failureMessage: "Try again and focus on yes/no short answers about home life.",
      rounds: [
        {
          prompt: "Do you live in a house?",
          options: ["Yes, I do.", "Yes, I am.", "Yes, weather."],
          answer: "Yes, I do.",
        },
        {
          prompt: "Is your apartment big?",
          options: ["No, it isn't.", "No, I don't.", "No, are not."],
          answer: "No, it isn't.",
        },
        {
          prompt: "Pick the best sentence:",
          options: ["My neighbors are noisy.", "My neighbors is noisy.", "My neighbors noisy are."],
          answer: "My neighbors are noisy.",
        },
        {
          prompt: "A big family usually needs a ___ home.",
          options: ["big", "yesterday", "rainy"],
          answer: "big",
        },
        {
          prompt: "Pets are allowed means:",
          options: ["Pets are okay here.", "Pets are homework.", "Pets are weather."],
          answer: "Pets are okay here.",
        },
      ],
    },
  },
  {
    id: "game-1l-ch6",
    chapterId: "1l-ch6",
    mechanicType: "LETTER_TILE_SPELL",
    roundTimeSec: 80,
    winRules: "Spell 5 hobby and free-time words correctly.",
    isPublished: true,
    contentPayload: {
      title: "Free-Time Speller",
      instructions: "Tap letter tiles to spell common hobby words.",
      successMessage: "Excellent. You can talk about hobbies with confidence.",
      failureMessage: "Try again and focus on free-time vocabulary.",
      rounds: [
        { prompt: "popular team sport", letters: ["S", "O", "C", "C", "E", "R"], answer: "SOCCER" },
        { prompt: "buying things at stores", letters: ["S", "H", "O", "P", "P", "I", "N", "G"], answer: "SHOPPING" },
        { prompt: "making food", letters: ["C", "O", "O", "K", "I", "N", "G"], answer: "COOKING" },
        { prompt: "people you spend time with", letters: ["F", "R", "I", "E", "N", "D", "S"], answer: "FRIENDS" },
        { prompt: "Saturday and Sunday", letters: ["W", "E", "E", "K", "E", "N", "D"], answer: "WEEKEND" },
      ],
    },
  },
  {
    id: "game-1l-ch7",
    chapterId: "1l-ch7",
    mechanicType: "CATEGORY_SORT",
    roundTimeSec: 90,
    winRules: "Sort each item into the correct family-life category.",
    isPublished: true,
    contentPayload: {
      title: "Family Tree Sort",
      instructions: "Tap an item and then tap its correct category.",
      successMessage: "Great work. You can talk about family and school details clearly.",
      failureMessage: "Try again and focus on family words and school/place language.",
      rounds: [
        {
          categories: ["Family Members", "School Places", "Question Words"],
          items: [
            { label: "daughter", category: "Family Members" },
            { label: "middle school", category: "School Places" },
            { label: "where", category: "Question Words" },
            { label: "son", category: "Family Members" },
            { label: "elementary school", category: "School Places" },
            { label: "how many", category: "Question Words" }
          ],
          explanation: "Use family nouns, school location phrases, and question starters correctly."
        },
        {
          categories: ["Family Members", "Ages", "School Verbs"],
          items: [
            { label: "grandson", category: "Family Members" },
            { label: "twelve", category: "Ages" },
            { label: "go to school", category: "School Verbs" },
            { label: "children", category: "Family Members" },
            { label: "eight", category: "Ages" },
            { label: "study", category: "School Verbs" }
          ],
          explanation: "Ages are numbers, family members are people, and school verbs are actions."
        },
        {
          categories: ["Family Members", "Homes", "School Questions"],
          items: [
            { label: "mother", category: "Family Members" },
            { label: "apartment", category: "Homes" },
            { label: "Where does he go to school?", category: "School Questions" },
            { label: "brother", category: "Family Members" },
            { label: "house", category: "Homes" },
            { label: "How old are they?", category: "School Questions" }
          ],
          explanation: "Match full questions with school-question category and home words with places."
        }
      ],
    },
  },
  {
    id: "game-1l-ch8",
    chapterId: "1l-ch8",
    mechanicType: "ODDBALL_OUT",
    roundTimeSec: 75,
    winRules: "Find the odd item in each review set.",
    isPublished: true,
    contentPayload: {
      title: "Progress Check Pop",
      instructions: "Tap the word that does not fit with the others.",
      successMessage: "Nice review. You are ready for progress check tasks.",
      failureMessage: "Try again and look for the one word that breaks the pattern.",
      rounds: [
        {
          set: ["address", "phone number", "snowy", "name"],
          answer: "snowy",
          explanation: "Address, phone number, and name are registration details."
        },
        {
          set: ["Saturday", "Sunday", "Tuesday", "stomach"],
          answer: "stomach",
          explanation: "The first three are days. 'stomach' is a body word."
        },
        {
          set: ["rainy", "windy", "cold", "daughter"],
          answer: "daughter",
          explanation: "The first three are weather words."
        },
        {
          set: ["apartment", "neighbors", "teacher", "house"],
          answer: "teacher",
          explanation: "Apartment, neighbors, and house are home/living context words."
        },
        {
          set: ["soccer", "cooking", "shopping", "November 4th"],
          answer: "November 4th",
          explanation: "The first three are hobbies."
        }
      ],
    },
  },
  {
    id: "game-1l-ch9",
    chapterId: "1l-ch9",
    mechanicType: "IMAGE_WORD_MATCH",
    roundTimeSec: 80,
    winRules: "Match community icons with useful field-trip phrases.",
    isPublished: true,
    contentPayload: {
      title: "Field Trip Finder",
      instructions: "Pick the phrase that best matches each field-trip icon.",
      successMessage: "Excellent. You can use real-world community English.",
      failureMessage: "Try again and choose the phrase that best fits each place.",
      rounds: [
        {
          emoji: "🗺️",
          options: ["Bring a map", "Cook dinner", "Go to bed"],
          answer: "Bring a map",
          explanation: "Map language helps with logistics before and during a field trip."
        },
        {
          emoji: "🚌",
          options: ["Take public transportation", "Buy shoes", "Watch TV"],
          answer: "Take public transportation",
          explanation: "Lesson 9 emphasizes how to reach the location together."
        },
        {
          emoji: "❓",
          options: ["Prepare questions in English", "Stay silent", "Skip class"],
          answer: "Prepare questions in English",
          explanation: "Students should prepare questions before interacting in the community."
        },
        {
          emoji: "📚",
          options: ["Bring your book and pen", "Bring a soccer ball", "Bring a pillow"],
          answer: "Bring your book and pen",
          explanation: "Students should document what they see and discuss."
        },
        {
          emoji: "👥",
          options: ["Talk to people in English", "Talk only at home", "Talk only by text"],
          answer: "Talk to people in English",
          explanation: "The field trip goal is community interaction in English."
        }
      ],
    },
  },
  {
    id: "game-1l-ch10",
    chapterId: "1l-ch10",
    mechanicType: "DRAG_WORD_BANK",
    roundTimeSec: 90,
    winRules: "Complete at least 3 past-weekend sentences.",
    isPublished: true,
    contentPayload: {
      title: "Weekend Story Builder",
      instructions: "Fill each blank with the best past-tense choice.",
      successMessage: "Great. Your past-weekend storytelling is strong.",
      failureMessage: "Try again and focus on did/go/stayed patterns.",
      rounds: [
        {
          sentence: "Where ____ you go last weekend? I ____ home with my family.",
          bank: ["did", "stayed", "do", "stay"],
          answer: ["did", "stayed"],
          explanation: "Use 'did' in questions and 'stayed' for completed past action."
        },
        {
          sentence: "I ____ to the movies on Saturday and ____ to the park on Sunday.",
          bank: ["went", "went", "go", "goes"],
          answer: ["went", "went"],
          explanation: "Use past form 'went' for completed weekend activities."
        },
        {
          sentence: "My weekend ____ fun. We ____ dinner with friends.",
          bank: ["was", "had", "is", "have"],
          answer: ["was", "had"],
          explanation: "Past description uses 'was' and completed event uses 'had'."
        },
        {
          sentence: "Last night we ____ at home, but this morning we ____ out for coffee.",
          bank: ["stayed", "went", "stay", "go"],
          answer: ["stayed", "went"],
          explanation: "Past-time markers need past verbs: stayed, went."
        }
      ],
    },
  },
  {
    id: "game-1l-ch11",
    chapterId: "1l-ch11",
    mechanicType: "DIALOG_GAP",
    roundTimeSec: 80,
    winRules: "Complete 5 job-and-workplace dialogues.",
    isPublished: true,
    contentPayload: {
      title: "Job Talk Gaps",
      instructions: "Choose the phrase that best completes each dialogue.",
      successMessage: "Strong job conversation skills.",
      failureMessage: "Try again and focus on job, workplace, and like/don't-like language.",
      rounds: [
        {
          dialogue: "A: What do you do? B: ____.",
          options: ["I'm a nurse", "I am weather", "I at bus stop"],
          answer: "I'm a nurse",
          explanation: "Use job title after 'I am' for work role."
        },
        {
          dialogue: "A: Where do you work? B: ____.",
          options: ["I work at Mercy Hospital", "I work Sunday", "I work blue"],
          answer: "I work at Mercy Hospital",
          explanation: "Workplace answers usually use 'I work at ...'."
        },
        {
          dialogue: "A: Do you like your work? B: ____.",
          options: ["Yes, I do", "Yes, I am", "Yes, likes"],
          answer: "Yes, I do",
          explanation: "With do/does questions, short answer uses do/does."
        },
        {
          dialogue: "A: What does your husband do? B: ____.",
          options: ["He is a cook", "He at cook", "He do cook"],
          answer: "He is a cook",
          explanation: "Use 'He is a ...' for a job title."
        },
        {
          dialogue: "A: Does he like it? B: ____.",
          options: ["No, he doesn't", "No, he don't", "No, he isn't job"],
          answer: "No, he doesn't",
          explanation: "Third-person short negative uses 'doesn't'."
        }
      ],
    },
  },
  {
    id: "game-1l-ch12",
    chapterId: "1l-ch12",
    mechanicType: "TAP_CORRECT",
    roundTimeSec: 75,
    winRules: "Answer at least 4 skill-and-application prompts correctly.",
    isPublished: true,
    contentPayload: {
      title: "Can-Do Application",
      instructions: "Tap the strongest response to each job-application question.",
      successMessage: "Nice. You can answer basic job-skill questions confidently.",
      failureMessage: "Try again and focus on can/can't and part-time/full-time wording.",
      rounds: [
        {
          prompt: "Can you lift 30 lbs?",
          options: ["Yes, I can.", "Yes, I do.", "Yes, I am."],
          answer: "Yes, I can.",
          explanation: "Can/can't questions use can/can't in short answers."
        },
        {
          prompt: "Can you work full time?",
          options: ["No, I can't. I can work part time.", "No, I don't.", "No, I not."],
          answer: "No, I can't. I can work part time.",
          explanation: "This answer gives both limitation and availability."
        },
        {
          prompt: "Can you use a computer?",
          options: ["No, but I can learn.", "No, I weather.", "No, use not."],
          answer: "No, but I can learn.",
          explanation: "Employers value willingness to learn."
        },
        {
          prompt: "Pick the best skill sentence:",
          options: ["I can speak English.", "I can to speak English.", "I speaking can."],
          answer: "I can speak English.",
          explanation: "After can, use base verb form."
        },
        {
          prompt: "Pick the best job-application opener:",
          options: ["Can you help me complete this job application?", "Help complete job can?", "I complete weather."],
          answer: "Can you help me complete this job application?",
          explanation: "This is polite and practical for real application support."
        }
      ],
    },
  },
  {
    id: "game-1l-ch13",
    chapterId: "1l-ch13",
    mechanicType: "SPEED_MULTIPLE_CHOICE",
    roundTimeSec: 75,
    winRules: "Get 5 transportation questions right before time runs out.",
    isPublished: true,
    contentPayload: {
      title: "Transit Cost Rush",
      instructions: "Answer quickly using transportation and cost language.",
      successMessage: "Great speed. You can discuss routes and costs clearly.",
      failureMessage: "Try again and focus on cost wording and transport options.",
      rounds: [
        {
          prompt: "How do you get to school?",
          options: ["I take the bus.", "I bus is.", "I get weather."],
          answer: "I take the bus.",
          explanation: "Transportation method should use 'take/get/walk/drive' form."
        },
        {
          prompt: "How ___ is it one way?",
          options: ["much", "many", "old"],
          answer: "much",
          explanation: "Use 'How much' for prices."
        },
        {
          prompt: "A monthly bus pass is often:",
          options: ["cheap", "snowy", "retired"],
          answer: "cheap",
          explanation: "The unit vocabulary contrasts cheap and expensive options."
        },
        {
          prompt: "Pick a free transportation option:",
          options: ["walk", "subway", "drive"],
          answer: "walk",
          explanation: "Walking can be free; buses/subways/driving usually cost money."
        },
        {
          prompt: "Where is the ___?",
          options: ["bus stop", "family tree", "grocery bag"],
          answer: "bus stop",
          explanation: "This phrase is used to locate transit pickup points."
        }
      ],
    },
  },
  {
    id: "game-1l-ch14",
    chapterId: "1l-ch14",
    mechanicType: "MEMORY_PATH",
    roundTimeSec: 80,
    winRules: "Repeat all three future-plan sequences in order.",
    isPublished: true,
    contentPayload: {
      title: "Future Plan Path",
      instructions: "Memorize each plan and tap actions back in correct order.",
      successMessage: "Excellent. You can sequence future plans with confidence.",
      failureMessage: "Try again and focus on the order of future activities.",
      rounds: [
        {
          sequence: ["Friday: do homework", "Saturday: do laundry", "Sunday: work on car"],
          explanation: "Future schedule language often depends on clear day-by-day order."
        },
        {
          sequence: ["hang out with friends", "eat at a restaurant", "study at night"],
          explanation: "Use going-to plans in a logical sequence."
        },
        {
          sequence: ["ask: What are you going to do?", "answer: I'm going to garden", "follow-up: Sounds good"],
          explanation: "Conversation flow matters as much as verb tense."
        }
      ],
    },
  },
  {
    id: "game-1l-ch15",
    chapterId: "1l-ch15",
    mechanicType: "SENTENCE_SORT",
    roundTimeSec: 85,
    winRules: "Build 4 shopping and clothing sentences correctly.",
    isPublished: true,
    contentPayload: {
      title: "Clothing Cart Builder",
      instructions: "Tap words in order to build natural shopping sentences.",
      successMessage: "Great. You can ask about sizes and prices clearly.",
      failureMessage: "Try again and focus on shopping question word order.",
      rounds: [
        {
          prompt: "Ask about dress size",
          words: ["size", "What", "do", "you", "wear"],
          answer: ["What", "size", "do", "you", "wear"],
          explanation: "Question order should be What + noun + do + subject + verb."
        },
        {
          prompt: "Ask about shoe size",
          words: ["size", "What", "shoes"],
          answer: ["What", "size", "shoes"],
          explanation: "Short shopping phrase still needs clear word order."
        },
        {
          prompt: "Ask for price",
          words: ["much", "How", "are", "the", "jeans"],
          answer: ["How", "much", "are", "the", "jeans"],
          explanation: "How much are ... is the target cost pattern."
        },
        {
          prompt: "Respond with preference",
          words: ["those", "I", "like", "shoes"],
          answer: ["I", "like", "those", "shoes"],
          explanation: "Put subject and verb first for natural response flow."
        }
      ],
    },
  },
  {
    id: "game-1l-ch16",
    chapterId: "1l-ch16",
    mechanicType: "CATEGORY_SORT",
    roundTimeSec: 95,
    winRules: "Sort review items into the right category in all rounds.",
    isPublished: true,
    contentPayload: {
      title: "Final Review Sort",
      instructions: "Sort mixed review terms by topic to finish Level 1 strong.",
      successMessage: "Hooray. Strong finish on your Level 1 review.",
      failureMessage: "Try again and group words by theme before answering.",
      rounds: [
        {
          categories: ["Jobs & Skills", "Transportation", "Clothing"],
          items: [
            { label: "nurse", category: "Jobs & Skills" },
            { label: "bus stop", category: "Transportation" },
            { label: "medium", category: "Clothing" },
            { label: "can use a computer", category: "Jobs & Skills" },
            { label: "one-way fare", category: "Transportation" },
            { label: "jeans", category: "Clothing" }
          ],
          explanation: "Group job words, transit words, and shopping words separately."
        },
        {
          categories: ["Family", "Future Plans", "Past Weekend"],
          items: [
            { label: "daughter", category: "Family" },
            { label: "going to garden", category: "Future Plans" },
            { label: "went to the movies", category: "Past Weekend" },
            { label: "grandson", category: "Family" },
            { label: "going to do laundry", category: "Future Plans" },
            { label: "stayed home", category: "Past Weekend" }
          ],
          explanation: "Notice tense and topic clues: family nouns, future plans, past events."
        },
        {
          categories: ["Weather & Health", "Home", "Free Time"],
          items: [
            { label: "windy", category: "Weather & Health" },
            { label: "apartment", category: "Home" },
            { label: "play soccer", category: "Free Time" },
            { label: "stomach hurts", category: "Weather & Health" },
            { label: "neighbors", category: "Home" },
            { label: "go shopping", category: "Free Time" }
          ],
          explanation: "Use context words from earlier lessons to sort quickly and accurately."
        }
      ],
    },
  },
  {
    id: "game-2l-ch1",
    chapterId: "2l-ch1",
    mechanicType: "DIALOG_GAP",
    roundTimeSec: 85,
    winRules: "Complete at least 3 of 4 preference dialogs correctly.",
    isPublished: true,
    contentPayload: {
      title: "Music & Movie Mixer",
      instructions: "Fill each conversation gap with the most natural response.",
      successMessage: "Nice. You can ask and answer about favorites naturally.",
      failureMessage: "Try again and focus on like, favorite, and do/does response patterns.",
      rounds: [
        {
          dialogue: "A: What kind of music do you like?\\nB: ____",
          options: ["I like rock music.", "I was at home yesterday.", "My teacher is Thursday."],
          answer: "I like rock music.",
          explanation: "For a preference question, respond with 'I like ...'."
        },
        {
          dialogue: "A: What's your favorite movie genre?\\nB: ____",
          options: ["My favorite is comedy.", "I am in the kitchen now.", "At 11:00 p.m."],
          answer: "My favorite is comedy.",
          explanation: "Favorite questions need a category answer such as comedy or action."
        },
        {
          dialogue: "A: Do you like action movies?\\nB: ____",
          options: ["Yes, I do.", "Yes, I was.", "Yes, I going."],
          answer: "Yes, I do.",
          explanation: "Use do/does short answers for like questions."
        },
        {
          dialogue: "A: I like sci-fi. How about you?\\nB: ____",
          options: ["I prefer drama movies.", "I was at a BBQ.", "I have shortest commute."],
          answer: "I prefer drama movies.",
          explanation: "A follow-up preference answer should compare your own taste."
        },
      ],
    },
  },
  {
    id: "game-2l-ch2",
    chapterId: "2l-ch2",
    mechanicType: "CARD_FLIP_MATCH",
    roundTimeSec: 95,
    winRules: "Match all event-question pairs with 5 mistakes or less.",
    isPublished: true,
    contentPayload: {
      title: "BBQ Match Jam",
      instructions: "Flip cards and match each past-event question with the best answer.",
      successMessage: "Great job. Your past-event conversation sounds clear.",
      failureMessage: "Try again and match was/were questions with the right responses.",
      rounds: [
        {
          pairs: [
            ["Where were you last night?", "I was at a BBQ."],
            ["How was the party?", "It was really fun."],
            ["Were your cousins there?", "Yes, they were."],
          ],
          maxMistakes: 5,
          explanation: "Use was/were to ask and answer about past events."
        },
        {
          pairs: [
            ["Was the food good?", "Yes, it was delicious."],
            ["Who was at your table?", "My neighbors were there."],
            ["Were you tired after the BBQ?", "No, I wasn't."],
          ],
          maxMistakes: 5,
          explanation: "Match yes/no and information questions to natural past answers."
        },
        {
          pairs: [
            ["What time was it over?", "It ended around 9:30."],
            ["Was it at your house?", "No, it was in the park."],
            ["Were the kids happy?", "Yes, they were excited."],
          ],
          maxMistakes: 5,
          explanation: "Time and location details often follow the first event question."
        },
      ],
    },
  },
  {
    id: "game-2l-ch3",
    chapterId: "2l-ch3",
    mechanicType: "DRAG_WORD_BANK",
    roundTimeSec: 90,
    winRules: "Fill at least 3 biography lines correctly.",
    isPublished: true,
    contentPayload: {
      title: "Life Story Builder",
      instructions: "Fill each sentence with words that fit personal history questions.",
      successMessage: "Nice. You can talk about where you grew up and your background.",
      failureMessage: "Try again and focus on born, grew up, and simple past forms.",
      rounds: [
        {
          sentence: "I ____ in Nepal, but I ____ up in Colorado.",
          bank: ["was born", "grew", "is born", "grow"],
          answer: ["was born", "grew"],
          explanation: "Use past forms to share birth place and childhood place."
        },
        {
          sentence: "My mother ____ in Texas, and my father ____ in Mexico.",
          bank: ["lived", "worked", "live", "work"],
          answer: ["lived", "worked"],
          explanation: "Two completed past actions need lived/worked."
        },
        {
          sentence: "We ____ to this city ten years ago and ____ near downtown.",
          bank: ["moved", "stayed", "move", "stay"],
          answer: ["moved", "stayed"],
          explanation: "Past-time marker 'ten years ago' calls for past verbs."
        },
        {
          sentence: "She ____ her childhood in a small town and ____ to school there.",
          bank: ["spent", "went", "spend", "go"],
          answer: ["spent", "went"],
          explanation: "Use spent and went for finished childhood history."
        },
      ],
    },
  },
  {
    id: "game-2l-ch4",
    chapterId: "2l-ch4",
    mechanicType: "SENTENCE_SORT",
    roundTimeSec: 85,
    winRules: "Build 4 schedule and time sentences correctly.",
    isPublished: true,
    contentPayload: {
      title: "11:00 PM Timeline",
      instructions: "Tap words in order to build natural schedule sentences.",
      successMessage: "Nice sentence flow. Your time expressions are strong.",
      failureMessage: "Try again and focus on word order with time phrases.",
      rounds: [
        {
          prompt: "Say when you start work",
          words: ["I", "start", "work", "at", "8:00", "a.m."],
          answer: ["I", "start", "work", "at", "8:00", "a.m."],
          explanation: "Use at for exact clock times."
        },
        {
          prompt: "Describe a weekday routine",
          words: ["On", "weekdays", "I", "cook", "dinner", "around", "7:00"],
          answer: ["On", "weekdays", "I", "cook", "dinner", "around", "7:00"],
          explanation: "Use on for days and around for approximate time."
        },
        {
          prompt: "Say what happens in the evening",
          words: ["In", "the", "evening", "I", "watch", "TV"],
          answer: ["In", "the", "evening", "I", "watch", "TV"],
          explanation: "Use in with larger time blocks like morning and evening."
        },
        {
          prompt: "Ask about a class schedule",
          words: ["What", "time", "is", "class", "on", "Tuesday"],
          answer: ["What", "time", "is", "class", "on", "Tuesday"],
          explanation: "Question order is What time + is + subject."
        },
      ],
    },
  },
  {
    id: "game-2l-ch5",
    chapterId: "2l-ch5",
    mechanicType: "IMAGE_WORD_MATCH",
    roundTimeSec: 75,
    winRules: "Match at least 4 present-action images correctly.",
    isPublished: true,
    contentPayload: {
      title: "Right Now Match",
      instructions: "Match each icon to the sentence that describes what is happening now.",
      successMessage: "Great. You can describe present actions clearly.",
      failureMessage: "Try again and focus on is/are + verb-ing patterns.",
      rounds: [
        {
          emoji: "\ud83d\udcf1",
          options: ["She is texting her friend.", "She texted yesterday.", "She can to text now."],
          answer: "She is texting her friend.",
          explanation: "Present continuous uses is + verb-ing."
        },
        {
          emoji: "\ud83c\udf73",
          options: ["He is cooking dinner.", "He cooks last night.", "He can cooking not."],
          answer: "He is cooking dinner.",
          explanation: "Use is cooking for an action happening now."
        },
        {
          emoji: "\ud83d\ude8c",
          options: ["They are waiting for the bus.", "They waited for bus tomorrow.", "They waiting can bus."],
          answer: "They are waiting for the bus.",
          explanation: "Plural subject takes are + waiting."
        },
        {
          emoji: "\ud83d\udcbc",
          options: ["I can't talk now. I'm working.", "I worked next hour.", "I can't to work now."],
          answer: "I can't talk now. I'm working.",
          explanation: "Combine polite excuse + present action for natural speech."
        },
      ],
    },
  },
  {
    id: "game-2l-ch6",
    chapterId: "2l-ch6",
    mechanicType: "CATEGORY_SORT",
    roundTimeSec: 90,
    winRules: "Sort all comparison phrases into the right bucket.",
    isPublished: true,
    contentPayload: {
      title: "Compare It Fast",
      instructions: "Sort each phrase by what kind of comparison it makes.",
      successMessage: "Awesome. You can compare options with confidence.",
      failureMessage: "Try again and focus on faster/cheaper/more patterns.",
      rounds: [
        {
          categories: ["Faster Option", "Cheaper Option", "More Expensive Option"],
          items: [
            { label: "The subway is faster than the bus.", category: "Faster Option" },
            { label: "Walking is cheaper than taking a taxi.", category: "Cheaper Option" },
            { label: "Ride-share is more expensive than the train.", category: "More Expensive Option" },
            { label: "My bike commute is faster in traffic.", category: "Faster Option" },
            { label: "Cooking at home is cheaper than takeout.", category: "Cheaper Option" },
            { label: "Express delivery is more expensive than regular mail.", category: "More Expensive Option" },
          ],
          explanation: "Look for clue words: faster, cheaper, or more expensive."
        },
        {
          categories: ["Count Noun Comparisons", "Noncount Noun Comparisons", "Neutral Comparison"],
          items: [
            { label: "fewer stops", category: "Count Noun Comparisons" },
            { label: "less traffic", category: "Noncount Noun Comparisons" },
            { label: "as fast as", category: "Neutral Comparison" },
            { label: "more buses", category: "Count Noun Comparisons" },
            { label: "less noise", category: "Noncount Noun Comparisons" },
            { label: "as expensive as", category: "Neutral Comparison" },
          ],
          explanation: "Use fewer/more with count nouns and less with noncount nouns."
        },
        {
          categories: ["Transportation", "Shopping", "Housing"],
          items: [
            { label: "The train is faster than driving downtown.", category: "Transportation" },
            { label: "This store is less expensive than the mall.", category: "Shopping" },
            { label: "My new apartment is more spacious than my old one.", category: "Housing" },
            { label: "The bus is slower than the subway.", category: "Transportation" },
            { label: "Online coupons are cheaper than in-store deals.", category: "Shopping" },
            { label: "Utilities are more expensive this year.", category: "Housing" },
          ],
          explanation: "Identify topic first, then check comparative meaning."
        },
      ],
    },
  },
  {
    id: "game-2l-ch7",
    chapterId: "2l-ch7",
    mechanicType: "TAP_CORRECT",
    roundTimeSec: 85,
    winRules: "Get at least 4 superlative choices correct.",
    isPublished: true,
    contentPayload: {
      title: "Commute Crown",
      instructions: "Tap the best sentence for each commute comparison prompt.",
      successMessage: "Great work. Your superlative language is strong.",
      failureMessage: "Try again and focus on shortest, fastest, and least.",
      rounds: [
        {
          prompt: "Choose the best superlative sentence.",
          options: ["Maya has the shortest commute.", "Maya has shorter commute than.", "Maya shortest commute has."],
          answer: "Maya has the shortest commute.",
          explanation: "Use the + superlative adjective before the noun."
        },
        {
          prompt: "Which sentence compares three options correctly?",
          options: ["The subway is the fastest option.", "The subway is faster option.", "The subway more fast option."],
          answer: "The subway is the fastest option.",
          explanation: "Use the superlative when comparing three or more choices."
        },
        {
          prompt: "Pick the correct cost superlative.",
          options: ["Walking is the least expensive way to go.", "Walking is less expensiveest way.", "Walking least expensive is way."],
          answer: "Walking is the least expensive way to go.",
          explanation: "For multi-syllable adjectives, use most/least + adjective."
        },
        {
          prompt: "Choose the best response:",
          options: ["He takes the most convenient route.", "He take the most convenienter route.", "He takes most convenience route."],
          answer: "He takes the most convenient route.",
          explanation: "Most convenient is the correct superlative pattern."
        },
        {
          prompt: "Pick the best family commute comparison.",
          options: ["My sister has the longest drive.", "My sister has longerest drive.", "My sister long drive most."],
          answer: "My sister has the longest drive.",
          explanation: "Long becomes longest in superlative form."
        },
      ],
    },
  },
  {
    id: "game-2l-ch8",
    chapterId: "2l-ch8",
    mechanicType: "ODDBALL_OUT",
    roundTimeSec: 80,
    winRules: "Find at least 4 odd items in this review set.",
    isPublished: true,
    contentPayload: {
      title: "Review Oddball",
      instructions: "Tap the item that does not belong with the others.",
      successMessage: "Nice review pass. You spotted the grammar and vocab shifts.",
      failureMessage: "Try again and look for the one word that changes topic or tense.",
      rounds: [
        {
          set: ["rock music", "comedy movie", "favorite genre", "yesterday"],
          answer: "yesterday",
          explanation: "The first three are preference words; yesterday is a time word."
        },
        {
          set: ["was", "were", "at the party", "are"],
          answer: "are",
          explanation: "Are is present tense, while the others fit past-event context."
        },
        {
          set: ["at 8:00", "around 6:30", "on Tuesday", "grew up"],
          answer: "grew up",
          explanation: "The first three are schedule expressions, not life-history verbs."
        },
        {
          set: ["is cooking", "are waiting", "can't talk now", "more expensive"],
          answer: "more expensive",
          explanation: "The first three fit present-action language; this one is comparative."
        },
        {
          set: ["the shortest", "the fastest", "the least expensive", "my favorite"],
          answer: "my favorite",
          explanation: "The first three are superlative forms."
        },
      ],
    },
  },
  {
    id: "game-2l-ch9",
    chapterId: "2l-ch9",
    mechanicType: "MEMORY_PATH",
    roundTimeSec: 80,
    winRules: "Replay each field-trip plan in the right order.",
    isPublished: true,
    contentPayload: {
      title: "Field Trip Flow",
      instructions: "Memorize the plan, then tap the steps in order.",
      successMessage: "Hooray. You can organize real-world trip language.",
      failureMessage: "Try again and keep the order of each sequence in mind.",
      rounds: [
        {
          sequence: ["meet at school", "check the map", "buy tickets", "board the train"],
          explanation: "This sequence models a practical transit-based class trip."
        },
        {
          sequence: ["ask for directions", "walk two blocks", "cross at the light", "arrive at the museum"],
          explanation: "Direction language is easier when steps are grouped in order."
        },
        {
          sequence: ["take photos", "write observations", "share with partner", "report to class"],
          explanation: "Field trip tasks usually move from observation to communication."
        },
      ],
    },
  },
  {
    id: "game-2l-ch10",
    chapterId: "2l-ch10",
    mechanicType: "IMAGE_WORD_MATCH",
    roundTimeSec: 75,
    winRules: "Match 4 description prompts correctly.",
    isPublished: true,
    contentPayload: {
      title: "Look Like Link-Up",
      instructions: "Match each visual clue with the best description sentence.",
      successMessage: "Great. You can describe how people look and what they are like.",
      failureMessage: "Try again and match appearance clues with clear description language.",
      rounds: [
        {
          emoji: "\ud83d\udc68\u200d\ud83e\uddb3",
          options: ["He has a beard.", "He has a backpack.", "He is wearing a dress."],
          answer: "He has a beard.",
          explanation: "Use has for physical features like beard or glasses."
        },
        {
          emoji: "\ud83d\udc69\u200d\ud83e\uddb1",
          options: ["She has curly hair.", "She has blue shoes.", "She is very tall and old."],
          answer: "She has curly hair.",
          explanation: "Curly hair is a direct appearance description."
        },
        {
          emoji: "\ud83d\ude0a",
          options: ["He looks friendly.", "He is on vacation.", "He has a long commute."],
          answer: "He looks friendly.",
          explanation: "Looks friendly describes personality impression."
        },
        {
          emoji: "\ud83d\udc53",
          options: ["She is wearing glasses.", "She is driving a bus.", "She is cooking dinner."],
          answer: "She is wearing glasses.",
          explanation: "Wearing glasses describes current appearance."
        },
      ],
    },
  },
  {
    id: "game-2l-ch11",
    chapterId: "2l-ch11",
    mechanicType: "SENTENCE_SORT",
    roundTimeSec: 90,
    winRules: "Build 4 future-plan sentences correctly.",
    isPublished: true,
    contentPayload: {
      title: "Tonight Planner",
      instructions: "Build each sentence using going to and have to patterns.",
      successMessage: "Nice. Your future-plan English sounds clear.",
      failureMessage: "Try again and check word order in future questions and answers.",
      rounds: [
        {
          prompt: "Say your evening plan",
          words: ["I", "am", "going", "to", "cook", "tonight"],
          answer: ["I", "am", "going", "to", "cook", "tonight"],
          explanation: "Future plan pattern: am/is/are going to + verb."
        },
        {
          prompt: "Ask about a classmate's plan",
          words: ["What", "are", "you", "going", "to", "do", "tonight"],
          answer: ["What", "are", "you", "going", "to", "do", "tonight"],
          explanation: "Question order starts with What are you going to ..."
        },
        {
          prompt: "Say an obligation",
          words: ["I", "have", "to", "finish", "my", "homework"],
          answer: ["I", "have", "to", "finish", "my", "homework"],
          explanation: "Use have to for chores or obligations."
        },
        {
          prompt: "Ask about preparation",
          words: ["Do", "you", "have", "to", "pack", "tonight"],
          answer: ["Do", "you", "have", "to", "pack", "tonight"],
          explanation: "Do you have to ... asks about required tasks."
        },
      ],
    },
  },
  {
    id: "game-2l-ch12",
    chapterId: "2l-ch12",
    mechanicType: "DIALOG_GAP",
    roundTimeSec: 85,
    winRules: "Complete at least 4 now-vs-later dialogs correctly.",
    isPublished: true,
    contentPayload: {
      title: "Now or Later?",
      instructions: "Choose the best line based on whether the action is now or in the future.",
      successMessage: "Great distinction. You can switch between now and later meaning.",
      failureMessage: "Try again and check clues for now versus planned-later actions.",
      rounds: [
        {
          dialogue: "A: Why can't you talk right now?\\nB: ____",
          options: ["I'm driving right now.", "I drove yesterday.", "I am going drive yesterday."],
          answer: "I'm driving right now.",
          explanation: "Right now calls for present continuous."
        },
        {
          dialogue: "A: What are you doing later tonight?\\nB: ____",
          options: ["I'm meeting my cousin at 7:00.", "I meet my cousin yesterday.", "I was meeting now."],
          answer: "I'm meeting my cousin at 7:00.",
          explanation: "Present continuous can express future plans with a time marker."
        },
        {
          dialogue: "A: Are you working now or later?\\nB: ____",
          options: ["I'm working now, and I'm studying later.", "I worked now and later.", "I am work now, study later."],
          answer: "I'm working now, and I'm studying later.",
          explanation: "Use matching present continuous forms to compare timelines."
        },
        {
          dialogue: "A: Is she cooking now?\\nB: ____",
          options: ["No, she's cooking later.", "No, she cooked now.", "No, she cooks tomorrow now."],
          answer: "No, she's cooking later.",
          explanation: "Later shifts the action to a planned future context."
        },
        {
          dialogue: "A: What are they doing this weekend?\\nB: ____",
          options: ["They're visiting their grandparents.", "They visited right now.", "They are visit weekend."],
          answer: "They're visiting their grandparents.",
          explanation: "This weekend is a planned future period, so present continuous works."
        },
      ],
    },
  },
  {
    id: "game-2l-ch13",
    chapterId: "2l-ch13",
    mechanicType: "DRAG_WORD_BANK",
    roundTimeSec: 90,
    winRules: "Fill at least 4 vacation story lines correctly.",
    isPublished: true,
    contentPayload: {
      title: "Vacation Replay",
      instructions: "Fill in past-tense words to complete each vacation story.",
      successMessage: "Awesome. Your vacation storytelling is clear and detailed.",
      failureMessage: "Try again and focus on simple past verbs and time details.",
      rounds: [
        {
          sentence: "Last summer we ____ to Seattle and ____ in a small hotel.",
          bank: ["went", "stayed", "go", "stay"],
          answer: ["went", "stayed"],
          explanation: "Use simple past for finished vacation actions."
        },
        {
          sentence: "I ____ many photos and ____ seafood every day.",
          bank: ["took", "ate", "take", "eat"],
          answer: ["took", "ate"],
          explanation: "Past forms took/ate match completed vacation events."
        },
        {
          sentence: "My kids ____ the beach and ____ sandcastles.",
          bank: ["enjoyed", "built", "enjoy", "build"],
          answer: ["enjoyed", "built"],
          explanation: "Two completed actions need two past-tense verbs."
        },
        {
          sentence: "We ____ home on Sunday and ____ very tired.",
          bank: ["returned", "were", "return", "are"],
          answer: ["returned", "were"],
          explanation: "Returned/were completes a natural end-of-trip sentence."
        },
        {
          sentence: "They ____ a museum and ____ gifts for friends.",
          bank: ["visited", "bought", "visit", "buy"],
          answer: ["visited", "bought"],
          explanation: "Visited and bought are common past vacation verbs."
        },
      ],
    },
  },
  {
    id: "game-2l-ch14",
    chapterId: "2l-ch14",
    mechanicType: "CARD_FLIP_MATCH",
    roundTimeSec: 95,
    winRules: "Match all menu request pairs before mistakes run out.",
    isPublished: true,
    contentPayload: {
      title: "Dessert Match Cafe",
      instructions: "Flip and match polite menu requests with natural server responses.",
      successMessage: "Nice ordering flow. Your restaurant English is polite and clear.",
      failureMessage: "Try again and match each request with the best service response.",
      rounds: [
        {
          pairs: [
            ["I'd like dessert, please.", "Sure. Here's the dessert menu."],
            ["Could I have coffee?", "Of course. One coffee coming up."],
            ["Can we get the check?", "Yes, I'll bring it right away."],
          ],
          maxMistakes: 5,
          explanation: "Match polite requests with polite service replies."
        },
        {
          pairs: [
            ["I'd like the chocolate cake.", "Great choice."],
            ["Could I get water, please?", "Still or sparkling?"],
            ["Can I have this without nuts?", "Yes, we can do that."],
          ],
          maxMistakes: 5,
          explanation: "Ordering language often includes preference and special requests."
        },
        {
          pairs: [
            ["Would you like anything else?", "No thanks, that's all."],
            ["Are you ready to order?", "Yes, I'd like soup first."],
            ["How is everything today?", "Everything tastes great, thank you."],
          ],
          maxMistakes: 5,
          explanation: "These exchanges help with smooth two-way restaurant interaction."
        },
      ],
    },
  },
  {
    id: "game-2l-ch15",
    chapterId: "2l-ch15",
    mechanicType: "CATEGORY_SORT",
    roundTimeSec: 90,
    winRules: "Sort all mailing terms into the right communication bucket.",
    isPublished: true,
    contentPayload: {
      title: "Mail Mission Sort",
      instructions: "Sort each item into the correct mail or message category.",
      successMessage: "Great sorting. You can talk about mailing tasks confidently.",
      failureMessage: "Try again and separate mail, package, and digital terms carefully.",
      rounds: [
        {
          categories: ["Post Office Tasks", "Package Details", "Digital Messages"],
          items: [
            { label: "buy stamps", category: "Post Office Tasks" },
            { label: "fill out mailing form", category: "Post Office Tasks" },
            { label: "tracking number", category: "Package Details" },
            { label: "delivery address", category: "Package Details" },
            { label: "send an email", category: "Digital Messages" },
            { label: "check inbox", category: "Digital Messages" },
          ],
          explanation: "Group actions by where and how communication happens."
        },
        {
          categories: ["Frequency Words", "Mailing Verbs", "People & Places"],
          items: [
            { label: "every week", category: "Frequency Words" },
            { label: "twice a month", category: "Frequency Words" },
            { label: "mail", category: "Mailing Verbs" },
            { label: "ship", category: "Mailing Verbs" },
            { label: "recipient", category: "People & Places" },
            { label: "post office", category: "People & Places" },
          ],
          explanation: "Frequency words tell how often; verbs tell the action."
        },
        {
          categories: ["Urgent", "Regular", "Not Mail"],
          items: [
            { label: "overnight package", category: "Urgent" },
            { label: "express envelope", category: "Urgent" },
            { label: "standard letter", category: "Regular" },
            { label: "postcard", category: "Regular" },
            { label: "movie ticket", category: "Not Mail" },
            { label: "bus route map", category: "Not Mail" },
          ],
          explanation: "Urgent and regular are shipping levels, not object types."
        },
      ],
    },
  },
  {
    id: "game-2l-ch16",
    chapterId: "2l-ch16",
    mechanicType: "CATEGORY_SORT",
    roundTimeSec: 95,
    winRules: "Complete all review sorts for chapters 9-15.",
    isPublished: true,
    contentPayload: {
      title: "Level 2 Final Sortdown",
      instructions: "Sort mixed language from chapters 9-15 into the correct review categories.",
      successMessage: "Hooray. You closed out Level 2 with a strong review.",
      failureMessage: "Try again and sort by grammar target and chapter context.",
      rounds: [
        {
          categories: ["Appearance", "Future Plans", "Vacation Past"],
          items: [
            { label: "has curly hair", category: "Appearance" },
            { label: "is wearing glasses", category: "Appearance" },
            { label: "going to visit my aunt", category: "Future Plans" },
            { label: "have to do laundry", category: "Future Plans" },
            { label: "went to the beach", category: "Vacation Past" },
            { label: "took many photos", category: "Vacation Past" },
          ],
          explanation: "Use tense clues to separate now/future/past language."
        },
        {
          categories: ["Restaurant English", "Mail English", "Field Trip English"],
          items: [
            { label: "I'd like the soup, please.", category: "Restaurant English" },
            { label: "Can we get the check?", category: "Restaurant English" },
            { label: "tracking number", category: "Mail English" },
            { label: "buy stamps", category: "Mail English" },
            { label: "ask for directions", category: "Field Trip English" },
            { label: "board the train", category: "Field Trip English" },
          ],
          explanation: "Topic vocabulary helps anchor each communication context."
        },
        {
          categories: ["Present Continuous", "Going To", "Would Like"],
          items: [
            { label: "I'm meeting friends later.", category: "Present Continuous" },
            { label: "She's cooking now.", category: "Present Continuous" },
            { label: "We're going to travel Friday.", category: "Going To" },
            { label: "I'm going to pack tonight.", category: "Going To" },
            { label: "I'd like dessert.", category: "Would Like" },
            { label: "Would you like coffee?", category: "Would Like" },
          ],
          explanation: "Separate action-now, future plan, and polite request patterns."
        },
      ],
    },
  },
  {
    id: "game-3r-ch1",
    chapterId: "3r-ch1",
    mechanicType: "CATEGORY_SORT",
    roundTimeSec: 90,
    winRules: "Sort all activity phrases into the correct time-focus category.",
    isPublished: true,
    contentPayload: {
      title: "Community Activity Mixer",
      instructions: "Sort each sentence by whether it describes now, before, or this year.",
      successMessage: "Great sorting. You can talk about community activities across time.",
      failureMessage: "Try again and watch tense clues in each sentence.",
      rounds: [
        {
          categories: ["Present", "Past", "Future"],
          items: [
            { label: "I play soccer at the park.", category: "Present" },
            { label: "I played volleyball last summer.", category: "Past" },
            { label: "I'm going to join the chess club.", category: "Future" },
            { label: "We go to the community center on Fridays.", category: "Present" },
            { label: "She went to dance class yesterday.", category: "Past" },
            { label: "They will play basketball this weekend.", category: "Future" }
          ],
          explanation: "Use verb and time markers to identify present, past, or future."
        },
        {
          categories: ["Outdoor Activity", "Indoor Activity", "Community Service"],
          items: [
            { label: "play soccer at the field", category: "Outdoor Activity" },
            { label: "do yoga in the gym", category: "Indoor Activity" },
            { label: "help at the food pantry", category: "Community Service" },
            { label: "walk in the neighborhood", category: "Outdoor Activity" },
            { label: "take an art class", category: "Indoor Activity" },
            { label: "clean the local park", category: "Community Service" }
          ],
          explanation: "Group by where or why the activity happens."
        },
      ],
    },
  },
  {
    id: "game-3r-ch2",
    chapterId: "3r-ch2",
    mechanicType: "TAP_CORRECT",
    roundTimeSec: 85,
    winRules: "Pick at least 4 best-deal comparison answers correctly.",
    isPublished: true,
    contentPayload: {
      title: "Best Deal Tap-Off",
      instructions: "Tap the strongest comparative or superlative sentence.",
      successMessage: "Nice deal analysis. Your comparison language is clear.",
      failureMessage: "Try again and focus on comparative and superlative forms.",
      rounds: [
        {
          prompt: "Choose the best comparison:",
          options: ["This one is cheaper than that one.", "This one cheaper that one.", "This one is cheap than that one."],
          answer: "This one is cheaper than that one.",
          explanation: "Use adjective + -er + than for two-item comparison."
        },
        {
          prompt: "Pick the strongest superlative sentence:",
          options: ["This is the best deal in the store.", "This is best deal in store.", "This deal is betterest."],
          answer: "This is the best deal in the store.",
          explanation: "Use the + best for top choice among many."
        },
        {
          prompt: "Choose the correct preposition with price:",
          options: ["It's $2 cheaper than the other brand.", "It's $2 cheaper from the other brand.", "It's $2 cheaper of the other brand."],
          answer: "It's $2 cheaper than the other brand.",
          explanation: "Comparatives use than, not from/of."
        },
        {
          prompt: "Pick the natural shopping statement:",
          options: ["These apples are the freshest.", "These apples are freshest one.", "These apples more fresh."],
          answer: "These apples are the freshest.",
          explanation: "Use the + superlative adjective for best overall option."
        },
        {
          prompt: "Choose the clearer value sentence:",
          options: ["Buying in bulk is less expensive.", "Buying in bulk is more cheap.", "Buying in bulk cheaperest."],
          answer: "Buying in bulk is less expensive.",
          explanation: "Less expensive is correct with multi-syllable adjectives."
        },
      ],
    },
  },
  {
    id: "game-3r-ch3",
    chapterId: "3r-ch3",
    mechanicType: "CARD_FLIP_MATCH",
    roundTimeSec: 95,
    winRules: "Match all lost-item question and response pairs with 5 mistakes or less.",
    isPublished: true,
    contentPayload: {
      title: "Lost & Found Flip",
      instructions: "Flip cards to match past-tense questions with the best response.",
      successMessage: "Great. You can describe lost-item situations clearly.",
      failureMessage: "Try again and match each past-tense question with the best response.",
      rounds: [
        {
          pairs: [
            ["What happened to your wallet?", "I lost it on the bus."],
            ["When did you notice it was gone?", "I noticed last night."],
            ["Did you call the bank?", "Yes, I called right away."]
          ],
          maxMistakes: 5,
          explanation: "These exchanges help with practical problem-reporting language."
        },
        {
          pairs: [
            ["Where did you last see it?", "I saw it at the grocery store."],
            ["Was anything stolen?", "Yes, my ID was missing."],
            ["Did the police help?", "They took a report."]
          ],
          maxMistakes: 5,
          explanation: "Use simple past to describe completed events."
        },
      ],
    },
  },
  {
    id: "game-3r-ch4",
    chapterId: "3r-ch4",
    mechanicType: "SWIPE_TRUE_FALSE",
    roundTimeSec: 85,
    winRules: "Get at least 4 while/past continuous checks right.",
    isPublished: true,
    contentPayload: {
      title: "Late Story Swipe",
      instructions: "Swipe true or false based on correct past continuous usage.",
      successMessage: "Nice tense tracking. You can explain delays clearly.",
      failureMessage: "Try again and focus on while + ongoing action patterns.",
      rounds: [
        {
          statement: "I was driving while it was raining is a correct sentence.",
          isTrue: true,
          explanation: "Both actions were ongoing in the same time period."
        },
        {
          statement: "While I waited for the bus, it arrive is correct grammar.",
          isTrue: false,
          explanation: "Use arrived for the completed interruption."
        },
        {
          statement: "She was talking on the phone when the class started is correct.",
          isTrue: true,
          explanation: "Background action + interruption pattern is correct."
        },
        {
          statement: "While we were walk to work, we saw an accident is correct.",
          isTrue: false,
          explanation: "Use were walking, not were walk."
        },
        {
          statement: "I was waiting for the train when it finally came works naturally.",
          isTrue: true,
          explanation: "Past continuous plus simple past interruption is correct."
        },
      ],
    },
  },
  {
    id: "game-3r-ch5",
    chapterId: "3r-ch5",
    mechanicType: "SENTENCE_SORT",
    roundTimeSec: 90,
    winRules: "Build 4 real-conditional response sentences correctly.",
    isPublished: true,
    contentPayload: {
      title: "If-It-Happens Builder",
      instructions: "Tap words in order to build if + will sentences.",
      successMessage: "Great. You can explain practical plans for real situations.",
      failureMessage: "Try again and keep if-clause and will-clause order clear.",
      rounds: [
        {
          prompt: "Utility issue plan",
          words: ["If", "the", "power", "goes", "out", "I", "will", "call", "the", "company"],
          answer: ["If", "the", "power", "goes", "out", "I", "will", "call", "the", "company"],
          explanation: "Use simple present in if-clause and will in result clause."
        },
        {
          prompt: "Home repair plan",
          words: ["If", "the", "sink", "leaks", "I", "will", "turn", "off", "the", "water"],
          answer: ["If", "the", "sink", "leaks", "I", "will", "turn", "off", "the", "water"],
          explanation: "This is a real condition and immediate response."
        },
        {
          prompt: "Neighborhood help plan",
          words: ["If", "my", "neighbor", "needs", "help", "I", "will", "lend", "tools"],
          answer: ["If", "my", "neighbor", "needs", "help", "I", "will", "lend", "tools"],
          explanation: "Lend works for giving an item to someone else."
        },
        {
          prompt: "Travel delay plan",
          words: ["If", "the", "bus", "is", "late", "I", "will", "take", "the", "train"],
          answer: ["If", "the", "bus", "is", "late", "I", "will", "take", "the", "train"],
          explanation: "This sentence shows practical backup planning."
        },
      ],
    },
  },
  {
    id: "game-3r-ch6",
    chapterId: "3r-ch6",
    mechanicType: "ODDBALL_OUT",
    roundTimeSec: 80,
    winRules: "Find at least 4 odd -ed/-ing mismatches.",
    isPublished: true,
    contentPayload: {
      title: "Feeling Finder",
      instructions: "Tap the word that does not fit the adjective pattern group.",
      successMessage: "Nice catch. You can separate -ed feelings from -ing descriptions.",
      failureMessage: "Try again and focus on person-feeling vs thing-causing-feeling.",
      rounds: [
        {
          set: ["interested", "excited", "bored", "interesting"],
          answer: "interesting",
          explanation: "The first three describe how people feel."
        },
        {
          set: ["boring", "exciting", "surprising", "surprised"],
          answer: "surprised",
          explanation: "The first three describe things/events causing feelings."
        },
        {
          set: ["confused", "frustrated", "relaxed", "relaxing"],
          answer: "relaxing",
          explanation: "The first three are person-feeling adjectives."
        },
        {
          set: ["tired", "annoyed", "amazed", "amazing"],
          answer: "amazing",
          explanation: "Amazing is the cause adjective, not the person-feeling form."
        },
        {
          set: ["The movie was interesting.", "I was interested.", "The class was boring.", "I was boring."],
          answer: "I was boring.",
          explanation: "People are usually bored, not boring."
        },
      ],
    },
  },
  {
    id: "game-3r-ch7",
    chapterId: "3r-ch7",
    mechanicType: "DIALOG_GAP",
    roundTimeSec: 85,
    winRules: "Complete at least 4 appointment-request dialogs correctly.",
    isPublished: true,
    contentPayload: {
      title: "Appointment Desk",
      instructions: "Choose the most polite and accurate request line.",
      successMessage: "Great. You can make and change appointments politely.",
      failureMessage: "Try again and focus on I'd like to... and for/to usage.",
      rounds: [
        {
          dialogue: "A: Good morning. How can I help you?\\nB: ____",
          options: ["I'd like to change my appointment.", "I like change appointment now.", "I changed for tomorrow yesterday."],
          answer: "I'd like to change my appointment.",
          explanation: "Use I'd like to + verb for polite service requests."
        },
        {
          dialogue: "A: What are you calling for?\\nB: ____",
          options: ["I'm calling to reschedule my visit.", "I'm calling for reschedule to visit.", "I called to was late."],
          answer: "I'm calling to reschedule my visit.",
          explanation: "Use to + verb for purpose."
        },
        {
          dialogue: "A: Do you need this for tomorrow?\\nB: ____",
          options: ["Yes, it's for tomorrow morning.", "Yes, it's to tomorrow morning.", "Yes, tomorrow for to."],
          answer: "Yes, it's for tomorrow morning.",
          explanation: "Use for + time period/date."
        },
        {
          dialogue: "A: Can you come at 3:00?\\nB: ____",
          options: ["Could I come at 4:00 instead?", "Could I came at 4:00?", "I to come for 4."],
          answer: "Could I come at 4:00 instead?",
          explanation: "Could I + base verb is polite and correct."
        },
        {
          dialogue: "A: Why do you need the appointment?\\nB: ____",
          options: ["It's to discuss my test results.", "It's for discuss my test results.", "It's discuss results for to."],
          answer: "It's to discuss my test results.",
          explanation: "Use to + verb for reason/purpose."
        },
      ],
    },
  },
  {
    id: "game-3r-ch8",
    chapterId: "3r-ch8",
    mechanicType: "CATEGORY_SORT",
    roundTimeSec: 90,
    winRules: "Sort all review phrases into the right chapter skill group.",
    isPublished: true,
    contentPayload: {
      title: "3R Midpoint Review Sort",
      instructions: "Sort mixed language from chapters 1-7 into the right category.",
      successMessage: "Strong review. You connected grammar and context accurately.",
      failureMessage: "Try again and group phrases by grammar target.",
      rounds: [
        {
          categories: ["Comparisons", "Past Events", "Conditionals"],
          items: [
            { label: "the best deal", category: "Comparisons" },
            { label: "cheaper than", category: "Comparisons" },
            { label: "I lost my wallet", category: "Past Events" },
            { label: "while I was waiting", category: "Past Events" },
            { label: "If it rains, I will stay home", category: "Conditionals" },
            { label: "If the sink leaks, I'll call maintenance", category: "Conditionals" }
          ],
          explanation: "Use form and meaning to separate each grammar family."
        },
        {
          categories: ["Feelings", "Appointments", "Community Activities"],
          items: [
            { label: "I felt excited", category: "Feelings" },
            { label: "The workshop was interesting", category: "Feelings" },
            { label: "I'd like to cancel my appointment", category: "Appointments" },
            { label: "I'm calling to reschedule", category: "Appointments" },
            { label: "play soccer in the park", category: "Community Activities" },
            { label: "go to the community center", category: "Community Activities" }
          ],
          explanation: "These sets map directly to chapters 1, 6, and 7."
        },
      ],
    },
  },
  {
    id: "game-3r-ch9",
    chapterId: "3r-ch9",
    mechanicType: "MEMORY_PATH",
    roundTimeSec: 80,
    winRules: "Replay each field-trip communication sequence in order.",
    isPublished: true,
    contentPayload: {
      title: "Field Trip Action Path",
      instructions: "Memorize each action sequence and replay it in order.",
      successMessage: "Hooray. Your practical communication flow is strong.",
      failureMessage: "Try again and focus on the exact step order.",
      rounds: [
        {
          sequence: ["meet at entrance", "check attendance", "review safety rules", "start activity"],
          explanation: "Group routines often begin with safety and attendance."
        },
        {
          sequence: ["ask a guide question", "listen carefully", "take notes", "share with partner"],
          explanation: "This sequence builds active participation language."
        },
        {
          sequence: ["buy ticket", "find platform", "board train", "arrive at destination"],
          explanation: "Transit sequences help real-world navigation English."
        },
      ],
    },
  },
  {
    id: "game-3r-ch10",
    chapterId: "3r-ch10",
    mechanicType: "IMAGE_WORD_MATCH",
    roundTimeSec: 80,
    winRules: "Match at least 4 passion and skill prompts correctly.",
    isPublished: true,
    contentPayload: {
      title: "Passion Match-Up",
      instructions: "Match each icon clue to the best skill or passion sentence.",
      successMessage: "Great. You can talk about interests and strengths clearly.",
      failureMessage: "Try again and match each clue with the best fit sentence.",
      rounds: [
        {
          emoji: "\ud83e\udd1d",
          options: ["I'm passionate about helping people.", "I helped yesterday maybe.", "I am helping to passion was."],
          answer: "I'm passionate about helping people.",
          explanation: "Use passionate about + gerund for strong interest."
        },
        {
          emoji: "\ud83d\udcbb",
          options: ["I'm good at solving technical problems.", "I'm good solve technical.", "I solved good at."],
          answer: "I'm good at solving technical problems.",
          explanation: "Use good at + gerund for abilities."
        },
        {
          emoji: "\ud83d\udcda",
          options: ["I'm interested in tutoring students.", "I'm interested tutor students.", "I interest in tutoring was."],
          answer: "I'm interested in tutoring students.",
          explanation: "Interested in + gerund is the target pattern."
        },
        {
          emoji: "\ud83d\udcbc",
          options: ["I have experience with customer service.", "I have experience customer service withing.", "I experienced with service was."],
          answer: "I have experience with customer service.",
          explanation: "Experience with + noun phrase is common in job talk."
        },
      ],
    },
  },
  {
    id: "game-3r-ch11",
    chapterId: "3r-ch11",
    mechanicType: "SENTENCE_SORT",
    roundTimeSec: 90,
    winRules: "Build 4 instruction sequences correctly.",
    isPublished: true,
    contentPayload: {
      title: "Recipe Sequence Builder",
      instructions: "Tap words in order to build clear step-by-step instructions.",
      successMessage: "Nice sequencing. Your instruction language is precise.",
      failureMessage: "Try again and focus on first/next/then/finally flow.",
      rounds: [
        {
          prompt: "Start a recipe instruction",
          words: ["First", "preheat", "the", "oven", "to", "350", "degrees"],
          answer: ["First", "preheat", "the", "oven", "to", "350", "degrees"],
          explanation: "Start instructions with first + action."
        },
        {
          prompt: "Second step instruction",
          words: ["Next", "mix", "the", "dry", "ingredients"],
          answer: ["Next", "mix", "the", "dry", "ingredients"],
          explanation: "Next introduces the following step."
        },
        {
          prompt: "Third step instruction",
          words: ["Then", "add", "the", "eggs", "and", "milk"],
          answer: ["Then", "add", "the", "eggs", "and", "milk"],
          explanation: "Then keeps process order moving."
        },
        {
          prompt: "Final step instruction",
          words: ["Finally", "bake", "for", "25", "minutes"],
          answer: ["Finally", "bake", "for", "25", "minutes"],
          explanation: "Finally signals last step."
        },
      ],
    },
  },
  {
    id: "game-3r-ch12",
    chapterId: "3r-ch12",
    mechanicType: "CARD_FLIP_MATCH",
    roundTimeSec: 95,
    winRules: "Match all ownership pairs with 5 mistakes or less.",
    isPublished: true,
    contentPayload: {
      title: "Whose Is It Match",
      instructions: "Flip cards and match each object phrase with the best possessive response.",
      successMessage: "Great ownership language. You can identify belongings clearly.",
      failureMessage: "Try again and match this/that/these/those ownership forms correctly.",
      rounds: [
        {
          pairs: [
            ["Whose charger is this?", "It's mine."],
            ["Whose keys are those?", "They're his."],
            ["Are these notebooks yours?", "Yes, they're mine."]
          ],
          maxMistakes: 5,
          explanation: "Use possessive pronouns to answer ownership questions."
        },
        {
          pairs: [
            ["Is that backpack hers?", "No, it's his."],
            ["Whose headphones are these?", "They're ours."],
            ["Is this phone yours?", "No, it's theirs."]
          ],
          maxMistakes: 5,
          explanation: "Match singular/plural objects with the right pronoun response."
        },
      ],
    },
  },
  {
    id: "game-3r-ch13",
    chapterId: "3r-ch13",
    mechanicType: "DRAG_WORD_BANK",
    roundTimeSec: 90,
    winRules: "Fill at least 4 prediction statements correctly.",
    isPublished: true,
    contentPayload: {
      title: "Future Hope Builder",
      instructions: "Fill each statement with future prediction language.",
      successMessage: "Nice future talk. You can express hopes and predictions clearly.",
      failureMessage: "Try again and focus on will and hope patterns.",
      rounds: [
        {
          sentence: "I hope I ____ have a better job next year.",
          bank: ["will", "would", "did", "was"],
          answer: ["will"],
          explanation: "Use will for future predictions."
        },
        {
          sentence: "My schedule ____ be more flexible in the future.",
          bank: ["will", "have", "did", "is"],
          answer: ["will"],
          explanation: "Will + base verb is the standard prediction form."
        },
        {
          sentence: "I think technology ____ change my work life.",
          bank: ["will", "would", "has", "had"],
          answer: ["will"],
          explanation: "Predictions about future use will."
        },
        {
          sentence: "We ____ probably move to a different neighborhood.",
          bank: ["will", "did", "were", "has"],
          answer: ["will"],
          explanation: "Will + adverb + base verb is natural prediction phrasing."
        },
        {
          sentence: "I hope my children ____ have more opportunities.",
          bank: ["will", "would", "are", "did"],
          answer: ["will"],
          explanation: "Hope statements about future commonly use will."
        },
      ],
    },
  },
  {
    id: "game-3r-ch14",
    chapterId: "3r-ch14",
    mechanicType: "DIALOG_GAP",
    roundTimeSec: 85,
    winRules: "Complete at least 4 indefinite-pronoun dialogs correctly.",
    isPublished: true,
    contentPayload: {
      title: "Anything Finder",
      instructions: "Choose the best line using anything, something, or nothing.",
      successMessage: "Great. Your indefinite pronoun usage sounds natural.",
      failureMessage: "Try again and match question/answer meaning carefully.",
      rounds: [
        {
          dialogue: "A: Did you find anything for your mom?\\nB: ____",
          options: ["Yes, I found something she will love.", "Yes, I found nothing she love.", "Yes, I found anything gift."],
          answer: "Yes, I found something she will love.",
          explanation: "Use something in positive statements."
        },
        {
          dialogue: "A: Is there anything in this bag?\\nB: ____",
          options: ["No, there's nothing inside.", "No, there's anything inside.", "No, there is something no."],
          answer: "No, there's nothing inside.",
          explanation: "Use nothing for a negative meaning without extra not."
        },
        {
          dialogue: "A: Do you need anything from the store?\\nB: ____",
          options: ["Yes, can you get something for dinner?", "Yes, get nothing for dinner.", "Yes, can you get anything for dinner yes."],
          answer: "Yes, can you get something for dinner?",
          explanation: "Anything in question, something in positive request."
        },
        {
          dialogue: "A: Did anybody call me?\\nB: ____",
          options: ["No, no one said anything.", "No, no one said something.", "No, no one said nothing not."],
          answer: "No, no one said anything.",
          explanation: "After negative idea, anything is natural."
        },
        {
          dialogue: "A: I didn't buy anything.\\nB: ____",
          options: ["That's okay. You can buy something later.", "That's okay. You can buy anything later no.", "That's okay. You can buy nothing maybe."],
          answer: "That's okay. You can buy something later.",
          explanation: "Use something for a positive future option."
        },
      ],
    },
  },
  {
    id: "game-3r-ch15",
    chapterId: "3r-ch15",
    mechanicType: "TAP_CORRECT",
    roundTimeSec: 85,
    winRules: "Get at least 4 appreciation responses correct.",
    isPublished: true,
    contentPayload: {
      title: "Thank-You Boost",
      instructions: "Tap the best appreciation sentence for each scenario.",
      successMessage: "Awesome. Your appreciation language is warm and natural.",
      failureMessage: "Try again and focus on thanking + gerund patterns.",
      rounds: [
        {
          prompt: "Choose the best thank-you sentence:",
          options: ["Thank you for helping me move.", "Thank you to help me move.", "Thank you for help me moved."],
          answer: "Thank you for helping me move.",
          explanation: "After for, use gerund (-ing)."
        },
        {
          prompt: "Pick the strongest appreciation line:",
          options: ["I appreciate you supporting me.", "I appreciate you support me.", "I appreciated you to support."],
          answer: "I appreciate you supporting me.",
          explanation: "Use appreciate + gerund phrase."
        },
        {
          prompt: "Choose the best message to a teacher:",
          options: ["Thanks for encouraging me to keep studying.", "Thanks for encourage me studying.", "Thanks encouraging to me."],
          answer: "Thanks for encouraging me to keep studying.",
          explanation: "This sentence uses for + gerund and reads naturally."
        },
        {
          prompt: "Pick the best response to help received:",
          options: ["Thank you so much for checking on me.", "Thank you so much for check on me.", "Thank you check on me so much for."],
          answer: "Thank you so much for checking on me.",
          explanation: "Checking after for makes the grammar correct."
        },
        {
          prompt: "Choose the clearest gratitude sentence:",
          options: ["I'm grateful for learning from your advice.", "I'm grateful for learn from your advice.", "I'm grateful learning from advice for."],
          answer: "I'm grateful for learning from your advice.",
          explanation: "For + gerund is the pattern used in this lesson."
        },
      ],
    },
  },
  {
    id: "game-3r-ch16",
    chapterId: "3r-ch16",
    mechanicType: "CATEGORY_SORT",
    roundTimeSec: 95,
    winRules: "Complete all final review sorting rounds for 3R chapters 9-15.",
    isPublished: true,
    contentPayload: {
      title: "3R Final Challenge Sort",
      instructions: "Sort mixed chapter language into the right review buckets.",
      successMessage: "Hooray. You finished 3R with strong communication skills.",
      failureMessage: "Try again and group each phrase by grammar and context.",
      rounds: [
        {
          categories: ["Skills & Passion", "Instructions", "Ownership"],
          items: [
            { label: "I'm passionate about helping people.", category: "Skills & Passion" },
            { label: "I'm good at organizing events.", category: "Skills & Passion" },
            { label: "First, preheat the oven.", category: "Instructions" },
            { label: "Then add the ingredients.", category: "Instructions" },
            { label: "Whose charger is this?", category: "Ownership" },
            { label: "These keys are mine.", category: "Ownership" }
          ],
          explanation: "Separate career talk, process language, and possession talk."
        },
        {
          categories: ["Future Hopes", "Indefinite Pronouns", "Appreciation"],
          items: [
            { label: "I hope I'll get a better job.", category: "Future Hopes" },
            { label: "Things will improve soon.", category: "Future Hopes" },
            { label: "Did you find anything?", category: "Indefinite Pronouns" },
            { label: "I bought something for my sister.", category: "Indefinite Pronouns" },
            { label: "Thank you for helping me.", category: "Appreciation" },
            { label: "I appreciate you encouraging me.", category: "Appreciation" }
          ],
          explanation: "Each bucket maps to one core chapter target from 13-15."
        },
      ],
    },
  },
  {
    id: "game-4l-ch1",
    chapterId: "4l-ch1",
    mechanicType: "DIALOG_GAP",
    roundTimeSec: 85,
    winRules: "Complete at least 4 of 5 greeting situations correctly.",
    isPublished: true,
    contentPayload: {
      title: "Greeting Switchboard",
      instructions: "Choose the best response for each social greeting context.",
      successMessage: "Great flow. Your greetings sound natural in different situations.",
      failureMessage: "Try again and match each greeting to the right context and tone.",
      rounds: [
        {
          dialogue: "A: Hey, what's up?\\nB: ____",
          options: ["Not much. How about you?", "I was married yesterday.", "Since two days."],
          answer: "Not much. How about you?",
          explanation: "What's up needs a casual present-time response."
        },
        {
          dialogue: "A: Nice to meet you.\\nB: ____",
          options: ["Nice to meet you, too.", "I have met you tomorrow.", "I am agree this."],
          answer: "Nice to meet you, too.",
          explanation: "Use this standard phrase for first introductions."
        },
        {
          dialogue: "A: Long time no see!\\nB: ____",
          options: ["Yeah, it's been a while.", "Yes, I borrow it.", "I was speeding."],
          answer: "Yeah, it's been a while.",
          explanation: "This phrase naturally acknowledges time since last meeting."
        },
        {
          dialogue: "A: Good luck on your interview tomorrow.\\nB: ____",
          options: ["Thanks, I appreciate it.", "I have fever for tomorrow.", "Unless I help."],
          answer: "Thanks, I appreciate it.",
          explanation: "A brief appreciative response is most natural here."
        },
        {
          dialogue: "A: See you next week.\\nB: ____",
          options: ["See you then.", "See you last week.", "Would you speed?"],
          answer: "See you then.",
          explanation: "Use then to refer to the future time just mentioned."
        },
      ],
    },
  },
  {
    id: "game-4l-ch2",
    chapterId: "4l-ch2",
    mechanicType: "CATEGORY_SORT",
    roundTimeSec: 90,
    winRules: "Sort all choices into both/either/neither categories.",
    isPublished: true,
    contentPayload: {
      title: "Choice Triangle",
      instructions: "Sort each sentence by whether it means both, either, or neither.",
      successMessage: "Nice sorting. You can express preference tradeoffs clearly.",
      failureMessage: "Try again and focus on the meaning of both, either, and neither.",
      rounds: [
        {
          categories: ["Both", "Either", "Neither"],
          items: [
            { label: "I like both options.", category: "Both" },
            { label: "Either car is fine.", category: "Either" },
            { label: "Neither route is fast.", category: "Neither" },
            { label: "Both restaurants are good.", category: "Both" },
            { label: "You can call either friend.", category: "Either" },
            { label: "Neither answer is correct.", category: "Neither" }
          ],
          explanation: "Sort by quantity meaning: two yes, one yes, or zero yes."
        },
        {
          categories: ["Both", "Either", "Neither"],
          items: [
            { label: "Both dogs are friendly.", category: "Both" },
            { label: "Either bus goes downtown.", category: "Either" },
            { label: "Neither store is open.", category: "Neither" },
            { label: "Both plans work for me.", category: "Both" },
            { label: "Either day is okay.", category: "Either" },
            { label: "Neither movie starts early.", category: "Neither" }
          ],
          explanation: "Look for clue words and what they imply about choices."
        },
      ],
    },
  },
  {
    id: "game-4l-ch3",
    chapterId: "4l-ch3",
    mechanicType: "SWIPE_TRUE_FALSE",
    roundTimeSec: 85,
    winRules: "Get at least 4 while/when statements correct.",
    isPublished: true,
    contentPayload: {
      title: "Traffic Timeline Swipe",
      instructions: "Swipe true or false based on past continuous and simple past usage.",
      successMessage: "Great tense control in action-event timing.",
      failureMessage: "Try again and check when for completed interruption and while for ongoing action.",
      rounds: [
        {
          statement: "I was driving when the police stopped me uses correct tense contrast.",
          isTrue: true,
          explanation: "Ongoing action (was driving) + interruption (stopped) is correct."
        },
        {
          statement: "While I was drove home, it started to rain is correct grammar.",
          isTrue: false,
          explanation: "After was, use driving not drove."
        },
        {
          statement: "When the light turned red, he was texting uses a correct pattern.",
          isTrue: true,
          explanation: "Completed event with when + background ongoing action works."
        },
        {
          statement: "While the officer asked questions, she checked my ID is a natural pattern.",
          isTrue: true,
          explanation: "While can introduce the longer background action."
        },
        {
          statement: "I speeded while I was listening to music uses the best past verb form.",
          isTrue: false,
          explanation: "Use sped in standard form, not speeded."
        },
      ],
    },
  },
  {
    id: "game-4l-ch4",
    chapterId: "4l-ch4",
    mechanicType: "DRAG_WORD_BANK",
    roundTimeSec: 90,
    winRules: "Fill at least 4 experience statements correctly.",
    isPublished: true,
    contentPayload: {
      title: "Ever Tracker",
      instructions: "Fill each sentence with the best present perfect phrase.",
      successMessage: "Nice. You can talk about life experiences naturally.",
      failureMessage: "Try again and focus on Have you ever plus past participles.",
      rounds: [
        {
          sentence: "Have you ever ____ to Las Vegas and ____ a show there?",
          bank: ["been", "seen", "go", "see"],
          answer: ["been", "seen"],
          explanation: "Use been/seen for present perfect experiences."
        },
        {
          sentence: "I ____ never ____ sushi before today.",
          bank: ["have", "tried", "has", "try"],
          answer: ["have", "tried"],
          explanation: "I takes have, and tried is the participle."
        },
        {
          sentence: "She ____ already ____ in three states.",
          bank: ["has", "lived", "have", "live"],
          answer: ["has", "lived"],
          explanation: "She has lived is the correct present perfect form."
        },
        {
          sentence: "They ____ not ____ that museum yet.",
          bank: ["have", "visited", "has", "visit"],
          answer: ["have", "visited"],
          explanation: "Plural subject takes have, plus visited."
        },
      ],
    },
  },
  {
    id: "game-4l-ch5",
    chapterId: "4l-ch5",
    mechanicType: "TAP_CORRECT",
    roundTimeSec: 85,
    winRules: "Choose at least 4 correct for/since answers.",
    isPublished: true,
    contentPayload: {
      title: "For or Since Clinic",
      instructions: "Tap the best response for duration and start-time questions.",
      successMessage: "Great. You can explain health duration clearly.",
      failureMessage: "Try again and separate period (for) from start point (since).",
      rounds: [
        {
          prompt: "She has had a fever ___ Monday.",
          options: ["since", "for", "already"],
          answer: "since",
          explanation: "Monday is a specific start point, so use since."
        },
        {
          prompt: "He has been sick ___ two days.",
          options: ["for", "since", "yet"],
          answer: "for",
          explanation: "Two days is a duration period, so use for."
        },
        {
          prompt: "I have lived here ___ 2019.",
          options: ["since", "for", "both"],
          answer: "since",
          explanation: "2019 marks the starting time."
        },
        {
          prompt: "They have waited ___ three hours.",
          options: ["for", "since", "either"],
          answer: "for",
          explanation: "Three hours is a period of time."
        },
        {
          prompt: "We haven't seen the doctor ___ yesterday.",
          options: ["since", "for", "yet"],
          answer: "since",
          explanation: "Yesterday is the reference starting time."
        },
      ],
    },
  },
  {
    id: "game-4l-ch6",
    chapterId: "4l-ch6",
    mechanicType: "CARD_FLIP_MATCH",
    roundTimeSec: 95,
    winRules: "Match all moving-task pairs with 5 mistakes or less.",
    isPublished: true,
    contentPayload: {
      title: "Already or Yet Match",
      instructions: "Flip cards and match moving tasks with the best already/yet response.",
      successMessage: "Nice matching. You can report completed and pending tasks clearly.",
      failureMessage: "Try again and pair each task with the correct already/yet message.",
      rounds: [
        {
          pairs: [
            ["Did you change the locks?", "Yes, I already changed them."],
            ["Have you met your neighbors?", "Not yet, maybe this weekend."],
            ["Did you unpack the kitchen?", "Yes, I already finished it."]
          ],
          maxMistakes: 5,
          explanation: "Already marks completed tasks, yet marks pending tasks."
        },
        {
          pairs: [
            ["Have you found a doctor yet?", "No, not yet."],
            ["Did you update your address?", "Yes, I already did."],
            ["Have you bought curtains yet?", "Yes, I already bought them."]
          ],
          maxMistakes: 5,
          explanation: "Listen for question cues like yet to pick the best response."
        },
      ],
    },
  },
  {
    id: "game-4l-ch7",
    chapterId: "4l-ch7",
    mechanicType: "IMAGE_WORD_MATCH",
    roundTimeSec: 80,
    winRules: "Match at least 4 request scenarios correctly.",
    isPublished: true,
    contentPayload: {
      title: "Neighbor Help Match",
      instructions: "Match each icon with the best could/borrow/lend sentence.",
      successMessage: "Great. Your polite help requests are clear and friendly.",
      failureMessage: "Try again and focus on whether to use borrow or lend.",
      rounds: [
        {
          emoji: "\ud83d\udceb",
          options: ["Could you pick up my mail?", "I already changed the locks.", "I got married last year."],
          answer: "Could you pick up my mail?",
          explanation: "Mailbox clue points to a polite mail pickup request."
        },
        {
          emoji: "\ud83d\udd11",
          options: ["Can I borrow your spare key?", "I might be right.", "Since Monday."],
          answer: "Can I borrow your spare key?",
          explanation: "Borrow is used when you receive the item."
        },
        {
          emoji: "\ud83d\udcd6",
          options: ["Could you lend me that book?", "Could I speed now?", "What would you road trip?"],
          answer: "Could you lend me that book?",
          explanation: "Lend is used for the person giving the item."
        },
        {
          emoji: "\ud83d\udee0\ufe0f",
          options: ["Could you help me fix this shelf?", "Have you ever sushi?", "Neither yes."],
          answer: "Could you help me fix this shelf?",
          explanation: "Tool icon suggests a request for practical help."
        },
      ],
    },
  },
  {
    id: "game-4l-ch8",
    chapterId: "4l-ch8",
    mechanicType: "ODDBALL_OUT",
    roundTimeSec: 80,
    winRules: "Find at least 4 odd items in this review set.",
    isPublished: true,
    contentPayload: {
      title: "4L Review Oddball",
      instructions: "Tap the one item that does not fit the others.",
      successMessage: "Strong review. You spotted key grammar differences fast.",
      failureMessage: "Try again and look for the term that breaks the pattern.",
      rounds: [
        {
          set: ["both", "either", "neither", "since"],
          answer: "since",
          explanation: "The first three are choice words; since is a time connector."
        },
        {
          set: ["have you ever", "already", "yet", "while"],
          answer: "while",
          explanation: "While belongs to past continuous sequencing, not present perfect markers."
        },
        {
          set: ["borrow", "lend", "could you", "unless"],
          answer: "unless",
          explanation: "Unless is a connector, while the others are request/help terms."
        },
        {
          set: ["for two days", "since Monday", "since 2010", "either route"],
          answer: "either route",
          explanation: "The first three express duration or start point."
        },
        {
          set: ["Have you changed it yet?", "I already did.", "Not yet.", "I was driving when..."],
          answer: "I was driving when...",
          explanation: "The first three are already/yet exchange language."
        },
      ],
    },
  },
  {
    id: "game-4l-ch9",
    chapterId: "4l-ch9",
    mechanicType: "MEMORY_PATH",
    roundTimeSec: 80,
    winRules: "Replay each field-trip sequence in the right order.",
    isPublished: true,
    contentPayload: {
      title: "Field Trip Route Run",
      instructions: "Memorize the steps, then tap them back in sequence.",
      successMessage: "Hooray. Your real-world communication flow is sharp.",
      failureMessage: "Try again and keep each sequence order in mind.",
      rounds: [
        {
          sequence: ["meet at bus stop", "check passes", "board bus", "arrive downtown"],
          explanation: "Transit activities follow a clear order."
        },
        {
          sequence: ["ask for directions", "confirm street name", "walk together", "reach destination"],
          explanation: "Direction language works best as a step-by-step chain."
        },
        {
          sequence: ["borrow brochure", "read map", "share plan", "start activity"],
          explanation: "Practical resource use supports communication on trips."
        },
      ],
    },
  },
  {
    id: "game-4l-ch10",
    chapterId: "4l-ch10",
    mechanicType: "SENTENCE_SORT",
    roundTimeSec: 90,
    winRules: "Build 4 hypothetical statements correctly.",
    isPublished: true,
    contentPayload: {
      title: "What Would You Build",
      instructions: "Tap words in order to build present unreal conditional sentences.",
      successMessage: "Great. You can describe hypothetical choices clearly.",
      failureMessage: "Try again and focus on If + past, would + base verb structure.",
      rounds: [
        {
          prompt: "Hypothetical scam response",
          words: ["If", "I", "got", "a", "scam", "call", "I", "would", "hang", "up"],
          answer: ["If", "I", "got", "a", "scam", "call", "I", "would", "hang", "up"],
          explanation: "Use past form in if-clause and would in result clause."
        },
        {
          prompt: "Hypothetical safety choice",
          words: ["If", "I", "saw", "a", "strange", "link", "I", "would", "not", "click"],
          answer: ["If", "I", "saw", "a", "strange", "link", "I", "would", "not", "click"],
          explanation: "This expresses unreal present/future caution."
        },
        {
          prompt: "Compound idea with so",
          words: ["I", "was", "busy", "so", "I", "did", "not", "answer"],
          answer: ["I", "was", "busy", "so", "I", "did", "not", "answer"],
          explanation: "So connects cause and result in one sentence."
        },
        {
          prompt: "Compound idea with but",
          words: ["He", "called", "me", "but", "I", "missed", "it"],
          answer: ["He", "called", "me", "but", "I", "missed", "it"],
          explanation: "But introduces contrast between linked clauses."
        },
      ],
    },
  },
  {
    id: "game-4l-ch11",
    chapterId: "4l-ch11",
    mechanicType: "TAP_CORRECT",
    roundTimeSec: 85,
    winRules: "Score at least 4 opinion responses correct.",
    isPublished: true,
    contentPayload: {
      title: "Opinion Arena",
      instructions: "Tap the strongest opinion sentence for each prompt.",
      successMessage: "Nice work. Your opinion language is clear and respectful.",
      failureMessage: "Try again and use full opinion phrases with reasons.",
      rounds: [
        {
          prompt: "Choose the best opinion start:",
          options: ["In my opinion, public parks need more funding.", "Public parks because yes.", "I opinion park."],
          answer: "In my opinion, public parks need more funding.",
          explanation: "Strong opinion language starts with a clear framing phrase."
        },
        {
          prompt: "Pick the best support sentence:",
          options: ["I think this policy helps families because childcare is expensive.", "Policy helps maybe and but so.", "Families expensive yes."],
          answer: "I think this policy helps families because childcare is expensive.",
          explanation: "Add a reason to make your opinion persuasive."
        },
        {
          prompt: "Choose a respectful disagreement:",
          options: ["I see your point, but I disagree for two reasons.", "No. Wrong.", "You disagree me."],
          answer: "I see your point, but I disagree for two reasons.",
          explanation: "Respectful disagreement keeps discussion productive."
        },
        {
          prompt: "Best closing for an opinion:",
          options: ["That's why I support this change.", "That because maybe.", "Supporting changed be."],
          answer: "That's why I support this change.",
          explanation: "A clear closing sentence strengthens your argument."
        },
        {
          prompt: "Pick the clearest contrast sentence:",
          options: ["I like the idea, but the cost is too high right now.", "I like but cost and idea maybe high.", "Cost is."],
          answer: "I like the idea, but the cost is too high right now.",
          explanation: "But introduces a focused contrast clearly."
        },
      ],
    },
  },
  {
    id: "game-4l-ch12",
    chapterId: "4l-ch12",
    mechanicType: "DIALOG_GAP",
    roundTimeSec: 85,
    winRules: "Complete at least 4 dream-job dialogs correctly.",
    isPublished: true,
    contentPayload: {
      title: "Dream Job Dialogs",
      instructions: "Choose the best if-I-could response for each scenario.",
      successMessage: "Great. You can express hypothetical goals naturally.",
      failureMessage: "Try again and focus on If I could, I would patterns.",
      rounds: [
        {
          dialogue: "A: If you could have any job, what would it be?\\nB: ____",
          options: ["I would be a nurse.", "I am nurse yesterday.", "I will was nurse."],
          answer: "I would be a nurse.",
          explanation: "Use would for hypothetical choice."
        },
        {
          dialogue: "A: If you could travel anywhere, where would you go?\\nB: ____",
          options: ["I'd go to Japan.", "I go Japan every maybe.", "I went tomorrow."],
          answer: "I'd go to Japan.",
          explanation: "Would + base verb is the target form."
        },
        {
          dialogue: "A: If you could change one thing at work, what would you change?\\nB: ____",
          options: ["I'd change the schedule.", "I changed yesterday schedule.", "If I would schedule."],
          answer: "I'd change the schedule.",
          explanation: "Keep response concise with would."
        },
        {
          dialogue: "A: If you could learn any skill, what would it be?\\nB: ____",
          options: ["I would learn coding.", "I learn coding before.", "I have learn coding."],
          answer: "I would learn coding.",
          explanation: "Hypothetical future skill uses would learn."
        },
        {
          dialogue: "A: If you could take a year off, what would you do?\\nB: ____",
          options: ["I'd volunteer and travel.", "I was volunteer now.", "I travel yesterday and."],
          answer: "I'd volunteer and travel.",
          explanation: "Would + base verbs expresses unreal plan."
        },
      ],
    },
  },
  {
    id: "game-4l-ch13",
    chapterId: "4l-ch13",
    mechanicType: "TAP_CORRECT",
    roundTimeSec: 80,
    winRules: "Get at least 4 agreement/disagreement prompts right.",
    isPublished: true,
    contentPayload: {
      title: "Debate Tap",
      instructions: "Tap the most natural agree/disagree response.",
      successMessage: "Nice tone control. You can agree and disagree clearly.",
      failureMessage: "Try again and focus on respectful disagreement language.",
      rounds: [
        {
          prompt: "A: Free tuition should be universal. B: (agree)",
          options: ["I agree. Education should be accessible.", "I was agree yesterday.", "Agree me yes."],
          answer: "I agree. Education should be accessible.",
          explanation: "Use full agreement with a supporting reason."
        },
        {
          prompt: "A: Dogs should be allowed at every workplace. B: (disagree politely)",
          options: ["I understand, but I disagree because of allergies.", "No. Bad.", "Disagree and done."],
          answer: "I understand, but I disagree because of allergies.",
          explanation: "Respectful disagreement keeps discussion productive."
        },
        {
          prompt: "A: Remote work increases productivity. B: (partial agreement)",
          options: ["I agree in some cases, but not for every job.", "I agree all none.", "Remote productivity was."],
          answer: "I agree in some cases, but not for every job.",
          explanation: "Partial agreement needs both support and limit."
        },
        {
          prompt: "A: Public transport should be free on weekends. B: (opinion)",
          options: ["That's an interesting idea, and I support it.", "Interesting was support maybe.", "No weekend transport."],
          answer: "That's an interesting idea, and I support it.",
          explanation: "A clear opinion sentence is strongest."
        },
        {
          prompt: "A: HOA rules improve neighborhoods. B: (counterpoint)",
          options: ["Maybe, but some rules are too strict.", "Strict yes no HOA maybe was.", "Counterpoint strictly."],
          answer: "Maybe, but some rules are too strict.",
          explanation: "Maybe + but gives a balanced counterpoint."
        },
      ],
    },
  },
  {
    id: "game-4l-ch14",
    chapterId: "4l-ch14",
    mechanicType: "CARD_FLIP_MATCH",
    roundTimeSec: 95,
    winRules: "Match all get-passive life-event pairs with 5 mistakes or less.",
    isPublished: true,
    contentPayload: {
      title: "Life Event Flip",
      instructions: "Flip cards and match get-passive events with their meanings.",
      successMessage: "Great matching. You can describe life milestones fluently.",
      failureMessage: "Try again and match each get-passive phrase to its meaning.",
      rounds: [
        {
          pairs: [
            ["got married", "started a marriage"],
            ["got promoted", "received a better position"],
            ["got hired", "was chosen for a job"]
          ],
          maxMistakes: 5,
          explanation: "Get-passive often describes major life or work changes."
        },
        {
          pairs: [
            ["got accepted", "was admitted"],
            ["got divorced", "ended a marriage"],
            ["got laid off", "lost a job due to company decision"]
          ],
          maxMistakes: 5,
          explanation: "Match each event phrase to its real-life meaning."
        },
      ],
    },
  },
  {
    id: "game-4l-ch15",
    chapterId: "4l-ch15",
    mechanicType: "IMAGE_WORD_MATCH",
    roundTimeSec: 80,
    winRules: "Match at least 4 etiquette scenarios correctly.",
    isPublished: true,
    contentPayload: {
      title: "Polite or Rude?",
      instructions: "Match each icon scenario to the best etiquette sentence.",
      successMessage: "Nice. You can discuss politeness across cultures clearly.",
      failureMessage: "Try again and focus on culturally polite behavior language.",
      rounds: [
        {
          emoji: "\u23f0",
          options: ["Showing up very late can be rude.", "You filed a claim, didn't you?", "I might stereotype."],
          answer: "Showing up very late can be rude.",
          explanation: "Clock icon cues punctuality behavior."
        },
        {
          emoji: "\ud83d\udc5f",
          options: ["In some homes, taking off shoes is polite.", "I have been city working.", "Both shoes neither."],
          answer: "In some homes, taking off shoes is polite.",
          explanation: "Shoes icon relates to home etiquette norms."
        },
        {
          emoji: "\ud83d\udcde",
          options: ["Interrupting someone on the phone can be rude.", "I got promoted yesterday.", "Could you lend stereotype?"],
          answer: "Interrupting someone on the phone can be rude.",
          explanation: "Phone icon points to conversational manners."
        },
        {
          emoji: "\ud83d\ude4f",
          options: ["Saying thank you is important in many cultures.", "I disagree mirror.", "Road trip tax claim."],
          answer: "Saying thank you is important in many cultures.",
          explanation: "Gratitude language is a core politeness behavior."
        },
      ],
    },
  },
  {
    id: "game-4l-ch16",
    chapterId: "4l-ch16",
    mechanicType: "CATEGORY_SORT",
    roundTimeSec: 95,
    winRules: "Complete all review category rounds for 4L chapters 9-15.",
    isPublished: true,
    contentPayload: {
      title: "4L Final Review Sort",
      instructions: "Sort mixed phrases from chapters 9-15 into the correct buckets.",
      successMessage: "Hooray. You wrapped 4L with strong language control.",
      failureMessage: "Try again and sort by grammar target and chapter context.",
      rounds: [
        {
          categories: ["Hypothetical", "Opinion", "Life Events"],
          items: [
            { label: "If I could, I'd move closer to work.", category: "Hypothetical" },
            { label: "What would you do in that situation?", category: "Hypothetical" },
            { label: "I agree with that policy.", category: "Opinion" },
            { label: "I disagree because it's too expensive.", category: "Opinion" },
            { label: "She got married last year.", category: "Life Events" },
            { label: "He got promoted in June.", category: "Life Events" }
          ],
          explanation: "Differentiate if-clause language, opinion language, and milestone events."
        },
        {
          categories: ["Polite Requests", "Etiquette", "Field Trip Actions"],
          items: [
            { label: "Could you pick up my mail?", category: "Polite Requests" },
            { label: "Could I borrow your drill?", category: "Polite Requests" },
            { label: "Taking shoes off is polite in some homes.", category: "Etiquette" },
            { label: "Arriving very late can be rude.", category: "Etiquette" },
            { label: "ask for directions", category: "Field Trip Actions" },
            { label: "board the bus", category: "Field Trip Actions" }
          ],
          explanation: "Use context clues to separate requests, manners, and trip language."
        },
      ],
    },
  },
  {
    id: "game-5l-ch1",
    chapterId: "5l-ch1",
    mechanicType: "CATEGORY_SORT",
    roundTimeSec: 90,
    winRules: "Sort all travel statements by tense focus.",
    isPublished: true,
    contentPayload: {
      title: "Road Trip Tense Mixer",
      instructions: "Sort statements into past, present, or future travel language.",
      successMessage: "Great. You can switch tenses confidently in one conversation.",
      failureMessage: "Try again and track each sentence time signal carefully.",
      rounds: [
        {
          categories: ["Past", "Present", "Future"],
          items: [
            { label: "We drove through Arizona last summer.", category: "Past" },
            { label: "I live in a quiet neighborhood now.", category: "Present" },
            { label: "We're going to visit Seattle next month.", category: "Future" },
            { label: "I grew up near the coast.", category: "Past" },
            { label: "I prefer warm weather.", category: "Present" },
            { label: "I'm going to book the hotel tonight.", category: "Future" }
          ],
          explanation: "Use time markers and verb forms to sort by tense."
        },
        {
          categories: ["Climate", "Geography", "Neighborhood"],
          items: [
            { label: "humid", category: "Climate" },
            { label: "mountain region", category: "Geography" },
            { label: "suburban area", category: "Neighborhood" },
            { label: "dry season", category: "Climate" },
            { label: "river valley", category: "Geography" },
            { label: "downtown block", category: "Neighborhood" }
          ],
          explanation: "These topic groups build road-trip and relocation vocabulary."
        },
      ],
    },
  },
  {
    id: "game-5l-ch2",
    chapterId: "5l-ch2",
    mechanicType: "CARD_FLIP_MATCH",
    roundTimeSec: 95,
    winRules: "Match interview tense pairs with 5 mistakes or less.",
    isPublished: true,
    contentPayload: {
      title: "Interview Time Match",
      instructions: "Match each interview question with the best tense-based response.",
      successMessage: "Excellent. You can separate present perfect from simple past.",
      failureMessage: "Try again and match finished-time events versus life experience.",
      rounds: [
        {
          pairs: [
            ["Have you ever led a team?", "Yes, I have led two project teams."],
            ["When did you finish your last course?", "I finished it in 2022."],
            ["Have you prepared your resume?", "Yes, I've already updated it."]
          ],
          maxMistakes: 5,
          explanation: "Use present perfect for experience, simple past for specific time."
        },
        {
          pairs: [
            ["Did you work in customer service last year?", "Yes, I worked in retail in 2024."],
            ["Have you ever used this software?", "Yes, I've used it for two years."],
            ["When did you apply for this role?", "I applied last week."]
          ],
          maxMistakes: 5,
          explanation: "Specific date cue means simple past; open experience means present perfect."
        },
      ],
    },
  },
  {
    id: "game-5l-ch3",
    chapterId: "5l-ch3",
    mechanicType: "DRAG_WORD_BANK",
    roundTimeSec: 90,
    winRules: "Fill at least 4 retirement conditional lines correctly.",
    isPublished: true,
    contentPayload: {
      title: "Retirement Planner",
      instructions: "Fill each sentence with could, should, or would in context.",
      successMessage: "Nice planning language. Your conditional choices are on point.",
      failureMessage: "Try again and pick could for possibility, should for advice, would for likely choice.",
      rounds: [
        {
          sentence: "If I save more now, I ____ retire earlier.",
          bank: ["could", "should", "would", "did"],
          answer: ["could"],
          explanation: "Could expresses possibility."
        },
        {
          sentence: "You ____ talk to a financial advisor before investing.",
          bank: ["should", "would", "could", "have"],
          answer: ["should"],
          explanation: "Should gives recommendation or advice."
        },
        {
          sentence: "If I had extra income, I ____ increase my retirement contribution.",
          bank: ["would", "should", "could", "am"],
          answer: ["would"],
          explanation: "Would fits a likely hypothetical action."
        },
        {
          sentence: "If housing costs were lower, we ____ save more each month.",
          bank: ["could", "should", "would", "did"],
          answer: ["could"],
          explanation: "Could marks potential outcome based on conditions."
        },
        {
          sentence: "People ____ start planning retirement earlier than they think.",
          bank: ["should", "could", "would", "was"],
          answer: ["should"],
          explanation: "General recommendation calls for should."
        },
      ],
    },
  },
  {
    id: "game-5l-ch4",
    chapterId: "5l-ch4",
    mechanicType: "DIALOG_GAP",
    roundTimeSec: 85,
    winRules: "Complete at least 4 civic-update dialogs correctly.",
    isPublished: true,
    contentPayload: {
      title: "City Update Live",
      instructions: "Choose the best present perfect continuous response.",
      successMessage: "Great. You can describe ongoing city changes clearly.",
      failureMessage: "Try again and use has/have been + verb-ing for ongoing actions.",
      rounds: [
        {
          dialogue: "A: Why is traffic different lately?\\nB: ____",
          options: ["The city has been repairing the main bridge.", "The city repaired bridge tomorrow.", "The city is repair for last year."],
          answer: "The city has been repairing the main bridge.",
          explanation: "Has been repairing shows ongoing recent activity."
        },
        {
          dialogue: "A: Why are taxes a big topic now?\\nB: ____",
          options: ["Officials have been discussing budget changes.", "Officials discussed always yesterday.", "Officials are discuss since."],
          answer: "Officials have been discussing budget changes.",
          explanation: "Use have been discussing for sustained ongoing process."
        },
        {
          dialogue: "A: Why is that neighborhood improving?\\nB: ____",
          options: ["Local groups have been organizing cleanups.", "Local groups cleanups before now.", "Local groups had organizing soon."],
          answer: "Local groups have been organizing cleanups.",
          explanation: "This tense emphasizes repeated ongoing effort."
        },
        {
          dialogue: "A: Why are buses more reliable this month?\\nB: ____",
          options: ["The transit team has been upgrading the system.", "Transit team upgraded every tomorrow.", "Transit team be upgrading yesterday."],
          answer: "The transit team has been upgrading the system.",
          explanation: "Has been upgrading explains the continuous cause."
        },
      ],
    },
  },
  {
    id: "game-5l-ch5",
    chapterId: "5l-ch5",
    mechanicType: "TAP_CORRECT",
    roundTimeSec: 85,
    winRules: "Get at least 4 connector choices right.",
    isPublished: true,
    contentPayload: {
      title: "Because, Unless, Even Though",
      instructions: "Tap the best connector for each sentence.",
      successMessage: "Nice connector control in complex ideas.",
      failureMessage: "Try again and separate cause, contrast, and condition meanings.",
      rounds: [
        {
          prompt: "They won't get help ____ they admit it's a problem.",
          options: ["unless", "because", "even though"],
          answer: "unless",
          explanation: "Unless means if not."
        },
        {
          prompt: "He went to work ____ he felt sick.",
          options: ["even though", "unless", "because"],
          answer: "even though",
          explanation: "Even though expresses contrast."
        },
        {
          prompt: "She joined counseling ____ she wanted support.",
          options: ["because", "unless", "even though"],
          answer: "because",
          explanation: "Because gives the reason."
        },
        {
          prompt: "People keep struggling ____ they ask for help.",
          options: ["unless", "because", "even though"],
          answer: "unless",
          explanation: "The condition for change is asking for help."
        },
        {
          prompt: "____ the topic is difficult, we should talk about it.",
          options: ["Even though", "Because", "Unless"],
          answer: "Even though",
          explanation: "This sentence contrasts difficulty and action."
        },
      ],
    },
  },
  {
    id: "game-5l-ch6",
    chapterId: "5l-ch6",
    mechanicType: "ODDBALL_OUT",
    roundTimeSec: 80,
    winRules: "Find at least 4 odd items in regret and wish patterns.",
    isPublished: true,
    contentPayload: {
      title: "Wish Regret Spotter",
      instructions: "Tap the item that does not match the regret/wish pattern.",
      successMessage: "Great spotting. You recognize regret language quickly.",
      failureMessage: "Try again and focus on unreal past and wish structures.",
      rounds: [
        {
          set: ["I wish I'd tried it.", "If only I had studied more.", "I regret not applying.", "I am applying tomorrow."],
          answer: "I am applying tomorrow.",
          explanation: "The first three focus on regret about past choices."
        },
        {
          set: ["would have", "could have", "should have", "is having"],
          answer: "is having",
          explanation: "The first three are unreal past forms."
        },
        {
          set: ["I wish I had gone.", "I wish I'd called.", "I wish I went yesterday.", "I wish I'd taken the class."],
          answer: "I wish I went yesterday.",
          explanation: "Wish for past regrets uses had + participle."
        },
        {
          set: ["regret", "wish", "if only", "unless"],
          answer: "unless",
          explanation: "Unless is a condition connector, not a regret marker."
        },
        {
          set: ["dreams", "hopes", "goals", "traffic ticket"],
          answer: "traffic ticket",
          explanation: "The first three relate to future aspirations."
        },
      ],
    },
  },
  {
    id: "game-5l-ch7",
    chapterId: "5l-ch7",
    mechanicType: "IMAGE_WORD_MATCH",
    roundTimeSec: 80,
    winRules: "Match at least 4 certainty statements correctly.",
    isPublished: true,
    contentPayload: {
      title: "Must or Might Radar",
      instructions: "Match each clue to the best must/might statement.",
      successMessage: "Nice nuance. You can express certainty levels clearly.",
      failureMessage: "Try again and choose must for strong certainty and might for possibility.",
      rounds: [
        {
          emoji: "\ud83d\udca1",
          options: ["She must know the answer.", "She might was know.", "She has knew yesterday."],
          answer: "She must know the answer.",
          explanation: "Bright clue suggests strong certainty."
        },
        {
          emoji: "\u2753",
          options: ["He might be confused.", "He must confused every day.", "He is confuse before."],
          answer: "He might be confused.",
          explanation: "Question mark implies uncertainty or possibility."
        },
        {
          emoji: "\ud83d\udcda",
          options: ["They must study a lot.", "They might studied lot yes.", "They studying was must."],
          answer: "They must study a lot.",
          explanation: "Books clue supports high-confidence inference."
        },
        {
          emoji: "\ud83c\udf27\ufe0f",
          options: ["It might rain later.", "It must rains later yesterday.", "Rain was likely must."],
          answer: "It might rain later.",
          explanation: "Weather forecast often uses possibility language."
        },
      ],
    },
  },
  {
    id: "game-5l-ch8",
    chapterId: "5l-ch8",
    mechanicType: "ODDBALL_OUT",
    roundTimeSec: 80,
    winRules: "Find at least 4 odd items in this 5L review set.",
    isPublished: true,
    contentPayload: {
      title: "5L Midpoint Oddball",
      instructions: "Tap the one item that does not match the group.",
      successMessage: "Strong review recognition across chapters 1-7.",
      failureMessage: "Try again and find the item that breaks grammar or topic pattern.",
      rounds: [
        {
          set: ["have prepared", "have worked", "finished in 2021", "have led"],
          answer: "finished in 2021",
          explanation: "This one is simple past with specific time."
        },
        {
          set: ["could", "should", "would", "yet"],
          answer: "yet",
          explanation: "The first three are modal forms in if-clause topics."
        },
        {
          set: ["unless", "because", "even though", "must"],
          answer: "must",
          explanation: "Must is a certainty modal, not a connector."
        },
        {
          set: ["I wish I'd tried", "if only I had", "I regret that", "I'm going to tomorrow"],
          answer: "I'm going to tomorrow",
          explanation: "The first three express regret language."
        },
        {
          set: ["must", "might", "certainty", "retirement account"],
          answer: "retirement account",
          explanation: "This one is finance vocabulary, not certainty language."
        },
      ],
    },
  },
  {
    id: "game-5l-ch9",
    chapterId: "5l-ch9",
    mechanicType: "MEMORY_PATH",
    roundTimeSec: 80,
    winRules: "Replay each field-trip sequence in the right order.",
    isPublished: true,
    contentPayload: {
      title: "Civic Field Flow",
      instructions: "Memorize each sequence and tap it back in order.",
      successMessage: "Hooray. You can manage real-world civic communication steps.",
      failureMessage: "Try again and keep each action sequence in order.",
      rounds: [
        {
          sequence: ["meet at station", "review agenda", "observe city project", "report findings"],
          explanation: "Academic field trips move from planning to reporting."
        },
        {
          sequence: ["ask a question", "listen actively", "take notes", "share opinion"],
          explanation: "Discussion skills follow a predictable flow."
        },
        {
          sequence: ["identify issue", "collect examples", "compare viewpoints", "suggest solutions"],
          explanation: "Civic problem-solving is easiest in structured steps."
        },
      ],
    },
  },
  {
    id: "game-5l-ch10",
    chapterId: "5l-ch10",
    mechanicType: "TAP_CORRECT",
    roundTimeSec: 85,
    winRules: "Get at least 4 agreement structures correct.",
    isPublished: true,
    contentPayload: {
      title: "Agree or Push Back",
      instructions: "Tap the sentence with the best agree/disagree grammar pattern.",
      successMessage: "Great. Your agreement language is precise and persuasive.",
      failureMessage: "Try again and use correct gerund/noun forms after agree with.",
      rounds: [
        {
          prompt: "Choose the correct form:",
          options: ["I agree with free speech.", "I agree free speeching.", "I agree to free speech is."],
          answer: "I agree with free speech.",
          explanation: "Agree with + noun phrase is correct."
        },
        {
          prompt: "Pick the strongest disagreement:",
          options: ["I disagree with banning all books.", "I disagree banning all books with.", "I disagree to banned all books."],
          answer: "I disagree with banning all books.",
          explanation: "Disagree with + gerund phrase is natural here."
        },
        {
          prompt: "Choose the best supportive response:",
          options: ["I agree with protecting public safety.", "I agree protect public safetying.", "I agreed with protect."],
          answer: "I agree with protecting public safety.",
          explanation: "Protecting works as a gerund object."
        },
        {
          prompt: "Pick the best balanced statement:",
          options: ["I agree with the goal, but not with the method.", "I agree goal but not method withing.", "I was agree with methods."],
          answer: "I agree with the goal, but not with the method.",
          explanation: "Parallel with-phrases make the contrast clear."
        },
        {
          prompt: "Select the correct question:",
          options: ["Do you agree with this policy?", "Do you agree this policy with?", "You agree with do policy?"],
          answer: "Do you agree with this policy?",
          explanation: "Question form is Do you agree with + noun."
        },
      ],
    },
  },
  {
    id: "game-5l-ch11",
    chapterId: "5l-ch11",
    mechanicType: "SENTENCE_SORT",
    roundTimeSec: 90,
    winRules: "Build 4 direct and indirect questions correctly.",
    isPublished: true,
    contentPayload: {
      title: "Culture Question Builder",
      instructions: "Build direct and indirect question patterns in the right word order.",
      successMessage: "Nice form control. You can ask sensitive questions politely.",
      failureMessage: "Try again and compare direct question inversion with indirect order.",
      rounds: [
        {
          prompt: "Direct question",
          words: ["Should", "I", "take", "my", "shoes", "off"],
          answer: ["Should", "I", "take", "my", "shoes", "off"],
          explanation: "Direct questions use inversion: Should I..."
        },
        {
          prompt: "Indirect question",
          words: ["Do", "you", "think", "I", "should", "take", "my", "shoes", "off"],
          answer: ["Do", "you", "think", "I", "should", "take", "my", "shoes", "off"],
          explanation: "After do you think, clause order returns to statement order."
        },
        {
          prompt: "Direct information question",
          words: ["What", "influences", "your", "culture", "most"],
          answer: ["What", "influences", "your", "culture", "most"],
          explanation: "This direct wh-question keeps verb directly after subject idea."
        },
        {
          prompt: "Indirect information question",
          words: ["Can", "you", "tell", "me", "what", "influences", "your", "culture", "most"],
          answer: ["Can", "you", "tell", "me", "what", "influences", "your", "culture", "most"],
          explanation: "Indirect form is softer and common in polite conversation."
        },
      ],
    },
  },
  {
    id: "game-5l-ch12",
    chapterId: "5l-ch12",
    mechanicType: "CARD_FLIP_MATCH",
    roundTimeSec: 95,
    winRules: "Match all tag-question pairs with 5 mistakes or less.",
    isPublished: true,
    contentPayload: {
      title: "Tag Question Tag-Team",
      instructions: "Flip cards to match each statement with its correct tag question.",
      successMessage: "Excellent. Your tag question control is strong.",
      failureMessage: "Try again and match tense and polarity carefully.",
      rounds: [
        {
          pairs: [
            ["You filed a claim", "didn't you?"],
            ["She has insurance", "doesn't she?"],
            ["They weren't late", "were they?"]
          ],
          maxMistakes: 5,
          explanation: "Positive statements take negative tags and vice versa."
        },
        {
          pairs: [
            ["He can call the agent", "can't he?"],
            ["We should compare plans", "shouldn't we?"],
            ["You don't have collision coverage", "do you?"]
          ],
          maxMistakes: 5,
          explanation: "Match helper verb and polarity to build correct tags."
        },
      ],
    },
  },
  {
    id: "game-5l-ch13",
    chapterId: "5l-ch13",
    mechanicType: "DRAG_WORD_BANK",
    roundTimeSec: 90,
    winRules: "Fill at least 4 timeline statements correctly.",
    isPublished: true,
    contentPayload: {
      title: "Civil Rights Timeline",
      instructions: "Fill each sentence with the best time connector.",
      successMessage: "Great sequencing. Your timeline language is clear.",
      failureMessage: "Try again and choose connectors based on sequence and duration.",
      rounds: [
        {
          sentence: "____ that protest, local policies began to change.",
          bank: ["After", "Until", "Since", "For"],
          answer: ["After"],
          explanation: "After shows the next event in sequence."
        },
        {
          sentence: "Many communities waited ____ reforms were approved.",
          bank: ["until", "once", "since", "for"],
          answer: ["until"],
          explanation: "Until marks the end point of waiting."
        },
        {
          sentence: "____ then, many things have changed.",
          bank: ["Since", "Before", "For", "Once"],
          answer: ["Since"],
          explanation: "Since then is a standard phrase for change over time."
        },
        {
          sentence: "____ the law passed, people celebrated in the streets.",
          bank: ["Once", "For", "Before", "Since"],
          answer: ["Once"],
          explanation: "Once introduces the condition/time of a new action."
        },
        {
          sentence: "Activists organized for years ____ the final vote.",
          bank: ["before", "since", "until", "once"],
          answer: ["before"],
          explanation: "Before links long preparation to later event."
        },
      ],
    },
  },
  {
    id: "game-5l-ch14",
    chapterId: "5l-ch14",
    mechanicType: "TAP_CORRECT",
    roundTimeSec: 85,
    winRules: "Get at least 4 superstition grammar prompts right.",
    isPublished: true,
    contentPayload: {
      title: "Superstition Grammar Tap",
      instructions: "Tap the best sentence using gerunds and infinitive structures.",
      successMessage: "Nice grammar control in belief discussions.",
      failureMessage: "Try again and check gerund-subject and it's + adjective + infinitive patterns.",
      rounds: [
        {
          prompt: "Choose the correct gerund subject sentence.",
          options: ["Breaking a mirror is bad luck.", "Break a mirror is bad luck.", "To break mirror is bad lucking."],
          answer: "Breaking a mirror is bad luck.",
          explanation: "Gerund phrase can act as sentence subject."
        },
        {
          prompt: "Pick the correct infinitive pattern.",
          options: ["It's rude to whistle at night in some places.", "It's rude whistling to night.", "It rude to whistles."],
          answer: "It's rude to whistle at night in some places.",
          explanation: "Use it's + adjective + infinitive."
        },
        {
          prompt: "Choose the best comparison sentence.",
          options: ["Believing in lucky numbers is common in many cultures.", "Believe in lucky numbers is commoning.", "To believing lucky numbers common."],
          answer: "Believing in lucky numbers is common in many cultures.",
          explanation: "Gerund subject makes the sentence natural and clear."
        },
        {
          prompt: "Pick the best cultural statement.",
          options: ["It's interesting to compare superstitions around the world.", "It's interesting compare superstitions to.", "Interesting is compare to superstitions."],
          answer: "It's interesting to compare superstitions around the world.",
          explanation: "Infinitive phrase after adjective is required here."
        },
        {
          prompt: "Choose the most natural sentence.",
          options: ["Carrying a charm can make people feel confident.", "Carry charm can making confidence.", "To carrying charm is confidence."],
          answer: "Carrying a charm can make people feel confident.",
          explanation: "Gerund subject + modal + base verb is the right structure."
        },
      ],
    },
  },
  {
    id: "game-5l-ch15",
    chapterId: "5l-ch15",
    mechanicType: "CATEGORY_SORT",
    roundTimeSec: 90,
    winRules: "Sort all word forms into the right family.",
    isPublished: true,
    contentPayload: {
      title: "Word Family Lab",
      instructions: "Sort each term by whether it is a verb, adjective, or noun form.",
      successMessage: "Excellent. Your form awareness is getting advanced.",
      failureMessage: "Try again and track each word's part of speech.",
      rounds: [
        {
          categories: ["Verb", "Adjective", "Noun"],
          items: [
            { label: "inspire", category: "Verb" },
            { label: "inspiring", category: "Adjective" },
            { label: "inspiration", category: "Noun" },
            { label: "motivate", category: "Verb" },
            { label: "motivated", category: "Adjective" },
            { label: "motivation", category: "Noun" }
          ],
          explanation: "Sort by job in sentence: action, descriptor, or thing/idea."
        },
        {
          categories: ["Verb", "Adjective", "Noun"],
          items: [
            { label: "relax", category: "Verb" },
            { label: "relaxing", category: "Adjective" },
            { label: "relaxation", category: "Noun" },
            { label: "encourage", category: "Verb" },
            { label: "encouraging", category: "Adjective" },
            { label: "encouragement", category: "Noun" }
          ],
          explanation: "Many families follow common suffix patterns."
        },
      ],
    },
  },
  {
    id: "game-5l-ch16",
    chapterId: "5l-ch16",
    mechanicType: "CATEGORY_SORT",
    roundTimeSec: 95,
    winRules: "Complete all final review category rounds.",
    isPublished: true,
    contentPayload: {
      title: "5L Final Master Mix",
      instructions: "Sort mixed advanced phrases from chapters 9-15 into the correct buckets.",
      successMessage: "Hooray. You closed 5L with strong advanced communication skills.",
      failureMessage: "Try again and group by grammar target and context.",
      rounds: [
        {
          categories: ["Agreement", "Question Forms", "Tag Questions"],
          items: [
            { label: "I agree with that policy.", category: "Agreement" },
            { label: "I disagree with banning books.", category: "Agreement" },
            { label: "Do you think I should ask first?", category: "Question Forms" },
            { label: "Can you tell me what time it starts?", category: "Question Forms" },
            { label: "You filed the claim, didn't you?", category: "Tag Questions" },
            { label: "She has coverage, doesn't she?", category: "Tag Questions" }
          ],
          explanation: "Separate opinion structures from question structure types."
        },
        {
          categories: ["Time Connectors", "Superstition Grammar", "Word Families"],
          items: [
            { label: "since then", category: "Time Connectors" },
            { label: "before the vote", category: "Time Connectors" },
            { label: "Breaking a mirror is bad luck.", category: "Superstition Grammar" },
            { label: "It's rude to whistle indoors.", category: "Superstition Grammar" },
            { label: "inspiration", category: "Word Families" },
            { label: "motivated", category: "Word Families" }
          ],
          explanation: "Each category maps to a distinct chapter grammar target."
        },
      ],
    },
  },
];
