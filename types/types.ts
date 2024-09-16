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
    name: string,
    imgSrc: StaticImageData,
    iconColor: string,
    category?: string,
}

export interface certificat {
    certificat : StaticImageData,
    certificatHeading : string,
    description : string,
    certificatLink: string
}

export interface project {
    projectImages : StaticImageData[],
    color : string,
    projectName : string,
    projectLink : string
}