
import { CheckIcon, EditIcon, Icon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, HStack, Heading, IconButton, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";


export default function Dashboard() {
  const tasks = useLoaderData()


  return (
    <SimpleGrid spacing={10} minChildWidth="300px" >
      <Card bgColor="bgCard" w="300px">
        <CardHeader color="white" p="10px 20px 0px 20px">
          <HStack justifyContent="space-between" alignItems="top">
            <VStack alignItems="self-start">
              <Heading fontSize="18px" >Glock-18|Neo-Noir</Heading>
              <Text fontSize="14px">Pistola (Oculto)</Text>
              <Text p="2px 8px" borderRadius="8px" backgroundColor="bgUse">Bem Desgastada</Text>
            </VStack>
            <VStack>
              <Text fontWeight="bold" p="2px 8px" borderRadius="8px" backgroundColor="green">-35%</Text>
            </VStack>
          </HStack>
        </CardHeader>

        <CardBody p="0px 10px">
          <Image m="0px" p="0px" src="/img/1.png" zIndex="0" />
          <HStack p="0px" m="0px" justifyContent="center" zIndex="1" >
            <Image w="50px" src="/img/ad21.png" />
            <Image w="50px" src="/img/ad22.png" />
            <Image w="50px" src="/img/ad23.png" />
            <Image w="50px" src="/img/ad24.png" />
          </HStack>
          <VStack color="white" gap={0}>
            <Heading fontWeight="bold" m={"10px 0px 0px 0px"} fontSize="20px" >R$10,32</Heading>
            <Text m={"0px 0px 10px 0px"} fontSize="12px">Steam: R$12,30</Text>
          </VStack>
          <HStack justifyContent="center">
                <Button leftIcon={<EditIcon />} colorScheme="orange" >Adicionar ao Carrinho</Button>
          </HStack>
        </CardBody>
        <CardFooter justifyContent="center">
          <HStack >
            <Icon>{<CheckIcon color="green"/>}</Icon>
            <Text color="green" fontSize="12px" fontWeight="bold">Disponível Imediatamente</Text>
          </HStack>

          
        </CardFooter>
      </Card>

    </SimpleGrid>
  )
}

export const tastksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
}
