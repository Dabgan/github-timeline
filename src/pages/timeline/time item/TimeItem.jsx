import React from "react";
import * as styled from "./timeitem.styles";

const TimeItem = ({ date, children }) => {
    console.log(children);

    return (
        <styled.ItemContainer>
            <styled.Item>
                <styled.Time>{date}</styled.Time>
                {children}
            </styled.Item>
        </styled.ItemContainer>
    );
};

export default TimeItem;
