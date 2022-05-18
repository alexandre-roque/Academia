import { VscError } from 'react-icons/vsc'

export const Error = () => {

    return (
        <div className="text-white text-center font-black text-5xl flex justify-center mt-[250px] flex-col items-center">
            404 - Página não encontrada!
            <VscError className='mt-[30px] text-red-700'/>
        </div>
    );
};