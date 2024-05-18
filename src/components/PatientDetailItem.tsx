
type PatientDetailItemProps = {
    label:string,
    title: string
}

function PatientDetailItem({label, title}: PatientDetailItemProps) {
  return (
    <p className='font-bold mb-3 text-gray-700 uppercase'>{label} {': '}
        <span className='font-normal normal-case'>
            {title}
        </span>
      </p>
  );
}

export default PatientDetailItem;
