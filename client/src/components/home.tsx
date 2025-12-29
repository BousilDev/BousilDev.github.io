import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Maybe make a database based solution at some point
const CVs = [
  { name: "oliver", path: "/oliver" },
  { name: "other", path: "/other" },
];

const Home = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h3>Welcome to Oliver's CV Site</h3>
      {CVs.map((cv) => (
        <Button key={cv.name} asChild>
          <Link to={cv.path}>{cv.name}</Link>
        </Button>
      ))}
    </div>
  );
};

export default Home;
