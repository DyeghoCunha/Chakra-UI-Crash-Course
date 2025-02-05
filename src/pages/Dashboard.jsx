import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";



export default function Dashboard() {
  const tasks = useLoaderData()


  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks && tasks.map(task => (
        <Card key={task.id} borderTop="8px" borderColor="purple.400" bgColor="white">
          <CardHeader>
            <Flex gap={5}>
          <Avatar src={task.img}/> 
              <Box>
                <Heading as="h3" size="sm">{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Text>{task.description}</Text>
          </CardBody>
          <Divider borderColor="lightgray"/>
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
            </HStack>
          </CardFooter>

        </Card>
      ))}

    </SimpleGrid>
  )
}

export const tastksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
}
