import { useQuery } from "@apollo/client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { turmas } from "../../auxiliarDadosCliente/turmas";

export interface Schedule {
    id: number;
    dia: String;
    horario: String;
}

export interface WorkoutClass {
    id: number;
    nome: String;
    horarios: Schedule[];
}

export default function Turmas({GET_TURMAS_QUERY}: {GET_TURMAS_QUERY:any}) {
    const { data } = useQuery<{turmas: WorkoutClass[]}>(GET_TURMAS_QUERY);

    return (
        <div className="w-full px-4">
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
                                <span className="m-auto font-extrabold text-2xl text-center uppercase">
                                    Turmas
                                </span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-gray-900 place-self-center`}
                                />
                            </Disclosure.Button>

                            {data?.turmas.map((turma) => {
                                return (
                                    <Disclosure.Panel
                                        key={turma.id}
                                        className="rounded-lg my-2 px-4 pt-4 pb-2 text-sm text-gray-800 bg-slate-200"
                                    >
                                        <span className="font-bold text-lg">
                                            {turma.nome}
                                            <br />
                                        </span>

                                        {turma.horarios.map((schedule) => {
                                            return (
                                                <div
                                                    key={schedule.id}
                                                    className="grid grid-cols-3 mt-1"
                                                >
                                                    <div className="col-span-2 font-medium text-base">
                                                        {schedule.dia} -{" "}
                                                        {schedule.horario}
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
