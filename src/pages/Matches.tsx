import { Fixtures } from "@/components/fixtures/Fixtures";
import { useMatches } from "@/context/Matches";

export const Matches = () => {
  const { groupedMatches, loading, error, refetch } = useMatches();
  return (
    <Fixtures
      groupedMatches={groupedMatches}
      loading={loading}
      error={error}
      isLive={false}
      refetch={refetch}
    />
  );
};
