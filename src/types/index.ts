// This file exports TypeScript types and interfaces used throughout the application.

export interface Course {
    id: number;
    title: string;
    description: string;
    level: 'Pré-Escolar' | 'Ensino Primário' | 'Ensino Secundário';
}

export interface NewsArticle {
    id: number;
    title: string;
    date: string;
    summary: string;
    content: string;
    imageUrl?: string;
}

export interface EnrollmentFormData {
    studentName: string;
    age: number;
    desiredLevel: 'Pré-Escolar' | 'Ensino Primário' | 'Ensino Secundário';
    guardianName: string;
    contactNumber: string;
    email?: string;
    additionalMessage?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}