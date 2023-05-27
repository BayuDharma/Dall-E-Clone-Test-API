import { surprisePrompt } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surprisePrompt.length);
  const randomPrompt = surprisePrompt[randomIndex];

  if(randomPrompt === prompt ) return getRandomPrompt(prompt);
  return randomPrompt;
}