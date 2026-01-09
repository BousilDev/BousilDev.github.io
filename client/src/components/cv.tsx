import ProfileCard from "@/components/ui/ProfileCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CVItem, ProfileCardProps, GitHubProps } from "@/types/data";
import GitHubRepos from "@/components/github-repos";

const Cv = ({
  profileCardProps,
  CVData,
  githubProps,
}: {
  profileCardProps: ProfileCardProps;
  CVData: CVItem[];
  githubProps: GitHubProps;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        paddingTop: "30px",
      }}
    >
      <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
        <ProfileCard
          showUserInfo
          enableMobileTilt
          {...profileCardProps}
          onContactClick={() => console.log("Contact button clicked")}
          behindGlowEnabled={false}
        />
        <div className="rounded-xl border bg-card/50 text-card-foreground shadow-lg backdrop-blur p-6 w-full max-w-md">
          <Accordion type="multiple" className="w-full">
            {CVData.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{item.header}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      {githubProps && githubProps.show && (
        <div>
          <GitHubRepos repoUrl={githubProps.repoUrl} />
        </div>
      )}
    </div>
  );
};

export default Cv;
