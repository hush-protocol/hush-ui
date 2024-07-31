import React, { useState, FC } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full  flex justify-between items-center p-4 focus:outline-none"
      onClick={onClick}
    >
      <span className="text-[#4B5565] text-base font-medium">{title}</span>
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 12H6"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v12m6-6H6"
            />
          )}
        </svg>
      </div>
    </button>
    {isOpen && (
      <p className="p-4 text-[#4B5565] text-xs font-normal">
        {content}
      </p>
    )}
  </div>
);

interface AccordionData {
  title: string;
  content: string;
}

const Faq: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData: AccordionData[] = [
    {
      title: 'Arweave stellar ',
      content: 'Kadena binance harmony helium aave revain hive dai nexo. Bitcoin fantom horizen cosmos golem gala harmony USD. Amp golem terra hedera litecoin aave audius harmony cosmos monero.'
    },
    {
      title: 'Eiusmod tempor',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dolor non ligula gravida.'
    },
    {
      title: 'Incididunt ut labore',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'Ut enim ad minim',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
    },
    {
      title: 'Duis aute irure dolor',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ];

  return (
    <div className="flex items-center justify-center  pt-20 px-4 pb-40">
      <div className="container mx-auto">
        <div className="w-full max-w-[900px] w-[900px] mx-auto">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
