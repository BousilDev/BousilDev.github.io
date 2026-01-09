import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { GitHubCalendar } from "react-github-calendar";
import type { GitHubRepo } from "@/types/data";

function GitHubRepos({ repoUrl }: { repoUrl: string }) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const username = repoUrl.split("github.com/")[1];

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
    )
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return repos.length === 0 ? (
    <p>Loading repositories...</p>
  ) : (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => {
          const date = new Date(repo.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });
          return (
            <Card key={repo.id} className="bg-background/50 backdrop-blur">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-primary">
                    <Link
                      to={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {repo.name}
                    </Link>
                    <span className="text-xs text-muted-foreground italic">
                      {" "}
                      - Created {date}
                    </span>
                  </CardTitle>
                  <Badge variant="outline">{repo.language}</Badge>
                </div>
                <CardDescription>{repo.description}</CardDescription>
                <div className="text-xs text-muted-foreground pt-2">
                  ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
      <Card className="p-6 bg-background/50 backdrop-blur border-muted">
        <CardHeader className="px-0 pt-0">
          <CardTitle className="text-lg">GitHub Contribution History</CardTitle>
        </CardHeader>

        <div className="flex justify-center overflow-hidden">
          <GitHubCalendar
            username={username}
            blockSize={12}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </Card>
    </div>
  );
}

export default GitHubRepos;
