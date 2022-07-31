import React from "react";
import { ProgressBar, Wrapper } from "./LineChart.styles";

export default function LineChart({ title, percentage, color }) {

    return <Wrapper>
        <span>
            { title }
        </span>
        <ProgressBar
            percentage={percentage}
            color={color}
        />
    </Wrapper>

}
