import { SelectChangeEvent } from "@mui/material/Select";

import { ChangeEvent } from "react";
import { Control, FieldErrors } from "react-hook-form";

export enum ApplicationFieldNames {
  fio = "fio",
  address = "address",
  passport = "passport",
  projectName = "projectName",
  projectSubject = "projectSubject",
  projectOwner = "projectOwner",
  passportId = "passportId",
  publicLink = "publicLink",
  trl = "trl",
  teamQuantity = "teamQuantity",
  testingType = "testingType",
  techAdvantages = "techAdvantages",
  economicAdvantages = "economicAdvantages",
  massManufactoring = "massManufactoring",
  investors = "investors",
}

interface DropzoneControl {
  value: File[] | null;
  handler: (value: File[] | null) => void;
}

interface DropzoneControls {
  testing: DropzoneControl;
  specifications: DropzoneControl;
  techAdvantages: DropzoneControl;
  economicAdvantages: DropzoneControl;
  additional: DropzoneControl;
}

export interface SpecificationsDropzoneProp {
  dropzoneControl: Pick<
    DropzoneControls,
    "testing" | "specifications" | "techAdvantages" | "economicAdvantages"
  >;
}

export interface ManufactureDropzoneProp {
  dropzoneControl: Pick<DropzoneControls, "additional">;
}

export interface SelectDataSource {
  name: string;
  value: string;
}

export interface ApplicationField {
  [ApplicationFieldNames.fio]: string;
  [ApplicationFieldNames.address]: string;
  [ApplicationFieldNames.passport]: string;
  [ApplicationFieldNames.projectName]: string;
  [ApplicationFieldNames.projectSubject]: SelectDataSource;
  [ApplicationFieldNames.projectOwner]: string;
  [ApplicationFieldNames.passportId]: string;
  [ApplicationFieldNames.publicLink]: string;
  [ApplicationFieldNames.trl]: SelectDataSource;
  [ApplicationFieldNames.teamQuantity]: string;
  [ApplicationFieldNames.testingType]: SelectDataSource;
  [ApplicationFieldNames.techAdvantages]?: string;
  [ApplicationFieldNames.economicAdvantages]?: string;
  [ApplicationFieldNames.massManufactoring]: SelectDataSource;
  [ApplicationFieldNames.investors]: SelectDataSource;
}

export type ApplicationControlType = Control<ApplicationField>;
export type ApplicationErrorsType = FieldErrors<ApplicationField>;

export interface ApplicationFormControlProps {
  control: ApplicationControlType;
  errors: ApplicationErrorsType;
}

export interface InputPropsType extends ApplicationFormControlProps {
  fieldName: ApplicationFieldNames;
  placeholder: string;
  labelText: string;
  subtitle?: string;
  disabled?: boolean;
  type?: string;
  filledBackgroung?: boolean;
}

export interface SelectPropsType extends ApplicationFormControlProps {
  dataSourse: SelectDataSource[];
  fieldName: ApplicationFieldNames;
  placeholder: string;
  labelText: string;
  subtitle?: string;
  filledBackgroung?: boolean;
}

export interface FieldError {
  fio: boolean;
  address: boolean;
  passport: boolean;
  projectName: boolean;
  projectSubject: boolean;
  projectOwner: boolean;
  passportId: boolean;
  publicLink: boolean;
  trl: boolean;
  teamQuantity: boolean;
  testingType: boolean;
  investors: boolean;
  massManufactoring: boolean;
}

export interface ApplicationFormDTO {
  lead_name: string;
  contact: {
    first_name: string;
    middle_name: string;
    second_name: string;
    phone: string;
    email: string;
    place_of_residence: string;
    o: string;
    unzr: string;
  };
  project_type: string;
  project_name: string;
  project_subject: string;
  intellectual_property_owner: string;
  owner_id: string;
  owner_public_profile: string;
  staff_number: number;
  trl: string;
  tested_type: string;
  tested_type_file: {
    datas: string;
    name: string;
  };
  tech_advantages?: string;
  tech_advantages_file: {
    datas: string;
    name: string;
  };
  economic_advantages?: string;
  economic_advantages_file: {
    datas: string;
    name: string;
  };
  is_possible_serial_prod: boolean;
  has_financiers: boolean;
  performance_characteristics: {
    datas: string;
    name: string;
  };
  additional_project_materials: {
    datas: string;
    name: string;
  };
}
