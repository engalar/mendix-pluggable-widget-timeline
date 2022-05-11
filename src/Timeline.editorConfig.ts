import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { TimelinePreviewProps } from "../typings/TimelineProps";

export function getProperties(
    values: TimelinePreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: TimelinePreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
