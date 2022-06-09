import { WorkoutClass } from "./components/Turmas";

export const turmas: WorkoutClass[] = [
    {
        id: 1,
        name: "Natação",
        schedules: [
            {
                id: 1,
                day: "Segunda",
                time: "08:00",
            },
            {
                id: 2,
                day: "Quarta",
                time: "19:00",
            },
            {
                id: 3,
                day: "Sexta",
                time: "10:00",
            },
        ],
    },
    {
        id: 2,
        name: "Crossfit",
        schedules: [
            {
                id: 1,
                day: "Terça",
                time: "06:30",
            },
            {
                id: 2,
                day: "Quinta",
                time: "08:30",
            },
            {
                id: 3,
                day: "Sexta",
                time: "18:00",
            },
        ],
    },
];
