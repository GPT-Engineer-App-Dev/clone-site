import { Container, Text, VStack, Heading } from "@chakra-ui/react";
import { FaStripe } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="#f6f9fc">
      <VStack spacing={4}>
        <FaStripe size="3em" color="#635bff" />
        <Heading as="h1" size="xl" color="#333" textAlign="center">
          Congratulations Lovable Labs Incorporated!
        </Heading>
        <Text fontSize="lg" color="#333" textAlign="center">
          You've just received your first payment through Stripe.
        </Text>
        <Text fontSize="md" color="#333" textAlign="center">
          Your first payout for this payment of <strong>$10.00</strong> (minus any fees) should land in your bank account on <strong>12/28/23</strong>.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;