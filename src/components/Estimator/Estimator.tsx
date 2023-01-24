import { useState } from 'react';
import { Text, Title, Table, Group, Button } from '@mantine/core';
import { useClipboard, useMove } from '@mantine/hooks';
import { Picker } from './Picker';
import { getStoryPoints } from './get-story-points';
import { getDescription } from './get-description';

export function Estimation() {
  const [value, setValue] = useState({ x: 0, y: 1 });
  const clipboard = useClipboard();
  const { ref } = useMove(setValue);

  const complexity = Math.round(value.x * 8);
  const tediousness = 8 - Math.round(value.y * 8);
  const estimation = Math.max(Math.round(complexity * 0.8 + tediousness * 0.5), 1);
  const storyPoints = getStoryPoints(estimation);

  return (
    <Group noWrap align="flex-start" pt={40} spacing={50} px="xl">
      <Picker value={value} moveRef={ref} />

      <div>
        <Title order={2}>Estimations</Title>
        <Table fontSize="lg" mt="md">
          <tbody>
            <tr>
              <td width={200}>Complexity</td>
              <td>{complexity}</td>
            </tr>
            <tr>
              <td>Tediousness</td>
              <td>{tediousness}</td>
            </tr>
            <tr>
              <td>Story points</td>
              <td>
                <b>{storyPoints}</b>
              </td>
            </tr>
          </tbody>
        </Table>
        <Button
          mt="xl"
          color={clipboard.copied ? 'teal' : undefined}
          onClick={() =>
            clipboard.copy(
              `Complexity: ${complexity}\nTediousness: ${tediousness}\nStory points: ${storyPoints}`
            )
          }
        >
          {clipboard.copied ? 'Estimations copied' : 'Copy estimations'}
        </Button>
        <Title order={2} mt="xl">
          Ticket information
        </Title>
        <Text mt="md" size="lg">
          {getDescription({ complexity, tediousness })}
        </Text>
      </div>
    </Group>
  );
}
