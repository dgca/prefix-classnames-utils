import "./styles.css";

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function ExampleChild({ className }: { className?: string }) {
  return <div className={cn("bg-red-500 p-2", className)}>Child</div>;
}

const textColors = {
  red: "text-red-500",
};

const isPurple = true;

export default function App() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold mb-4">Prefix Classnames Test</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Regular Tailwind classes */}
        <div className="bg-blue-100 p-3">
          <p className="text-blue-800">Regular classes</p>
        </div>

        {/* Using cn utility with string literals */}
        <div className={cn("bg-green-100 p-3")}>
          <p className="text-green-800">cn utility</p>
        </div>

        {/* Using cn utility with conditional classes */}
        <div className={cn("p-3", isPurple ? "bg-purple-100" : "bg-gray-100")}>
          <p className="text-purple-800">Conditional classes</p>
        </div>

        {/* Using textColors object */}
        <div className="bg-gray-100 p-3">
          <p className={cn("text-gray-800", textColors.red)}>
            Text colors object
          </p>
        </div>

        {/* Using ExampleChild component */}
        <div className="bg-gray-100 p-3">
          <p className="text-gray-800 mb-2 text-[1.15rem] leading-[1.75]">
            Component with className prop
          </p>
          <ExampleChild className="border border-red-300" />
          <ExampleChild
            className={cn(
              "border border-red-300",
              `bg-red-500`,
              `p-${Math.random() > 0.5 ? "2" : "4"}`,
            )}
          />
        </div>

        {/* Using template strings */}
        <div
          className={`bg-blue-100 p-3 ${isPurple ? "border-purple-500" : "border-blue-500"} border rounded-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.1)]`}
        >
          <p className="text-blue-800">Template strings</p>
        </div>
      </div>
    </div>
  );
}
