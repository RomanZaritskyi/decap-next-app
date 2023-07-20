export enum PartnershipImageName {
  developer = "developer",
  investor = "investor",
  specialist = "specialist",

  uaf = "uaf",
  partners = "partners",
  mou = "mou",
}

export enum AboutAcceleratorComponentImageNameEnum {
  tank = "tank",
  calendar = "calendar",
  poligons = "poligons",
  experts = "experts",
  codefication = "codefication",
  drone = "drone",
}

export enum ExperienceNATOImageName {
  USA = "USA",
  investor = "investor",
  specialist = "specialist",
  NATO = "NATO",
}

export enum PriorityImageName {
  dron = "dron",
  vhf = "vhf",
  database = "database",
  laptop = "laptop",
  ai = "ai",
  weapon = "weapon",
}

export interface Card {
  cardId?: string;
  cardNumber?: string;
  title: string;
  description: string;
}

export interface AboutAcceleratorCard extends Card {
  imageName?: AboutAcceleratorComponentImageNameEnum;
}

export interface PartnershipCard extends Card {
  imageName?: PartnershipImageName;
}

export interface PriorityCard extends Card {
  imageName: PriorityImageName;
}
