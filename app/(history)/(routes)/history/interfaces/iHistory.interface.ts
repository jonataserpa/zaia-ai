import { LucideIcon } from "lucide-react";

export interface IHistoryProps {
    id?: number;
    message: string;
    response: string;
    type?: number;
    createdAt: Date;
  }