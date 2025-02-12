export interface Message {
  id: number;
  author?: string;
  status?: "refusal" | "invite";
  text: string;
  ps?: string;
  type: "incoming" | "outgoing";
  isCoverLetter?: boolean;
}
