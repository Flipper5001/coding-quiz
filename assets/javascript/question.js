const questions = [
    // copy from here...
    {
        question: "What casing cannot be used in JavaScript?",
        answers: [
            {
                title: "camelCase",
                isAnswer: false,
            },
            {
                title: "snake_case",
                isAnswer: false,
            },
            {
                title: "PascalCase",
                isAnswer: false,
            },
            {
                title: "kebab-case",
                isAnswer: true,
            }
        ],
    },
    // ...to above here for more questions
    {
        question: "which of these is an incorrect way of writing a function?",
        answers: [
            {
                title: "const add = function (x,y) { return x+y; }",
                isAnswer: false,
            },
            {
                title: "const addition = (x+y) => { return x+y; }",
                isAnswer: false,
            },
            {
                title: "function add(x,y) { return x+y; }",
                isAnswer: false,
            },
            {
                title: "const add(x+y) function { return x+y; }",
                isAnswer: true,
            }
        ],
    },
    {
        question: "Which of these is not a Data Type?",
        answers: [
            {
                title: "Nan",
                isAnswer: false,
            },
            {
                title: "String",
                isAnswer: false,
            },
            {
                title: "Boolean",
                isAnswer: false,
            },
            {
                title: "Asparagus",
                isAnswer: true,
            }
        ],
    },
    {
        question: "Which of these is not a math operator?",
        answers: [
            {
                title: "%",
                isAnswer: false,
            },
            {
                title: "*",
                isAnswer: false,
            },
            {
                title: "/",
                isAnswer: false,
            },
            {
                title: "&",
                isAnswer: true,
            }
        ],
    },
    {
        question: "How do you stop the webpage from refreshing after clicking submit?",
        answers: [
            {
                title: "event.stopRefresh()",
                isAnswer: false,
            },
            {
                title: "event.preventRefresh()",
                isAnswer: false,
            },
            {
                title: "event.stopDefault()",
                isAnswer: false,
            },
            {
                title: "event.preventDefault()",
                isAnswer: true,
            }
        ],
    },
    {
        question: "Which of these is not a way to perform a loop function?",
        answers: [
            {
                title: "For",
                isAnswer: false,
            },
            {
                title: "While",
                isAnswer: false,
            },
            {
                title: "For Of",
                isAnswer: false,
            },
            {
                title: "While In",
                isAnswer: true,
            }
        ],
    },
    {
        question: "Why do we prefer to use Let over Var in JS?",
        answers: [
            {
                title: "Because sam said so",
                isAnswer: true,
            },
            {
                title: "Because sam said so",
                isAnswer: true,
            },
            {
                title: "Because sam said so",
                isAnswer: true,
            },
            {
                title: "Because sam said so",
                isAnswer: true,
            }
        ],
    },
    {
        question: "Which of these is not a programming language",
        answers: [
            {
                title: "JavaScript",
                isAnswer: false,
            },
            {
                title: "Swift",
                isAnswer: false,
            },
            {
                title: "C++",
                isAnswer: false,
            },
            {
                title: "Log",
                isAnswer: true,
            }
        ],
    },
]
