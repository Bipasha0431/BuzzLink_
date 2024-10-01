import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Image,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);

  return (
    <Box display="flex" alignItems="center" w="100%">
      <Box w="3xl" display={{ base: "none", md: "flex" }} h="100vh">
        <Image src={require(".././home.avif")} alt="Dan Abramov" />
      </Box>
      <Container maxW="xl" maxH="100vh">
        <Box
          bg="white"
          w="100%"
          p={4}
          borderRadius="lg"
          borderWidth="1px"
          d="flex"
          flexDirection="column"
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              h="40px"
              w="40px"
              src={require(".././logo.png")}
              alt="Dan Abramov"
            />

            <Text fontSize="3xl" fontFamily="Work sans" as="b" m="10px 0">
              <div>
                BUZZ<span style={{ color: "orange" }}>LINK</span>
              </div>
            </Text>
          </Box>

          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div>
                  <Login />
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <Signup />
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
}

export default Homepage;
