export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const quizData: Question[] = [
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
  {
    id: 49,
    question:
      "When the premium is paid just once at the start of the policy, such policy is called ___________.",
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
    id: 48,
    question:
      "Under the preview of which act does the premium paid for an insurance policy and the proceeds of claim fall under?",
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
      "Pure Risks are those that result only in loss and never in gain. Examples include damage due to earthquake, fire, or death due to illness. These risks are beyond the control of individuals and do not involve voluntary action."
  },
  {
    id: 45,
    question:
      "What is the condition that requires the customer to bear a portion of each and every admissible loss known as?",
    options: [
      "crucible",
      "under insurance",
      "deductible",
      "over insurance",
      "direction"
    ],
    correctAnswer: "deductible",
    explanation:
      "A deductible is the portion of the loss that the insured must bear. It can be a fixed amount or a percentage of each admissible claim and is deducted from the amount payable by the insurer."
  },
  {
    id: 44,
    question:
      "The __________ is required to prove that the loss is because of an Excluded Peril.",
    options: [
      "surveyor",
      "broker",
      "insured",
      "insurer",
      "agent"
    ],
    correctAnswer: "insurer",
    explanation:
      "If the insured proves that an accidental loss has occurred, the insurer must prove that the loss was caused due to an excluded peril if they wish to deny the claim."
  },
  {
    id: 43,
    question:
      "__________ past would not be indicative of the future.",
    options: [
      "Never",
      "During peaceful times",
      "Always",
      "During upheavals",
      "During normal times"
    ],
    correctAnswer: "During upheavals",
    explanation:
      "The Law of Large Numbers may fail during disruptions or upheavals such as pandemics, terrorism, cybercrime, or climate change, where past data may not reliably predict future occurrences."
  },
  {
    id: 42,
    question:
      "Identify the correct statement. a) All contracts are contracts of Utmost good faith b) All contracts are contracts of good faith",
    options: [
      "Neither are correct",
      "Only b",
      "Only a",
      "Both are correct",
      "Cannot decide"
    ],
    correctAnswer: "Only b",
    explanation:
      "All contracts are contracts of good faith. Insurance contracts are a special category that require utmost good faith, where all material facts must be disclosed even if not asked."
  },
  {
    id: 41,
    question:
      "Identify the factors that result in adverse selection.",
    options: [
      "clubbing good and bad risks",
      "categorizing goods based on hazard",
      "categorizing risks based on loss probabilities",
      "categorizing buildings based on construction",
      "categorizing risks based on hazards"
    ],
    correctAnswer: "clubbing good and bad risks",
    explanation:
      "Adverse selection occurs when good and bad risks are treated the same, leading to mispricing. Low-risk individuals may exit the pool, leaving behind a higher-risk group."
  },
  {
    id: 40,
    question:
      "__________ of the Insurance Act deals with non-disclosure in life insurance policies.",
    options: [
      "Section 27",
      "Section 64 VB",
      "Section 41",
      "Section 45",
      "Section 101"
    ],
    correctAnswer: "Section 45",
    explanation:
      "Section 45 of the Insurance Act, 1938 restricts the insurer from questioning a policy after three years from commencement, even in cases of misrepresentation or fraud."
  }
];
