import { profile } from "../data/profile";
import type { Project } from "../types";

export function getAllProjects(): Project[] {
  return profile.projects;
}

export function getProjectBySlug(slug: string): Project | null {
  return profile.projects.find((project) => project.slug === slug) ?? null;
}
