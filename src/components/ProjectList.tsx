import { Badge, Card } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { projects } from '../data/data';
import './ProjectList.css';

export default function ProjectList() {
    return (
        <section id="projects" className="my-5">
            <h2 className="text-center mb-5">制作物</h2>
            <div className="row g-4">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-6">
                        <Card className="h-100 project-card shadow-sm">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title as="h5" className="mb-3">{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <div className="mt-auto">
                                    <div className="mb-3">
                                        {project.tags.map(tag => (
                                            <Badge pill bg="secondary" className="me-1" key={tag}>
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Card.Link href={project.link} target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="me-1" /> GitHub レポジトリ
                                    </Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}