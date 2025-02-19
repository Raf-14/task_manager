import { FC } from 'react';
import { ModalProps } from '../types/ineterfaces';

export const Modal: FC<ModalProps> = ({ title, children, onClose}) => {
    return(
        <>
            <div className="fixed inset-0 flex items-center justify-center w-full h-screen modal-background bg-black/50">
                <div className="w-full p-5 rounded shadow-2xl modal-content ">
                    <div className="flex items-center justify-between p-3 mx-auto rounded-t-xl h-14 bg-zinc-50 modal-header w-md">
                        <h2 className="font-serif text-2xl font-bold text-gray-700">{title}</h2>
                            <button
                                className="flex items-center justify-center w-8 h-8 px-4 py-2 mt-2 text-white bg-red-500 rounded-full cursor-pointer hover:bg-red-400"
                                onClick={onClose}
                            >
                                X
                            </button>
                    </div>
                        {children}
                </div>
            </div>
        </>
    )
}

