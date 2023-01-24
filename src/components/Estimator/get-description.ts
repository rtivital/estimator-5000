function getComplexityDescription(complexity: number) {
  if (complexity < 3) {
    return 'Ticket has low complexity, it can be done by anyone on the team.';
  }

  if (complexity < 7) {
    return 'Ticket has moderate complexity, it is recommended to be assigned on a team member who has proper context of the project.';
  }

  return 'Ticket has high complexity, it is recommended to be assigned on a middle/senior team member.';
}

function getTediousnessDescription(tediousness: number) {
  if (tediousness < 3) {
    return 'Ticket is not tedious. It will not require repetitive work.';
  }

  if (tediousness < 7) {
    return 'Ticket is moderately tedious. It will require small/medium amount of repetitive work.';
  }

  return 'Ticket is tedious. It will require large amount of repetitive work to complete. If this work can be automated it should be.';
}

export function getDescription({
  complexity,
  tediousness,
}: {
  complexity: number;
  tediousness: number;
}) {
  return `${getComplexityDescription(complexity)} ${getTediousnessDescription(tediousness)}`;
}
