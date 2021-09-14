import {
  VStack,
  Flex,
  Button,
  Input,
  Text,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const MinuteToSecondConversor = () => {
  const [input, setInput] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);

  useEffect(() => {
    const convertMinuteToSecond = () => setConvertedValue(input * 60);
    convertMinuteToSecond();
  }, [input]);

  return (
    <Flex color="white" w="full" h="100vh" justify="center" bg="gray.900">
      <VStack
        bg="gray.800"
        h="full"
        w="full"
        maxWidth="container.sm"
        px="20"
        spacing="4"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="2xl" fontWeight="black" color="green.300">
          MinToSec
        </Text>
        <FormControl>
          <FormLabel>Digite a quantidade de minutos para converter</FormLabel>
          <Input
            type="number"
            w="full"
            value={input}
            onChange={(e) => setInput(+e.target.value)}
          />
        </FormControl>

        <Button
          variant="solid"
          w="full"
          colorScheme="whatsapp"
          onClick={() => setInput(0)}
        >
          Limpar
        </Button>
        <VStack spacing="0">
          <Text fontSize="9xl">{convertedValue}</Text>
          <Text>Segundos</Text>
        </VStack>
      </VStack>
    </Flex>
  );
};
