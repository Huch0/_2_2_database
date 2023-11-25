const dummy_contacts = [
  {
    student_id: 2,
    lab_id: 1,
  },
];

const dummy_student_profiles = [
  {
    id: 2,
    user_name: "김철수",
    school_id: 1,
    major_id: 1,
  },
];

function ContactCard({ student_id, selectedUser }) {
  const student_profile = dummy_student_profiles.find(
    (profile) => profile.id === student_id
  );

  const handleConfirm = () => {};
  const handleCancel = () => {};
  return (
    <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-1 w-full flex-col justify-between">
      <div className="flex items-start px-4 py-6">
        <div className="">
          <h1 className="text-lg font-semibold">{student_profile.user_name}</h1>
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-gray-900 -mt-1">
              {
                student_profile.school_id /* school_id를 school_name으로 바꾸세요. */
              }
            </h2>
          </div>
          <p className="mt-3 text-gray-700 text-sm">
            {student_profile.major_id}{" "}
            {/* major_id를 major_name으로 바꾸세요. */}
          </p>
        </div>
      </div>
      <div className="flex justify-end space-x-4 p-4">
        <button
          onClick={handleConfirm}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          수락
        </button>
        <button
          onClick={handleCancel}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          거절
        </button>
      </div>
    </div>
  );
}

export default function LabContactList({ data, selectedUser }) {
  return (
    <div className="flex flex-col">
      {dummy_contacts.map((contact) => (
        <ContactCard
          key={contact.student_id}
          student_id={contact.student_id}
          selectedUser={selectedUser}
        />
      ))}
    </div>
  );
}
