export const playerStep = (players, index, boxLength) => {
    const updatedPlayer = players
          .map((pl, i) => {
            if (i === index) {
              return {
                ...pl,
                current_position: (pl.current_position + 1) % boxLength,
              };
            }
            return pl;
          })
          .sort((a, b) => b.order - a.order);
        return updatedPlayer;
}
