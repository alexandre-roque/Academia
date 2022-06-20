import { useNavigate } from "react-router-dom";

export const Avaliacao = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="h-5/6 my-9 flex">
            <div className="w-full max-w-md m-auto bg-slate-300 rounded-lg shadow-lg py-10 px-16">
                <h1 className="text-2xl font-medium text-black mt-4 mb-4 text-center">
                    AVALIAÇÃO DO CLIENTE
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="user">Usuário</label>
                        <input
                            type="email"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack `}
                            id="email"
                            placeholder="Email do cliente"
                        />
                    </div>

                    <div>
                        <label htmlFor="IMC">IMC</label>
                        <input
                            type="text"
                            className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack `}
                            id="password"
                            placeholder="IMC do usuário"
                        />
                    </div>

                    <div className="flex justify-center items-center flex-col mt-3">
                        <button
                            className={`bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
