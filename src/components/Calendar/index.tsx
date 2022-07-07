import React from "react";

const Dias = [null, "Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const Horarios = [
    [ "06:30", "Crossfit", "Crossfit", "Crossfit", "Crossfit", "Crossfit" ],
    [ "07:00", "Spinning", "Spinning", "Spinning", "Spinning", "Spinning" ]
];

export const Calendar = () => {
    return (
        <table className="table-auto text-white border-collapse border border-slate-400">
            <thead>
                <tr>
                    <th className="border border-slate-300 p-3">Song</th>
                    <th className="border border-slate-300 p-3">Artist</th>
                    <th className="border border-slate-300 p-3">Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-slate-300 p-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300 p-3">Malcolm Lockyer</td>
                    <td className="border border-slate-300 p-3">1961</td>
                </tr>
                <tr>
                    <td className="border border-slate-300 p-3">Witchy Woman</td>
                    <td className="border border-slate-300 p-3">The Eagles</td>
                    <td className="border border-slate-300 p-3">1972</td>
                </tr>
                <tr>
                    <td className="border border-slate-300 p-3">Shining Star</td>
                    <td className="border border-slate-300 p-3">Earth, Wind, and Fire</td>
                    <td className="border border-slate-300 p-3">1975</td>
                </tr>
            </tbody>
        </table>
    );
};
