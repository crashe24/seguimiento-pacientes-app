
export type PacientType = {
    id:string,
    name:string,
    email:string,
    date: Date,
    caretaker:string,
    simptoms: string
}

export type DraftPatientType = Omit<PacientType,'id'>