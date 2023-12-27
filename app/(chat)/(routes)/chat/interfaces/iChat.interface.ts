import { LucideIcon } from "lucide-react";

export interface IChatProps {
    id?: number;
    label: string;
    icon?: LucideIcon;
    href?: string;
    color?: string;
    bgColor?: string;
  }