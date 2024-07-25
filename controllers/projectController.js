import Project from "../models/project.js";
import { fetchProject } from "../utils/fetchData.js";

class ProjectController {
  async create(req, res) {
    const { key, name, tools } = req.body;
    const gitLink = req.body["git-link"];
    const figmaLink = req.body["figma-link"];
    const projectPreview = req.body["project-preview"];

    const { description, url, homepageUrl, isPrivate, stargazers } =
      await fetchProject(gitLink);

    try {
      const project = new Project({
        key,
        name,
        description,
        tools,
        preview: projectPreview,
        private: isPrivate,
        figma: figmaLink,
        stars: stargazers,
        url,
        homepage: homepageUrl,
      });
      project.save();
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to create project" });
      return;
    }

    res.status(200).json({ success: true });
  }

  async changekey(req, res) {
    const { id } = req.body;

    if (!id || typeof id !== "object") {
      return res.status(400).json({ error: "Invalid input" });
    }

    try {
      const updates = Object.entries(id).map(([id, key]) => ({
        updateOne: {
          filter: { _id: id },
          update: { $set: { key } },
        },
      }));

      const result = await Project.bulkWrite(updates);

      if (result.nModified === 0) {
        return res.status(404).json({ error: "No projects were updated" });
      }

      res
        .status(200)
        .json({ message: "Projects updated successfully", result });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to update project key" });
    }
  }

  async delete(req, res) {
    const { id } = req.body;
    
    if (!id) {
      return res.status(400).json({ error: "Invalid input" });
    }

    try {
      const result = await Project.findByIdAndDelete(id);
      
      if (!result) {
        return res.status(404).json({ error: "Project not found" });
      }
      
      res.status(200).json({ message: "Project deleted successfully" });
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to delete project" });
      return;
    }
  }

  async update(req, res) {
    const { id, project } = req.body;

    if (!id || !project) {
      return res.status(400).json({ error: "Invalid input" });
    }

    try {
      const result = await Project.findByIdAndUpdate(id, {
        name: project.name,
        url: project['git-link'],
        preview: project['project-preview'],
        tools: project.tools,
        figma: project['figma-link']
      }, {new: true});      

      if (!result) {
        return res.status(404).json({ error: "Project not found" });
      }

      res.status(200).json({ message: "Project updated successfully", result });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to update project" });
      return;
    }

  }

  async refresh(req, res) {
    const { id } = req.body;

    try {
      const project = await Project.findById(id);

      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
  
      const url = project.url;
    
      const data = await fetchProject(url);

      const result = await Project.findByIdAndUpdate(
        id,
        {
          description: data.description,
          homepage: data.homepageUrl,
          private: data.isPrivate,
          stargazers: data.stargazers,
        },
        { new: true }
      );

      res.status(200).json({ message: "Projects refreshed successfully", result });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch project data" });
      return;
    }
  }
}

const projectController = new ProjectController();

export default projectController;
