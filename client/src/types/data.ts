import type React from "react";

export type CVItem = {
  header: string;
  content: string | React.ReactNode;
};

export type ProfileCardProps = {
  name: string;
  title: string;
  handle: string;
  status: string;
  contactText: string;
  avatarUrl?: string;
};

export type GitHubProps = {
  show: boolean;
  repoUrl: string;
};
