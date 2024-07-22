import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Project {
    id: string;
    type: string;
    title: string;
    titleLink: string;
    titleLinkLabel: string;
    materials?: { path: string }[];
    contents?: string;
}

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

    if (project.type === "pdf") {
        return (
            <main>
                <section className="project">
                    <h3>
                        {project.title}
                        <a href={project.titleLink}>
                            <u>{project.titleLinkLabel}</u>
                        </a>
                    </h3>
                    <iframe
                        src={project.materials ? project.materials[0].path : ""}
                        style={{ width: "100%", height: "100vh" }}
                        scrolling="yes"
                    ></iframe>
                </section>
            </main>
        );
    } else if (project.type === "text") {
        return (
            <main>
                <section className="project" id="emulate">
                    <h3>
                        {project.title}
                        <a href={project.titleLink}>
                            <u>{project.titleLinkLabel}</u>
                        </a>
                    </h3>
                    <p>{project.contents}</p>
                </section>
            </main>
        );
    } else {
        return (
            <main>
                <p>Project not found.</p>
            </main>
        );
    }
};

export default RenderProjectPage;