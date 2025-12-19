
export default function SocialLink({ icon, label }: any) {
  return (
    <a href="#" aria-label={label}
      className="flex items-center gap-2 rounded-lg bg-white 
       px-4 py-2 shadow transition hover:-translate-y-1">
      {icon}
      {/* <span>{label}</span> */}
    </a>
  );
}