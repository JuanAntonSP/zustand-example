import { Flex, Text, Button, Heading } from "@radix-ui/themes";
import { useCounterStore } from "../../store";

export const Home = () => {
  const { count, inc } = useCounterStore();

  const handleoOnClick = () => {
    inc();
  };

  return (
    <Flex direction="column" gap="6">
      <Heading>Contador</Heading>
      <Text>Valor: {count}</Text>
      <Button onClick={handleoOnClick}>Incrementar</Button>
    </Flex>
  );
};
