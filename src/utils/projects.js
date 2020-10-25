export const filtredProjects = (projects, projectId) => {
    return projects.find(project => project.projectId === projectId)
}