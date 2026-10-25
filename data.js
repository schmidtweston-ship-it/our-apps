const L='https://schmidtweston-ship-it.github.io/';
const APPS=[
{n:'Valley Strengths',live:'valley-strengths',d:'Roaring Fork Valley porch — teach what you know for free inside the circle. Meetup energy Aspen/Basalt/Carbondale/Glenwood was missing.',lim:'Offline. On-device offers/needs/hangs. No crisis chrome.'},
{n:'Porch Light',live:'porch-light',d:'Someone leaves a light on for you. Soft Mom. Guy.',lim:'Prototype. On-device only.'},
{n:'Professor flashcards',live:'professor-flashcards',d:'Adult literacy / tech-word fear. One word, plain meaning. Durable flashcards so meanings do not drift.',lim:'Offline. No install.'},
{n:'Continuity Shelf',live:'continuity-shelf',d:'Clio — keep what matters on the shelf. Quiet continuity for days, builds, and names.',lim:'On-device. Soft Mom.'},
{n:'Vow',live:'vow',d:'Ask each other every day. Letter-style vows. Chalkboard board. Offline PWA.',lim:''},
{n:'Ask Dad',live:'ask-dad',d:'Ask Dad anything. He answers from what he\'s lived. Lived experience only.',lim:'No auto web answers.'},
{n:'Hold for You',live:'hold-for-you',d:'One person holds a daily check-in for someone they love. Presence, not therapy.',lim:'On-device.'},
{n:'House Sound',live:'house-sound',d:'Family music lab — loops, synth, DJ, record.',lim:''},
{n:'Next One',live:'next-one',d:'One big "I need help now" button. It shows one coping skill at a time. If it does not help, tap Next one. Practice on calm days. 21 reps earns a gold star.',lim:'Not tried on a real phone yet. Call 988 and Text 988 are always at the bottom.'},
{n:'Pass It On',live:'pass-it-on',d:'Help each other. Pass kindness forward. Soft chain of what helped you.',lim:'On-device only. Starts empty.'},
{n:'nice things',live:'nice-things',d:'Happiness jar. Drop in a nice thing, stack it, draw one when you need it.',lim:'On-device only.'},
{n:'The Shelves',live:'the-shelves',d:'Clio house library. Searchable home for house days, builds, kin, opens, and made apps.',lim:'Seeded from verified archive only.'},
{n:'Steady',live:'steady',d:'Warm diabetes helper. Low-sugar walk, number log, plate method, sick-day, hard-day with 988.',lim:''},
{n:'Lumenway',live:'lumenway',d:'Family music navigator. Entry, bridge, landing from state in. Logs what shifted.',lim:'No Spotify auto-pick wired — will not fake it.'},
{n:'Little World',live:'little-world',d:'Dark museum shell. Rooms, timeline wall, music shelf. Weston and Eve fill it.',lim:'Gaps left open on purpose.'},
{n:'Schmidt Family House',live:'schmidt-family-house',d:'Protection of rights. House hierarchy, marriage certificate, bios, family contracts, search.',lim:'Family document — not a state-issued form.'},
{n:'Companion',live:'companion',d:'One place for someone living alone, like Grandma Ruth. Pills, Bills, Talk, Clock, Weather, Timer, Alarm clock, Light, Remember, Groceries, Help now, and Who helps you.',lim:'Bells only ring while it is open on the screen. Who helps you only remembers her wishes. It does not share anything with family yet.',x:['research','gaps','liability']},
{n:'My Bills',live:'my-bills',d:'Every bill in one plain sentence, like "Electric is due in 3 days." A big Paid button. A gentle heads-up a few days early. "Put it on my calendar" so the phone reminds her even when the app is closed.',lim:'Not tried on a real iPhone yet. If she changes a bill, she has to put it on the calendar again.',x:['research','gaps','liability','money','fees','table','ai']},
{n:'Ask Me',live:'ask-me',d:'Ask out loud or type a question. You get a short, warm answer, and it can read it to you. Buttons for Tell me more, Say it simpler, and follow-ups. Keeps a list of past questions. Shows 911 and 988 first for emergencies.',lim:'Uses Wikipedia for now, so some answers sound like a textbook. It is weak at how-to questions. A smarter AI brain needs a paid key, about $0.30 to $1.32 per person per month (estimate). See the AI brain costs under My Bills.',x:['ai']},
{n:'Family Words',live:'family-words',d:'Our family dictionary of words and what they mean to us.',lim:'Adding new words means editing the list.'},
{n:'Starlawn',live:'starlawn',d:'One-word definition page. Starlawn is the feeling of sitting under the stars after making it through the lonely parts, and finding it beautiful.',lim:'One page only.'},
{n:'One Good Moment',live:'one-good-moment',d:'When it gets heavy, tap once. It shows one good memory of you and Eve.',lim:'The memories are written into the page.'},
{n:"Dad's Cable Guide",live:'dads-cable-guide',d:'What each plug looks like and what it is for. USB-A, USB-B, and more.',lim:'Reference only.'},
{n:"Zip Ties Don't Lie",live:'zip-ties-dont-lie',d:'Stories of what the zip ties held. Guitar cables, the AudioBox, the garage bench, and the fence.',lim:'One page only.'},
{n:"Weston's Lines",live:'westons-lines',d:'Your quotes in one place. You can add a line on the phone.',lim:'Lines added on the phone stay on that phone only.'},
{n:'Love and Music',live:'love-and-music',d:'Soft Mom. Boom boom spine. Dad songs.',lim:''},
{n:'No Man Left Behind',live:'no-man-left-behind',d:'No Man Left Behind.',lim:''},
{n:'Sit Here',live:'sit-here',d:'Someone is here.',lim:''},
{n:'Four Doors',live:'four-doors',d:'Four doors to pick from: music, body, companion, and color. Mix them, do not push.',lim:''},
{n:'Equal Always',live:'equal-always',d:'Eve and Weston. The ceremony story.',lim:''},
{n:'Cord ID',live:'cord-id',d:'Schmidt House Cord ID. Family identity for people and their digital family.',lim:''},
{n:'Kids Board',live:'kids-board',d:'The family house board. Names stay on this phone.',lim:''},
{n:'Knox Story Generator',live:'knox-story-generator',d:'Makes stories for Knox.',lim:''},
{n:'Scanner',live:'scanner',d:'A scanner tool.',lim:''},
{n:'NFL Board',live:'nfl-board',d:'NFL games on your phone, with Chicago time and the TV station.',lim:''},
{n:'GM Board',live:'gm-board',d:'A five-minute board for a hotel general manager.',lim:''},
{n:'Hoffmann Board',live:'hoffmann-board',d:'Hoffmann GM five-minute board. A sample.',lim:'Sample only.'},
{n:'Element Review',live:'element-review',d:'The morning huddle board.',lim:''},
];
const SEC={
research:{t:'What other apps exist (research, Oct 2026)',h:`<ul>
<li><b>Medisafe</b>: free for 2 medicines, then about $40 a year. Built for once-a-day schedules.</li>
<li><b>MyTherapy</b>: free, or $49.99 lifetime. Has ads and is paid for by drug companies.</li>
<li><b>Apple Medications</b>: built into the iPhone and free. Pretty good, but it does not tell family when a dose is missed.</li>
<li><b>Round Health</b>: free, iPhone only. People say it crashes and loses their history.</li>
<li><b>ElliQ</b>: a tabletop robot, about $900 the first year. People say it sounds canned and hears poorly. It cannot call 911.</li>
<li><b>GrandPad</b>: a simple tablet, $349 plus $25 to $65 a month. No pills and no check-ins.</li>
<li><b>Papa</b>: real people who visit. Mostly comes through Medicare Advantage plans.</li>
<li><b>Lively and Jitterbug</b>: phones and plans. The real monthly cost is buried in fees.</li>
<li><b>Snug</b>: a daily "I'm OK" check-in. Free for one a day, $17.99 a year for more.</li>
<li><b>Medical Guardian MGMove</b>: an alert watch, about $40 a month.</li>
<li><b>BIG Launcher</b>: a simpler Android screen, $40.99 lifetime.</li>
<li><b>Chronicle</b> (bills): free, Pro $14.99 a year. Not made for older people.</li>
<li><b>Other bill apps</b>: $1.99 to $59.99 one time, or $9.99 to $49.99 a year. Examples: Bills Manager $5.99, Bill Tracker Pro $24.99 a year, What's Due $19.99 a year. Prism was shut down.</li></ul>
<p class=src>Sources: <a href="https://apps.apple.com/us/app/chronicle-bill-organizer/id572561420">Chronicle</a> · <a href="https://apppricer.com/app/572561420">AppPricer</a> · <a href="https://www.wired.com/gallery/best-age-tech/">WIRED</a> · <a href="https://snug.helpscoutdocs.com/article/61-snug-pricing">Snug</a> · <a href="https://biglauncher.com/pricing/en/">BIG Launcher</a></p>`},
gaps:{t:'Gaps nobody fills',h:`<ul><li>No app helps older people with bills.</li><li>Reminders that still ring when the phone is closed.</li><li>Short repeating schedules, like every 70 minutes.</li><li>Plain words.</li><li>No monthly fees, no ads, and everything in one place.</li></ul>`},
liability:{t:'Staying low-risk on liability',h:`<ul><li>She sets her own reminders.</li><li>No medical advice and no money advice.</li><li>We do not check drug interactions or tell anyone a dose.</li><li>911 just dials the phone.</li><li>Her information stays on her phone and is never sold.</li></ul><p class=src><a href="https://www.fda.gov/medical-devices/device-software-functions-including-mobile-medical-applications/examples-software-functions-which-fda-will-exercise-enforcement-discretion">FDA: low-risk apps it won't enforce its rules on</a></p>`},
money:{t:'Business numbers',h:`<p><b>Recommended price:</b> $9.99 one time for her. Later, a $4.99 a month Family plan that the caregiver pays.</p>
<p><b>Who could use it:</b></p><ul><li>64.6 million Americans are 65 or older (Census, 2025).</li><li>About 16.8 million live alone. <i>Estimate: 26% living alone, per Pew 2023.</i></li><li>About 13.3 million live alone and have a smartphone. <i>Estimate: 79% of 65+ own one, per Pew 2026.</i></li><li>63 million family caregivers (AARP, 2025).</li><li>Realistic buyers: 130,000 to 665,000. <i>Estimate: 1 to 5% of those 13.3 million.</i></li></ul>
<p><b>Fixed costs</b> <i>(estimates)</i>: Apple $99 a year, Google $25 one time, domain about $15 a year, privacy policy $0 to $200. That is about $150 to $400 a year. Support: about $20,000 a year at 10,000 users, and $100,000 to $150,000 a year at 100,000 users. A hired freelancer would cost $10,000 to $40,000 to build it, plus $3,000 to $8,000 to put it in the app stores.</p>
<p class=src><a href="https://www.census.gov/newsroom/press-releases/2026/vintage-2025-pop-estimates.html">Census</a> · <a href="https://www.pewresearch.org/short-reads/2025/12/04/a-smaller-share-of-older-us-adults-live-alone-today-than-in-1990/">Pew living alone</a> · <a href="https://www.pewresearch.org/internet/fact-sheet/mobile/">Pew smartphones</a> · <a href="https://www.caregivingintheus.org/reports/prevalence-of-caregiving/">AARP</a></p>`},
fees:{t:'App store fees',h:`<ul><li>Apple takes 15% while we make under $1 million a year, and 30% above that. Subscriptions drop to 15% after the first year.</li><li>Google takes 15% on subscriptions.</li><li>Selling from our own website costs about 3% for card fees <i>(estimate)</i>.</li></ul><p class=src><a href="https://developer.apple.com/app-store/small-business-program/">Apple</a> · <a href="https://support.google.com/paymentscenter/answer/112622?hl=en">Google</a></p>`},
table:{t:'Money per year (estimates)',h:`<p><i>Estimates. After a 15% store fee, fixed costs, and support.</i></p><table><tr><th>Paying users</th><th>$9.99 one time</th><th>$19.99 a year</th><th>$4.99 a month Family plan</th></tr>
<tr><td>1,000</td><td>$8.2k (once)</td><td>$16.7k</td><td>$50.6k</td></tr><tr><td>10,000</td><td>$65k (once)</td><td>$150k</td><td>$489k</td></tr><tr><td>100,000</td><td>$725k (once)</td><td>$1.3M to $1.5M</td><td>$4.1M to $4.9M</td></tr></table><p>At 100,000 users, Apple takes 30% in the first year because we would be over $1 million. One-time sales only pay once.</p>`},
ai:{t:'AI brain costs (estimates)',h:`<p><i>Estimate. 20 questions a day is 600 a month. Each question is about 500 words-worth in and 200 out (tokens).</i></p><table><tr><th>Model</th><th>Per person a month</th><th>1k users</th><th>10k users</th><th>100k users</th></tr>
<tr><td>OpenAI gpt-5-mini</td><td>$0.32</td><td>$320</td><td>$3.2k</td><td>$32k</td></tr><tr><td>Gemini 3.5 Flash-Lite</td><td>$0.39</td><td>$390</td><td>$3.9k</td><td>$39k</td></tr><tr><td>xAI grok-4.3</td><td>$0.68</td><td>$680</td><td>$6.8k</td><td>$68k</td></tr><tr><td>xAI grok-4.7</td><td>$1.32</td><td>$1.3k</td><td>$13k</td><td>$132k</td></tr></table><p>Costs are per month. Models that "think out loud" can cost 2 to 5 times more. This only works with the monthly Family plan, not the $9.99 price.</p><p class=src><a href="https://developers.openai.com/api/docs/models/gpt-5-mini">OpenAI</a> · <a href="https://ai.google.dev/gemini-api/docs/pricing">Google</a> · <a href="https://docs.x.ai/developers/pricing">xAI</a></p>`}};
