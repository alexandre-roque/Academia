import AvaliacaoMedica from "../../components/AvaliacaoMedica";
import Treinos from "../../components/Treinos";
import Turmas from "../../components/Turmas";

export const Profile = () => {
    return (
        <div className="w-full bg-lblack py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <AvaliacaoMedica />
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2">
                <Treinos />
                <Turmas />
            </div>
        </div>
    );
};
