import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    });
  }

  function handleDeleteTask(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      };
    });
  }
  //start adding process
  function handleStartAddProject() {
    //null: we're adding new project , undefined: nothing
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }
  // finish adding project
  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  function handleCancelProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    });
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }


  function handleDeleteProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    });
  }

  let selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject
    project={selectedProject}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectsState.tasks} />

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="md:h-screen my-4 md:my-8 flex flex-col md:flex-row gap-4 md:gap-8">
      <ProjectsSidebar projects={projectsState.projects} onStartAddProject={handleStartAddProject} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;
