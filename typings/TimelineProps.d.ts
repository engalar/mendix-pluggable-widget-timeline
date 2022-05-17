/**
 * This file was generated from Timeline.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";

export interface TimelineContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    attrTitle: ListAttributeValue<string>;
    attrContent: ListAttributeValue<string>;
}

export interface TimelinePreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    datasource: {} | { type: string } | null;
    attrTitle: string;
    attrContent: string;
}
