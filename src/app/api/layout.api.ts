export async function getSettingsData() {
  const res = await fetch("/api/client/settings");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
