import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Project } from "../utils/interfaces";

const RenderProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const response = await fetch("../data.json");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                const project = data.projects.find((project: Project) => project.id === id);
                setProject(project || null);
            } catch (error) {
                setError("Failed to load project data.");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProjectData();
        }
    }, [id]);
    
    useEffect(() => {
        if (project?.title) {
            document.title = `${project.title} | Blake Prall`;
        }
    }, [project]);

    if (loading) {
        return (
            <main>
                <p>Loading...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main>
                <p>{error}</p>
            </main>
        );
    }

    if (!project) {
        return (
            <main>
                <p>Project not found.</p>
            </main>
        );
    }

    return (
        <main>
            <section className="project" id={project.type}>
                <h3>
                    {project.title}
                    <a href={project.titleLink} target='_blank'>
                        <u>{project.titleLinkLabel}</u>
                    </a>
                </h3>
                {project.type === "pdf" ? (
                    <iframe
                        src={project.materials ? project.materials[0].path : ""}
                        style={{ width: "100%", height: "100vh" }}
                        scrolling="yes"
                    ></iframe>
                ) : (
                    <div className="project-text-container">
                        <div className='project-text' dangerouslySetInnerHTML={{ __html: project.contents || '' }} />
                    </div>
                )}
            </section>
        </main>
    );
};

export default RenderProjectPage;
