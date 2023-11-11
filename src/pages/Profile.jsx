import { ChatIcon, EmailIcon, StarIcon } from "@chakra-ui/icons";
import { TabList, TabPanels, Tabs, Tab, TabPanel, List, ListIcon, ListItem } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclose">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }} borderRadius={"10px 10px 0px 0px"}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }} borderRadius={"10px 10px 0px 0px"}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, expedita.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, expedita.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit.
            </ListItem>
          </List>
           <List>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, expedita.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit.
            </ListItem>
          </List>
           <List>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, expedita.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit.
            </ListItem>
          </List> 
        </TabPanel>

      </TabPanels>
    </Tabs>
  )
}
