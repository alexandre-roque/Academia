import { useNavigate } from "react-router-dom";

export const Cadastro = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <div className="h-5/6 my-9 flex">
            <div className="w-full max-w-md m-auto bg-slate-300 rounded-lg border border-primaryBorder shadow-default py-10 px-16">
                <h1 className="text-2xl font-medium text-black mt-4 mb-4 text-center">
                    CADASTRO DE CLIENTE
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="email"
                            placeholder="Your Email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="password"
                            placeholder="Your Password"
                        />
                    </div>

                    <div>
                        <label htmlFor="cpf">Cpf</label>
                        <input
                            type="text"
                            className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="cpf"
                            placeholder="Your Cpf"
                        />
                    </div>

                    <div className="relative w-full flex flex-col">
                        <label>Card number</label>
                        <input 
                            className="rounded-md peer pl-12 w-full p-2 border outline-none text-sm transition duration-150 ease-in-out mb-4" 
                            type="text" 
                            id="card_number" 
                            placeholder="0000 0000 0000" 
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-3 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative flex-1 flex flex-col">
                            <label>Expire date</label>
                            <input 
                                className="rounded-md peer pl-12 w-full p-2 border outline-none text-sm transition duration-150 ease-in-out mb-4" 
                                type="text" 
                                id="expire_date" 
                                placeholder="MM/YY" 
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-3 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>

                        <div className="relative flex-1 flex flex-col">
                            <label className="flex items-center gap-3">
                            CVC/CVV
                            <span className="relative group">
                                <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white"> Os três números que estão atrás do cartão!</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            </label>
                            <input 
                                className="rounded-md peer pl-12 w-full p-2 border outline-none text-sm transition duration-150 ease-in-out mb-4" 
                                type="text" 
                                id="card_cvc" 
                                placeholder="&bull;&bull;&bull;" 
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-3 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
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
