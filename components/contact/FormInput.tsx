
export default function FormInput({ label, name, type = "text" }: any) {
  return (
    <div className="mt-4">
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-[#222A8C]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={`Enter your ${label.toLowerCase()}`}
        className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 focus:border-[#222A8C] focus:outline-none"
      />
    </div>
  );
}