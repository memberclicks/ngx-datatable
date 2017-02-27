export declare class DataTableRowHoverComponent {
    rowHover: any;
    showOnHover: boolean;
    hoverEnabled: boolean;
    enterCallback: Function;
    leaveCallback: Function;
    private enableMouseEvents;
    contextObject: {
        parent: {
            disableHover: () => false;
            enableHover: () => true;
        };
    };
}
