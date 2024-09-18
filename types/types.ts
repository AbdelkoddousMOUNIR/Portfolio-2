import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface AppContextProps {
    selectedItem: string;
    modifySelectedItem: (item: string) => void;
}

export interface AppContextProviderProps {
    children: ReactNode;
}

export interface skill {
    title: string,
    skillImage: StaticImageData | string,
    description: string,
    technologiesImages: (string | StaticImageData)[];
    colors: [string , string]
}

export interface certificat {
    certificat : StaticImageData,
    certificatHeading : string,
    description? : string,
    certificatLink: string
}

export interface project {
    projectImage : StaticImageData | string,
    projectName : string,
    projectLink : string
}