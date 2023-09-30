import React from "react";

const IndexListItem = ({label, subLabel}) => {
    return (
        <div className={"p-2 rounded-lg flex justify-between items-center gap-3 hover:bg-gray-100"}>
            <div className="text-lg font-bold">
                {label}
            </div>
            {subLabel &&
                <div className="text-sm">
                    {subLabel}
                </div>
            }
        </div>
    );
};

export default IndexListItem;
