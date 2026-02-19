export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const quizData: Question[] = [
  {
    id: 1,
    question: "Select the incorrect option with regards to the following statement: 'Customers are happy when__________.'",
    options: [
      "they are being empathised with",
      "they feel cared for and helped",
      "they or their feelings and views are not ignored",
      "they are been recognised and respected",
      "they feel like they are been taken advantage of"
    ],
    correctAnswer: "they feel like they are been taken advantage of",
    explanation:
      "Customers are happy when: they are recognised and respected, they or their feelings and views are not ignored, they do not feel like they are being taken advantage of, they feel cared for and helped, and they are being empathised with."
  },
  {
    id: 2,
    question: "Identify the correct statement from the following statements with respect to valued policies.",
    options: [
      "Valued policies are also called floater policies",
      "Valued policies are also called full Value policies",
      "Valued policies are also called first loss policies",
      "Valued policies are also called admitted value policies",
      "Valued policies are also called declaration policies"
    ],
    correctAnswer: "Valued policies are also called admitted value policies",
    explanation:
      "Valued policies are also called as agreed value or admitted value policies, where the insurer agrees to pay a certain amount in the event of a total loss without taking into account allowances for depreciation or appreciation. This is not relevant for partial losses."
  },
  {
    id: 3,
    question: "All Web Aggregators shall have the word __________ in the name of the Insurance Broking Company.",
    options: [
      "Surveyors",
      "Corporate agents",
      "Third party administrators",
      "Brokers",
      "Insurance web aggregators"
    ],
    correctAnswer: "Insurance web aggregators",
    explanation:
      "All Web Aggregators shall have the word 'Insurance Web Aggregator' or 'Insurance Web Aggregators' in the name of the Insurance Broking Company to reflect its line of activity and to enable the public to differentiate IRDA licensed insurance Web Aggregator from other non-licensed insurance related entities."
  },
  {
    id: 6,
    question: "Identify from the following, the correct option which is not a consequential loss.",
    options: [
      "Insurance cost",
      "Loss of rent",
      "Loss of production",
      "Expenses for cleaning up",
      "Removal of debris"
    ],
    correctAnswer: "Insurance cost",
    explanation:
      "Examples of Consequential losses are: expenses for cleaning up and removal of debris, loss of rent, production, revenue and profits until normalcy is restored, and possible liability losses for third party injuries. Insurance cost is not a consequential loss."
  },
  {
    id: 7,
    question: "Identify from following which is not a point-of-sale person.",
    options: [
      "Broker trained persons for soliciting and marketing the insurance policies",
      "Insurance sales persons of insurance marketing firm",
      "Rural authorised persons of common service centre - special purpose vehicle",
      "Authorised person of web aggregators who can solicit and market all types of insurance policies",
      "All the above persons are point of sale persons"
    ],
    correctAnswer: "All the above persons are point of sale persons",
    explanation:
      "There shall be two types of persons who shall solicit and market insurance policies namely: Insurance agent or specified persons of corporate agent or broker trained persons for soliciting and marketing insurance policies or insurance sales persons of Insurance Marketing Firm or rural authorised persons of CSC-SPV or authorised person of web aggregators who can solicit and market all types of insurance policies. And 'Point of Sales Person' who can solicit and market only certain pre-underwritten products approved by the Authority."
  },
  {
    id: 8,
    question: "Which of the following could lead to adverse selection?",
    options: [
      "Young students enrolling in a Students Accident Policy",
      "Taxis getting insured with private cars at the same rates",
      "Older employees getting covered under an Employee Health insurance",
      "Houses in coastal areas getting insured",
      "None of the above"
    ],
    correctAnswer: "Taxis getting insured with private cars at the same rates",
    explanation:
      "If Taxis which have a higher exposure than private cars are classified with Private Cars, it would lead to Adverse Selection."
  },
  {
    id: 9,
    question: "In which claims does Pay and Recover Arise?",
    options: [
      "Credit Insurance",
      "Motor Third Party",
      "Health Insurance",
      "Employee Compensation",
      "Mediclaim"
    ],
    correctAnswer: "Motor Third Party",
    explanation:
      "The 'Pay and Recover' principle primarily arises in Motor Third Party insurance claims. This principle allows the insurance company to pay the compensation amount to the third party and then recover the same from the insured vehicle owner."
  },
  {
    id: 17,
    question: "Kumar bought 100 bags of Cement at Rs. 1,000 per bag. He insured them for Rs.1,50,000. In a flood loss, 50 bags were destroyed. At the time of loss, Cement was selling at 2,000 per bag. What is the amount of loss Kumar would get from his Insurers?",
    options: [
      "Rs. 1,00,000",
      "Rs. 50,000",
      "Rs. 75,000",
      "Rs. 1,50,000",
      "Rs. 1,25,000"
    ],
    correctAnswer: "Rs. 75,000",
    explanation:
      "The value at Risk is Rs. 2,00,000 (100 bags at Rs.2,000 per bag). Sum Insured is Rs.1,50,000. Hence there is underinsurance. Loss is Rs.1,00,000 (50 bags at Rs.2,000 per bag). Applying underinsurance formula: Loss Assessed X (Sum Insured/Value at Risk). Loss payable after deducting for underinsurance is: 1,00,000 X (150,000/2,00,000) = Rs. 75,000."
  },
  {
    id: 18,
    question: "A health insurance company wants to price its new product. With the following factors, what should be the price? ELEMENTS AMOUNT BURNING COST 1,500 PRE ACCEPTANCE MEDICAL COST 300 ACQUISITON COST 7.00% OPERATING EXPENSES 15.00% PROFIT 3.00%",
    options: [
      "2,400",
      "2,000",
      "3,333",
      "2,250",
      "3,345"
    ],
    correctAnswer: "2,400",
    explanation:
      "Add Premedical Inspection Cost to Burning Cost: 300+1500=1800. 25% Loading on 1800: = 1800/(1-(25%)) = 1800/75% = 2400."
  },
  {
    id: 19,
    question: "Which of the following Policies has an underinsurance Clause?",
    options: [
      "Health Insurance",
      "Fire Insurance",
      "Motor Insurance",
      "Liability Insurance",
      "None of the above"
    ],
    correctAnswer: "Fire Insurance",
    explanation:
      "Underinsurance is a penalty for not insuring to the full extent of the exposure. Fire Insurance has an underinsurance Clause."
  },
  {
    id: 20,
    question: "An Insurer has Insurable Interest in the property insured by them because:",
    options: [
      "They own the property",
      "They are the Contractors and the Reinsurer is the Principal",
      "They stand to benefit by the property's existence and lose by its loss",
      "They are bailees to the Insured Property",
      "They rent the property"
    ],
    correctAnswer: "They stand to benefit by the property's existence and lose by its loss",
    explanation:
      "An Insurer stands to benefit by the continued existence of the property, as they have to pay for the loss of property if it is lost by an Insured Peril."
  },
  {
    id: 21,
    question: "Which of the following is a group of hazards?",
    options: [
      "Storage, Construction, Liability",
      "Flood, Earthquake, Terrorism",
      "Accident, Property, Liability",
      "Age, Method of Packing, Usage",
      "None of the above"
    ],
    correctAnswer: "Age, Method of Packing, Usage",
    explanation:
      "Other groupings have one or more elements which are not hazards. Option D is the only grouping with all the hazards."
  },
  {
    id: 22,
    question: "A risk with a Sum Insured of Rs. 600 Crores is ceded to the Reinsurer under a 20% Quota Share with a Treaty Limit of 500 Crores (100%). If the loss is for Rs. 120 Crores, how much would the Reinsurer pay?",
    options: [
      "Rs. 20 Crores",
      "Rs. 24 Crores",
      "Rs.100 Crores",
      "Rs.120 Crores",
      "Rs. 230 Crores"
    ],
    correctAnswer: "Rs. 20 Crores",
    explanation:
      "Since the Treaty Limit is Rs.500 Crores, the Insurer can cede only 20% of 500 Crores, which is 100 Crores. Total Sum Insured is 600 Crores, of which Reinsurer's share of the exposure is 100 Crores. Therefore they would be liable for 1/6 of the loss which is 120/6 = 20 Crores."
  },
  {
    id: 23,
    question: "It is necessary to interpret contracts in case of __________.",
    options: [
      "an agreement",
      "a consensus",
      "an ambiguity",
      "an arbitration",
      "a claim"
    ],
    correctAnswer: "an ambiguity",
    explanation:
      "Contracts should be written in a simple language which could be understood by the parties to the contract. But disputes do arise in insurance contracts on what is the intent of a particular phrase. There are many such disputes, and rules have also evolved on how to interpret contracts in case there is an ambiguity in a particular clause."
  },
  {
    id: 24,
    question: "What is the investment income of the company if Net earned premium = 16,400, Net Commission = 700, Operating expenses = 4300, Profit = 3200, Net Incurred claims for the Current year - Operating Expenses for the Current year = 19,600? (all amounts are in Rupees crores)",
    options: [
      "Rs.5000 crores",
      "Rs.200 crores",
      "Rs.5100 crores",
      "Rs.300 crores",
      "Rs.1300 crores"
    ],
    correctAnswer: "Rs.5000 crores",
    explanation:
      "To calculate the investment income: Investment Income = Profit + Net Incurred Claims + Net Commission + Operating Expenses - Net Earned Premium = 3200 + 16400 + 700 + 4300 - 19600 = 24600 - 19600 = 5000. Therefore, the investment income of the company is Rs. 5000 crores."
  },
  {
    id: 25,
    question: "Identify the CORRECT statement.",
    options: [
      "Pricing of insurance products is an easy task",
      "Costs are known even before risk is assumed in insurance",
      "Costs could never be known in insurance",
      "The price should be determined even before the costs are known in insurance",
      "The insurer could ask the customers for more payment, when the claims are higher"
    ],
    correctAnswer: "The price should be determined even before the costs are known in insurance",
    explanation:
      "Pricing of insurance products is complex, involving actuarial science, risk assessment, and statistical modelling. The actual costs (claims) are unknown when a policy is written. While exact costs are unknown beforehand, insurers use statistical models to estimate expected costs. The price should be determined even before the costs are known in insurance — this is correct. Insurance premiums must be set before actual claims occur. Insurance policies are contracts with fixed premiums for a specific period; insurers cannot typically demand more payment for existing ones due to higher claims."
  },
  {
    id: 26,
    question: "Under __________, the victim has a right to seek compensation directly from the insurer.",
    options: [
      "Employee Compensation Act",
      "Motor Vehicle Act",
      "Public liability",
      "Product liability",
      "Tort"
    ],
    correctAnswer: "Motor Vehicle Act",
    explanation:
      "In Motor Third Party Liability, the Person who makes a claim need not be a party to the contract. The claim under a Motor Third Party is made by the victim or the legal heirs of the victim. Such victims are entitled, under law, to directly sue the vehicle Insurer and seek compensation directly from the insurer."
  },
  {
    id: 27,
    question: "Price is defined as __________.",
    options: [
      "Cost + Interest",
      "Cost - Profit",
      "Cost - Depreciation",
      "Cost + Profit",
      "Cost - Interest"
    ],
    correctAnswer: "Cost + Profit",
    explanation:
      "Price is typically defined as the amount a buyer pays for a product or service. It is calculated as the cost of producing or delivering the product/service (including materials, labor, overhead, etc.) plus the profit margin that the seller desires. This ensures that the business covers its expenses and earns a return on its investment."
  },
  {
    id: 28,
    question: "Identify the situation that does not involve a risk.",
    options: [
      "There is likelihood of a burglary tomorrow",
      "The cargo ship may not reach the harbour tomorrow",
      "Madhav could fall ill tomorrow",
      "The sun is not likely to rise in the east tomorrow",
      "It is likely to rain tomorrow"
    ],
    correctAnswer: "The sun is not likely to rise in the east tomorrow",
    explanation:
      "Risk is the possibility of a deviation from an expected outcome. There is no risk that the sun will not rise in the east tomorrow. Day after day, year after year and centuries after centuries, the sun unfailingly rises in the east. Therefore, there is no risk of the sun not rising in the east tomorrow morning. But not all things are as sure as the sunrise. In all the other situations, there is an expected outcome and there is a possibility of a deviation from the expected outcome."
  },
  {
    id: 29,
    question: "__________ is the best risk financing method.",
    options: [
      "Availing a subsidy",
      "Building up capital",
      "Availing loans",
      "Seeking help from the government",
      "Building up morale"
    ],
    correctAnswer: "Building up capital",
    explanation:
      "The enterprise should have adequate Risk Financing tools to finance losses arising out of retained risks. Building up capital is the best risk financing method. Increased capital would increase the enterprise's ability to tide over adversities. Developing access to credit is another method of risk financing. Alternative Risk Transfer instruments are also available in the market to fund losses from retained risks. The enterprise could also build up dedicated reserves to address retained risks."
  },
  {
    id: 30,
    question: "Given, an insurance company has a Gross direct premium of Rs.1800 cr. and it neither accepted nor placed reinsurance, then its net premium would be __________.",
    options: [
      "Rs.3550 cr.",
      "Rs.1800 cr.",
      "Rs.700 cr.",
      "Data provided is insufficient",
      "Nil"
    ],
    correctAnswer: "Rs.1800 cr.",
    explanation:
      "The correct answer is Rs. 1800 crores. Gross Direct Premium is the total premium collected by the insurance company directly from policyholders before any deductions for reinsurance. Since the insurance company neither accepted nor placed reinsurance, the amounts for reinsurance accepted and reinsurance ceded are both zero. Net Premium = Gross Direct Premium + Reinsurance Accepted - Reinsurance Ceded = 1800 + 0 - 0 = Rs.1800 crores."
  },
  {
    id: 31,
    question: "Interest should exist __________, in marine insurance.",
    options: [
      "at the time of the proposal",
      "at the time of the loss",
      "at the time of both the proposal and also the loss",
      "only when the journey ends",
      "never"
    ],
    correctAnswer: "at the time of the loss",
    explanation:
      "In non life insurance, other than Marine Insurance, Insurable Interest should exist at the time of Proposal, and also at the time of loss. In Marine Insurance, Insurable Interest need not exist at the time of Proposal, but it should exist at the time of loss."
  },
  {
    id: 32,
    question: "Identify the situation wherein underinsurance is applicable.",
    options: [
      "Value at risk is 60 crores Sum insured under Policy X: 35 crores Sum insured under Policy Y: 30 crores",
      "Value at risk is 60 crores Sum insured under Policy X: 35 crores Sum insured under Policy Y: 25 crores",
      "Value at risk is 60 crores Sum insured under Policy X: 30 crores Sum insured under Policy Y: 30 crores",
      "Value at risk is 60 crores Sum insured under Policy X: 30 crores Sum insured under Policy Y: 25 crores",
      "Value at risk is 60 crores Sum insured under Policy X: 25 crores Sum insured under Policy Y: 35 crores"
    ],
    correctAnswer: "Value at risk is 60 crores Sum insured under Policy X: 30 crores Sum insured under Policy Y: 25 crores",
    explanation:
      "Underinsurance is an important concept designed to ensure that the Insured customer pays the premium for the complete exposure. Underinsurance is also known as the Condition of Average. Underinsurance is applicable when Value at risk is 60 crores whereas Sum insured under Policy X: 30 crores and Policy Y: 25 crores, i.e. total sum insured is (30+25) 55 crores, which is less than the value at risk."
  },
  {
    id: 33,
    question: "Identify the statement that is INCORRECT.",
    options: [
      "Less information is required for smaller risks",
      "Information required varies with the nature of risk",
      "A risk with an exposure for a lower value is considered a small risk",
      "A Proposal form is sufficient for smaller risks",
      "Less information is required for larger risks"
    ],
    correctAnswer: "Less information is required for larger risks",
    explanation:
      "The extent of information required depends on the nature of the risk being offered for insurance. For smaller risks, minimum information is sufficient, whereas for larger risks, detailed information is necessary. Small and big risks here do not refer to the size of the risk. Small risk means the value at risk is relatively small; large risks would mean the value at risk is considerably high. For smaller risks, the Proposal Form is sufficient. For high value risks, a more deliberated approach would be required."
  },
  {
    id: 34,
    question: "Net Commission is an income if __________.",
    options: [
      "the commission on reinsurance ceded is more than the sum of commission on direct business and commission on reinsurance accepted",
      "the commission on reinsurance accepted is more than the sum of commission on direct business and Commission on reinsurance ceded",
      "the commission on reinsurance ceded is less than the commission on reinsurance accepted",
      "there is no Commission in reinsurance business",
      "the commission on direct business is more than the sum of Commission on reinsurance accepted and Commission on reinsurance ceded"
    ],
    correctAnswer: "the commission on reinsurance ceded is less than the commission on reinsurance accepted",
    explanation:
      "Net Commission becomes an income when the commission earned (e.g., on reinsurance accepted) exceeds the commission paid (e.g., on reinsurance ceded). In this case, if the commission accepted is greater than the commission ceded, the company records a positive income from the net commission. This typically occurs when the business earned from reinsurance is more favorable than the business ceded to other reinsurers."
  },
  {
    id: 35,
    question: "Underinsurance is considered __________.",
    options: [
      "an incentive",
      "loss reduction",
      "a benefit",
      "a penalty",
      "an indemnity"
    ],
    correctAnswer: "a penalty",
    explanation:
      "Underinsurance is a penalty for not insuring to the full extent of the exposure. In most of the cases, the amount of loss would not be upto the Value at Risk. Therefore, people could be tempted to insure for a lesser value than the value at risk. But as the value at risk goes up, the probability for loss also goes up. Therefore the premium should also go up. In order to penalise people who are not paying adequate premium in relation to their exposure, underinsurance clause is applied."
  },
  {
    id: 36,
    question: "A data table with lower volatility is preferred because __________.",
    options: [
      "lower variation signifies better marketing",
      "a wide variation is good for insurance",
      "prediction is better with lower variation",
      "lesser volatility signifies more market share",
      "prediction is better with a wide variation"
    ],
    correctAnswer: "prediction is better with lower variation",
    explanation:
      "Volatility in loss distribution is measured as the Standard Deviation of the data set. Standard Deviation is a measure of how much the values of a given data set differ from the average. When data has lesser volatility (lower variation), it is more stable and consistent. This consistency makes it easier to identify patterns and trends, which in turn improves the accuracy of predictions. High volatility, on the other hand, introduces unpredictability, making it harder to derive meaningful and reliable forecasts."
  },
  {
    id: 38,
    question: "__________ is the opposite of stability.",
    options: [
      "Stable",
      "Steady",
      "Volatility",
      "Firm",
      "Strong"
    ],
    correctAnswer: "Volatility",
    explanation:
      "An enterprise should record consistent results to satisfy the needs of the investors. Insurance insulates the enterprise from volatilities caused by unforeseen losses. But for insurance, the results of an enterprise could have wild swings because of adverse events causing losses. Insurance, by compensating such losses, provides stability to the enterprise and to its operations."
  },
  {
    id: 39,
    question: "When the duty of care is __________ it gives rise to Tort.",
    options: [
      "compiled with",
      "completed",
      "followed",
      "adhered to",
      "breached"
    ],
    correctAnswer: "breached",
    explanation:
      "Tort is a civil wrong. Each person owes a duty of care to others. The duty of care is to conduct one's activities in such a manner as to not cause injury to another person or damage to another person's property. If that duty of care is breached, and another person is injured or another person's property is damaged, the negligent person has to compensate the loss suffered by that another person."
  },
  {
    id: 40,
    question: "__________ of the Insurance Act deals with non-disclosure in life insurance policies.",
    options: [
      "Section 27",
      "Section 64 VB",
      "Section 41",
      "Section 45",
      "Section 101"
    ],
    correctAnswer: "Section 45",
    explanation:
      "The parties to an Insurance Contract are generally free to decide the terms of the contract. Neither the law nor the Regulator mandate what should be the terms of coverage of an insurance contract. However, Section 45 of the Insurance Act, 1938 restricts the authority of the Insurer to declare a Policy void. Under Section 45, the Insurer, even in the case of a misrepresentation or fraud by the Insured, cannot question the Policy after three years from the commencement of insurance."
  },
  {
    id: 41,
    question: "Identify the factors that result in adverse selection.",
    options: [
      "clubbing good and bad risks",
      "categorizing goods based on hazard",
      "categorizing risks based on loss probabilities",
      "categorizing buildings based on construction",
      "categorizing risks based on hazards"
    ],
    correctAnswer: "clubbing good and bad risks",
    explanation:
      "Adverse selection occurs when there's an imbalance in information between buyers and sellers—typically in insurance—where high-risk individuals are more likely to purchase insurance, and low-risk individuals may opt out, especially if both are charged the same premium. Clubbing good and bad risks means treating both low-risk and high-risk individuals the same. This leads to mispricing: low-risk individuals are overcharged, and high-risk individuals are undercharged. As a result, low-risk individuals may leave, leaving behind a pool of mostly high-risk individuals—this is classic adverse selection."
  },
  {
    id: 42,
    question: "Identify the correct statement. a) All contracts are contracts of Utmost good faith b) All contracts are contracts of good faith",
    options: [
      "Neither are correct",
      "Only b",
      "Only a",
      "Both are correct",
      "Cannot decide"
    ],
    correctAnswer: "Only b",
    explanation:
      "All contracts are contracts of good faith. The parties to the contract have a duty to answer all questions asked truthfully and to not to actively conceal any fact. However, in ordinary contracts, the parties are not expected to disclose facts which are not asked. Insurance contracts are, however, contracts of utmost good faith. The parties to the contract have a duty to disclose all material facts even without being asked. This is called the Duty of Disclosure."
  },
  {
    id: 43,
    question: "__________ past would not be indicative of the future.",
    options: [
      "Never",
      "During peaceful times",
      "Always",
      "During upheavals",
      "During normal times"
    ],
    correctAnswer: "During upheavals",
    explanation:
      "The Law of Large Numbers is not a magic formula that Insurers use to estimate the probability of future occurrences. Past may not be indicative of future. No matter how many records were studied, and over how long a period they were studied, the estimate could go seriously wrong if there is a disruption or upheaval. For instance, an Insurer's estimate on the number of hospitalisations could go seriously wrong in a year of pandemic. Terrorism, Cyber Crime, Climate Change and such other emerging risks could also spring nasty surprises."
  },
  {
    id: 44,
    question: "The __________ is required to prove that the loss is because of an Excluded Peril.",
    options: [
      "surveyor",
      "broker",
      "insured",
      "insurer",
      "agent"
    ],
    correctAnswer: "insurer",
    explanation:
      "Insurance is purchased for mitigating losses. Generally, it is the Insured customer who has to prove that there is a loss caused to the property or interest insured under the Policy. If the Policy covers All Risks, or all Perils other than those excluded, it is the duty of the customer to prove that the property has suffered an accidental loss. If the Insured customer has proved that the loss is due to the operation of an Insured Peril or that the loss is accidental, and if the Insurer disagrees, then it is his duty to prove that the loss has occurred due to the operation of an excluded Peril."
  },
  {
    id: 45,
    question: "What is the condition that requires the customer to bear a portion of each and every admissible loss known as?",
    options: [
      "crucible",
      "under insurance",
      "deductible",
      "over insurance",
      "direction"
    ],
    correctAnswer: "deductible",
    explanation:
      "Policies could have an absolute deductible or a deductible which is expressed as a percentage of the admissible loss. For example, the Policy could have an absolute deductible of, say Rs.25,000 on each and every loss. Or the deductible could be expressed as a percentage, say 5% of each and every claim. Such deductibles should be reduced from the amount payable."
  },
  {
    id: 47,
    question: "Identify the feature of a Pure risk.",
    options: [
      "only loss",
      "voluntary",
      "conscious",
      "loss or gain",
      "not insurable"
    ],
    correctAnswer: "only loss",
    explanation:
      "Risks can be classified into 'Pure and speculative risks'. Pure Risks are those that cause a loss, and never a gain. For example, a car could be damaged by an Earthquake or not, a factory could be burnt by fire or not, a person could die due to an illness or not. A Pure Risk does not require a voluntary action on the part of the person to trigger a loss. Thus, Pure Risks are beyond the control of those who suffer from the losses they are exposed to."
  },
  {
    id: 48,
    question: "Under the preview of which act does the premium paid for an insurance policy and the proceeds of claim fall under?",
    options: [
      "The Insurance Act",
      "The RBI Act",
      "The FEMA Act",
      "The Income Tax Act",
      "The Wealth Tax Act"
    ],
    correctAnswer: "The Income Tax Act",
    explanation:
      "Insurance premiums paid and proceeds of insurance claims are governed under the Income Tax Act."
  },
  {
    id: 49,
    question: "When the premium is paid just once at the start of the policy, such policy is called ___________.",
    options: [
      "One premium policy",
      "Limited premium policy",
      "Single premium policy",
      "Special premium policy",
      "Bulk premium policy"
    ],
    correctAnswer: "Single premium policy",
    explanation:
      "When all the premiums are paid in the first year itself, at the start of the policy, it is called a Single Premium Policy."
  },
  {
    id: 50,
    question: "______ drafts the Institute of cargo clauses.",
    options: [
      "Newyork underwriters",
      "London underwriters",
      "Tokyo underwriters",
      "Marine underwriters",
      "India underwriters"
    ],
    correctAnswer: "London underwriters",
    explanation:
      "Export/import shipments are covered under the terms of Institute Cargo Clauses of Institutes of London Underwriters, according to international practice. Local clauses are used for inland transit policies."
  },
];
