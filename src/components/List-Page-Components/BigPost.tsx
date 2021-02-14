import { Flex, Heading, Text } from "@chakra-ui/react"
import { useState } from "react"
import VoteButton from "../VoteButton"
import ProfileCard from "../List-Page-Components/ProfileCard"

type Props = {
  category: string
  title: string
  text: string
  date: string
}

const BigPost: React.FC<Props> = ({ category, title, text, date }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <Flex
      w="100%"
      h="266px"
      position="relative"
      borderRadius="10px"
      mb={10}
      bgColor="#E6F8FD"
      _hover={{ bgColor: "#C3F2FF", cursor: "pointer" }}
    >
      <VoteButton />
      <Flex mx={2} direction="column" justifyContent="space-between">
        <Text my={1} fontWeight="bold">
          {category}
        </Text>
        <Flex position="relative">
          <Heading fontSize="28px">{title}</Heading>
          <Flex mx={2} align="flex-end" fontSize="14px">
            <Flex
              _hover={{ textDecoration: "underline" }}
              onMouseOver={() => setShowMore(true)}
              onMouseLeave={() => setShowMore(false)}
              direction="column"
              color="gray"
            >
              <Text>@mehmet sinan topal</Text>
              <Flex hidden={!showMore ? true : false}>
                <ProfileCard />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Text fontSize="18px" mt={1} noOfLines={6}>
          {text}
        </Text>
        <Text color="gray" fontWeight="bold" align="end" mt={2}>
          {date}
        </Text>
      </Flex>
    </Flex>
  )
}

export default BigPost
