import { Table } from "./table.model";

export interface Segment {
    id: number;
    title: string;
    icon: string;
    table: Table[];
}