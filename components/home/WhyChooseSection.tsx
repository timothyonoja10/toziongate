
export default function WhyChooseSecton() {
  return (
    <div className="bg-white py-16 max-w-7xl mx-auto px-8">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
        <span className="text-[#222A8C]"> Why Choose </span> 
        <span className="text-[#FF0066]"> Toziongate? </span>
      </h2>
 
      {/* Feature Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 
        border border-gray-300 divide-y md:divide-y-0 md:divide-x 
        divide-dashed divide-gray-300">

        {/* Block 1 */}
        <div className="bg-white p-8 text-center">
          <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
            🎓
          </div>
          <h3 className="text-lg font-semibold text-[#FF0066]">
            Comprehensive Career Support
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            We offer a wide range of services including NHS and HSC job application
            support, professional CV writing, personal statement guidance,
            academic assistance, and postgraduate study support tailored to your
            career goals.
          </p>
        </div>

        {/* Block 2 */}
        <div className="bg-white p-8 text-center">
          <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
            ✔️
          </div>
          <h3 className="text-lg font-semibold text-[#FF0066]">
            UK-Accredited Training
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Our training programs meet UK standards and include accredited courses
            such as Health & Social Care Levels 2–5, Functional Skills Maths and
            English, Door Supervisor, CCTV, and CSCS certifications.
          </p>
        </div>

        {/* Block 3 */}
        <div className="bg-white p-8 text-center">
          <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
            💼
          </div>
          <h3 className="text-lg font-semibold text-[#FF0066]">
            Career & Employment Guidance
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            We support learners and professionals in accessing career opportunities
            within the NHS, health and social care, security sectors, and
            international job markets with expert guidance and preparation.
          </p>
        </div>

        {/* Block 4 */}
        <div className="bg-white p-8 text-center">
          <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
            🌍
          </div>
          <h3 className="text-lg font-semibold text-[#FF0066]">
            Accessibility & Global Reach
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            We believe career growth should be accessible to everyone. Our services
            are affordable and inclusive, with additional support for travel
            guidance to the UK, USA, and Canada.
          </p>
        </div>
      </div>
    </div>
  )
}