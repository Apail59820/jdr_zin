import { StatTypes } from "../../models/StatTypes";

export const statTranslations: { [key in StatTypes]: string } = {
  strength: "Force",
  constitution: "Constitution",
  perception: "Perception",
  dexterity: "Dextérité",
  intelligence: "Intelligence",
  crafting: "Artisanat",
  magic: "Magie",
  medicine: "Médecine",
  charisma: "Charisme",
  marksman: "Tir",
};
