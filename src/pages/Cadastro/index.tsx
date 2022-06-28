import { gql } from "@apollo/client";
import { Disclosure, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpIcon, SelectorIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WorkoutClass } from "../../components/Turmas";

const dias = [
    { name: "Segunda" },
    { name: "Terça" },
    { name: "Quarta" },
    { name: "Quinta" },
    { name: "Sexta" },
];

const modalidades = [
    {
        name: "Crossfit",
        horarios: ["06:30", "08:30", "12:00", "18:00", "20:00"],
    },
    {
        name: "Spinning",
        horarios: ["07:00", "12:00"],
    },
    {
        name: "Natação",
        horarios: ["08:00", "17:00", "19:00", "20:00"],
    },
    {
        name: "Ritmos",
        horarios: ["17:00", "18:00", "19:00"],
    },
];

const CREATE_USER_MUTATION = gql`
    mutation CreateUser(
        $nome: String!
        $email: String!
        $senha: String!
        $cpf: String!
        $numCartao: String!
        $dataExpiracao: String!
        $cvc: String!
        $nomeTurma: String!
        $horarios: [HorarioCreateInput!]
    ) {
        createUsuario(
            data: {
                nome: $nome
                email: $email
                senha: $senha
                cpf: $cpf
                vinculo: "Cliente"
                cartaoDeCredito: {
                    create: {
                        numeroCartao: $numCartao
                        dataExpiracao: $dataExpiracao
                        cvc: $cvc
                    }
                }
                turmas: { create: { nome: $nomeTurma, horarios: $horarios } }
            }
        )
    }
`;

export const Cadastro = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpf, setCpf] = useState("");
    const [card_number, setCardNumber] = useState("");
    const [expire_date, setExpireDate] = useState("");
    const [card_cvc, setCardCvc] = useState("");
    const [currentTurmas, setTurmas] = useState<WorkoutClass[]>([]);

    const [selectedModalidade, setSelectedModalidade] = useState(
        modalidades[0]
    );

    const [currentHorario, setCurrentHorario] = useState(
        selectedModalidade.horarios
    );

    const [selectedHorario, setSelectedHorario] = useState(currentHorario![0]);

    const [selectedDia, setselectedDia] = useState(dias[0]);

    const addTurma = () => {
        setTurmas((prevState) => {
            const isTurmaInArray = prevState.some(
                (turma) => turma.nome === selectedModalidade.name
            );

            if (isTurmaInArray) {
                const newState = prevState.map((turma) => {
                    if (turma.nome === selectedModalidade.name) {
                        return {
                            nome: selectedModalidade.name,
                            id: Date.now(),
                            horarios: [
                                ...turma.horarios,
                                {
                                    dia: selectedDia.name,
                                    horario: selectedHorario,
                                    id: Date.now(),
                                },
                            ],
                        };
                    } else {
                        return turma;
                    }
                });

                return newState;
            } else {
                return [
                    ...prevState,
                    {
                        nome: selectedModalidade.name,
                        id: Date.now(),
                        horarios: [
                            {
                                dia: selectedDia.name,
                                horario: selectedHorario,
                                id: Date.now(),
                            },
                        ],
                    },
                ];
            }
        });
    };

    useEffect(() => {
        setCurrentHorario(selectedModalidade.horarios);
    }, [selectedModalidade]);

    useEffect(() => {
        setSelectedHorario(currentHorario![0]);
    }, [currentHorario]);

    useEffect(() => {
        if (selectedHorario && !selectedHorario.length) {
            setSelectedHorario(currentHorario![0]);
        }
    }, [selectedHorario]);

    const handleFormSubmit = (e: any) => {
        e.preventDefault();

        console.log({
            nome: nome,
            email: email,
            senha: password,
            cpf: cpf,
            numCartao: card_number,
            dataExpiracao: expire_date,
            cvc: card_cvc,
            turmas: currentTurmas,
        });
    };

    return (
        <div className="h-5/6 my-9 flex">
            <div className="w-full max-w-md m-auto bg-slate-300 rounded-lg shadow-lg py-10 px-16">
                <h1 className="text-2xl font-medium text-black mt-4 mb-4 text-center">
                    CADASTRO DO CLIENTE
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="name"
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack`}
                        id="name"
                        placeholder="Nome do cliente"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack`}
                        id="email"
                        placeholder="Email do cliente"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack`}
                        id="password"
                        placeholder="Senha do cliente"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <label htmlFor="cpf">Cpf</label>
                    <input
                        type="text"
                        className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack`}
                        id="cpf"
                        placeholder="Cpf do cliente"
                        value={cpf}
                        onChange={(event) => setCpf(event.target.value)}
                    />

                    <div className="relative w-full flex flex-col">
                        <label>Número do cartão</label>
                        <input
                            className="rounded-md peer pl-12 w-full p-2 border outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack"
                            type="text"
                            id="card_number"
                            placeholder="0000 0000 0000"
                            value={card_number}
                            onChange={(event) =>
                                setCardNumber(event.target.value)
                            }
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute bottom-3 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative flex-1 flex flex-col">
                            <label>Data de expiração</label>
                            <input
                                className="rounded-md peer pl-12 w-full p-2 border outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack"
                                type="text"
                                id="expire_date"
                                placeholder="MM/YY"
                                value={expire_date}
                                onChange={(event) =>
                                    setExpireDate(event.target.value)
                                }
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute bottom-3 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>

                        <div className="relative flex-1 flex flex-col">
                            <label className="flex items-center gap-3">
                                CVC/CVV
                                <span className="relative group">
                                    <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                                        {" "}
                                        Os três números que estão atrás do
                                        cartão!
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </label>
                            <input
                                className="rounded-md peer pl-12 w-full p-2 border outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack"
                                type="text"
                                id="card_cvc"
                                value={card_cvc}
                                placeholder="&bull;&bull;&bull;"
                                onChange={(event) =>
                                    setCardCvc(event.target.value)
                                }
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute bottom-3 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="text-center font-bold text-2xl">Turma</div>

                    <div className="mb-4">
                        <label>Modalidade</label>
                        <Listbox
                            value={selectedModalidade}
                            onChange={setSelectedModalidade}
                        >
                            <div className="relative mt-1">
                                <Listbox.Button className="focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack  relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left sm:text-sm">
                                    <span className="block truncate">
                                        {selectedModalidade.name}
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <SelectorIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {modalidades.map(
                                            (modalidade, modalidadeIdx) => (
                                                <Listbox.Option
                                                    key={modalidadeIdx}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                            active
                                                                ? "bg-gray-100 text-gray-900"
                                                                : "text-gray-900"
                                                        }`
                                                    }
                                                    value={modalidade}
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${
                                                                    selected
                                                                        ? "font-medium"
                                                                        : "font-normal"
                                                                }`}
                                                            >
                                                                {
                                                                    modalidade.name
                                                                }
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                                                    <CheckIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            )
                                        )}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>

                    {selectedModalidade.name !== "Musculação" && (
                        <div className="grid grid-cols-2 gap-3 mb-2">
                            <div>
                                <label>Dia</label>
                                <Listbox
                                    value={selectedDia}
                                    onChange={setselectedDia}
                                >
                                    <div className="relative mt-1">
                                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack sm:text-sm">
                                            <span className="block truncate">
                                                {selectedDia.name}
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <SelectorIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {dias.map((dia, diaIdx) => (
                                                    <Listbox.Option
                                                        key={diaIdx}
                                                        className={({
                                                            active,
                                                        }) =>
                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-900"
                                                            }`
                                                        }
                                                        value={dia}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${
                                                                        selected
                                                                            ? "font-medium"
                                                                            : "font-normal"
                                                                    }`}
                                                                >
                                                                    {dia.name}
                                                                </span>
                                                                {selected ? (
                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                                                        <CheckIcon
                                                                            className="h-5 w-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                            </div>

                            <div>
                                <label>Horario</label>
                                <Listbox
                                    value={selectedHorario}
                                    onChange={setSelectedHorario}
                                >
                                    <div className="relative mt-1">
                                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack  sm:text-sm">
                                            <span className="block truncate">
                                                {selectedHorario}
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <SelectorIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {currentHorario!.map(
                                                    (horario, horarioIdx) => (
                                                        <Listbox.Option
                                                            key={horarioIdx}
                                                            className={({
                                                                active,
                                                            }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-900"
                                                                }`
                                                            }
                                                            value={horario}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${
                                                                            selected
                                                                                ? "font-medium"
                                                                                : "font-normal"
                                                                        }`}
                                                                    >
                                                                        {
                                                                            horario
                                                                        }
                                                                    </span>
                                                                    {selected ? (
                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                                                            <CheckIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    )
                                                )}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-center items-center flex-col mt-3">
                        <button
                            type="button"
                            onClick={addTurma}
                            className={`bg-black py-2 px-4 text-sm mb-8 text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Adicionar turma
                        </button>

                        <button
                            className={`bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>

                <Turmas currentTurmas={currentTurmas} />
            </div>
        </div>
    );
};

function Turmas({ currentTurmas }: { currentTurmas: WorkoutClass[] }) {
    return (
        <div className="w-full mt-12">
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

                            {currentTurmas.map((turma) => {
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
