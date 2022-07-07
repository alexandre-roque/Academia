import GymIcon from "../../assets/gym.png";
import Professoricon from "../../assets/triple.png";
import WhatsApp from "../../assets/whatsApp.png";
import MapIcon from "../../assets/map.png";
import Plus from "../../assets/plus.png";
import ThumbsUp from "../../assets/thumbsUp.png";
import Diamond from "../../assets/diamond.png";

export const Sobre = () => {
    return (
        <div className="w-full bg-lblack text-white py-[4rem] px-4 flex items-center justify-center">
            <div
                className="p-4 max-w-7xl grid gap-4 
                    xs:grid-cols-2 
                    md:grid-cols-4"
            >
                <h1
                    className="text-4xl font-extrabold xs:col-span-2 
                        xs:grid xs:grid-cols-2 xs:gap-4 
                        md:col-span-3 md:text-5xl md:grid-cols-3"
                >
                    <span className="text-center md:col-span-2">
                        Sobre a nossa Academia{" "}
                        <span className="text-lgreen">BE FIT</span>
                    </span>
                </h1>

                <p
                    className="
                    text-center
                    xs:row-start-2 xs:col-start-2 xs:self-center
                    md:col-start-1 md:col-span-2 md:pr-12 md:text-lg
                    "
                >
                    A academia <span className="text-lgreen">BE FIT</span> conta
                    com uma equipe de professores capacitados, prontos para te
                    atender com o máximo de qualidade.
                </p>

                <div
                    className="h-16 flex flex-col justify-center items-center
                        xs:aspect-square xs:h-auto p-4 
                        hover:scale-105 duration-200
                        bg-lgreen"
                >
                    <img className="w-1/2" src={GymIcon}></img>

                    <span className="text-black px-8 text-xl font-bold text-center">
                        Equipamentos modernos
                    </span>
                </div>

                <div
                    className="h-16 flex flex-col justify-center items-center
                        xs:aspect-square xs:h-auto p-4 
                        hover:scale-105 duration-200
                        bg-lgreen"
                >
                    <img className="w-1/2" src={Professoricon}></img>

                    <span className="text-black px-8 text-xl font-bold text-center">
                        Professores capacitados
                    </span>
                </div>

                <div
                    className="h-16 flex flex-col justify-center items-center
                        xs:aspect-square xs:h-auto p-4 
                        hover:scale-105 duration-200
                        bg-slate-300"
                >
                    <img className="w-1/2" src={MapIcon}></img>

                    <span className="text-black px-8 text-xl font-bold text-center">
                        Unidades modernas
                    </span>
                </div>

                <div
                    className="h-16 flex flex-col justify-center items-center p-4 
                        xs:aspect-square xs:h-auto
                        md:col-start-2
                        hover:scale-105 duration-200
                        bg-lgreen"
                >
                    <img className="w-1/2" src={WhatsApp}></img>

                    <span className="text-black px-8 text-xl font-bold text-center">
                        Entre em contato! <br />
                        (31) 1234-5678
                    </span>
                </div>

                <div
                    className="h-16 flex flex-col justify-center items-center
                        xs:aspect-square xs:h-auto p-4 
                        hover:scale-105 duration-200
                        bg-slate-300"
                >
                    <span className="text-black px-8 text-xl font-bold text-center">
                        Para fazer sua matrícula, entre em contato pelo WhatsApp
                        ou ligue para a gente!
                    </span>
                </div>

                <div
                    className="h-16 flex flex-col justify-center items-center
                        xs:aspect-square xs:h-auto p-4 
                        hover:scale-105 duration-200
                        bg-lgreen"
                >
                    <img className="w-1/2" src={Plus}></img>

                    <span className="text-black px-8 text-xl font-bold text-center">
                        Sempre uma novidade chegando
                    </span>
                </div>

                <div
                    className="h-16 flex flex-col justify-center items-center
                        xs:aspect-square xs:h-auto p-4 
                        hover:scale-105 duration-200
                        bg-lgreen"
                >
                    <img className="w-1/2" src={ThumbsUp}></img>

                    <span className="text-black px-8 text-xl font-bold text-center">
                        Ótimo custo-benefício
                    </span>
                </div>

                <div
                    className="h-16 flex flex-col justify-center items-center
                        xs:aspect-square xs:h-auto p-4 
                        hover:scale-105 duration-200
                        bg-slate-300"
                >
                    <img className="w-1/2" src={Diamond}></img>

                    <span className="text-black px-8 text-xl font-bold text-center">
                        Satisfação 5 estrelas <br/> ⭐⭐⭐⭐⭐
                    </span>
                </div>

                <p
                    className="
                    text-center
                    xs:self-center
                    md:text-lg md:col-span-2 md:px-4
                "
                >
                    A academia <span className="text-lgreen">BE FIT</span> conta
                    com uma equipe de professores capacitados, prontos para te
                    atender com o máximo de qualidade. Todos os membros da nossa
                    equipe, passam por um criterioso processo para ingressar em
                    nossas unidades.
                </p>
            </div>
        </div>
    );
};
