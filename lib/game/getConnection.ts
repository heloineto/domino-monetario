const getConnection = (domino: Domino, edge: Edge | null): Connection => {
  if (domino[0] === domino[1]) {
    if (!edge || domino[0] === edge.value) {
      return {
        connects: true,
        rotation: 0,
        edge,
      };
    }

    return { connects: false, rotation: 0, edge };
  }

  if (!edge || domino[0] === edge.value) {
    return {
      connects: true,
      rotation: edge?.position === 'start' ? 90 : -90,
      edge,
    };
  }

  if (!edge || domino[1] === edge.value) {
    return {
      connects: true,
      rotation: edge.position === 'start' ? -90 : 90,
      edge,
    };
  }

  return { connects: false, rotation: 90, edge };
};

export default getConnection;
