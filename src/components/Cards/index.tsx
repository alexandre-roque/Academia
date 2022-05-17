import React from 'react';
import { Card } from './Card';
import { planos } from '../../test'

export const Cards = () => {
  return (
    <>
        {planos.map((plano) => {
            return (
                <div className='w-full py-[4rem] px-4 bg-white'>
                    <div className='py-5 text-center text-4xl font-black uppercase'>{plano.name}</div>
                    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                        {plano.options.map((option) => {
                            return (
                                <Card label={option.label} 
                                    prices={option.prices} 
                                />
                            );
                        })}
                    </div>
                </div>
            );
        })}
    </>
  );
};