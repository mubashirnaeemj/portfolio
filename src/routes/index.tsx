import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mubashir Naeem Janjua — AI Automation Engineer" },
      {
        name: "description",
        content:
          "AI automation engineer building production voice agents, backend systems, and workflow automations for real business operations.",
      },
    ],
  }),
  component: Portfolio,
});