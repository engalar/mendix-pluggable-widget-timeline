import { createElement, useMemo } from "react";
import { TimelineContainerProps } from "../typings/TimelineProps";
import { ValueStatus } from "mendix";

export default function (props: TimelineContainerProps) {
    console.log(eval("{a:1}"));
    const value = useMemo(() => {
        if (props.attribute && props.attribute.status === ValueStatus.Available) {
            return props.attribute.value;
        }
    }, [props.attribute]);

    return (
        <div>
            hello {props.sampleText} and your value is {value}
        </div>
    );
}
