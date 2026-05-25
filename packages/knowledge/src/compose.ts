import { hubKnowledge } from "./hub";
import { buildKnowledge } from "./build";
import { defendKnowledge } from "./defend";

export type PortfolioSite = "hub" | "build" | "defend";

export function getKnowledgeForSite(site: PortfolioSite): string {
  switch (site) {
    case "hub":
      return [hubKnowledge, buildKnowledge, defendKnowledge].join(
        "\n\n---\n\n",
      );
    case "build":
      return [hubKnowledge, buildKnowledge].join("\n\n---\n\n");
    case "defend":
      return [hubKnowledge, defendKnowledge].join("\n\n---\n\n");
    default:
      return hubKnowledge;
  }
}
