const STORIES=[
  {
    "title": "The ads go dark",
    "concept": "Strategic interdependence",
    "takeaway": "Before changing your move, ask what others can still do.",
    "icon": "01",
    "nodes": {
      "start": {
        "line": "You run a cigarette company. TV ads are about to be banned. Will you make less money—or more?",
        "dialogue": [
          "You run a cigarette company. TV ads are about to be banned. Will you make less money—or more?"
        ],
        "visual": {
          "type": "miniHook"
        },
        "choices": [
          {
            "label": "I’d make less",
            "next": "expect_hurt",
            "set": {
              "openingPrediction": "hurt"
            }
          },
          {
            "label": "I’d make more",
            "next": "expect_help",
            "set": {
              "openingPrediction": "help"
            }
          }
        ],
        "mood": "thinking"
      },
      "baseline": {
        "line": "Your customers pay you five coins. Your ad costs two. That leaves you three.",
        "dialogue": [
          "Your customers pay you five coins. Your ad costs two. That leaves you three."
        ],
        "visual": {
          "type": "miniMarket",
          "a": true,
          "b": true,
          "money": true,
          "animate": "baseline"
        },
        "choices": [
          {
            "label": "What if I stop paying?",
            "next": "decision"
          }
        ],
        "mood": "speaking",
        "help": "Each customer brings 1 coin. Running your ad costs 2 coins."
      },
      "decision": {
        "line": "Your rival is keeping its ad. Do you want to keep yours, or stop paying?",
        "dialogue": [
          "Your rival is keeping its ad. Do you want to keep yours, or stop paying?"
        ],
        "visual": {
          "type": "miniMarket",
          "a": true,
          "b": true,
          "money": true
        },
        "choices": [
          {
            "label": "Keep my ads · Pay 2",
            "next": "kept",
            "set": {
              "adChoice": "keep"
            }
          },
          {
            "label": "Switch mine off · Pay 0",
            "next": "switched",
            "set": {
              "adChoice": "off"
            }
          }
        ],
        "mood": "thinking",
        "help": "Switch yours off while your rival’s ad stays on, and three customers move to your rival."
      },
      "kept": {
        "line": "Your five customers stayed. You paid two coins for the ad and kept three.",
        "dialogue": [
          "Your five customers stayed. You paid two coins for the ad and kept three."
        ],
        "visual": {
          "type": "miniMarket",
          "a": true,
          "b": true,
          "money": true,
          "animate": "baseline"
        },
        "choices": [
          {
            "label": "What if I switched off?",
            "next": "alternative"
          }
        ],
        "mood": "speaking"
      },
      "switched": {
        "line": "You saved two coins. But three customers went to your rival. You’re left with two.",
        "dialogue": [
          "You saved two coins. But three customers went to your rival. You’re left with two."
        ],
        "visual": {
          "type": "miniMarket",
          "a": false,
          "b": true,
          "money": true,
          "animate": "solo"
        },
        "choices": [
          {
            "label": "Then both ads stop",
            "next": "both_intro"
          }
        ],
        "mood": "surprised",
        "help": "Before: 3 coins → Now: 2 coins."
      },
      "alternative": {
        "line": "If you switched yours off, three customers would go to your rival. You’d keep two coins.",
        "dialogue": [
          "If you switched yours off, three customers would go to your rival. You’d keep two coins."
        ],
        "visual": {
          "type": "miniMarket",
          "a": false,
          "b": true,
          "money": true,
          "animate": "solo"
        },
        "choices": [
          {
            "label": "Then both ads stop",
            "next": "both_intro"
          }
        ],
        "mood": "surprised",
        "help": "Replay: your other choice."
      },
      "both_intro": {
        "line": "Now the ban arrives. Your rival has to switch its ad off too.",
        "dialogue": [
          "Now the ban arrives. Your rival has to switch its ad off too."
        ],
        "visual": {
          "type": "miniMarket",
          "a": false,
          "b": true,
          "money": true
        },
        "choices": [
          {
            "label": "Watch what changes",
            "next": "both_off"
          }
        ],
        "mood": "speaking",
        "help": "In our game, when both ads are off, five customers buy from each company again."
      },
      "both_off": {
        "line": "Three customers come back. No ad bill this time—you keep all five coins.",
        "dialogue": [
          "Three customers come back. No ad bill this time—you keep all five coins."
        ],
        "visual": {
          "type": "miniMarket",
          "a": false,
          "b": false,
          "money": true,
          "animate": "both"
        },
        "choices": [
          {
            "label": "What changed?",
            "next": "explain"
          }
        ],
        "mood": "speaking"
      },
      "explain": {
        "line": "Your ad was off both times. So why did you keep more money when your rival’s ad went off too?",
        "dialogue": [
          "Your ad was off both times. So why did you keep more money when your rival’s ad went off too?"
        ],
        "visual": {
          "type": "miniCompare"
        },
        "choices": [
          {
            "label": "Save my explanation",
            "next": "discovery"
          }
        ],
        "mood": "thinking",
        "input": "causalExplanation",
        "help": "Use your own words. “I’m not sure” is useful too."
      },
      "discovery": {
        "line": "Your choice stayed the same. Your rival’s choice changed what you got.",
        "dialogue": [
          "Your choice stayed the same. Your rival’s choice changed what you got."
        ],
        "visual": {
          "type": "miniConcept"
        },
        "choices": [
          {
            "label": "Try a different situation",
            "next": "transfer"
          }
        ],
        "mood": "celebrating"
      },
      "transfer": {
        "line": "Same arrival. Different result?",
        "dialogue": [
          "Same arrival. Different result?"
        ],
        "visual": {
          "type": "miniTransfer"
        },
        "choices": [
          {
            "label": "Save my answer",
            "next": "reflection"
          }
        ],
        "mood": "thinking",
        "input": "transferExplanation"
      },
      "reflection": {
        "line": "You still arrived at three. But when everyone else was late, you had to wait.",
        "dialogue": [
          "You still arrived at three. But when everyone else was late, you had to wait."
        ],
        "visual": {
          "type": "miniTransferResult"
        },
        "choices": [
          {
            "label": "Connect this to the cigarette ban",
            "next": "history_bridge"
          }
        ],
        "mood": "speaking",
        "help": "Before changing your move, ask: what will the other person do?"
      },
      "history_bridge": {
        "line": "That was our little market. Did real cigarette companies benefit too?",
        "dialogue": [
          "That was our little market. Did real cigarette companies benefit too?"
        ],
        "visual": {
          "type": "cards",
          "cards": [
            [
              "The real case",
              "The TV and radio cigarette-ad ban"
            ]
          ]
        },
        "choices": [
          {
            "label": "See what the evidence suggested",
            "next": "evidence"
          }
        ],
        "mood": "speaking",
        "help": "Our coins were a teaching example, not measured company profits."
      },
      "evidence": {
        "title": "The real case",
        "line": "Investors seemed to expect the established cigarette companies to benefit. Making life harder for new brands was one possible reason.",
        "dialogue": [
          "Investors seemed to expect the established cigarette companies to benefit. Making life harder for new brands was one possible reason."
        ],
        "visual": {
          "type": "brands",
          "known": true
        },
        "choices": [
          {
            "label": "Save this discovery",
            "next": "finish"
          },
          {
            "label": "Why would new brands struggle?",
            "next": "entry"
          },
          {
            "label": "When could our result change?",
            "next": "limit"
          }
        ],
        "mood": "speaking"
      },
      "entry": {
        "title": "Recognition matters",
        "line": "People already knew the old brands. Without TV and radio ads, new brands lost a way to get noticed.",
        "dialogue": [
          "People already knew the old brands. Without TV and radio ads, new brands lost a way to get noticed."
        ],
        "visual": {
          "type": "brands",
          "known": true
        },
        "choices": [
          {
            "label": "Save this discovery",
            "next": "finish"
          }
        ],
        "mood": "speaking"
      },
      "limit": {
        "title": "The assumption matters",
        "line": "We kept the same ten customers in our game. If fewer people bought anything, saving on ads might not make up for that.",
        "dialogue": [
          "We kept the same ten customers in our game. If fewer people bought anything, saving on ads might not make up for that."
        ],
        "visual": {
          "type": "cards",
          "cards": [
            [
              "Saved ad costs",
              "Compare with lost income"
            ]
          ]
        },
        "choices": [
          {
            "label": "Save this discovery",
            "next": "finish"
          }
        ],
        "mood": "speaking"
      },
      "expect_hurt": {
        "line": "Maybe. You could lose customers. But your rival is losing its TV ads too. Let’s see why that matters.",
        "dialogue": [
          "Maybe. You could lose customers. But your rival is losing its TV ads too. Let’s see why that matters."
        ],
        "visual": {
          "type": "miniRole"
        },
        "choices": [
          {
            "label": "Show me my rival",
            "next": "meet_rival"
          }
        ],
        "mood": "speaking",
        "help": "Let’s use a small game. You’re blue. Your goal: keep more coins."
      },
      "expect_help": {
        "line": "Maybe. You’ll save on ads. But could you lose customers too? Let’s see what happens.",
        "dialogue": [
          "Maybe. You’ll save on ads. But could you lose customers too? Let’s see what happens."
        ],
        "visual": {
          "type": "miniRole"
        },
        "choices": [
          {
            "label": "Show me my rival",
            "next": "meet_rival"
          }
        ],
        "mood": "speaking",
        "help": "Let’s use a small game. You’re blue. Your goal: keep more coins."
      },
      "meet_rival": {
        "line": "Here’s your rival. You sell the same thing. Right now, you both run ads—and each has five customers.",
        "dialogue": [
          "Here’s your rival. You sell the same thing. Right now, you both run ads—and each has five customers."
        ],
        "visual": {
          "type": "miniMarket",
          "a": true,
          "b": true,
          "intro": true
        },
        "choices": [
          {
            "label": "See what I earn",
            "next": "baseline"
          }
        ],
        "mood": "speaking"
      }
    }
  },
  {
    "title": "Your idea works. Your boss says no.",
    "concept": "Rationality & incentives",
    "takeaway": "Before repeating your pitch, ask what accepting it would cost the other person.",
    "icon": "02",
    "nodes": {
      "start": {
        "title": "Five hours saved. Still a no.",
        "line": "Your reporting tool passed its trial. Your manager says: “Keep doing it manually.” What will you ask?",
        "visual": {
          "type": "work",
          "cards": [
            [
              "Your trial",
              "5 hours saved / week"
            ],
            [
              "Manager",
              "Keep the old report"
            ]
          ]
        },
        "choices": [
          {
            "label": "Do you trust the results?",
            "next": "results"
          },
          {
            "label": "What worries you about using it?",
            "next": "concern"
          }
        ],
        "mood": "thinking",
        "dialogue": [
          "Your reporting tool works. It saves five hours every week.",
          "Your manager says, “Keep doing it manually.”",
          "What will you ask your manager?"
        ]
      },
      "results": {
        "title": "The result is not the concern.",
        "line": "“The saving looks real. I’m worried about how leadership will use it.”",
        "visual": {
          "type": "work",
          "cards": [
            [
              "Trial",
              "Works"
            ],
            [
              "Unanswered",
              "What happens to the team?"
            ]
          ]
        },
        "choices": [
          {
            "label": "Ask about the team",
            "next": "concern"
          }
        ],
        "mood": "speaking"
      },
      "concern": {
        "title": "Less work—or a smaller team?",
        "line": "“Reported workload helps justify staffing. I’m worried fewer hours will mean losing a position.” This is a concern, not a confirmed decision.",
        "visual": {
          "type": "work",
          "cards": [
            [
              "You see",
              "Time freed"
            ],
            [
              "Manager fears",
              "Position removed"
            ]
          ]
        },
        "choices": [
          {
            "label": "Ask leadership about staffing",
            "next": "leadership"
          },
          {
            "label": "Show what freed time could cover",
            "next": "backlog"
          }
        ],
        "mood": "speaking",
        "dialogue": [
          "Your manager says: “Fewer reported hours might mean losing a team position.”",
          "That’s their concern, not a confirmed decision.",
          "What will you do with that information?"
        ]
      },
      "leadership": {
        "title": "You checked the belief.",
        "line": "Leadership: “No staffing decision has been made. Show how you would use the capacity.” There is no guarantee yet.",
        "visual": {
          "type": "work",
          "cards": [
            [
              "Staffing",
              "Still undecided"
            ],
            [
              "Next",
              "Plan for freed capacity"
            ]
          ]
        },
        "choices": [
          {
            "label": "Build the proposal",
            "next": "proposal"
          }
        ],
        "mood": "speaking"
      },
      "backlog": {
        "title": "Give the saved time a purpose.",
        "line": "Five hours move from reporting to delayed work. Manager: “That strengthens our case. We still need leadership’s response.”",
        "visual": {
          "type": "work",
          "cards": [
            [
              "Reporting",
              "−5 hours"
            ],
            [
              "Delayed work",
              "+5 hours"
            ]
          ]
        },
        "choices": [
          {
            "label": "Build the proposal",
            "next": "proposal"
          }
        ],
        "mood": "speaking"
      },
      "proposal": {
        "title": "Same tool. Better proposal.",
        "line": "You saw time saved. Your manager saw a possible cost to the team. Now the proposal addresses both.",
        "visual": {
          "type": "work",
          "cards": [
            [
              "Original",
              "Automate the report"
            ],
            [
              "Revised",
              "Automate + plan capacity + clarify staffing"
            ]
          ]
        },
        "choices": [
          {
            "label": "Name the idea",
            "next": "concept"
          }
        ],
        "mood": "speaking"
      },
      "concept": {
        "title": "Rationality",
        "line": "Choosing what best serves your goals, given what you believe. Beliefs can be wrong. Incentives are benefits or costs that make a choice attractive.",
        "visual": {
          "type": "cards",
          "cards": [
            [
              "Goal",
              "What matters to them?"
            ],
            [
              "Belief",
              "What do they expect?"
            ]
          ]
        },
        "choices": [
          {
            "label": "Try another situation",
            "next": "mira"
          }
        ],
        "mood": "speaking"
      },
      "mira": {
        "title": "Mira takes ₹500 instead of ₹800.",
        "line": "She already promised the first performance. Keeping her word matters more to her than the extra ₹300. Does taking less prove irrationality?",
        "visual": {
          "type": "cards",
          "cards": [
            [
              "Existing promise",
              "₹500"
            ],
            [
              "Conflicting offer",
              "₹800"
            ]
          ]
        },
        "choices": [
          {
            "label": "Yes",
            "next": "mirano"
          },
          {
            "label": "No",
            "next": "mirayes"
          }
        ],
        "mood": "speaking",
        "dialogue": [
          "Mira honours a ₹500 promise instead of taking a conflicting ₹800 offer.",
          "Keeping her word matters more to her than the extra ₹300. Does taking less prove irrationality?"
        ]
      },
      "mirano": {
        "title": "The goal changes the choice.",
        "line": "Money is not her only goal. Her choice fits her stated priority.",
        "visual": {
          "type": "cards",
          "cards": [
            [
              "Mira values",
              "Keeping her promise"
            ]
          ]
        },
        "choices": [
          {
            "label": "Save the takeaway",
            "next": "end"
          }
        ],
        "mood": "speaking"
      },
      "mirayes": {
        "title": "The goal changes the choice.",
        "line": "Right. Judge the choice against her goals and beliefs, not money alone.",
        "visual": {
          "type": "cards",
          "cards": [
            [
              "Mira values",
              "Keeping her promise"
            ]
          ]
        },
        "choices": [
          {
            "label": "Save the takeaway",
            "next": "end"
          }
        ],
        "mood": "speaking"
      },
      "end": {
        "title": "Rationality & incentives",
        "line": "Before repeating your pitch, ask what accepting it would cost the other person.",
        "visual": {
          "type": "work",
          "cards": [
            [
              "Before pitching",
              "Who gains? Who bears the risk?"
            ]
          ]
        },
        "choices": [
          {
            "label": "Save this idea",
            "next": "finish"
          }
        ],
        "mood": "celebrating"
      }
    }
  },
  {
    "title": "Everyone agrees. Nobody speaks.",
    "concept": "Common knowledge",
    "takeaway": "Make existing agreement visible to the people who need to act on it.",
    "icon": "03",
    "nodes": {
      "start": {
        "title": "Two private yeses. A silent room.",
        "line": "You manage Friday’s launch. Engineering and Sales privately support a week’s delay and permit you to share that. In the meeting, neither speaks. Whose view first?",
        "visual": {
          "type": "meeting",
          "cards": [
            [
              "Engineering",
              "Privately: delay"
            ],
            [
              "Sales",
              "Privately: delay"
            ]
          ]
        },
        "choices": [
          {
            "label": "Engineering",
            "next": "eng"
          },
          {
            "label": "Sales",
            "next": "sales"
          }
        ],
        "mood": "thinking",
        "dialogue": [
          "You manage Friday’s launch. Engineering and Sales privately support a week’s delay.",
          "Both permit you to share their views. But in the meeting, neither speaks.",
          "Whose view will you inspect first?"
        ]
      },
      "eng": {
        "title": "“Will Sales insist on Friday?”",
        "line": "Engineering: “I don’t want to be blamed for blocking the launch.”",
        "visual": {
          "type": "meeting",
          "cards": [
            [
              "Engineering",
              "Does Sales agree?"
            ]
          ]
        },
        "choices": [
          {
            "label": "See Sales’ view",
            "next": "sales2"
          }
        ],
        "mood": "speaking"
      },
      "sales": {
        "title": "“Does Engineering think Friday works?”",
        "line": "Sales: “I don’t want to block a launch they can deliver.”",
        "visual": {
          "type": "meeting",
          "cards": [
            [
              "Sales",
              "Does Engineering agree?"
            ]
          ]
        },
        "choices": [
          {
            "label": "See Engineering’s view",
            "next": "eng2"
          }
        ],
        "mood": "speaking"
      },
      "eng2": {
        "title": "“Will Sales insist on Friday?”",
        "line": "Engineering fears looking like the blocker. Neither heard the other’s recommendation.",
        "visual": {
          "type": "meeting",
          "cards": [
            [
              "Engineering",
              "Does Sales agree?"
            ]
          ]
        },
        "choices": [
          {
            "label": "Share their views",
            "next": "share"
          }
        ],
        "mood": "speaking"
      },
      "sales2": {
        "title": "“Does Engineering think Friday works?”",
        "line": "Sales fears blocking a feasible launch. Neither heard the other’s recommendation.",
        "visual": {
          "type": "meeting",
          "cards": [
            [
              "Sales",
              "Does Engineering agree?"
            ]
          ]
        },
        "choices": [
          {
            "label": "Share their views",
            "next": "share"
          }
        ],
        "mood": "speaking"
      },
      "share": {
        "title": "How will you bring agreement into the room?",
        "line": "Both gave permission to share their views.",
        "visual": {
          "type": "meeting",
          "cards": [
            [
              "Engineering",
              "Delay"
            ],
            [
              "Sales",
              "Delay"
            ]
          ]
        },
        "choices": [
          {
            "label": "Message each lead privately",
            "next": "private"
          },
          {
            "label": "Ask both to confirm in the meeting",
            "next": "public"
          }
        ],
        "mood": "speaking",
        "dialogue": [
          "Both leads agreed with you privately.",
          "How will you bring their agreement into the room?"
        ]
      },
      "private": {
        "title": "They know more. One question remains.",
        "line": "Engineering: “Has Sales also been told that I support it?” Separate delivery did not establish who received what.",
        "visual": {
          "type": "meeting",
          "cards": [
            [
              "Engineering → you",
              "Does Sales know I know?"
            ],
            [
              "Sales → you",
              "Private message received"
            ]
          ]
        },
        "choices": [
          {
            "label": "Compare shared confirmation",
            "next": "public"
          }
        ],
        "mood": "speaking"
      },
      "public": {
        "title": "“Yes.” “Yes.” Both hear both.",
        "line": "Nobody changed their recommendation. The director can now discuss the delay with both. Agreement does not automatically change the schedule.",
        "visual": {
          "type": "meeting",
          "shared": true,
          "cards": [
            [
              "Engineering",
              "Delay ✓"
            ],
            [
              "Sales",
              "Delay ✓"
            ]
          ]
        },
        "choices": [
          {
            "label": "What changed?",
            "next": "check"
          }
        ],
        "mood": "speaking"
      },
      "check": {
        "title": "The dates stayed the same.",
        "line": "What did the public confirmation change?",
        "visual": {
          "type": "meeting",
          "shared": true,
          "cards": [
            [
              "Before",
              "Both preferred delay"
            ],
            [
              "After",
              "Both still prefer delay"
            ]
          ]
        },
        "choices": [
          {
            "label": "Their preferred date",
            "next": "wrong"
          },
          {
            "label": "What they knew about each other",
            "next": "concept"
          }
        ],
        "mood": "speaking",
        "dialogue": [
          "Both preferred a delay before the meeting. Both still do.",
          "What did the shared confirmation change?"
        ]
      },
      "wrong": {
        "title": "They already wanted a delay.",
        "line": "What changed was their awareness of each other’s position.",
        "visual": {
          "type": "meeting",
          "shared": true,
          "cards": [
            [
              "Visible agreement",
              "We both heard both confirmations"
            ]
          ]
        },
        "choices": [
          {
            "label": "Name the idea",
            "next": "concept"
          }
        ],
        "mood": "speaking"
      },
      "concept": {
        "title": "Common knowledge",
        "line": "Everyone knows, everyone knows everyone knows, and so on. Public confirmation can help create shared awareness; real people can still miss or misunderstand it.",
        "visual": {
          "type": "meeting",
          "shared": true,
          "cards": [
            [
              "I know",
              "You agree"
            ],
            [
              "You know",
              "I know you agree"
            ]
          ]
        },
        "choices": [
          {
            "label": "Keep this idea",
            "next": "end"
          }
        ],
        "mood": "speaking"
      },
      "end": {
        "title": "Common knowledge",
        "line": "Make existing agreement visible to the people who need to act on it.",
        "visual": {
          "type": "meeting",
          "shared": true,
          "cards": [
            [
              "Private agreement",
              "Make it visible"
            ]
          ]
        },
        "choices": [
          {
            "label": "Save this idea",
            "next": "finish"
          }
        ],
        "mood": "celebrating"
      }
    }
  },
  {
    "title": "We spent more. We gained nothing.",
    "concept": "Strategic response",
    "takeaway": "Before going back, check whether the old situation still exists.",
    "icon": "04",
    "nodes": {
      "start": {
        "title": "Orders are back. Costs are still up.",
        "line": "You introduced next-day delivery. Early extra orders vanished. Finance wants to cancel it. Which evidence first?",
        "visual": {
          "type": "delivery",
          "cards": [
            [
              "Orders",
              "Back near baseline"
            ],
            [
              "Delivery cost",
              "Still higher"
            ]
          ]
        },
        "choices": [
          {
            "label": "Our delivery costs",
            "next": "cost"
          },
          {
            "label": "What competitors changed",
            "next": "rival"
          }
        ],
        "mood": "thinking",
        "dialogue": [
          "Next-day delivery brought extra orders to your store. Then the increase disappeared.",
          "Delivery still costs more. Finance wants to cancel it.",
          "Which evidence will you inspect first?"
        ]
      },
      "cost": {
        "title": "The extra cost is real.",
        "line": "Faster fulfilment still costs more. Now check what changed outside your store.",
        "visual": {
          "type": "delivery",
          "cards": [
            [
              "Cost",
              "Higher"
            ],
            [
              "Missing",
              "Competitor response"
            ]
          ]
        },
        "choices": [
          {
            "label": "Check the competitor",
            "next": "rival2"
          }
        ],
        "mood": "speaking"
      },
      "rival": {
        "title": "They matched you two weeks later.",
        "line": "The competitor now delivers next day too. Now inspect your cost.",
        "visual": {
          "type": "delivery",
          "cards": [
            [
              "You",
              "Tomorrow"
            ],
            [
              "Rival",
              "Tomorrow"
            ]
          ]
        },
        "choices": [
          {
            "label": "Check our costs",
            "next": "cost2"
          }
        ],
        "mood": "speaking"
      },
      "rival2": {
        "title": "They matched you two weeks later.",
        "line": "You were briefly faster. Now both stores offer next-day delivery.",
        "visual": {
          "type": "delivery",
          "cards": [
            [
              "You",
              "Tomorrow"
            ],
            [
              "Rival",
              "Tomorrow"
            ]
          ]
        },
        "choices": [
          {
            "label": "Test a customer’s choice",
            "next": "test"
          }
        ],
        "mood": "speaking"
      },
      "cost2": {
        "title": "The extra cost did not disappear.",
        "line": "Orders returned near baseline, while faster fulfilment still costs more.",
        "visual": {
          "type": "delivery",
          "cards": [
            [
              "Orders",
              "Back near baseline"
            ],
            [
              "Cost",
              "Still higher"
            ]
          ]
        },
        "choices": [
          {
            "label": "Test a customer’s choice",
            "next": "test"
          }
        ],
        "mood": "speaking"
      },
      "test": {
        "title": "This customer needs it by the weekend.",
        "line": "Both stores sell the same product at the same total price. Your rival delivers tomorrow. Test your offer.",
        "visual": {
          "type": "delivery",
          "cards": [
            [
              "Customer needs",
              "Before the weekend"
            ],
            [
              "Rival arrives",
              "Tomorrow"
            ]
          ]
        },
        "choices": [
          {
            "label": "Keep next-day delivery",
            "next": "fast"
          },
          {
            "label": "Return to five-day delivery",
            "next": "slow"
          }
        ],
        "mood": "speaking",
        "dialogue": [
          "This customer needs the product before the weekend.",
          "Both stores sell it at the same total price. Your rival delivers tomorrow.",
          "Which delivery offer will you test?"
        ]
      },
      "fast": {
        "title": "Both offers meet the deadline.",
        "line": "Customer: “Either arrives in time.” This does not guarantee they choose you.",
        "visual": {
          "type": "delivery",
          "cards": [
            [
              "You",
              "Tomorrow ✓"
            ],
            [
              "Rival",
              "Tomorrow ✓"
            ]
          ]
        },
        "choices": [
          {
            "label": "Compare five-day delivery",
            "next": "slow"
          },
          {
            "label": "See the pattern",
            "next": "concept"
          }
        ],
        "mood": "speaking"
      },
      "slow": {
        "title": "“I’ll order from them.”",
        "line": "Your five-day delivery misses this customer’s deadline. The competitor still arrives tomorrow.",
        "visual": {
          "type": "delivery",
          "cards": [
            [
              "You",
              "5 days"
            ],
            [
              "Rival",
              "Tomorrow ✓"
            ]
          ]
        },
        "choices": [
          {
            "label": "Compare next-day delivery",
            "next": "fast"
          },
          {
            "label": "See the pattern",
            "next": "concept"
          }
        ],
        "mood": "speaking"
      },
      "concept": {
        "title": "You can reverse your decision…",
        "line": "…but you can’t reverse your competitor’s. Strategic response means their reaction changes the situation you face next.",
        "visual": {
          "type": "delivery",
          "cards": [
            [
              "Original",
              "Both slow"
            ],
            [
              "After reversing",
              "Only you slow"
            ]
          ]
        },
        "choices": [
          {
            "label": "What should we investigate?",
            "next": "next"
          }
        ],
        "mood": "speaking"
      },
      "next": {
        "title": "The delivery bill still matters.",
        "line": "Which investigation will you take forward?",
        "visual": {
          "type": "delivery",
          "cards": [
            [
              "Decision",
              "Not enough evidence for profit yet"
            ]
          ]
        },
        "choices": [
          {
            "label": "Business that fast delivery retains",
            "next": "retained"
          },
          {
            "label": "Fast delivery on fewer products",
            "next": "narrow"
          }
        ],
        "mood": "speaking"
      },
      "retained": {
        "title": "Compare retained business with extra cost.",
        "line": "We need evidence for both before calling the service profitable.",
        "visual": {
          "type": "delivery",
          "cards": [
            [
              "Business retained",
              "Estimate needed"
            ],
            [
              "Extra cost",
              "Measure it"
            ]
          ]
        },
        "choices": [
          {
            "label": "Save this idea",
            "next": "end"
          }
        ],
        "mood": "speaking"
      },
      "narrow": {
        "title": "Test a narrower offer.",
        "line": "A smaller range may cost less. Check which customers and orders it would no longer serve.",
        "visual": {
          "type": "delivery",
          "cards": [
            [
              "Fast delivery",
              "Selected products"
            ],
            [
              "Test",
              "Cost and customer response"
            ]
          ]
        },
        "choices": [
          {
            "label": "Save this idea",
            "next": "end"
          }
        ],
        "mood": "speaking"
      },
      "end": {
        "title": "Strategic response",
        "line": "Before going back, check whether the old situation still exists.",
        "visual": {
          "type": "delivery",
          "cards": [
            [
              "Your reversal",
              "Does not reset the rival"
            ]
          ]
        },
        "choices": [
          {
            "label": "Save this idea",
            "next": "finish"
          }
        ],
        "mood": "celebrating"
      }
    }
  },
  {
    "title": "You won. Did you miss something?",
    "concept": "Winner’s curse",
    "takeaway": "When your offer beats everyone else’s by a lot, check what you understood differently.",
    "icon": "05",
    "nodes": {
      "start": {
        "title": "What will you quote?",
        "line": "You run a design studio. Estimated cost: ₹60,000, scope unconfirmed. Lowest suitable quote wins. Lower price may help win; higher price leaves more room.",
        "visual": {
          "type": "quote",
          "cards": [
            [
              "Estimated cost",
              "₹60,000"
            ],
            [
              "Scope",
              "Needs confirmation"
            ]
          ]
        },
        "choices": [
          {
            "label": "Quote ₹70,000",
            "next": "win",
            "set": {
              "quote": 70000
            }
          },
          {
            "label": "Quote ₹90,000",
            "next": "win",
            "set": {
              "quote": 90000
            }
          }
        ],
        "mood": "speaking",
        "dialogue": [
          "You run a design studio. You estimate this website will cost ₹60,000 to make.",
          "The scope still needs checking. The lowest suitable quote wins.",
          "A lower price may help you win. A higher price leaves more room. What will you quote?"
        ]
      },
      "win": {
        "title": "“We’d like to go ahead.”",
        "line": "Other studios quoted ₹1,10,000 and ₹1,20,000. Yours is much lower. Which explanation will you check first?",
        "visual": {
          "type": "quote",
          "win": true
        },
        "choices": [
          {
            "label": "We can do it more cheaply",
            "next": "efficient"
          },
          {
            "label": "We priced a smaller job",
            "next": "scope"
          }
        ],
        "mood": "surprised",
        "dialogue": [
          "The client chose you. The other studios quoted ₹1,10,000 and ₹1,20,000.",
          "Your quote is much lower. Which explanation will you check first?"
        ]
      },
      "efficient": {
        "title": "Where would the saving come from?",
        "line": "Your estimate uses manual work. No documented shortcut explains the gap. It assumes 20 pages.",
        "visual": {
          "type": "quote",
          "cards": [
            [
              "Method",
              "Manual rebuild"
            ],
            [
              "Estimate",
              "20 pages"
            ]
          ]
        },
        "choices": [
          {
            "label": "Open the client’s page list",
            "next": "scope"
          }
        ],
        "mood": "speaking"
      },
      "scope": {
        "title": "20 assumed. 200 needed.",
        "line": "Client: “All 200 product pages need rebuilding.” Revised total cost: ₹1,00,000. You had priced a smaller job.",
        "visual": {
          "type": "quote",
          "loss": true
        },
        "choices": [
          {
            "label": "Requote for all 200 pages",
            "next": "requote"
          },
          {
            "label": "Offer a smaller first phase",
            "next": "phase"
          }
        ],
        "mood": "surprised",
        "dialogue": [
          "You assumed 20 pages. The client needs 200 rebuilt.",
          "The full job would cost ₹1,00,000. You had priced a smaller job.",
          "What will you propose before confirming?"
        ]
      },
      "requote": {
        "title": "Full scope. New quote needed.",
        "line": "Client: “Send the updated quote. We’ll compare it.” Keeping the client is not guaranteed.",
        "visual": {
          "type": "quote",
          "cards": [
            [
              "Scope",
              "200 pages"
            ],
            [
              "Price",
              "Needs re-estimating"
            ]
          ]
        },
        "choices": [
          {
            "label": "What did the win tell you?",
            "next": "concept"
          }
        ],
        "mood": "speaking"
      },
      "phase": {
        "title": "Split the work into phases.",
        "line": "Client: “Show what is included now and what the rest costs.” Estimate each phase before promising it fits the budget.",
        "visual": {
          "type": "quote",
          "cards": [
            [
              "First phase",
              "Agree scope + estimate"
            ],
            [
              "Later pages",
              "Separate scope + estimate"
            ]
          ]
        },
        "choices": [
          {
            "label": "What did the win tell you?",
            "next": "concept"
          }
        ],
        "mood": "speaking"
      },
      "concept": {
        "title": "Winning didn’t prove your estimate right.",
        "line": "Winner’s curse: competition can select the person whose uncertain estimate is most optimistic. Here, underestimating cost helped you win.",
        "visual": {
          "type": "quote",
          "cards": [
            [
              "Low estimate",
              "Helped you win"
            ],
            [
              "Winning",
              "Did not verify cost"
            ]
          ]
        },
        "choices": [
          {
            "label": "Is every low quote a mistake?",
            "next": "check"
          }
        ],
        "mood": "speaking"
      },
      "check": {
        "title": "Could another studio genuinely cost less?",
        "line": "A large gap is a reason to investigate—not proof of error.",
        "visual": {
          "type": "quote",
          "cards": [
            [
              "Different methods",
              "Could mean lower costs"
            ]
          ]
        },
        "choices": [
          {
            "label": "Yes, if efficiency is verified",
            "next": "end"
          },
          {
            "label": "No, low bids must be wrong",
            "next": "wrong"
          }
        ],
        "mood": "speaking"
      },
      "wrong": {
        "title": "Real efficiency can justify a lower bid.",
        "line": "Compare methods, costs and included work. Winning alone proves neither error nor accuracy.",
        "visual": {
          "type": "quote",
          "cards": [
            [
              "Check",
              "Same scope, genuinely lower cost?"
            ]
          ]
        },
        "choices": [
          {
            "label": "Save this idea",
            "next": "end"
          }
        ],
        "mood": "speaking"
      },
      "end": {
        "title": "Winner’s curse",
        "line": "When your offer beats everyone else’s by a lot, check what you understood differently.",
        "visual": {
          "type": "quote",
          "cards": [
            [
              "A surprising win",
              "Check the estimate"
            ]
          ]
        },
        "choices": [
          {
            "label": "Save this idea",
            "next": "finish"
          }
        ],
        "mood": "celebrating"
      }
    }
  },
  {
    "title": "A rival arrives",
    "concept": "Robust strategy",
    "takeaway": "Before committing, ask which assumption could break your plan.",
    "icon": "06",
    "nodes": {
      "start": {
        "title": "Two new trains. Your next move?",
        "line": "You run a railway connecting several towns. A newcomer announces two morning trains on one route. Pick a provisional response.",
        "visual": {
          "type": "rail",
          "cards": [
            [
              "Your network",
              "Several towns"
            ],
            [
              "New rival",
              "2 morning trains"
            ]
          ]
        },
        "choices": [
          {
            "label": "Prepare a fare cut",
            "next": "cut",
            "set": {
              "plan": "Compete on this route"
            }
          },
          {
            "label": "Keep fares while investigating",
            "next": "hold",
            "set": {
              "plan": "Hold fares and monitor"
            }
          }
        ],
        "mood": "speaking",
        "dialogue": [
          "You run a railway connecting several towns.",
          "A rival announces two morning trains on one route. Your team asks, “Should we cut fares?”",
          "Which response will you investigate first?"
        ]
      },
      "cut": {
        "title": "Who else gets the discount?",
        "line": "Your loyal passengers would pay less too. Check what the competitive threat actually is.",
        "visual": {
          "type": "rail",
          "cards": [
            [
              "Fare cut",
              "Existing riders also pay less"
            ]
          ]
        },
        "choices": [
          {
            "label": "Inspect evidence",
            "next": "evidence"
          }
        ],
        "mood": "speaking"
      },
      "hold": {
        "title": "Waiting also has a cost to consider.",
        "line": "Passengers on overlapping departures now have another option. Check how exposed you are.",
        "visual": {
          "type": "rail",
          "cards": [
            [
              "Overlapping departures",
              "New choice for passengers"
            ]
          ]
        },
        "choices": [
          {
            "label": "Inspect evidence",
            "next": "evidence"
          }
        ],
        "mood": "speaking"
      },
      "evidence": {
        "title": "What will you inspect first?",
        "line": "Open each piece of evidence. You choose the order.",
        "visual": {
          "type": "rail"
        },
        "choices": [
          {
            "label": "Who is riding?",
            "next": "ev0",
            "set": {
              "seen0": true
            }
          },
          {
            "label": "Why would they switch?",
            "next": "ev1",
            "set": {
              "seen1": true
            }
          },
          {
            "label": "Our connections",
            "next": "ev2",
            "set": {
              "seen2": true
            }
          },
          {
            "label": "Their costs",
            "next": "ev3",
            "set": {
              "seen3": true
            }
          }
        ],
        "mood": "speaking"
      },
      "ev0": {
        "title": "Some riders used to drive.",
        "line": "The new service adds rail journeys as well as competing for yours.",
        "visual": {
          "type": "rail",
          "cards": [
            [
              "Some riders used to drive.",
              "Scenario evidence"
            ]
          ]
        },
        "choices": [
          {
            "label": "Back to evidence",
            "next": "evidence"
          }
        ],
        "mood": "speaking"
      },
      "ev1": {
        "title": "Some riders choose on price.",
        "line": "A cut may defend bookings, but also reduces revenue from passengers who would stay.",
        "visual": {
          "type": "rail",
          "cards": [
            [
              "Some riders choose on price.",
              "Scenario evidence"
            ]
          ]
        },
        "choices": [
          {
            "label": "Back to evidence",
            "next": "evidence"
          }
        ],
        "mood": "speaking"
      },
      "ev2": {
        "title": "Your network connects more towns.",
        "line": "The newcomer cannot complete every journey your network serves.",
        "visual": {
          "type": "rail",
          "cards": [
            [
              "Your network connects more towns.",
              "Scenario evidence"
            ]
          ]
        },
        "choices": [
          {
            "label": "Back to evidence",
            "next": "evidence"
          }
        ],
        "mood": "speaking"
      },
      "ev3": {
        "title": "The newcomer operates at lower cost.",
        "line": "A smaller operation has advantages. Your network brings obligations as well as connections.",
        "visual": {
          "type": "rail",
          "cards": [
            [
              "The newcomer operates at lower cost.",
              "Scenario evidence"
            ]
          ]
        },
        "choices": [
          {
            "label": "Back to evidence",
            "next": "evidence"
          }
        ],
        "mood": "speaking"
      },
      "plan": {
        "title": "Which plan will you test?",
        "line": "Extra rail demand and your connections may support coexistence. Lower rival costs and price-sensitive riders still matter.",
        "visual": {
          "type": "rail"
        },
        "choices": [
          {
            "label": "Hold fares and monitor",
            "next": "future",
            "set": {
              "plan": "Hold fares and monitor"
            }
          },
          {
            "label": "Compete on this route",
            "next": "future",
            "set": {
              "plan": "Compete on this route"
            }
          },
          {
            "label": "Allow a limited niche",
            "next": "future",
            "set": {
              "plan": "Allow a limited niche"
            }
          },
          {
            "label": "Leave this route",
            "next": "future",
            "set": {
              "plan": "Leave this route"
            }
          }
        ],
        "mood": "speaking",
        "dialogue": [
          "Some riders are new to rail. Your connections still matter, but the rival has lower costs.",
          "Which plan will you test?"
        ]
      },
      "future": {
        "title": "Which future will you test first?",
        "line": "These are separate possible futures, not predictions. Compare both before revising.",
        "visual": {
          "type": "rail",
          "plan": true
        },
        "choices": [
          {
            "label": "No passenger growth",
            "next": "flat",
            "set": {
              "flat": true
            }
          },
          {
            "label": "The rival expands",
            "next": "expand",
            "set": {
              "expand": true
            }
          }
        ],
        "mood": "speaking",
        "dialogue": [
          "Keep your plan in mind. These are possible futures, not predictions.",
          "Which future will you test first?"
        ]
      },
      "flat": {
        "title": "The total passenger pool stops growing.",
        "line": "Other conditions stay fixed. There is less room to grow without taking passengers from each other.",
        "visual": {
          "type": "rail",
          "stress": "flat",
          "plan": true
        },
        "choices": [
          {
            "label": "Compare the other future",
            "next": "future"
          }
        ],
        "mood": "speaking"
      },
      "expand": {
        "title": "The rival adds departures and lower fares.",
        "line": "Retain the original demand condition for this test. More of your service now faces competition.",
        "visual": {
          "type": "rail",
          "stress": "expand",
          "plan": true
        },
        "choices": [
          {
            "label": "Compare the other future",
            "next": "future"
          }
        ],
        "mood": "speaking"
      },
      "revise": {
        "title": "Does your plan still make sense?",
        "line": "A changed condition calls for review, not an automatic fare cut. Keep a reason for your decision.",
        "visual": {
          "type": "rail",
          "plan": true
        },
        "choices": [
          {
            "label": "Keep my plan",
            "next": "reason"
          },
          {
            "label": "Revise my plan",
            "next": "newplan"
          }
        ],
        "mood": "speaking",
        "dialogue": [
          "A changed condition calls for review—not an automatic fare cut.",
          "Will you keep your plan or revise it?"
        ]
      },
      "newplan": {
        "title": "Choose your revised plan.",
        "line": "No single action wins under every possible future.",
        "visual": {
          "type": "rail"
        },
        "choices": [
          {
            "label": "Hold fares and monitor",
            "next": "reason",
            "set": {
              "plan": "Hold fares and monitor"
            }
          },
          {
            "label": "Compete on this route",
            "next": "reason",
            "set": {
              "plan": "Compete on this route"
            }
          },
          {
            "label": "Allow a limited niche",
            "next": "reason",
            "set": {
              "plan": "Allow a limited niche"
            }
          },
          {
            "label": "Leave this route",
            "next": "reason",
            "set": {
              "plan": "Leave this route"
            }
          }
        ],
        "mood": "speaking"
      },
      "reason": {
        "title": "What supports your plan?",
        "line": "Pick the fact you are relying on most.",
        "visual": {
          "type": "rail",
          "plan": true
        },
        "choices": [
          {
            "label": "Additional riders",
            "next": "trigger",
            "set": {
              "reason": "Additional riders"
            }
          },
          {
            "label": "Useful connections",
            "next": "trigger",
            "set": {
              "reason": "Useful connections"
            }
          },
          {
            "label": "Price-sensitive passengers",
            "next": "trigger",
            "set": {
              "reason": "Price-sensitive passengers"
            }
          },
          {
            "label": "Competitor cost advantage",
            "next": "trigger",
            "set": {
              "reason": "Competitor cost advantage"
            }
          }
        ],
        "mood": "speaking"
      },
      "trigger": {
        "title": "What would make you reconsider?",
        "line": "A useful plan includes a condition for changing your mind.",
        "visual": {
          "type": "rail",
          "plan": true
        },
        "choices": [
          {
            "label": "No growth in demand",
            "next": "end",
            "set": {
              "trigger": "No growth in demand"
            }
          },
          {
            "label": "Broader rival competition",
            "next": "end",
            "set": {
              "trigger": "Broader rival competition"
            }
          }
        ],
        "mood": "speaking"
      },
      "end": {
        "title": "Robust strategy",
        "line": "Robust strategy means weighing a plan across several plausible futures. It is not a guarantee that it works everywhere.",
        "visual": {
          "type": "rail",
          "note": true
        },
        "choices": [
          {
            "label": "Save this idea",
            "next": "finish"
          }
        ],
        "mood": "celebrating"
      }
    }
  }
];
const QUESTIONS=[{"id": "C01", "title": "Interacting choices", "prompt": "In the advertising comparison, your ads stayed off. What explains the change from 40 to 100 left?", "options": ["Your own advertising cost fell again.", "Your competitor stopped advertising too.", "Your company received more money because it spent more on ads.\n"], "key": 1, "explain": "Your ad cost was already zero. The competitor's advertising advantage changed."}, {"id": "C02", "title": "Model versus world", "prompt": "Why couldn't the model establish that the historical ban must benefit firms?", "options": ["It held total customer spending constant and left out other effects.", "It compared both companies rather than focusing only on one.", "It showed the outcome after the restriction instead of before it.\n"], "key": 0, "explain": "A result follows the model's assumptions. Historical effects require evidence about the real setting."}, {"id": "C03", "title": "Goals and beliefs", "prompt": "The manager accepts the time-saving result but fears a staffing cut. What belongs in your next investigation?", "options": ["Whether the tool could save even more time on other reports.", "Whether another team would adopt the tool first.", "Whether staffing would actually be reduced and what freed time could do.\n"], "key": 2, "explain": "Investigate both the believed consequence and the goal it threatens."}, {"id": "C04", "title": "Rationality", "prompt": "Mira knowingly chooses less pay to keep a promise she values more. What does this show?", "options": ["The choice can fit her priorities.", "She must have misunderstood the amounts.", "Emotional priorities are excluded from rational choice.\n"], "key": 0, "explain": "Assess the choice against her goals and beliefs, not money alone."}, {"id": "C05", "title": "Shared awareness", "prompt": "Both leads privately support a delay. What can public confirmation add?", "options": ["A new preferred date for each person.", "Awareness that the other supports it and heard their support.", "A guarantee that the director agrees.\n"], "key": 1, "explain": "The recommendations may stay fixed while knowledge about others' positions changes."}, {"id": "C06", "title": "Limits of common knowledge", "prompt": "Which claim goes beyond what the meeting established?", "options": ["Both leads heard the confirmations.", "One source of uncertainty was reduced.", "Shared awareness guarantees the director will delay launch.\n"], "key": 2, "explain": "Knowledge does not remove other goals, constraints or decision rights."}, {"id": "C07", "title": "Changed competition", "prompt": "Why doesn't cancelling next-day delivery restore the original situation?", "options": ["The rival now offers next-day delivery.", "The store can never change its service.", "Every customer must prefer speed over price.\n"], "key": 0, "explain": "Your reversal leaves the competitor's changed offer in place."}, {"id": "C08", "title": "Relevant comparison", "prompt": "Which comparison helps assess whether to keep faster delivery now?", "options": ["Today's sales against a past period with no other changes considered.", "The cost of launch, without future benefits or costs.", "Expected costs and retained business with versus without it under current competition.\n"], "key": 2, "explain": "Compare current alternatives. Before-and-after totals alone do not isolate the effect."}, {"id": "C09", "title": "Winning and estimation", "prompt": "Why inspect a quote much lower than every rival's?", "options": ["Every winning quote is necessarily unprofitable.", "Selection can favour a quote that underestimated the work.", "Losing studios must know the exact true cost.\n"], "key": 1, "explain": "An optimistic error can help you win. It is a reason to check, not proof rivals are right."}, {"id": "C10", "title": "A different explanation", "prompt": "What would weaken the conclusion that a low quote reflects an error?", "options": ["Verified lower costs for the same full scope.", "The client choosing that quote.", "The quote being submitted confidently.\n"], "key": 0, "explain": "Genuine efficiency can support a lower price. Winning and confidence do not establish it."}, {"id": "C11", "title": "Changed assumption", "prompt": "Total rail demand stops growing; all other facts stay fixed. What follows?", "options": ["Every operator should leave immediately.", "A fare cut is automatically profitable.", "The plan's reliance on extra demand needs review.\n"], "key": 2, "explain": "One changed condition triggers reconsideration; it does not supply a universal response."}, {"id": "C12", "title": "Robustness", "prompt": "Which decision note best supports later review?", "options": ["“Our first plan won the discussion, so keep it.”", "“Keep the plan while the rival stays limited; reconsider if it expands across the day.”", "“We need the one plan that cannot fail in any possible future.”\n"], "key": 1, "explain": "A reason and a relevant change condition make a plan inspectable. They still need evidence."}, {"id": "P01", "title": "Two venues", "prompt": "Two nearby event venues offer free parking. One considers charging while the other keeps it free. What should it examine alongside the parking revenue?", "options": ["Only the price nearby car parks charge.", "Whether organisers or guests would shift to the other venue.", "Whether charging always signals higher quality.\n"], "key": 1, "explain": "The competitor's offer can change the effect of your own charge."}, {"id": "P02", "title": "A cost-saving comparison", "prompt": "A model says two services save money when both stop a costly perk. It assumes customer spending stays unchanged. What evidence could overturn its gain prediction?", "options": ["Lost customer spending exceeds the saved cost.", "Customers divide their unchanged spending equally between them.", "Both services pay zero for the discontinued perk.\n"], "key": 0, "explain": "The result depends on the assumption about money coming in, not only spending going out."}, {"id": "P03", "title": "A supplier decision", "prompt": "A buyer knowingly selects a more expensive supplier because it has a more dependable delivery record. Is higher price alone evidence of irrationality?", "options": ["Yes, because price is the only relevant goal.", "Yes, if another quote was available.", "No, reliability may be worth the extra price to that buyer.\n"], "key": 2, "explain": "Compare the decision with the buyer's priorities and beliefs about reliability."}, {"id": "P04", "title": "A resisted handover", "prompt": "A colleague resists a handover process because they believe they will still be blamed for mistakes but lose authority to prevent them. What should you check?", "options": ["How responsibility and authority would actually change.", "Whether calling the process efficient makes the concern irrelevant.", "Whether all resistance proves unwillingness to help.\n"], "key": 0, "explain": "Investigate the believed consequence and the incentive, rather than assign a motive without evidence."}, {"id": "P05", "title": "Separate updates", "prompt": "Two departments each receive the same revised schedule privately. Neither knows whether the other received it. What can you conclude?", "options": ["Each must know that both received it.", "Each has the schedule, but mutual awareness is not established.", "Neither has any useful information.\n"], "key": 1, "explain": "Receiving information is different from knowing what others received."}, {"id": "P06", "title": "A public acknowledgement", "prompt": "In a joint meeting, both departments acknowledge the revised schedule. Does this alone prove they prefer that schedule?", "options": ["Yes, acknowledgement proves preference.", "Yes, shared knowledge removes disagreement.", "No, understanding and preference are different.\n"], "key": 2, "explain": "People can share knowledge while disliking the same plan or pursuing different goals."}, {"id": "P07", "title": "A copied guarantee", "prompt": "Your repair shop adds a guarantee. A rival matches it. You consider withdrawing yours. What changed since the original decision?", "options": ["The rival's offer customers can choose instead.", "Nothing relevant, because you control your own guarantee.", "Proof that every guarantee is profitable.\n"], "key": 0, "explain": "Undoing your action does not undo the rival's response."}, {"id": "P08", "title": "An apparent non-result", "prompt": "Your team improves a product, competitors respond, and market share stays flat. Which conclusion is supported by that fact alone?", "options": ["The improvement caused no benefit.", "The improvement fully paid for itself.", "Neither; further evidence is needed to separate effects and costs.\n"], "key": 2, "explain": "An observed total does not establish what would have happened without the improvement."}, {"id": "P09", "title": "The shortest estimate", "prompt": "Your proposed two-week timeline wins a project; other teams estimated five weeks. What is a useful check before confirming?", "options": ["Treat being chosen as verification of the estimate.", "Compare included work, dependencies and actual capacity.", "Automatically replace your estimate with the longest one.\n"], "key": 1, "explain": "Investigate why estimates differ. You may be more efficient or may have omitted work."}, {"id": "P10", "title": "Buying to resell", "prompt": "You win a sealed equipment auction with the highest estimate of its resale value. Does winning establish the equipment is worth your bid?", "options": ["No; the winning estimate may be an optimistic error.", "Yes; losing bidders confirm the winner's valuation.", "No; all auction winners necessarily lose money.\n"], "key": 0, "explain": "Selection can favour overestimation, but neither profit nor loss follows from winning alone."}, {"id": "P11", "title": "An expansion plan", "prompt": "A shop expansion depends on new residents moving into the area. That development is delayed. What should be revisited first?", "options": ["A launch promotion that assumes the original number of new residents.", "A plan to copy the nearest competitor without checking demand.", "The demand assumption and the alternatives under delayed growth.\n"], "key": 2, "explain": "A changed supporting assumption calls for comparison, not automatic persistence or cancellation."}, {"id": "P12", "title": "A review trigger", "prompt": "You tolerate a competitor serving a small niche. Which event most directly challenges the premise that it remains limited?", "options": ["Your operating costs rise while the rival keeps its original service.", "The competitor expands into your main service throughout the day.", "More customers arrive, but the rival continues serving only its niche.\n"], "key": 1, "explain": "A trigger should challenge a reason the plan depended on. You still examine costs and other conditions before responding."}];