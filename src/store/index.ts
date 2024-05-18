import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import {DraftPatientType, PacientType} from '../types'
import {v4 as uuidv4} from 'uuid'

type PatientState = {
    patients: PacientType[]
    activeId : PacientType['id']
    addPatient: (data: DraftPatientType) => void
    deletePatient: (id: PacientType['id']) => void
    getPatientById: (id: PacientType['id']) => void
    updatePatient: (data: DraftPatientType ) => void
}

const createPatient = (patient: DraftPatientType): PacientType => {
    return {...patient, id: uuidv4()}
} 
export const usePatientStore = create<PatientState>()(
    devtools(
      persist (
          (set) =>({
              patients: [],
              activeId: '',
              addPatient: (data) => {
                  //console.log('data', data)
                  const newPatient = createPatient(data)
                  set( (state) => ({
                      patients: [...state.patients, newPatient ]
                  }))
  
              },
              deletePatient: (id ) => {
                  set( (state) => ({
                      patients: state.patients.filter(pat => pat.id !== id)
                  }))
              },
              getPatientById: (id) => {
                  set( () => ({
                      activeId: id
                  }))
              },
              updatePatient: (data) => {
                  set((state) => ({
                         patients: state.patients.map( p => p.id === state.activeId ? {
                          id: state.activeId,
                          ...data
                         }: p), 
                         activeId: ''
                  }))
              }
          })
          , {
            name: 'patient-storage',
            //storage: createJSONStorage( () => sessionStorage) o localStorage que es el por defecto
          }
      )
    )
)