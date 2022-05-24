import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyModal from "../../components/MyDialog";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { selectUser } from "../../store/ducks/user";

export const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
    const user = useSelector(selectUser);

    const handleFormSubmit = (e: any) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        onFinish({ email: email, senha: password });
    };

    async function onFinish(values: { email: string; senha: string }) {
        try {
            const response = await auth.authenticate(values.email, values.senha);

            if(!user.isLogged){
                setOpen(true);
            }

            navigate("/");
        } catch (error) {
            setOpen(true);
        }
    }

    return (
        <div className="h-5/6 my-9 flex bg-gray-bg1">
            <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
                <h1 className="text-2xl font-medium text-lgreen mt-4 mb-12 text-center">
                    LOGIN 🔐
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
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="password"
                            placeholder="Your Password"
                        />
                    </div>

                    <MyModal title="Erro" content="Erro ao fazer login" open={isOpen}/>

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
