import Project from "../models/project.js";
import { fetchProject, fetchProjectData } from "../utils/fetchData.js";
import fs from 'fs';
import path from "path";
import { __rootDir } from "../utils/constant.js";


class ProjectController {
  constructor() {
    this.update = this.update.bind(this);
    this.create = this.create.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  async _findVideo(videoPath) {
    return await new Promise((resolve, reject) => {
      const fullPath = path.join(__rootDir, `/views/portfoliovideo/${videoPath}.mp4`);
      (fullPath);
      fs.access(fullPath, fs.constants.F_OK, (err) => {
        if (err) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
  async create(req, res) {
    const { key, name, tools } = req.body;
    const gitLink = req.body["git-link"];
    const figmaLink = req.body["figma-link"];
    const projectPreview = req.body["project-preview"];

    const project = Project.find({ name });

    if (project.length) {
      return res.status(400).json({ error: "Project already exists" });
    }

    const { description, url, homepageUrl, isPrivate, stargazers } =
      await fetchProject(gitLink);

    const hasVideo = await this._findVideo(projectPreview);



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
        hasvideo: hasVideo,
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
    const projectPreview = project['project-preview'];

    if (!id || !project) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const hasVideo = await this._findVideo(projectPreview);


    try {
      const result = await Project.findByIdAndUpdate(id, {
        name: project.name,
        url: project['git-link'],
        preview: projectPreview,
        tools: project.tools,
        figma: project['figma-link'],
        hasvideo: hasVideo
      }, { new: true });


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
    const { id } = req.params;


    try {
      const project = await Project.findById(id);

      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }

      const url = project.url;

      const data = await fetchProject(url);

      const hasVideo = await this._findVideo(project.preview);
      
      const result = await Project.findByIdAndUpdate(
        id,
        {
          description: data.description,
          homepage: data.homepageUrl,
          private: data.isPrivate,
          stars: data.stargazers,
          hasvideo: hasVideo
        },
        { new: true }
      );

      res.status(200).json({ message: "Projects refreshed successfully", result });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch project data" });
    }
  }

  async getProjects(req, res) {
    const { page } = req.params;

    if (!page) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const project = await fetchProjectData(page);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  }

  async getProject(req, res) {
    const { key } = req.params;

    if (!key) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const project = await Project.findOne({ key });

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  }
}

const projectController = new ProjectController();

export default projectController;
