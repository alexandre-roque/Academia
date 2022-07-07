import { WorkoutClass } from "../components/Turmas";

export const turmas: WorkoutClass[] = [
    {
        id: 1,
        nome: "Natação",
        horarios: [
            {
                id: 1,
                dia: "Segunda",
                horario: "08:00",
            },
            {
                id: 2,
                dia: "Quarta",
                horario: "19:00",
            },
            {
                id: 3,
                dia: "Sexta",
                horario: "10:00",
            },
        ],
    },
    {
        id: 2,
        nome: "Crossfit",
        horarios: [
            {
                id: 1,
                dia: "Terça",
                horario: "06:30",
            },
            {
                id: 2,
                dia: "Quinta",
                horario: "08:30",
            },
            {
                id: 3,
                dia: "Sexta",
                horario: "18:00",
            },
        ],
    },
];
