import { ResponsiveBar } from '@nivo/bar'
import styled from "styled-components";
import { ColorSchema } from "@/config";

const BarChart = (props) => (
    <ResponsiveBar
        data={props.data}
        keys={props.keys}
        indexBy={props.indexBy}
        margin={props.margin}
        padding={props.padding}
        valueScale={props.valueScale}
        indexScale={props.indexScale}
        colors={props.colors}
        defs={props.defs}
        fill={props.fill}
        borderColor={props.borderColor}
        axisTop={props.axisTop}
        axisRight={props.axisRight}
        axisBottom={props.axisBottom}
        axisLeft={props.axisLeft}
        labelSkipWidth={props.labelSkipWidth}
        labelSkipHeight={props.labelSkipHeight}
        labelTextColor={props.labelTextColor}
        legends={props.legends}
        animate={props.animate}
        motionStiffness={props.motionStiffness}
        motionDamping={props.motionDamping}
        minValue={props.minValue}
        maxValue={props.maxValue}
        layout={props.layout}
        groupMode={props.groupMode}
        gridXValues={props.gridXValues}
        gridYValues={props.gridYValues}
    />
)

export default BarChart;