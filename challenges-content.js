// challenges-content.js
// Content library for Business Needs Summary

const challengesContent = {
  
  // ============================================================================
  // STEP 1: DISCOVER - Challenge Identification Content
  // Used when user is selecting which challenges they face
  // ============================================================================
  
  discover: {
    "alignment": {
      id: "alignment",
      name: "Alignment & Getting on the Same Page",
      
      whatThisMeans: "Different teams or departments working toward different goals. Sales promises what operations can't deliver. Leadership can't agree on priorities for the quarter. Everyone works hard but toward different outcomes.",
      
      symptoms: [
        "Meetings where everyone nods but nothing changes afterward",
        "Same decisions getting re-litigated weeks later",
        "Different managers giving employees conflicting direction",
        "Teams duplicating work because nobody coordinated",
        "\"But I thought we agreed on...\" conversations"
      ],
      
      whyThisHappens: "Alignment breaks down when there's no shared mental model of how work flows through the organization. Different functions see different parts of the system and optimize for their piece without understanding dependencies."
    },
    
    "process": {
      id: "process",
      name: "Process Breakdowns & Bottlenecks",
      
      whatThisMeans: "Work gets stuck waiting for approvals, handoffs, or decisions. Simple tasks require too many steps. Things that should take hours take days. Bottlenecks form around specific people or approval points.",
      
      symptoms: [
        "Orders sitting in queue for days before anyone touches them",
        "\"I'm waiting on...\" as the most common status update",
        "Customer requests bouncing between three different people",
        "Reports that take hours to compile manually",
        "One person who \"has to touch everything\" creating delays"
      ],
      
      whyThisHappens: "Processes accumulate steps over time without anyone removing outdated requirements. Bottlenecks form when decision authority isn't distributed appropriately. Teams optimize their local process without seeing downstream impacts."
    },
    
    "handoffs": {
      id: "handoffs",
      name: "Handoffs & Communication Gaps",
      
      whatThisMeans: "Information gets lost when work moves between people or teams. Customer requests fall through cracks between departments. Nobody knows who's supposed to follow up. Same questions get asked over and over at each step.",
      
      symptoms: [
        "\"I didn't know I was supposed to...\" conversations",
        "Customer requests that disappear between departments",
        "Work delivered to the next team missing critical context",
        "Rework because the receiving team didn't understand requirements",
        "Email chains where people keep getting added because nobody knows who owns it"
      ],
      
      whyThisHappens: "Handoffs fail when there's no shared understanding of what the receiving team needs to succeed. Teams optimize for their own output without considering how it becomes someone else's input. Tribal knowledge sits in people's heads instead of being made explicit."
    },
    
    "workarounds": {
      id: "workarounds",
      name: "People Working Around the System",
      
      whatThisMeans: "Everyone has personal spreadsheets because the official system doesn't work. Informal phone calls to get things done faster than the official process. Shadow processes that bypass broken workflows. Personal workarounds that become unofficial procedure.",
      
      symptoms: [
        "\"I keep my own tracking spreadsheet because...\"",
        "Direct calls/texts to skip official channels",
        "Different people doing the same task completely differently",
        "Critical knowledge that only exists in someone's head",
        "New employees asking \"how do you really do this?\""
      ],
      
      whyThisHappens: "Systems fail to match how work actually happens. Official processes get designed without input from people doing the work. Technology gets implemented without understanding actual workflow. Workarounds emerge as rational responses to broken systems."
    },
    
    "scaling": {
      id: "scaling",
      name: "Scaling & Growth Pains",
      
      whatThisMeans: "Systems that worked for 10 people break at 30 people. What the founder used to handle personally now falls through cracks. Tribal knowledge that never got documented. Quality control that was informal is now inconsistent.",
      
      symptoms: [
        "\"We used to just know what to do, now new people are lost\"",
        "Key processes that only work if specific person does them",
        "Quality varies wildly depending on who does the work",
        "Training that's \"shadow me for a week\"",
        "Decisions that bottle up at the top because authority wasn't distributed"
      ],
      
      whyThisHappens: "Implicit coordination that worked at small scale doesn't scale. Knowledge concentrated in founders' heads needs to distribute. Systems designed for one context break when volume/complexity increases. Cultural transmission through proximity fails as teams grow."
    },
    
    "technology": {
      id: "technology",
      name: "Technology & System Integration",
      
      whatThisMeans: "Entering the same information in three different places. Data that doesn't sync between systems. New software nobody uses because it doesn't match workflow. Manual workarounds because systems don't talk to each other.",
      
      symptoms: [
        "\"Why do I have to enter this twice?\"",
        "Reports requiring manual data compilation from multiple sources",
        "Customer data living in spreadsheets instead of the CRM",
        "Systems bought to solve problems but creating new ones",
        "IT projects that don't deliver promised benefits"
      ],
      
      whyThisHappens: "Technology gets selected based on features without understanding actual workflow. Systems get implemented top-down without user input. Integration challenges underestimated. Process design happens after technology selection instead of before."
    },
    
    "priorities": {
      id: "priorities",
      name: "Priorities & Decision-Making",
      
      whatThisMeans: "Everything feels urgent, nothing gets finished. Not sure if you should invest in people, processes, or technology. Different stakeholders pushing for different priorities. Analysis paralysis when facing multiple good options. Constant priority shifting based on whoever spoke last.",
      
      symptoms: [
        "\"Everything is a priority\" (which means nothing is)",
        "Projects that start but never finish",
        "Teams thrashing between initiatives",
        "Decisions that get made but then reversed",
        "Lack of clear decision-making authority"
      ],
      
      whyThisHappens: "No shared framework for evaluating tradeoffs. Unclear decision-making authority. Reactive mode instead of strategic mode. Missing feedback loops to learn if decisions were good. Fear of committing to one path."
    },
    
    "quality": {
      id: "quality",
      name: "Customer or Quality Issues",
      
      whatThisMeans: "Customers complaining about the same thing over and over. Quality inconsistencies depending on who does the work. Mistakes that happen even though people know better. Gap between what you think you deliver and what customers receive.",
      
      symptoms: [
        "Same customer complaint appearing repeatedly",
        "\"That's not what I expected\" from customers",
        "Rework because quality wasn't right the first time",
        "Customer satisfaction scores trending down",
        "Defensive reactions when quality issues surface"
      ],
      
      whyThisHappens: "Gap between intention and execution. No feedback loops from customers to delivery teams. Quality standards not made explicit. Variation in execution without understanding why. Systems that make it hard to do the right thing."
    },
    
    "onboarding": {
      id: "onboarding",
      name: "New Hire Onboarding",
      
      whatThisMeans: "New people asking the same questions because nothing's written down. Taking months to learn things that should take weeks. Heavy reliance on one person to train everyone. New hires not knowing who to ask for what. High early turnover because people feel lost.",
      
      symptoms: [
        "\"Just ask Sarah, she'll show you\"",
        "New hires productive at 6 months when it should be 6 weeks",
        "Critical knowledge only existing in specific people's heads",
        "Same training questions over and over",
        "New employees saying \"I wish someone had told me that on day one\""
      ],
      
      whyThisHappens: "Tacit knowledge never made explicit. Training designed for exceptions instead of common path. No documented processes. Onboarding designed once and never updated. Experienced employees too busy to train properly."
    },
    
    "roles": {
      id: "roles",
      name: "Unclear Roles & Responsibilities",
      
      whatThisMeans: "Tasks fall through cracks because everyone assumes someone else will do it. Duplicate work because people don't know others are handling it. Conflicts over who has decision-making authority. Confusion about who owns which customer relationships. \"That's not my job\" versus \"I thought you were doing that.\"",
      
      symptoms: [
        "\"Who's supposed to handle this?\" conversations",
        "Work that doesn't get done because everyone thought someone else owned it",
        "Toe-stepping where two people do the same thing",
        "Unclear escalation paths",
        "New initiatives where nobody knows who's driving"
      ],
      
      whyThisHappens: "Roles designed when company was different size. Responsibilities accumulated organically without clarity. Reorganizations that didn't clarify new boundaries. Matrix structures without clear decision rights. Fast growth outpacing role definition."
    }
  },
  
  // ============================================================================
  // STEP 3: MAP - Intersection Patterns (Very Short)
  // Used when showing how challenges compound each other
  // ============================================================================
  
  intersections: {
    "alignment-process": {
      challenges: ["alignment", "process"],
      label: "Alignment × Process Breakdowns",
      impact: "Duplicated effort on the wrong things. Energy goes to fixing symptoms rather than root causes."
    },
    
    "alignment-handoffs": {
      challenges: ["alignment", "handoffs"],
      label: "Alignment × Handoffs",
      impact: "Teams pass work to each other without shared understanding of priorities or context."
    },
    
    "alignment-priorities": {
      challenges: ["alignment", "priorities"],
      label: "Alignment × Priorities",
      impact: "Constant reprioritization because no shared framework for making tradeoff decisions."
    },
    
    "alignment-roles": {
      challenges: ["alignment", "roles"],
      label: "Alignment × Unclear Roles",
      impact: "Nobody knows who decides, so decisions either don't get made or get made multiple times."
    },
    
    "process-handoffs": {
      challenges: ["process", "handoffs"],
      label: "Process Breakdowns × Handoffs",
      impact: "Work gets stuck at handoff points. Receiving teams don't know when to expect work or in what state."
    },
    
    "process-workarounds": {
      challenges: ["process", "workarounds"],
      label: "Process Breakdowns × Workarounds",
      impact: "Official process broken, everyone has their own way. Impossible to improve what you can't see."
    },
    
    "process-technology": {
      challenges: ["process", "technology"],
      label: "Process Breakdowns × Technology",
      impact: "Systems designed for ideal process, not actual process. Technology can't fix broken workflow."
    },
    
    "handoffs-quality": {
      challenges: ["handoffs", "quality"],
      label: "Handoffs × Quality Issues",
      impact: "Information loss at handoffs leads to rework and customer-facing errors."
    },
    
    "handoffs-roles": {
      challenges: ["handoffs", "roles"],
      label: "Handoffs × Unclear Roles",
      impact: "Work falls through cracks when nobody knows who owns the receiving end of a handoff."
    },
    
    "workarounds-technology": {
      challenges: ["workarounds", "technology"],
      label: "Workarounds × Technology",
      impact: "Data integrity lost. Multiple versions of truth. Systems you paid for become useless."
    },
    
    "workarounds-onboarding": {
      challenges: ["workarounds", "onboarding"],
      label: "Workarounds × Onboarding",
      impact: "New hires learn the workaround, not the system. Knowledge doesn't transfer cleanly."
    },
    
    "scaling-onboarding": {
      challenges: ["scaling", "onboarding"],
      label: "Scaling × Onboarding",
      impact: "Vicious cycle: grow faster, train worse, quality drops, experienced staff overwhelmed."
    },
    
    "scaling-roles": {
      challenges: ["scaling", "roles"],
      label: "Scaling × Unclear Roles",
      impact: "Old roles don't fit new size. Authority concentrated at top creates bottlenecks."
    },
    
    "scaling-quality": {
      challenges: ["scaling", "quality"],
      label: "Scaling × Quality Issues",
      impact: "Informal quality control that worked small doesn't scale. Variation increases with team size."
    },
    
    "technology-quality": {
      challenges: ["technology", "quality"],
      label: "Technology × Quality Issues",
      impact: "Systems that don't match workflow make it harder to do quality work consistently."
    },
    
    "priorities-process": {
      challenges: ["priorities", "process"],
      label: "Priorities × Process Breakdowns",
      impact: "Can't prioritize improvements because you don't know where the real bottlenecks are."
    },
    
    "priorities-roles": {
      challenges: ["priorities", "roles"],
      label: "Priorities × Unclear Roles",
      impact: "Everyone has different priorities because nobody knows who has authority to set them."
    },
    
    "quality-onboarding": {
      challenges: ["quality", "onboarding"],
      label: "Quality Issues × Onboarding",
      impact: "New hires don't learn quality standards. Variation increases as team grows."
    },
    
    "onboarding-roles": {
      challenges: ["onboarding", "roles"],
      label: "Onboarding × Unclear Roles",
      impact: "New hires don't know who to ask for what. Learn by trial and error instead of clear guidance."
    }
  },
  
  // ============================================================================
  // STEP 4: RECOMMENDATIONS - Service Design Starting Points
  // Used in final summary to provide actionable next steps
  // ============================================================================
  
  recommendations: {
    "alignment": {
      approaches: [
        {
          name: "Journey Mapping Session",
          description: "Map the end-to-end customer/user journey from one person's perspective. Identify all handoff points between teams. Surface where different teams have different assumptions about the same process. Creates shared understanding of the whole system."
        },
        {
          name: "Stakeholder Alignment Workshop",
          description: "Get key decision-makers in a room with a simple prioritization exercise. Make implicit assumptions explicit. Document who owns what and where authority sits. Establish decision-making protocols going forward."
        },
        {
          name: "Service Blueprint Development",
          description: "Document frontstage (what customers see) and backstage (internal operations). Show how different departments support the same customer outcome. Identify breakpoints where teams lose sight of shared goals. Creates visual artifact everyone can reference."
        }
      ],
      
      firstSteps: [
        "Run a 90-minute alignment workshop with leadership using a simple prioritization matrix",
        "Document the output in a one-page \"What we agreed on\" summary",
        "Identify one cross-functional process to map together",
        "Create a standing rhythm for alignment check-ins (monthly or quarterly)"
      ]
    },
    
    "process": {
      approaches: [
        {
          name: "Process Mapping Workshop",
          description: "Walk through the current state process step-by-step with people who do the work. Document every handoff, approval, wait state, and decision point. Time each step to identify where delays actually occur. Separate value-add steps from waste."
        },
        {
          name: "Value Stream Analysis",
          description: "Identify what actually creates value for the end customer. Highlight non-value-add steps (waiting, rework, unnecessary approvals). Calculate cycle time vs. touch time. Prioritize removing highest-friction steps."
        },
        {
          name: "Constraint Identification",
          description: "Find the true bottleneck (not where people think it is). Understand why that constraint exists. Determine if it's a capacity issue, authority issue, or information issue. Design interventions specific to constraint type."
        }
      ],
      
      firstSteps: [
        "Pick one high-volume process causing the most pain",
        "Map current state with the people who actually do the work (not managers)",
        "Time each step over 5-10 real examples",
        "Identify the top 3 bottlenecks and their root causes",
        "Run a focused workshop to redesign around the primary constraint"
      ]
    },
    
    "handoffs": {
      approaches: [
        {
          name: "Handoff Mapping",
          description: "Document every point where work passes between people/teams. For each handoff, identify: what's being transferred, what format, what context is needed. Surface implicit assumptions each side makes. Design explicit handoff protocols."
        },
        {
          name: "Jobs-to-Be-Done Analysis",
          description: "Understand what the receiving team is trying to accomplish. Identify what information/format they actually need (vs. what they get). Redesign handoffs based on downstream needs. Create feedback loops so handoff quality improves over time."
        },
        {
          name: "Service Blueprint with Swimlanes",
          description: "Show all actors involved in a process. Visualize every interaction and handoff point. Identify where communication breaks down. Design better handoff mechanisms (templates, checklists, shared systems)."
        }
      ],
      
      firstSteps: [
        "Identify the handoff causing the most pain (usually between sales/delivery or intake/fulfillment)",
        "Interview both sides: what do you need to receive? what do you actually get?",
        "Map the gap between ideal handoff and current reality",
        "Create a simple handoff template or checklist",
        "Run a pilot for 2 weeks and refine based on feedback"
      ]
    },
    
    "workarounds": {
      approaches: [
        {
          name: "Actual vs. Ideal State Mapping",
          description: "Document how work actually gets done (not how it's supposed to be done). Understand why each workaround exists. Identify which workarounds add value vs. which are pure waste. Design new processes based on actual behavior, not ideal behavior."
        },
        {
          name: "Contextual Inquiry",
          description: "Shadow people doing the work in their real environment. Observe workarounds in action without judgment. Ask \"why do you do it that way?\" to understand constraints. Surface pain points that drove workaround creation."
        },
        {
          name: "Participatory Design Session",
          description: "Bring together people who do the work daily. Share all the workarounds on the table. Collaboratively design a system that eliminates the need for workarounds. Get buy-in by involving people in the solution."
        }
      ],
      
      firstSteps: [
        "Catalog the most common workarounds (ask \"how do you really do this?\")",
        "For each workaround, identify what it's solving for",
        "Determine if the workaround is better than the official process",
        "Either: formalize the workaround, or fix the system so workaround isn't needed",
        "Pilot the new approach with people who created the workarounds"
      ]
    },
    
    "scaling": {
      approaches: [
        {
          name: "Knowledge Extraction & Documentation",
          description: "Identify critical processes living in people's heads. Run working sessions to make tacit knowledge explicit. Create lightweight documentation (not comprehensive manuals). Focus on principles and decision frameworks, not step-by-step procedures."
        },
        {
          name: "Operating Model Design",
          description: "Map how decisions currently get made. Identify which decisions need to scale (distribute authority). Design new decision-making structures for current size. Create clear escalation paths."
        },
        {
          name: "Process Standardization (with flexibility)",
          description: "Document core processes that need consistency. Identify where variation is okay vs. where it's not. Create templates and examples, not rigid scripts. Build in feedback loops for continuous improvement."
        }
      ],
      
      firstSteps: [
        "List the top 3 processes causing problems as you scale",
        "Run knowledge extraction sessions with people who do them well",
        "Document the \"good enough\" version (not perfect documentation)",
        "Train 2-3 people on the documented process and refine based on their feedback",
        "Distribute decision-making authority so the founder isn't the bottleneck"
      ]
    },
    
    "technology": {
      approaches: [
        {
          name: "Workflow Mapping Before Technology",
          description: "Document how work currently flows through people and systems. Identify where manual handoffs occur. Understand what data needs to move between what actors. Design the ideal workflow first, then select technology to support it."
        },
        {
          name: "User Journey Through Systems",
          description: "Map how a single transaction (order, patient, case) moves through all systems. Identify every point where data gets re-entered or transformed. Understand why each system exists and what job it does. Find integration opportunities or consolidation opportunities."
        },
        {
          name: "Technology Audit",
          description: "List all systems currently in use. Document what each system is supposed to do vs. what people actually use it for. Identify redundancies and gaps. Create a rationalized technology roadmap."
        }
      ],
      
      firstSteps: [
        "Pick one workflow causing the most technology pain",
        "Map the current state showing all systems involved",
        "Interview 3-5 people who use those systems daily",
        "Identify the highest-pain integration point",
        "Determine if you need: better integration, process redesign, or different technology"
      ]
    },
    
    "priorities": {
      approaches: [
        {
          name: "Decision-Making Framework Design",
          description: "Create simple, shared criteria for prioritization. Design a prioritization matrix everyone uses (like the Risk/Pain matrix). Establish who has authority to make what decisions. Document the decision process, not just the outcomes."
        },
        {
          name: "Strategic Alignment Session",
          description: "Get leadership aligned on top 3-5 strategic goals. Map proposed initiatives against strategic goals. Kill or defer anything not supporting a top goal. Create visual roadmap showing what happens when."
        },
        {
          name: "Retrospective Decision Analysis",
          description: "Look back at major decisions from last 6 months. Evaluate outcomes: what worked? what didn't? Identify patterns in good vs. bad decisions. Codify lessons learned into decision-making criteria."
        }
      ],
      
      firstSteps: [
        "Run a simple prioritization workshop with decision-makers",
        "Use a 2x2 matrix (like Business Risk vs. Current Pain)",
        "Force-rank all competing priorities",
        "Commit to top 3, defer or kill the rest",
        "Create a standing monthly check-in to review and adjust"
      ]
    },
    
    "quality": {
      approaches: [
        {
          name: "Customer Journey Mapping",
          description: "Map the end-to-end customer experience from their perspective. Identify pain points and moments of delight. Surface gaps between what you intend and what they experience. Prioritize improvements based on customer impact."
        },
        {
          name: "Service Quality Audit",
          description: "Define what \"good\" looks like for key touchpoints. Observe actual service delivery. Measure gap between standard and reality. Identify root causes of variation."
        },
        {
          name: "Feedback Loop Design",
          description: "Create mechanisms to hear customer voice earlier. Connect front-line staff directly to customer feedback. Close the loop so customers know you heard them. Make quality issues visible so they can be addressed."
        }
      ],
      
      firstSteps: [
        "Collect the top 5 recurring customer complaints",
        "For each complaint, trace back to root cause (not surface symptom)",
        "Observe the process that creates that outcome",
        "Identify if it's a process issue, training issue, or system issue",
        "Design intervention specific to root cause"
      ]
    },
    
    "onboarding": {
      approaches: [
        {
          name: "Onboarding Journey Mapping",
          description: "Map the new hire experience week-by-week. Identify when frustration peaks. Understand what information is needed when. Design onboarding that matches learning progression."
        },
        {
          name: "Knowledge Extraction Sessions",
          description: "Sit with high-performers and document what they do. Make implicit decision-making explicit. Create lightweight process guides (not heavy manuals). Focus on \"how to think about this\" not just \"steps to follow.\""
        },
        {
          name: "Progressive Onboarding Design",
          description: "Design first week, first month, first quarter separately. Start with core skills, layer complexity over time. Build in check-ins and feedback loops. Create peer mentoring structure."
        }
      ],
      
      firstSteps: [
        "Interview last 3 new hires: what was confusing? what helped?",
        "Document the top 5 processes new hires need to learn",
        "Create simple guides or videos for those 5 processes",
        "Assign a peer mentor for each new hire",
        "Add 30/60/90 day check-ins to gather feedback and improve onboarding"
      ]
    },
    
    "roles": {
      approaches: [
        {
          name: "RACI Matrix Development",
          description: "For key processes, map who is Responsible, Accountable, Consulted, Informed. Surface overlaps and gaps. Clarify decision-making authority. Document and communicate to whole team."
        },
        {
          name: "Responsibility Mapping Workshop",
          description: "List all major activities/processes. For each, identify: who does it, who owns outcomes, who decides. Resolve conflicts and gaps collaboratively. Create visual map of responsibility distribution."
        },
        {
          name: "Organizational Design Session",
          description: "Understand what work needs to be done. Design roles around work, not people. Clarify reporting relationships and decision authority. Build in flexibility for growth."
        }
      ],
      
      firstSteps: [
        "Identify the top 3 areas where role confusion causes problems",
        "Run a working session to map responsibilities for those areas",
        "Create simple RACI chart or responsibility matrix",
        "Get explicit agreement from all parties",
        "Communicate broadly and revisit in 30 days"
      ]
    }
  },
  
  // ============================================================================
  // QUADRANT GUIDANCE - For interpreting priority matrix placements
  // ============================================================================
  
  quadrants: {
    "high-risk-high-pain": {
      label: "High Risk / High Pain",
      action: "ACT NOW",
      interpretation: "This issue threatens your core operations AND causes daily friction. Addressing it creates immediate relief and prevents larger problems.",
      color: "#e53e3e"
    },
    
    "high-risk-low-pain": {
      label: "High Risk / Low Pain",
      action: "MONITOR & PREVENT",
      interpretation: "Not hurting much yet, but poses significant risk if ignored. Schedule time to address before it becomes urgent.",
      color: "#dd6b20"
    },
    
    "low-risk-high-pain": {
      label: "Low Risk / High Pain",
      action: "QUICK WINS",
      interpretation: "Causing daily frustration but won't sink the business. Great candidates for quick wins that boost morale.",
      color: "#d69e2e"
    },
    
    "low-risk-low-pain": {
      label: "Low Risk / Low Pain",
      action: "DEFER",
      interpretation: "Not urgent and not critical. Address after higher-priority items are resolved.",
      color: "#718096"
    }
  }
};
