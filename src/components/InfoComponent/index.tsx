import React from "react";
import Typed from "react-typed";
import Academia from "../../assets/imagem_academia.jpeg";

export const InfoComponent = () => {
    return (
        <div className="w-full bg-lblack py-16 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2">
                <img
                    className="w-[500px] mx-auto my-4 rounded-lg"
                    src={Academia}
                    alt="/"
                />
                <div className="flex flex-col justify-center text-center px-4">
                    <h1 className="md:text-4xl text-lgreen sm:text-3xl text-2xl font-bold py-2">
                        Faça parte do treinamento
                    </h1>
                    <h2 className="text-xl sm:text-2xl text-white">
                        <p>Venha fazer parte da nossa equipe de </p>
                        <Typed
                            strings={[
                                "Crossfit",
                                " Spinning",
                                "Natação",
                                "Ritmos",
                                "Musculação",
                            ]}
                            typeSpeed={60}
                            backSpeed={50}
                            loop
                        ></Typed>
                    </h2>
                </div>
            </div>
        </div>
    );
};
