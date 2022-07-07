import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

const Navbar = () => {
    const user = useAuth();

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setwindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
        if (windowWidth > 767) {
            setNav(false);
        }
    }, [windowWidth]);

    const admin = user.vinculo === "Admin";

    return (
        <div className="flex justify-between items-center h-24 max-w-7xl mx-8 px-4 text-white uppercase">
            <h1 className="w-full text-3xl font-bold text-lgreen">
                <Link className="hover:text-white" to={"/"}>
                    BE FIT.
                </Link>
            </h1>
            <ul className="hidden md:flex">
                <li className="p-4">
                    <Link className="p-1 hover:text-lgreen" to={"/sobre"}>
                        Sobre
                    </Link>
                </li>
                {(user.vinculo === "Cliente" || admin) && (
                    <li className="p-4">
                        <Link className="p-1 hover:text-lgreen" to={"/profile"}>
                            Profile
                        </Link>
                    </li>
                )}
                {!user.email && (
                    <li className="p-4">
                        <Link className="p-1 hover:text-lgreen" to={"/login"}>
                            Login
                        </Link>
                    </li>
                )}
                {user.email && (
                    <li className="p-4">
                        <button
                            className="hover:text-lgreen"
                            onClick={user.logout}
                        >
                            LOGOUT
                        </button>
                    </li>
                )}
                {(user.vinculo === "Secretário(a)" || admin) && (
                    <li className="p-4">
                        <Link
                            className="p-1 hover:text-lgreen"
                            to={"/cadastro"}
                        >
                            Cadastro
                        </Link>
                    </li>
                )}
                {(user.vinculo === "Médico(a)" || admin) && (
                    <li className="p-4">
                        <Link
                            className="p-1 hover:text-lgreen"
                            to={"/avaliacao"}
                        >
                            Avaliação
                        </Link>
                    </li>
                )}
                {(user.vinculo === "Professor(a)" || admin) && (
                    <li className="p-4 text-center">
                        <Link
                            className="p-1 hover:text-lgreen"
                            to={"/registro-treino"}
                        >
                            Registro Treino
                        </Link>
                    </li>
                )}
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>
            <ul
                className={` divide-y divide-gray-600
                    ${
                        nav
                            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-lblack ease-in-out duration-500"
                            : "ease-in-out duration-500 fixed left-[-100%]"
                    }`}
            >
                <h1 className="w-full text-3xl font-bold text-lgreen m-4">
                    BE FIT.
                </h1>
                <li className="p-4">
                    <Link className="p-1 hover:text-lgreen" to={"/login"}>
                        Login
                    </Link>
                </li>
                <li className="p-4">
                    <Link className="p-1 hover:text-lgreen" to={"/sobre"}>
                        Sobre
                    </Link>
                </li>
                <li className="p-4">
                    <Link className="p-1 hover:text-lgreen" to={"/profile"}>
                        Profile
                    </Link>
                </li>

                <li className="p-4">
                    <Link className="p-1 hover:text-lgreen" to={"/cadastro"}>
                        Cadastro
                    </Link>
                </li>

                <li className="p-4">
                    <Link
                        className="p-1 hover:text-lgreen"
                        to={"/registro-treino"}
                    >
                        Registro Treino
                    </Link>
                </li>

                <li className="p-4">
                    <Link className="p-1 hover:text-lgreen" to={"/avaliacao"}>
                        Avaliação
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
