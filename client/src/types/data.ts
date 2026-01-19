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
  email: string;
  avatarUrl: string;
  iconUrl?: string;
  grainUrl?: string;
};

export type GitHubProps = {
  show: boolean;
  repoUrl: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
};
