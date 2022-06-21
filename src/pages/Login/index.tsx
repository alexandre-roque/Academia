import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyModal from "../../components/MyDialog";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen((prevState) => !prevState);
    };

    const handleFormSubmit = (e: any) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        onFinish({ email: email, senha: password }).then(() => {
            if (auth.isLogged) {
                navigate("/");
            } else {
                toggleModal();
            }
        });
    };

    async function onFinish(values: { email: string; senha: string }) {
        try {
            await auth.authenticate(values.email, values.senha);
        } catch (error) {}
    }

    return (
        <div className="h-5/6 my-9 flex bg-gray-bg1">
            <div className="w-full max-w-md m-auto bg-slate-300 rounded-lg border border-primaryBorder shadow-default py-10 px-16">
                <h1 className="text-2xl font-medium text-black mt-4 mb-12 text-center">
                    LOGIN
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack `}
                            id="email"
                            placeholder="Seu email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus-visible:ring focus-visible:ring-opacity-25 focus-visible:ring-lblack `}
                            id="password"
                            placeholder="Sua senha"
                        />
                    </div>

                    <MyModal
                        isOpen={modalOpen}
                        toggle={toggleModal}
                        title="Erro"
                        content="Erro ao efetuar o login"
                    />

                    <div className="flex justify-center items-center flex-col mt-6">
                        <button
                            className={`bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>

                        <div className="rounded-lg mx-auto w-5/6 bg-black h-1 my-5"></div>

                        <button
                            className={`bg-black py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                            onClick={() => navigate("/register")}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
