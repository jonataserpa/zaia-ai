"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/app/lib/utils";
import { IChatProps } from "@/app/(chat)/(routes)/chat/interfaces/iChat.interface";

type IHomeProps = {
  rows: IChatProps[];
};

const HomePage = ({ rows }: any | IHomeProps) => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Chat AI</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat inteligente com AI - os poderes da AI
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
            <Card
              key={tool.id}
              onClick={() => router.push(tool.href)}
              className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
      </div>
    </div>
  );
};

export default HomePage;