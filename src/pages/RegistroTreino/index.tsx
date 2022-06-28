import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Exercises, Workout } from "../../components/Treinos";

export const RegistroTreino = () => {
    const navigate = useNavigate();

    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [workoutName, setWorkoutName] = useState("");
    const [exercise, setExercise] = useState("");
    const [reps, setReps] = useState("");
    const [exercises, setExercises] = useState<Exercises[]>([]);

    const addExercise = () => {
        setExercises((prevState) => [
            ...prevState,
            {
                id: Date.now(),
                nome: exercise,
                reps: reps,
            },
        ]);
        setExercise("");
        setReps("");
    };

    const addWorkout = () => {
        setWorkouts((prevState) => [
            ...prevState,
            {
                nome: workoutName,
                exercicios: exercises,
                id: Date.now(),
            },
        ]);

        setExercises([]);
        setWorkoutName("");
    };

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="h-5/6 my-9 flex flex-col gap-8 items-center justify-center">
            <div className="w-full max-w-md m-auto bg-slate-300 rounded-lg shadow-lg py-10 px-16">
                <h1 className="text-2xl font-medium text-black mt-4 mb-4 text-center">
                    CADASTRO DO TREINO
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="user">Usuário</label>
                    <input
                        type="email"
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack `}
                        id="email"
                        placeholder="Email do cliente"
                    />

                    <label>Treino</label>
                    <input
                        type="text"
                        className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack `}
                        id="workout_name"
                        placeholder="Nome do treino"
                        value={workoutName}
                        onChange={(event) => setWorkoutName(event.target.value)}
                    />

                    <h1 className="text-xl font-medium text-black mt-4 mb-4 text-center">
                        CADASTRO DO EXERCÍCIO
                    </h1>

                    <label>Exercício</label>
                    <input
                        type="text"
                        className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack `}
                        id="exercise_name"
                        placeholder="Nome do Exercício"
                        value={exercise}
                        onChange={(event) => setExercise(event.target.value)}
                    />

                    <label>Repetições</label>
                    <input
                        type="text"
                        className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack `}
                        id="reps"
                        placeholder="Quantidade de repetições"
                        value={reps}
                        onChange={(event) => setReps(event.target.value)}
                    />

                    <div className="flex justify-center items-center flex-row mt-3 gap-3">
                        <button
                            type="button"
                            className={`bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                            onClick={() => addWorkout()}
                        >
                            Adicionar Treino
                        </button>
                        <button
                            type="button"
                            className={`bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                            onClick={() => addExercise()}
                        >
                            Adicionar Exercicio
                        </button>
                    </div>

                    {exercises.length > 0 && (
                        <div className="mt-3 bg-white rounded-lg p-2">
                            <span className="font-medium">
                                {" "}
                                Exercicios cadastrados:
                            </span>
                            {exercises.map((ex) => {
                                return (
                                    <div key={ex.id}>
                                        {ex.nome} - {ex.reps}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    <div className="flex justify-center items-center flex-col mt-3">
                        <button
                            className={`bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Done
                        </button>
                    </div>
                </form>
            </div>

            <Treinos treinos={workouts} />
        </div>
    );
};

function Treinos({ treinos }: { treinos: Workout[] }) {
    return (
        <div className="w-full max-w-md px-4 mb-8">
            <div className="mx-auto w-full rounded-2xl bg-white p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button
                                className="flex w-full 
                                    justify-between rounded-lg bg-gray-100 px-4 py-2 
                                    text-center text-sm font-medium text-gray-900 hover:bg-gray-200 
                                    focus:outline-none focus-visible:ring focus-visible:ring-gray-500 
                                    focus-visible:ring-opacity-75"
                            >
                                <span className="m-auto font-extrabold text-3xl text-center uppercase">
                                    Treinos
                                </span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-gray-900 place-self-center`}
                                />
                            </Disclosure.Button>

                            {treinos.map((treino) => {
                                return (
                                    <Disclosure.Panel
                                        key={treino.id}
                                        className="rounded-lg my-2 px-4 pt-4 pb-2 text-gray-800 bg-slate-200"
                                    >
                                        <span className="font-bold text-2xl">
                                            Treino {treino.nome}
                                            <br />
                                        </span>

                                        {treino.exercicios.map((exercise) => {
                                            return (
                                                <div
                                                    className="grid grid-cols-3 mt-1"
                                                    key={exercise.id}
                                                >
                                                    <div className="col-span-2 font-medium text-lg">
                                                        {exercise.nome}
                                                    </div>
                                                    <div className="col-span-1 font-normal text-md">
                                                        {exercise.reps}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </Disclosure.Panel>
                                );
                            })}
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
}
