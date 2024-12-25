import SearchRepos from "./search-repos";
import Header from "./_shared/header";
import { Badge } from "@/components/ui/badge";

function App() {
  return (
    <>
      <Header></Header>
      <div className="px-6 relative min-h-screen">
        <SearchRepos></SearchRepos>
        <div className="fixed bottom-4 right-4 z-50">
          <Badge
            variant="outline"
            className="bg-white/90 backdrop-blur-md border-blue-500 text-blue-700 hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2 shadow-lg py-1 px-3 rounded-full"
          >
            <span className="text-sm">Powered by</span>
            <span className="font-bold text-sm">Windsurf AI</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles text-blue-500"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/>
            </svg>
          </Badge>
        </div>
      </div>
    </>
  );
}

export default App;
