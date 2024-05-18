import { usePatientStore } from "../store";
import { PacientType } from "../types";
import PatientDetailItem from "./PatientDetailItem";
import { toast } from 'react-toastify';

type PatiendDetailProps = {
    patient: PacientType
}

function PatientDetail({patient}: PatiendDetailProps) {
    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)
  
    const deletePatientLocal = (id: PacientType['id']) => {
      deletePatient(id)
      toast.error('Paciente eliminado correctamente')
    }
    return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
      <PatientDetailItem label= 'ID' title={patient.id}/>
      <PatientDetailItem label= 'Nombre' title={patient.name}/>
      <PatientDetailItem label= 'Propietario' title={patient.caretaker}/>
      <PatientDetailItem label= 'Fecha Alta' title={patient.date.toString()}/>
      <PatientDetailItem label= 'Sintomas' title={patient.simptoms}/>
      <div className='flex flex-col lg:flex-row justify-between gap-3 mt-10'>
        <button className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold
        uppercase rounded-lg' onClick={() => getPatientById(patient.id)}>
               Editar
        </button>
        <button className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold
        uppercase rounded-lg'
        onClick={() => deletePatientLocal(patient.id)}>
               Eliminar 
        </button>
      </div>
    </div>
  );
}

export default PatientDetail;
