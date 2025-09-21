// Define all TypeScript interfaces related to the project. Start by creating placeholder interfaces for CardProps and ButtonProps.

export interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    };
    image: string;
    discount: string | number;
}

export interface PillProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}
export interface CardProps {
    image: string;
    name: string;
    price: number;
    rating: number;
}

export interface CardProps {
    title: string;
    description: string;
}

export interface ButtonProps {
    label: string;
    onClick: () => void;
}