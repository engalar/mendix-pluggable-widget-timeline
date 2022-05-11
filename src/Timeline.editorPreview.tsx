import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { TimelinePreviewProps } from "../typings/TimelineProps";

declare function require(name: string): string;

export function preview(props: TimelinePreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
