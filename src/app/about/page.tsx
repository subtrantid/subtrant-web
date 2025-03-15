export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 max-w-3xl mx-auto">
      <h1 className="font-bold text-2xl sm:text-3xl">About Subtrant</h1>
      
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 w-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500 transform hover:-translate-y-1">
        <p className="font-semibold text-xl mb-3 text-blue-500">Vision</p>
        <p className="text-sm sm:text-base text-gray-400">
          To bridge the digital gap in education, creating accessible and
          effective technological tools for schools.
        </p>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 w-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500 transform hover:-translate-y-1">
        <p className="font-semibold text-xl mb-3 text-blue-500">Mission</p>
        <p className="text-sm sm:text-base text-gray-400">
          To provide schools with practical and innovative software solutions,
          built by a collaborative community of student IT enthusiasts. We are
          committed to making technology a more powerful and accessible resource
          for educators and students.
        </p>
      </div>
    </div>
  );
}
