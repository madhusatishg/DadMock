export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const quizData: Question[] = [
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
    explanation: "The parties to an Insurance Contract are generally free to decide the terms of the contract. Neither the law nor the Regulator mandate what should be the terms of coverage of an insurance contract. However, Section 45 of the Insurance Act, 1938 restricts the authority of the Insurer to declare a Policy void. Under Section 45, the Insurer, even in the case of a misrepresentation or fraud by the Insured, cannot question the Policy after three years from the commencement of insurance."
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
    explanation: "Adverse selection occurs when there's an imbalance in information between buyers and sellers—typically in insurance—where high-risk individuals are more likely to purchase insurance, and low-risk individuals may opt out, especially if both are charged the same premium. Clubbing good and bad risks means treating both low-risk and high-risk individuals the same. This leads to mispricing: low-risk individuals are overcharged, and high-risk individuals are undercharged. As a result, low-risk individuals may leave, leaving behind a pool of mostly high-risk individuals—this is classic adverse selection."
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
    explanation: "All contracts are contracts of good faith. The parties to the contract have a duty to answer all questions asked truthfully and to not actively conceal any fact. However, in ordinary contracts, the parties are not expected to disclose facts which are not asked. Insurance contracts are, however, contracts of utmost good faith. The parties to the contract have a duty to disclose all material facts even without being asked. This is called the Duty of Disclosure."
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
    explanation: "The Law of Large Numbers is not a magic formula that Insurers use to estimate the probability of future occurrences. Past may not be indicative of future. No matter how many records were studied, and over how long a period they were studied, the estimate could go seriously wrong if there is a disruption or upheaval. For instance, an Insurer's estimate on the number of hospitalisations could go seriously wrong in a year of pandemic, especially a pandemic which is unforeseen in the past century. Such upheavals could upset the estimates. Terrorism, Cyber Crime, Climate Change and such other emerging risks could also spring nasty surprises. The Insurer should factor in the vulnerability of the model to such external shocks and adjust the probability estimates."
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
    explanation: "Insurance is purchased for mitigating losses. Generally, it is the Insured customer who has to prove that there is a loss caused to the property or interest insured under the Policy. If the Policy covers All Risks, or all Perils other than those excluded, it is the duty of the customer to prove that the property has suffered an accidental loss. He need not prove which particular Peril caused the loss, as long as he proves that the loss is accidental. If the Insured customer has proved that the loss is due to the operation of an Insured Peril (in named Peril Policies) or that the loss is accidental (in All Risks Policies), and if the Insurer disagrees, then it is his duty to prove that the loss has occurred due to the operation of an excluded Peril."
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
    explanation: "Policies could have an absolute deductible or a deductible which is expressed as a percentage of the admissible loss. For example, the Policy could have an absolute deductible of, say Rs.25,000 on each and every loss. Or the deductible could be expressed as a percentage, say 5% of each and every claim. Such deductibles should be reduced from the amount payable."
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
    explanation: "Risks can be classified into 'Pure and speculative risks'. Pure Risks are those that cause a loss, and never a gain. For example: A car could be damaged by an Earthquake or not. A factory could be burnt by fire or not. A person could die due to an illness or not. A Pure Risk does not require a voluntary action on the part of the person to trigger a loss. Thus, Pure Risks are beyond the control of those who suffer from the losses they are exposed to."
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
    explanation: "The premium paid for an insurance policy and the proceeds of claim fall under the preview of The Income Tax Act."
  },
  {
    id: 49,
    question: "When the premium is paid just once at the start of the policy, such policy is called ___________",
    options: [
      "One premium policy",
      "Limited premium policy",
      "Single premium policy",
      "Special premium policy",
      "Bulk premium policy"
    ],
    correctAnswer: "Single premium policy",
    explanation: "When all the premiums are paid in the first year itself, at the start of the policy, it's called a Single Premium Policy."
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
    explanation: "Export/import shipments are covered under the terms of Institute Cargo Clauses of Institutes of London Underwriters, according to international practice. Local clauses are used for inland transit policies."
  },
  // Additional placeholder questions to make 50 total
  {
    id: 1,
    question: "What is the primary purpose of insurance?",
    options: [
      "To make profit",
      "To transfer risk",
      "To avoid taxes",
      "To invest money",
      "To save money"
    ],
    correctAnswer: "To transfer risk",
    explanation: "Insurance is primarily designed to transfer risk from an individual or entity to an insurance company in exchange for a premium."
  },
  {
    id: 2,
    question: "Which principle of insurance states that the insured should not profit from insurance?",
    options: [
      "Utmost good faith",
      "Indemnity",
      "Subrogation",
      "Contribution",
      "Proximate cause"
    ],
    correctAnswer: "Indemnity",
    explanation: "The principle of indemnity ensures that insurance compensates the insured for actual loss suffered, preventing them from making a profit from the insurance claim."
  },
  {
    id: 3,
    question: "What is a premium in insurance?",
    options: [
      "The claim amount",
      "The deductible",
      "The amount paid for coverage",
      "The policy limit",
      "The bonus amount"
    ],
    correctAnswer: "The amount paid for coverage",
    explanation: "A premium is the amount of money that the policyholder pays to the insurance company in exchange for insurance coverage."
  },
  {
    id: 4,
    question: "Which type of insurance covers damage to your own vehicle?",
    options: [
      "Liability insurance",
      "Comprehensive insurance",
      "Third-party insurance",
      "Health insurance",
      "Fire insurance"
    ],
    correctAnswer: "Comprehensive insurance",
    explanation: "Comprehensive insurance covers damage to your own vehicle from various causes including accidents, theft, fire, and natural disasters."
  },
  {
    id: 5,
    question: "What does the term 'underwriting' mean in insurance?",
    options: [
      "Writing policies",
      "Assessing and pricing risk",
      "Selling insurance",
      "Processing claims",
      "Marketing insurance"
    ],
    correctAnswer: "Assessing and pricing risk",
    explanation: "Underwriting is the process of evaluating the risk associated with insuring a person or asset and determining the appropriate premium to charge."
  },
  {
    id: 6,
    question: "What is reinsurance?",
    options: [
      "Renewing an insurance policy",
      "Insurance for insurance companies",
      "Multiple insurance policies",
      "Re-evaluating claims",
      "Secondary insurance"
    ],
    correctAnswer: "Insurance for insurance companies",
    explanation: "Reinsurance is insurance that an insurance company purchases to protect itself against large losses by transferring part of the risk to another insurer."
  },
  {
    id: 7,
    question: "Which principle requires both parties to disclose all material facts?",
    options: [
      "Indemnity",
      "Subrogation",
      "Utmost good faith",
      "Contribution",
      "Insurable interest"
    ],
    correctAnswer: "Utmost good faith",
    explanation: "The principle of utmost good faith (uberrima fides) requires both the insurer and the insured to disclose all material facts honestly and completely."
  },
  {
    id: 8,
    question: "What is a policy excess or deductible?",
    options: [
      "Extra coverage",
      "Bonus payment",
      "Amount paid by insured before claim",
      "Maximum claim amount",
      "Premium discount"
    ],
    correctAnswer: "Amount paid by insured before claim",
    explanation: "A deductible or excess is the amount that the insured must pay out of pocket before the insurance company pays the remaining claim amount."
  },
  {
    id: 9,
    question: "What does 'insurable interest' mean?",
    options: [
      "Interest rate on premium",
      "Financial stake in insured item",
      "Insurance company's profit",
      "Policy renewal interest",
      "Bonus interest"
    ],
    correctAnswer: "Financial stake in insured item",
    explanation: "Insurable interest means the policyholder must have a legitimate financial interest in the insured subject matter and would suffer a financial loss if damage or loss occurs."
  },
  {
    id: 10,
    question: "What is the principle of subrogation?",
    options: [
      "Sharing insurance costs",
      "Insurer's right to recover from third party",
      "Multiple insurance policies",
      "Policy cancellation",
      "Premium calculation"
    ],
    correctAnswer: "Insurer's right to recover from third party",
    explanation: "Subrogation allows the insurer to step into the shoes of the insured and recover the claim amount from a third party responsible for the loss."
  },
  {
    id: 11,
    question: "What is a life insurance beneficiary?",
    options: [
      "The insurance agent",
      "The person who receives benefits",
      "The premium payer",
      "The underwriter",
      "The policy issuer"
    ],
    correctAnswer: "The person who receives benefits",
    explanation: "A beneficiary is the person or entity designated to receive the death benefit or policy proceeds when the insured person passes away."
  },
  {
    id: 12,
    question: "What does 'actuarial science' deal with?",
    options: [
      "Legal aspects of insurance",
      "Marketing insurance products",
      "Risk assessment using mathematics",
      "Policy documentation",
      "Claims processing"
    ],
    correctAnswer: "Risk assessment using mathematics",
    explanation: "Actuarial science uses mathematics, statistics, and financial theory to assess risk in insurance and finance industries."
  },
  {
    id: 13,
    question: "What is a no-claim bonus?",
    options: [
      "Extra premium",
      "Discount for not making claims",
      "Penalty for claims",
      "Policy cancellation fee",
      "Additional coverage"
    ],
    correctAnswer: "Discount for not making claims",
    explanation: "A no-claim bonus is a discount on the premium offered to policyholders who have not made any claims during the previous policy period."
  },
  {
    id: 14,
    question: "What is third-party insurance?",
    options: [
      "Insurance for three people",
      "Coverage for damage to others",
      "Three insurance companies",
      "Third policy renewal",
      "Group insurance"
    ],
    correctAnswer: "Coverage for damage to others",
    explanation: "Third-party insurance covers liability for damage or injury caused to other people or their property, but does not cover the policyholder's own losses."
  },
  {
    id: 15,
    question: "What is the waiting period in health insurance?",
    options: [
      "Time to pay premium",
      "Period before coverage starts",
      "Claim processing time",
      "Policy renewal period",
      "Grace period"
    ],
    correctAnswer: "Period before coverage starts",
    explanation: "A waiting period is the time during which certain benefits or coverage for specific conditions are not available after the policy is purchased."
  },
  {
    id: 16,
    question: "What is sum assured?",
    options: [
      "Premium amount",
      "Deductible amount",
      "Guaranteed minimum payout",
      "Bonus amount",
      "Claim rejection amount"
    ],
    correctAnswer: "Guaranteed minimum payout",
    explanation: "Sum assured is the guaranteed amount that the insurance company promises to pay to the beneficiary in case of an event covered by the policy."
  },
  {
    id: 17,
    question: "What does IRDA stand for?",
    options: [
      "Insurance Regulatory Development Authority",
      "Indian Railway Development Agency",
      "International Risk Development Association",
      "Insurance and Reinsurance Development Act",
      "Indian Regulatory Development Authority"
    ],
    correctAnswer: "Insurance Regulatory Development Authority",
    explanation: "IRDA (now IRDAI - Insurance Regulatory and Development Authority of India) is the regulatory body for insurance and reinsurance industries in India."
  },
  {
    id: 18,
    question: "What is a grace period in insurance?",
    options: [
      "Claim settlement time",
      "Extra time to pay premium",
      "Policy cooling period",
      "Free look period",
      "Waiting period"
    ],
    correctAnswer: "Extra time to pay premium",
    explanation: "A grace period is the additional time given after the premium due date during which the policyholder can pay the premium without the policy lapsing."
  },
  {
    id: 19,
    question: "What is a rider in insurance?",
    options: [
      "Insurance agent",
      "Additional coverage option",
      "Policy document",
      "Premium payer",
      "Claim form"
    ],
    correctAnswer: "Additional coverage option",
    explanation: "A rider is an additional benefit or coverage that can be added to a basic insurance policy, usually for an extra premium."
  },
  {
    id: 20,
    question: "What is term insurance?",
    options: [
      "Short-term health coverage",
      "Pure life coverage for specific term",
      "Temporary vehicle insurance",
      "Seasonal insurance",
      "Trial insurance"
    ],
    correctAnswer: "Pure life coverage for specific term",
    explanation: "Term insurance is a type of life insurance that provides coverage for a specified period. If the insured dies during the term, the death benefit is paid to beneficiaries."
  },
  {
    id: 21,
    question: "What is surrender value?",
    options: [
      "Claim amount",
      "Premium refund",
      "Amount received on policy cancellation",
      "Maturity benefit",
      "Death benefit"
    ],
    correctAnswer: "Amount received on policy cancellation",
    explanation: "Surrender value is the amount the policyholder receives from the insurance company when they decide to terminate the policy before its maturity date."
  },
  {
    id: 22,
    question: "What is co-insurance?",
    options: [
      "Two insurance policies",
      "Sharing risk between insurers",
      "Joint policy holders",
      "Company insurance",
      "Corporate insurance"
    ],
    correctAnswer: "Sharing risk between insurers",
    explanation: "Co-insurance is a situation where multiple insurance companies share the risk and premium of insuring a particular risk in agreed proportions."
  },
  {
    id: 23,
    question: "What is a claims adjuster?",
    options: [
      "Person who sells policies",
      "Person who investigates claims",
      "Premium calculator",
      "Policy writer",
      "Insurance broker"
    ],
    correctAnswer: "Person who investigates claims",
    explanation: "A claims adjuster is a professional who investigates insurance claims to determine the extent of the insurance company's liability."
  },
  {
    id: 24,
    question: "What is the principle of contribution?",
    options: [
      "Multiple policies share claim cost",
      "Premium payment method",
      "Charitable insurance",
      "Group insurance",
      "Social insurance"
    ],
    correctAnswer: "Multiple policies share claim cost",
    explanation: "The principle of contribution applies when a person has multiple insurance policies covering the same risk. Each insurer contributes proportionately to the loss."
  },
  {
    id: 25,
    question: "What is a proposal form?",
    options: [
      "Claim form",
      "Application for insurance",
      "Premium receipt",
      "Policy document",
      "Renewal notice"
    ],
    correctAnswer: "Application for insurance",
    explanation: "A proposal form is a document that contains questions about the risk to be insured. It is filled by the proposer when applying for insurance coverage."
  },
  {
    id: 26,
    question: "What is mortality rate in life insurance?",
    options: [
      "Death claim percentage",
      "Expected death rate in population",
      "Policy lapse rate",
      "Accident rate",
      "Disease rate"
    ],
    correctAnswer: "Expected death rate in population",
    explanation: "Mortality rate is the measure of the number of deaths in a particular population, used by actuaries to calculate premiums and reserves."
  },
  {
    id: 27,
    question: "What is a insurance policy schedule?",
    options: [
      "Premium payment dates",
      "Summary of key policy details",
      "Claim procedure",
      "Agent contact list",
      "Policy exclusions"
    ],
    correctAnswer: "Summary of key policy details",
    explanation: "A policy schedule is a document that provides a summary of the key details of an insurance policy including coverage amount, premium, term, and other important information."
  },
  {
    id: 28,
    question: "What are exclusions in an insurance policy?",
    options: [
      "Benefits included",
      "Things not covered",
      "Premium discounts",
      "Special benefits",
      "Bonus features"
    ],
    correctAnswer: "Things not covered",
    explanation: "Exclusions are specific conditions, circumstances, or types of loss that are not covered by an insurance policy."
  },
  {
    id: 29,
    question: "What is double insurance?",
    options: [
      "Two policies from same insurer",
      "Multiple policies for same risk",
      "Insurance for couples",
      "Twice the coverage",
      "Duplicate policy"
    ],
    correctAnswer: "Multiple policies for same risk",
    explanation: "Double insurance occurs when the same subject matter and risk is insured with two or more insurers simultaneously."
  },
  {
    id: 30,
    question: "What is a peril in insurance?",
    options: [
      "Policy benefit",
      "Premium calculation",
      "Cause of loss",
      "Claim amount",
      "Coverage type"
    ],
    correctAnswer: "Cause of loss",
    explanation: "A peril is a specific risk or cause of loss covered by an insurance policy, such as fire, theft, earthquake, or flood."
  },
  {
    id: 31,
    question: "What is an insurance broker?",
    options: [
      "Insurance company employee",
      "Independent intermediary",
      "Claims officer",
      "Underwriter",
      "Actuary"
    ],
    correctAnswer: "Independent intermediary",
    explanation: "An insurance broker is an independent intermediary who represents the customer and helps them find suitable insurance coverage from various insurance companies."
  },
  {
    id: 32,
    question: "What is maturity benefit?",
    options: [
      "Death benefit",
      "Amount paid at policy end",
      "Claim amount",
      "Surrender value",
      "Bonus amount"
    ],
    correctAnswer: "Amount paid at policy end",
    explanation: "Maturity benefit is the amount paid by the insurance company to the policyholder when the policy term expires and the insured person is alive."
  },
  {
    id: 33,
    question: "What is an endorsement in insurance?",
    options: [
      "Policy recommendation",
      "Amendment to policy",
      "Claim approval",
      "Premium receipt",
      "Policy renewal"
    ],
    correctAnswer: "Amendment to policy",
    explanation: "An endorsement is a written amendment or addition to an existing insurance policy that modifies the coverage, terms, or conditions."
  },
  {
    id: 34,
    question: "What is the free-look period?",
    options: [
      "Free insurance trial",
      "Time to review and return policy",
      "Claim-free period",
      "Premium holiday",
      "Waiting period"
    ],
    correctAnswer: "Time to review and return policy",
    explanation: "The free-look period is a specified time (usually 15-30 days) during which a policyholder can review their policy and return it for a full refund if not satisfied."
  },
  {
    id: 35,
    question: "What is a captive insurance company?",
    options: [
      "Government-owned insurer",
      "Insurer owned by insured",
      "Bankrupt insurance company",
      "Merged insurance company",
      "Foreign insurance company"
    ],
    correctAnswer: "Insurer owned by insured",
    explanation: "A captive insurance company is an insurance company established and owned by a non-insurance parent company to insure the risks of its parent and affiliated companies."
  },
  {
    id: 36,
    question: "What is the principle of proximate cause?",
    options: [
      "Nearest hospital rule",
      "Closest family member",
      "Nearest direct cause of loss",
      "Approximate claim amount",
      "Similar policies"
    ],
    correctAnswer: "Nearest direct cause of loss",
    explanation: "The principle of proximate cause determines which peril is the dominant or most important cause of a loss when multiple causes are involved, to determine if a claim is valid."
  },
  {
    id: 37,
    question: "What is a cover note?",
    options: [
      "Policy summary",
      "Temporary insurance proof",
      "Claim form",
      "Premium notice",
      "Coverage explanation"
    ],
    correctAnswer: "Temporary insurance proof",
    explanation: "A cover note is a temporary document issued by an insurer as evidence of insurance coverage until the actual policy document is prepared and issued."
  },
  {
    id: 38,
    question: "What is a lapsed policy?",
    options: [
      "Expired policy",
      "Policy with unpaid premiums",
      "Cancelled policy",
      "Matured policy",
      "Surrendered policy"
    ],
    correctAnswer: "Policy with unpaid premiums",
    explanation: "A lapsed policy is an insurance policy that has been terminated due to non-payment of premiums within the grace period."
  },
  {
    id: 39,
    question: "What is the purpose of a surveyor in insurance?",
    options: [
      "Sell policies",
      "Assess loss or damage",
      "Calculate premiums",
      "Issue policies",
      "Collect premiums"
    ],
    correctAnswer: "Assess loss or damage",
    explanation: "A surveyor is an expert appointed by the insurance company to inspect and assess the extent of loss or damage to insured property and estimate the claim amount."
  },
  {
    id: 46,
    question: "What is the purpose of insurance regulation?",
    options: [
      "Increase premiums",
      "Protect policyholders",
      "Maximize insurer profits",
      "Reduce claims",
      "Eliminate competition"
    ],
    correctAnswer: "Protect policyholders",
    explanation: "Insurance regulation aims to protect policyholders by ensuring insurance companies operate fairly, maintain solvency, and honor their commitments to policyholders."
  }
];
