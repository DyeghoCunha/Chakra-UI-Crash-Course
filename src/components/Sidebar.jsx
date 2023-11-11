import { AtSignIcon, CalendarIcon, CheckIcon, EditIcon } from '@chakra-ui/icons'
import { Flex, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <List color="white"  fontSize={{base:"1.2em",md:"1.2em", sm:"1em"}} gap={2}  display={{ base: "block", md: "block", sm: "flex" }} alignItems="center" justifyContent="space-around">

      <ListItem >
        <ListIcon as={CalendarIcon} color="white" />
        <NavLink to="/" >Dashboard</NavLink>
      </ListItem>

      <ListItem>
        <ListIcon as={EditIcon} color="white" />
        <NavLink to="/create">New Task</NavLink>
      </ListItem>

      <ListItem>
        <ListIcon as={AtSignIcon} color="white" />
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>

      <ListItem>
        <ListIcon as={CheckIcon} color="white" />
        <NavLink to="/cskincard">CSkinCard</NavLink>
      </ListItem>
    </List>
  )

}
