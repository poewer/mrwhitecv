import ContributionGraph, { type Contribution } from "./ContributionGraph";

const GITHUB_USER = "poewer";
const API_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`;

// Dane o aktywności pobierane po stronie serwera i odświeżane co 6 godzin (ISR)
async function getContributions(): Promise<{ total: number; contributions: Contribution[] } | null> {
  try {
    const res = await fetch(API_URL, { next: { revalidate: 6 * 60 * 60 } });
    if (!res.ok) return null;

    const data = await res.json();
    if (!Array.isArray(data?.contributions)) return null;

    return {
      total: Number(data?.total?.lastYear) || 0,
      contributions: data.contributions as Contribution[],
    };
  } catch {
    return null;
  }
}

export default async function GitHubActivity() {
  const data = await getContributions();

  return (
    <ContributionGraph
      user={GITHUB_USER}
      total={data?.total ?? 0}
      contributions={data?.contributions ?? []}
    />
  );
}
