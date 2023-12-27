import { MessageSquare, VideoIcon } from "lucide-react";
import { IChatProps } from "./app/(chat)/(routes)/chat/interfaces/iChat.interface";

export const tools: IChatProps[] = [
  {
    id: 1,
    label: 'Chat',
    icon: MessageSquare,
    href: '/chat',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    id: 2,
    label: 'Geração de Vídeo',
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/video',
  }
];
