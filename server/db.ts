import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'Where was Selene born?',
        answer: 'The Bronx',
    },
    {
        points: 200,
        question:
            'What is Selenes Zodiac Sign?',
        answer: 'Gemini',
    },
    {
        points: 300,
        question:
            'What is Selenes Favorite Season?',
            imgSrc: '/autumn.jpg',
        answer: 'Autumm',
    },
    {
        points: 400,
        question: 'What pets does Selene have?',
        imgSrc:"/guineapig.jpg",
        answer: 'Guinea pigs',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
                'What treat has Selene baked the most?',
            imgSrc: '/macarons.jpg',
            answer: 'Macarons',
        },
        {
            points: 100,
            question:
                'What is Selenes favorite aspect of science?',
            imgSrc: '/astro.jpeg',
            answer: 'Astrophysics',
        },
        {
            points: 200,
            question: 'What programming language does Selene know?',
            imgSrc: '/programming_language.png',
            answer: 'Java',
        },
        {
            points: 300,
            question:
                'What is Selene`s favorite math topic?',
            imgSrc:
                "/math.webp",
            answer: 'Probability',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What sport is Selene starting in the winter?',
        imgSrc:
            "/skiing.jpg",
        answer: 'Ski racing',
    },
    {
            points: 200,
            question: 'What does Selene hope to do as a job?',
            answer: 'Astronomer',
        },
]);


const categories = [
    {
        title: "Selene's Random",
        questions: pastQuestions
    },
    {
        title: `Selene's Activities`,
        questions: presentQuestions
    },
    {
        title: "Selene's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}