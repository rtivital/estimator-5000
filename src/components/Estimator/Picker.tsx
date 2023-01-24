import { Flex, Text, Box, useMantineTheme, Center } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons';

interface PickerProps {
  value: { x: number; y: number };
  moveRef: React.ForwardedRef<HTMLDivElement>;
}

export function Picker({ value, moveRef }: PickerProps) {
  const theme = useMantineTheme();
  return (
    <Flex
      p={15}
      w={630}
      h={630}
      sx={{
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        position: 'relative',
      }}
    >
      <Text
        fz="sm"
        sx={{
          position: 'absolute',
          zIndex: 1,
          right: 10,
          top: 10,
        }}
      >
        Very complex and very tedious
      </Text>
      <Text
        fz="sm"
        sx={{
          position: 'absolute',
          zIndex: 1,
          right: 10,
          bottom: 10,
        }}
      >
        Very complex and not tedious
      </Text>
      <Text
        fz="sm"
        sx={{
          position: 'absolute',
          zIndex: 1,
          left: 10,
          bottom: 10,
        }}
      >
        Simple and not tedious
      </Text>
      <Text
        fz="sm"
        sx={{
          position: 'absolute',
          zIndex: 1,
          left: 10,
          top: 10,
        }}
      >
        Simple and very tedious
      </Text>
      <Text
        fz="sm"
        pos="absolute"
        sx={{
          pointerEvents: 'none',
          top: 630 / 2 - 25,
          left: 10,
          zIndex: 1,
          userSelect: 'none',
        }}
      >
        <Center>
          <div>Complexity</div> <IconArrowRight width={16} style={{ marginLeft: 5 }} />
        </Center>
      </Text>

      <Text
        fz="sm"
        pos="absolute"
        sx={{
          left: 630 / 2 - 65,
          bottom: 50,
          transform: 'rotate(-90deg)',
          zIndex: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <Center>
          <div>Tediousness</div> <IconArrowRight width={16} style={{ marginLeft: 5 }} />
        </Center>
      </Text>

      <Box
        h={630}
        w={3}
        pos="absolute"
        sx={{
          top: 0,
          bottom: 0,
          left: 630 / 2 - 1.5,
          backgroundColor: theme.black,
          opacity: 0.3,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <Box
        w={630}
        h={3}
        pos="absolute"
        sx={{
          left: 0,
          right: 0,
          top: 630 / 2 - 1.5,
          backgroundColor: theme.black,
          opacity: 0.3,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <Box
        w={600}
        h={600}
        ref={moveRef}
        sx={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          position: 'relative',
        }}
      >
        <Box
          w={30}
          h={30}
          sx={{
            position: 'absolute',
            left: `calc(${value.x * 100}% - 15px)`,
            top: `calc(${value.y * 100}% - 15px)`,
            backgroundColor: theme.fn.primaryColor(),
            zIndex: 10,
            borderRadius: 30,
          }}
        />
      </Box>
    </Flex>
  );
}
