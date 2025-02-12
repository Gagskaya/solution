export interface Message {
  id?: string;
  author?: string;
  status?: "refusal" | "invite";
  text: string;
  ps?: string;
  type: "incoming" | "outgoing";
  isCoverLetter?: boolean;
  date: any;
}
