import React, { useState } from 'react';


const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

export const Faq = () => {
    return (
        <div className='bg-zinc-100'>
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div class="flex flex-col mb-16 sm:text-center">

                        <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                                Frequently Asked Questions:
                            </h2>

                        </div>
                    </div>
                    <div class="space-y-4">
                        <Item title="1. How can you book medical equipment and consumables?">
                            If you are looking to book medical equipment or consumables, you can either visit the medical equipment and consumable page on our home care website and fill in the details in the box at the bottom of the page, following which you will receive a follow-up call from our team to know more about your senior’s requirement. Or call us directly on 098849 45900 and tell us your requirements and book the necessary medical equipment or consumables.
                        </Item>
                        <Item title="2. Is there a rental option?">

                            Yes. Based on your requirement you can choose between purchase or rental option. You can rent the equipment without any caution deposit. In case of any damage, you won’t be charged for the damage as well.

                        </Item>
                        <Item title="3. Why do you need medical equipment and consumables at home?">
                            By having the medical equipment at home you can avoid frequent visits or prolonged stays at hospitals for your seniors. They can stay in the comfort of their home and recover with the help of the top-quality medical equipment and consumables provided by Athulya Senior Care. You can also order medical equipment and consumables without having any doubts about the quality or the reliability of the products.
                        </Item>
                        <Item title="4. Are medical equipment and consumables from Athulya cost-effective?">
                            Yes. Athulya’s medical equipment and consumables from Athulya are of top quality and cost-effective.
                        </Item>
                    </div>
                </div>
            </div>
        </div>

    );
};