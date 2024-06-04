import { Container, Text, VStack, Box, Heading, SimpleGrid, GridItem, Flex, Spacer, IconButton, Progress, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaProjectDiagram, FaTasks, FaCheckCircle, FaExclamationTriangle, FaShareAlt } from "react-icons/fa";

const projects = [
  { id: 1, name: "Project Alpha", status: "In Progress", tasksCompleted: 5, totalTasks: 10 },
  { id: 2, name: "Project Beta", status: "Completed", tasksCompleted: 10, totalTasks: 10 },
  { id: 3, name: "Project Gamma", status: "Delayed", tasksCompleted: 3, totalTasks: 10 },
];

const handleShare = (project, method) => {
  const projectDetails = `Project: ${project.name}\nStatus: ${project.status}\nTasks Completed: ${project.tasksCompleted}/${project.totalTasks}`;
  if (method === 'slack') {
    // Logic to share via Slack (this is a placeholder, actual implementation may vary)
    alert(`Sharing to Slack:\n${projectDetails}`);
  } else if (method === 'email') {
    // Logic to share via Email
    window.location.href = `mailto:?subject=Project Details&body=${encodeURIComponent(projectDetails)}`;
  }
};

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex mb={4} alignItems="center">
        <Heading as="h1" size="lg">Project Status Dashboard</Heading>
        <Spacer />
        <IconButton aria-label="Projects" icon={<FaProjectDiagram />} size="lg" />
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {projects.map((project) => (
          <GridItem key={project.id} w="100%">
            <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Flex justifyContent="space-between" alignItems="center">
                <Heading as="h3" size="md" mb={2}>{project.name}</Heading>
                <Menu>
                  <MenuButton as={IconButton} icon={<FaShareAlt />} variant="outline" />
                  <MenuList>
                    <MenuItem onClick={() => handleShare(project, 'slack')}>Share to Slack</MenuItem>
                    <MenuItem onClick={() => handleShare(project, 'email')}>Share via Email</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              <Text>Status: {project.status}</Text>
              <Text>Tasks Completed: {project.tasksCompleted}/{project.totalTasks}</Text>
              <Progress value={(project.tasksCompleted / project.totalTasks) * 100} size="sm" colorScheme="blue" mt={2} />
              <Flex mt={2}>
                {project.status === "Completed" && <FaCheckCircle color="green" />}
                {project.status === "In Progress" && <FaTasks color="blue" />}
                {project.status === "Delayed" && <FaExclamationTriangle color="red" />}
              </Flex>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;