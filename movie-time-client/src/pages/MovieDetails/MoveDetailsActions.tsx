import React from "react";
import Button from "../../components/Button";
import { useAddToWatchlist } from "../../hooks/useAddToWatchlist";
import { useRemoveFromWatchlist } from "../../hooks/useRemoveFromWatchlist";

interface MoveDetailsActionsProps {
  movieId: string;
  is_watched?: boolean;
}

const MoveDetailsActions: React.FC<MoveDetailsActionsProps> = ({ movieId, is_watched }) => {
  const { mutate: add, isPending: adding } = useAddToWatchlist(movieId);
  const { mutate: remove, isPending: removing } = useRemoveFromWatchlist(movieId);
  const loading = adding || removing;

  if (typeof is_watched === "undefined") return null;
  return (
    <div className="flex justify-end gap-3 ">
      {is_watched ? (
        <Button onClick={() => remove()} disabled={loading} className="font-extrabold bg-yellow-900">
          REMOVE FROM WATCH LIST
        </Button>
      ) : (
        <Button onClick={() => add()} disabled={loading} className="font-extrabold bg-yellow-400">
          ADD TO WATCH LIST
        </Button>
      )}
    </div>
  );
};

export default MoveDetailsActions;
