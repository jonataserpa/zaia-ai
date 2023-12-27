"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, MessageSquare, ScreenShare, VideoIcon } from "lucide-react";
import { IChatProps } from "@/app/(chat)/(routes)/chat/interfaces/iChat.interface";

type IHomeProps = {
  rows: IChatProps[];
};

const HomePage = ({ rows }: any | IHomeProps) => {
  const router = useRouter();

  function validateIcon(label: string) {
    if (label === "Chat"){
      return (
        <MessageSquare />
      );
    }

    return <VideoIcon />
  }

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Chat AI</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat inteligente com AI - real time
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {rows && rows.length === 0 && (
          <div className="text-muted-foreground font-light text-sm md:text-lg text-center">
            <strong>Carregando dashboard...</strong>
          </div>
        )}

        {rows &&
          rows.map((tool: any) => (
            <div
              key={tool.id}
              onClick={() => router.push(tool.href || "/chat")}
              className="p-8 ring-1 rounded-lg flex items-center justify-between hover:shadow-md transition cursor-pointer"
              data-testid={tool.label}
              id="card"
            >
            
              <div className="flex items-center gap-x-4">
                <div className={tool.bgColor}>
                  <div className={`p-2 w-fit rounded-md ${tool.color}`}>
                    {validateIcon(tool.label)}
                  </div>
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;