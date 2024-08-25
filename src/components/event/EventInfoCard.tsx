import React from "react";
import Button from "../Button/Button";
import BuySell from "../cards/BuySell";

const EventInfoCard = () => {
    const [selectPanel, setSelectPanel] = React.useState < string > ('buy')
    const handleTabs = (value: string) => {
        setSelectPanel(value);
    };
    const data = [
        {
            label: "Buy",
            value: "buy",
            desc: <BuySell activeTab={"buy"} />,
        },
        {
            label: "Sell",
            value: "sell",
            desc: <BuySell activeTab={"sell"} />
        },

    ];
    return (
        <div className="fixed border-2 p-4 rounded-lg ">
            <div className="flex border-b">
                {data.map((item, index) => (
                    <Button
                        key={index}
                        text={item.label}
                        value={item.value}
                        onClick={() => { handleTabs(item.value); }}
                        className={`${selectPanel === `${item.value}` ? 'text-blue-500 border-b-2 border-blue-500' : 'border-b-2 border-gray-300 dark:text-white'}  flex flex-col  font-medium cursor-pointer p-2  hover:border-b-gray-500 dark:hover:border-b-blue-500  text-black text-nowrap`}
                    />
                ))}
            </div>

            {data.map((item) => (
                selectPanel === item.value && (
                    <div key={item.value} className="w-full mt-3">
                        {item.desc}
                    </div>
                )
            ))}
        </div>
    )
}

export default EventInfoCard;