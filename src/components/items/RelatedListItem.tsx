import React from "react";
import Button from "../Button/Button";
// import { ActivityListItemProps } from "../../types/rank"; // Make sure this path is correct
import { useNavigate } from "react-router-dom";
import { customers } from "../database";

const RelatedListItem: React.FC = () => {
    const navigate = useNavigate();
    const [convertBgColor, setConvertBgColor] = React.useState < boolean > (false);
    const convertColor = () => {
        setConvertBgColor(!convertBgColor);
    }
    return (
        <div className="md:px-2 sm:px-4  flex gap-4 border-b-2 border-gray-100">
            <div>
                <div className="divide-y divide-gray-200">
                    {customers.map(({ eventName, avatar, yes, no }, index) => (
                        <div
                            key={index}
                            className="flex hover:bg-gray-200 hover:rounded-md items-center justify-between pb-3 pt-3 last:pb-0"
                        >
                            <div className="flex items-center gap-x-3">
                                <img width={44} className="rounded-md " src={avatar} alt={eventName} />
                                <div>
                                    {eventName &&
                                        <button className="cursor-pointer" onClick={() => navigate('/event')}>
                                            {eventName}
                                        </button>
                                    }
                                    <p className="text-sm  font-semibold">$124,937 Bet</p>
                                </div>
                            </div>
                            <div className="flex gap-4 text-md font-semibold">
                                <Button onClick={() => { convertColor(); }} className=" rounded-lg bg-green-100 text-green-800 px-2" text={yes} />
                                <Button onClick={() => { convertColor(); }} className=" rounded-lg bg-orange-200 text-orange-600 px-2" text={no} />
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </div >
    );
};

export default RelatedListItem;
