import React from "react";
import { useNavigate } from "react-router-dom";
import { CardProps, PriceTabel } from "..";

export const Card = ({ label, prices }: CardProps) => {
    const navigate = useNavigate();

    return (
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-center py-8">{label}</h2>
            <div className="text-center font-medium">
                {prices!.map((price: PriceTabel) => {
                    return (
                        <p className="py-2 border-b mx-8 mt-8">
                            {price.amount} - {price.price}
                        </p>
                    );
                })}
            </div>
            <button
                onClick={() => navigate("/contatos")}
                className="bg-lgreen w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            >
                Escolher plano
            </button>
        </div>
    );
};
