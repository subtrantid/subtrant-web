export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 mt-0 sm:mt-20">
      <h1 className="font-bold text-lg">About Subtrant</h1>
      <p className="font-semibold">Vision</p>
      <p className="text-center max-w-prose text-sm sm:text-base text-gray-500">
        To bridge the digital gap in education, creating accessible and
        effective technological tools for schools.
      </p>

      <p className="font-semibold">Mission</p>
      <p className="text-center max-w-prose text-sm sm:text-base text-gray-500">
        To provide schools with practical and innovative software solutions,
        built by a collaborative community of student IT enthusiasts. We are
        committed to making technology a more powerful and accessible resource
        for educators and students.
      </p>
    </div>
  );
}
