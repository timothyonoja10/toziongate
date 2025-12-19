
export default function MapSection() { 
  return(
    <div className="bg-gray-50 max-w-7xl mx-auto px-4">
      <div className="rounded-lg overflow-hidden shadow">
        <iframe title="Toziongate Location" loading="lazy" className="w-full h-[300px] md:h-[400px]"
          src="https://www.google.com/maps?q=Dagenham,Essex,UK&output=embed"/>
      </div>
    </div>
  );
}